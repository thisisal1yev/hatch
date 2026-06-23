import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/shared/config";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  // Allow every crawler, including AI search bots (OAI-SearchBot, PerplexityBot,
  // ClaudeBot, Google-Extended) — a blanket Disallow would drop us from their
  // citations. Tighten per-bot here if that changes.
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
