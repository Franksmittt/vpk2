"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight, Crosshair, Users, Flame, Map, Shield, Leaf, Target, ChevronLeft } from "lucide-react";

const HERO_SLIDES = [
  {
    image: "https://picsum.photos/seed/hunting/1920/1080",
    title: "The\nPursuit.",
    subtitle: "14+ Species. Unforgiving Terrain. Zero Compromise.",
  },
  {
    image: "https://picsum.photos/seed/buffalo/1920/1080",
    title: "The\nEncounter.",
    subtitle: "Face the Black Death in the dense Waterberg bush.",
  },
  {
    image: "https://picsum.photos/seed/campfire/1920/1080",
    title: "The\nLegacy.",
    subtitle: "Forge bonds that last a lifetime around the fire.",
  }
];

const TESTIMONIALS = [
  {
    id: "james-r",
    quote:
      "Vaalpenskraal isn't just a hunting destination. It's a crucible. The terrain tests you, the animals humble you, and the fire at night brings it all together. The purest hunt I've experienced in Africa.",
    emphasis: "crucible",
    name: "James R.",
    location: "Texas, USA",
    locale: "en" as const,
    local: false,
    imgSeed: "hunterportrait",
  },
  {
    id: "piet-modimolle",
    quote:
      "Die Waterberg het tande. Hier leer jy dit respekteer. Kudu in digte bos, buffels wat jou laat stilstaan, en 'n boma waar die stories langer brand as die hout.",
    emphasis: "respekteer",
    name: "Pieter v.d. Merwe",
    location: "Modimolle, Limpopo",
    locale: "af" as const,
    local: true,
    imgSeed: "safarihunter1",
  },
  {
    id: "thabo-pretoria",
    quote:
      "I've hunted across South Africa. Too many places sell a postcard. Vaalpenskraal sells the real thing: thick bush, honest animals, and a team that doesn't treat you like a tourist.",
    emphasis: "the real thing",
    name: "Thabo M.",
    location: "Pretoria, South Africa",
    locale: "en" as const,
    local: true,
    imgSeed: "safarihunter2",
  },
  {
    id: "sarie-polokwane",
    quote:
      "Ons kom al jare terug. Dis moeilik om te verduidelik, maar dis asof die grond self jou uitdaag om beter te jag: meer geduld, meer respek, minder geraas.",
    emphasis: "beter te jag",
    name: "Sarie B.",
    location: "Polokwane, Limpopo",
    locale: "af" as const,
    local: true,
    imgSeed: "safarihunter3",
  },
  {
    id: "lisa-stellenbosch",
    quote:
      "We drove up from the Cape for a week. The lodge is refined without being precious: hot water when you need it, silence when you don't, and kudu tracks five minutes from your door.",
    emphasis: "refined without being precious",
    name: "Lisa van Zyl",
    location: "Stellenbosch, South Africa",
    locale: "en" as const,
    local: true,
    imgSeed: "safarihunter4",
  },
  {
    id: "johan-hoedspruit",
    quote:
      "Eersteklas gemak, maar nêrens weg van die werklike jag af nie. Presies hoe ons dit graag het: 'n kamp wat werk, en wild wat jou nog steeds laat sweet.",
    emphasis: "werklike jag",
    name: "Johan K.",
    location: "Hoedspruit, Limpopo",
    locale: "af" as const,
    local: true,
    imgSeed: "safarihunter5",
  },
  {
    id: "marcus-uk",
    quote:
      "I've hunted in Namibia and Zimbabwe. The Waterberg thicket here is a different exam: closer, slower, more technical. Vaalpenskraal doesn't make it easy, and that's exactly the point.",
    emphasis: "a different exam",
    name: "Marcus H.",
    location: "Yorkshire, UK",
    locale: "en" as const,
    local: false,
    imgSeed: "safarihunter6",
  },
];

