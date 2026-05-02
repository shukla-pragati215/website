"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`flex items-center justify-between w-full max-w-5xl px-6 md:px-8 py-3.5 rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-black/60 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "bg-black/30 backdrop-blur-md border border-white/[0.04]"
          }`}
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <img src="/logo.avif" alt="Enlightened Magic Logo" className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-500" />
            <span className="text-lg font-bold tracking-tight text-white">
              Enlightened <span className="text-amber-400">Magic</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-px bg-amber-500 group-hover:w-4 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/contact"
              className="hidden md:inline-flex relative group items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full" />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative text-white text-xs font-bold tracking-wider uppercase">Start a Project</span>
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setMobileOpen(false)}
                className="text-3xl font-bold text-white hover:text-amber-400 transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => setMobileOpen(false)}
              className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-sm uppercase tracking-widest"
            >
              Start a Project
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
