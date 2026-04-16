import type { Metadata } from "next";
import GalleryGridWithLightbox from "@/components/gallery/GalleryGridWithLightbox";
import PageHero from "@/components/layout/PageHero";
import { GALLERY_IMAGE_COUNT, galleryImages } from "@/data/gallery-images";

export const metadata: Metadata = {
  title: "Gallery | Vaalpenskraal Game Reserve",
  description: `Photography from Vaalpenskraal Game Reserve: camp, bush, and field moments. ${GALLERY_IMAGE_COUNT} images in the estate gallery.`,
};

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        heroTitleId="gallery-hero-title"
        scrollLinkedTypography
        eyebrow="Gallery"
        title="The estate in still frames."
        subtitle="Camp, bush, and honest Waterberg light. Each frame below is on-estate photography supplied for this grid."
        imageSeed="galleryhero"
        imageSrc="/images/hero/wide-hunt-story.png"
      />

      <section className="border-t border-white/[0.07] py-16 md:py-24">
        <div className="editorial-container">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-white/70">Image grid</p>
          <h2 className="mt-4 max-w-2xl font-sans text-2xl font-semibold tracking-tight sm:text-3xl">
            {GALLERY_IMAGE_COUNT} photographs
          </h2>
          <p className="mt-4 max-w-xl font-sans text-sm leading-relaxed text-white/65 md:text-base">
            Tap or click a tile for a full-screen view. Arrow keys step between images while the viewer is open. Escape
            or the backdrop closes it.
          </p>

          <GalleryGridWithLightbox images={galleryImages} />
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
