import { createBrowserClient } from "@supabase/ssr";
import { getClientEnv } from "@/shared/config/env";

/**
 * Supabase client for Client Components (browser). Uses the public anon key;
 * access is governed by Row Level Security. Never use the service-role key here.
 */
export function createSupabaseBrowserClient() {
  const env = getClientEnv();
  return createBrowserClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}
