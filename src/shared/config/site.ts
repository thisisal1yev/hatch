/**
 * Static, build-time site configuration.
 * Runtime/secret values belong in `shared/config/env` (added with the Supabase wiring).
 */
export const siteConfig = {
  name: "Hatch",
  description:
    "Oʻzbekiston startup ekotizimi uchun isteʼdod platformasi. Tasdiqlangan startuplar, maosh va equity ochiq koʻrsatiladi.",
  /** Interface locales. The candidate's English CV is a separate entity. */
  locales: ["uz", "ru"] as const,
  defaultLocale: "uz",
  contactTelegram: "https://t.me/thisisaliyev",
} as const;

export type Locale = (typeof siteConfig.locales)[number];
