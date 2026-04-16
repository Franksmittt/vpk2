import { OUTLOOK_POINT_IMAGES } from "@/lib/outlook-media";

/**
 * Local assets for `/experience`. Paths must exist under `public/`.
 * When no fitting estate photo exists, pages fall back to seeded placeholders (see page).
 */
export const EXPERIENCE_IMAGES = {
  /** PageHero on `/experience`: canonical outlook-point frame (see `outlook-media`). */
  hero: OUTLOOK_POINT_IMAGES.am946,
  /** “Through your eyes” stalk / bush. */
  thicketWalk: "/images/hero/wide-hunt-story.png",
  audience: {
    solo: "/images/home/solitary-tracker.png",
    family: "/images/lodge/lodge-evening.jpg",
    global: "/images/lodge/brochure-vista.jpg",
  },
  /** Reserved for dawn / outlook copy blocks; same canonical outlook pool. */
  dawnOutlook: OUTLOOK_POINT_IMAGES.am949,
  /** Guides & media zig-zag. */
  guidesEncounter: "/images/hero/hero-encounter.png",
  /** Closing CTA band. */
  closingBoma: "/images/lodge/lodge-boma.jpg",
  /** Stalk timeline beats (documentary stills, estate or representative). */
  stalk: {
    prep: "/images/lodge/lodge-kitchen.jpg",
    thicket: "/images/hero/wide-hunt-story.png",
    pause: "/images/hero/hero-encounter.png",
  },
  /** "The fire" stalk beat: cycled in `CrossfadeImageCycle` on `/experience`. */
  stalkFireCycle: [
    OUTLOOK_POINT_IMAGES.am1015,
    "/images/experience/experience-stalk-fire-boma.jpg",
    "/images/experience/experience-stalk-fire-evening.jpg",
  ] as const,
  /** "The weight" stalk beat: cycled in `CrossfadeImageCycle` on `/experience`. */
  stalkWeightCycle: [
    "/images/experience/experience-stalk-weight-01.jpg",
    "/images/experience/experience-stalk-weight-02.jpg",
    "/images/experience/experience-stalk-weight-03.jpg",
  ] as const,
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
