"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { GalleryImage } from "@/data/gallery-images";

type Props = { images: readonly GalleryImage[] };

const GalleryGridWithLightbox = ({ images }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const indexRef = useRef(activeIndex);
  const prevOpenIndex = useRef<number | null>(null);
  const titleId = useId();

  indexRef.current = activeIndex;

  const close = useCallback(() => setActiveIndex(null), []);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => {
      if (i === null || i <= 0) return i;
      return i - 1;
    });
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((i) => {
      if (i === null || i >= images.length - 1) return i;
      return i + 1;
    });
  }, [images.length]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (indexRef.current === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [close, goPrev, goNext]);

  const modalOpen = activeIndex !== null;

  useEffect(() => {
    if (!modalOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  useEffect(() => {
    if (activeIndex === null) {
      prevOpenIndex.current = null;
      return;
    }
    if (prevOpenIndex.current === null) {
      window.requestAnimationFrame(() => closeRef.current?.focus());
    }
    prevOpenIndex.current = activeIndex;
  }, [activeIndex]);

  const active = activeIndex !== null ? images[activeIndex] : null;

  return (
    <>
      <ul className="mt-12 grid list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {images.map((item, index) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="focus-ring-invert group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/[0.09] bg-neutral-950 text-left ring-1 ring-white/[0.04] outline-offset-4"
              aria-haspopup="dialog"
              aria-expanded={activeIndex === index}
              aria-label={`Open gallery image ${index + 1} of ${images.length} in full view`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                loading="lazy"
              />
            </button>
          </li>
        ))}
      </ul>

      {active !== null && activeIndex !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-3 sm:p-6 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          id="gallery-lightbox"
          onClick={close}
        >
          <p id={titleId} className="sr-only">
            Full-size gallery image {activeIndex + 1} of {images.length}. Use Escape to close, arrow keys for previous
            and next.
          </p>

          <button
            ref={closeRef}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            className="focus-ring-invert absolute right-3 top-3 z-[102] inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/25 bg-black/60 text-white/90 backdrop-blur-sm transition-colors hover:border-white/45 hover:bg-black/80 sm:right-5 sm:top-5"
            aria-label="Close image viewer"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>

          {images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                disabled={activeIndex <= 0}
                className="focus-ring-invert absolute left-2 top-1/2 z-[102] inline-flex min-h-[44px] min-w-[44px] -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white/90 backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-black/75 disabled:pointer-events-none disabled:opacity-35 sm:left-4"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-7 w-7" aria-hidden />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                disabled={activeIndex >= images.length - 1}
                className="focus-ring-invert absolute right-2 top-1/2 z-[102] inline-flex min-h-[44px] min-w-[44px] -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white/90 backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-black/75 disabled:pointer-events-none disabled:opacity-35 sm:right-4"
                aria-label="Next image"
              >
                <ChevronRight className="h-7 w-7" aria-hidden />
              </button>
            </>
          ) : null}

          <div
            className="relative z-[101] flex max-h-[min(88vh,100%)] w-full max-w-6xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[min(82vh,85vw)] w-full max-w-6xl">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
                quality={90}
              />
            </div>
            <p className="mt-4 font-sans text-xs font-medium uppercase tracking-[0.2em] text-white/55">
              {activeIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default GalleryGridWithLightbox;
