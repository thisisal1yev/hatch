import { Badge, CompBar, Container, Reveal, Section } from "@/shared/ui";
import { stageLabel } from "@/entities/job";
import type { MarketData } from "@/entities/market";

export function OpenComp({ data }: { data: MarketData }) {
  const mid = (s: { cashMinUZS: number; cashMaxUZS: number }) => (s.cashMinUZS + s.cashMaxUZS) / 2;
  const max = Math.max(...data.byStage.map(mid));
  const mln = (uzs: number) => Math.round(uzs / 1_000_000);

  return (
    <Section>
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
        <Reveal className="lg:sticky lg:top-28">
          <h2 className="text-ink font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Maosh + ulush — bosqich boʻyicha
          </h2>
          <p className="text-muted mt-4 max-w-md text-pretty">
            Startup bosqichi qancha erta boʻlsa, ulush shuncha katta. Hammasi ochiq
            koʻrsatiladi — yashirin shartlarsiz.
          </p>

          <div className="mt-8">
            <div className="text-ink text-sm font-medium">Ekotizim sektorlari</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {data.sectors.map((sector) => (
                <Badge key={sector.name} tone="neutral">
                  {sector.name} · {Math.round(sector.share * 100)}%
                </Badge>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border-line bg-surface rounded-2xl border p-6 sm:p-8">
            <div className="border-line flex items-baseline justify-between border-b pb-4">
              <span className="text-ink text-sm font-semibold">Oʻrtacha taklif</span>
              <span className="text-muted font-mono text-xs tracking-wide uppercase">
                soʻm / ulush
              </span>
            </div>
            <div className="mt-6 flex flex-col gap-6">
              {data.byStage.map((s, index) => (
                <CompBar
                  key={s.stage}
                  label={stageLabel[s.stage]}
                  widthPct={Math.round((mid(s) / max) * 100)}
                  cashLabel={`${mln(s.cashMinUZS)}–${mln(s.cashMaxUZS)} mln`}
                  equityLabel={`${s.equityMin}–${s.equityMax}%`}
                  delay={index * 0.08}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
