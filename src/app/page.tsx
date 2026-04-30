import Navbar from "@/components/Navbar";
import StickyCanvas from "@/components/StickyCanvas";
import NarrativeOverlay from "@/components/NarrativeOverlay";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="relative bg-[#050505] selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      
      {/* The Scrollytelling Experience */}
      <section className="relative">
        <StickyCanvas frameCount={240}>
          <NarrativeOverlay />
        </StickyCanvas>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* About Section */}
      <AboutSection />

      {/* The Ecosystem (Portfolio Section) */}
      <PortfolioSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Phase 4: The Foundation (Privacy & Trust) - Minimalist Footer */}
      <footer className="relative bg-[#050505] pt-40 pb-20 px-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg mb-8" />
            <h4 className="text-white font-bold tracking-tighter text-2xl mb-4">
              Enlightened Magic.
            </h4>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Architecting high-performance digital manifestations through the nexus of 
              creative intelligence and data-driven strategy.
            </p>
          </div>

          <div>
            <h5 className="text-white font-bold text-xs uppercase tracking-widest mb-6">
              Contact //
            </h5>
            <ul className="space-y-4">
              <li>
                <a href="mailto:support@enlightenedmagic.com" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
                  support@enlightenedmagic.com
                </a>
              </li>
              <li>
                <a href="tel:+919769216919" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
                  +91 97692 16919
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
                  Mumbai, India
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold text-xs uppercase tracking-widest mb-6">
              Connect //
            </h5>
            <ul className="space-y-4">
              <li>
                <a href="https://x.com" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.3em]">
            © 2026 Enlightened Magic // All Rights Reserved
          </p>
          <div className="flex items-center gap-8">
            <span className="text-[10px] text-white/20 uppercase tracking-[0.3em]">
              Designed in Mumbai
            </span>
            <span className="text-[10px] text-white/20 uppercase tracking-[0.3em]">
              Powered by EM Engine
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}

