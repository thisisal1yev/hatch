"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { cn } from "@/shared/lib";

interface CompBarProps {
  label: string;
  /** Bar width as a percent of the section max, 0..100. */
  widthPct: number;
  cashLabel: string;
  equityLabel: string;
  delay?: number;
  className?: string;
}

/** A labelled cash bar with an equity badge. Grows on scroll-in; static under reduced-motion. */
export function CompBar({
  label,
  widthPct,
  cashLabel,
  equityLabel,
  delay = 0,
  className,
}: CompBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const target = `${widthPct}%`;

  return (
    <div ref={ref} className={cn("w-full", className)}>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <span className="text-foreground text-sm font-medium">{label}</span>
        <span className="text-muted text-sm tabular-nums">
          {cashLabel}
          <span className="text-accent-soft-foreground bg-accent-soft ml-2 rounded-full px-2 py-0.5 text-xs font-medium">
            {equityLabel} equity
          </span>
        </span>
      </div>
      <div className="bg-surface-2 mt-2 h-2.5 w-full overflow-hidden rounded-full">
        <motion.div
          className="bg-brand h-full rounded-full"
          initial={reduce ? false : { width: 0 }}
          animate={{ width: reduce ? target : inView ? target : 0 }}
          transition={reduce ? { duration: 0 } : { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}
