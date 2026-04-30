"use client";

import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass flex items-center justify-between w-full max-w-5xl px-8 py-4 rounded-full"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg glow-cyan" />
          <span className="text-xl font-bold tracking-tight text-white">
            Enlightened <span className="text-cyan-400">Magic</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Services", "Portfolio", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={item === "Portfolio" ? "/portfolio" : `#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="https://www.enlightenedmagic.com/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group px-6 py-2 rounded-full font-semibold text-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border border-white/20" />
          <span className="relative text-white">Start a Project</span>
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
