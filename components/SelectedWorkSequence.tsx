"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function SelectedWorkSequence() {
  const [hoveredProject, setHoveredProject] = useState<{
    title: string;
    image: string;
  } | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="work"
      onMouseMove={handleMouseMove}
      className="relative w-full py-28 md:py-40 bg-[#F7F5F0] text-[#22201E] select-none border-t border-[#22201E]/8"
    >
      {/* Floating Cursor Image Preview */}
      {hoveredProject && (
        <div
          className="fixed pointer-events-none z-50 hidden lg:block transition-transform duration-75 ease-out"
          style={{
            left: `${cursorPos.x + 20}px`,
            top: `${cursorPos.y - 110}px`,
          }}
        >
          <div className="w-56 h-36 relative overflow-hidden shadow-2xl border border-[#22201E]/15 bg-[#EDEAE3] animate-fadeIn">
            <Image
              src={hoveredProject.image}
              alt={hoveredProject.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#22201E]/40 to-transparent" />
            <div className="absolute bottom-2 left-2 text-[9px] uppercase tracking-widest text-[#FFFFFF] bg-[#22201E]/80 px-2.5 py-1">
              VIEW →
            </div>
          </div>
        </div>
      )}

      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 md:px-16">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#22201E]/12 pb-4 mb-20 sm:mb-28">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-[0.35em] font-sans text-[#6E6862] block">
              03 — SELECTED WORK
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#22201E]">
              ARCHITECTURAL <span className="italic text-[#6E6862]">PORTFOLIO</span>
            </h2>
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-[#6E6862] hidden sm:block">
            01 — 07 ART-DIRECTED SPACES
          </span>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* PROJECT 01: COFFEE BY DI BELLA (Full-width image, metadata above, title below) */}
        {/* ------------------------------------------------------------- */}
        <div className="mb-32 sm:mb-44">
          <Link
            href="/work/coffee-by-di-bella"
            data-cursor="view"
            onMouseEnter={() =>
              setHoveredProject({
                title: "Coffee by Di Bella",
                image: "/images/projects/coffee-by-di-bella/p3_2_627x627.png",
              })
            }
            onMouseLeave={() => setHoveredProject(null)}
            className="group block space-y-4"
          >
            {/* Metadata Above */}
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-[#6E6862] font-sans">
              <span>01 / 07 • HOSPITALITY</span>
              <span>INDORE, MADHYA PRADESH</span>
            </div>

            {/* Full-width Image */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden border border-[#22201E]/12 shadow-lg bg-[#EDEAE3]">
              <Image
                src="/images/projects/coffee-by-di-bella/p3_2_627x627.png"
                alt="Coffee by Di Bella Interior Atmosphere"
                fill
                sizes="100vw"
                className="object-cover object-center transition-transform duration-[1800ms] group-hover:scale-102"
              />
            </div>

            {/* Title Below */}
            <div className="flex items-baseline justify-between pt-2">
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#22201E] group-hover:text-[#3157D5] transition-colors">
                Coffee by Di Bella
              </h3>
              <div className="flex items-center space-x-1.5 text-[10px] uppercase tracking-[0.2em] font-sans text-[#6E6862] group-hover:text-[#22201E] transition-colors">
                <span>VIEW CASE STUDY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* PROJECT 02: RESIDENCE AT OMAXE (Vertical image far left, title offset right) */}
        {/* ------------------------------------------------------------- */}
        <div className="mb-32 sm:mb-44 border-t border-[#22201E]/8 pt-16">
          <Link
            href="/work/residence-at-omaxe-mathura"
            data-cursor="view"
            onMouseEnter={() =>
              setHoveredProject({
                title: "Residence at Omaxe",
                image: "/images/projects/omaxe-mathura-residence/p4_2_1402x1122.png",
              })
            }
            onMouseLeave={() => setHoveredProject(null)}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
          >
            {/* Vertical Image Aligned Left (Col 1-5) */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden border border-[#22201E]/12 shadow-lg bg-[#EDEAE3]">
                <Image
                  src="/images/projects/omaxe-mathura-residence/p4_2_1402x1122.png"
                  alt="Residence at Omaxe Mathura"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-[1800ms] group-hover:scale-103"
                />
              </div>
            </div>

            {/* Title Offset to the Right (Col 6-12) */}
            <div className="lg:col-span-7 space-y-6 lg:pl-8">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#6E6862] font-sans">
                02 / 07 • RESIDENTIAL ARCHITECTURE
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#22201E] group-hover:text-[#3157D5] transition-colors leading-tight">
                Residence at Omaxe, Mathura
              </h3>

              <p className="text-sm text-[#6E6862] font-sans font-light leading-relaxed max-w-lg">
                Refined multi-generational living crafted with open-pore travertine, fluted oak millwork, and balanced natural daylighting.
              </p>

              <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] font-sans text-[#22201E] group-hover:text-[#3157D5] border-b border-current pb-0.5 transition-colors">
                <span>EXPLORE DETAILS</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </div>
          </Link>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* PROJECT 03: HOTEL PRIDE (Two photographs with large whitespace between) */}
        {/* ------------------------------------------------------------- */}
        <div className="mb-32 sm:mb-44 border-t border-[#22201E]/8 pt-16">
          <Link
            href="/work/hotel-pride-cottages"
            data-cursor="view"
            onMouseEnter={() =>
              setHoveredProject({
                title: "Hotel Pride Cottages",
                image: "/images/projects/hotel-pride-cottages/p7_1_1536x1024.jpeg",
              })
            }
            onMouseLeave={() => setHoveredProject(null)}
            className="group block space-y-6"
          >
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#6E6862] font-sans block">
                  03 / 07 • BOUTIQUE RESORT
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#22201E] group-hover:text-[#3157D5] transition-colors mt-1">
                  Hotel Pride Luxury Cottages
                </h3>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#6E6862] font-sans hidden sm:inline">
                INDORE
              </span>
            </div>

            {/* Two images with generous whitespace */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-center pt-4">
              <div className="md:col-span-7">
                <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#22201E]/12 shadow-md bg-[#EDEAE3]">
                  <Image
                    src="/images/projects/hotel-pride-cottages/p7_1_1536x1024.jpeg"
                    alt="Hotel Pride Luxury Cottage Suite"
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover object-center transition-transform duration-[1800ms] group-hover:scale-102"
                  />
                </div>
              </div>

              <div className="md:col-span-5 md:pl-6">
                <div className="relative aspect-[4/5] w-[85%] mx-auto overflow-hidden border border-[#22201E]/12 shadow-md bg-[#EDEAE3]">
                  <Image
                    src="/images/projects/hotel-pride-cottages/p7_2_750x1000.jpeg"
                    alt="Hotel Pride Cottage Architecture Detail"
                    fill
                    sizes="(max-width: 1024px) 80vw, 35vw"
                    className="object-cover object-center transition-transform duration-[1800ms] group-hover:scale-103"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* PROJECT 04: TIFFANY BLUES (Full bleed / panoramic atmosphere) */}
        {/* ------------------------------------------------------------- */}
        <div className="mb-32 sm:mb-44 border-t border-[#22201E]/8 pt-16">
          <Link
            href="/work/tiffany-blues-fine-dining"
            data-cursor="view"
            onMouseEnter={() =>
              setHoveredProject({
                title: "Tiffany Blues",
                image: "/images/projects/tiffany-blues-fine-dining/p10_1_1536x1024.jpeg",
              })
            }
            onMouseLeave={() => setHoveredProject(null)}
            className="group block space-y-4"
          >
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-[#6E6862] font-sans">
              <span>04 / 07 • EXPERIENTIAL DINING</span>
              <span>INDORE</span>
            </div>

            <div className="relative aspect-[16/9] sm:aspect-[2.3/1] w-full overflow-hidden border border-[#22201E]/12 shadow-lg bg-[#EDEAE3]">
              <Image
                src="/images/projects/tiffany-blues-fine-dining/p10_1_1536x1024.jpeg"
                alt="Tiffany Blues Fine Dining Interior by Antaara"
                fill
                sizes="100vw"
                className="object-cover object-center transition-transform duration-[1800ms] group-hover:scale-102"
              />
            </div>

            <div className="flex items-baseline justify-between pt-1">
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#22201E] group-hover:text-[#3157D5] transition-colors">
                Tiffany Blues Fine Dining
              </h3>
              <div className="flex items-center space-x-1.5 text-[10px] uppercase tracking-[0.2em] font-sans text-[#6E6862] group-hover:text-[#22201E] transition-colors">
                <span>VIEW CASE STUDY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* PROJECT 05: VINOD DHAR'S RESIDENCE (Large residential photograph) */}
        {/* ------------------------------------------------------------- */}
        <div className="border-t border-[#22201E]/8 pt-16">
          <Link
            href="/work/vinod-dhar-residence"
            data-cursor="view"
            onMouseEnter={() =>
              setHoveredProject({
                title: "Vinod Dhar's Residence",
                image: "/images/projects/vinod-dhar-residence/vinod_living.jpg",
              })
            }
            onMouseLeave={() => setHoveredProject(null)}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
          >
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/11] w-full overflow-hidden border border-[#22201E]/12 shadow-lg bg-[#EDEAE3]">
                <Image
                  src="/images/projects/vinod-dhar-residence/vinod_living.jpg"
                  alt="Vinod Dhar Residence, Bengali Square, Indore"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center transition-transform duration-[1800ms] group-hover:scale-102"
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#6E6862] font-sans block">
                05 / 07 • PRIVATE RESIDENCE
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#22201E] group-hover:text-[#3157D5] transition-colors leading-snug">
                Vinod Dhar’s Residence
              </h3>

              <blockquote className="font-serif text-lg italic text-[#6E6862] border-l border-[#22201E]/30 pl-4">
                “Every space has been created with care, comfort and purpose.”
              </blockquote>

              <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] font-sans text-[#22201E] group-hover:text-[#3157D5] border-b border-current pb-0.5 transition-colors">
                <span>VIEW CASE STUDY</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
