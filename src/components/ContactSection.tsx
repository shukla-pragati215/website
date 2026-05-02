"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";

const contactMethods = [
  {
    icon: <Mail size={22} />,
    label: "Email",
    value: "support@enlightenedmagic.com",
    href: "mailto:support@enlightenedmagic.com",
    gradient: "from-amber-500 via-orange-500 to-red-500",
    accentHex: "#f59e0b",
  },
  {
    icon: <Phone size={22} />,
    label: "Phone",
    value: "+91 97692 16919",
    href: "tel:+919769216919",
    gradient: "from-blue-400 via-indigo-500 to-violet-600",
    accentHex: "#818cf8",
  },
  {
    icon: <MapPin size={22} />,
    label: "Location",
    value: "Mumbai, India",
    href: "#",
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    accentHex: "#34d399",
  },
];

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <section ref={sectionRef} id="contact" className="relative py-20 px-6 bg-[#0A0A0A] overflow-hidden">
      {/* Ambient glow */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute bottom-1/3 right-1/4 w-[800px] h-[600px] bg-amber-500/[0.03] blur-[200px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-px bg-gradient-to-r from-amber-500 to-transparent"
            />
            <span className="text-amber-500 font-bold uppercase tracking-[0.5em] text-[10px]">
              Connect
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.85]">
            Start the <span className="text-gradient">Magic.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Cards — Left */}
          <div className="lg:col-span-2 space-y-5">
            {contactMethods.map((method, i) => (
              <motion.a
                key={method.label}
                href={method.href}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group relative flex items-center gap-6 p-6 rounded-2xl border border-white/[0.06] bg-[#111111] overflow-hidden transition-all duration-700 hover:border-white/[0.12]"
              >
                {/* Gradient border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-sm`} />
                <div className="absolute inset-[1px] rounded-2xl bg-[#111111] z-0" />

                <div className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center bg-white/[0.04] border border-white/[0.08] text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                  {method.icon}
                </div>
                <div className="relative z-10 flex-1">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-600 block mb-1">
                    {method.label}
                  </span>
                  <span className="text-white font-medium text-sm group-hover:text-amber-400 transition-colors duration-500">
                    {method.value}
                  </span>
                </div>
                <div className="relative z-10 w-8 h-8 rounded-full border border-white/[0.06] flex items-center justify-center text-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <ArrowUpRight size={14} />
                </div>
              </motion.a>
            ))}

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-8 grid grid-cols-2 gap-4"
            >
              {[
                { value: "< 2hr", label: "Response Time" },
                { value: "100%", label: "Secure" },
              ].map((badge) => (
                <div key={badge.label} className="p-4 rounded-xl bg-[#111111] border border-white/[0.04] text-center">
                  <span className="text-lg font-black text-white block">{badge.value}</span>
                  <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-gray-600">{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Form — Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 relative overflow-hidden rounded-[2rem] border border-white/[0.06] bg-[#111111]"
          >
            {/* Gradient border */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-amber-500/20 via-transparent to-amber-500/10 opacity-0 hover:opacity-100 transition-opacity duration-1000 -z-10 blur-sm" />
            <div className="absolute inset-[1px] rounded-[2rem] bg-[#111111] z-0" />

            <div className="relative z-10 p-10 md:p-12">
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-white tracking-tight mb-2">Send a Message</h3>
                <p className="text-gray-600 text-sm">Every great project starts with a conversation.</p>
              </div>

              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { name: "name", label: "Full Name", type: "text", placeholder: "John Doe" },
                    { name: "email", label: "Email", type: "email", placeholder: "john@example.com" },
                  ].map((field) => (
                    <div key={field.name} className="space-y-2">
                      <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-600">{field.label}</label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full bg-white/[0.03] border rounded-xl px-5 py-3.5 text-sm focus:outline-none transition-all duration-500 ${
                          focusedField === field.name
                            ? "border-amber-500/50 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                            : "border-white/[0.06]"
                        }`}
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-600">Project Vision</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your vision..."
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-white/[0.03] border rounded-xl px-5 py-3.5 text-sm focus:outline-none transition-all duration-500 resize-none ${
                      focusedField === "message"
                        ? "border-amber-500/50 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                        : "border-white/[0.06]"
                    }`}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full group relative px-8 py-4 rounded-xl overflow-hidden transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative text-white font-bold tracking-widest uppercase text-sm flex items-center justify-center gap-3">
                    Send Inquiry
                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
