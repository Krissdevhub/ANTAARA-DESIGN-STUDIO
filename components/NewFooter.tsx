"use client";

import Link from "next/link";
import { ArrowUpRight, Compass, Heart } from "lucide-react";

export default function NewFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#050507] text-[#FBFBFD] pt-20 pb-12 border-t border-[#E6CA85]/20 overflow-hidden">
      {/* Background Architectural Watermark */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-[0.03] select-none">
        <span className="font-cinzel text-[20vw] leading-none text-[#FBFBFD]">
          ANTAARA
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top Atelier Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Brand & Ethos */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-cinzel text-2xl md:text-3xl tracking-[0.25em] text-[#FBFBFD]">
                ANTAARA
              </span>
              <span className="block text-[9px] font-mono tracking-[0.35em] text-[#E6CA85] mt-1">
                DESIGN STUDIO • ARCHITECTURE & INTERIORS
              </span>
            </Link>

            <p className="max-w-sm text-xs text-[#9C9890] font-sans leading-relaxed">
              Founded by Kirti Jaiswal Rajpal. An architectural interior atelier shaping residential sanctuaries, 
              curated hospitality, and enduring commercial environments across India.
            </p>

            <div className="flex items-center space-x-2 text-[10px] font-mono text-[#E6CA85]">
              <Compass className="w-3.5 h-3.5 animate-spin-slow" />
              <span>INDORE ATELIER • LAT 22.7196° N, LONG 75.8577° E</span>
            </div>
          </div>

          {/* Quick Monograph Index */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#E6CA85] block">
              MONOGRAPH INDEX
            </span>
            <ul className="space-y-2 text-xs font-cinzel text-[#9C9890]">
              <li>
                <a href="#masterworks" className="hover:text-[#E6CA85] transition-colors">
                  The Masterworks Archive
                </a>
              </li>
              <li>
                <a href="#manifesto" className="hover:text-[#E6CA85] transition-colors">
                  Manifesto of Spatial Form
                </a>
              </li>
              <li>
                <a href="#material-lab" className="hover:text-[#E6CA85] transition-colors">
                  Materiality & Tactile Lab
                </a>
              </li>
              <li>
                <a href="#solar-simulator" className="hover:text-[#E6CA85] transition-colors">
                  Diurnal Solar Simulator
                </a>
              </li>
              <li>
                <a href="#founder-monograph" className="hover:text-[#E6CA85] transition-colors">
                  Kirti Jaiswal Rajpal
                </a>
              </li>
            </ul>
          </div>

          {/* Practice Typologies */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#E6CA85] block">
              TYPOLOGIES
            </span>
            <ul className="space-y-2 text-xs font-sans text-[#9C9890]">
              <li>Haute Residential Estates</li>
              <li>Signature Dining & Hospitality</li>
              <li>Executive Headquarters</li>
              <li>Boutique Retail & Couture</li>
              <li>Turnkey Interior Architecture</li>
            </ul>
          </div>

          {/* Direct Communication */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#E6CA85] block">
              ATELIER DESK
            </span>
            <div className="space-y-2 text-xs text-[#9C9890] font-sans">
              <p>Indore, Madhya Pradesh, India</p>
              <p>
                <a
                  href="mailto:contact@antaaradesignstudio.com"
                  className="text-[#FBFBFD] hover:text-[#E6CA85] transition-colors"
                >
                  contact@antaaradesignstudio.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+919826000000"
                  className="text-[#E6CA85] hover:underline font-mono"
                >
                  +91 98260 00000
                </a>
              </p>
              <div className="pt-2">
                <Link
                  href="/admin/login"
                  className="text-[10px] font-mono tracking-widest text-[#9C9890]/60 hover:text-[#E6CA85] transition-colors"
                >
                  [ ATELIER ADMIN PORTAL ]
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Attribution & Scroll Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-[#9C9890]">
          <div>
            © {new Date().getFullYear()} ANTAARA DESIGN STUDIO. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center space-x-6">
            <span>INDORE • MATHURA • KOLKATA</span>
            <button
              onClick={scrollToTop}
              className="hover:text-[#E6CA85] transition-colors flex items-center space-x-1"
            >
              <span>BACK TO TOP</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
