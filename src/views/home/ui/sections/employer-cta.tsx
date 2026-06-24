import { ButtonLink, Container, Reveal, Section } from "@/shared/ui";

export function EmployerCta() {
  return (
    <Section>
      <Container>
        <Reveal className="bg-brand-strong relative overflow-hidden rounded-3xl px-6 py-14 text-white sm:px-12 sm:py-16">
          <div
            className="pointer-events-none absolute -top-1/2 -right-24 size-[28rem] rounded-full bg-white/10 blur-3xl"
            aria-hidden
          />
          <div className="relative max-w-xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Eng kuchlilarni saralab oling
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/90">
              Eʼloningiz moderatsiyadan oʻtadi va faqat mos nomzodlarga koʻrinadi. Maosh va ulush
              ochiq — jiddiy nomzodlar keladi.
            </p>
            <ButtonLink
              href="/for-employers"
              size="lg"
              className="text-brand-strong mt-8 bg-white hover:bg-white/90"
            >
              Startup sifatida eʼlon ber
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
