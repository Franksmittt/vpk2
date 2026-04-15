import type { ReactNode } from "react";
import Image from "next/image";
import { Mountain } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  imageSeed: string;
  /** Local image under `public/` (e.g. `/images/lodge/hero.jpg`). When set, overrides picsum. */
  imageSrc?: string;
  /** Optional CTAs rendered below the title block (same width cap as hero copy). */
  heroActions?: ReactNode;
  /** First-paint heroes: pass true for LCP (default true). */
  priority?: boolean;
  /** Unique `id` for the `<h1>` when multiple heroes or fragments could appear in one document. */
  heroTitleId?: string;
  /** Progressive enhancement: scroll-driven 3D typography (see `globals.css` `.vp-scroll-*`). */
  scrollLinkedTypography?: boolean;
};

const PageHero = ({
  eyebrow,
  title,
  subtitle,
  imageSeed,
  imageSrc,
  heroActions,
  priority = true,
  heroTitleId = "page-hero-title",
  scrollLinkedTypography = false,
}: PageHeroProps) => {
  /** Match `/species` hero: tall band, image fills height, type clears the fixed header */
  const minH = "min-h-[min(100svh,920px)]";
  const heroSrc = imageSrc ?? `https://picsum.photos/seed/${imageSeed}/1920/1080`;
  const heroAlt = imageSrc
    ? `Full-bleed hero: ${title} at Vaalpenskraal Game Reserve`
    : `Atmospheric Waterberg bush imagery for ${title} (representative hero, seed ${imageSeed})`;

  const eyebrowPill = (
    <div
      className={`mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-gradient-to-r from-black/85 via-black/75 to-black/80 px-4 py-2 font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-white/85 backdrop-blur-md ring-1 ring-black/40${scrollLinkedTypography ? " vp-scroll-hero-eyebrow" : ""}`}
    >
      <Mountain className="h-4 w-4 text-burnished-copper" aria-hidden />
      {eyebrow}
    </div>
  );

  const titleClasses =
    "hero-readable-title font-sans text-[clamp(2.25rem,6vw,4rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-white";

  const subtitleClasses =
    "hero-readable-body mt-6 max-w-2xl font-sans text-base leading-relaxed text-white/75 md:text-lg";

  return (
    <section
      className={`relative ${minH} overflow-hidden border-b border-white/[0.08]`}
      aria-labelledby={heroTitleId}
    >
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={heroSrc}
          alt={heroAlt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-black/18" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/58 via-black/26 to-transparent"
        aria-hidden
      />

      <div
        className={`editorial-container relative z-10 flex ${minH} flex-col justify-end pb-16 pt-28 md:pb-24 md:pt-32${scrollLinkedTypography ? " [perspective:1400px]" : ""}`}
      >
        {scrollLinkedTypography ? (
          <div className="max-w-3xl">
            <div className="vp-scroll-hero-3d rotate-x-0 scale-z-100 transform-gpu transform-3d">
              {eyebrowPill}
              <h1
                id={heroTitleId}
                className={`${titleClasses} vp-scroll-hero-title max-w-[min(100%,42rem)] text-balance`}
              >
                {title}
              </h1>
              <p className={`${subtitleClasses} vp-scroll-hero-sub`}>{subtitle}</p>
            </div>
            {heroActions ? <div className="mt-10">{heroActions}</div> : null}
          </div>
        ) : (
          <div className="max-w-3xl">
            {eyebrowPill}
            <h1 id={heroTitleId} className={`${titleClasses} max-w-[min(100%,42rem)] text-balance`}>
              {title}
            </h1>
            <p className={subtitleClasses}>{subtitle}</p>
            {heroActions ? <div className="mt-10">{heroActions}</div> : null}
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
