"use client";

import { useState } from "react";
import Image from "next/image";
import { Sun, Moon, Sunrise, Sunset, Sparkles, Sliders } from "lucide-react";

interface SolarPhase {
  time: string;
  label: string;
  kelvin: string;
  lux: string;
  atmosphere: string;
  filterStyle: string;
  overlayStyle: string;
  icon: any;
  quote: string;
}

export default function NewSolarSimulator() {
  const phases: SolarPhase[] = [
    {
      time: "07:00 AM",
      label: "Morning Dawn",
      kelvin: "4800K Cool Natural",
      lux: "350 Lux Diffused",
      atmosphere: "Gentle awakening daylight filtering through sheer linen curtains.",
      filterStyle: "brightness(1.05) contrast(1.02) saturate(0.95)",
      overlayStyle: "rgba(220, 235, 255, 0.12)",
      icon: Sunrise,
      quote: "Dawn reveals the quiet geometry of form and pristine architectural planes.",
    },
    {
      time: "01:00 PM",
      label: "High Solar Zenith",
      kelvin: "6200K Pure White",
      lux: "950 Lux Luminous",
      atmosphere: "Crisp architectural illumination sculpting depth across marble and millwork.",
      filterStyle: "brightness(1.15) contrast(1.15) saturate(1.1)",
      overlayStyle: "rgba(255, 255, 250, 0.05)",
      icon: Sun,
      quote: "Midday sun brings honest clarity, activating textural depth and stone veining.",
    },
    {
      time: "06:30 PM",
      label: "Golden Hour Sunset",
      kelvin: "3000K Warm Amber",
      lux: "280 Lux Raking",
      atmosphere: "Raking golden rays grazing walnut fluting, casting long romantic shadows.",
      filterStyle: "brightness(0.95) contrast(1.18) sepia(0.35) hue-rotate(-15deg)",
      overlayStyle: "rgba(255, 170, 70, 0.22)",
      icon: Sunset,
      quote: "Golden hour softens the boundaries between interior solace and exterior twilight.",
    },
    {
      time: "11:00 PM",
      label: "Midnight Noir Sanctuarium",
      kelvin: "2200K Concealed Warm Cove",
      lux: "65 Lux Intimate",
      atmosphere: "Sensory stillness with indirect 2400K concealed architectural cove LEDs.",
      filterStyle: "brightness(0.72) contrast(1.3) saturate(0.9)",
      overlayStyle: "rgba(10, 8, 20, 0.55)",
      icon: Moon,
      quote: "At night, light is not for sight—it is an intimate cloak of warmth and seclusion.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(2); // Default to Golden Hour
  const activePhase = phases[activeIndex];

  return (
    <section id="solar-simulator" className="relative w-full py-28 bg-[#08080A] text-[#FBFBFD] overflow-hidden border-t border-[#E6CA85]/15">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Monograph Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E6CA85]/20 pb-8 mb-16">
          <div>
            <div className="flex items-center space-x-2 text-[10px] uppercase font-mono tracking-[0.35em] text-[#E6CA85] mb-2">
              <Sun className="w-3.5 h-3.5" />
              <span>CAP. IV — DIURNAL SOLAR & AMBIENCE SIMULATION</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl text-[#FBFBFD] tracking-tight">
              THE ARCHITECTURE OF <span className="font-serif italic text-gold-shimmer">LIGHT</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-xs sm:text-sm text-[#9C9890] font-sans leading-relaxed">
            We do not illuminate rooms; we choreograph how natural light travels across a 24-hour diurnal cycle. Experience the transformation below.
          </p>
        </div>

        {/* Interactive Lighting Sandbox */}
        <div className="rounded-3xl glass-onyx border border-[#E6CA85]/30 overflow-hidden p-6 md:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.8)]">
          {/* Top Phase Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {phases.map((phase, idx) => {
              const isCurrent = activeIndex === idx;
              const Icon = phase.icon;
              return (
                <button
                  key={phase.label}
                  onClick={() => setActiveIndex(idx)}
                  className={`p-4 rounded-2xl text-left transition-all duration-300 border flex items-center space-x-3.5 ${
                    isCurrent
                      ? "bg-[#16161D] border-[#E6CA85] shadow-[0_0_25px_rgba(230,202,133,0.3)] scale-[1.02]"
                      : "bg-[#101014]/60 border-white/10 hover:border-[#E6CA85]/40 text-[#9C9890]"
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-xl transition-colors ${
                      isCurrent
                        ? "bg-[#E6CA85] text-[#08080A]"
                        : "bg-white/5 text-[#E6CA85]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#E6CA85] block">
                      {phase.time}
                    </span>
                    <span className="font-cinzel text-xs text-[#FBFBFD] font-medium block">
                      {phase.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Architectural Canvas Frame */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#E6CA85]/30 shadow-2xl bg-black">
            <Image
              src="/images/projects/bcm-planet-luxury-residence/bcm_living_room.jpg"
              alt="Diurnal Lighting Simulation at Antaara Residence"
              fill
              className="object-cover transition-all duration-1000 ease-out"
              style={{ filter: activePhase.filterStyle }}
            />

            {/* Dynamic Atmospheric Light Overlay */}
            <div
              className="absolute inset-0 transition-all duration-1000 ease-out pointer-events-none"
              style={{ backgroundColor: activePhase.overlayStyle }}
            />

            {/* Radial Light Glow for Sunset/Night */}
            {activeIndex >= 2 && (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,_rgba(255,200,100,0.25)_0%,_transparent_65%)] transition-opacity duration-1000 pointer-events-none" />
            )}

            {/* Floating Live Telemetry HUD */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
              <div className="p-3 rounded-xl bg-[#08080A]/85 backdrop-blur-md border border-[#E6CA85]/30">
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#E6CA85] block">
                  SOLAR DIAL // INDORE
                </span>
                <span className="font-cinzel text-sm text-[#FBFBFD] font-semibold">
                  {activePhase.time} • {activePhase.label}
                </span>
              </div>

              <div className="hidden sm:flex items-center space-x-3">
                <div className="px-3.5 py-2 rounded-xl bg-[#08080A]/85 backdrop-blur-md border border-white/10 text-right">
                  <span className="text-[9px] font-mono text-[#9C9890] block">
                    COLOR TEMP
                  </span>
                  <span className="text-xs font-mono text-[#E6CA85]">
                    {activePhase.kelvin}
                  </span>
                </div>

                <div className="px-3.5 py-2 rounded-xl bg-[#08080A]/85 backdrop-blur-md border border-white/10 text-right">
                  <span className="text-[9px] font-mono text-[#9C9890] block">
                    INTENSITY
                  </span>
                  <span className="text-xs font-mono text-[#E6CA85]">
                    {activePhase.lux}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Atmospheric Subtitle */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#08080A]/85 backdrop-blur-md border border-[#E6CA85]/20 flex items-center justify-between pointer-events-none">
              <p className="text-xs text-[#FBFBFD] font-serif italic max-w-xl">
                &ldquo;{activePhase.quote}&rdquo;
              </p>
              <span className="hidden md:inline-block text-[9px] font-mono text-[#E6CA85] tracking-widest uppercase">
                INTEGRATED AUTOMATED DALI LIGHTING
              </span>
            </div>
          </div>

          {/* Interactive Range Slider to Scrub Solar Trajectory */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3 text-xs font-cinzel text-[#E6CA85]">
              <Sliders className="w-4 h-4" />
              <span>SCRUB DIURNAL TIMELINE:</span>
            </div>

            <div className="flex-1 max-w-xl flex items-center space-x-4">
              <span className="text-[10px] font-mono text-[#9C9890]">07:00</span>
              <input
                type="range"
                min="0"
                max="3"
                step="1"
                value={activeIndex}
                onChange={(e) => setActiveIndex(Number(e.target.value))}
                className="w-full h-1.5 bg-[#24242D] rounded-lg appearance-none cursor-pointer accent-[#E6CA85]"
              />
              <span className="text-[10px] font-mono text-[#9C9890]">23:00</span>
            </div>

            <span className="text-[10px] font-mono text-[#9C9890]">
              PHASE {activeIndex + 1} OF 4
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
