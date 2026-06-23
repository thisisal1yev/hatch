/**
 * Static, build-time site configuration.
 * Runtime/secret values belong in `shared/config/env` (added with the Supabase wiring).
 */
export const siteConfig = {
  name: "Hunar",
  description: "Курируемый маркетплейс IT-найма для Узбекистана",
  /** Interface locales. The candidate's English CV is a separate entity. */
  locales: ["ru", "uz"] as const,
  defaultLocale: "ru",
} as const;

export type Locale = (typeof siteConfig.locales)[number];
