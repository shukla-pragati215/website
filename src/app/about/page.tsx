"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-amber-500/30 selection:text-amber-200">
      <Navbar />

      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-sm mb-6 block">
            Our Story //
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
            The <span className="text-gradient">Collective</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Enlightened Magic is a high-end creative agency and tech collective 
            dedicated to bridging the gap between artistic storytelling and the 
            technical infrastructure required for modern scaling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold tracking-tight">Our Philosophy</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We believe that in the digital age, beauty without performance is 
              irrelevant, and performance without beauty is forgettable. Our 
              &quot;Enlightened&quot; approach ensures that every pixel and every line of 
              code serves a strategic purpose.
            </p>
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-xl">
              <h3 className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4">The Promise //</h3>
              <p className="text-gray-300">
                We turn brands into growth machines through cinematic visuals and 
                intelligent automation.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4">Innovation First</h3>
              <p className="text-gray-400">
                We leverage the latest in AI, Next.js, and high-end video production 
                to keep our clients ahead of the curve.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">Human-Centric</h3>
              <p className="text-gray-400">
                Despite our technical prowess, we focus on human emotions and 
                connection. Technology is just the vehicle for the story.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-20 border-t border-white/5 flex flex-col items-center gap-6">
        <img src="/logo.avif" alt="Enlightened Magic Logo" className="w-10 h-10 object-contain" />
        <p className="text-gray-600 text-sm tracking-widest uppercase">
          Enlightened Magic // 2026 Studio Story
        </p>
      </footer>
    </main>
  );
};

export default AboutPage;
