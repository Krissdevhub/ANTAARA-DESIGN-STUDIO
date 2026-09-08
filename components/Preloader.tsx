"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [percent, setPercent] = useState(0);
  const [complete, setComplete] = useState(false);
  const [removeDom, setRemoveDom] = useState(false);

  useEffect(() => {
    // Check if user already saw preloader in this tab session
    const seen = typeof window !== "undefined" ? sessionStorage.getItem("antaara_preloaded") : null;
    if (seen) {
      setRemoveDom(true);
      return;
    }

    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setComplete(true);
            try {
              sessionStorage.setItem("antaara_preloaded", "true");
            } catch (e) {}
          }, 200);
          setTimeout(() => setRemoveDom(true), 1100);
          return 100;
        }
        const increment = Math.floor(Math.random() * 14) + 10;
        return Math.min(100, prev + increment);
      });
    }, 38);

    return () => clearInterval(interval);
  }, []);

  if (removeDom) return null;

  return (
    <div
      className={`fixed inset-0 z-[100000] bg-[#140404] text-[#f7f6ef] flex flex-col justify-between p-8 sm:p-14 transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        complete ? "-translate-y-full opacity-90 pointer-events-none" : "translate-y-0 opacity-100"
      }`}
    >
      {/* Subtle Ambient Radial */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(220,168,43,0.12)_0%,transparent_70%)]" />

      {/* Top Metadata */}
      <div className="relative z-10 flex items-center justify-between text-[10px] uppercase tracking-[0.32em] text-[#dca82b] font-sans">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#dca82b] animate-ping inline-block" />
          ANTAARA · INDORE
        </span>
        <span className="text-white/40">INTERIOR ARCHITECTURE</span>
      </div>

      {/* Center Wordmark with Gold Seal */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center space-y-5">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 animate-pulse">
          <Image
            src="/images/brand/logo.png"
            alt="Antaara Emblem"
            fill
            priority
            className="object-contain drop-shadow-[0_0_20px_rgba(220,168,43,0.6)]"
          />
        </div>

        <div className="space-y-2">
          <h1 className="brand-logo-text text-4xl sm:text-6xl md:text-7xl font-normal tracking-[0.3em] text-[#f7f6ef] uppercase drop-shadow-[0_0_25px_rgba(220,168,43,0.3)]">
            ANTAARA
          </h1>
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.42em] text-[#edd277] font-sans font-medium">
            DESIGN STUDIO · EST. 2016
          </p>
        </div>
      </div>

      {/* Bottom Progress */}
      <div className="relative z-10 space-y-3 max-w-xl mx-auto w-full">
        <div className="flex items-end justify-between text-[10px] uppercase tracking-[0.28em] font-sans text-[#c7bcb1]">
          <span>INITIALIZING SPATIAL MONOGRAPH</span>
          <span className="text-[#dca82b] font-semibold text-xs">{percent}%</span>
        </div>
        <div className="w-full h-[2px] bg-white/10 relative overflow-hidden rounded-full">
          <div
            className="h-full bg-gradient-to-r from-[#edd277] via-[#dca82b] to-[#c28c1d] transition-all duration-100 ease-out rounded-full shadow-[0_0_12px_rgba(220,168,43,0.8)]"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
