# Workflow state (short-term memory)

## Status

| Field | Value |
| --- | --- |
| Phase | COMPLETE (sprint graph) |
| Active node | _(none; PPR/WebCodecs deferred; live deploy is human-hosted)_ |
| Circuit breaker | Autonomous fix attempts per failure: **max 3** (then stop and ask human) |

## Plan (dependency graph)

Atomic order for remaining **engineering** work (marketing pages already ship; this graph tracks hardening and debt).

1. ~~`phase1-governance`~~ **DONE** … `client-business-truth.json`, `project_config.md`, `workflow_state.md`, `.cursor/rules/*.mdc`
2. ~~`validate-baseline`~~ **DONE** … `npm run lint` (tsc --noEmit) + `npm run build` (Next 16.2.3 Turbopack) succeeded 2026-04-15
3. ~~`seo-jsonld-audit`~~ **DONE** … `/reserve` now emits `WebPage` + `potentialAction` `ReserveAction` via `buildReservePageJsonLd()`; species pages add `primaryImageOfPage` when a card exists, `WebSite` `@id` in `isPartOf`. Re-test in Google Rich Results after deploy.
4. ~~`a11y-pass`~~ **DONE** … Root layout already has skip link, `#main-content`, one `<main>`; focus utilities in CSS; full `eslint-plugin-jsx-a11y` not added (project has no ESLint pipeline yet; tracked in `project_config` optional follow-up).
5. `ppr-webcodecs` … **DEFERRED** … research recommends PPR + WebCodecs; not required for current static site until product asks
6. ~~`deploy-runbook`~~ **DONE** … Runbook bullets added under **Deployment** in `project_config.md`

## Log

- **2026-04-15**: Phase 1 files written. Next: run baseline lint and build, record results below.
- **2026-04-15**: Added `.cursor/rules/aeo-business-truth.mdc`, `nextjs-app-router.mdc`, `accessibility-performance.mdc`. Baseline validation: `npm run lint` and `npm run build` both exit 0; 36 static routes generated including 22 species slugs.
- **2026-04-15**: SEO JSON-LD pass: new `lib/seo/reserve-json-ld.ts`; species graph extended. Lint + build re-run: success.
- **2026-04-15**: Engineering graph for this sprint complete (PPR/WebCodecs explicitly deferred). Next human step: connect hosting and run Rich Results on live URLs.
- **2026-04-14**: Client handover polish: footer and contact copy aligned to `client-business-truth.json`, root metadata and lodge catering spec, monograph em-dash purge + grammar fixes, professional alt text and terms IP clause, Vercel domain checklist in `project_config.md`. `npm run lint` + `npm run build` green.

## ArchiveLog

_(Empty. When ## Log exceeds ~5000 characters, move older bullets here and trim ## Log.)_
