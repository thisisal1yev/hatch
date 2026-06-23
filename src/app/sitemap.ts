import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/shared/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  // Only list routes that actually exist and are indexable. As /jobs,
  // /for-employers, etc. ship, add them here — a sitemap of 404s erodes
  // crawl trust.
  const routes: {
    path: string;
    changeFrequency: "daily" | "weekly" | "yearly";
    priority: number;
  }[] = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
    { path: "/consent", changeFrequency: "yearly", priority: 0.3 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
