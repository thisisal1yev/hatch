import { Plus } from "@phosphor-icons/react/dist/ssr";
import { Container, Section } from "@/shared/ui";

const items: { q: string; a: string }[] = [
  {
    q: "Nomzodlar uchun bepulmi?",
    a: "Ha, toʻliq bepul. Toʻlovni faqat startuplar amalga oshiradi.",
  },
  {
    q: "Equity nima va u qanday koʻrsatiladi?",
    a: "Equity — startupdagi ulush. Har bir oʻrinda taklif etilgan ulush foizi ochiq koʻrsatiladi.",
  },
  {
    q: "Startuplar qanday tekshiriladi?",
    a: "Har bir startup va eʼlon moderatsiyadan oʻtadi; tasdiqlangan startup belgisi beriladi.",
  },
  {
    q: "Asoschi bilan qanday bogʻlanaman?",
    a: "Ariza maʼqullangach, ikkala tomon bir-birining kontaktini (Telegram yoki telefon) koʻradi.",
  },
  {
    q: "Oʻrin joylash qancha vaqt oladi?",
    a: "Eʼlon moderatsiyadan oʻtgach chop etiladi, odatda bir necha soat ichida.",
  },
];

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
