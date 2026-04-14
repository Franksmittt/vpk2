"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  localSrc: string;
  fallbackSrc: string;
  alt?: string;
  className?: string;
  /** Passed to `next/image` for responsive layout */
  sizes?: string;
};

/**
 * Tries a file under /public first; on error swaps to remote fallback (e.g. Picsum during dev).
 */
export function GuideFigureImg({
  localSrc,
  fallbackSrc,
  alt = "",
  className = "",
  sizes = "100vw",
}: Props) {
  const [useFallback, setUseFallback] = useState(false);
  const src = useFallback ? fallbackSrc : localSrc;
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className={className}
      onError={() => setUseFallback(true)}
    />
  );
}
