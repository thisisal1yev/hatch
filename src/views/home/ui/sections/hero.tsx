import { ButtonLink, Container, DaybreakCanvas, SampleNote, StatCounter } from "@/shared/ui";
import { RoleCardCarousel } from "@/features/role-spotlight";
import type { Job } from "@/entities/job";
import type { EcosystemStats } from "@/entities/market";

function Stat({
  value,
  label,
  prefix,
  suffix,
}: {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <div>
      <div className="text-on-band font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        <StatCounter value={value} prefix={prefix} suffix={suffix} />
      </div>
      <div className="text-on-band-muted mt-1 text-xs leading-snug">{label}</div>
    </div>
  );
}

export function Hero({ stats, spotlight }: { stats: EcosystemStats; spotlight: Job[] }) {
  return (
    <section className="bg-daybreak text-on-band relative overflow-hidden">
      <DaybreakCanvas />
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10"
        aria-hidden
      />

      <Container className="relative grid items-center gap-12 pt-20 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-28 lg:pb-32">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            <span className="bg-brand size-1.5 rounded-full" aria-hidden />
            Oʻzbekiston startup ekotizimi
          </span>

          <h1 className="font-display mt-6 text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.04] font-bold tracking-tight text-balance">
            Oʻzbekiston startupiga <span className="text-brand">qoʻshil.</span>
          </h1>

          <p className="text-on-band-muted mt-5 max-w-lg text-lg text-pretty">
            Maosh va equity — <span className="text-on-band font-medium">ochiq</span>. Tasdiqlangan
            startuplar, toʻgʻridan-toʻgʻri asoschilar bilan.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/jobs" size="lg">
              Ish topish
            </ButtonLink>
            <ButtonLink href="/for-employers" variant="ghost" size="lg">
              Startup sifatida eʼlon ber
            </ButtonLink>
          </div>

          <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-8">
            <Stat value={stats.hiringStartups} label="Ishga olayotgan startuplar" />
            <Stat value={stats.openRoles} label="Ochiq oʻrinlar" />
            <Stat
              value={Math.round(stats.totalFundingUSD / 1_000_000)}
              label="Jami jalb qilingan"
              prefix="$"
              suffix="M+"
            />
          </div>

          <SampleNote className="text-on-band-muted mt-4 opacity-80" />
        </div>

        <div className="lg:pl-4">
          <RoleCardCarousel roles={spotlight} />
        </div>
      </Container>
    </section>
  );
}
