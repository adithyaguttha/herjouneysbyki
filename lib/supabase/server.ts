import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client using the service role key.
 *
 * The comments table has RLS enabled with NO policies, so the anon key can't
 * touch it. Every read/write goes through this client inside route handlers,
 * which keeps author emails private and lets us run spam checks server-side.
 *
 * Created lazily so a missing env var fails the actual request (with a clear
 * 500) rather than crashing module import / `next build`.
 *
 * NEVER import this from a Client Component — the "server-only" guard above
 * turns that into a build error.
 */
let client: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  if (client) return client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables.",
    );
  }

  client = createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return client;
}
