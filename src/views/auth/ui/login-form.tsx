"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle } from "@phosphor-icons/react";
import { Button, ButtonLink, PasswordField, TextField } from "@/shared/ui";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Errors = { email?: string; password?: string };

function validate(email: string, password: string): Errors {
  const e: Errors = {};
  if (!email.trim()) e.email = "Email kiriting";
  else if (!emailRe.test(email)) e.email = "Email manzil notoʻgʻri";
  if (!password) e.password = "Parol kiriting";
  return e;
}

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const errors = validate(email, password);
  const show = (k: keyof Errors) => (touched[k] ? errors[k] : undefined);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ email: true, password: true });
    if (Object.keys(errors).length > 0) return;
    setSubmitting(true);
    // No backend yet — simulate the request round-trip.
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setDone(true);
  };

  if (done) {
    return (
      <div className="text-center">
        <span className="bg-accent-soft text-accent-soft-foreground mx-auto flex size-14 items-center justify-center rounded-2xl">
          <CheckCircle weight="fill" className="size-8" />
        </span>
        <h1 className="text-ink font-display mt-6 text-2xl font-bold tracking-tight">
          Xush kelibsiz!
        </h1>
        <p className="text-muted mt-2 text-sm">Siz tizimga kirdingiz.</p>
        <ButtonLink href="/jobs" size="lg" className="mt-8 w-full">
          Oʻrinlarni koʻrish
        </ButtonLink>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center sm:text-left">
        <h1 className="text-ink font-display text-3xl font-bold tracking-tight">Kirish</h1>
        <p className="text-muted mt-2 text-sm">
          Hisobingiz yoʻqmi?{" "}
          <Link href="/register" className="text-brand-strong font-medium hover:underline">
            Roʻyxatdan oʻting
          </Link>
        </p>
      </div>

      <form onSubmit={onSubmit} noValidate className="mt-8 flex flex-col gap-5">
        <TextField
          label="Email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="siz@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, email: true }))}
          error={show("email")}
          required
        />

        <div>
          <PasswordField
            label="Parol"
            autoComplete="current-password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, password: true }))}
            error={show("password")}
            required
          />
          <div className="mt-1.5 text-right">
            <Link
              href="/login"
              className="text-muted hover:text-ink text-xs transition"
              aria-disabled
            >
              Parolni unutdingizmi?
            </Link>
          </div>
        </div>

        <Button type="submit" size="lg" disabled={submitting} className="mt-1 w-full">
          {submitting ? "Kirilmoqda…" : "Kirish"}
        </Button>
      </form>
    </div>
  );
}
