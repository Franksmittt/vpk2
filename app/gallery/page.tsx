import type { Metadata } from "next";
import GalleryGridWithLightbox from "@/components/gallery/GalleryGridWithLightbox";
import PageHero from "@/components/layout/PageHero";
import { galleryImages } from "@/data/gallery-images";

export const metadata: Metadata = {
  title: "Gallery | Vaalpenskraal Game Reserve",
  description:
    "Photography from Vaalpenskraal Game Reserve: recent hunt weeks, camp tables, and guests together on the Waterberg estate.",
};

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        heroTitleId="gallery-hero-title"
        scrollLinkedTypography
        eyebrow="Gallery"
        title="The estate in still frames."
        subtitle="A quiet room for hunt weeks, the people who shared them, and the estate light that still shows up in your camera roll long after you drive home."
        imageSeed="galleryhero"
        imageSrc="/images/hero/estate-bushveld-wide.png"
      />

      <section className="border-t border-white/[0.07] py-16 md:py-24">
        <div className="editorial-container">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-white/70">Hunt weeks & camp</p>
          <h2 className="mt-4 max-w-3xl font-sans text-2xl font-semibold tracking-tight sm:text-3xl">
            Photos from recent hunts, and the people beside you
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-white/65 md:text-base">
            Friends and family at the same kraal table, PHs who read the bush before they read a crowd, and animals taken
            the way Vaalpenskraal expects: honest field work under PH discipline, no trophy theatre. We keep this gallery
            open because trust starts long before anyone signs a date. Glad you wandered in.
          </p>

          <GalleryGridWithLightbox images={galleryImages} />
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
