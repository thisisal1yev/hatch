import { getSiteUrl, siteConfig } from "@/shared/config";

/**
 * Organization + WebSite structured data for the site root, emitted as a single
 * JSON-LD `@graph`. Helps Google rich results / knowledge panel and gives AI
 * summarizers a machine-readable identity. Server-rendered; no client JS.
 */
export function SiteJsonLd() {
  const url = getSiteUrl();
  const orgId = `${url}/#organization`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: siteConfig.name,
        url,
        logo: `${url}/apple-icon.png`,
        description: siteConfig.description,
        slogan: "Maosh va ulush — ochiq",
        areaServed: { "@type": "Country", name: "Uzbekistan" },
        sameAs: [siteConfig.contactTelegram],
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        name: siteConfig.name,
        url,
        description: siteConfig.description,
        inLanguage: siteConfig.defaultLocale,
        publisher: { "@id": orgId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Escape `<` to keep the inline JSON from breaking out of the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
