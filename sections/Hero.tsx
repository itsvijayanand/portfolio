"use client";

import { motion } from "framer-motion";
import { Sparkles, Star, ArrowDownRight, Compass } from "lucide-react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-[#e5e5e5] pt-32 pb-16 md:pb-24 px-6 md:px-12 flex items-center overflow-hidden border-b border-stone-300"
    >
      {/* Background/Layout Grid lines for Swiss Magazine vibe */}
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-6 pointer-events-none opacity-20">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-full border-r border-stone-400 last:border-0" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Headline & Typography */}
        <div className="lg:col-span-7 flex flex-col items-start text-stone-900 select-none">
          {/* Animated Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-stone-900 bg-transparent text-xs font-mono tracking-widest uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#f4b223] fill-[#f4b223] animate-pulse" />
            <span>{portfolioData.roleTitle}</span>
          </motion.div>

          {/* Huge Main Headline */}
          <div className="relative mb-6">
            {/* Floating rotating icon */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="absolute -top-10 right-10 text-stone-700 hidden sm:block"
            >
              <Star className="w-8 h-8 fill-stone-700" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="text-7xl sm:text-8xl md:text-[10rem] font-black leading-none tracking-tighter text-stone-900"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              PORT<span className="text-[#f4b223]">F</span>OLIO
              <span className="text-stone-850">.</span>
            </motion.h1>
          </div>

          {/* Subheading / Creative Quote */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-2xl font-semibold text-stone-700 max-w-xl leading-snug mb-10 font-mono"
          >
            {portfolioData.aboutHeadline}
          </motion.p>

          {/* CTAs with Magnetic Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <MagneticButton>
              <button
                onClick={() => handleScrollTo("work")}
                className="px-8 py-4 rounded-full bg-stone-900 text-[#e5e5e5] font-mono uppercase tracking-widest text-xs font-bold hover:bg-[#f4b223] hover:text-stone-900 transition-colors flex items-center gap-2 group shadow-lg shadow-stone-800/10"
              >
                View Projects
                <ArrowDownRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </button>
            </MagneticButton>

            <MagneticButton>
              <button
                onClick={() => handleScrollTo("contact")}
                className="px-8 py-4 rounded-full border border-stone-900 bg-transparent text-stone-900 font-mono uppercase tracking-widest text-xs font-bold hover:bg-stone-900 hover:text-[#e5e5e5] transition-colors"
              >
                Let&apos;s Connect
              </button>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right Side: Portrait Image with abstract circles */}
        <div className="lg:col-span-5 relative flex justify-center items-center mt-12 lg:mt-0">
          
          {/* Abstract background outlined circles */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute w-[350px] h-[350px] md:w-[480px] md:h-[480px] border border-dashed border-stone-400 rounded-full z-0 flex justify-center items-center"
          >
            <div className="w-[85%] h-[85%] border border-stone-400 rounded-full border-dotted" />
          </motion.div>

          {/* Solid Mustard Yellow Accent Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 6 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="absolute w-[280px] h-[350px] md:w-[340px] md:h-[420px] bg-[#f4b223] rounded-3xl z-0 shadow-xl"
          />

          {/* Main Grayscale Profile Image Frame */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="relative w-[280px] h-[350px] md:w-[340px] md:h-[420px] rounded-3xl overflow-hidden bg-stone-300 border-2 border-stone-900 shadow-2xl z-10 group"
          >
            <Image
              src="/profile.jpg"
              alt="Vijayanand B Rathod Portrait"
              fill
              priority
              sizes="(max-width: 768px) 280px, 340px"
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            {/* Subtle internal vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Floating graphic element around portrait */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -bottom-8 -left-4 md:-left-8 z-20 bg-stone-900 text-[#e5e5e5] p-4 rounded-2xl border border-stone-700 flex items-center gap-3 shadow-xl select-none"
          >
            <div className="p-2 bg-[#f4b223] rounded-lg text-stone-900">
              <Compass className="w-5 h-5 animate-spin" style={{ animationDuration: "10s" }} />
            </div>
            <div className="text-left font-mono">
              <p className="text-[10px] text-stone-400 uppercase tracking-widest">Currently</p>
              <p className="text-xs font-bold uppercase">Freelance NL</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Side Vertical Year & Metadata (Swiss Editorial style) */}
      <div className="absolute left-6 md:left-12 bottom-12 hidden md:flex items-center gap-4 text-stone-500 font-mono text-xs uppercase tracking-widest select-none origin-left rotate-90 translate-y-12">
        <span>©2026 EDITION</span>
        <span className="w-12 h-[1px] bg-stone-400" />
        <span>CREATIVE DIRECTORY</span>
      </div>

      {/* Right Side Scroll Indicator */}
      <div className="absolute right-6 md:right-12 bottom-12 hidden md:flex flex-col items-center gap-4 text-stone-500 font-mono text-xs uppercase tracking-widest select-none">
        <span className="rotate-90 origin-right translate-y-[-20px]">SCROLL DOWN</span>
        <div className="w-[1px] h-12 bg-stone-400 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#f4b223]"
          />
        </div>
      </div>
    </section>
  );
}
