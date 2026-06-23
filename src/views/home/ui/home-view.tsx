"use client";

import { motion, useReducedMotion } from "motion/react";
import { siteConfig } from "@/shared/config";

/** Landing placeholder. Replaced by the full landing per TZ-LANDING.md. */
export function HomeView() {
  const reduce = useReducedMotion();

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex max-w-xl flex-col items-center gap-4"
      >
        <span className="text-sm font-medium tracking-widest text-zinc-500 uppercase">
          MVP · skeleton
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {siteConfig.name}
        </h1>
        <p className="text-lg text-pretty text-zinc-600 dark:text-zinc-400">
          {siteConfig.description}
        </p>
      </motion.div>
    </main>
  );
}
