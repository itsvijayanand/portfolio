"use client";

export default function Noise() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-[9999] overflow-hidden">
      <svg className="w-full h-full opacity-[0.07] contrast-[130%] brightness-[95%]" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}
