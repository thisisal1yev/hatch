import Link from "next/link";
import { ButtonLink, Wordmark } from "@/shared/ui";

/**
 * Standalone 404 surface — deliberately NOT wrapped in the site header/footer
 * chrome. A full-viewport daybreak band with only the wordmark as an escape
 * hatch, so a dead end feels intentional rather than like a broken page.
 */
export function NotFoundView() {
  return (
    <main className="bg-daybreak text-on-band relative flex min-h-dvh flex-col overflow-hidden">
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-60" aria-hidden />

      <div className="relative px-6 py-6 sm:px-10">
        <Link
          href="/"
          className="hover:text-on-band/80 inline-block transition"
        >
          <Wordmark className="text-lg" />
        </Link>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-6 pb-24">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-5 text-center">
          <p className="font-display text-7xl font-bold tracking-tight sm:text-8xl">404</p>
          <h1 className="font-display text-2xl font-bold tracking-tight text-balance sm:text-3xl">
            Bu sahifa topilmadi
          </h1>
          <p className="text-on-band-muted max-w-md leading-relaxed text-pretty">
            Qidirgan sahifangiz koʻchirilgan yoki mavjud emas. Bosh sahifaga qayting yoki ochiq
            oʻrinlarni koʻrib chiqing.
          </p>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/" size="lg">
              Bosh sahifa
            </ButtonLink>
            <ButtonLink href="/jobs" variant="ghost" size="lg">
              Oʻrinlarni koʻrish
            </ButtonLink>
          </div>
        </div>
      </div>
    </main>
  );
}
