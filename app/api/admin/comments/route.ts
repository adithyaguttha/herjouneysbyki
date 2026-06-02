import { NextResponse } from "next/server";
import { listRecentForAdmin } from "@/lib/comments/service";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function isAuthorized(req: Request): boolean {
  const expected = process.env.ADMIN_TOKEN;
  if (!expected) return false;
  const header = req.headers.get("authorization") ?? "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : header;
  return token === expected;
}

export async function GET(req: Request) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }
  try {
    const comments = await listRecentForAdmin();
    return NextResponse.json({ comments });
  } catch (err) {
    console.error("[admin:comments:GET]", err);
    return NextResponse.json({ error: "Failed to load comments." }, { status: 500 });
  }
}
