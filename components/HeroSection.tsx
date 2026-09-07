"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Volume2, VolumeX } from "lucide-react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState("");
  const [isAudioActive, setIsAudioActive] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);

    // Update live Indore time
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }) + " IST"
      );
    };
    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(timeInterval);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 16;
    const y = (clientY / innerHeight - 0.5) * 16;
    setMouseOffset({ x, y });
  };

  const toggleSound = () => {
    // Elegant toggle for luxury atmospheric vibe
    setIsAudioActive(!isAudioActive);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen min-h-[750px] flex items-center justify-center overflow-hidden bg-[#11110F]"
    >
      {/* Background Architectural Photography with Parallax */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div
          className="relative w-[105%] h-[105%] -left-[2.5%] -top-[2.5%] transition-transform duration-700 ease-out"
          style={{
            transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
          }}
        >
          <Image
            src="/images/projects/bcm-planet-luxury-residence/bcm_living_room.jpg"
            alt="Antaara Design Studio Luxury Interior Architecture"
            fill
            priority
            className={`object-cover object-center transition-all duration-[2400ms] ease-out ${
              loaded ? "scale-100 opacity-75 blur-0" : "scale-115 opacity-0 blur-md"
            }`}
          />
        </div>
        {/* Layered warm cinematic luxury shading */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-[#141210]/40 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(20,18,16,0.7)_100%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-between h-[84%] pt-20">
        {/* Top Minimal Editorial Tag */}
        <div
          className={`flex items-center justify-between transition-all duration-1000 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <div className="inline-flex items-center space-x-3 text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#B69A6A] font-sans border-l-2 border-[#B69A6A] pl-3 py-0.5">
            <span>KIRTI JAISWAL RAJPAL</span>
            <span className="text-[#8A7D73]">•</span>
            <span className="text-[#EDE7DF]/80">INDORE</span>
          </div>

          <div className="flex items-center space-x-5">
            {/* Live Clock */}
            <div className="hidden sm:flex items-center space-x-2 text-[10px] font-mono tracking-widest text-[#8A7D73]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{currentTime || "21:45 IST"}</span>
            </div>

            {/* Ambient Sound Mode Indicator */}
            <button
              onClick={toggleSound}
              className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10 text-[#EDE7DF]/75 hover:text-[#B69A6A] hover:border-[#B69A6A] transition-all bg-black/30 backdrop-blur-sm"
              title="Toggle Atmospheric Audio Mode"
            >
              {isAudioActive ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#B69A6A]" />
                  <span className="text-[9px]">ATMOSPHERE ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="text-[9px]">ATMOSPHERE</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Center Modern Luxury Title with Line Stagger */}
        <div className="my-auto py-6">
          <div className="space-y-2">
            <div className="overflow-hidden">
              <h1
                className={`font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#FAF7F2] leading-[1.05] tracking-tight transition-all duration-1000 delay-500 ${
                  loaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
              >
                SPACES THAT
              </h1>
            </div>

            <div className="overflow-hidden">
              <h2
                className={`font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight transition-all duration-1000 delay-700 ${
                  loaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
              >
                <span className="font-serif italic font-normal text-[#B69A6A]">TELL A STORY.</span>
              </h2>
            </div>
          </div>

          <div
            className={`mt-8 flex flex-col sm:flex-row sm:items-center justify-between border-t border-[#EDE7DF]/20 pt-6 max-w-4xl transition-all duration-1000 delay-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-[#EDE7DF]/80 font-sans">
              ANTAARA DESIGN STUDIO
              <span className="block text-[10px] tracking-[0.3em] text-[#8A7D73] mt-1">
                INTERIOR ARCHITECTURE • HIGH-END RESIDENTIAL • HOSPITALITY • COMMERCIAL
              </span>
            </p>

            <div className="mt-4 sm:mt-0 flex items-center space-x-6">
              <Link
                href="/work"
                className="text-xs uppercase tracking-[0.25em] text-[#F5F1EB] hover:text-[#B69A6A] transition-colors font-medium underline underline-offset-8"
                data-cursor-text="EXPLORE"
              >
                VIEW ARCHIVE
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Coordinates & Scroll */}
        <div
          className={`flex items-end justify-between transition-all duration-1000 delay-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href="#studio-intro"
            className="group inline-flex items-center space-x-3 text-[10px] uppercase tracking-[0.3em] text-[#8A7D73] hover:text-[#B69A6A] transition-colors"
          >
            <span className="p-2.5 rounded-full border border-[#8A7D73]/40 group-hover:border-[#B69A6A] group-hover:translate-y-1 transition-all">
              <ArrowDown className="w-3.5 h-3.5 text-[#B69A6A]" />
            </span>
            <span className="font-sans">SCROLL TO EXPLORE ↓</span>
          </a>

          <div className="hidden md:flex items-center space-x-4 text-[10px] font-mono tracking-widest text-[#8A7D73]">
            <span>LAT 22.7196° N</span>
            <span>•</span>
            <span>LONG 75.8577° E</span>
          </div>
        </div>
      </div>
    </section>
  );
}
