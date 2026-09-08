"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const links = [
    { label: "Overview", href: "/" },
    { label: "Selected Works", href: "/work" },
    { label: "The Studio", href: "/studio" },
    { label: "Disciplines", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3.5 bg-[#160404]/96 backdrop-blur-2xl border-b border-[#dca82b]/20 shadow-[0_10px_35px_rgba(0,0,0,0.7)]"
            : "py-4 sm:py-5 bg-[#180606]/85 backdrop-blur-xl border-b border-white/5 shadow-lg"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group flex flex-col items-start select-none">
            <span className="font-serif text-xl sm:text-2xl font-medium tracking-[0.24em] text-[#f7f6ef] group-hover:text-[#dca82b] transition-colors duration-300">
              ANTAARA
            </span>
            <span className="text-[8px] uppercase tracking-[0.32em] text-[#d3c8bd] font-sans -mt-0.5">
              DESIGN STUDIO · INDORE
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[11px] uppercase tracking-[0.18em] font-sans transition-all duration-300 py-1 ${
                    isActive
                      ? "text-[#dca82b] font-semibold"
                      : "text-[#d3c8bd] hover:text-[#f7f6ef]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#dca82b] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Inquire CTA */}
          <div className="hidden sm:flex items-center space-x-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#dca82b]/40 text-[#dca82b] text-[10px] font-semibold uppercase tracking-[0.18em] bg-[#210707]/60 hover:bg-[#dca82b] hover:text-[#210707] hover:border-[#dca82b] hover:shadow-[0_0_25px_rgba(220,168,43,0.35)] transition-all duration-300 backdrop-blur-md"
            >
              Start a Project <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center gap-2.5 text-[11px] uppercase tracking-[0.16em] text-[#f7f6ef] hover:text-[#dca82b] transition-colors px-2 py-1"
            aria-label="Toggle navigation menu"
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
            <div className="w-5 flex flex-col gap-1">
              <span
                className={`block h-[1.5px] bg-current transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[5.5px]" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] bg-current transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[5.5px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#160404]/98 backdrop-blur-2xl transition-all duration-500 flex flex-col justify-between p-8 sm:p-12 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="pt-20">
          <p className="text-[9px] uppercase tracking-[0.3em] text-[#dca82b] mb-6 font-sans">
            Directory
          </p>
          <nav className="flex flex-col space-y-4">
            {links.map((link, idx) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between py-2 border-b border-white/10 text-2xl font-serif text-[#f7f6ef] hover:text-[#dca82b] hover:pl-2 transition-all"
              >
                <span>{link.label}</span>
                <span className="text-[10px] tracking-widest text-[#d3c8bd] font-sans">
                  0{idx + 1}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="pt-8 border-t border-[#dca82b]/20 space-y-4">
          <div className="flex justify-between text-[10px] uppercase tracking-[0.16em] text-[#d3c8bd] font-sans">
            <span>Indore, MP, India</span>
            <span>Est. 2017</span>
          </div>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block text-center w-full py-3.5 rounded-full bg-[#dca82b] text-[#210707] font-semibold text-[11px] uppercase tracking-[0.18em] shadow-lg shadow-[#dca82b]/20"
          >
            Start a Commission
          </Link>
        </div>
      </div>
    </>
  );
}
