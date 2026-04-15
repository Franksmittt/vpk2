# Project config (long-term memory)

## Product

Vaalpenskraal Game Reserve marketing and booking site: Waterberg fair-chase hunting, four-chalet camp, Vark Kraal communal hub, full board, quarry roster driven by census. Canonical business fields live in **`client-business-truth.json`**.

## Stack (verified in repo)

| Layer | Choice |
| --- | --- |
| Framework | Next.js **16** App Router (research PDFs say 15; treat 16 as current and apply same patterns) |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS v4, `app/globals.css` @theme |
| Motion | `motion/react` where used |
| Icons | `lucide-react` |
| Content | Static TS data (`data/species.ts`, monographs), local `public/images` |

## Architectural constraints (from `critters/` research)

1. **App Router**: Prefer Server Components; `await params` / `await searchParams` on server. Client islands only for browser APIs and rich interactivity.
2. **SEO / AEO**: `metadataBase` in root layout; per-route `metadata` and `generateMetadata` where dynamic; JSON-LD sanitized (`\u003c`); species slugs pre-render via `generateStaticParams`.
3. **Performance**: Prefer `next/image` with explicit dimensions or `fill` + `sizes`; cap hero and gallery weight; avoid scroll-jacking that blocks normal page scroll.
4. **Security**: No secret in client bundles; mailto-only enquiry flow today; if Server Actions or webhooks are added later, use HMAC or framework hooks per security brief.
5. **Accessibility**: One logical `h1` per page, skip link, visible focus, semantic landmarks; avoid fixed pixel heights on text-only blocks at 200% zoom.
6. **Governance**: New **marketing claims, species, prices, or legal statements** must map to `client-business-truth.json` or be flagged **verify with management**.

## Deployment

Target origin: `https://www.vaalpenskraal.com` (`lib/site.ts`). Production deploy (Vercel or other) is **out of repo**: CI/CD and env secrets are not configured in this pass.

**Runbook (human-operated)**

1. Set host env: any keys required by `next build` (this site builds with optional `.env.local` for local only; do not commit secrets).
2. Point the production domain at the host; confirm `SITE_ORIGIN` in `lib/site.ts` matches live HTTPS origin.
3. After deploy: smoke test `/`, `/species/greater-kudu`, `/reserve`, `/sitemap.xml`, `/robots.txt`.
4. Optional: Rich Results Test on `/reserve` and a sample `/species/[slug]` after go-live.

**Vercel + custom domain (client handoff)**

1. In the Vercel project: **Settings → Domains**: add `www.vaalpenskraal.com` and the bare apex `vaalpenskraal.com` if the client uses both. Set the primary domain to match `SITE_ORIGIN` in `lib/site.ts` (currently `https://www.vaalpenskraal.com`).
2. At the DNS host: point **A/AAAA or CNAME** records as Vercel instructs for each hostname. Wait for propagation; confirm HTTPS auto-provisions.
3. Optional redirect: if traffic should always land on `www`, add the matching redirect in Vercel so Open Graph canonical URLs stay consistent with `metadataBase`.
4. Re-run smoke tests on the **production** hostname (not only the `*.vercel.app` preview URL).

## Changelog

| Date | Summary |
| --- | --- |
| 2026-04-15 | Phase 1: Added `client-business-truth.json`, this file, `workflow_state.md`, and `.cursor/rules` governance pack from `critters/` research ingest. |
| 2026-04-15 | Phase 2: Baseline `npm run lint` + `npm run build` green; JSON-LD hardening (`lib/seo/reserve-json-ld.ts`, species `primaryImageOfPage` + WebSite `@id`); added `aeo-business-truth`, `nextjs-app-router`, `accessibility-performance` Cursor rules. |
| 2026-04-14 | Client handover polish: footer claims aligned to `client-business-truth.json`; contact copy and metadata; root `metadata` description; lodge catering line; monograph em-dash removal and grammar pass; geography fields added to business truth JSON; Vercel domain checklist in this file. |
