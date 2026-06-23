/**
 * Static, build-time site configuration.
 * Runtime/secret values belong in `shared/config/env` (added with the Supabase wiring).
 */
export const siteConfig = {
  name: "IT Hunar",
  description:
    "Oʻzbekiston IT bozori uchun kuratsiyalangan ish platformasi. Tekshirilgan vakansiyalar, soʻm va dollarda shaffof maosh.",
  /** Interface locales. The candidate's English CV is a separate entity. */
  locales: ["uz", "ru"] as const,
  defaultLocale: "uz",
  contactTelegram: "https://t.me/hunar",
} as const;

export type Locale = (typeof siteConfig.locales)[number];
