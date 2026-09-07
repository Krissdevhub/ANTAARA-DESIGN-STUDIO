"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [percent, setPercent] = useState(0);
  const [complete, setComplete] = useState(false);
  const [removeDom, setRemoveDom] = useState(false);

  useEffect(() => {
    // Fast, elegant counter up to 100%
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setComplete(true), 200);
          setTimeout(() => setRemoveDom(true), 1200);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(100, prev + increment);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  if (removeDom) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-[#11110F] text-[#F5F1EB] flex flex-col justify-between p-8 sm:p-16 transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        complete ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-[#8A7D73] font-sans">
        <span>EST. INDORE • ARCHITECTURE</span>
        <span>PORTFOLIO 2024–2025</span>
      </div>

      {/* Center Branding */}
      <div className="my-auto text-center space-y-4">
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-[0.25em] text-[#EDE7DF] uppercase">
          ANTAARA
        </h1>
        <p className="text-[11px] uppercase tracking-[0.45em] text-[#B69A6A] font-sans">
          DESIGN STUDIO • KIRTI JAISWAL RAJPAL
        </p>
      </div>

      {/* Bottom Counter & Progress line */}
      <div className="space-y-4">
        <div className="flex items-end justify-between">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#8A7D73] font-sans">
            INITIALIZING DIGITAL ARCHITECTURE
          </span>
          <span className="font-mono text-2xl sm:text-3xl text-[#B69A6A]">
            {percent < 10 ? `0${percent}` : percent}%
          </span>
        </div>

        {/* Delicate hairline progress */}
        <div className="w-full h-[1px] bg-[#22201E] relative overflow-hidden">
          <div
            className="h-full bg-[#B69A6A] transition-all duration-100 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
