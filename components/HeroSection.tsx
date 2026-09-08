"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "BCM PLANET RESIDENCE",
      location: "INDORE",
      category: "RESIDENTIAL",
      src: "/images/projects/bcm-planet-luxury-residence/bcm_living_room.jpg",
      sub: "LIVING SANCTUARY // TACTILE STONE & WOODWORK",
    },
    {
      title: "COFFEE BY DI BELLA",
      location: "INDORE",
      category: "HOSPITALITY",
      src: "/images/projects/coffee-by-di-bella/p3_2_627x627.png",
      sub: "WARM HOSPITALITY DINING // FLUTED TIMBER",
    },
    {
      title: "RESIDENCE AT OMAXE",
      location: "MATHURA",
      category: "RESIDENTIAL",
      src: "/images/projects/residence-at-omaxe/p4_1_2048x1150.jpeg",
      sub: "SERENE RESIDENTIAL HAVEN // TIMELESS ARCHITECTURE",
    },
  ];

  // Subtle 3D mouse depth without gimmicks
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 16;
      const y = (e.clientY / window.innerHeight - 0.5) * 16;
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative w-full min-h-[92vh] bg-[#F6F3ED] text-[#27343A] pt-28 sm:pt-32 pb-14 px-6 sm:px-10 md:px-16 flex flex-col justify-between select-none overflow-hidden">
      {/* Main Grid: Left Narrative + Right Dominant Architectural Photo + Far Right Vertical Accents */}
      <div className="max-w-[1560px] w-full mx-auto my-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center min-h-[64vh]">
          {/* Left Column: Narrative (Col 1-5) */}
          <div
            className="lg:col-span-5 space-y-7 transition-transform duration-700 ease-out"
            style={{
              transform: `translate3d(${-mouseOffset.x * 0.3}px, ${-mouseOffset.y * 0.3}px, 0)`,
            }}
          >
            {/* Subtle Eyebrow */}
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] font-sans text-[#66757A]">
              <span>—</span>
              <span>INTERIORS WITH INTENTION</span>
            </div>

            {/* Restrained Headline (58–72px, exactly matching reference) */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[68px] font-light leading-[1.08] tracking-tight text-[#27343A]">
              Beautiful spaces <br />
              <span className="italic font-light text-[#66757A]">for real lives.</span>
            </h1>

            {/* Refined Subhead */}
            <p className="max-w-md text-sm sm:text-[15px] text-[#66757A] font-sans font-light leading-relaxed">
              We design residential, commercial and hospitality spaces that are elegant, functional and deeply personal.
            </p>

            {/* CTAs matching reference */}
            <div className="pt-2 flex flex-wrap items-center gap-5 text-xs font-sans">
              <a
                href="#work"
                className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full border border-[#27343A]/30 text-[#27343A] hover:bg-[#27343A] hover:text-[#F6F3ED] transition-all duration-300 shadow-sm"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#studio"
                className="inline-flex items-center space-x-2 px-3 py-2 text-[#27343A] hover:text-[#566D68] transition-colors"
              >
                <div className="w-6 h-6 rounded-full border border-[#27343A]/20 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5 text-[#27343A]" />
                </div>
                <span>Play Showreel</span>
              </a>
            </div>

            {/* Bottom Location Tag */}
            <div className="pt-6 border-t border-[#27343A]/10 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] font-sans text-[#66757A]">
              <span>INDORE, INDIA</span>
              <span>EST. 2017</span>
            </div>
          </div>

          {/* Center/Right: Dominant Architectural Photograph (~60-65% width) */}
          <div
            className="lg:col-span-6 relative flex flex-col items-end transition-transform duration-700 ease-out"
            style={{
              transform: `translate3d(${mouseOffset.x * 0.6}px, ${mouseOffset.y * 0.6}px, 0) perspective(1000px) rotateY(${mouseOffset.x * 0.15}deg)`,
            }}
          >
            <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] max-h-[580px] overflow-hidden border border-[#27343A]/12 shadow-[0_20px_50px_rgba(39,52,58,0.06)] bg-[#ECE8DF] group">
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center transition-transform duration-[1800ms] ease-out group-hover:scale-103"
              />

              {/* Floating Architectural Project Label Bar from Reference */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:left-6 sm:bottom-6 flex items-center justify-between sm:justify-start space-x-4 bg-[#F6F3ED]/95 backdrop-blur-md px-5 py-2.5 border border-[#27343A]/12 shadow-sm text-[10px] uppercase tracking-[0.25em] font-sans text-[#27343A]">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{slide.title}</span>
                  <span className="text-[#66757A]">|</span>
                  <span className="text-[#66757A]">{slide.location}</span>
                </div>
                <div className="flex items-center space-x-3 pl-4 border-l border-[#27343A]/15">
                  <span className="text-[9px] text-[#66757A]">0{currentSlide + 1} / 0{heroSlides.length}</span>
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
                    aria-label="Next slide"
                    className="w-6 h-6 rounded-full border border-[#27343A]/25 flex items-center justify-center hover:bg-[#27343A] hover:text-[#F6F3ED] transition-colors"
                  >
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Delicate Architectural Subtitle */}
            <div className="w-full pt-2.5 flex items-center justify-between text-[9px] uppercase tracking-[0.28em] font-sans text-[#66757A]">
              <span>{slide.sub}</span>
              <span>{slide.category}</span>
            </div>
          </div>

          {/* Far-Right Column: Vertical Architectural Keywords (Col 12) */}
          <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center space-y-6 text-[9px] uppercase tracking-[0.35em] font-sans text-[#66757A]/80 border-l border-[#27343A]/10 py-6 pl-4">
            <span className="hover:text-[#27343A] transition-colors">SPACE</span>
            <span className="hover:text-[#27343A] transition-colors">PEOPLE</span>
            <span className="hover:text-[#27343A] transition-colors">MATERIAL</span>
            <span className="hover:text-[#27343A] transition-colors">LIGHT</span>
            <span className="hover:text-[#27343A] transition-colors">STORY</span>
          </div>
        </div>
      </div>
    </section>
  );
}
