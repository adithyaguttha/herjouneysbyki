import "server-only";
import { createHash } from "crypto";
import { getSupabaseAdmin } from "@/lib/supabase/server";
import { getPostBySlug } from "@/data/posts";
import type { CommentThread, PublicComment } from "./types";

const NAME_MAX = 60;
const BODY_MAX = 2000;
const EMAIL_MAX = 254;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Per-IP rate limit: at most RATE_MAX inserts within RATE_WINDOW_MS.
const RATE_MAX = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;

export interface CreateCommentInput {
  postSlug: unknown;
  parentId?: unknown;
  authorName: unknown;
  authorEmail?: unknown;
  body: unknown;
  honeypot?: unknown;
  ip: string | null;
}

export type CreateResult =
  | { ok: true; comment: PublicComment }
  | { ok: false; status: number; error: string }
  // Honeypot tripped: pretend success so bots don't learn anything.
  | { ok: true; comment: null };

function str(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

function hashIp(ip: string | null): string | null {
  if (!ip) return null;
  return createHash("sha256").update(ip).digest("hex");
}

/** Map a DB row to the public shape (drops email + ip_hash). */
function toPublic(row: {
  id: string;
  post_slug: string;
  parent_id: string | null;
  author_name: string;
  body: string;
  is_deleted: boolean;
  created_at: string;
}): PublicComment {
  return {
    id: row.id,
    postSlug: row.post_slug,
    parentId: row.parent_id,
    authorName: row.author_name,
    body: row.body,
    isDeleted: row.is_deleted,
    createdAt: row.created_at,
  };
}

const PUBLIC_COLS = "id, post_slug, parent_id, author_name, body, is_deleted, created_at";

/**
 * Fetch all comments for a post as top-level threads with one level of replies.
 * Deleted comments that still have visible replies render as "[removed]";
 * deleted leaves are omitted entirely.
 */
export async function getThreadsForPost(postSlug: string): Promise<CommentThread[]> {
  const supabaseAdmin = getSupabaseAdmin();
  const { data, error } = await supabaseAdmin
    .from("comments")
    .select(PUBLIC_COLS)
    .eq("post_slug", postSlug)
    .order("created_at", { ascending: true });

  if (error) throw new Error(error.message);

  const rows = (data ?? []).map(toPublic);
  const tops = rows.filter((r) => r.parentId === null);
  const repliesByParent = new Map<string, PublicComment[]>();
  for (const r of rows) {
    if (r.parentId) {
      const list = repliesByParent.get(r.parentId) ?? [];
      list.push(r);
      repliesByParent.set(r.parentId, list);
    }
  }

  const threads: CommentThread[] = [];
  for (const top of tops) {
    const replies = (repliesByParent.get(top.id) ?? []).filter((r) => !r.isDeleted);
    // Hide a deleted top-level comment only when it has no surviving replies.
    if (top.isDeleted && replies.length === 0) continue;
    threads.push({ ...top, replies });
  }
  return threads;
}

export async function createComment(input: CreateCommentInput): Promise<CreateResult> {
  // Honeypot: a hidden field real users never fill. If present, drop silently.
  if (str(input.honeypot)) return { ok: true, comment: null };

  const supabaseAdmin = getSupabaseAdmin();
  const postSlug = str(input.postSlug);
  const authorName = str(input.authorName);
  const authorEmail = str(input.authorEmail);
  const body = str(input.body);
  const parentId = str(input.parentId) || null;

  if (!getPostBySlug(postSlug)) {
    return { ok: false, status: 400, error: "Unknown post." };
  }
  if (authorName.length < 1 || authorName.length > NAME_MAX) {
    return { ok: false, status: 400, error: "Please enter a name (under 60 characters)." };
  }
  if (body.length < 1 || body.length > BODY_MAX) {
    return { ok: false, status: 400, error: "Comment must be between 1 and 2000 characters." };
  }
  if (authorEmail && (authorEmail.length > EMAIL_MAX || !EMAIL_RE.test(authorEmail))) {
    return { ok: false, status: 400, error: "Please enter a valid email, or leave it blank." };
  }

  const ipHash = hashIp(input.ip);

  // Rate limit per IP.
  if (ipHash) {
    const since = new Date(Date.now() - RATE_WINDOW_MS).toISOString();
    const { count, error: countErr } = await supabaseAdmin
      .from("comments")
      .select("id", { count: "exact", head: true })
      .eq("ip_hash", ipHash)
      .gte("created_at", since);
    if (countErr) throw new Error(countErr.message);
    if ((count ?? 0) >= RATE_MAX) {
      return { ok: false, status: 429, error: "You're commenting too fast. Please try again in a few minutes." };
    }
  }

  const { data, error } = await supabaseAdmin
    .from("comments")
    .insert({
      post_slug: postSlug,
      parent_id: parentId,
      author_name: authorName,
      author_email: authorEmail || null,
      body,
      ip_hash: ipHash,
    })
    .select(PUBLIC_COLS)
    .single();

  if (error) {
    // The one-level trigger raises if someone replies to a reply.
    if (error.message.includes("one level deep")) {
      return { ok: false, status: 400, error: "You can only reply to a top-level comment." };
    }
    // Foreign-key violation => parent_id doesn't exist.
    if (error.code === "23503") {
      return { ok: false, status: 400, error: "The comment you're replying to no longer exists." };
    }
    throw new Error(error.message);
  }

  return { ok: true, comment: toPublic(data) };
}

export async function softDeleteComment(id: string): Promise<boolean> {
  const supabaseAdmin = getSupabaseAdmin();
  const { data, error } = await supabaseAdmin
    .from("comments")
    .update({ is_deleted: true })
    .eq("id", id)
    .select("id")
    .maybeSingle();
  if (error) throw new Error(error.message);
  return data !== null;
}

/** Recent comments for the admin view (includes email, newest first). */
export async function listRecentForAdmin(limit = 100) {
  const supabaseAdmin = getSupabaseAdmin();
  const { data, error } = await supabaseAdmin
    .from("comments")
    .select("id, post_slug, parent_id, author_name, author_email, body, is_deleted, created_at")
    .order("created_at", { ascending: false })
    .limit(limit);
  if (error) throw new Error(error.message);
  return data ?? [];
}
