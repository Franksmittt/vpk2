import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import ContactIntentForm from "./ContactIntentForm";

export const metadata: Metadata = {
  title: "Contact | Vaalpenskraal Game Reserve",
  description:
    "Contact Vaalpenskraal in the Waterberg, Limpopo. Hunt and lodge enquiries land by email. Children on camp and minors need prior agreement with management.",
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        heroTitleId="contact-hero-title"
        eyebrow="Contact"
        title="Let's talk before you land in the bush"
        compact
        subtitle="One conversation can save a week of wrong assumptions. Dates, species, lodge space, children on camp, rifle plans. Send the honest version. We reply with the same."
        imageSeed="contacthero"
      />

      <section className="border-b border-white/[0.07] py-16 md:py-24">
        <div className="editorial-container grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="space-y-10 lg:col-span-2">
            <div>
              <h2 className="font-sans text-lg font-semibold text-white/90">Direct lines</h2>
              <ul className="mt-6 space-y-5 font-sans text-sm text-white/70">
                <li className="flex gap-3">
                  <Mail className="mt-1 h-4 w-4 shrink-0 text-burnished-copper/80" aria-hidden />
                  <a href="mailto:info@vaalpenskraal.com" className="text-white/70 transition-colors hover:text-white">
                    info@vaalpenskraal.com
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-1 h-4 w-4 shrink-0 text-burnished-copper/80" aria-hidden />
                  <span>
                    A direct camp line can be shared after we have opened your enquiry by email, so your dates and party
                    size are on record.
                  </span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-burnished-copper/80" aria-hidden />
                  <span>
                    Waterberg Biosphere · Thabazimbi area, Limpopo, South Africa
                    <br />
                    <span className="text-white/65">Exact gate directions sent when your booking is confirmed.</span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
              <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-white/55">Response time</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-white/70">
                Hunting seasons and weekends fill fast. We aim to answer serious enquiries within one to two business days. If you are travelling internationally, mention your time zone so we can suggest a call window.
              </p>
            </div>
            <Link
              href="/reserve"
              className="focus-ring-invert inline-flex items-center gap-2 font-sans text-sm text-white/70 transition-colors hover:text-white"
            >
              Read how booking works
              <ChevronRight className="h-4 w-4 opacity-60" aria-hidden />
            </Link>
          </div>
          <div className="lg:col-span-3">
            <Suspense fallback={<ContactForm defaultTopic="hunt" />}>
              <ContactIntentForm />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="bg-[#050505] py-14 md:py-20">
        <div className="editorial-container">
          <h2 className="font-sans text-lg font-semibold text-white/85">Before you arrive</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div>
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/70">Johannesburg</p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-white/70">
                Most international and domestic guests route through O.R. Tambo. From there it is a road transfer north into the Waterberg. Plan hire cars, shuttle, or pickup with your own arrangements or what we confirm at booking (we do not handle import or export paperwork).
              </p>
            </div>
            <div>
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/70">Licences &amp; trophies</p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-white/70">
                Vaalpenskraal does not complete firearm, permit, or trophy export paperwork for clients. You arrange temporary import, export, and your home-country import with your own dip and pack agent, lawyer, or authorities. Ask them early so nothing waits on the estate office.
              </p>
            </div>
            <div>
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/70">Expectations</p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-white/70">
                Heat, thorns, and silence are real. So is the reward. If someone in your party has mobility limits or dietary needs, say so in the form. The lodge can adapt when we know in advance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
