import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div>
            <h4 className="font-sans font-bold text-xl text-white mb-6 uppercase tracking-tight">Explore</h4>
            <ul className="space-y-3 font-sans text-sm text-white/60 font-medium">
              <li><Link href="/experience" className="hover:text-white transition-colors">The Experience</Link></li>
              <li><Link href="/reserve" className="hover:text-white transition-colors">Book Your Hunt</Link></li>
              <li><Link href="/species" className="hover:text-white transition-colors">Quarry Species</Link></li>
              <li><Link href="/lodge" className="hover:text-white transition-colors">The Lodge</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans font-bold text-xl text-white mb-6 uppercase tracking-tight">Certifications</h4>
            <ul className="space-y-3 font-sans text-sm text-white/60 font-medium">
              <li>Professional Hunters' Association</li>
              <li>Wildlife Ranching SA (WRSA)</li>
              <li>Waterberg Biosphere Reserve</li>
              <li>Fair Chase Certified</li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans font-bold text-xl text-white mb-6 uppercase tracking-tight">Legal</h4>
            <ul className="space-y-3 font-sans text-sm text-white/60 font-medium">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans font-bold text-xl text-white mb-6 uppercase tracking-tight">Location</h4>
            <ul className="space-y-3 font-sans text-sm text-white/60 font-medium">
              <li>Waterberg Biosphere</li>
              <li>Thabazimbi, Limpopo</li>
              <li>South Africa</li>
              <li className="pt-2"><a href="mailto:info@vaalpenskraal.com" className="hover:text-white transition-colors">info@vaalpenskraal.com</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans font-bold text-xl text-white mb-6 uppercase tracking-tight">Advisory</h4>
            <p className="font-sans text-sm text-white/60 leading-relaxed font-medium">
              Please consult with your local authorities regarding the import of your trophies. We handle all export documentation.
            </p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-white/40 uppercase tracking-widest font-bold">
            &copy; {new Date().getFullYear()} Vaalpenskraal Game Reserve. All rights reserved.
          </p>
          <div className="font-sans font-black text-xl text-white/20 uppercase tracking-tighter">Iron Mountain</div>
        </div>
      </div>
    </footer>
  );
}
