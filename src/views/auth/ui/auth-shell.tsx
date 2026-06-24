import Link from "next/link";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { Wordmark } from "@/shared/ui";
import { cn } from "@/shared/lib";

export type AuthPanel = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  points: string[];
};

/**
 * Split auth layout: a form column beside a fixed Daybreak brand panel (lg+).
 * `reverse` puts the form on the right and the panel on the left.
 */
export function AuthShell({
  panel,
  children,
  reverse = false,
}: {
  panel: AuthPanel;
  children: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <div
      className={cn(
        "min-h-dvh lg:grid",
        reverse ? "lg:grid-cols-[0.95fr_1.05fr]" : "lg:grid-cols-[1.05fr_0.95fr]",
      )}
    >
      {/* form column */}
      <div
        className={cn(
          "flex min-h-dvh flex-col px-6 py-6 sm:px-10 lg:py-8",
          reverse && "lg:order-2",
        )}
      >
        <header className="flex items-center justify-between">
          <Link href="/" className="text-ink hover:text-ink/80 transition" aria-label="Bosh sahifa">
            <Wordmark className="text-lg" />
          </Link>
          <Link
            href="/"
            className="text-muted hover:text-ink text-sm transition"
            aria-label="Bosh sahifaga qaytish"
          >
            ← Bosh sahifa
          </Link>
        </header>

        <main className="flex flex-1 items-center justify-center py-10">
          <div className="w-full max-w-md">{children}</div>
        </main>
      </div>

      {/* brand panel */}
      <aside
        className={cn(
          "bg-daybreak text-on-band relative hidden overflow-hidden lg:block",
          reverse && "lg:order-1",
        )}
      >
        <div className="bg-grain pointer-events-none absolute inset-0 opacity-70" aria-hidden />
        <div
          className={cn(
            "relative flex h-full flex-col justify-center px-12 py-16 xl:px-16",
            reverse && "items-end text-right",
          )}
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            <span className="bg-brand size-1.5 rounded-full" aria-hidden />
            {panel.eyebrow}
          </span>

          <h2 className="font-display mt-6 max-w-xl text-4xl leading-[1.1] font-bold tracking-tight text-balance xl:max-w-2xl xl:text-5xl">
            {panel.title}
          </h2>
          <p className="text-on-band-muted mt-5 max-w-sm text-pretty">{panel.subtitle}</p>

          <ul className={cn("mt-10 flex flex-col gap-4", reverse && "items-end")}>
            {panel.points.map((point) => (
              <li
                key={point}
                className={cn("flex items-start gap-3", reverse && "flex-row-reverse")}
              >
                <span className="bg-brand/15 text-brand mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full">
                  <Check weight="bold" className="size-3.5" />
                </span>
                <span className="text-on-band text-sm">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
