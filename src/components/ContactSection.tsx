"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Globe, Users, MessageSquare } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-40 px-6 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center"
        >
          <span className="text-cyan-500 font-bold uppercase tracking-[0.5em] text-sm mb-6 block">
            The Connection //
          </span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white">
            Start the <span className="text-gradient">Magic</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <a href="mailto:support@enlightenedmagic.com" className="text-xl font-medium hover:text-cyan-400 transition-colors">
                  support@enlightenedmagic.com
                </a>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <a href="tel:+919769216919" className="text-xl font-medium hover:text-cyan-400 transition-colors">
                  +91 97692 16919
                </a>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <p className="text-xl font-medium">Mumbai, India</p>
              </div>
            </div>

            <div className="flex gap-4">
              {[Globe, Users, MessageSquare].map((Icon, i) => (
                <div key={i} className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-gray-500 hover:border-cyan-500 hover:text-cyan-400 transition-all cursor-pointer">
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Premium Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-3xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500 focus:outline-none transition-colors"
                />
              </div>
              <textarea
                placeholder="Your Magical Vision"
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500 focus:outline-none transition-colors"
              />
              <button className="w-full group relative px-8 py-4 rounded-xl overflow-hidden transition-all active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600" />
                <span className="relative text-white font-bold tracking-widest uppercase flex items-center justify-center gap-2">
                  Send Inquiry <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
