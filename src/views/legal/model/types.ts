export type LegalSection = {
  heading: string;
  /** Body paragraphs, rendered in order. */
  body?: string[];
  /** Optional bullet list, rendered after the body. */
  bullets?: string[];
  /** When true, render the Telegram contact link after the body. */
  contact?: boolean;
};

export type LegalSlug = "privacy" | "terms" | "consent";

export type LegalDoc = {
  slug: LegalSlug;
  title: string;
  /** Meta description (≤160 chars); distinct from the on-page intro. */
  description: string;
  /** Human-readable "last updated" date, e.g. "24-iyun 2026". */
  updated: string;
  intro: string;
  sections: LegalSection[];
};

/** Drives cross-links between the three legal documents. */
export const legalNav: { slug: LegalSlug; title: string; href: string }[] = [
  { slug: "privacy", title: "Maxfiylik siyosati", href: "/privacy" },
  { slug: "terms", title: "Foydalanish shartlari", href: "/terms" },
  { slug: "consent", title: "Maʼlumotlarga rozilik", href: "/consent" },
];

/** Shared across all three documents — bump when content materially changes. */
export const LEGAL_UPDATED = "24-iyun 2026";
