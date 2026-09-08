"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#160404] text-[#f7f6ef] border-t border-[#dca82b]/15 pt-20 pb-12 px-6 sm:px-10 md:px-16 overflow-hidden select-none">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#dca82b]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#751010]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10 space-y-16">
        {/* Top Section: Brand Statement & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10 items-end">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#dca82b] font-sans font-medium block">
              Architectural Practice · Indore, India
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#f7f6ef] leading-tight tracking-tight">
              Shaping spaces with <span className="italic text-[#dca82b]">purpose,</span> warmth, and timeless craft.
            </h2>
            <p className="text-sm font-sans text-[#d3c8bd] max-w-xl leading-relaxed">
              At Antaara Design Studio, we believe every space tells a story. We specialize in bespoke residential, commercial, hospitality, and institutional interiors across India.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row gap-4 lg:justify-end items-start sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#dca82b] text-[#210707] font-semibold text-xs uppercase tracking-[0.18em] shadow-lg shadow-[#dca82b]/20 hover:bg-[#edd277] transition-all duration-300"
            >
              Start a Commission <ArrowUpRight size={14} />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 text-[#f7f6ef] text-xs uppercase tracking-[0.16em] hover:border-[#dca82b] hover:text-[#dca82b] transition-all duration-300"
            >
              Browse Archive
            </Link>
          </div>
        </div>

        {/* Middle Section: 4 Distinct Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-xs font-sans">
          {/* Column 1: Studio Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 flex-shrink-0">
                <Image
                  src="/images/brand/logo.png"
                  alt="Antaara Emblem"
                  fill
                  className="object-contain drop-shadow-[0_0_12px_rgba(220,168,43,0.35)]"
                />
              </div>
              <div>
                <p className="font-display text-2xl font-normal tracking-[0.24em] text-[#f7f6ef] leading-tight">
                  ANTAARA
                </p>
                <p className="text-[8.5px] uppercase tracking-[0.28em] text-[#d3c8bd]">
                  DESIGN STUDIO
                </p>
              </div>
            </div>
            <p className="text-[#c7bcb1] leading-relaxed text-[12px]">
              Founded by <strong className="text-[#f7f6ef] font-medium">Kirti Jaiswal Rajpal</strong>. An Indore-based practice bringing together spatial planning, materiality, and turnkey craftsmanship.
            </p>
            <p className="text-[11px] text-[#dca82b] tracking-wider uppercase">
              Indore · Kolkata · Mathura · Satna
            </p>
          </div>

          {/* Column 2: Disciplines */}
          <div className="space-y-3">
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#dca82b] font-medium">
              Disciplines
            </p>
            <ul className="space-y-2 text-[#d3c8bd]">
              <li>
                <Link href="/work?category=Residential" className="hover:text-[#f7f6ef] transition-colors">
                  Private Residences & Luxury Villas
                </Link>
              </li>
              <li>
                <Link href="/work?category=Hospitality" className="hover:text-[#f7f6ef] transition-colors">
                  Hospitality, Dining & Nightlife
                </Link>
              </li>
              <li>
                <Link href="/work?category=Commercial" className="hover:text-[#f7f6ef] transition-colors">
                  Corporate Offices & Brand Studios
                </Link>
              </li>
              <li>
                <Link href="/work?category=Institutional" className="hover:text-[#f7f6ef] transition-colors">
                  Educational & Institutional Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#f7f6ef] transition-colors">
                  Full Turnkey Architecture & Execution
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Directory */}
          <div className="space-y-3">
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#dca82b] font-medium">
              Directory
            </p>
            <ul className="space-y-2 text-[#d3c8bd]">
              <li>
                <Link href="/" className="hover:text-[#f7f6ef] transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-[#f7f6ef] transition-colors">
                  Selected Works Archive
                </Link>
              </li>
              <li>
                <Link href="/studio" className="hover:text-[#f7f6ef] transition-colors">
                  The Studio & Founder
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#f7f6ef] transition-colors">
                  Process & Disciplines
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#f7f6ef] transition-colors">
                  Inquiries & Consultations
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Studio Coordinates */}
          <div className="space-y-3">
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#dca82b] font-medium">
              Coordinates
            </p>
            <div className="space-y-2 text-[#d3c8bd]">
              <p className="text-[#f7f6ef] font-medium">Indore, Madhya Pradesh, India</p>
              <p>
                <a
                  href="mailto:antaaradesignstudio@gmail.com"
                  className="hover:text-[#dca82b] transition-colors"
                >
                  antaaradesignstudio@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+919243051598"
                  className="hover:text-[#dca82b] transition-colors"
                >
                  +91 92430 51598
                </a>
              </p>
              <p className="text-[11px] text-[#a89f91] pt-1">
                Mon — Sat: 10:00 — 19:00 IST
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#a89f91] font-sans">
          <p>© {new Date().getFullYear()} Antaara Design Studio. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/admin/login"
              className="text-[#a89f91] hover:text-[#dca82b] transition-colors uppercase tracking-wider text-[10px]"
            >
              Studio Access
            </Link>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="hover:text-[#f7f6ef] transition-colors cursor-pointer uppercase tracking-wider text-[10px]"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
