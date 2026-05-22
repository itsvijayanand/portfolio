"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 800); // Allow exit transition
          }, 400);
          return 100;
        }
        // Random incremental steps for organic loading feel
        const increment = Math.floor(Math.random() * 12) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Define grid panel layout variants
  const panelVariants = {
    initial: { y: 0 },
    exit: {
      y: "-100%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }
    }
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <div className="fixed inset-0 z-[9999] overflow-hidden flex flex-col items-center justify-between p-8 md:p-16">
          {/* Slide-down grid panels for clean exit */}
          <div className="absolute inset-0 flex flex-row pointer-events-none">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="h-full flex-1 bg-stone-950 border-r border-stone-900 last:border-0"
                variants={panelVariants}
                initial="initial"
                exit="exit"
                transition={{ delay: i * 0.1 }}
              />
            ))}
          </div>

          {/* Top text indicator */}
          <div className="w-full flex justify-between items-start z-10 text-stone-400 font-mono text-xs uppercase tracking-widest">
            <span>Vijayanand B Rathod / Portfolio 2026</span>
          </div>

          {/* Central loading counter */}
          <div className="z-10 text-center flex flex-col items-center select-none">
            <motion.h1 
              className="text-8xl md:text-[12rem] font-bold text-[#f4b223] tracking-tighter"
              style={{ fontFamily: "'Syne', sans-serif" }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              {progress}%
            </motion.h1>
            <span className="text-stone-400 font-mono text-xs uppercase tracking-widest mt-4">
              System Initialization...
            </span>
          </div>

          {/* Bottom loading progress indicators */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 z-10">
            <div className="w-full md:w-96 h-[2px] bg-stone-900 relative overflow-hidden rounded">
              <motion.div 
                className="absolute left-0 top-0 h-full bg-[#f4b223]"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-stone-500 font-mono text-[10px] uppercase">
              Initializing Creative Engines
            </span>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
