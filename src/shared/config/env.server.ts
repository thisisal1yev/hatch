import "server-only";
import { z } from "zod";

const serverEnvSchema = z.object({
  /** Full-access key. Server-only, never exposed to the browser. */
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),
  /** Optional: only when imgbb is used for public images instead of a public bucket. */
  IMGBB_API_KEY: z.string().min(1).optional(),
});

export type ServerEnv = z.infer<typeof serverEnvSchema>;

let cached: ServerEnv | null = null;

/**
 * Validate and return server-only secrets. The `server-only` import makes any
 * accidental client import fail at build time. Never re-export from a barrel
 * that client code consumes.
 */
export function getServerEnv(): ServerEnv {
  if (cached) return cached;
  const parsed = serverEnvSchema.safeParse({
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    IMGBB_API_KEY: process.env.IMGBB_API_KEY,
  });
  if (!parsed.success) {
    throw new Error(`Invalid server environment variables:\n${z.prettifyError(parsed.error)}`);
  }
  cached = parsed.data;
  return cached;
}
