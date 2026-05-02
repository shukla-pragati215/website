import Navbar from "@/components/Navbar";
import StickyCanvas from "@/components/StickyCanvas";
import NarrativeOverlay from "@/components/NarrativeOverlay";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="relative bg-[#0A0A0A] selection:bg-amber-500/30 selection:text-amber-200">
      <Navbar />
      
      {/* The Scrollytelling Experience */}
      <section className="relative">
        <StickyCanvas frameCount={240}>
          <NarrativeOverlay />
        </StickyCanvas>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Services Section */}
      <ServicesSection />

      <div className="section-divider" />

      {/* About Section */}
      <AboutSection />

      <div className="section-divider" />

      {/* The Ecosystem (Portfolio Section) */}
      <PortfolioSection />

      <div className="section-divider" />

      {/* Contact Section */}
      <ContactSection />

      {/* Premium Footer */}
      <footer className="relative bg-[#070707] pt-16 pb-10 px-6 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-500/[0.02] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Top row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                {/* Camera Lens Logo */}
                <img src="/logo.avif" alt="Enlightened Magic Logo" className="w-10 h-10 object-contain" />
                <span className="text-lg font-bold tracking-tight text-white">
                  Enlightened <span className="text-amber-400">Magic</span>
                </span>
              </div>
              <p className="text-gray-600 text-sm max-w-xs leading-relaxed mb-8">
                Architecting high-performance digital manifestations through the nexus of 
                creative intelligence and data-driven strategy.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:border-amber-500/40 hover:text-amber-400 transition-all"
              >
                Start a Project
                <span className="text-amber-500">→</span>
              </a>
            </div>

            <div className="md:col-span-2 md:col-start-7">
              <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600 mb-6">
                Navigate
              </h5>
              <ul className="space-y-3">
                {["Services", "Portfolio", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <a href={`/${item.toLowerCase()}`} className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600 mb-6">
                Contact
              </h5>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:support@enlightenedmagic.com" className="text-gray-500 hover:text-amber-400 text-sm transition-colors duration-300">
                    Email Us
                  </a>
                </li>
                <li>
                  <a href="tel:+919769216919" className="text-gray-500 hover:text-amber-400 text-sm transition-colors duration-300">
                    Call Us
                  </a>
                </li>
                <li>
                  <span className="text-gray-500 text-sm">Mumbai, India</span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600 mb-6">
                Connect
              </h5>
              <ul className="space-y-3">
                {[
                  { label: "Twitter / X", url: "https://x.com" },
                  { label: "Instagram", url: "https://instagram.com" },
                  { label: "LinkedIn", url: "https://linkedin.com" },
                ].map((social) => (
                  <li key={social.label}>
                    <a href={social.url} className="text-gray-500 hover:text-amber-400 text-sm transition-colors duration-300">
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[9px] text-white/15 uppercase tracking-[0.3em]">
              © 2026 Enlightened Magic // All Rights Reserved
            </p>
            <div className="flex items-center gap-6">
              <span className="text-[9px] text-white/15 uppercase tracking-[0.3em]">
                Designed in Mumbai
              </span>
              <div className="w-1 h-1 rounded-full bg-amber-500/20" />
              <span className="text-[9px] text-white/15 uppercase tracking-[0.3em]">
                Powered by EM Engine
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
