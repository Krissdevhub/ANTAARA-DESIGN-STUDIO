"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      num: "01",
      title: "INTERIOR DESIGN",
      scope: "Spatial Planning • Material Palettes • Custom Lighting",
      image: "/images/projects/bcm-planet-luxury-residence/bcm_living_room.jpg",
    },
    {
      num: "02",
      title: "RESIDENTIAL",
      scope: "Private Villas • Penthouses • Multi-Generational Homes",
      image: "/images/projects/omaxe-mathura-residence/p4_2_1402x1122.png",
    },
    {
      num: "03",
      title: "HOSPITALITY",
      scope: "Boutique Resort Cottages • Experiential Dining • Lounges",
      image: "/images/projects/hotel-pride-cottages/p7_1_1536x1024.jpeg",
    },
    {
      num: "04",
      title: "COMMERCIAL",
      scope: "Executive Suites • Automotive Experience Centres • Studios",
      image: "/images/projects/corporate-office-kolkata/p5_0_1536x1024.jpeg",
    },
    {
      num: "05",
      title: "RETAIL",
      scope: "Couture Boutiques • Specialized Salons • Visual Identity",
      image: "/images/projects/luxury-bridal-experience-studio/p16_0_1536x1024.jpeg",
    },
    {
      num: "06",
      title: "TURNKEY EXECUTION",
      scope: "Site Supervision • Precision Millwork • Timely Handover",
      image: "/images/projects/grand-exotica-upendra-dhar/p15_4_1024x1536.jpeg",
    },
  ];

  return (
    <section className="relative w-full py-28 md:py-36 bg-[#EDEAE3] text-[#22201E] select-none border-t border-[#22201E]/8">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 md:px-16">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#22201E]/12 pb-4 mb-16 sm:mb-20">
          <span className="text-[10px] uppercase tracking-[0.35em] font-sans text-[#6E6862]">
            06 — DISCIPLINES
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-[#6E6862]">
            END-TO-END EXECUTION
          </span>
        </div>

        <div className="mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#22201E]">
            WHAT <span className="italic text-[#6E6862]">WE DO.</span>
          </h2>
        </div>

        {/* Elegant Typographic Rows */}
        <div className="border-t border-[#22201E]/12">
          {services.map((srv, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <Link
                key={srv.num}
                href="/services"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative block border-b border-[#22201E]/10 py-7 sm:py-9 transition-all duration-300 hover:pl-3"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex items-baseline space-x-6 sm:space-x-10 transition-transform duration-300">
                    <span className="text-xs font-sans text-[#6E6862]">
                      {srv.num}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#22201E] group-hover:text-[#3157D5] transition-colors">
                      {srv.title}
                    </h3>
                  </div>

                  <div className="mt-2 md:mt-0 flex items-center space-x-8 pl-10 md:pl-0">
                    <span className="text-[11px] uppercase tracking-wider font-sans text-[#6E6862] hidden sm:inline-block max-w-xs text-right">
                      {srv.scope}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#6E6862] group-hover:text-[#22201E] group-hover:translate-x-1 transition-all" />
                  </div>
                </div>

                {/* Floating Preview Thumbnail on Hover */}
                {isHovered && (
                  <div className="hidden lg:block absolute right-36 top-1/2 -translate-y-1/2 w-48 h-32 overflow-hidden border border-[#22201E]/15 shadow-xl pointer-events-none z-30 animate-fadeIn bg-white">
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
