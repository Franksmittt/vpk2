import Link from "next/link";

const linkClass =
  "focus-ring rounded-sm font-sans text-sm font-medium text-white/65 transition-colors hover:text-white";

const columnClass = "font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/55";

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.07] bg-[#050505] pb-14 pt-16 md:pb-16 md:pt-20">
      <div className="editorial-container">
        <div className="mb-14 flex flex-col gap-6 border-b border-white/[0.06] pb-14 md:mb-16 md:flex-row md:items-end md:justify-between md:pb-16">
          <div className="max-w-lg">
            <p className={columnClass}>Vaalpenskraal Game Reserve</p>
            <p className="mt-3 font-sans text-base leading-relaxed text-white/60 md:text-[1.05rem]">
              Waterberg bushveld, PH-led field days, and four kraals on camp. Book when you are ready to listen more than you talk.
            </p>
          </div>
          <p className="font-serif text-2xl font-medium tracking-tight text-burnished-copper/75 md:text-3xl">Iron Mountain</p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-12 sm:gap-x-12 lg:grid-cols-4 lg:gap-x-10">
          <div>
            <p className={columnClass}>Visit</p>
            <ul className="mt-5 space-y-3.5">
              <li>
                <Link href="/" className={linkClass}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/experience" className={linkClass}>
                  The Experience
                </Link>
              </li>
              <li>
                <Link href="/the-hunt" className={linkClass}>
                  The Hunt
                </Link>
              </li>
              <li>
                <Link href="/species" className={linkClass}>
                  Quarry species
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className={columnClass}>Estate</p>
            <ul className="mt-5 space-y-3.5">
              <li>
                <Link href="/lodge" className={linkClass}>
                  The Lodge
                </Link>
              </li>
              <li>
                <Link href="/activities" className={linkClass}>
                  Activities
                </Link>
              </li>
              <li>
                <Link href="/gallery" className={linkClass}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/reserve" className={linkClass}>
                  Book your hunt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className={columnClass}>Policies</p>
            <ul className="mt-5 space-y-3.5">
              <li>
                <Link href="/privacy" className={linkClass}>
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className={linkClass}>
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/cookies" className={linkClass}>
                  Cookies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className={columnClass}>Contact</p>
            <ul className="mt-5 space-y-3.5">
              <li>
                <Link href="/contact?intent=general" className={linkClass}>
                  Enquire
                </Link>
              </li>
              <li>
                <Link href="/contact?intent=media" className={linkClass}>
                  Media
                </Link>
              </li>
              <li>
                <a href="mailto:info@vaalpenskraal.com" className={linkClass}>
                  info@vaalpenskraal.com
                </a>
              </li>
            </ul>
            <p className="mt-6 font-sans text-xs leading-relaxed text-white/45">
              Waterberg Biosphere · Thabazimbi area, Limpopo, South Africa
            </p>
          </div>
        </nav>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-10 md:mt-16 md:flex-row md:items-center">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-white/45">
            &copy; {new Date().getFullYear()} Vaalpenskraal Game Reserve
          </p>
          <p className="font-sans text-[11px] text-white/40">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
