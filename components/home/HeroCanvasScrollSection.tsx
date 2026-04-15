"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

const FALLBACK_FRAMES = [
  "/images/hero/hero-legacy.png",
  "/images/hero/hero-encounter.png",
  "/images/hero/wide-hunt-story.png",
] as const;

function sequenceFramePath(index: number): string {
  const n = String(index + 1).padStart(4, "0");
  return `/images/hero-sequence/frame-${n}.jpg`;
}

function drawCover(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  img: HTMLImageElement,
): void {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const cw = canvas.width / dpr;
  const ch = canvas.height / dpr;
  const ir = img.naturalWidth / img.naturalHeight;
  const cr = cw / ch;
  let sx = 0;
  let sy = 0;
  let sw = img.naturalWidth;
  let sh = img.naturalHeight;
  if (ir > cr) {
    sw = Math.floor(img.naturalHeight * cr);
    sx = Math.floor((img.naturalWidth - sw) / 2);
  } else if (ir < cr) {
    sh = Math.floor(img.naturalWidth / cr);
    sy = Math.floor((img.naturalHeight - sh) / 2);
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
}

type Props = {
  children: ReactNode;
};

/**
 * Full-viewport hero with a single canvas frame (first JPEG in the sequence when present,
 * otherwise first fallback still). No scroll runway: wheel and trackpad scroll the page normally.
 */
export default function HeroCanvasScrollSection({ children }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroImageRef = useRef<HTMLImageElement | null>(null);
  const [ready, setReady] = useState(false);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const { clientWidth, clientHeight } = canvas;
    const w = Math.max(1, Math.floor(clientWidth * dpr));
    const h = Math.max(1, Math.floor(clientHeight * dpr));
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    const load = (src: string) =>
      new Promise<HTMLImageElement>((resolve, reject) => {
        const im = new Image();
        im.decoding = "async";
        im.onload = () => resolve(im);
        im.onerror = () => reject(new Error(src));
        im.src = src;
      });

    (async () => {
      let img: HTMLImageElement | null = null;
      try {
        img = await load(sequenceFramePath(0));
      } catch {
        for (const src of FALLBACK_FRAMES) {
          if (cancelled) return;
          try {
            img = await load(src);
            break;
          } catch {
            /* try next */
          }
        }
      }
      if (cancelled || !img) return;
      heroImageRef.current = img;
      setReady(true);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const img = heroImageRef.current;
    if (!canvas || !ready || !img) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const paint = () => {
      resizeCanvas();
      if (img.complete && img.naturalWidth) {
        drawCover(ctx, canvas, img);
      }
    };

    const ro = new ResizeObserver(() => paint());
    ro.observe(canvas);
    paint();
    window.addEventListener("resize", paint, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", paint);
    };
  }, [ready, resizeCanvas]);

  return (
    <section
      className="relative w-full shrink-0 bg-black min-h-[min(100svh,100dvh)]"
      aria-label="Hero"
    >
      <div className="relative flex min-h-[min(100svh,100dvh)] w-full flex-col overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          aria-hidden
        />
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
          {children}
        </div>
      </div>
    </section>
  );
}
