"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

/** Logical frames mapped to scroll progress (0 .. FRAME_COUNT - 1). */
const FRAME_COUNT = 48;

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
  let dw = cw;
  let dh = ch;
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
 * Tall scroll runway with a pinned viewport and a canvas painted from a frame sequence.
 * Tries `/public/images/hero-sequence/frame-0001.jpg` … first; falls back to rotating on-estate hero stills.
 */
export default function HeroCanvasScrollSection({ children }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameImagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const targetFrameRef = useRef(0);
  const lastDrawnFrameRef = useRef(-1);
  const rafRef = useRef(0);
  const [ready, setReady] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

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
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onMq = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onMq);
    return () => mq.removeEventListener("change", onMq);
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
      let useSequence = true;
      try {
        await load(sequenceFramePath(0));
      } catch {
        useSequence = false;
      }
      if (cancelled) return;

      const list: (HTMLImageElement | null)[] = new Array(FRAME_COUNT).fill(null);
      if (useSequence) {
        for (let i = 0; i < FRAME_COUNT; i++) {
          if (cancelled) return;
          try {
            list[i] = await load(sequenceFramePath(i));
          } catch {
            list[i] = await load(FALLBACK_FRAMES[i % FALLBACK_FRAMES.length]);
          }
        }
      } else {
        const base = await Promise.all(FALLBACK_FRAMES.map((s) => load(s)));
        for (let i = 0; i < FRAME_COUNT; i++) {
          list[i] = base[i % base.length] ?? null;
        }
      }
      if (cancelled) return;
      frameImagesRef.current = list;
      setReady(true);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ro = new ResizeObserver(() => {
      resizeCanvas();
      lastDrawnFrameRef.current = -1;
    });
    ro.observe(canvas);
    resizeCanvas();
    return () => ro.disconnect();
  }, [resizeCanvas]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const updateTargetFrame = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      if (scrollable <= 0) {
        targetFrameRef.current = 0;
        return;
      }
      const scrolled = -rect.top;
      const t = Math.min(1, Math.max(0, scrolled / scrollable));
      const maxIndex = FRAME_COUNT - 1;
      targetFrameRef.current = reduceMotion ? Math.round(t * maxIndex) : Math.floor(t * maxIndex);
    };

    const onScroll = () => {
      updateTargetFrame();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateTargetFrame, { passive: true });
    updateTargetFrame();

    const tick = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      const idx = targetFrameRef.current;
      if (ctx && canvas && ready && idx !== lastDrawnFrameRef.current) {
        const img = frameImagesRef.current[idx];
        if (img?.complete && img.naturalWidth) {
          resizeCanvas();
          drawCover(ctx, canvas, img);
          lastDrawnFrameRef.current = idx;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateTargetFrame);
      cancelAnimationFrame(rafRef.current);
    };
  }, [ready, resizeCanvas, reduceMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full shrink-0 bg-black [height:500vh]"
      aria-label="Hero sequence, scroll to advance"
    >
      <div className="sticky top-0 flex h-[100svh] max-h-[100dvh] w-full flex-col overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full touch-pan-y"
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

        <div className="relative z-20 box-border flex min-h-0 flex-1 flex-col pb-20 pt-20 sm:pb-20 md:pt-24">
          {children}
        </div>

        <div className="pointer-events-none absolute bottom-4 left-0 right-0 z-30 hidden flex-col items-center gap-2 pb-1 sm:flex">
          <span className="hero-readable-eyebrow font-sans text-xs uppercase tracking-[0.25em] text-white/80">
            Scroll
          </span>
          <div className="hero-readable-ui h-8 w-px overflow-hidden bg-white/35">
            <div className="h-full w-full animate-scroll-down bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
