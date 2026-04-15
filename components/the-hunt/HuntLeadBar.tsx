import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";

const HuntLeadBar = () => {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.07] bg-[#080402] py-14 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_0%,rgb(184_115_51/0.12)_0%,transparent_55%)]"
        aria-hidden
      />
      <div className="editorial-container relative z-10 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-1.5 font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-white/60">
            <Sparkles className="h-3.5 w-3.5 text-burnished-copper/80" aria-hidden />
            Iron Mountain
          </div>
          <p className="mt-8 font-serif text-[clamp(1.75rem,4.5vw,2.75rem)] font-medium leading-[1.12] tracking-tight text-white [text-shadow:0_2px_40px_rgb(0_0_0/0.5)]">
            Iron does not negotiate. The week does the talking.
          </p>
        </div>
        <div className="flex flex-col gap-6 lg:col-span-6 lg:items-end lg:text-right">
          <p className="max-w-xl font-sans text-base leading-relaxed text-white/65 lg:ml-auto lg:max-w-md">
            This page is theatre for the curious. Numbers, dates, and species lists live on Reserve. Here you learn how we think before you ask for a slot.
          </p>
          <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
            <Link
              href="/reserve#book-hunt"
              className="focus-ring-invert inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-center font-sans text-sm font-medium text-black shadow-[0_8px_32px_rgb(0_0_0/0.35)] transition-colors hover:bg-white/90 sm:w-auto sm:px-8 sm:py-4"
            >
              Book your hunt
              <ChevronRight className="h-4 w-4 opacity-60" aria-hidden />
            </Link>
            <Link
              href="/experience"
              className="focus-ring-invert inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-center font-sans text-sm font-medium text-white/90 transition-colors hover:border-white/40 hover:bg-white/[0.05] sm:w-auto sm:px-8 sm:py-4"
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

export default HuntLeadBar;
