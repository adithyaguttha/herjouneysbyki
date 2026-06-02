import { NextResponse } from "next/server";
import { createComment, getThreadsForPost } from "@/lib/comments/service";
import { notifyNewComment } from "@/lib/comments/notify";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function clientIp(req: Request): string | null {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip");
}

export async function GET(req: Request) {
  const postSlug = new URL(req.url).searchParams.get("postSlug")?.trim();
  if (!postSlug) {
    return NextResponse.json({ error: "postSlug is required." }, { status: 400 });
  }
  try {
    const threads = await getThreadsForPost(postSlug);
    return NextResponse.json({ threads });
  } catch (err) {
    console.error("[comments:GET]", err);
    return NextResponse.json({ error: "Failed to load comments." }, { status: 500 });
  }
}

export async function POST(req: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  try {
    const result = await createComment({
      postSlug: payload.postSlug,
      parentId: payload.parentId,
      authorName: payload.authorName,
      authorEmail: payload.authorEmail,
      body: payload.body,
      honeypot: payload.honeypot,
      ip: clientIp(req),
    });

    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: result.status });
    }

    // Honeypot tripped: fake success, nothing saved.
    if (result.comment === null) {
      return NextResponse.json({ comment: null }, { status: 201 });
    }

    // Fire-and-forget notification; don't block the response on email.
    notifyNewComment({
      postSlug: result.comment.postSlug,
      parentId: result.comment.parentId,
      authorName: result.comment.authorName,
      authorEmail: typeof payload.authorEmail === "string" ? payload.authorEmail.trim() || null : null,
      body: result.comment.body,
    });

    return NextResponse.json({ comment: result.comment }, { status: 201 });
  } catch (err) {
    console.error("[comments:POST]", err);
    return NextResponse.json({ error: "Failed to post comment." }, { status: 500 });
  }
}
