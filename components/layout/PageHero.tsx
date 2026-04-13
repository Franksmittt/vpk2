type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  imageSeed: string;
  /** Slightly shorter hero for dense pages */
  compact?: boolean;
};

export default function PageHero({ eyebrow, title, subtitle, imageSeed, compact }: PageHeroProps) {
  const minH = compact ? "min-h-[38vh] sm:min-h-[42vh]" : "min-h-[48vh] sm:min-h-[52vh]";
  return (
    <section className={`relative ${minH} flex flex-col justify-end overflow-hidden border-b border-white/[0.08]`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://picsum.photos/seed/${imageSeed}/1920/1080')`,
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/35" aria-hidden />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-14 pt-32 sm:px-8 md:px-12 md:pb-20 md:pt-36">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-white/45">{eyebrow}</p>
        <h1 className="mt-4 font-sans text-[clamp(2.25rem,6vw,3.75rem)] font-semibold tracking-[-0.035em] leading-[1.05] text-white text-balance">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-white/55 md:text-lg">{subtitle}</p>
      </div>
    </section>
  );
}
