"use client";

import { useState } from "react";
import Image from "next/image";
import { Sun, Moon } from "lucide-react";

export default function LightingExperience() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  return (
    <section className="bg-[#11110F] text-[#F5F1EB] py-28 md:py-36 px-6 md:px-12 border-b border-[#22201E]">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#22201E] pb-8">
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#B69A6A] font-sans">
              ATMOSPHERIC INTERACTION
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#EDE7DF]">
              THE DIURNAL <br />
              <span className="italic font-normal text-[#B69A6A]">METAMORPHOSIS</span>
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-6 text-xs uppercase tracking-widest text-[#8A7D73]">
            <span className="inline-flex items-center space-x-2 text-[#EDE7DF]">
              <Sun className="w-4 h-4 text-amber-300" />
              <span>Solar Daylight</span>
            </span>
            <span>⟷</span>
            <span className="inline-flex items-center space-x-2 text-[#EDE7DF]">
              <Moon className="w-4 h-4 text-[#B69A6A]" />
              <span>Twilight Ambience</span>
            </span>
          </div>
        </div>

        {/* Interactive Comparison Slider */}
        <div
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full aspect-[16/9] max-h-[640px] overflow-hidden rounded-sm select-none cursor-ew-resize border border-[#33302C] shadow-2xl"
        >
          {/* Night Image (Base) */}
          <div className="absolute inset-0">
            <Image
              src="/images/projects/after-hours-nightclub/p8_4_1535x1024.jpeg"
              alt="Twilight / Evening Mood Lighting"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 right-6 text-right">
              <span className="text-[10px] uppercase tracking-widest text-[#B69A6A]">
                MODE II
              </span>
              <p className="font-serif text-xl sm:text-2xl text-[#EDE7DF]">
                Evening Ambient Warmth
              </p>
            </div>
          </div>

          {/* Day Image (Clipped Overlay) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <Image
              src="/images/projects/bcm-planet-luxury-residence/p6_3_1536x1024.jpeg"
              alt="Natural Solar Daylight"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-left">
              <span className="text-[10px] uppercase tracking-widest text-amber-300">
                MODE I
              </span>
              <p className="font-serif text-xl sm:text-2xl text-[#EDE7DF]">
                Natural Daylight Infiltration
              </p>
            </div>
          </div>

          {/* Slider Divider Bar */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-[#B69A6A] pointer-events-none shadow-[0_0_12px_rgba(182,154,106,0.8)]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#11110F] border-2 border-[#B69A6A] flex items-center justify-center text-[#B69A6A] shadow-xl">
              <span className="text-[10px] tracking-tighter">◀ ▶</span>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-[#8A7D73] uppercase tracking-widest">
          DRAG SLIDER HORIZONTALLY TO EXPERIENCE SPATIAL LIGHTING SHIFT
        </p>
      </div>
    </section>
  );
}
