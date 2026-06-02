import { NextResponse } from "next/server";
import { softDeleteComment } from "@/lib/comments/service";

export const runtime = "nodejs";

function isAuthorized(req: Request): boolean {
  const expected = process.env.ADMIN_TOKEN;
  if (!expected) return false;
  const header = req.headers.get("authorization") ?? "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : header;
  return token === expected;
}

export async function DELETE(req: Request, ctx: { params: Promise<{ id: string }> }) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }
  const { id } = await ctx.params;
  try {
    const existed = await softDeleteComment(id);
    if (!existed) {
      return NextResponse.json({ error: "Not found." }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[comments:DELETE]", err);
    return NextResponse.json({ error: "Failed to delete comment." }, { status: 500 });
  }
}
