"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-40 px-6 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
        >
          <div>
            <span className="text-cyan-500 font-bold uppercase tracking-[0.5em] text-sm mb-6 block">
              The Story //
            </span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8">
              Artistry & <span className="text-gradient">Intelligence</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed font-light mb-10">
              Enlightened Magic is a high-end creative agency and tech collective 
              dedicated to bridging the gap between artistic storytelling and the 
              technical infrastructure required for modern scaling.
            </p>
            <div className="flex gap-12">
              <div>
                <h4 className="text-white font-bold text-3xl mb-2">99%</h4>
                <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Performance</p>
              </div>
              <div>
                <h4 className="text-white font-bold text-3xl mb-2">24/7</h4>
                <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Automation</p>
              </div>
              <div>
                <h4 className="text-white font-bold text-3xl mb-2">8K</h4>
                <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Visuals</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/5 bg-white/[0.02] backdrop-blur-3xl p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">Our Philosophy</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                "We believe that beauty without performance is irrelevant, and 
                performance without beauty is forgettable. We turn brands into 
                growth machines through cinematic visuals and intelligent automation."
              </p>
              <div className="h-px w-full bg-gradient-to-r from-cyan-500/50 to-transparent mb-8" />
              <p className="text-cyan-500 font-bold uppercase tracking-widest text-xs">
                — Enlightened Magic Collective
              </p>
            </div>
            
            {/* Decorative Orbs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
