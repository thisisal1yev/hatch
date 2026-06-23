"use client";

import { useState } from "react";
import { Plus, Minus } from "@phosphor-icons/react";
import { Container, Section } from "@/shared/ui";
import { cn } from "@/shared/lib";

const items: { q: string; a: string }[] = [
  {
    q: "Nomzodlar uchun bepulmi?",
    a: "Ha, toʻliq bepul. Toʻlovni faqat ish beruvchilar amalga oshiradi.",
  },
  {
    q: "Maʼlumotlarim va CV qanday himoyalangan?",
    a: "CV yopiq saqlanadi. Uni faqat siz va arizangizni maʼqullagan ish beruvchi koʻra oladi.",
  },
  {
    q: "Boshqa saytlardan farqingiz nima?",
    a: "Har bir vakansiya moderatsiyadan oʻtadi, maosh esa soʻm va dollarda shaffof koʻrsatiladi.",
  },
  {
    q: "Ish beruvchi bilan qanday bogʻlanaman?",
    a: "Ish beruvchi arizani maʼqullagach, ikkala tomon bir-birining kontaktini (Telegram yoki telefon) koʻradi.",
  },
  {
    q: "Vakansiya joylash qancha vaqt oladi?",
    a: "Eʼlon moderatsiyadan oʻtgach chop etiladi, odatda bir necha soat ichida.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="bg-surface-2">
      <Container className="max-w-3xl">
        <h2 className="text-foreground text-3xl font-semibold tracking-tight sm:text-4xl">
          Tez-tez beriladigan savollar
        </h2>

        <div className="border-border divide-border mt-8 divide-y border-y">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-foreground font-medium">{item.q}</span>
                  {isOpen ? (
                    <Minus className="text-accent size-5 shrink-0" />
                  ) : (
                    <Plus className="text-muted size-5 shrink-0" />
                  )}
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]",
                  )}
                >
                  <p className="text-muted overflow-hidden text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
