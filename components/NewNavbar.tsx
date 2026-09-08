"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export default function NewNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [indoreTime, setIndoreTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);

    const updateTime = () => {
      const now = new Date();
      setIndoreTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }) + " IST"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: "Archive", href: "#masterworks" },
    { label: "Manifesto", href: "#manifesto" },
    { label: "Materiality", href: "#material-lab" },
    { label: "Solar Studio", href: "#solar-simulator" },
    { label: "The Atelier", href: "#founder-monograph" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[#08080A]/90 backdrop-blur-xl border-b border-[#E6CA85]/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "py-6 bg-gradient-to-b from-[#08080A]/90 via-[#08080A]/40 to-transparent border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Studio Monogram / Brand */}
          <Link href="/" className="group flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="font-cinzel text-xl md:text-2xl tracking-[0.25em] text-[#FBFBFD] group-hover:text-[#E6CA85] transition-colors">
                ANTAARA
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E6CA85] animate-pulse" />
            </div>
            <span className="text-[9px] uppercase tracking-[0.35em] text-[#9C9890] font-sans">
              ATELIER D&apos;ARCHITECTURE • INDORE
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-[11px] uppercase tracking-[0.25em] text-[#9C9890]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 hover:text-[#E6CA85] transition-colors font-medium group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#E6CA85] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action: Time & Commission CTA */}
          <div className="hidden sm:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-[10px] font-mono tracking-widest text-[#9C9890]/80 border-r border-[#E6CA85]/20 pr-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{indoreTime || "INDORE"}</span>
            </div>

            <a
              href="#commission-concierge"
              className="group relative inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-[#E6CA85]/40 text-[#E6CA85] text-[10px] uppercase tracking-[0.25em] overflow-hidden transition-all duration-300 hover:border-[#E6CA85] hover:shadow-[0_0_20px_rgba(230,202,133,0.3)] bg-[#101014]/60 backdrop-blur-md"
            >
              <Sparkles className="w-3 h-3 text-[#E6CA85] group-hover:rotate-12 transition-transform" />
              <span className="relative z-10 font-medium">INQUIRE</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-[#FBFBFD] hover:text-[#E6CA85] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Architectural Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#08080A]/98 backdrop-blur-2xl transition-all duration-500 flex flex-col justify-between p-8 pt-28 lg:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="space-y-6">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#E6CA85]">
            [ MONOGRAPH INDEX ]
          </p>
          <nav className="flex flex-col space-y-5">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between text-2xl font-cinzel text-[#FBFBFD] hover:text-[#E6CA85] transition-colors border-b border-white/5 pb-3"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-[#9C9890]">0{idx + 1}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-[#E6CA85]/20 space-y-4">
          <div className="flex items-center justify-between text-xs text-[#9C9890]">
            <span>INDORE ATELIER</span>
            <span className="font-mono text-[#E6CA85]">{indoreTime}</span>
          </div>
          <a
            href="#commission-concierge"
            onClick={() => setMobileOpen(false)}
            className="w-full py-3.5 rounded-full bg-[#E6CA85] text-[#08080A] text-center font-cinzel tracking-widest text-xs font-semibold block shadow-[0_0_25px_rgba(230,202,133,0.4)]"
          >
            COMMISSION A RESIDENCE / SPACE
          </a>
        </div>
      </div>
    </>
  );
}
