/** Canonical production origin (Vercel). Used as the default when no env override. */
const PRODUCTION_URL = "https://it-hatch.vercel.app";

/**
 * Absolute site origin, single source of truth for metadata, robots, sitemap
 * and JSON-LD. Reads `NEXT_PUBLIC_SITE_URL` directly (not via `getClientEnv`)
 * so build-time metadata generation works before Supabase creds are wired.
 * Defaults to the production URL so deploys are correct even if the env var is
 * unset; local dev overrides it via `.env` (`NEXT_PUBLIC_SITE_URL=http://localhost:3000`).
 */
export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? PRODUCTION_URL;
}
