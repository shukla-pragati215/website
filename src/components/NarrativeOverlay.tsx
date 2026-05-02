"use client";

import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useScrollProgress } from "./StickyCanvas";

const NarrativeOverlay: React.FC = () => {
  const contextProgress = useScrollProgress();
  const { scrollYProgress: windowProgress } = useScroll();
  
  // Use context progress if available, otherwise fallback to window
  const scrollProgress = contextProgress || windowProgress;

  // Phase 1: 0-15% - Hero
  const opacity1 = useTransform(scrollProgress, [0, 0.05, 0.1, 0.15], [0, 1, 1, 0]);
  const scale1 = useTransform(scrollProgress, [0, 0.15], [0.9, 1.1]);

  // Phase 2: 15-45% - The Reveal
  const opacity2 = useTransform(scrollProgress, [0.15, 0.2, 0.4, 0.45], [0, 1, 1, 0]);
  const blur2 = useTransform(scrollProgress, [0.15, 0.2, 0.4, 0.45], [10, 0, 0, 10]);

  // Phase 3: 45-80% - The Ecosystem
  const opacity3 = useTransform(scrollProgress, [0.45, 0.5, 0.75, 0.8], [0, 1, 1, 0]);

  // Phase 4: 80-95% - The Foundation
  const opacity4 = useTransform(scrollProgress, [0.8, 0.85, 0.93, 0.95], [0, 1, 1, 0]);

  // Phase 5: 95-100% - The Reassembly / CTA
  const opacity5 = useTransform(scrollProgress, [0.95, 0.98, 1], [0, 1, 1]);
  const scale5 = useTransform(scrollProgress, [0.95, 1], [0.8, 1]);

  return (
    <div className="pointer-events-none fixed inset-0 z-20 flex items-center justify-center px-6">
      {/* Phase 1: HERO */}
      <motion.div
        style={{ opacity: opacity1, scale: scale1 }}
        className="flex flex-col items-center text-center max-w-4xl"
      >
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]">
          Enlightened <span className="text-amber-400">Magic.</span>
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-400 font-light tracking-[0.2em] uppercase">
          Transforming brands into growth machines.
        </p>
      </motion.div>

      {/* Phase 2: SERVICES */}
      <motion.div
        id="services"
        style={{ opacity: opacity2, filter: `blur(${blur2}px)` }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <span className="text-amber-500 font-bold uppercase tracking-[0.5em] text-sm mb-8">
          Our Services //
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-12">
          Elite Manifestations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 max-w-5xl">
          {[
            "Social Media Marketing",
            "Performance Marketing",
            "Videography",
            "Website Development",
            "AI Automation"
          ].map((service, i) => (
            <motion.div 
              key={service}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 group"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
              <span className="text-xl md:text-2xl text-gray-400 group-hover:text-white transition-colors duration-500 font-light tracking-tight">
                {service}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Phase 3: ABOUT */}
      <motion.div
        id="about"
        style={{ opacity: opacity3 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <span className="text-amber-500 font-bold uppercase tracking-[0.5em] text-sm mb-8">
          The Mission //
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 max-w-4xl">
          Bridging Artistry <br />&amp; <span className="text-gradient">Intelligence</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed font-light">
          We are a luxury tech collective dedicated to turning brands into growth machines. 
          By blending cinematic storytelling with performance-first architecture, we craft 
          beautiful work that doesn&apos;t just look good—it performs.
        </p>
      </motion.div>

      {/* Phase 4: THE FOUNDATION (Privacy & Trust) */}
      <motion.div
        style={{ opacity: opacity4 }}
        className="flex flex-col items-center text-center max-w-2xl"
      >
        <span className="text-amber-500/60 font-bold uppercase tracking-widest text-xs mb-8">
          The Foundation //
        </span>
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Privacy &amp; Trust
        </h3>
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
          Your data is your legacy. We protect it with enterprise-grade security 
          and transparent policies.
        </p>
      </motion.div>

      {/* Phase 5: THE REASSEMBLY */}
      <motion.div
        style={{ opacity: opacity5, scale: scale5 }}
        className="flex flex-col items-center text-center max-w-3xl"
      >
        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
          The Monolith.
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 mb-4 font-medium">
          Hear everything. Feel nothing else. <br />
          <span className="text-white">Let&apos;s build your machine.</span>
        </p>
        <div className="flex flex-col gap-2 mb-10 text-amber-400 font-bold tracking-tight text-lg">
          <a href="mailto:support@enlightenedmagic.com" className="hover:text-white transition-colors">support@enlightenedmagic.com</a>
          <a href="tel:+919769216919" className="hover:text-white transition-colors">+91 97692 16919</a>
        </div>
        
        <a 
          href="https://www.enlightenedmagic.com/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto group relative px-12 py-6 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 inline-block"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-700 animate-pulse" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          <span className="relative text-white font-bold text-xl tracking-wider uppercase">
            Start Your Transformation
          </span>
          <div className="absolute -inset-1 bg-amber-400 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity" />
        </a>
      </motion.div>
    </div>
  );
};

export default NarrativeOverlay;
