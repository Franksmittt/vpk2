const pulses = [
  { k: "22", label: "Quarry species on the census roster" },
  { k: "PH", label: "Led days under professional hunter field standards" },
  { k: "0", label: "Guaranteed harvest promises (we do not sell fiction)" },
  { k: "More", label: "Thicket lessons per kilometre walked" },
] as const;

const HuntPulseStrip = () => {
  return (
    <section className="border-b border-white/[0.07] bg-black py-10 md:py-12">
      <div className="editorial-container">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {pulses.map((p) => (
            <div
              key={p.label}
              className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-transparent px-4 py-6 ring-1 ring-white/[0.04] md:px-5 md:py-8"
            >
              <p className="font-serif text-3xl font-medium tracking-tight text-burnished-copper/90 md:text-4xl">{p.k}</p>
              <p className="mt-3 font-sans text-[11px] font-medium uppercase leading-snug tracking-[0.18em] text-white/50">{p.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HuntPulseStrip;
