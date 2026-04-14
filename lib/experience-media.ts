/**
 * Local assets for `/experience`. Paths must exist under `public/`.
 * When no fitting estate photo exists, pages fall back to seeded placeholders (see page).
 */
export const EXPERIENCE_IMAGES = {
  /** PageHero background (replaces picsum seed `experiencehero`). */
  hero: "/images/hero/wide-hunt-story.png",
  /** Full-bleed panorama under hero. */
  panorama: "/images/lodge/brochure-pano.jpg",
  /** “Through your eyes” stalk / bush (same stalking asset as species quarry hero). */
  thicketWalk: "/images/species/iron-mountain-quarry-hero.png",
  audience: {
    solo: "/images/home/solitary-tracker.png",
    family: "/images/lodge/lodge-evening.jpg",
    global: "/images/lodge/brochure-vista.jpg",
  },
  /** Sticky column: dawn / outlook (coffee line in copy). */
  dawnOutlook: "/images/lodge/lodge-outlook.jpg",
  /** Guides & media zig-zag. */
  guidesEncounter: "/images/hero/hero-encounter.png",
  /** Closing CTA band. */
  closingBoma: "/images/lodge/lodge-boma.jpg",
} as const;
