import { Plus } from "@phosphor-icons/react/dist/ssr";
import { Container, Section } from "@/shared/ui";
import { faqItems as items } from "../../model/faq";

export function Faq() {
  return (
    <Section className="bg-surface-2">
      <Container className="max-w-3xl">
        <h2 className="text-ink font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Tez-tez beriladigan savollar
        </h2>

        <div className="border-line divide-line mt-8 divide-y border-y">
          {items.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
                <span className="text-ink font-medium">{item.q}</span>
                <Plus
                  weight="bold"
                  className="text-muted size-5 shrink-0 transition-transform duration-300 group-open:rotate-45"
                  aria-hidden
                />
              </summary>
              <p className="text-muted -mt-1 pb-5 text-sm leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
