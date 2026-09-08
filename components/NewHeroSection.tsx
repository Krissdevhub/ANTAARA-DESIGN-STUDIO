"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Volume2, VolumeX, ArrowDown, Compass } from "lucide-react";

export default function NewHeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [audioActive, setAudioActive] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const synthNodesRef = useRef<{ osc1: OscillatorNode; osc2: OscillatorNode; gain: GainNode } | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  // Web Audio API pure luxury spatial acoustic soundscape (zero external files)
  const toggleAudio = () => {
    if (!audioActive) {
      try {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        // Warm resonant atmospheric harmonic drone (F# minor low chord)
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();
        const gain = ctx.createGain();

        osc1.type = "sine";
        osc1.frequency.setValueAtTime(92.5, ctx.currentTime); // F#2

        osc2.type = "triangle";
        osc2.frequency.setValueAtTime(138.59, ctx.currentTime); // C#3 fifth

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(280, ctx.currentTime);

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 3);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc1.start();
        osc2.start();

        synthNodesRef.current = { osc1, osc2, gain };
        setAudioActive(true);
      } catch (e) {
        console.warn("Audio Context initialisation prevented:", e);
      }
    } else {
      if (synthNodesRef.current && audioCtxRef.current) {
        synthNodesRef.current.gain.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.8);
        setTimeout(() => {
          synthNodesRef.current?.osc1.stop();
          synthNodesRef.current?.osc2.stop();
          audioCtxRef.current?.close();
          synthNodesRef.current = null;
          audioCtxRef.current = null;
        }, 900);
      }
      setAudioActive(false);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#08080A] pt-24 pb-16"
    >
      {/* Background Architectural Canvas with subtle 3D Parallax */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className="relative w-[108%] h-[108%] -left-[4%] -top-[4%] transition-transform duration-700 ease-out"
          style={{
            transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
          }}
        >
          <Image
            src="/images/projects/bcm-planet-luxury-residence/bcm_living_room.jpg"
            alt="Antaara Haute Architecture & Interior Design"
            fill
            priority
            className={`object-cover object-center transition-all duration-[2000ms] ease-out ${
              loaded ? "scale-100 opacity-45 brightness-90 contrast-110" : "scale-115 opacity-0"
            }`}
          />
        </div>

        {/* Sophisticated Layered Velvet Obsidian Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/60 to-[#08080A]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_rgba(8,8,10,0.85)_100%)]" />

        {/* Subtle Architectural Drafting Grid Overlay */}
        <div className="absolute inset-0 blueprint-grid opacity-60" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-between min-h-[78vh]">
        {/* Top Folio Header */}
        <div
          className={`flex items-center justify-between border-b border-[#E6CA85]/20 pb-4 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <div className="flex items-center space-x-3 text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-[#E6CA85]">
            <Compass className="w-3.5 h-3.5 animate-spin-slow text-[#E6CA85]" />
            <span>KIRTI JAISWAL RAJPAL</span>
            <span className="text-[#9C9890]">•</span>
            <span className="text-[#FBFBFD]/80">HAUTE INTERIORS & ARCHITECTURE</span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Audio Synthesis Toggle */}
            <button
              onClick={toggleAudio}
              className="inline-flex items-center space-x-2 text-[9px] uppercase tracking-[0.25em] px-3.5 py-1.5 rounded-full border border-[#E6CA85]/30 text-[#E6CA85] hover:bg-[#E6CA85]/10 hover:border-[#E6CA85] transition-all bg-[#101014]/80 backdrop-blur-md"
              title="Toggle Resonant Spatial Atmosphere"
            >
              {audioActive ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#E6CA85] animate-pulse" />
                  <span className="hidden sm:inline">ATMOSPHERE: ACTIVE</span>
                  <span className="sm:hidden">ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-[#9C9890]" />
                  <span className="hidden sm:inline">ENABLE ATMOSPHERE</span>
                  <span className="sm:hidden">OFF</span>
                </>
              )}
            </button>

            <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest text-[#9C9890]">
              [ FOLIO 2024–2025 ]
            </span>
          </div>
        </div>

        {/* Centerpiece High-Fashion Editorial Typography */}
        <div className="my-auto py-12 md:py-16 space-y-6">
          <div className="overflow-hidden">
            <p
              className={`text-xs sm:text-sm uppercase tracking-[0.4em] text-[#E6CA85] font-sans font-medium transition-all duration-1000 delay-200 ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              [ ANTAARA DESIGN STUDIO ]
            </p>
          </div>

          <div className="space-y-1 md:space-y-3">
            <div className="overflow-hidden">
              <h1
                className={`font-cinzel text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-normal text-[#FBFBFD] tracking-tight leading-[1.05] transition-all duration-1000 delay-300 ${
                  loaded ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
                }`}
              >
                WE DO NOT DESIGN SPACES.
              </h1>
            </div>

            <div className="overflow-hidden">
              <h2
                className={`font-serif italic text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-normal text-gold-shimmer tracking-normal leading-[1.05] transition-all duration-1000 delay-500 ${
                  loaded ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
                }`}
              >
                WE CONSTRUCT EMOTIONS.
              </h2>
            </div>
          </div>

          <p
            className={`max-w-2xl text-sm sm:text-base text-[#9C9890] font-sans font-light leading-relaxed pt-2 transition-all duration-1000 delay-700 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            A bespoke atelier creating transcendent private residences, signature hospitality destinations, 
            and prestigious commercial environments across India with an unyielding devotion to rare materiality, 
            acoustic serenity, and timeless light.
          </p>

          {/* Action CTAs & Highlights */}
          <div
            className={`pt-6 flex flex-wrap items-center gap-5 transition-all duration-1000 delay-900 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <a
              href="#masterworks"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#E6CA85] to-[#D4AF37] text-[#08080A] font-cinzel text-xs uppercase tracking-[0.25em] font-semibold hover:shadow-[0_0_35px_rgba(230,202,133,0.5)] hover:scale-[1.02] transition-all"
            >
              EXPLORE MASTERWORKS ↓
            </a>

            <a
              href="#commission-concierge"
              className="px-7 py-3.5 rounded-full glass-onyx text-[#FBFBFD] hover:text-[#E6CA85] hover:border-[#E6CA85] font-cinzel text-xs uppercase tracking-[0.25em] font-medium transition-all"
            >
              COMMISSION PRIVATE BRIEF
            </a>
          </div>
        </div>

        {/* Bottom Architectural Metadata Bar */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-[#E6CA85]/20 pt-6 transition-all duration-1000 delay-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <span className="block text-[9px] uppercase font-mono tracking-widest text-[#9C9890]">
              PROVENANCE
            </span>
            <span className="text-xs font-cinzel text-[#FBFBFD]">
              Hema Malini Ji Commission
            </span>
          </div>

          <div>
            <span className="block text-[9px] uppercase font-mono tracking-widest text-[#9C9890]">
              SCALE
            </span>
            <span className="text-xs font-cinzel text-[#FBFBFD]">
              Bespoke Residences & Resorts
            </span>
          </div>

          <div>
            <span className="block text-[9px] uppercase font-mono tracking-widest text-[#9C9890]">
              GEOGRAPHY
            </span>
            <span className="text-xs font-cinzel text-[#FBFBFD]">
              Indore • Mathura • Kolkata
            </span>
          </div>

          <div className="flex items-center justify-end">
            <a
              href="#manifesto"
              className="group inline-flex items-center space-x-2 text-[10px] font-mono tracking-[0.25em] text-[#E6CA85] hover:text-[#FBFBFD] transition-colors"
            >
              <span>SCROLL DOWN</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
