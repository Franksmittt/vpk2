import Image from "next/image";

type StickyBreadcrumbImageBackdropProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

/**
 * Full-bleed strip photo behind sticky quarry navigation, with a uniform 20% black
 * overlay (`bg-black/20`) covering the entire image for legibility.
 */
export function StickyBreadcrumbImageBackdrop({
  src,
  alt,
  priority = false,
}: StickyBreadcrumbImageBackdropProps) {
  return (
    <>
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority={priority}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-black/20" aria-hidden />
    </>
  );
}
