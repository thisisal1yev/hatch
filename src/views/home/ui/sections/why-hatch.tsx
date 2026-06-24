import {
  ShieldCheck,
  CurrencyDollar,
  SealCheck,
  GlobeHemisphereWest,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Container, Reveal, Section } from "@/shared/ui";
import { cn } from "@/shared/lib";

type Item = {
  icon: Icon;
  title: string;
  body: string;
  /** Bento sizing + accent variant. */
  span: string;
  variant: "featured" | "plain" | "accent";
};

const items: Item[] = [
  {
    icon: CurrencyDollar,
    title: "Maosh va ulush ochiq",
    body: "Vilka va ulushni darhol koʻrasiz. Yashirin shartlar yoʻq — taklif birinchi qadamdan aniq.",
    span: "lg:col-span-2",
    variant: "featured",
  },
  {
    icon: ShieldCheck,
    title: "Tasdiqlangan startuplar",
    body: "Har bir startup va eʼlon moderatsiyadan oʻtadi. Spam va shablon arizalar yoʻq.",
    span: "",
    variant: "plain",
  },
  {
    icon: SealCheck,
    title: "Toʻgʻridan-toʻgʻri asoschilar",
    body: "Vositachisiz — ariza maʼqullansa, asoschi bilan bevosita bogʻlanasiz.",
    span: "",
    variant: "plain",
  },
  {
    icon: GlobeHemisphereWest,
    title: "Global darajaga tayyor",
    body: "GitHub orqali kirish, ingliz tilidagi CV — xalqaro startuplarga ham mos.",
    span: "lg:col-span-2",
    variant: "accent",
  },
];

export function WhyHatch() {
  return (
    <Section className="bg-surface-2">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-ink font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Nega Hatch
          </h2>
          <p className="text-muted mt-4 text-pretty">
            Bitta platforma — ishonch, ochiqlik va toʻgʻridan-toʻgʻri aloqa. Mana nega nomzodlar va
            asoschilar shu yerga keladi.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {items.map((item, index) => {
            const featured = item.variant === "featured";
            const accent = item.variant === "accent";
            return (
              <Reveal
                key={item.title}
                delay={index * 0.06}
                className={cn(
                  "flex flex-col rounded-2xl border p-7 sm:p-8",
                  item.span,
                  featured && "border-brand/20 bg-brand-soft",
                  accent && "border-accent/20 bg-accent-soft/60",
                  item.variant === "plain" && "border-line bg-bg",
                )}
              >
                <item.icon
                  weight="duotone"
                  className={cn("size-8", accent ? "text-accent" : "text-brand")}
                />
                <h3 className={cn("text-ink mt-5 font-semibold", featured ? "text-xl" : "text-lg")}>
                  {item.title}
                </h3>
                <p className="text-muted mt-2 max-w-md text-sm leading-relaxed">{item.body}</p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
