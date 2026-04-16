"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type CrossfadeSlide = { src: string; alt: string };

type CrossfadeImageCycleProps = {
  slides: readonly CrossfadeSlide[];
  sizes: string;
  /** Milliseconds between active slide changes. Default 3000. */
  intervalMs?: number;
};

const CrossfadeImageCycle = ({ slides, sizes, intervalMs = 3000 }: CrossfadeImageCycleProps) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [slides.length, intervalMs]);

  if (slides.length === 0) return null;

  return (
    <div className="absolute inset-0">
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          sizes={sizes}
          className={`object-cover transition-opacity duration-700 ease-out ${
            i === active ? "z-[1] opacity-100" : "z-0 opacity-0"
          }`}
          priority={i === 0}
          aria-hidden={i !== active}
        />
      ))}
    </div>
  );
};

export default CrossfadeImageCycle;
