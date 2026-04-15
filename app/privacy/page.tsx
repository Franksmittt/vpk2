import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Vaalpenskraal Game Reserve",
  description: "How Vaalpenskraal Game Reserve handles personal information submitted through this website.",
};

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-black px-5 pb-24 pt-28 text-white sm:px-8 md:px-12 md:pt-32">
      <article className="mx-auto max-w-3xl">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-white/70">Legal</p>
        <h1 className="mt-3 font-sans text-3xl font-semibold tracking-tight sm:text-4xl">Privacy policy</h1>
        <p className="mt-4 font-sans text-sm text-white/70">Last updated: April 2026</p>

        <div className="mt-12 space-y-10 font-sans text-sm leading-relaxed text-white/70">
          <section>
            <h2 className="text-base font-semibold text-white/85">1. Who we are</h2>
            <p className="mt-3">
              This website is operated by Vaalpenskraal Game Reserve (“we”, “us”) in the Waterberg region of Limpopo, South Africa. Contact:{" "}
              <a href="mailto:info@vaalpenskraal.com" className="text-burnished-copper/90 underline-offset-2 hover:underline">
                info@vaalpenskraal.com
              </a>
              .
            </p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-white/85">2. What we collect</h2>
            <p className="mt-3">
              If you email us or use a form that opens your mail client, we receive whatever you choose to send: typically name, email address, phone number, travel dates, and details about your hunt or stay. We do not run credit-card checkout on this marketing site unless a separate booking system is linked later.
            </p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-white/85">3. How we use information</h2>
            <p className="mt-3">
              We use enquiries to respond to you, plan safaris and accommodation, and improve how we communicate. We do not sell your personal information to data brokers.
            </p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-white/85">4. Storage and security</h2>
            <p className="mt-3">
              Email and office systems may store your message on secure servers or devices operated by us or our email provider. No online transmission is perfectly secure, so avoid sending passport or payment details by email unless we explicitly request them through a secure process.
            </p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-white/85">5. Cookies and analytics</h2>
            <p className="mt-3">
              This site may use essential cookies to function. If we add analytics or marketing pixels later, we will update this policy and, where required, ask for consent. See also our{" "}
              <Link href="/cookies" className="text-burnished-copper/90 underline-offset-2 hover:underline">
                cookie policy
              </Link>
              .
            </p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-white/85">6. Your rights</h2>
            <p className="mt-3">
              Depending on applicable law (including POPIA in South Africa), you may request access, correction, or deletion of personal data we hold. Email us at the address above with your request.
            </p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-white/85">7. Changes</h2>
            <p className="mt-3">We may update this policy from time to time. The “Last updated” date at the top will change when we do.</p>
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

export default PrivacyPage;
