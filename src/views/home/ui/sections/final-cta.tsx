import { ButtonLink, Container, Reveal, Section } from "@/shared/ui";

export function FinalCta() {
  return (
    <Section>
      <Container>
        <Reveal className="bg-daybreak text-on-band relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:py-20">
          <div className="bg-grain pointer-events-none absolute inset-0 opacity-60" aria-hidden />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-8">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Startup karyerangizni shu yerdan boshlang
            </h2>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/jobs" size="lg">
                Ish topish
              </ButtonLink>
              <ButtonLink href="/for-employers" variant="ghost" size="lg">
                Startup sifatida eʼlon ber
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
