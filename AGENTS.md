# Vaalpenskraal Game Reserve: Agent and engineer mandates

This repository is a **Next.js App Router** marketing and booking site for Vaalpenskraal Game Reserve. Work must stay aligned with **luxury editorial UI**, **GEO/SEO**, and **accessibility** (see root `.cursorrules` and `CLAUDE.md`).

## Next.js documentation targeting

- **Canonical API references** live under **`.next-docs/`** (see `.next-docs/README.md`). Before shipping features that depend on App Router, Metadata, or caching behaviour, confirm behaviour against the **version-pinned** material stored there. **Policy:** treat **Next.js 15** App Router and Metadata docs as the behavioural baseline; when `package.json` lists a newer major (e.g. 16), diff against 15 release notes before adopting breaking changes.
- Do not rely on stale blog posts or unversioned search snippets when behaviour is ambiguous.

## App Router structural integrity

- Every **route segment directory** under `app/` that implements a URL must contain:
  - **`page.tsx`** when that segment is a leaf (or defines the segment UI), and
  - **`layout.tsx`** when that segment is part of the tree (including pass-through layouts).
- The **root** `app/` segment uses `app/layout.tsx` + `app/page.tsx`.
- **Nested segments** (e.g. `app/reserve/`, `app/species/[slug]/`) must each include their own `layout.tsx` if the segment exists as a directory, so the tree stays explicit and composable.

## Server Components by default

- **`page.tsx` and `layout.tsx` under `app/` must be Server Components** unless there is a documented exception: do not place **`"use client"`** at the top of those files for convenience.
- **Client interactivity** belongs in leaf components under `components/`** (or colocated client modules) imported into Server pages/layouts.
- **Home (`/`)**: `app/page.tsx` is a Server Component that exports `metadata` and renders **`components/home/HomePageClient.tsx`**, which carries **`"use client"`** and all hero, carousel, and testimonial state. New marketing pages should follow the same split pattern.

## Naming exports

- Default-exported route modules must be **named `const` functions** whose identifier ends in **`Page`** or **`Layout`** (e.g. `const ReservePage = () => { ... }; export default ReservePage;`).
- Same pattern for layouts: `const ReserveLayout = ({ children }) => ...; export default ReserveLayout;`.

## Metadata (every page)

- Every **`app/**/page.tsx`** must export a **`metadata` constant** typed as **`Metadata`** from `next` (static object) **or** **`generateMetadata`** when data-driven. No route leaf may ship without explicit metadata suitable for GEO/SEO.
- **`metadataBase`** is set on the **root** `app/layout.tsx` so relative Open Graph and canonical URLs resolve correctly; child layouts may narrow `title` or `description` but must not break the base URL strategy.

## Tailwind CSS v4

- **No `tailwind.config.js`**: theme and utilities live in **`app/globals.css`** via `@import "tailwindcss"`, `@theme`, and `@layer`.
- Spacing and colour tokens are **single-source** in `@theme` (see `globals.css`).

## Scope of this document

`AGENTS.md` defines **how** we build. Product facts (species, lodge) live in `data/` and `VAALPENSKRAAL_FEATURES_AND_SPECIES.txt`. When in doubt, prefer **honest estate copy** over generic safari filler.
