"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLeft = [
  { name: "Experience", href: "/experience" },
  { name: "The Hunt", href: "/the-hunt" },
  { name: "Species", href: "/species" },
  { name: "Activities", href: "/activities" },
] as const;

const navRight = [
  { name: "The Lodge", href: "/lodge" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
] as const;

const mobileNavLinks = [...navLeft, ...navRight] as const;

const navLinkClass =
  "focus-ring-invert shrink-0 whitespace-nowrap rounded-sm font-sans text-[10px] font-semibold uppercase tracking-[0.09em] text-white/80 transition-colors hover:text-white sm:tracking-[0.11em]";

const mobileOverlayLinkClass =
  "focus-ring-invert rounded-md py-1 font-sans text-2xl font-bold uppercase tracking-tight text-white/90 transition-colors hover:text-white";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    if (menuOpen) {
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 z-[1000] w-full border-b border-white/10 bg-black/50 backdrop-blur-md transition-all duration-300">
        <div className="editorial-container flex flex-col gap-0 py-2 md:grid md:h-24 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center md:gap-x-8 md:gap-y-0 lg:gap-x-12 xl:gap-x-16 md:py-0">
          {/* Mobile: hamburger + wordmark only (no tagline) */}
          <div className="grid w-full grid-cols-[3rem_1fr_3rem] items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="focus-ring-invert flex justify-center rounded-lg p-2 text-white"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-overlay"
            >
              <Menu className="h-6 w-6" aria-hidden />
            </button>
            <Link
              href="/"
              className="focus-ring-invert flex min-w-0 items-center justify-center justify-self-center text-center"
              onClick={() => setMenuOpen(false)}
            >
              <span className="font-sans text-base font-black uppercase tracking-tighter text-white sm:text-lg">
                VAALPENSKRAAL
              </span>
            </Link>
            <div className="w-10 shrink-0" aria-hidden />
          </div>

          {/* Desktop: logo center column */}
          <div className="hidden shrink-0 md:col-start-2 md:row-start-1 md:flex md:justify-center">
            <Link href="/" className="focus-ring-invert flex flex-col items-center rounded-md">
              <span className="font-sans text-lg font-black uppercase tracking-tighter text-white sm:text-xl md:text-2xl lg:text-3xl">
                VAALPENSKRAAL
              </span>
              <span className="mt-1 font-sans text-xs font-bold uppercase tracking-[0.35em] text-white/70 sm:mt-1 md:mt-1 md:text-xs lg:text-xs">
                Premium Hunting Experience
              </span>
            </Link>
          </div>

          {/* Desktop: left of logo */}
          <nav
            className="hidden min-w-0 items-center justify-end gap-x-4 pr-2 md:col-start-1 md:row-start-1 md:flex md:gap-x-4 md:pr-4 lg:gap-x-5 lg:pr-6"
            aria-label="Hunt, species, and activities"
          >
            {navLeft.map((link) => (
              <Link key={link.href} href={link.href} className={navLinkClass}>
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop: right of logo + Book Hunt */}
          <div className="hidden min-w-0 items-center justify-start gap-x-4 pl-2 md:col-start-3 md:row-start-1 md:flex md:gap-x-5 md:pl-4 lg:gap-x-6 lg:pl-6">
            <nav className="flex min-w-0 items-center gap-x-4 md:gap-x-4 lg:gap-x-5" aria-label="Lodge, gallery, and contact">
              {navRight.map((link) => (
                <Link key={link.href} href={link.href} className={navLinkClass}>
                  {link.name}
                </Link>
              ))}
            </nav>
            <Link
              href="/reserve"
              className="focus-ring-invert shrink-0 whitespace-nowrap rounded-full bg-white px-3 py-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-black transition-transform hover:scale-105 lg:px-5 lg:py-2"
            >
              Book Hunt
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        id="mobile-nav-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`fixed inset-0 z-[2000] flex flex-col bg-black transition-opacity duration-300 md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-14 shrink-0 items-center gap-4 border-b border-white/10 px-4 sm:h-16 sm:px-6">
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="focus-ring-invert rounded-lg p-2 text-white"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" aria-hidden />
          </button>
          <span className="font-sans text-sm font-black uppercase tracking-tight text-white/90">
            Menu
          </span>
        </div>
        <nav className="flex flex-1 flex-col gap-2 overflow-y-auto px-6 py-8 sm:px-8" aria-label="Main navigation">
          {mobileNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={mobileOverlayLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/reserve"
            className="focus-ring-invert mt-6 inline-flex w-fit items-center justify-center rounded-full bg-white px-8 py-4 font-sans text-sm font-bold uppercase tracking-[0.2em] text-black"
            onClick={() => setMenuOpen(false)}
          >
            Book Hunt
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
