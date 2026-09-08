"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [percent, setPercent] = useState(25);
  const [complete, setComplete] = useState(false);
  const [removeDom, setRemoveDom] = useState(false);

  useEffect(() => {
    // Check if already seen in this session
    try {
      if (typeof window !== "undefined" && sessionStorage.getItem("antaara_preloaded")) {
        setRemoveDom(true);
        return;
      }
    } catch (e) {}

    let current = 25;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 30) + 25;
      if (current >= 100) {
        current = 100;
        setPercent(100);
        clearInterval(interval);
        setTimeout(() => {
          setComplete(true);
          try {
            sessionStorage.setItem("antaara_preloaded", "true");
          } catch (e) {}
        }, 100);
        setTimeout(() => setRemoveDom(true), 500);
      } else {
        setPercent(current);
      }
    }, 40);

    // Bulletproof hard fallback: after 950ms force completion
    const hardFallback = setTimeout(() => {
      setPercent(100);
      setComplete(true);
      try {
        sessionStorage.setItem("antaara_preloaded", "true");
      } catch (e) {}
      setTimeout(() => setRemoveDom(true), 400);
    }, 950);

    return () => {
      clearInterval(interval);
      clearTimeout(hardFallback);
    };
  }, []);

  if (removeDom) return null;

  return (
    <>
      {/* Top glowing progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[100001] h-[2.5px] pointer-events-none bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[#edd277] via-[#dca82b] to-[#c28c1d] transition-all duration-150 ease-out shadow-[0_0_12px_rgba(220,168,43,0.9)]"
          style={{ width: `${percent}%` }}
        />
      </div>

      {/* Main Preloader Overlay */}
      <div
        onClick={() => {
          setComplete(true);
          setTimeout(() => setRemoveDom(true), 250);
        }}
        id="antaara-preloader-overlay"
        style={{
          animation: "preloaderCssAutoExit 1.3s cubic-bezier(0.85, 0, 0.15, 1) forwards",
        }}
        className={`fixed inset-0 z-[100000] bg-[#140404] text-[#f7f6ef] flex flex-col justify-between p-8 sm:p-14 transition-all duration-600 ease-[cubic-bezier(0.85,0,0.15,1)] cursor-pointer select-none ${
          complete
            ? "-translate-y-full opacity-0 pointer-events-none"
            : "translate-y-0 opacity-100"
        }`}
      >
        {/* Ambient Radial Glow */}
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
            <span>INITIALIZING MONOGRAPH</span>
            <span className="text-[#dca82b] font-semibold text-xs">{percent}%</span>
          </div>
          <div className="w-full h-[2px] bg-white/10 relative overflow-hidden rounded-full">
            <div
              className="h-full bg-gradient-to-r from-[#edd277] via-[#dca82b] to-[#c28c1d] transition-all duration-100 ease-out rounded-full shadow-[0_0_12px_rgba(220,168,43,0.8)]"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>

        <style jsx global>{`
          @keyframes preloaderCssAutoExit {
            0% {
              opacity: 1;
              transform: translateY(0);
              pointer-events: auto;
            }
            75% {
              opacity: 1;
              transform: translateY(0);
              pointer-events: auto;
            }
            100% {
              opacity: 0;
              transform: translateY(-100%);
              pointer-events: none;
              visibility: hidden;
            }
          }
        `}</style>
      </div>
    </>
  );
}
