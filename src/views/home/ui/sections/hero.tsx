import { ButtonLink, Container, Reveal } from "@/shared/ui";
import { SearchBar } from "@/features/job-search";
import { JobCard, type Job } from "@/entities/job";

export function Hero({ previewJob }: { previewJob?: Job }) {
  return (
    <Container className="grid items-center gap-12 pt-12 pb-16 sm:pt-16 lg:grid-cols-2 lg:gap-16 lg:pt-20 lg:pb-24">
      <div>
        <h1 className="text-foreground text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl">
          Oʻzbekistondagi IT-ish: tekshirilgan va shaffof
        </h1>
        <p className="text-muted mt-5 max-w-lg text-lg text-pretty">
          Har bir vakansiya moderatsiyadan oʻtadi. Maosh darhol soʻm va dollarda koʻrsatiladi.
        </p>

        <div className="mt-8 max-w-lg">
          <SearchBar
            placeholder="Koʻnikma yoki lavozim (masalan, React, Backend)"
            submitLabel="Qidirish"
          />
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/jobs" size="lg">
            Ish topish
          </ButtonLink>
          <ButtonLink href="/for-employers" variant="secondary" size="lg">
            Vakansiya joylash
          </ButtonLink>
        </div>
      </div>

      {previewJob && (
        <Reveal delay={0.1} className="relative hidden lg:block">
          <div
            aria-hidden
            className="border-border bg-surface-2 absolute inset-x-8 top-8 -z-10 h-full rounded-2xl border"
          />
          <JobCard job={previewJob} className="shadow-[0_24px_70px_-24px_rgba(2,44,40,0.28)]" />
        </Reveal>
      )}
    </Container>
  );
}
