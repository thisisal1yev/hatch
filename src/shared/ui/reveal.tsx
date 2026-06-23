"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ComponentProps } from "react";

type RevealProps = ComponentProps<typeof motion.div> & { delay?: number };

/**
 * Fade/slide a block in as it enters the viewport. Honors prefers-reduced-motion
 * (renders static). Client leaf; server-rendered children pass straight through.
 */
export function Reveal({ delay = 0, children, ...props }: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
