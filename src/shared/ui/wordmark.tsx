import { siteConfig } from "@/shared/config";
import { cn } from "@/shared/lib";

/**
 * The Hatch wordmark with a brand-colored dot. The dot keeps the primary brand
 * color regardless of the surrounding text color (header ink, footer ink, the
 * on-band 404), so the mark reads consistently on every surface.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-display font-bold tracking-tight", className)}>
      {siteConfig.name}
      <span className="text-brand">.</span>
    </span>
  );
}
