"use client";

import { useState } from "react";
import { Container, Section } from "@/shared/ui";
import { cn } from "@/shared/lib";

type Audience = "candidate" | "employer";

const tabs: { key: Audience; label: string }[] = [
  { key: "candidate", label: "Nomzodlar uchun" },
  { key: "employer", label: "Startuplar uchun" },
];

const steps: Record<Audience, { title: string; body: string }[]> = {
  candidate: [
    {
      title: "Profil yarating",
      body: "Google yoki GitHub orqali kiring, profilni toʻldiring va CV yuklang.",
    },
    {
      title: "Startup oʻrinlarini qidiring",
      body: "Bosqich, equity, format va maosh boʻyicha startup oʻrinlarini qidiring.",
    },
    {
      title: "Ariza topshiring",
      body: "Asoschi arizani maʼqullasa, ikkala tomon kontaktni koʻradi.",
    },
  ],
  employer: [
    {
      title: "Startup profili",
      body: "Startupingizni roʻyxatdan oʻtkazing va tasdiq belgisini oling.",
    },
    { title: "Oʻrin joylang", body: "Oʻrin moderatsiyadan oʻtgach chop etiladi." },
    {
      title: "Arizalarni koʻring",
      body: "Statuslarni boshqaring, mos nomzod bilan toʻgʻridan-toʻgʻri bogʻlaning.",
    },
  ],
};

export function HowItWorks() {
  const [active, setActive] = useState<Audience>("candidate");

  return (
    <Section>
      <Container>
        <h2 className="text-ink font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Bu qanday ishlaydi
        </h2>

        <div
          role="tablist"
          aria-label="Auditoriya"
          className="border-line bg-surface mt-6 inline-flex rounded-full border p-1"
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              role="tab"
              aria-selected={active === tab.key}
              onClick={() => setActive(tab.key)}
              className={cn(
                "focus-visible:ring-brand rounded-full px-4 py-2 text-sm font-medium transition focus-visible:ring-2 focus-visible:outline-none",
                active === tab.key
                  ? "bg-brand-strong text-brand-foreground"
                  : "text-muted hover:text-ink",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <ol className="relative mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
          <div className="bg-line absolute top-5 right-0 left-0 hidden h-px md:block" aria-hidden />
          {steps[active].map((step, index) => (
            <li key={step.title} className="relative">
              <div className="bg-brand-strong text-brand-foreground ring-bg relative z-10 flex size-10 items-center justify-center rounded-full font-semibold ring-8">
                {index + 1}
              </div>
              <h3 className="text-ink mt-5 text-lg font-semibold">{step.title}</h3>
              <p className="text-muted mt-2 max-w-xs text-sm leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
