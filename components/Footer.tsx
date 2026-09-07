import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#11110F] text-[#F5F1EB] pt-24 pb-12 border-t border-[#22201E] relative overflow-hidden">
      {/* Subtle architectural background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B69A6A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-[#22201E]">
          {/* Main Statement */}
          <div className="lg:col-span-7 space-y-8">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#B69A6A] font-sans">
              ANTAARA DESIGN STUDIO
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-[1.08] text-[#EDE7DF]">
              Spaces designed to be lived in, <br />
              <span className="italic font-normal text-[#B69A6A]">remembered</span> and felt.
            </h2>
            <p className="text-sm md:text-base text-[#8A7D73] max-w-xl font-light leading-relaxed">
              Based in Indore, Antaara Design Studio crafts refined residential,
              hospitality, commercial, and retail environments that unite intentional
              architecture, handcrafted materiality, and bespoke spatial storytelling.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.25em] px-7 py-3.5 bg-[#B69A6A] text-[#11110F] hover:bg-[#D5C2A0] transition-colors font-medium rounded-full"
                data-cursor-text="INQUIRE"
              >
                <span>INITIATE A CONVERSATION</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links & Information */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 sm:gap-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#8A7D73] mb-6 font-sans">
                EXPLORE
              </p>
              <ul className="space-y-3.5 text-xs tracking-[0.18em] uppercase text-[#EDE7DF]/80 font-sans">
                <li>
                  <Link href="/work" className="hover:text-[#B69A6A] transition-colors">
                    Selected Works
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#B69A6A] transition-colors">
                    The Studio & Founder
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#B69A6A] transition-colors">
                    Capabilities & Services
                  </Link>
                </li>
                <li>
                  <Link href="/journal" className="hover:text-[#B69A6A] transition-colors">
                    Journal & Perspectives
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#B69A6A] transition-colors">
                    Contact Studio
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#8A7D73] mb-6 font-sans">
                STUDIO & FOUNDER
              </p>
              <div className="space-y-4 text-xs text-[#8A7D73] font-light leading-relaxed">
                <div>
                  <p className="text-[#EDE7DF] font-serif text-base font-normal">
                    Kirti Jaiswal Rajpal
                  </p>
                  <p className="text-[11px] tracking-wider uppercase text-[#B69A6A]">
                    Founder & Principal
                  </p>
                </div>
                <p>
                  Indore, Madhya Pradesh
                  <br />
                  India
                </p>
                <p className="text-[#EDE7DF]/90 font-mono text-[11px]">
                  contact@antaaradesignstudio.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A7D73] space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-6">
            <span>© {new Date().getFullYear()} ANTAARA DESIGN STUDIO</span>
            <span className="hidden sm:inline">•</span>
            <span>KIRTI JAISWAL RAJPAL</span>
          </div>

          <div className="flex items-center space-x-6 text-[11px] tracking-widest uppercase">
            <Link href="/about" className="hover:text-[#B69A6A] transition-colors">
              Privacy & Disclosures
            </Link>
            <Link
              href="/admin/login"
              className="text-[#5E5148] hover:text-[#B69A6A] transition-colors"
            >
              Studio Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
