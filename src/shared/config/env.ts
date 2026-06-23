import { z } from "zod";

const clientEnvSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  NEXT_PUBLIC_SITE_URL: z.url(),
});

export type ClientEnv = z.infer<typeof clientEnvSchema>;

let cached: ClientEnv | null = null;

/**
 * Validate and return public (`NEXT_PUBLIC_*`) environment variables.
 * Safe to call in the browser and on the server. Validated lazily so the app
 * can boot before Supabase credentials are configured (skeleton stage).
 */
export function getClientEnv(): ClientEnv {
  if (cached) return cached;
  const parsed = clientEnvSchema.safeParse({
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  });
  if (!parsed.success) {
    throw new Error(
      `Invalid public environment variables. Check .env against .env.example:\n${z.prettifyError(parsed.error)}`,
    );
  }
  cached = parsed.data;
  return cached;
}
