"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import { portfolioData, Testimonial } from "@/data/portfolioData";
import MagneticButton from "@/components/MagneticButton";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const testimonials = portfolioData.testimonials;

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const activeTestimonial: Testimonial = testimonials[index];

  return (
    <section
      id="reviews"
      className="relative min-h-[80vh] w-full bg-[#e5e5e5] py-24 px-6 md:px-12 border-b border-stone-300 flex items-center overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col gap-16 relative z-10">
        
        {/* Top heading */}
        <div className="flex flex-col items-center text-center select-none">
          <span className="font-mono text-xs uppercase tracking-widest text-[#f4b223] font-bold mb-2">
            05 / COLLABORATIONS
          </span>
          <h2
            className="text-5xl md:text-7xl font-bold tracking-tight text-stone-900"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            TRUSTED REVIEWS.
          </h2>
        </div>

        {/* Carousel Frame */}
        <div className="relative min-h-[380px] md:min-h-[300px] w-full flex flex-col justify-center items-center">
          
          {/* Giant Quote icon backdrop */}
          <div className="absolute top-0 left-0 text-stone-300 pointer-events-none select-none opacity-40">
            <Quote className="w-24 h-24 stroke-[1px] fill-stone-300" />
          </div>

          {/* Testimonial Active Slide */}
          <div className="w-full max-w-3xl">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                className="bg-[#e5e5e5] border-2 border-stone-900 rounded-[2.5rem] p-8 md:p-12 shadow-xl flex flex-col gap-6 md:gap-8 items-start relative overflow-hidden"
              >
                {/* Yellow outline accents inside card */}
                <div className="absolute right-0 top-0 w-32 h-32 bg-[#f4b223] rounded-bl-[10rem] opacity-20 pointer-events-none" />

                {/* Quote block */}
                <p 
                  className="text-xl md:text-2xl font-semibold leading-relaxed text-stone-900 italic font-mono text-left"
                >
                  &ldquo;{activeTestimonial.quote}&rdquo;
                </p>

                {/* User Profile Footer */}
                <div className="flex items-center gap-4 border-t border-stone-300 pt-6 w-full">
                  <div className="text-left font-mono">
                    <h4 className="text-base font-bold text-stone-900">{activeTestimonial.name}</h4>
                    <p className="text-xs text-stone-500 uppercase tracking-wider">
                      {activeTestimonial.role} at <span className="text-[#f4b223] font-bold">{activeTestimonial.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel controls with Magnetic triggers */}
        <div className="flex items-center justify-center gap-6 mt-4">
          <MagneticButton>
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-stone-900 bg-[#e5e5e5] text-stone-950 flex items-center justify-center hover:bg-stone-950 hover:text-[#e5e5e5] transition-colors"
              aria-label="Previous review"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          </MagneticButton>

          {/* Indicator Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === i ? "w-6 bg-[#f4b223]" : "w-2 bg-stone-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <MagneticButton>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-stone-900 bg-[#e5e5e5] text-stone-950 flex items-center justify-center hover:bg-stone-950 hover:text-[#e5e5e5] transition-colors"
              aria-label="Next review"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </MagneticButton>
        </div>

      </div>
    </section>
  );
}
