"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { timeAgo } from "@/lib/comments/format";
import CommentForm, { type PostedComment } from "./CommentForm";
import type { CommentThread } from "@/lib/comments/types";

interface CommentItemProps {
  postSlug: string;
  thread: CommentThread;
  onReplyPosted: (reply: PostedComment) => void;
}

function Avatar({ name }: { name: string }) {
  const initial = name.trim().charAt(0).toUpperCase() || "?";
  return (
    <div
      className="w-9 h-9 rounded-full bg-[var(--sage)]/25 text-[var(--charcoal)] flex items-center justify-center flex-shrink-0 text-sm font-medium"
      aria-hidden="true"
    >
      {initial}
    </div>
  );
}

function Body({ name, body, createdAt, deleted }: { name: string; body: string; createdAt: string; deleted: boolean }) {
  return (
    <div className="flex gap-3">
      <Avatar name={deleted ? "·" : name} />
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span
            className="text-[var(--charcoal)] font-medium text-sm"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {deleted ? "—" : name}
          </span>
          <span className="text-xs text-[var(--warm-brown)]/70">{timeAgo(createdAt)}</span>
        </div>
        <p
          className={`mt-1 text-sm leading-relaxed whitespace-pre-wrap break-words ${
            deleted ? "italic text-[var(--warm-brown)]/60" : "text-[var(--warm-brown)]"
          }`}
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {deleted ? "[removed]" : body}
        </p>
      </div>
    </div>
  );
}

export default function CommentItem({ postSlug, thread, onReplyPosted }: CommentItemProps) {
  const [replying, setReplying] = useState(false);

  return (
    <div className="bg-white shadow-sm border border-[var(--beige)] rounded-2xl p-4 md:p-5">
      <Body
        name={thread.authorName}
        body={thread.body}
        createdAt={thread.createdAt}
        deleted={thread.isDeleted}
      />

      {!thread.isDeleted && (
        <div className="mt-2 pl-12">
          <button
            type="button"
            onClick={() => setReplying((v) => !v)}
            className="text-xs text-[var(--terracotta)] hover:text-[var(--terracotta-dark)] transition-colors inline-flex items-center gap-1"
          >
            <Icon icon="mdi:reply" className="w-3.5 h-3.5" />
            {replying ? "Cancel" : "Reply"}
          </button>
        </div>
      )}

      {replying && (
        <div className="mt-3 pl-12">
          <CommentForm
            postSlug={postSlug}
            parentId={thread.id}
            compact
            onPosted={onReplyPosted}
            onCancel={() => setReplying(false)}
          />
        </div>
      )}

      {thread.replies.length > 0 && (
        <div className="mt-4 pl-6 md:pl-12 border-l-2 border-[var(--beige)] space-y-4">
          {thread.replies.map((reply) => (
            <Body
              key={reply.id}
              name={reply.authorName}
              body={reply.body}
              createdAt={reply.createdAt}
              deleted={reply.isDeleted}
            />
          ))}
        </div>
      )}
    </div>
  );
}
