/**
 * FAQPage structured data — eligible for FAQ rich results in search. Accepts
 * generic question/answer pairs so the `seo` slice stays domain-agnostic; the
 * caller (a view) owns the content. Server-rendered; no client JS.
 */
export function FaqJsonLd({ items }: { items: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <script
      type="application/ld+json"
      // Static, developer-authored content; escape `<` as defense-in-depth.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
