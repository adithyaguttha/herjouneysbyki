"use client";

import { useState } from "react";

interface AdminComment {
  id: string;
  post_slug: string;
  parent_id: string | null;
  author_name: string;
  author_email: string | null;
  body: string;
  is_deleted: boolean;
  created_at: string;
}

export default function AdminCommentsPage() {
  const [token, setToken] = useState("");
  const [authed, setAuthed] = useState(false);
  const [comments, setComments] = useState<AdminComment[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function load(t: string) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/comments", {
        headers: { Authorization: `Bearer ${t}` },
      });
      if (res.status === 401) {
        setError("Invalid admin token.");
        return;
      }
      if (!res.ok) {
        setError("Failed to load comments.");
        return;
      }
      const data = await res.json();
      setComments(data.comments ?? []);
      setAuthed(true);
    } catch {
      setError("Network error.");
    } finally {
      setLoading(false);
    }
  }

  async function remove(id: string) {
    if (!confirm("Delete this comment? It will be hidden from readers.")) return;
    const res = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      setComments((prev) => prev.map((c) => (c.id === id ? { ...c, is_deleted: true } : c)));
    } else {
      alert("Failed to delete.");
    }
  }

  if (!authed) {
    return (
      <main className="min-h-svh flex items-center justify-center bg-gray-50 p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            load(token);
          }}
          className="bg-white rounded-xl shadow p-6 w-full max-w-sm space-y-4"
        >
          <h1 className="text-lg font-semibold text-gray-900">Comment moderation</h1>
          <input
            type="password"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Admin token"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-gray-900 text-white rounded-lg disabled:opacity-60"
          >
            {loading ? "Checking…" : "Sign in"}
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-svh bg-gray-50 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold text-gray-900">
            Comments ({comments.length})
          </h1>
          <button onClick={() => load(token)} className="text-sm text-gray-600 hover:underline">
            Refresh
          </button>
        </div>
        <div className="space-y-3">
          {comments.map((c) => (
            <div
              key={c.id}
              className={`bg-white rounded-lg shadow-sm p-4 ${c.is_deleted ? "opacity-50" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap text-sm">
                    <span className="font-medium text-gray-900">{c.author_name}</span>
                    {c.author_email && (
                      <span className="text-gray-400">&lt;{c.author_email}&gt;</span>
                    )}
                    {c.parent_id && (
                      <span className="text-xs bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">
                        reply
                      </span>
                    )}
                    {c.is_deleted && (
                      <span className="text-xs bg-red-100 text-red-600 px-1.5 py-0.5 rounded">
                        deleted
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-gray-700 whitespace-pre-wrap break-words">
                    {c.body}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    {c.post_slug} · {new Date(c.created_at).toLocaleString()}
                  </p>
                </div>
                {!c.is_deleted && (
                  <button
                    onClick={() => remove(c.id)}
                    className="text-sm text-red-600 hover:underline flex-shrink-0"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))}
          {comments.length === 0 && (
            <p className="text-sm text-gray-500">No comments yet.</p>
          )}
        </div>
      </div>
    </main>
  );
}
