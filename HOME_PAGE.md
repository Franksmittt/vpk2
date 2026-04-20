# Home page (`/`): detailed description

This document describes **only** the public home route: what visitors see, which assets load, where copy lives in code, and how behaviour works. It mirrors the implementation in `app/page.tsx` and `components/home/HomePageClient.tsx` (and the hero child `components/home/HeroCanvasScrollSection.tsx`).

---

## Route and architecture

| Item | Detail |
|------|--------|
| **URL** | `/` |
| **Server entry** | `app/page.tsx` exports static `metadata` (title and meta description for SEO and social defaults) and renders a single child: `HomePageClient`. |
| **Client island** | `components/home/HomePageClient.tsx` is a `"use client"` module. All layout, imagery, motion classes, and interactivity below the document head live here. |
| **Root chrome** | Header, footer, and global layout come from `app/layout.tsx` (not repeated in this file). The home body is a full-width black canvas with white type and copper accents. |

### Metadata (from `app/page.tsx`)

- **Title:** `Vaalpenskraal Game Reserve | Waterberg Hunting`
- **Description:** Short Earnest-style line about fair chase, four chalets on camp, full board, plains and dangerous game, ethics and silence.

---

## Page structure (top to bottom)

Sections appear in this order inside `HomePageClient`. Spacing uses shared utilities such as `section-y` and `editorial-container` from the global design system.

### 1. Hero (`HeroCanvasScrollSection`)

- **Role:** First screen: full viewport height, rotating full-bleed photography, headline and body copy that change per slide, primary and secondary CTAs, dot controls to pick a slide.
- **Implementation:** `HeroCanvasScrollSection` wraps the CTA row passed as `children`. Default slides are defined in `HeroCanvasScrollSection` as `HOME_HERO_SLIDES` (three stills under `/images/hero/`).
- **CTAs in the hero:**
  - **Book the hunt** → `/reserve` (solid white pill).
  - **Quarry roster** → `/species` (ghost outline pill).
- **Motion:** Crossfade between slides on an interval; autoplay pauses on hover or focus; reduced motion disables the timer. See component file for exact timing and a11y roles (`tablist` for dots).

### 2. “The code we hunt by” (`home-code-heading`)

- **Eyebrow:** “Field standard” (copper, small caps).
- **Headline:** “The code we hunt by” (second line muted).
- **Intro line:** PH-led Waterberg copy; census and quota; honest when the day is thin.
- **Three columns:** Hairline grid with three articles, each with icon, title, short body:
  1. **Fair chase** (Shield): free-ranging quarry, no theatre.
  2. **Land first** (Leaf): census drives quota, veld decides.
  3. **One clean moment** (Target): patience and honour.
- **Styling:** `neutral-950` band, bordered panels, copper hover line on each card.

### 3. “Built for the stalk” (bento grid)

- **Headline:** “Built for the stalk” with subline about solo miles and fireside noise on the same iron soil.
- **Four large image cards** (responsive 12-column grid on large screens). Each card is a `Link` with background `Image`, gradient scrim, Lucide icon, title, and teaser copy.

| Card | Target | Image (`public/…`) | Title / theme |
|------|--------|--------------------|----------------|
| Solitary tracker | `/reserve` | `/images/home/solitary-tracker.png` | Dawn, boots, wind (Crosshair). |
| Twenty-two species | `/species` | `/images/home/species-bento.png` | Kudu, buffalo, respected names (Map). |
| Fire and roster | `/lodge` | `/images/home/brotherhood-bento.png` | Groups, ember light (Users). |
| The culture | `/experience` | `/images/home/culture-bento.png` | Boma, dust, woodsmoke (Flame). |

Hover: slight image scale and opacity lift on the photography.

### 4. “The lodge” basecamp block

- **Eyebrow:** “The lodge”.
- **Headline:** “The basecamp is where the bush lets you exhale.” (split emphasis with light and semibold weight).
- **Supporting paragraph:** After thicket miles: silence, hot water, fire; premium comfort without losing grit.
- **Split layout:**
  - **Left (wide image):** `/images/lodge/lodge-chalet-gemsbok.jpg` (Gemsbok Kraal chalet). Bottom overlay: one line built from `CHALET_KRAALS_LINE` and `COMMUNAL_BAR_KRAAL` in `data/camp-kraals.ts`, plus amenities snippet and **Explore** → `/lodge`.
  - **Right (stacked rails):** Six numbered rows (01–06) covering four kraals, communal bar and kitchen, full board, pool and boma and viewing, field services (safes, cold room, slaughter, hides, weighing, P3), security and shuttle and taxidermy note. Copy is inline in the component array (aligned with camp facts; verify numbers with management if marketing changes).
- **Footer link:** “Full lodge breakdown” → `/lodge`.

