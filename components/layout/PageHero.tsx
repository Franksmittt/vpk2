import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  imageSeed: string;
  /** Local image under `public/` (e.g. `/images/lodge/hero.jpg`). When set, overrides picsum. */
  imageSrc?: string;
  /** Slightly shorter hero for dense pages */
  compact?: boolean;
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
  compact,
  priority = true,
  heroTitleId = "page-hero-title",
  scrollLinkedTypography = false,
}: PageHeroProps) => {
  /** Editorial: ~16:9 hero band with minimum height for text clearance under fixed header */
  const minH = compact
    ? "min-h-[min(42vh,520px)] sm:min-h-[min(46vh,560px)]"
    : "min-h-[min(52vh,640px)] sm:min-h-[min(56vh,720px)]";
  const heroSrc = imageSrc ?? `https://picsum.photos/seed/${imageSeed}/1920/1080`;
  const heroAlt = imageSrc
    ? `Full-bleed hero: ${title} at Vaalpenskraal Game Reserve`
    : `Atmospheric Waterberg bush imagery for ${title} (representative hero, seed ${imageSeed})`;

  return (
    <section
      className={`relative ${minH} flex flex-col justify-end overflow-hidden border-b border-white/[0.08]`}
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
      <div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/50"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_75%_at_50%_38%,rgb(0_0_0/0.12)_0%,rgb(0_0_0/0.42)_50%,rgb(0_0_0/0.68)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[25%] bg-gradient-to-b from-transparent via-black/35 to-black/75"
        aria-hidden
      />
      <div
        className={`editorial-container relative z-10 pb-12 pt-28 sm:pb-16 sm:pt-32 md:pb-20 md:pt-36${scrollLinkedTypography ? " [perspective:1400px]" : ""}`}
      >
        {scrollLinkedTypography ? (
          <div className="vp-scroll-hero-3d rotate-x-0 scale-z-100 transform-gpu transform-3d">
            <p className="eyebrow hero-readable-eyebrow text-white/70 vp-scroll-hero-eyebrow">{eyebrow}</p>
            <h1
              id={heroTitleId}
              className="hero-readable-title vp-scroll-hero-title mt-4 max-w-[min(100%,42rem)] text-balance font-sans text-[clamp(2.25rem,6vw,3.75rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-white"
            >
              {title}
            </h1>
            <p className="hero-readable-body vp-scroll-hero-sub mt-6 max-w-2xl font-sans text-base leading-relaxed text-white/75 md:text-lg">
              {subtitle}
            </p>
          </div>
        ) : (
          <>
            <p className="eyebrow hero-readable-eyebrow text-white/70">{eyebrow}</p>
            <h1
              id={heroTitleId}
              className="hero-readable-title mt-4 max-w-[min(100%,42rem)] text-balance font-sans text-[clamp(2.25rem,6vw,3.75rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-white"
            >
              {title}
            </h1>
            <p className="hero-readable-body mt-6 max-w-2xl font-sans text-base leading-relaxed text-white/75 md:text-lg">
              {subtitle}
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default PageHero;
