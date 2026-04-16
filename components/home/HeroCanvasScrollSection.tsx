"use client";

import { useCallback, useState, type ReactNode } from "react";
import Image from "next/image";

/** Three full-bleed stills used for the home hero rotation (no scroll runway). */
export const HOME_HERO_SLIDES = [
  {
    src: "/images/hero/hero-legacy.png",
    imageAlt: "Waterberg bushveld at Vaalpenskraal: legacy hunt camp atmosphere",
    title: (
      <>
        Legacy
        <br />
        in the dust.
      </>
    ),
    body: "Ground that remembers every honest fire and every stalk that did not need a caption. The Waterberg keeps score in thorns, not likes.",
  },
  {
    src: "/images/hero/hero-encounter.png",
    imageAlt: "Close encounter moment in thick bush on the Vaalpenskraal estate",
    title: (
      <>
        The moment
        <br />
        narrows.
      </>
    ),
    body: "Crosshairs do not write ethics. Thicket, wind, and a PH who knows when silence is the sentence do.",
  },
  {
    src: "/images/hero/wide-hunt-story.png",
    imageAlt: "Wide Waterberg plains and hunt story landscape at Vaalpenskraal",
    title: (
      <>
        Iron
        <br />
        Mountain air.
      </>
    ),
    body: "Rolling plains. Jagged horizons. Elite silence before the shot. Twenty-two quarry species on hard Waterberg ground.",
  },
] as const;

export type HeroSlide = (typeof HOME_HERO_SLIDES)[number];

type Props = {
  /** CTA row under the rotating headline and body (links, buttons). */
  children: ReactNode;
  slides?: readonly HeroSlide[];
};

/**
 * Full-viewport home hero: stacked stills with crossfade. Slides advance only from the dot controls,
 * never from page scroll (no canvas runway, no scroll-timeline index).
 */
export default function HeroCanvasScrollSection({ children, slides = HOME_HERO_SLIDES }: Props) {
  const [active, setActive] = useState(0);
  const go = useCallback((index: number) => {
    setActive((prev) => (index === prev ? prev : index));
  }, []);

  const current = slides[active];

  return (
    <section
      className="relative w-full shrink-0 bg-black min-h-[min(100svh,100dvh)]"
      aria-label="Hero"
    >
      <div className="relative flex min-h-[min(100svh,100dvh)] w-full flex-col overflow-hidden">
        <div className="absolute inset-0" aria-hidden>
          {slides.map((slide, index) => (
            <div
              key={slide.src}
              aria-hidden={index !== active}
              className={`absolute inset-0 transition-opacity duration-700 ease-out motion-reduce:transition-none ${
                index === active ? "z-0 opacity-100" : "z-0 opacity-0"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.imageAlt}
                fill
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "low"}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/32 via-black/18 to-black/72"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_75%_at_22%_42%,rgb(0_0_0/0.08)_0%,rgb(0_0_0/0.28)_50%,rgb(0_0_0/0.48)_100%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/28 via-black/8 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 top-[18%] bg-gradient-to-b from-transparent via-black/22 to-black/58 sm:top-[22%]"
          aria-hidden
        />

        <div className="relative z-20 box-border flex min-h-[min(100svh,100dvh)] flex-col pb-20 pt-20 sm:pb-20 md:pt-24">
          <div className="editorial-container flex min-h-0 flex-1 flex-col items-start justify-center gap-4 py-2 sm:gap-6 sm:py-4">
            <div key={active}>
              <h1 className="hero-readable-title max-w-[min(100%,44rem)] whitespace-pre-line text-left font-sans text-[clamp(2.25rem,7vw,4rem)] font-semibold uppercase leading-[0.98] tracking-tight text-white sm:tracking-tighter">
                {current.title}
              </h1>
            </div>
            <div className="hero-readable-ui h-px w-10 shrink-0 bg-white/55 shadow-[0_1px_4px_rgba(0,0,0,0.9)] sm:w-14" />
            <p
              key={`body-${active}`}
              className="hero-readable-body max-w-xl text-left font-sans text-sm font-medium leading-relaxed tracking-tight text-white sm:text-base md:text-lg"
            >
              {current.body}
            </p>
            {children}

            <div
              className="mt-6 flex items-center gap-2"
              role="tablist"
              aria-label="Choose hero slide"
            >
              {slides.map((_, index) => (
                <button
                  key={String(index)}
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  aria-label={`Slide ${index + 1} of ${slides.length}`}
                  onClick={() => go(index)}
                  className={`focus-ring-invert h-2.5 w-2.5 rounded-full transition-all sm:h-3 sm:w-3 ${
                    index === active
                      ? "scale-110 bg-white shadow-[0_0_0_2px_rgba(255,255,255,0.35)]"
                      : "bg-white/35 hover:bg-white/55"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