function testimonialQuoteBody(quote: string, emphasis?: string) {
  if (!emphasis || !quote.includes(emphasis)) {
    return quote;
  }
  const [before, ...rest] = quote.split(emphasis);
  const after = rest.join(emphasis);
  return (
    <>
      {before}
      <span className="text-burnished-copper/95">{emphasis}</span>
      {after}
    </>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-advance hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 10000);
    return () => clearInterval(t);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  const activeT = TESTIMONIALS[activeTestimonial];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/30">
      
      {/* Hero: one viewport tall (header is fixed; padding clears it). Content scaled to fit. */}
      <section className="relative h-[100svh] max-h-[100dvh] box-border flex flex-col overflow-hidden bg-black shrink-0">
        {HERO_SLIDES.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image with slow zoom effect */}
            <div 
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-out ${
                index === currentSlide ? "scale-105" : "scale-100"
              }`}
              style={{ backgroundImage: `url('${slide.image}')`, opacity: 0.5 }}
            />
            {/* Gradients for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/90" />
            
            <div className="relative z-20 h-full min-h-0 flex flex-col pt-20 md:pt-24 pb-[4.5rem] sm:pb-20 box-border">
              <div className="flex-1 min-h-0 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 py-2 sm:py-3">
                <p className="font-sans text-[0.65rem] sm:text-xs md:text-sm font-bold tracking-[0.2em] sm:tracking-[0.28em] text-white/80 uppercase text-center shrink-0">
                  Vaalpenskraal Game Reserve
                </p>

                <h1 className="font-sans text-[clamp(2.25rem,8vw,4.25rem)] sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] font-black tracking-tighter text-white uppercase text-center drop-shadow-2xl whitespace-pre-line max-w-[min(100%,42rem)] shrink-0">
                  {slide.title}
                </h1>

                <div className="w-10 sm:w-14 h-px bg-white/50 shrink-0" />

                <p className="font-sans text-sm sm:text-base md:text-lg text-white/90 max-w-md sm:max-w-xl text-center font-medium tracking-tight px-1 sm:px-2 leading-snug shrink-0">
                  {slide.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full max-w-md sm:max-w-none sm:w-auto justify-center shrink-0 mt-1">
                  <Link href="/reserve" className="group relative flex items-center justify-center bg-white text-black font-sans font-bold text-[0.65rem] sm:text-xs uppercase tracking-widest px-6 sm:px-8 py-2.5 sm:py-3 rounded-full overflow-hidden transition-transform hover:scale-105">
                    <span className="relative z-10">Book Your Hunt</span>
                    <div className="absolute inset-0 bg-neutral-200 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                  </Link>
                  <Link href="/species" className="group flex items-center justify-center bg-black/20 backdrop-blur-md border border-white/30 text-white font-sans font-bold text-[0.65rem] sm:text-xs uppercase tracking-widest px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-white/10 transition-colors duration-300">
                    Explore Species
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider + scroll hint: single bottom row, inside hero chrome */}
        <div className="absolute z-30 bottom-3 sm:bottom-4 left-0 right-0 px-4 sm:px-8 flex items-end justify-between gap-3 pointer-events-none">
          <div className="flex gap-1.5 pointer-events-auto">
            <button type="button" onClick={prevSlide} className="p-2 rounded-full border border-white/20 bg-black/30 backdrop-blur-md hover:bg-white/10 transition-colors cursor-pointer" aria-label="Previous slide">
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>
            <button type="button" onClick={nextSlide} className="p-2 rounded-full border border-white/20 bg-black/30 backdrop-blur-md hover:bg-white/10 transition-colors cursor-pointer" aria-label="Next slide">
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>
          </div>

          <div className="hidden sm:flex flex-col items-center gap-1 pointer-events-none pb-0.5">
            <span className="font-sans text-[0.6rem] uppercase tracking-[0.25em] text-white/50">Scroll</span>
            <div className="w-px h-8 bg-white/20 overflow-hidden">
              <div className="w-full h-full bg-white animate-scroll-down" />
            </div>
          </div>

          <div className="flex gap-2 pointer-events-auto items-center">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`h-1 transition-all duration-500 rounded-full cursor-pointer ${idx === currentSlide ? "w-6 sm:w-8 bg-white" : "w-1.5 sm:w-2 bg-white/30"}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* NEW COMPONENT 1: The Code (Ethics & Values) */}
      <section className="py-20 md:py-32 bg-neutral-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter mb-4 uppercase">The Hunter's Code</h2>
            <p className="font-sans text-lg text-white/60 max-w-2xl mx-auto font-medium">
              We don't just harvest; we conserve. Our practices are rooted in deep respect for the land and the quarry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                <Shield className="w-8 h-8 text-white/80" />
              </div>
              <h3 className="font-sans text-xl font-bold uppercase tracking-tight mb-3">Fair Chase</h3>
              <p className="font-sans text-white/60 leading-relaxed text-sm sm:text-base">
                No shortcuts. No guarantees. We believe in the ethical pursuit of free-ranging wild game, testing the hunter's true skill.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                <Leaf className="w-8 h-8 text-white/80" />
              </div>
              <h3 className="font-sans text-xl font-bold uppercase tracking-tight mb-3">Conservation</h3>
              <p className="font-sans text-white/60 leading-relaxed text-sm sm:text-base">
                Hunting is the ultimate tool for preservation. Our selective harvesting ensures the long-term health and genetic strength of the herds.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                <Target className="w-8 h-8 text-white/80" />
              </div>
              <h3 className="font-sans text-xl font-bold uppercase tracking-tight mb-3">Precision</h3>
              <p className="font-sans text-white/60 leading-relaxed text-sm sm:text-base">
                Respect demands a clean, ethical shot. We prioritize marksmanship, patience, and waiting for the perfect moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid: The Experience */}
      <section className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-20 md:py-32">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 uppercase">Designed for the pursuit.</h2>
          <p className="font-sans text-lg sm:text-xl md:text-2xl text-white/60 max-w-3xl mx-auto font-medium">
            Whether you walk alone or stand with your brotherhood, Vaalpenskraal delivers the ultimate bush experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Card 1: Solo Hunter */}
          <Link
            href="/reserve"
            aria-label="Book a hunt: the solitary tracker"
            className="md:col-span-2 relative block min-h-[350px] md:min-h-[450px] rounded-[2rem] overflow-hidden group bg-neutral-900"
          >
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/solohunter/1200/800')] bg-cover bg-center opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8 md:p-10">
              <Crosshair className="w-8 h-8 md:w-10 md:h-10 text-white mb-4 md:mb-6" />
              <h3 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter mb-3 md:mb-4 uppercase">The Solitary Tracker</h3>
              <p className="font-sans text-base sm:text-lg text-white/70 max-w-lg font-medium">
                Find your silence. Test your limits against the elements and the instincts of the wild.
              </p>
            </div>
          </Link>

          {/* Card 2: 14+ Species */}
          <Link
            href="/species"
            aria-label="Explore quarry species"
            className="relative flex min-h-[350px] flex-col justify-end overflow-hidden rounded-[2rem] bg-neutral-900 p-6 sm:p-8 md:min-h-[450px] md:p-10 group"
          >
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/kuduhorn/600/800')] bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
            <div className="relative z-10">
              <Map className="w-8 h-8 md:w-10 md:h-10 text-white mb-4 md:mb-6" />
              <h3 className="font-sans text-3xl sm:text-4xl font-black tracking-tighter mb-3 md:mb-4 uppercase">14+ Species</h3>
              <p className="font-sans text-base sm:text-lg text-white/70 font-medium">
                From the Grey Ghost to the Black Death. Unmatched biodiversity.
              </p>
            </div>
          </Link>

          {/* Card 3: The Brotherhood */}
          <Link
            href="/lodge"
            aria-label="The lodge: groups and fireside"
            className="relative flex min-h-[350px] flex-col justify-end overflow-hidden rounded-[2rem] bg-neutral-900 p-6 sm:p-8 md:min-h-[450px] md:p-10 group"
          >
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/campfire/600/800')] bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
            <div className="relative z-10">
              <Users className="w-8 h-8 md:w-10 md:h-10 text-white mb-4 md:mb-6" />
              <h3 className="font-sans text-3xl sm:text-4xl font-black tracking-tighter mb-3 md:mb-4 uppercase">The Brotherhood</h3>
              <p className="font-sans text-base sm:text-lg text-white/70 font-medium">
                Weekend getaways forged in the bush. Shared stories, shared fires.
              </p>
            </div>
          </Link>

          {/* Card 4: The Culture */}
          <Link
            href="/experience"
            aria-label="The Vaalpenskraal experience"
            className="md:col-span-2 relative block min-h-[350px] md:min-h-[450px] rounded-[2rem] overflow-hidden group bg-neutral-900"
          >
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/huntingculture/1200/800')] bg-cover bg-center opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8 md:p-10">
              <Flame className="w-8 h-8 md:w-10 md:h-10 text-white mb-4 md:mb-6" />
              <h3 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter mb-3 md:mb-4 uppercase">The Culture</h3>
              <p className="font-sans text-base sm:text-lg text-white/70 max-w-lg font-medium">
                It's more than the harvest. It's the smell of the dust, the crackle of the fire, and the adrenaline of the stalk.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Basecamp - split canvas: image + stacked amenity rails */}
      <section className="bg-[#070707] text-white border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 pt-20 md:pt-28 pb-12 md:pb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
            <div className="max-w-xl">
              <p className="font-sans text-[11px] font-medium tracking-[0.3em] uppercase text-white/38 mb-5">
                The lodge
              </p>
              <h2 className="font-sans text-[2.75rem] sm:text-4xl md:text-[2.85rem] font-light tracking-[-0.03em] leading-[1.08]">
                The basecamp is{" "}
                <span className="font-semibold text-white">where the bush</span>
                <br className="hidden sm:block" />
                <span className="font-semibold text-white"> lets you exhale.</span>
              </h2>
            </div>
            <p className="font-sans lg:max-w-[22rem] text-[0.95rem] md:text-base leading-relaxed text-white/48 font-normal lg:text-right lg:pb-1">
              After miles in thick thicket, you want silence, hot water, and a fire you did not have to build alone. Premium comfort, without polishing away the grit.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 pb-20 md:pb-32">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4 md:items-stretch">
            <div className="md:col-span-3 relative min-h-[min(52vh,420px)] md:min-h-[520px] rounded-[1.35rem] md:rounded-[1.75rem] overflow-hidden bg-neutral-900 ring-1 ring-white/[0.07]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.4s] ease-out hover:scale-[1.02]"
                style={{ backgroundImage: "url('https://picsum.photos/seed/luxurylodge/1600/2000')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/55 via-transparent to-black/25 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-end justify-between gap-4">
                <p className="font-sans text-xs md:text-sm text-white/55 max-w-[14rem] leading-snug">
                  Main house, four chalets, pool &amp; boma. One camp in the Waterberg.
                </p>
                <Link
                  href="/lodge"
                  className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-white/95 text-black font-sans text-xs md:text-sm font-medium px-4 md:px-5 py-2.5 hover:bg-white transition-colors"
                >
                  Explore
                  <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 opacity-70" />
                </Link>
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col gap-3 md:gap-3.5">
              {[
                { tag: "01", title: "Four identical chalets", note: "Up to 5 each · 20 guests total · en-suite" },
                { tag: "02", title: "Main house hub", note: "Bar, kitchen & kuier under one roof" },
                { tag: "03", title: "Pool, lapa & boma", note: "Lapa by the pool · boma under the trees" },
                { tag: "04", title: "Gated access", note: "Main entrance off the road" },
                { tag: "05", title: "Wild game cuisine", note: "Honest plates · camp-to-table" },
              ].map((row) => (
                <div
                  key={row.tag}
                  className="group flex gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] px-4 py-4 md:px-5 md:py-4.5 hover:border-white/[0.14] hover:bg-white/[0.035] transition-colors"
                >
                  <span className="font-sans text-[11px] font-medium tabular-nums tracking-widest text-white/30 pt-0.5">
                    {row.tag}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-sans text-[0.95rem] md:text-base font-medium tracking-[-0.015em] text-white/90">
                      {row.title}
                    </p>
                    <p className="font-sans text-xs md:text-[0.8rem] text-white/42 mt-1 leading-snug">
                      {row.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 md:mt-12 flex justify-start md:justify-end">
            <Link
              href="/lodge"
              className="font-sans text-sm text-white/45 hover:text-white transition-colors inline-flex items-center gap-1 group"
            >
              Full lodge breakdown
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform opacity-60" />
            </Link>
          </div>
        </div>
      </section>

      {/* Manifesto - iron / copper editorial */}
      <section className="relative isolate overflow-hidden border-y border-white/[0.07] bg-black py-24 md:py-36 lg:py-44">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.55]"
          aria-hidden
        >
          <div className="absolute -top-40 left-1/2 h-[min(100vw,520px)] w-[min(100vw,520px)] -translate-x-1/2 rounded-full bg-burnished-copper/25 blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] h-[min(80vw,420px)] w-[min(80vw,420px)] rounded-full bg-bushveld-soil/30 blur-[100px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(184,115,51,0.12),transparent_55%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
          <p className="font-sans text-[11px] font-medium tracking-[0.32em] uppercase text-white/36 mb-10 md:mb-14">
            The Waterberg · not a brochure trip
          </p>

          <div className="grid gap-14 lg:gap-16 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <h2 className="font-sans text-[clamp(2.6rem,7.5vw,5.25rem)] font-semibold tracking-[-0.045em] leading-[0.96]">
                <span className="block text-white">Raw.</span>
                <span className="block text-white/88">Real.</span>
                <span className="block bg-gradient-to-r from-sunset-gold via-burnished-copper to-dried-grass bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(184,115,51,0.25)]">
                  Relentless.
                </span>
              </h2>
              <div
                className="mt-8 md:mt-10 h-px max-w-[10rem] bg-gradient-to-r from-burnished-copper/90 via-white/25 to-transparent"
                aria-hidden
              />
            </div>

            <div className="lg:col-span-7 space-y-8 md:space-y-10">
              <p className="font-sans text-lg md:text-xl lg:text-[1.35rem] leading-[1.55] text-white/52 font-normal first-line:font-medium first-line:text-white/78">
                We reject the staged safari circuit. Vaalpenskraal is a return to the bushveld as it is: oxidized iron under your boots, burnished copper light on the ridgeline, and terrain that does not perform for a camera.
              </p>
              <p className="relative font-sans text-base md:text-lg leading-relaxed text-white/44 pl-6 md:pl-7">
                <span
                  className="absolute left-0 top-1 bottom-1 w-px rounded-full bg-gradient-to-b from-burnished-copper/85 via-white/20 to-transparent"
                  aria-hidden
                />
                For those who still believe in respect: the stalk, the fire, the silence after. The kind of bond with the land that outlasts the flight home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Quarry - editorial zigzag + index */}
      <section className="relative border-t border-white/[0.07] bg-[#050505] text-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12 pt-20 md:pt-28 pb-16 md:pb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-16">
            <div className="max-w-2xl">
              <p className="font-sans text-[11px] font-medium tracking-[0.32em] uppercase text-white/36 mb-5">
                Species
              </p>
              <h2 className="font-sans text-[2.5rem] sm:text-4xl md:text-[2.75rem] font-light tracking-[-0.03em] leading-[1.08]">
                The{" "}
                <span className="font-semibold text-white">quarry</span>
                <span className="text-white/25">.</span>
              </h2>
              <p className="font-sans mt-6 text-base md:text-lg leading-relaxed text-white/48 max-w-xl">
                Legendary Waterberg game: each animal its own exam. Reading wind, closing distance, and earning the shot.
              </p>
            </div>
            <Link
              href="/species"
              className="inline-flex shrink-0 items-center justify-center gap-2 self-start lg:self-auto rounded-full bg-white px-7 py-3.5 font-sans text-sm font-medium text-black transition-colors hover:bg-white/90"
            >
              All 14+ species
              <ChevronRight className="h-4 w-4 opacity-60" />
            </Link>
          </div>
        </div>

        <div className="border-t border-white/[0.07]">
          {[
            {
              code: "01",
              nickname: "The Black Death",
              name: "Cape Buffalo",
              img: "buffalo",
              href: "/species/cape-buffalo",
              blurb: "Thick bush. Zero margin. The Waterberg’s most serious conversation.",
            },
            {
              code: "02",
              nickname: "The Grey Ghost",
              name: "Greater Kudu",
              img: "kudu",
              href: "/species/greater-kudu",
              blurb: "Height, patience, and a silhouette that vanishes between thorns.",
            },
            {
              code: "03",
              nickname: "The Desert Lord",
              name: "Livingstone Eland",
              img: "eland",
              href: "/species/livingstone-eland",
              blurb: "Mass at distance. Power that looks calm until it isn't.",
            },
          ].map((row, i) => (
            <Link
              key={row.code}
              href={row.href}
              className="group grid grid-cols-1 border-b border-white/[0.07] transition-colors hover:bg-white/[0.02] md:grid-cols-2"
            >
              <div
                className={`relative min-h-[260px] sm:min-h-[320px] md:min-h-[min(52vh,480px)] overflow-hidden bg-neutral-950 ring-1 ring-inset ring-white/[0.06] ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                  style={{
                    backgroundImage: `url('https://picsum.photos/seed/${row.img}/1400/1100')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/15 to-transparent md:from-black/50" />
                <span className="absolute left-5 top-5 font-sans text-[11px] font-medium tabular-nums tracking-[0.25em] text-white/35">
                  {row.code} / 03
                </span>
              </div>

              <div
                className={`flex flex-col justify-center px-6 py-12 sm:px-10 md:px-14 md:py-16 lg:px-16 ${
                  i % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <p className="font-sans text-[11px] font-medium tracking-[0.28em] uppercase text-burnished-copper/85">
                  {row.nickname}
                </p>
                <h3 className="font-sans mt-4 text-3xl sm:text-4xl md:text-[2.35rem] font-semibold tracking-[-0.035em] text-white/95">
                  {row.name}
                </h3>
                <p className="font-sans mt-5 max-w-md text-sm md:text-base leading-relaxed text-white/45">
                  {row.blurb}
                </p>
                <span className="mt-8 inline-flex items-center gap-1.5 font-sans text-sm font-medium text-white/55 transition-colors group-hover:text-white">
                  Explore
                  <ChevronRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Legacy - editorial testimonials (EN + AF, local & international) */}
      <section
        className="relative isolate overflow-hidden border-t border-white/[0.07] bg-black py-24 md:py-36 lg:py-40"
        aria-labelledby="legacy-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
        >
          <div className="absolute left-[-20%] top-1/2 h-[min(90vw,560px)] w-[min(90vw,560px)] -translate-y-1/2 rounded-full bg-burnished-copper/20 blur-[110px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between md:mb-16">
            <div>
              <p
                id="legacy-heading"
                className="font-sans text-[11px] font-medium tracking-[0.32em] uppercase text-white/36"
              >
                In their words
              </p>
              <p className="font-sans mt-3 text-sm text-white/40">
                Hunters from the Waterberg, across South Africa, and abroad.
              </p>
            </div>
            <div className="flex gap-2 self-start sm:self-auto">
              <button
                type="button"
                onClick={() =>
                  setActiveTestimonial(
                    (activeTestimonial - 1 + TESTIMONIALS.length) %
                      TESTIMONIALS.length
                  )
                }
                className="rounded-full border border-white/15 bg-white/5 p-2.5 text-white/70 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveTestimonial(
                    (activeTestimonial + 1) % TESTIMONIALS.length
                  )
                }
                className="rounded-full border border-white/15 bg-white/5 p-2.5 text-white/70 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="grid gap-14 lg:grid-cols-12 lg:gap-12 lg:items-stretch">
            <div className="relative lg:col-span-7">
              <span
                className="pointer-events-none absolute -left-1 -top-6 sm:-top-10 font-serif text-[clamp(4.5rem,14vw,9rem)] leading-none text-white/[0.06]"
                aria-hidden
              >
                &ldquo;
              </span>
              <blockquote className="relative" lang={activeT.locale}>
                <p className="font-serif text-[1.35rem] sm:text-2xl md:text-[1.65rem] lg:text-[1.75rem] leading-[1.45] text-white/78 font-normal text-balance">
                  {testimonialQuoteBody(activeT.quote, activeT.emphasis)}
                </p>
              </blockquote>
            </div>

            <aside className="flex flex-row items-center gap-5 border-t border-white/[0.08] pt-10 lg:col-span-5 lg:flex-col lg:items-start lg:border-t-0 lg:border-l lg:border-white/[0.08] lg:pt-0 lg:pl-12 lg:justify-center">
              <div
                className="h-14 w-14 shrink-0 rounded-full bg-neutral-800 bg-cover bg-center ring-2 ring-white/10 sm:h-16 sm:w-16"
                style={{
                  backgroundImage: `url('https://picsum.photos/seed/${activeT.imgSeed}/200/200')`,
                }}
                role="presentation"
              />
              <div className="min-w-0 flex-1 text-left">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-sans text-lg font-medium tracking-[-0.02em] text-white/92">
                    {activeT.name}
                  </p>
                  {activeT.locale === "af" && (
                    <span className="rounded-full border border-white/15 bg-white/[0.04] px-2 py-0.5 font-sans text-[10px] font-medium uppercase tracking-wider text-white/50">
                      Afrikaans
                    </span>
                  )}
                  {activeT.local && (
                    <span className="rounded-full border border-burnished-copper/25 bg-burnished-copper/10 px-2 py-0.5 font-sans text-[10px] font-medium uppercase tracking-wider text-burnished-copper/90">
                      Local
                    </span>
                  )}
                </div>
                <p className="font-sans mt-1 text-sm text-white/42">
                  {activeT.location}
                </p>
              </div>
            </aside>
          </div>

          <div
            className="mt-14 flex gap-2 overflow-x-auto pb-2 md:mt-16 md:flex-wrap md:overflow-visible md:pb-0 [-webkit-overflow-scrolling:touch]"
            role="tablist"
            aria-label="Choose a testimonial"
          >
            {TESTIMONIALS.map((item, i) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={i === activeTestimonial}
                onClick={() => setActiveTestimonial(i)}
                className={`shrink-0 rounded-full border px-4 py-2.5 text-left transition-colors md:min-w-0 ${
                  i === activeTestimonial
                    ? "border-white/30 bg-white/10 text-white"
                    : "border-white/10 bg-transparent text-white/45 hover:border-white/20 hover:bg-white/[0.04] hover:text-white/70"
                }`}
              >
                <span className="block font-sans text-xs font-medium tracking-[-0.01em] text-white/90">
                  {item.name}
                </span>
                <span className="mt-0.5 block font-sans text-[10px] uppercase tracking-wider text-white/35">
                  {item.location}
                  {item.locale === "af" ? " · AF" : ""}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Begin Your Journey CTA */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://picsum.photos/seed/huntingcamp/1920/1080')" }}
        />
        <div className="absolute inset-0 z-10 bg-black/80 backdrop-blur-sm" />
        
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-sans text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-6 md:mb-8 uppercase leading-none">The bush<br/>is calling.</h2>
          <p className="font-sans text-lg sm:text-xl md:text-2xl text-white/70 mb-10 md:mb-16 max-w-2xl mx-auto font-medium tracking-tight">
            Secure your place in the legacy of the Waterberg.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link href="/reserve" className="group relative flex items-center justify-center bg-white text-black font-sans font-bold text-sm uppercase tracking-widest px-12 sm:px-16 py-5 sm:py-6 rounded-full overflow-hidden transition-transform hover:scale-105 w-full sm:w-auto">
              <span className="relative z-10">Book Your Hunt</span>
              <div className="absolute inset-0 bg-neutral-200 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
