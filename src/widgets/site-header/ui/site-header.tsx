"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ButtonLink, Container, Wordmark } from "@/shared/ui";
import { cn } from "@/shared/lib";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-colors duration-300",
        scrolled ? "border-line bg-bg/80 border-b backdrop-blur" : "border-b border-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="text-ink hover:text-ink/80 transition">
          <Wordmark className="text-lg" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/jobs" className="text-muted hover:text-ink text-sm transition">
            Oʻrinlar
          </Link>
          <Link href="/for-employers" className="text-muted hover:text-ink text-sm transition">
            Startuplar uchun
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="text-muted hover:text-ink hidden text-sm transition sm:block"
          >
            Kirish
          </Link>
          <ButtonLink href="/for-employers">Startup sifatida eʼlon ber</ButtonLink>
        </div>
      </Container>
    </header>
  );
}
