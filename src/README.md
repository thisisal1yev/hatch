# Frontend architecture — Feature-Sliced Design (FSD)

This app uses [Feature-Sliced Design](https://feature-sliced.design) adapted for the
Next.js App Router.

## Layers (top → bottom)

| Layer | Folder | Purpose |
|---|---|---|
| app (routing) | `app/` | **Next.js routing only.** Layouts, pages, route handlers, middleware. Each route file stays thin and renders a composition from `views/`. Also hosts app-wide providers and global styles (FSD "app" layer concerns). |
| pages | `views/` | Full page compositions. Renamed from FSD's `pages` because Next reserves `pages/` for the old Pages Router. |
| widgets | `widgets/` | Self-contained blocks composed of features/entities (e.g. job card grid, site header). |
| features | `features/` | User-facing actions with business value (e.g. apply-to-job, job-search-bar). |
| entities | `entities/` | Business domain models and their UI (e.g. job, candidate, company). |
| shared | `shared/` | Framework/UI primitives and utilities with no business logic: `ui/`, `lib/`, `config/`, `supabase/`. |

## The import rule

A module may only import from layers **strictly below** it:

```
app  →  views  →  widgets  →  features  →  entities  →  shared
```

- `shared` imports nothing from upper layers.
- Slices within the same layer do not import each other. Compose them one layer up, or extract the shared part down to `shared`/`entities`.

## Public API

Each slice exposes a public API through its `index.ts`. Import a slice by its root
(`@/features/job-search`), never reach into its internals
(`@/features/job-search/ui/SearchInput`). Path alias `@/*` → `src/*`.

## Security note

The Supabase `service_role` key is server-only. It must never be imported into a
client component or any module that ends up in the browser bundle. See
`shared/supabase/`.
