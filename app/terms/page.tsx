import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Vaalpenskraal Game Reserve",
  description: "Terms governing use of the Vaalpenskraal Game Reserve website and general booking conditions overview.",
};

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-black px-5 pb-24 pt-28 text-white sm:px-8 md:px-12 md:pt-32">
      <article className="mx-auto max-w-3xl">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-white/70">Legal</p>
        <h1 className="mt-3 font-sans text-3xl font-semibold tracking-tight sm:text-4xl">Terms of service</h1>
        <p className="mt-4 font-sans text-sm text-white/70">Last updated: April 2026</p>

        <div className="mt-12 space-y-10 font-sans text-sm leading-relaxed text-white/70">
          <section>
            <h2 className="text-base font-semibold text-white/85">1. Website use</h2>
            <p className="mt-3">
              This site provides information about Vaalpenskraal Game Reserve. Content is for general guidance. Availability, species, packages, and prices are confirmed only in direct correspondence or a signed agreement, not by static web copy alone.
            </p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-white/85">2. No guarantee of harvest</h2>
            <p className="mt-3">
              Ethical hunting cannot promise a particular animal, shot opportunity, or outcome. Weather, animal behaviour, hunter skill, and safety considerations all play a role. Deposits and cancellation terms for your specific booking will be provided in your proposal or contract.
            </p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-white/85">3. Safety and conduct</h2>
            <p className="mt-3">
              Guests must follow instructions from professional hunters and staff. Firearms handling, alcohol around hunting activities, and behaviour toward wildlife and other guests must meet estate rules and South African law.
            </p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-white/85">4. Liability</h2>
            <p className="mt-3">
              Participation in hunting and outdoor activities involves inherent risk. To the extent permitted by law, liability is limited as set out in your booking documents. Nothing on this website limits liability for fraud or death or personal injury caused by negligence where such limitation is unlawful.
            </p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-white/85">5. Intellectual property</h2>
            <p className="mt-3">
              Text, layout, logos, and photography supplied by Vaalpenskraal may not be copied for commercial use without permission. Where representative stock imagery is used, it is labelled in alt text and may be swapped for on-estate photography over time.
            </p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-white/85">6. Law</h2>
            <p className="mt-3">These terms are governed by the laws of South Africa. Disputes are subject to the jurisdiction of South African courts unless your contract states otherwise.</p>
          </section>
        </div>

        <p className="mt-14 font-sans text-sm text-white/70">
          <Link href="/" className="text-white/70 hover:text-white">
            ← Back to home
          </Link>
        </p>
      </article>
    </div>
  );
};

export default TermsPage;
