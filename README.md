# Hatch

Маркетплейс **стартапов и талантов** для Узбекистана (аналог Wellfound). Английский
вордмарк, узбекский UI — чтобы продукт можно было масштабировать глобально. Ключевое
отличие: открытая прозрачность **зарплаты + equity** (доли в стартапе).

Продукт позиционируется вокруг **стартап-экосистемы**, а не «IT-вакансий» — вся
пользовательская копирайтинг-часть выдержана в стартап-рамке.

🌐 Продакшен: **https://it-hatch.vercel.app**

## Стек

Next.js 16 (App Router, RSC) · React 19 · TypeScript (strict) · Tailwind CSS v4 ·
Supabase (`@supabase/ssr`) · Zod · Motion · Phosphor Icons · Vitest. Пакетный
менеджер — **Bun**.

## Архитектура

Frontend построен по **Feature-Sliced Design** внутри `src/`, тонкий слой роутинга Next:

```
src/
  app/        # только роутинг Next (layout, page, sitemap.ts, robots.ts, иконки, og)
  views/      # композиции страниц (напр. views/home собирает лендинг)
  widgets/    # крупные блоки (site-header, site-footer)
  features/   # пользовательские действия (job-search, role-spotlight)
  entities/   # доменные модели + доступ к данным (job, market)
  shared/     # UI-кит, lib, config, seo, supabase-клиенты
```

Правило импортов — слой может импортировать только из слоёв ниже:
`views → widgets → features → entities → shared`. Каждый слайс отдаёт публичное API
через `index.ts`; импортируйте через бочку (barrel), а не по глубоким путям. Алиас
`@/*` → `src/*`. Полный гайд — в [`CLAUDE.md`](./CLAUDE.md).

### Слой данных

Живой базы пока нет. Функции `entities/*/api/*` (`getFreshJobs`, `getMarketStats`)
асинхронны и возвращают типизированные demo-данные — это шов для замены: позже return
меняется на запрос к Supabase, и ни один вызывающий код не трогается. Demo-метрики
помечаются честной плашкой `SampleNote` («Namuna maʼlumotlar»).

## Быстрый старт

```bash
bun install
cp .env.example .env   # заполнить значения Supabase; NEXT_PUBLIC_SITE_URL для локали = localhost
bun run dev            # http://localhost:3000
```

## Команды

| Команда | Описание |
| --- | --- |
| `bun run dev` | dev-сервер (http://localhost:3000) |
| `bun run build` | прод-сборка (запускает `tsc`, статически пререндерит `/`) |
| `bun run typecheck` | `tsc --noEmit` |
| `bun run lint` / `lint:fix` | ESLint |
| `bun run test` | Vitest (run-режим) |
| `bun run format` / `format:check` | Prettier |

Перед тем как считать задачу готовой:
`bun run typecheck && bun run lint && bun run test && bun run build`.

## SEO и метаданные

- Абсолютный origin — единый источник `getSiteUrl()` (`shared/config`); используется в
  метаданных `layout.tsx`, `robots.ts`, `sitemap.ts` и JSON-LD.
- Иконки и соц-карточки — file-based metadata в `src/app/`: `icon.svg`, `favicon.ico`,
  `apple-icon.png`, `opengraph-image.tsx` (1200×630 через `next/og`), `twitter-image.tsx`.
- Структурированные данные (JSON-LD) — слайс `shared/seo`: `SiteJsonLd`
  (Organization + WebSite) и `FaqJsonLd` (FAQPage).

## Деплой

Хостинг — **Vercel**, продакшен на https://it-hatch.vercel.app. В переменных окружения
проекта Vercel задайте `NEXT_PUBLIC_SITE_URL` (Production = прод-URL, Preview = preview-URL),
чтобы canonical / Open Graph / JSON-LD ссылки были абсолютными. Если переменная не задана,
приложение по умолчанию использует прод-URL.

## Копирайтинг

UI на узбекском (латиница) с апострофом `ʻ` (U+02BB, как в `soʻm`, `oʻrin`). По-английски —
только вордмарк «Hatch». Роуты/слаги могут оставаться английскими (`/jobs`, `/for-employers`).
