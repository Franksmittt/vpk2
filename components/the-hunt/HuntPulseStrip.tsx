const pulses = [
  { k: "22", label: "Quarry species on the census roster" },
  { k: "PH", label: "Led days under professional hunter field standards" },
  { k: "0", label: "Guaranteed harvest promises (we do not sell fiction)" },
  { k: "More", label: "Thicket lessons per kilometre walked" },
] as const;

/** Census-style pulse stats: asymmetric bento grid (5+7 / 4+8 on md+). */
const HuntPulseStrip = () => {
  return (
    <section
      className="border-b border-white/[0.07] bg-black py-10 md:py-12"
      aria-labelledby="hunt-pulse-heading"
    >
      <div className="editorial-container">
        <h2 id="hunt-pulse-heading" className="sr-only">
          Hunt at a glance
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          {pulses.map((p, i) => {
            const span =
              i === 0
                ? "md:col-span-5"
                : i === 1
                  ? "md:col-span-7"
                  : i === 2
                    ? "md:col-span-4"
                    : "md:col-span-8";
            return (
              <div
                key={p.label}
                className={`flex min-h-[9.5rem] flex-col justify-between rounded-2xl border border-white/[0.09] bg-gradient-to-br from-white/[0.05] to-transparent px-5 py-6 ring-1 ring-white/[0.04] md:min-h-[11rem] md:rounded-3xl md:px-7 md:py-8 ${span}`}
              >
                <p className="font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-none tracking-tight text-canvas-cream">
                  {p.k}
                </p>
                <p className="mt-4 max-w-md font-sans text-[11px] font-medium uppercase leading-snug tracking-[0.16em] text-white/50 md:mt-6">
                  {p.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HuntPulseStrip;
