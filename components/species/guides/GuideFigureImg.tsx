"use client";

import { useState } from "react";

type Props = {
  localSrc: string;
  fallbackSrc: string;
  alt?: string;
  className?: string;
};

/**
 * Tries a file under /public first; on 404 or error swaps to remote fallback (e.g. Picsum during dev).
 */
export function GuideFigureImg({ localSrc, fallbackSrc, alt = "", className }: Props) {
  const [useFallback, setUseFallback] = useState(false);
  return (
    <img
      src={useFallback ? fallbackSrc : localSrc}
      alt={alt}
      className={className}
      onError={() => setUseFallback(true)}
    />
  );
}
