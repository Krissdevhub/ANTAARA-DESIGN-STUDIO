"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "WORK", href: "/work" },
    { name: "ABOUT", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "JOURNAL", href: "/journal" },
    { name: "CONTACT", href: "/contact" },
  ];

  const isDarkHero = pathname === "/" || pathname.startsWith("/work/");

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-[#11110F]/90 backdrop-blur-md py-4 text-[#F5F1EB] border-b border-[#22201E]/80 shadow-lg"
            : isDarkHero
            ? "bg-gradient-to-b from-black/80 via-black/30 to-transparent py-7 text-[#F5F1EB]"
            : "bg-transparent py-7 text-[#11110F]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Studio Brand Logo */}
          <Link
            href="/"
            className="group flex flex-col items-start leading-none tracking-tight"
          >
            <span className="font-serif text-2xl md:text-3xl font-light tracking-[0.2em] transition-colors group-hover:text-[#B69A6A]">
              ANTAARA
            </span>
            <span className="text-[9px] uppercase tracking-[0.38em] text-[#8A7D73] font-sans mt-1 group-hover:text-[#B69A6A] transition-colors">
              DESIGN STUDIO
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-xs tracking-[0.22em] font-sans font-medium uppercase py-1 transition-colors duration-300 ${
                    isActive
                      ? "text-[#B69A6A]"
                      : isScrolled || isDarkHero
                      ? "text-[#EDE7DF]/85 hover:text-[#B69A6A]"
                      : "text-[#22201E]/85 hover:text-[#B69A6A]"
                  }`}
                >
                  {item.name}
                  {/* Subtle animated underline */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1px] bg-[#B69A6A] transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Far Right Action & Mobile Toggle */}
          <div className="flex items-center space-x-5">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] px-5 py-2.5 rounded-full border border-[#B69A6A]/60 hover:border-[#B69A6A] hover:bg-[#B69A6A] hover:text-[#11110F] transition-all duration-500 font-sans"
              data-cursor-text="INQUIRE"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#F5F1EB]" />
              ) : (
                <Menu
                  className={`w-6 h-6 ${
                    isScrolled || isDarkHero ? "text-[#F5F1EB]" : "text-[#11110F]"
                  }`}
                />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#11110F] text-[#F5F1EB] transition-all duration-700 ease-in-out flex flex-col justify-between p-8 md:p-16 lg:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-6"
        }`}
      >
        <div className="pt-20">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#8A7D73] mb-6">
            NAVIGATION
          </p>
          <div className="flex flex-col space-y-6">
            {navLinks.map((item, idx) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-serif text-3xl sm:text-4xl text-[#EDE7DF] hover:text-[#B69A6A] transition-colors flex items-center justify-between"
              >
                <span>{item.name}</span>
                <span className="text-xs font-sans text-[#8A7D73]">0{idx + 1}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-[#22201E] pt-8 space-y-4">
          <div className="flex flex-col space-y-1 text-xs text-[#8A7D73]">
            <p className="uppercase tracking-widest text-[#EDE7DF]">Kirti Jaiswal Rajpal</p>
            <p>Founder & Principal Designer • Indore, India</p>
            <p>contact@antaaradesignstudio.com</p>
          </div>

          <Link
            href="/contact"
            className="block w-full text-center py-3 bg-[#B69A6A] text-[#11110F] text-xs uppercase tracking-[0.25em] font-medium"
          >
            START A CONVERSATION
          </Link>
        </div>
      </div>
    </>
  );
}
