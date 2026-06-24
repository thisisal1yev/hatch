"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Briefcase, CaretLeft, CheckCircle, Rocket } from "@phosphor-icons/react";
import { gradeLabel, stageLabel } from "@/entities/job";
import { Button, ButtonLink, PasswordField, SelectField, TextField } from "@/shared/ui";
import { cn } from "@/shared/lib";
import { emptyRegister, type RegisterValues, type Role } from "../model/types";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const gradeOptions = Object.entries(gradeLabel).map(([value, label]) => ({ value, label }));
const stageOptions = Object.entries(stageLabel).map(([value, label]) => ({ value, label }));
const cityOptions = [
  "Toshkent",
  "Samarqand",
  "Buxoro",
  "Andijon",
  "Namangan",
  "Fargʻona",
  "Nukus",
  "Qarshi",
  "Masofaviy / boshqa",
].map((c) => ({ value: c, label: c }));

type Errors = Partial<Record<keyof RegisterValues, string>>;

function validateStep(step: number, v: RegisterValues): Errors {
  const e: Errors = {};
  if (step === 1) {
    if (!v.name.trim()) e.name = "Ismingizni kiriting";
    if (!v.email.trim()) e.email = "Email kiriting";
    else if (!emailRe.test(v.email)) e.email = "Email manzil notoʻgʻri";
    if (!v.password) e.password = "Parol kiriting";
    else if (v.password.length < 8) e.password = "Kamida 8 ta belgi";
  }
  if (step === 2 && v.role === "talent") {
    if (!v.headline.trim()) e.headline = "Yoʻnalishingizni kiriting";
    if (!v.city) e.city = "Shaharni tanlang";
    if (!v.grade) e.grade = "Darajani tanlang";
  }
  if (step === 2 && v.role === "startup") {
    if (!v.company.trim()) e.company = "Kompaniya nomini kiriting";
    if (!v.stage) e.stage = "Bosqichni tanlang";
    if (v.website.trim() && !/\./.test(v.website)) e.website = "Sayt manzili notoʻgʻri";
  }
  return e;
}

const roleMeta: Record<Role, { icon: typeof Briefcase; title: string; desc: string }> = {
  talent: {
    icon: Briefcase,
    title: "Startupga qoʻshilmoqchiman",
    desc: "Ekosistemadagi kuchli startuplarga qoʻshiling",
  },
  startup: {
    icon: Rocket,
    title: "Kuchlilarni izlamoqdaman",
    desc: "Oʻz sohasining mutaxassisini izlamoqdaman",
  },
};

function RoleOption({
  role,
  selected,
  onSelect,
}: {
  role: Role;
  selected: boolean;
  onSelect: () => void;
}) {
  const { icon: Icon, title, desc } = roleMeta[role];
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "focus-visible:ring-brand flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition focus-visible:ring-2 focus-visible:outline-none",
        selected
          ? "border-brand bg-brand-soft/50 ring-brand/30 ring-1"
          : "border-line bg-surface hover:border-brand/40 hover:bg-surface-2",
      )}
    >
      <span
        className={cn(
          "flex size-11 shrink-0 items-center justify-center rounded-xl transition",
          selected ? "bg-brand-strong text-brand-foreground" : "bg-surface-2 text-muted",
        )}
      >
        <Icon weight={selected ? "fill" : "regular"} className="size-6" />
      </span>
      <span className="min-w-0">
        <span className="text-ink block font-medium">{title}</span>
        <span className="text-muted block text-sm">{desc}</span>
      </span>
      <span
        className={cn(
          "ml-auto flex size-5 shrink-0 items-center justify-center rounded-full border transition",
          selected ? "border-brand-strong bg-brand-strong" : "border-line",
        )}
        aria-hidden
      >
        {selected && <CheckCircle weight="fill" className="text-brand-foreground size-5" />}
      </span>
    </button>
  );
}

const STEP_TITLES = ["Rol", "Akkaunt", "Profil"];

