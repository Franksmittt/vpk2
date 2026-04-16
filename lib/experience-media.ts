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
  /** Stalk timeline beats (documentary stills, estate or representative). */
  stalk: {
    prep: "/images/lodge/lodge-kitchen.jpg",
    thicket: "/images/hero/wide-hunt-story.png",
    pause: "/images/hero/hero-encounter.png",
    weight: "/images/lodge/spec-outdoor.jpg",
    fire: "/images/lodge/lodge-outlook.jpg",
  },
  /** Zigzag gallery rows. */
  zigzag: {
    encounter: "/images/hero/hero-encounter.png",
    waterhole: "/images/lodge/lodge-waterhole.jpg",
    boma: "/images/lodge/lodge-boma.jpg",
    catering: "/images/lodge/brochure-food.jpg",
  },
  /**
   * Camp rhythm grid on `/experience`. Remaining `undefined` keys fall back to seeded placeholders on the page.
   */
  campRhythm: {
    chalets: undefined,
    communalHub: undefined,
    pace: "/images/experience/experience-camp-pace.jpg",
    solo: "/images/experience/experience-camp-solo.jpg",
    family: "/images/experience/experience-camp-family.jpg",
    international: "/images/experience/experience-camp-international.jpg",
  },
} as const;
