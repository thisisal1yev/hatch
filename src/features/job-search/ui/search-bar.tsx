"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { buttonClasses } from "@/shared/ui";
import { cn } from "@/shared/lib";

interface SearchBarProps {
  placeholder: string;
  submitLabel: string;
  className?: string;
}

export function SearchBar({ placeholder, submitLabel, className }: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const q = query.trim();
    router.push(q ? `/jobs?q=${encodeURIComponent(q)}` : "/jobs");
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "border-line bg-surface focus-within:border-brand flex w-full items-center gap-2 rounded-full border p-1.5 pl-4 shadow-sm transition",
        className,
      )}
    >
      <MagnifyingGlass className="text-muted size-5 shrink-0" />
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="text-ink placeholder:text-muted min-w-0 flex-1 bg-transparent text-sm focus:outline-none"
      />
      <button type="submit" className={buttonClasses("primary", "md", "shrink-0")}>
        {submitLabel}
      </button>
    </form>
  );
}
