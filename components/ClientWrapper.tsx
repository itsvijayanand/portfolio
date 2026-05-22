"use client";

import React, { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import Noise from "@/components/Noise";
import LenisProvider from "@/components/LenisProvider";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LenisProvider>
      {/* Background grain texture */}
      <Noise />

      {/* Interactive custom pointer tracking */}
      <CustomCursor />

      {/* Count-up initial loader screen */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {/* Render children only when loader resolves or keep it mounted under opacity */}
      <div className={`transition-opacity duration-1000 ${isLoading ? "opacity-0 h-screen overflow-hidden" : "opacity-100"}`}>
        {!isLoading && children}
      </div>
    </LenisProvider>
  );
}
