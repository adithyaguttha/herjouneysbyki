import "server-only";
import { getPostBySlug } from "@/data/posts";

interface NotifyArgs {
  postSlug: string;
  parentId: string | null;
  authorName: string;
  authorEmail: string | null;
  body: string;
}

/**
 * Email the blog owner about a new comment via Resend. Best-effort:
 * never throws into the request path — a failed notification must not
 * fail the comment that was already saved.
 */
export async function notifyNewComment(args: NotifyArgs): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_EMAIL;
  const from = process.env.NOTIFY_FROM;

  if (!apiKey || !to || !from) {
    // Notifications not configured — silently skip.
    return;
  }

  const post = getPostBySlug(args.postSlug);
  const postTitle = post?.title ?? args.postSlug;
  const postUrl = post ? `/${post.country}/${post.slug}` : `/${args.postSlug}`;
  const kind = args.parentId ? "reply" : "comment";

  const escape = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const html = `
    <h2>New ${kind} on "${escape(postTitle)}"</h2>
    <p><strong>${escape(args.authorName)}</strong>${
      args.authorEmail ? ` &lt;${escape(args.authorEmail)}&gt;` : ""
    } wrote:</p>
    <blockquote style="border-left:3px solid #ccc;padding-left:12px;color:#333;">
      ${escape(args.body).replace(/\n/g, "<br/>")}
    </blockquote>
    <p style="color:#888;font-size:13px;">Post: ${escape(postUrl)}</p>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: args.authorEmail || undefined,
        subject: `New ${kind} on "${postTitle}"`,
        html,
      }),
    });
    if (!res.ok) {
      console.error("[notify] Resend responded", res.status, await res.text());
    }
  } catch (err) {
    console.error("[notify] failed to send email", err);
  }
}
