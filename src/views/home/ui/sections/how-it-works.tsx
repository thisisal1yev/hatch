"use client";

import { useState } from "react";
import { Container, Section } from "@/shared/ui";
import { cn } from "@/shared/lib";

type Audience = "candidate" | "employer";

const tabs: { key: Audience; label: string }[] = [
  { key: "candidate", label: "Nomzodlar uchun" },
  { key: "employer", label: "Ish beruvchilar uchun" },
];

const steps: Record<Audience, { title: string; body: string }[]> = {
  candidate: [
    {
      title: "Profil yarating",
      body: "Google yoki GitHub orqali kiring, profilni toʻldiring va CV yuklang.",
    },
    {
      title: "Vakansiyalarni qidiring",
      body: "Koʻnikma, format, shahar va maosh boʻyicha filtrlang.",
    },
    {
      title: "Ariza topshiring",
      body: "Ish beruvchi arizani maʼqullasa, ikkala tomon kontaktni koʻradi.",
    },
  ],
  employer: [
    {
      title: "Kompaniya profili",
      body: "Kompaniyani roʻyxatdan oʻtkazing va tasdiq belgisini oling.",
    },
    { title: "Vakansiya joylang", body: "Eʼlon moderatsiyadan oʻtgach chop etiladi." },
    {
      title: "Arizalarni koʻring",
      body: "Statuslarni boshqaring, mos nomzod bilan toʻgʻridan-toʻgʻri bogʻlaning.",
    },
  ],
};

export function HowItWorks() {
  const [active, setActive] = useState<Audience>("candidate");

  return (
    <Section className="bg-surface-2">
      <Container>
        <h2 className="text-foreground text-3xl font-semibold tracking-tight sm:text-4xl">
          Bu qanday ishlaydi
        </h2>

        <div
          role="tablist"
          aria-label="Auditoriya"
          className="border-border bg-background mt-6 inline-flex rounded-full border p-1"
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              role="tab"
              aria-selected={active === tab.key}
              onClick={() => setActive(tab.key)}
              className={cn(
                "focus-visible:ring-accent rounded-full px-4 py-2 text-sm font-medium transition focus-visible:ring-2 focus-visible:outline-none",
                active === tab.key
                  ? "bg-brand text-brand-foreground"
                  : "text-muted hover:text-foreground",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {steps[active].map((step, index) => (
            <li key={step.title}>
              <div className="bg-accent-soft text-accent-soft-foreground flex size-10 items-center justify-center rounded-full font-semibold">
                {index + 1}
              </div>
              <h3 className="text-foreground mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="text-muted mt-2 text-sm leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