function Stepper({ step }: { step: number }) {
  return (
    <ol className="flex items-center justify-center gap-2 sm:justify-start" aria-label="Qadamlar">
      {STEP_TITLES.map((title, i) => {
        const state = i < step ? "done" : i === step ? "current" : "todo";
        return (
          <li key={title} className="flex items-center gap-2 sm:flex-1">
            <span
              aria-current={state === "current" ? "step" : undefined}
              className={cn(
                "flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition",
                state === "done" && "bg-brand-strong text-brand-foreground",
                state === "current" && "border-brand-strong text-brand-strong border-2",
                state === "todo" && "border-line text-muted border",
              )}
            >
              {i + 1}
            </span>
            <span
              className={cn(
                "hidden text-xs font-medium sm:block",
                state === "todo" ? "text-muted" : "text-ink",
              )}
            >
              {title}
            </span>
            {i < STEP_TITLES.length - 1 && (
              <span
                className={cn(
                  "ml-1 h-px w-10 transition sm:w-auto sm:flex-1",
                  i < step ? "bg-brand-strong" : "bg-line",
                )}
                aria-hidden
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}

export function RegisterWizard() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [values, setValues] = useState<RegisterValues>(emptyRegister);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) headingRef.current?.focus();
    mounted.current = true;
  }, [step, done]);

  const set = (patch: Partial<RegisterValues>) => setValues((v) => ({ ...v, ...patch }));
  const errors = validateStep(step, values);
  const err = (k: keyof RegisterValues) => (touched[k] ? errors[k] : undefined);
  const touch = (k: keyof RegisterValues) => setTouched((t) => ({ ...t, [k]: true }));

  const back = () => {
    setDir(-1);
    setStep((s) => Math.max(0, s - 1));
  };

  const next = async () => {
    const stepErrors = validateStep(step, values);
    if (Object.keys(stepErrors).length > 0) {
      const allTouched = Object.fromEntries(Object.keys(stepErrors).map((k) => [k, true]));
      setTouched((t) => ({ ...t, ...allTouched }));
      return;
    }
    if (step < 2) {
      setDir(1);
      setStep((s) => s + 1);
      return;
    }
    // final step → mock submit
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setDone(true);
  };

  if (done) {
    const talent = values.role === "talent";
    return (
      <div ref={headingRef} tabIndex={-1} className="text-center outline-none">
        <span className="bg-accent-soft text-accent-soft-foreground mx-auto flex size-14 items-center justify-center rounded-2xl">
          <CheckCircle weight="fill" className="size-8" />
        </span>
        <h1 className="text-ink font-display mt-6 text-2xl font-bold tracking-tight">
          Akkaunt tayyor{values.name ? `, ${values.name.split(" ")[0]}` : ""}!
        </h1>
        <p className="text-muted mx-auto mt-2 max-w-xs text-sm">
          {talent
            ? "Endi ochiq oʻrinlarni koʻrib, toʻgʻridan-toʻgʻri asoschilarga ariza topshiring."
            : "Endi eʼlon joylab, mos isteʼdodlarni saralashni boshlang."}
        </p>
        <ButtonLink href={talent ? "/jobs" : "/for-employers"} size="lg" className="mt-8 w-full">
          {talent ? "Oʻrinlarni koʻrish" : "Eʼlon joylash"}
        </ButtonLink>
      </div>
    );
  }

  const slide = {
    initial: reduce ? false : { opacity: 0, x: dir * 24 },
    animate: { opacity: 1, x: 0 },
    exit: reduce ? undefined : { opacity: 0, x: dir * -24 },
  };

  return (
    <div>
      <div className="text-center sm:text-left">
        <h1 className="text-ink font-display text-3xl font-bold tracking-tight">
          Roʻyxatdan oʻtish
        </h1>
        <p className="text-muted mt-2 text-sm">
          Hisobingiz bormi?{" "}
          <Link href="/login" className="text-brand-strong font-medium hover:underline">
            Kiring
          </Link>
        </p>
      </div>

      <div className="mt-8">
        <Stepper step={step} />
      </div>

      <div className="mt-8 min-h-[280px]">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={step}
            initial={slide.initial}
            animate={slide.animate}
            exit={slide.exit}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div ref={headingRef} tabIndex={-1} className="outline-none">
              {step === 0 && (
                <fieldset className="flex flex-col gap-3">
                  <legend className="text-ink mb-1 text-sm font-medium">
                    Hatch’dan nima izlayapsiz?
                  </legend>
                  <RoleOption
                    role="talent"
                    selected={values.role === "talent"}
                    onSelect={() => set({ role: "talent" })}
                  />
                  <RoleOption
                    role="startup"
                    selected={values.role === "startup"}
                    onSelect={() => set({ role: "startup" })}
                  />
                </fieldset>
              )}

              {step === 1 && (
                <div className="flex flex-col gap-5">
                  <TextField
                    label="Toʻliq ism"
                    autoComplete="name"
                    placeholder="Aziz Karimov"
                    value={values.name}
                    onChange={(e) => set({ name: e.target.value })}
                    onBlur={() => touch("name")}
                    error={err("name")}
                    required
                  />
                  <TextField
                    label="Email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="siz@example.com"
                    value={values.email}
                    onChange={(e) => set({ email: e.target.value })}
                    onBlur={() => touch("email")}
                    error={err("email")}
                    required
                  />
                  <PasswordField
                    label="Parol"
                    autoComplete="new-password"
                    placeholder="Kamida 8 ta belgi"
                    helper="Kamida 8 ta belgidan iborat boʻlsin"
                    value={values.password}
                    onChange={(e) => set({ password: e.target.value })}
                    onBlur={() => touch("password")}
                    error={err("password")}
                    required
                  />
                </div>
              )}

              {step === 2 && values.role === "talent" && (
                <div className="flex flex-col gap-5">
                  <TextField
                    label="Yoʻnalish"
                    placeholder="Frontend muhandis"
                    value={values.headline}
                    onChange={(e) => set({ headline: e.target.value })}
                    onBlur={() => touch("headline")}
                    error={err("headline")}
                    required
                  />
                  <SelectField
                    label="Shahar"
                    placeholder="Shaharni tanlang"
                    options={cityOptions}
                    value={values.city}
                    onChange={(e) => set({ city: e.target.value })}
                    onBlur={() => touch("city")}
                    error={err("city")}
                    required
                  />
                  <SelectField
                    label="Daraja"
                    placeholder="Darajani tanlang"
                    options={gradeOptions}
                    value={values.grade}
                    onChange={(e) => set({ grade: e.target.value })}
                    onBlur={() => touch("grade")}
                    error={err("grade")}
                    required
                  />
                </div>
              )}

              {step === 2 && values.role === "startup" && (
                <div className="flex flex-col gap-5">
                  <TextField
                    label="Kompaniya nomi"
                    autoComplete="organization"
                    placeholder="Hatch"
                    value={values.company}
                    onChange={(e) => set({ company: e.target.value })}
                    onBlur={() => touch("company")}
                    error={err("company")}
                    required
                  />
                  <SelectField
                    label="Bosqich"
                    placeholder="Bosqichni tanlang"
                    options={stageOptions}
                    value={values.stage}
                    onChange={(e) => set({ stage: e.target.value })}
                    onBlur={() => touch("stage")}
                    error={err("stage")}
                    required
                  />
                  <TextField
                    label="Veb-sayt"
                    type="url"
                    inputMode="url"
                    placeholder="hatch.uz"
                    helper="Ixtiyoriy"
                    value={values.website}
                    onChange={(e) => set({ website: e.target.value })}
                    onBlur={() => touch("website")}
                    error={err("website")}
                  />
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center gap-3">
        {step > 0 && (
          <Button
            type="button"
            variant="secondary"
            size="lg"
            onClick={back}
            disabled={submitting}
            className="shrink-0"
            aria-label="Orqaga"
          >
            <CaretLeft className="size-4" />
            Orqaga
          </Button>
        )}
        <Button
          type="button"
          size="lg"
          onClick={next}
          disabled={submitting || (step === 0 && !values.role)}
          className="flex-1"
        >
          {submitting ? "Yaratilmoqda…" : step < 2 ? "Davom etish" : "Akkaunt yaratish"}
        </Button>
      </div>
    </div>
  );
}
