import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const HuntFinale = () => {
  return (
    <section className="relative flex min-h-[min(70vh,760px)] items-center justify-center overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0">
        <Image
          src="/images/species/iron-mountain-quarry-hero.png"
          alt="Wide stalking view across Vaalpenskraal bushveld and thicket"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/15" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/28 to-black/12" aria-hidden />
      </div>
      <div className="editorial-container relative z-10 text-center">
        <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-white/[0.1] bg-black/45 px-7 py-10 shadow-[0_24px_80px_rgb(0_0_0/0.5)] backdrop-blur-sm sm:px-10 sm:py-12 md:px-12 md:py-14">
          <h2 className="font-sans text-3xl font-semibold tracking-tight text-white [text-shadow:0_2px_24px_rgb(0_0_0/0.65)] sm:text-4xl md:text-[2.5rem]">
            The mountain ignores your PDF
          </h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-white/85 md:text-lg [text-shadow:0_1px_12px_rgb(0_0_0/0.7)]">
            We own prep, ethics, sweat. Weather, animal mood, and jagged horizons are not ours to command. That blunt respect is why people return.
          </p>
          <div className="mt-10 flex min-w-0 flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
            <Link
              href="/species"
              className="focus-ring-invert inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-center font-sans text-sm font-medium text-black shadow-[0_4px_24px_rgb(0_0_0/0.4)] transition-colors hover:bg-white/90 sm:w-auto sm:px-8 sm:py-4"
            >
              Browse quarry species
              <ChevronRight className="h-4 w-4 opacity-60" aria-hidden />
            </Link>
            <Link
              href="/contact?intent=hunt"
              className="focus-ring-invert inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-center font-sans text-sm font-medium text-white transition-colors hover:border-white/50 hover:bg-white/[0.06] sm:w-auto sm:px-8 sm:py-4"
            >
              Contact the hunt desk
              <ChevronRight className="h-4 w-4 opacity-60" aria-hidden />
            </Link>
            <Link
              href="/experience"
              className="focus-ring-invert inline-flex w-full min-w-0 items-center justify-center gap-2 py-2 text-center font-sans text-sm text-white/80 transition-colors hover:text-white [text-shadow:0_1px_8px_rgb(0_0_0/0.8)] sm:w-auto sm:py-0"
            >
              The Experience
              <ChevronRight className="h-4 w-4 opacity-60" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HuntFinale;
