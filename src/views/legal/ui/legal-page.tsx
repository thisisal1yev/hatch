import Link from "next/link";
import { Container, Reveal, Section } from "@/shared/ui";
import { SiteHeader } from "@/widgets/site-header";
import { SiteFooter } from "@/widgets/site-footer";
import { siteConfig } from "@/shared/config";
import { legalNav, type LegalDoc } from "../model/types";

/**
 * Renders a single legal document (privacy / terms / consent) as a readable,
 * single-column article. Server component; `Reveal` is the only client leaf and
 * only wraps the header so dense body copy stays instantly readable.
 */
export function LegalPage({ doc }: { doc: LegalDoc }) {
  const others = legalNav.filter((d) => d.slug !== doc.slug);

  return (
    <>
      <SiteHeader />
      <main>
        <Section>
          <Container>
            <article className="mx-auto max-w-prose">
              <Reveal>
                <p className="text-brand-strong text-sm font-medium">Huquqiy</p>
                <h1 className="text-ink font-display mt-2 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                  {doc.title}
                </h1>
                <p className="text-muted mt-3 text-sm">Yangilangan: {doc.updated}</p>
                <p className="text-ink/80 mt-6 text-lg leading-relaxed text-pretty">{doc.intro}</p>
              </Reveal>

              <div className="border-line mt-12 border-t">
                {doc.sections.map((section, i) => (
                  <section
                    key={section.heading}
                    id={`section-${i + 1}`}
                    className="scroll-mt-24 border-line border-b py-10 last:border-b-0"
                  >
                    <h2 className="text-ink font-display text-xl font-semibold tracking-tight">
                      <span className="text-brand-strong tabular-nums">{i + 1}.</span>{" "}
                      {section.heading}
                    </h2>

                    {section.body?.map((paragraph) => (
                      <p key={paragraph} className="text-ink/80 mt-4 leading-relaxed text-pretty">
                        {paragraph}
                      </p>
                    ))}

                    {section.bullets && (
                      <ul className="mt-4 space-y-2.5">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="text-ink/80 flex gap-3 leading-relaxed">
                            <span
                              className="bg-brand mt-2.5 size-1.5 shrink-0 rounded-full"
                              aria-hidden
                            />
                            <span className="text-pretty">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.contact && (
                      <a
                        href={siteConfig.contactTelegram}
                        target="_blank"
                        rel="noreferrer"
                        className="text-brand-strong mt-5 inline-flex items-center gap-1.5 font-medium hover:underline"
                      >
                        Telegram orqali yozish
                        <span aria-hidden>→</span>
                      </a>
                    )}
                  </section>
                ))}
              </div>

              <div className="mt-12">
                <p className="text-muted text-sm">Boshqa huquqiy hujjatlar</p>
                <ul className="mt-3 flex flex-col gap-2 sm:flex-row sm:gap-6">
                  {others.map((d) => (
                    <li key={d.slug}>
                      <Link
                        href={d.href}
                        className="text-ink hover:text-brand-strong font-medium transition"
                      >
                        {d.title} <span aria-hidden>→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
