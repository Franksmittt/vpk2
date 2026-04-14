import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pb-10 pt-16 md:pt-20">
      <div className="editorial-container">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:mb-16 lg:grid-cols-5 lg:gap-12">
          <div>
            <h4 className="font-sans font-bold text-xl text-white mb-6 uppercase tracking-tight">Explore</h4>
            <ul className="space-y-3 font-sans text-sm text-white/60 font-medium">
              <li><Link href="/experience" className="focus-ring rounded-sm transition-colors hover:text-white">The Experience</Link></li>
              <li><Link href="/reserve" className="focus-ring rounded-sm transition-colors hover:text-white">Book Your Hunt</Link></li>
              <li><Link href="/species" className="focus-ring rounded-sm transition-colors hover:text-white">Quarry Species</Link></li>
              <li><Link href="/lodge" className="focus-ring rounded-sm transition-colors hover:text-white">The Lodge</Link></li>
              <li><Link href="/contact?intent=general" className="focus-ring rounded-sm transition-colors hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans font-bold text-xl text-white mb-6 uppercase tracking-tight">Certifications</h4>
            <ul className="space-y-3 font-sans text-sm text-white/60 font-medium">
              <li>P3 Exemption Permit (confirm current documentation with the estate)</li>
              <li>Professional Hunters' Association</li>
              <li>Wildlife Ranching SA (WRSA)</li>
              <li>Waterberg Biosphere Reserve</li>
              <li>Fair Chase Certified</li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans font-bold text-xl text-white mb-6 uppercase tracking-tight">Legal</h4>
            <ul className="space-y-3 font-sans text-sm text-white/60 font-medium">
              <li><Link href="/privacy" className="focus-ring rounded-sm transition-colors hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="focus-ring rounded-sm transition-colors hover:text-white">Terms of Service</Link></li>
              <li><Link href="/cookies" className="focus-ring rounded-sm transition-colors hover:text-white">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans font-bold text-xl text-white mb-6 uppercase tracking-tight">Location</h4>
            <ul className="space-y-3 font-sans text-sm text-white/60 font-medium">
              <li>Waterberg Biosphere</li>
              <li>Thabazimbi, Limpopo</li>
              <li>South Africa</li>
              <li className="pt-2"><a href="mailto:info@vaalpenskraal.com" className="focus-ring rounded-sm transition-colors hover:text-white">info@vaalpenskraal.com</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans font-bold text-xl text-white mb-6 uppercase tracking-tight">Advisory</h4>
            <p className="font-sans text-sm text-white/60 leading-relaxed font-medium">
              Firearm temporary import, trophy export, and home-country import rules are your responsibility with your own authorities and agents. Vaalpenskraal does not process client paperwork on your behalf.
            </p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-white/65 uppercase tracking-widest font-bold">
            &copy; {new Date().getFullYear()} Vaalpenskraal Game Reserve. All rights reserved.
          </p>
          <div className="font-sans font-black text-xl text-white/20 uppercase tracking-tighter">Iron Mountain</div>
        </div>
      </div>
    </footer>
  );
}
