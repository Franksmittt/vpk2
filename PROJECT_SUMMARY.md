# Project summary

Last updated: 2026-06-14

## What this project is

Vaalpenskraal Game Reserve is a Next.js App Router marketing and enquiry site for a premium fair-chase hunting estate in the Waterberg, Limpopo, South Africa. The site positions the estate around PH-led hunting, a census-driven quarry roster, four guest chalets on the hunting camp, fully catered hospitality at Vark Kraal, and practical enquiry flows for hunt planning.

Business facts are governed by `client-business-truth.json`. New public claims about species, accommodation, catering, permits, shuttles, prices, or legal processes should be checked against that file before copy changes ship.

## Current website status

The website is implemented as a mostly static, editorial marketing site. It is ready for local build and static export work, while live production hosting, DNS, and any post-deploy rich-results checks remain outside the repository.

### Stack

- Framework: Next.js 16 App Router.
- UI: React 19 with TypeScript.
- Styling: Tailwind CSS v4 through `app/globals.css`.
- Motion and icons: `motion/react` and `lucide-react`.
- Output: production builds use static export into `dist/` through `next.config.mjs`.
- Images: `next/image` is configured with `unoptimized: true` for static export. Local assets are served from `public/`, with `picsum.photos` still allowed for remote placeholder or representative imagery where used.

### Public route surface

Current page routes under `app/`:

- `/`: home page with editorial hero, hunt code, lodge teaser, quarry highlights, testimonials, and booking CTAs.
- `/the-hunt`: hunt overview and booking education.
- `/species`: quarry roster landing page.
- `/species/[slug]`: generated species detail pages for the quarry roster.
- `/lodge`: camp and accommodation overview.
- `/reserve`: hunt enquiry and planning flow.
- `/contact`: general enquiry page.
- `/activities`: on-estate activities page.
- `/experience`: atmosphere and estate experience page.
- `/gallery`: hunt-week and bushveld gallery.
- `/booking`: server redirect alias to `/reserve`.
- `/privacy`, `/terms`, `/cookies`: legal and policy pages.

The generated sitemap includes the static routes above plus each species detail route.

### Content and data state

- Quarry roster: 22 species, matching `client-business-truth.json` and `data/species.ts`.
- Species detail content: Greater Kudu has a custom guide component. The remaining roster entries use structured monograph content from `data/monographs/content/` through the shared monograph layout.
- Camp and lodge facts: chalet names, Vark Kraal, board, and facility copy are centralized through `data/camp-kraals.ts` and the business-truth JSON.
- Gallery: `data/gallery-images.ts` combines a legacy hunt-week grid with atmosphere imagery and stable shuffle logic.
- SEO helpers: species and reserve JSON-LD live in `lib/seo/`.

### Enquiry and booking state

There is no server-side booking API in the current build. The reserve and contact forms are client components that validate basic input, sanitize text for `mailto:`, and open an email addressed to `info@vaalpenskraal.com`.

The visible copy correctly frames submitted dates as enquiry requests, not confirmed bookings or payments.

### Layout, SEO, and accessibility state

- Root layout defines `metadataBase`, global Open Graph defaults, shared header and footer, one root `<main>`, and a skip link.
- Most public pages expose route-level metadata. Dynamic species pages generate metadata per slug and pre-render static params from the species roster.
- Reserve pages emit reservation enquiry JSON-LD through `buildReservePageJsonLd()`.
- Species pages emit structured JSON-LD through `buildSpeciesJsonLd()`.
- Focus utilities and semantic layout helpers are present in `app/globals.css` and shared layout components.

## Current documentation and handoff files

- `README.md`: still contains the original AI Studio run instructions and is not the main product handoff.
- `project_config.md`: long-term project memory, architecture constraints, deployment runbook, and changelog.
- `workflow_state.md`: short-term engineering status. It records prior lint and build success on 2026-04-15 and notes that production deploy remains a human-hosted step.
- `HOME_PAGE.md`: detailed implementation map for the home page only.
- `AGENTS.md`, `CLAUDE.md`, `.cursorrules`, and `.cursor/rules/`: engineering and content-governance rules.

## Known follow-ups

- Run `npm run lint` and `npm run build` after any code or content changes. The last recorded green checks before this summary were on 2026-04-15.
- Connect production hosting and DNS for `https://www.vaalpenskraal.com`.
- Smoke test `/`, `/species/greater-kudu`, `/reserve`, `/sitemap.xml`, and `/robots.txt` after deployment.
- Validate JSON-LD for `/reserve` and a representative `/species/[slug]` page after deployment.
- Keep the mailto-only enquiry model unless the project explicitly adds a server action, webhook, or booking backend with appropriate security controls.
- Review route-level metadata coverage if route files are added or redirect aliases change.
