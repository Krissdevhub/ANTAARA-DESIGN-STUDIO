"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServicesSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const services = [
    {
      num: "01",
      title: "INTERIOR DESIGN",
      summary: "Space planning, bespoke material selection, lighting calibration and customized millwork detailing.",
      image: "/images/projects/bcm-planet-luxury-residence/p6_3_1536x1024.jpeg",
    },
    {
      num: "02",
      title: "ARCHITECTURAL INTERIORS",
      summary: "Integrated spatial interventions combining structural clarity, ceiling volumes, and natural light optimization.",
      image: "/images/projects/coffee-by-di-bella/p3_3_1310x1201.png",
    },
    {
      num: "03",
      title: "HOSPITALITY DESIGN",
      summary: "Hotels, fine dining restaurants, nightclubs and experiential destination lounges designed for high retention.",
      image: "/images/projects/hotel-pride-cottages/p7_1_1536x1024.jpeg",
    },
    {
      num: "04",
      title: "COMMERCIAL & HEADQUARTERS",
      summary: "High-spec corporate offices, automotive customer experience centres, cosmetology academies and salons.",
      image: "/images/projects/corporate-office-kolkata/p5_0_1536x1024.jpeg",
    },
    {
      num: "05",
      title: "RESIDENTIAL SANCTUARIES",
      summary: "Personalized multi-bedroom luxury residences and penthouses tailored around generational family comfort.",
      image: "/images/projects/omaxe-mathura-residence/p4_2_1402x1122.png",
    },
    {
      num: "06",
      title: "TURNKEY EXECUTION",
      summary: "End-to-end project management, artisanal vendor curation, strict timeline adherence, and white-glove handover.",
      image: "/images/projects/luxury-bridal-experience-studio/p16_0_1536x1024.jpeg",
    },
  ];

  return (
    <section className="bg-[#F5F1EB] text-[#11110F] py-28 md:py-36 px-6 md:px-12 border-b border-[#DCD0C5] relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#DCD0C5]">
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#8A7D73] font-sans">
              07 — EXPERTISE
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#11110F]">
              FROM CONCEPT <br />
              <span className="italic font-normal text-[#B69A6A]">TO COMPLETION</span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-xs uppercase tracking-[0.25em] text-[#8A7D73] font-sans max-w-xs">
            INTEGRATED DESIGN DISCIPLINES FOR DISCERNING CLIENTS
          </p>
        </div>

        {/* Services Typographic Rows */}
        <div className="divide-y divide-[#DCD0C5] pt-4">
          {services.map((item, idx) => (
            <div
              key={item.num}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="py-10 group transition-all duration-300 relative flex flex-col md:flex-row md:items-center justify-between"
            >
              <div className="flex items-baseline space-x-6 md:space-x-12">
                <span className="font-mono text-sm sm:text-base text-[#8A7D73] group-hover:text-[#B69A6A] transition-colors">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light group-hover:text-[#B69A6A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E5148] max-w-xl font-light mt-2 transition-opacity">
                    {item.summary}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-4 md:mt-0 flex items-center space-x-4">
                <Link
                  href="/services"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#11110F] group-hover:text-[#B69A6A] transition-colors font-medium"
                >
                  <span>SPECIFICATIONS</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

              {/* Floating Hover Image Preview for Desktop */}
              {hoveredIdx === idx && (
                <div className="hidden lg:block absolute right-48 top-1/2 -translate-y-1/2 w-72 h-44 rounded-sm overflow-hidden shadow-2xl pointer-events-none z-20 border border-[#DCD0C5] animate-fadeIn">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/15" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="pt-12 flex justify-between items-center text-xs uppercase tracking-widest text-[#8A7D73]">
          <span>INDIAN & INTERNATIONAL STANDARDS</span>
          <Link
            href="/contact"
            className="text-[#11110F] hover:text-[#B69A6A] transition-colors underline underline-offset-4 font-medium"
          >
            REQUEST STUDIO PROPOSAL →
          </Link>
        </div>
      </div>
    </section>
  );
}