### 5. Manifesto (“Raw. Real. Relentless.”)

- **Eyebrow:** “The Waterberg · not a brochure trip”.
- **Large display line:** Three words stacked; “Relentless.” uses gradient clip text (sunset gold through copper to dried grass).
- **Body:** Two paragraphs: staged safari rejection; respect, stalk, fire, silence, bond with the land.
- **Visuals:** Decorative blurred copper and soil orbs (no photos). Border top and bottom on black.

### 6. “The quarry” zigzag strip

- **Intro:** “Species” eyebrow, “The quarry.” headline, paragraph on Waterberg game as an exam.
- **CTA pill:** “Full quarry list” → `/species`.
- **Three full-width rows** (alternating image left / right on medium+). Each row is one `Link` to a species monograph route:

| # | Species | Nickname | Image | Slug |
|---|---------|----------|-------|------|
| 01 | Cape Buffalo | The Black Death | `/images/home/quarry-buffalo.png` | `/species/cape-buffalo` |
| 02 | Greater Kudu | The Grey Ghost | `/images/home/quarry-kudu.png` | `/species/greater-kudu` |
| 03 | Livingstone Eland | The Desert Lord | `/images/home/quarry-eland.png` | `/species/livingstone-eland` |

Each row shows a code chip “01 / 03” style, nickname in copper caps, species name, blurb, and “Explore” affordance on hover.

### 7. Testimonials (“In their words”)

- **Eyebrow:** “In their words”.
- **Note:** Copy states guests from South Africa and overseas, many flying in from abroad.
- **Controls:** Previous / next chevron buttons cycle testimonials.
- **Main quote:** Large serif blockquote; one phrase per testimonial is highlighted in `text-burnished-copper` when it matches the `emphasis` string in data.
- **Aside:** Circular “portrait” uses **picsum.photos** with a fixed seed per testimonial (`imgSeed`). Alt text states representative imagery, not a real guest photo file on disk.
- **Tab strip:** Pills for each guest (name + location); `role="tablist"`; clicking sets active index.
- **Auto-advance:** `useEffect` rotates active testimonial every **10 seconds** (in addition to manual controls).
- **Data:** Seven entries in `TESTIMONIALS` array inside `HomePageClient.tsx` (names, locations, quotes, `local` flag for a “Local” badge on SA-based entries).

### 8. Bottom CTA (“The bush is calling.”)

- **Background:** Full-bleed `/images/home/cta-bush-calling.png` with dark gradient overlay.
- **Headline:** Serif, “The bush is calling.” (`canvas-cream` / white).
- **Subcopy:** “Secure your place in the legacy of the Waterberg.”
- **Buttons:** **Book your hunt** → `/reserve`, **Quarry roster** → `/species` (same pairing as hero, larger closing layout).

---

## Local images used on the home page only

Paths are web-root absolute (served from `public/`).

| Path |
|------|
| `/images/hero/hero-legacy.png` |
| `/images/hero/hero-encounter.png` |
| `/images/hero/estate-bushveld-wide.png` |
| `/images/home/solitary-tracker.png` |
| `/images/home/species-bento.png` |
| `/images/home/brotherhood-bento.png` |
| `/images/home/culture-bento.png` |
| `/images/lodge/lodge-chalet-gemsbok.jpg` |
| `/images/home/quarry-buffalo.png` |
| `/images/home/quarry-kudu.png` |
| `/images/home/quarry-eland.png` |
| `/images/home/cta-bush-calling.png` |

Hero slide list is owned by `HeroCanvasScrollSection`; home passes no custom `slides` prop, so defaults apply.

---

## Shared data imports

- **`data/camp-kraals.ts`:** `CHALET_KRAALS_LINE`, `COMMUNAL_BAR_KRAAL` for consistent kraal and bar naming in the lodge panel overlay and amenity rails.

---

## Icons (lucide-react)

Used on the home client: `ChevronRight`, `Crosshair`, `Users`, `Flame`, `Map`, `Shield`, `Leaf`, `Target`, `ChevronLeft`.

---

## What the home page does not include

- No contact form, no booking form (only links to `/reserve` and other routes).
- No species data table or `QUARRY_SPECIES` iteration on the home page (only three hand-picked quarry highlights plus bento link to full roster).
- No `PageHero` component (the species-style marketing hero is unique to other routes; home uses the dedicated hero component instead).

---

## Files to edit when changing the home page

1. **`app/page.tsx`** … metadata only.
2. **`components/home/HomePageClient.tsx`** … all sections, testimonial copy, bento and quarry rows, lodge amenity lines, CTA targets.
3. **`components/home/HeroCanvasScrollSection.tsx`** … hero slides, timings, and hero-specific a11y.

Update this document if you reorder sections, rename routes, or change which images the home route references.
