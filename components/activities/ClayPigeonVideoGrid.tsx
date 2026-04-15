"use client";

import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";

const CLAY_VIDEOS: { src: string; label: string }[] = [
  { src: "/videos/clay-pigeon/clay-1.mp4", label: "Clay pigeon shooting on the estate, clip 1" },
  { src: "/videos/clay-pigeon/clay-2.mp4", label: "Clay pigeon shooting on the estate, clip 2" },
  { src: "/videos/clay-pigeon/clay-3.mp4", label: "Clay pigeon shooting on the estate, clip 3" },
];

export function ClayPigeonVideoGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [activeIndex]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
    };
    if (activeIndex !== null) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex]);

  useEffect(() => {
    const v = modalVideoRef.current;
    if (!v || activeIndex === null) return;
    v.muted = true;
    v.volume = 0;
  }, [activeIndex]);

  return (
    <>
      <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
        {CLAY_VIDEOS.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="focus-ring-invert group relative aspect-square w-full min-w-0 overflow-hidden rounded-2xl border border-white/[0.08] bg-neutral-950 ring-1 ring-white/[0.04] transition-colors hover:border-burnished-copper/40"
            aria-label={`Open ${item.label} in a larger view`}
          >
            <video
              className="pointer-events-none h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
              muted
              playsInline
              preload="metadata"
              onLoadedData={(e) => {
                try {
                  e.currentTarget.currentTime = 0.02;
                } catch {
                  /* ignore seek errors on short clips */
                }
              }}
              aria-hidden
            >
              <source src={item.src} type="video/mp4" />
            </video>
            <span
              className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/25 transition group-hover:bg-black/35"
              aria-hidden
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/55 text-white shadow-lg ring-1 ring-white/20 backdrop-blur-sm sm:h-14 sm:w-14">
                <Play className="ml-0.5 h-5 w-5 fill-current sm:h-6 sm:w-6" aria-hidden />
              </span>
            </span>
          </button>
        ))}
      </div>

      {activeIndex !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={CLAY_VIDEOS[activeIndex].label}
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="focus-ring-invert absolute -right-1 -top-1 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white transition hover:bg-black/90 sm:-right-2 sm:-top-2"
              aria-label="Close video"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
            <video
              key={CLAY_VIDEOS[activeIndex].src}
              ref={modalVideoRef}
              className="max-h-[85vh] w-full rounded-xl border border-white/10 object-contain shadow-2xl"
              controls
              muted
              playsInline
              autoPlay
              controlsList="nodownload"
              onVolumeChange={(e) => {
                const el = e.currentTarget;
                el.muted = true;
                el.volume = 0;
              }}
            >
              <source src={CLAY_VIDEOS[activeIndex].src} type="video/mp4" />
            </video>
          </div>
        </div>
      ) : null}
    </>
  );
}
