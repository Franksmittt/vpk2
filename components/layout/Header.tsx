"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Globe, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Experience", href: "/experience" },
    { name: "The Hunt", href: "/reserve" },
    { name: "Species", href: "/species" },
    { name: "The Lodge", href: "/lodge" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-[1000] bg-black/50 backdrop-blur-md h-20 md:h-24 border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 h-full flex items-center justify-between">
          {/* Left: Menu */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Open Menu"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
            <span className="hidden md:block font-sans text-xs font-bold uppercase tracking-[0.2em] text-white/80">Menu</span>
          </div>

          {/* Center: Logo */}
          <Link href="/" className="flex flex-col items-center relative z-[1001]">
            <span className="font-sans font-black text-xl sm:text-2xl md:text-3xl tracking-tighter text-white uppercase">VAALPENSKRAAL</span>
            <span className="font-sans font-bold text-[0.45rem] sm:text-[0.5rem] md:text-[0.65rem] uppercase tracking-[0.4em] text-white/50 mt-1">Premium Hunting Experience</span>
          </Link>

          {/* Right: Language + CTA */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className="hidden md:flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <Globe className="w-4 h-4" />
              <span className="font-sans font-bold text-xs uppercase tracking-widest">EN</span>
            </button>
            <Link 
              href="/reserve" 
              className="hidden sm:flex bg-white text-black font-sans font-bold text-[0.65rem] sm:text-xs uppercase tracking-[0.2em] px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full hover:scale-105 transition-transform whitespace-nowrap"
            >
              Book Hunt
            </Link>
          </div>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[2000] bg-black transition-all duration-500 ease-in-out flex flex-col ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Menu Header */}
        <div className="h-20 md:h-24 flex items-center justify-between px-4 sm:px-6 md:px-12 border-b border-white/10">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <span className="hidden md:block font-sans text-xs font-bold uppercase tracking-[0.2em] text-white/80">Close</span>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="font-sans font-black text-xl sm:text-2xl md:text-3xl tracking-tighter text-white uppercase">VAALPENSKRAAL</span>
          </div>

          <div className="w-10 md:w-24" /> {/* Spacer for centering */}
        </div>

        {/* Menu Links */}
        <div className="flex-1 flex flex-col items-center justify-center gap-8 p-8 overflow-y-auto">
          {navLinks.map((link, i) => (
            <Link 
              key={i} 
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-sans text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="mt-12 flex flex-col items-center gap-6">
            <Link 
              href="/reserve" 
              onClick={() => setIsMenuOpen(false)}
              className="bg-white text-black font-sans font-bold text-sm uppercase tracking-[0.2em] px-12 py-4 rounded-full hover:scale-105 transition-transform"
            >
              Book Your Hunt
            </Link>
            <button className="flex items-center gap-2 text-white/50 hover:text-white transition-colors mt-4">
              <Globe className="w-5 h-5" />
              <span className="font-sans font-bold text-sm uppercase tracking-widest">English</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
