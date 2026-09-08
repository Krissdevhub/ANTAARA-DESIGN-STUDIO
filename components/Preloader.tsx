"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [percent, setPercent] = useState(0);
  const [complete, setComplete] = useState(false);
  const [removeDom, setRemoveDom] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setComplete(true), 120);
          setTimeout(() => setRemoveDom(true), 750);
          return 100;
        }
        const increment = Math.floor(Math.random() * 15) + 12;
        return Math.min(100, prev + increment);
      });
    }, 28);

    return () => clearInterval(interval);
  }, []);

  if (removeDom) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-[#F7F7F2] text-[#28343A] flex flex-col justify-between p-8 sm:p-14 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        complete ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
    >
      {/* Top Metadata */}
      <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.35em] text-[#5C6A72] font-sans">
        <span>ANTAARA • INDORE</span>
        <span>EXHIBITION 2024–2025</span>
      </div>

      {/* Center Wordmark */}
      <div className="my-auto text-center space-y-3">
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-[0.2em] text-[#28343A] uppercase">
          ANTAARA
        </h1>
        <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-[#5C6A72] font-sans">
          DESIGN STUDIO • INTERIOR ARCHITECTURE
        </p>
      </div>

      {/* Bottom Progress */}
      <div className="space-y-3">
        <div className="flex items-end justify-between text-[9px] uppercase tracking-[0.3em] font-sans text-[#5C6A72]">
          <span>ENTERING GALLERY</span>
          <span className="font-sans text-xs text-[#28343A] font-medium">{percent}%</span>
        </div>
        <div className="w-full h-[1px] bg-[#28343A]/15 relative overflow-hidden">
          <div
            className="h-full bg-[#3157D5] transition-all duration-75 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
