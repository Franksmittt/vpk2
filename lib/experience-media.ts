/**
 * Local assets for `/experience`. Paths must exist under `public/`.
 * When no fitting estate photo exists, pages fall back to seeded placeholders (see page).
 */
export const EXPERIENCE_IMAGES = {
  /** PageHero background (same wide stalk frame as species quarry hero). */
  hero: "/images/species/iron-mountain-quarry-hero.png",
  /** “Through your eyes” stalk / bush. */
  thicketWalk: "/images/hero/wide-hunt-story.png",
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
