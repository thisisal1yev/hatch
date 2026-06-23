import "server-only";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { getClientEnv } from "@/shared/config/env";

/**
 * Supabase client for Server Components, Server Actions, and Route Handlers.
 * Reads and writes the auth session through Next cookies. Uses the public anon
 * key; access is still governed by Row Level Security.
 */
export async function createSupabaseServerClient() {
  const cookieStore = await cookies();
  const env = getClientEnv();

  return createServerClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        } catch {
          // Called from a Server Component, where cookies are read-only.
          // Safe to ignore when middleware refreshes the session.
        }
      },
    },
  });
}
