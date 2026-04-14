import type { ComponentProps } from "react";
import Image from "next/image";
import { speciesImageUrl, SPECIES_CARD_IMAGE_BY_ID } from "@/lib/species-media";
import { GuideFigureImg } from "@/components/species/guides/GuideFigureImg";

export type FigLayout = "banner" | "tall" | "matchText";

export function MonographFig({
  seed,
  caption,
  className = "",
  layout = "banner",
  placeholder,
  diagramSrc,
  localBase,
  localExt = "png",
}: {
  seed?: string;
  caption?: string;
  className?: string;
  layout?: FigLayout;
  placeholder?: string;
  diagramSrc?: string;
  localBase?: string;
  localExt?: string;
}) {
  const matchFallbackW = 1200;
  const matchFallbackH = 1200;
  const wideFallbackW = layout === "tall" ? 1000 : 1600;
  const wideFallbackH = layout === "tall" ? 1250 : 900;

  if (layout === "matchText") {
    return (
      <figure className={`flex h-full min-h-0 flex-col ${className}`}>
        <div className="relative min-h-[min(13.75rem,50dvh)] w-full flex-1 overflow-hidden rounded-2xl ring-1 ring-white/[0.08] sm:min-h-[min(16rem,52dvh)] lg:min-h-0">
          {diagramSrc ? (
            <Image
              src={diagramSrc}
              alt={caption ? `Diagram: ${caption}` : "Species monograph diagram"}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          ) : placeholder ? (
            <div className="flex h-full min-h-[min(12rem,42dvh)] items-center justify-center rounded-2xl border border-dashed border-white/20 bg-gradient-to-br from-white/[0.04] to-transparent px-6 py-6 text-center">
              <span className="font-sans text-xs leading-relaxed text-white/70">{placeholder}</span>
            </div>
          ) : localBase && seed ? (
            <GuideFigureImg
              localSrc={`${localBase}/${seed}.${localExt}`}
              fallbackSrc={speciesImageUrl(seed, matchFallbackW, matchFallbackH)}
              className="absolute inset-0 h-full w-full object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ) : (
            <Image
              src={speciesImageUrl(seed!, matchFallbackW, matchFallbackH)}
              alt={caption ? `Figure: ${caption}` : "Species monograph figure"}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          )}
        </div>
        {caption ? (
          <figcaption className="mt-3 shrink-0 font-sans text-[11px] leading-snug text-white/65">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  const ratio =
    layout === "tall" ? "aspect-[4/5] sm:aspect-[3/4]" : "aspect-[21/9] sm:aspect-video";
  if (placeholder) {
    return (
      <figure className={className}>
        <div
          className={`flex ${ratio} items-center justify-center rounded-2xl border border-dashed border-white/20 bg-gradient-to-br from-white/[0.04] to-transparent px-6 text-center`}
        >
          <span className="font-sans text-xs leading-relaxed text-white/70">{placeholder}</span>
        </div>
        {caption ? (
          <figcaption className="mt-3 font-sans text-[11px] leading-snug text-white/65">{caption}</figcaption>
        ) : null}
      </figure>
    );
  }
  return (
    <figure className={className}>
      <div className={`relative overflow-hidden rounded-2xl ring-1 ring-white/[0.08] ${ratio}`}>
        {localBase && seed ? (
          <GuideFigureImg
            localSrc={`${localBase}/${seed}.${localExt}`}
            fallbackSrc={speciesImageUrl(seed, wideFallbackW, wideFallbackH)}
            className="h-full w-full object-cover"
          />
        ) : (
          <Image
            src={speciesImageUrl(seed!, wideFallbackW, wideFallbackH)}
            alt={caption ? `Figure: ${caption}` : "Species monograph banner"}
            fill
            sizes="100vw"
            className="object-cover"
          />
        )}
      </div>
      {caption ? (
        <figcaption className="mt-3 font-sans text-[11px] leading-snug text-white/65">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

export function MonographSpeciesFig({
  speciesId,
  seed,
  useCardImage,
  className = "",
  layout = "banner",
}: Omit<ComponentProps<typeof MonographFig>, "seed" | "localBase" | "diagramSrc" | "placeholder"> & {
  speciesId: string;
  seed: string;
  useCardImage?: boolean;
}) {
  const card = SPECIES_CARD_IMAGE_BY_ID[speciesId];
  if (useCardImage && card) {
    if (layout === "matchText") {
      return (
        <figure className={`flex h-full min-h-0 flex-col ${className}`}>
          <div className="relative min-h-[min(13.75rem,50dvh)] w-full flex-1 overflow-hidden rounded-2xl ring-1 ring-white/[0.08] sm:min-h-[min(16rem,52dvh)] lg:min-h-0">
            <GuideFigureImg
              localSrc={card}
              fallbackSrc={speciesImageUrl(seed, 1200, 1200)}
              className="absolute inset-0 h-full w-full object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </figure>
      );
    }
    const ratio =
      layout === "tall" ? "aspect-[4/5] sm:aspect-[3/4]" : "aspect-[21/9] sm:aspect-video";
    const fw = layout === "tall" ? 1000 : 1600;
    const fh = layout === "tall" ? 1250 : 900;
    return (
      <figure className={className}>
        <div className={`relative overflow-hidden rounded-2xl ring-1 ring-white/[0.08] ${ratio}`}>
          <GuideFigureImg
            localSrc={card}
            fallbackSrc={speciesImageUrl(seed, fw, fh)}
            className="h-full w-full object-cover"
            sizes="100vw"
          />
        </div>
      </figure>
    );
  }
  return <MonographFig seed={seed} layout={layout} className={className} />;
}
