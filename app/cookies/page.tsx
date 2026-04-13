import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | Vaalpenskraal Game Reserve",
  description: "How Vaalpenskraal Game Reserve uses cookies and similar technologies on this website.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-black px-5 pb-24 pt-28 text-white sm:px-8 md:px-12 md:pt-32">
      <article className="mx-auto max-w-3xl">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-white/35">Legal</p>
        <h1 className="mt-3 font-sans text-3xl font-semibold tracking-tight sm:text-4xl">Cookie policy</h1>
        <p className="mt-4 font-sans text-sm text-white/40">Last updated: April 2026</p>

        <div className="mt-12 space-y-10 font-sans text-sm leading-relaxed text-white/50">
          <section>
            <h2 className="text-base font-semibold text-white/85">What cookies are</h2>
            <p className="mt-3">
              Cookies are small text files stored on your device when you visit a website. They can remember preferences, keep you signed in, or help measure traffic.
            </p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-white/85">How we use them</h2>
            <p className="mt-3">
              This site is designed to work with minimal tracking. Essential cookies may be required for security or basic functionality (for example, load balancing or consent storage). If we add analytics or advertising pixels, we will list them here and provide choices where the law requires.
            </p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-white/85">Third-party content</h2>
            <p className="mt-3">
              Embedded maps, videos, or fonts from third parties may set their own cookies. We do not control those; check the third party’s policy if you need detail.
            </p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-white/85">Managing cookies</h2>
            <p className="mt-3">
              You can delete or block cookies in your browser settings. Blocking all cookies may break some features. For more on how we use personal data, see our{" "}
              <Link href="/privacy" className="text-burnished-copper/90 underline-offset-2 hover:underline">
                privacy policy
              </Link>
              .
            </p>
          </section>
        </div>

        <p className="mt-14 font-sans text-sm text-white/35">
          <Link href="/" className="text-white/55 hover:text-white">
            ← Back to home
          </Link>
        </p>
      </article>
    </div>
  );
}
