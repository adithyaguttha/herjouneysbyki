"use client";

import { useCallback, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import CommentForm, { type PostedComment } from "./CommentForm";
import CommentItem from "./CommentItem";
import type { CommentThread } from "@/lib/comments/types";

interface CommentsSectionProps {
  postSlug: string;
}

export default function CommentsSection({ postSlug }: CommentsSectionProps) {
  const [threads, setThreads] = useState<CommentThread[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let active = true;
    fetch(`/api/comments?postSlug=${encodeURIComponent(postSlug)}`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        if (active) setThreads(data.threads ?? []);
      })
      .catch(() => {
        if (active) setLoadError(true);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [postSlug]);

  const handleTopLevelPosted = useCallback((comment: PostedComment) => {
    setThreads((prev) => [...prev, { ...comment, replies: [] }]);
  }, []);

  const handleReplyPosted = useCallback((reply: PostedComment) => {
    setThreads((prev) =>
      prev.map((t) =>
        t.id === reply.parentId ? { ...t, replies: [...t.replies, reply] } : t,
      ),
    );
  }, []);

  const count = threads.reduce((n, t) => n + 1 + t.replies.length, 0);

  return (
    <section className="max-w-2xl mx-auto" id="comments">
      <div className="flex items-center gap-2 mb-6">
        <Icon icon="mdi:comment-text-outline" className="w-5 h-5 text-[var(--terracotta)]" />
        <h2
          className="text-2xl text-[var(--charcoal)]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {count > 0 ? `${count} ${count === 1 ? "Note" : "Notes"}` : "Leave a note"}
        </h2>
      </div>

      <div className="mb-8">
        <CommentForm postSlug={postSlug} onPosted={handleTopLevelPosted} />
      </div>

      {loading && (
        <p className="text-sm text-[var(--warm-brown)]/70" style={{ fontFamily: "var(--font-inter)" }}>
          Loading notes…
        </p>
      )}

      {loadError && (
        <p className="text-sm text-[var(--warm-brown)]" style={{ fontFamily: "var(--font-inter)" }}>
          Couldn&apos;t load comments right now. Please refresh to try again.
        </p>
      )}

      {!loading && !loadError && threads.length === 0 && (
        <p
          className="text-[var(--warm-brown)]/80"
          style={{ fontFamily: "var(--font-caveat)", fontSize: "1.25rem" }}
        >
          Be the first to leave a note ✿
        </p>
      )}

      <div className="space-y-4">
        {threads.map((thread) => (
          <CommentItem
            key={thread.id}
            postSlug={postSlug}
            thread={thread}
            onReplyPosted={handleReplyPosted}
          />
        ))}
      </div>
    </section>
  );
}
