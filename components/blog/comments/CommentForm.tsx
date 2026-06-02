"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

interface CommentFormProps {
  postSlug: string;
  parentId?: string | null;
  /** Called with the freshly-created comment so the list can update. */
  onPosted: (comment: PostedComment) => void;
  onCancel?: () => void;
  compact?: boolean;
}

export interface PostedComment {
  id: string;
  postSlug: string;
  parentId: string | null;
  authorName: string;
  body: string;
  isDeleted: boolean;
  createdAt: string;
}

export default function CommentForm({
  postSlug,
  parentId = null,
  onPosted,
  onCancel,
  compact = false,
}: CommentFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [honeypot, setHoneypot] = useState(""); // bots fill this; humans never see it
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!name.trim() || !body.trim()) {
      setError("Please add your name and a comment.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          postSlug,
          parentId,
          authorName: name,
          authorEmail: email,
          body,
          honeypot,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      // Honeypot path returns comment: null — treat as success, clear quietly.
      if (data.comment) onPosted(data.comment as PostedComment);
      setName("");
      setEmail("");
      setBody("");
      onCancel?.();
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white shadow-sm border border-[var(--beige)] rounded-2xl ${
        compact ? "p-4" : "p-5 md:p-6"
      }`}
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {/* Honeypot — visually hidden, off-screen, not focusable */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />

      {!compact && (
        <p
          className="text-xl text-[var(--charcoal)] mb-4"
          style={{ fontFamily: "var(--font-caveat)" }}
        >
          Leave a note
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          maxLength={60}
          required
          className="px-4 py-2.5 bg-[var(--cream)] border-2 border-[var(--beige)] rounded-full text-[var(--charcoal)] placeholder:text-[var(--warm-brown)]/50 focus:outline-none focus:border-[var(--terracotta)] transition-colors text-sm"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email (optional, never shown)"
          maxLength={254}
          className="px-4 py-2.5 bg-[var(--cream)] border-2 border-[var(--beige)] rounded-full text-[var(--charcoal)] placeholder:text-[var(--warm-brown)]/50 focus:outline-none focus:border-[var(--terracotta)] transition-colors text-sm"
        />
      </div>

      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder={parentId ? "Write a reply…" : "Share your thoughts…"}
        maxLength={2000}
        rows={compact ? 2 : 3}
        required
        className="w-full px-4 py-3 bg-[var(--cream)] border-2 border-[var(--beige)] rounded-2xl text-[var(--charcoal)] placeholder:text-[var(--warm-brown)]/50 focus:outline-none focus:border-[var(--terracotta)] transition-colors text-sm resize-y"
      />

      {error && (
        <p className="mt-2 text-sm text-[var(--terracotta-dark)]" role="alert">
          {error}
        </p>
      )}

      <div className="mt-3 flex items-center gap-2">
        <button
          type="submit"
          disabled={submitting}
          className="px-6 py-2.5 bg-[var(--terracotta)] text-white rounded-full hover:bg-[var(--terracotta-dark)] transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2 text-sm"
        >
          {submitting ? "Posting…" : parentId ? "Reply" : "Post comment"}
          {!submitting && <Icon icon="mdi:send" className="w-4 h-4" />}
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2.5 text-sm text-[var(--warm-brown)] hover:text-[var(--charcoal)] transition-colors"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
