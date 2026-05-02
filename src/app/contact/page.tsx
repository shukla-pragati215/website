"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Mail, Phone, MapPin, Send, Globe, MessageSquare, Users } from "lucide-react";

const ContactPage = () => {
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
            The Connection //
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
            Start the <span className="text-gradient">Magic</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Ready to transform your brand into a high-performance growth machine? 
            Connect with our elite team today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-1">Email Us</h3>
                  <a href="mailto:support@enlightenedmagic.com" className="text-xl font-medium hover:text-amber-400 transition-colors">
                    support@enlightenedmagic.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-1">Call Us</h3>
                  <a href="tel:+919769216919" className="text-xl font-medium hover:text-amber-400 transition-colors">
                    +91 97692 16919
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-amber-300 group-hover:bg-amber-500 group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-1">Visit Us</h3>
                  <p className="text-xl font-medium">
                    Mumbai, India
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-white/5">
              <h3 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-6">Social Manifestations</h3>
              <div className="flex gap-6">
                {[
                  { icon: <Globe size={20} />, url: "#" },
                  { icon: <Users size={20} />, url: "#" },
                  { icon: <MessageSquare size={20} />, url: "#" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-amber-500 hover:text-amber-400 transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-3xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-gray-500">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-gray-500">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-gray-500">Service Interest</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-amber-500 focus:outline-none transition-colors appearance-none">
                  <option className="bg-[#0A0A0A]">Select a manifestation...</option>
                  <option className="bg-[#0A0A0A]">Social Media Marketing</option>
                  <option className="bg-[#0A0A0A]">Performance Marketing</option>
                  <option className="bg-[#0A0A0A]">Videography</option>
                  <option className="bg-[#0A0A0A]">Website Development</option>
                  <option className="bg-[#0A0A0A]">AI Automation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-gray-500">Project Vision</label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="Tell us about your magical project..."
                />
              </div>

              <button className="w-full group relative px-8 py-4 rounded-xl overflow-hidden transition-all active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-700" />
                <span className="relative text-white font-bold tracking-widest uppercase flex items-center justify-center gap-2">
                  Send Inquiry <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <footer className="py-20 border-t border-white/5 flex flex-col items-center gap-6">
        <img src="/logo.avif" alt="Enlightened Magic Logo" className="w-10 h-10 object-contain" />
        <p className="text-gray-600 text-sm tracking-widest uppercase">
          Enlightened Magic // 2026 Connection Portal
        </p>
      </footer>
    </main>
  );
};

export default ContactPage;
