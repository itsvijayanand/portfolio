"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Instagram, Compass } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import MagneticButton from "@/components/MagneticButton";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "github":
        return <Github className="w-4 h-4" />;
      case "linkedin":
        return <Linkedin className="w-4 h-4" />;
      case "instagram":
        return <Instagram className="w-4 h-4" />;
      default:
        return <Compass className="w-4 h-4" />;
    }
  };

  return (
    <footer className="relative w-full bg-[#e5e5e5] pt-16 pb-12 px-6 md:px-12 overflow-hidden border-t border-stone-300">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Top: Large typography name & Back to top button */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-10 border-b border-stone-300">
          <span
            className="text-3xl md:text-5xl font-black text-stone-900 tracking-tighter uppercase font-mono select-none"
          >
            VIJAYANAND RATHOD<span className="text-[#f4b223]">.</span>
          </span>

          <MagneticButton>
            <button
              onClick={handleScrollToTop}
              className="w-12 h-12 rounded-full border-2 border-stone-900 bg-stone-900 text-[#e5e5e5] flex items-center justify-center hover:bg-[#f4b223] hover:text-stone-900 transition-colors shadow-lg"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 animate-bounce" />
            </button>
          </MagneticButton>
        </div>

        {/* Bottom Details: Copyright and Designed Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-stone-500 uppercase tracking-widest">
          
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Vijayanand B Rathod. All rights reserved.</span>
          </div>

          {/* Social icons row */}
          <div className="flex items-center gap-4">
            {portfolioData.contact.socials.map((soc) => (
              <a
                key={soc.platform}
                href={soc.url}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-stone-350 bg-stone-200 flex items-center justify-center text-stone-600 hover:text-stone-900 hover:border-stone-900 transition-all shadow-sm"
                aria-label={soc.platform}
              >
                {getSocialIcon(soc.platform)}
              </a>
            ))}
          </div>

          <div>
            <span>Designed by <span className="text-stone-900 font-bold underline">Vijayanand B Rathod</span></span>
          </div>

        </div>

      </div>
    </footer>
  );
}
