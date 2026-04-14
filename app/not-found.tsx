import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-black px-5 pb-24 pt-32 text-white sm:px-8 md:px-12 md:pt-40">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-white/70">404</p>
        <h1 className="mt-4 font-sans text-4xl font-semibold tracking-tight sm:text-5xl">This trail went cold</h1>
        <p className="mt-5 font-sans text-base leading-relaxed text-white/70">
          The page you are looking for is not here. It may have moved, or the link was mistyped.
        </p>
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="focus-ring-invert inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-sans text-sm font-medium text-black transition-colors hover:bg-white/90"
          >
            Home
            <ChevronRight className="h-4 w-4 opacity-60" aria-hidden />
          </Link>
          <Link
            href="/species"
            className="focus-ring-invert inline-flex items-center gap-2 font-sans text-sm text-white/70 transition-colors hover:text-white"
          >
            Quarry species
            <ChevronRight className="h-4 w-4 opacity-60" aria-hidden />
          </Link>
          <Link
            href="/contact?intent=general"
            className="focus-ring-invert inline-flex items-center gap-2 font-sans text-sm text-white/70 transition-colors hover:text-white"
          >
            Contact
            <ChevronRight className="h-4 w-4 opacity-60" aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}
