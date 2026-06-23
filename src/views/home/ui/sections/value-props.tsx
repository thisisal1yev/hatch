import {
  ShieldCheck,
  CurrencyDollar,
  SealCheck,
  GlobeHemisphereWest,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Container, Reveal, Section } from "@/shared/ui";

const items: { icon: Icon; title: string; body: string }[] = [
  {
    icon: ShieldCheck,
    title: "Har bir vakansiya tekshirilgan",
    body: "Moderator har bir eʼlonni koʻrib chiqadi. Spam va shablon arizalar yoʻq.",
  },
  {
    icon: CurrencyDollar,
    title: "Maosh soʻm va dollarda",
    body: "Vilkani darhol koʻrasiz. Yashirin shartlar va “kelishilgan holda” yoʻq.",
  },
  {
    icon: SealCheck,
    title: "Tasdiqlangan profillar",
    body: "Koʻnikmalar qoʻlda tekshiriladi va profilga tasdiq belgisi beriladi.",
  },
  {
    icon: GlobeHemisphereWest,
    title: "IT va masofaviy ishga moslangan",
    body: "GitHub orqali kirish, ingliz tilidagi CV birinchi sinf sifatida qabul qilinadi.",
  },
];

export function ValueProps() {
  return (
    <Section>
      <Container>
        <Reveal>
          <h2 className="text-foreground text-3xl font-semibold tracking-tight sm:text-4xl">
            Nega IT Hunar
          </h2>
        </Reveal>

        <div className="bg-border border-border mt-10 grid gap-px overflow-hidden rounded-2xl border sm:grid-cols-2">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05} className="bg-background p-6 sm:p-8">
              <item.icon weight="duotone" className="text-accent size-8" />
              <h3 className="text-foreground mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="text-muted mt-2 text-sm leading-relaxed">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
