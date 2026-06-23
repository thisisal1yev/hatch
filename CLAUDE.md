# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Product

**Hatch** — a startup × talent marketplace for Uzbekistan (wellfound-equivalent), built
English-wordmark / Uzbek-UI so it can globalize. Differentiator: open salary **+ equity**
transparency. The product is positioned around the **startup ecosystem**, not IT jobs — keep all
user-facing copy startup-framed.

## Commands

Package manager is **Bun**.

- `bun run dev` — dev server (http://localhost:3000)
- `bun run build` — production build (also runs `tsc`); statically prerenders `/`
- `bun run typecheck` — `tsc --noEmit`
- `bun run lint` / `bun run lint:fix` — ESLint (next core-web-vitals + typescript, prettier-aware)
- `bun run test` — vitest (run mode)
- `bun run format` / `bun run format:check` — Prettier

Single test: `bunx vitest run src/entities/market/lib/demo-data.test.ts`, or filter by name with
`bunx vitest run -t "formats an equity range"`. Vitest config (`vitest.config.ts`): node env,
`@` → `src` alias, includes `src/**/*.test.ts` only.

Before claiming work done, run `bun run typecheck && bun run lint && bun run test && bun run build`.

## Deployment

Hosted on **Vercel**, production at **https://it-hatch.vercel.app**. Set
`NEXT_PUBLIC_SITE_URL` in the Vercel project env (Production = the prod URL, Preview = the
preview URL) so canonical / Open Graph / JSON-LD URLs are absolute and correct. If unset,
`getSiteUrl()` falls back to the production URL; local dev overrides it via `.env`.

## Architecture

Next.js 16 App Router (RSC), React 19, Tailwind v4, `motion` (import from `motion/react`),
Supabase (`@supabase/ssr`), `zod`. Path alias `@/*` → `src/*`. `tsconfig` is `strict` with
**`noUncheckedIndexedAccess`** — indexed access is `T | undefined`, so guard or assert (`arr[i]!`)
when an index is loop-guaranteed.

### Feature-Sliced Design

`src/app/` holds Next routes only; all UI lives in FSD layers, imported strictly downward:

```
views → widgets → features → entities → shared
```

- `views/` — full page compositions (e.g. `views/home` assembles the landing from section files).
- `widgets/` — large standalone blocks (`site-header`, `site-footer`).
- `features/` — user interactions (`job-search`, `role-spotlight`).
- `entities/` — domain models + data access (`job`, `market`).
- `shared/` — UI kit, `lib` (`cn`), `config`, `supabase` clients.

Every slice exposes a public API via its `index.ts` barrel; import slices through the barrel,
not deep paths. Internally a slice splits into `model/` (types), `ui/`, `lib/` (pure helpers),
`api/` (data access). Cross-entity type imports (e.g. `market` importing `Stage` from `job`) go
through the barrel.

### Data layer & the Supabase seam

There is **no live database yet**. `entities/*/api/*` functions (`getFreshJobs`, `getMarketStats`)
are `async` and return typed demo/mock data — they are the swap seam: replacing the return with a
Supabase query later changes one file and no callers. Demo metrics must stay internally consistent
and ship with an honest `SampleNote` ("Namuna maʼlumotlar"); never label demo data as live/real-time.
Supabase clients exist in `shared/supabase` (server client is `server-only`, reads cookies, relies on
RLS via the anon key) but are unused until a schema lands.

### Environment config

`shared/config/env.ts` validates public `NEXT_PUBLIC_*` vars with zod, lazily (app boots without
Supabase creds during skeleton stage). `env.server.ts` holds secrets and is **deliberately not
re-exported** from `shared/config/index.ts` — never import it into client code.

### Styling & theming

Design tokens are CSS variables in `app/globals.css`; `@theme inline` maps them to Tailwind color
utilities (`bg-brand`, `text-muted`, etc.). Semantic tokens flip under `prefers-color-scheme: dark`.
The hero uses a fixed dark band via custom `@utility bg-band` / `bg-grain`. Add new colors as a
`--token` plus a `--color-token` mapping, not as hard-coded hex in components.

### SEO, metadata & icons

`getSiteUrl()` (in `shared/config`) is the single source of the absolute origin — use it in
`layout.tsx` metadata, `robots.ts`, `sitemap.ts`, and JSON-LD; never re-derive the URL from
`process.env`. Icons and social cards use **Next file-based metadata** in `src/app/`:
`icon.svg` (gradient mark, modern browsers), `favicon.ico` (raster fallback), `apple-icon.png`,
and `opengraph-image.tsx` (1200×630 via `next/og`); `twitter-image.tsx` re-exports the OG image.
The OG route loads brand fonts from a CDN with a `try/catch` fallback so it never fails the build.
Satori (`next/og`) can't read the OKLCH CSS vars, so the OG component hardcodes sRGB hex mirroring
the Daybreak tokens — keep them in sync if the tokens change.

Structured data lives in the `shared/seo` slice: `SiteJsonLd` (Organization + WebSite) and a
generic `FaqJsonLd` that takes Q/A pairs (the slice stays domain-agnostic; the view owns the
content — home FAQ data is in `views/home/model/faq.ts`, shared by the UI section and the JSON-LD).
JSON-LD is server-rendered via `dangerouslySetInnerHTML` with `<` escaped — only ever feed it
static, developer-authored content. `sitemap.ts` must list **only routes that actually exist**;
add entries as routes ship (a sitemap of 404s erodes crawl trust).

### Motion & the RSC boundary

Animated components are **client leaves** (`"use client"`) and must honor `prefers-reduced-motion`
(see `shared/ui/reveal.tsx`, `stat-counter.tsx`, `comp-bar.tsx`, `role-spotlight`). Two rules that
have bitten builds:

1. **Never pass a function from a Server Component to a Client Component** — it fails prerender
   ("Functions cannot be passed directly to Client Components"). Pass serializable props instead
   (`StatCounter` takes `prefix`/`suffix` strings, not a formatter fn).
2. Prefer motion values over React state for animation loops (`StatCounter` animates a
   `useMotionValue`, not `setState`) to avoid `react-hooks/set-state-in-effect` lint failures and
   needless re-renders.

## Copy conventions

UI copy is Uzbek (Latin) using the apostrophe `ʻ` (U+02BB, as in `soʻm`, `oʻrin`). Only the
"Hatch" wordmark is English. Routes/slugs may stay English (`/jobs`, `/for-employers`).

## Notes

- `docs/superpowers/` (design specs and plans) is gitignored and intentionally not committed.
