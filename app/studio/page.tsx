import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Quote, MapPin } from "lucide-react";

export const metadata = {
  title: "The Studio & Founder Monograph | Antaara Design Studio",
  description:
    "An architectural monograph on Antaara Design Studio and founder Kirti Jaiswal Rajpal. Interior architecture practice based in Indore, shaping residential, hospitality, and commercial commissions across India.",
};

export default function StudioPage() {
  const milestones = [
    { number: "30+", label: "Architectural Commissions", detail: "Residential, hospitality, commercial & institutional projects" },
    { number: "04", label: "States & Regions", detail: "Commissions completed in Indore, Kolkata, Mathura & Satna" },
    { number: "08+", label: "Years of Practice", detail: "Dedicated to spatial clarity, materiality & turnkey craftsmanship" },
    { number: "100%", label: "Turnkey Accountability", detail: "From preliminary spatial concept through to white-glove keys handover" },
  ];

  const geographicalCommissions = [
    {
      region: "Indore, Madhya Pradesh",
      role: "Studio Headquarters & Flagship Portfolio",
      projects: [
        "BCM Planet 3 BHK Luxury Residence (Mr. Ruchir)",
        "Sky Luxuria 4 BHK High-Rise Residence (Nipania)",
        "Grand Exotica Residence (Dr. Upendra Dhar)",
        "Grand Exotica 3 BHK (Mr. Sameer Fegade)",
        "Hotel Pride Luxury Cottages (Bypass Road)",
        "After Hours Nightclub & Lounge (Hotel Pride)",
        "Coffee by Di Bella (Exterior & Double-Height)",
        "Tiffany Blues Fine Dining Restaurant",
        "Hotel Pride Convention Centre",
        "Vinod Dhar Residence (Bengali Square)",
        "Bengali Square 2 BHK (Mr. & Mrs. Darda)",
        "Platinum Paradise 3 BHK Residence",
        "Arihant Capital Master & Kids' Suite (Mr. Arpit Jain)",
        "Commercial Beauty Academy (Ms. Kamna Joshi)",
        "Luxury Bridal Experience Studio (New Palasia)",
        "Interiors Selfie Salon (C21 Mall)",
      ],
    },
    {
      region: "Mathura, Uttar Pradesh",
      role: "Heritage & Celebrity Commission",
      projects: [
        "Residence at Omaxe (With Hema Malini Ji)",
        "Bespoke Artistic Commission & Tribute to Dharmendra Ji",
        "Full Turnkey Villa Architecture & Custom Millwork",
      ],
    },
    {
      region: "Kolkata, West Bengal",
      role: "Executive Corporate Headquarters",
      projects: [
        "Global Automotive Corporate Headquarters",
        "Executive Boardrooms & Acoustic Workspaces",
        "Brand Pavilion & Corporate Lounge",
      ],
    },
    {
      region: "Satna & Kshipra, MP",
      role: "Commercial & Educational Campuses",
      projects: [
        "Luxury Automotive Dealership Pavilion (Satna)",
        "Automotive Customer Experience Centre (Indore)",
        "Delhi World Public School Campus (Kshipra)",
      ],
    },
  ];

  return (
    <div className="bg-[#180606] text-[#f7f6ef] min-h-screen pt-36 pb-36 px-6 sm:px-10 md:px-16 select-none">
      <div className="max-w-[1440px] mx-auto space-y-28">
        {/* ═══════════════════════════════════════════════════════════
            01. EDITORIAL MONOGRAPH OPENING
            ═══════════════════════════════════════════════════════════ */}
        <section className="border-b border-white/10 pb-16 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/brand/logo.png"
                alt="Antaara Emblem"
                width={28}
                height={28}
                className="w-7 h-7 object-contain drop-shadow-[0_0_10px_rgba(220,168,43,0.3)]"
              />
              <span className="w-8 h-[1px] bg-[#dca82b]" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#dca82b] font-sans font-medium">
                Atelier Monograph · Vol. 01
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#d3c8bd] font-sans">
              Indore · Kolkata · Mathura · Satna
            </span>
          </div>

          <div className="max-w-4xl space-y-6">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#f7f6ef] leading-[1.04] tracking-tight">
              Architecture is not merely enclosing space; it is the curation of <span className="italic text-[#dca82b]">emotional atmosphere.</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base font-sans text-[#d3c8bd] max-w-2xl font-light leading-relaxed">
              Founded in Indore by interior architect Kirti Jaiswal Rajpal, Antaara Design Studio operates as a multidisciplinary practice balancing classical proportion with contemporary tactile materiality.
            </p>
          </div>

          {/* Practice Parameters Bar */}
          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 text-xs font-sans">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#dca82b]">Principal</p>
              <p className="text-[#f7f6ef] font-medium mt-0.5">Kirti Jaiswal Rajpal</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#dca82b]">Headquarters</p>
              <p className="text-[#f7f6ef] font-medium mt-0.5">Indore, Madhya Pradesh</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#dca82b]">Scope of Practice</p>
              <p className="text-[#f7f6ef] font-medium mt-0.5">Turnkey Interior Architecture</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#dca82b]">Commission Reach</p>
              <p className="text-[#f7f6ef] font-medium mt-0.5">Pan-India Commissions</p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            02. THE FOUNDER'S DOSSIER (REAL PDF FOUNDER'S NOTE)
            ═══════════════════════════════════════════════════════════ */}
        <section className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Founder Portrait Spread */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#dca82b]/30 shadow-2xl bg-[#200808]">
                <Image
                  src="/images/founder/kirti-portrait-editorial-final.jpg"
                  alt="Kirti Jaiswal Rajpal — Founder, Antaara Design Studio"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover brightness-[0.95]"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#180606]/85 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center justify-between text-[9px] uppercase tracking-[0.2em] font-sans">
                  <span className="text-[#f7f6ef] font-medium">KIRTI JAISWAL RAJPAL</span>
                  <span className="text-[#dca82b]">FOUNDER</span>
                </div>
              </div>
              <p className="text-[11px] text-[#a89f91] font-sans italic text-center">
                Photographed at the Antaara Studio, Indore
              </p>
            </div>

            {/* Right: Founder's Note & Personal Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#dca82b] font-sans font-medium block">
                  Founder&apos;s Monograph · Page 02
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#f7f6ef] leading-tight">
                  “At Antaara Design Studio, we believe every space <span className="italic text-[#dca82b]">tells a story.”</span>
                </h2>
              </div>

              <blockquote className="font-serif italic text-xl sm:text-2xl text-[#f7f6ef]/90 font-light leading-relaxed border-l-2 border-[#dca82b] pl-6 py-1">
                &ldquo;The most memorable homes are those that quietly become a part of every cherished memory.&rdquo;
              </blockquote>

              <div className="space-y-4 text-xs sm:text-sm text-[#d3c8bd] font-sans font-light leading-relaxed">
                <p>
                  Antaara Design Studio is a creative interior design firm based in Indore, dedicated to transforming spaces with innovative ideas, functional planning, and timeless aesthetics. We specialize in designing residential, commercial, hospitality, and retail interiors that perfectly balance style, comfort, and practicality.
                </p>
                <p>
                  Driven by a passion for excellence and attention to detail, our team works closely with every client to understand their vision and turn it into reality. From concept development to project execution, we ensure a seamless design journey with a strong focus on quality, creativity, and timely delivery.
                </p>
                <p>
                  Our commitment to customer satisfaction, personalized solutions, and modern design principles has earned us the trust of clients across a wide range of projects. Whether it’s creating elegant homes, sophisticated commercial spaces, or luxurious hospitality interiors, we strive to deliver designs that inspire and leave a lasting impression.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="font-serif text-lg text-[#f7f6ef]">KIRTI JAISWAL RAJPAL</p>
                  <p className="text-[10px] uppercase tracking-wider text-[#dca82b] font-sans">
                    Founder & Principal Designer
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-wider text-[#d3c8bd] font-sans">
                    Indore, Madhya Pradesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            03. CELEBRITY PATRONAGE: A PRIVILEGE OF TRUST (PDF PAGE 4)
            ═══════════════════════════════════════════════════════════ */}
        <section className="p-8 sm:p-12 lg:p-16 rounded-2xl bg-[#1c0606] border border-[#dca82b]/25 space-y-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#dca82b]" />
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#dca82b] font-medium font-sans">
                  Archival Feature · Page 04
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#f7f6ef] leading-tight">
                A Legacy of Design & Trust <br />
                <span className="italic text-[#dca82b]">With Hema Malini Ji</span>
              </h2>

              <blockquote className="font-serif italic text-lg sm:text-xl text-[#f7f6ef]/90 font-light leading-relaxed border-l-2 border-[#dca82b] pl-5">
                &ldquo;At Antaara Design Studio every project is a story, every space is an emotion, and every detail reflects timeless craftsmanship.&rdquo;
              </blockquote>

              <p className="text-xs sm:text-sm text-[#d3c8bd] font-sans leading-relaxed font-light">
                Commissioned for the landmark residence at Omaxe, Mathura, Antaara Design Studio orchestrated an architectural interior reflecting artistic majesty and serene intimacy. The commission included dedicated custom artwork tributes celebrating the legacy of Dharmendra Ji, crafted with hand-rubbed metals, custom joinery, and private sanctuary zoning.
              </p>

              <div className="pt-2">
                <Link
                  href="/work/residence-at-omaxe-mathura"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#dca82b] hover:text-[#edd277] font-semibold transition-colors"
                >
                  Explore The Mathura Case Study <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-[#dca82b]/20 shadow-xl">
                <Image
                  src="/images/projects/omaxe-mathura-residence/p4_2_1402x1122.png"
                  alt="Kirti Jaiswal Rajpal with Hema Malini Ji"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-[#dca82b]/20 shadow-xl mt-6">
                <Image
                  src="/images/projects/omaxe-mathura-residence/p4_1_1032x1172.jpeg"
                  alt="Artwork Tribute to Dharmendra Ji"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            04. THE FOUR ARCHITECTURAL TENETS (Treatise, not generic cards)
            ═══════════════════════════════════════════════════════════ */}
        <section className="space-y-12 border-t border-white/10 pt-16">
          <div className="max-w-2xl space-y-3">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#dca82b] font-sans font-medium block">
              Architectural Treatise
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#f7f6ef]">
              Principles that govern our <span className="italic text-[#dca82b]">craft.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#d3c8bd] font-sans leading-relaxed font-light">
              We do not impose superficial decoration. Every architectural decision is rooted in spatial logic, sensory materiality, and everyday function.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-[#200808] border border-white/10 space-y-4">
              <span className="font-serif text-3xl text-[#dca82b] block">I</span>
              <h3 className="font-serif text-2xl text-[#f7f6ef] font-light">Spatial Volumetrics & Circadian Daylight</h3>
              <p className="text-xs sm:text-sm text-[#d3c8bd] font-sans leading-relaxed font-light">
                Before drafting partitions or selecting stone, we study the solar orientation, daylight vectors, and natural ventilation of the envelope. We design spaces that feel alive at sunrise, serene at dusk, and dramatic by nightfall.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#200808] border border-white/10 space-y-4">
              <span className="font-serif text-3xl text-[#dca82b] block">II</span>
              <h3 className="font-serif text-2xl text-[#f7f6ef] font-light">Material Honesty & Artisanal Patina</h3>
              <p className="text-xs sm:text-sm text-[#d3c8bd] font-sans leading-relaxed font-light">
                We work with materials that age with nobility: quarry-selected Italian marbles with continuous veining, thermal-fumed European hardwoods, hand-patinated brass reveals, and acoustically woven tactile bouclé.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#200808] border border-white/10 space-y-4">
              <span className="font-serif text-3xl text-[#dca82b] block">III</span>
              <h3 className="font-serif text-2xl text-[#f7f6ef] font-light">The Architecture of Living Rituals</h3>
              <p className="text-xs sm:text-sm text-[#d3c8bd] font-sans leading-relaxed font-light">
                A home must support how its patrons genuinely live, host, and gather. We configure bespoke dining volumes for celebration, contemplative reading corners for solitude, and private suites for deep restorative rest.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#200808] border border-white/10 space-y-4">
              <span className="font-serif text-3xl text-[#dca82b] block">IV</span>
              <h3 className="font-serif text-2xl text-[#f7f6ef] font-light">Single-Source Turnkey Stewardship</h3>
              <p className="text-xs sm:text-sm text-[#d3c8bd] font-sans leading-relaxed font-light">
                We eliminate the traditional conflict between design concepts and site execution. By directing our own joinery workshops and stationing resident engineers on-site, we guarantee millimetric adherence to architectural drawings.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            05. CLIENT TRUST & VOICES (REAL TESTIMONIALS FROM PDF)
            ═══════════════════════════════════════════════════════════ */}
        <section className="space-y-12 border-t border-white/10 pt-16">
          <div className="max-w-2xl space-y-3">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#dca82b] font-sans font-medium block">
              Patron Testimonials
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#f7f6ef]">
              In the words of our <span className="italic text-[#dca82b]">patrons.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[#200808] border border-white/10 space-y-6 flex flex-col justify-between">
              <Quote size={28} className="text-[#dca82b]/40" />
              <p className="font-serif text-lg text-[#f7f6ef] italic leading-relaxed">
                &ldquo;Kirti Ji understood our vision and transformed our imagination into reality. Every space has been created with care, comfort and purpose.&rdquo;
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#dca82b] font-sans">
                  Mr. Vinod Dhar
                </p>
                <p className="text-[10px] text-[#c7bcb1] font-sans mt-0.5">
                  Residence at Bengali Square, Indore
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#200808] border border-white/10 space-y-6 flex flex-col justify-between">
              <Quote size={28} className="text-[#dca82b]/40" />
              <p className="font-serif text-lg text-[#f7f6ef] italic leading-relaxed">
                &ldquo;Every corner of this home is a celebration of values, knowledge, and timeless elegance. A space designed to inspire calm and elevate everyday living.&rdquo;
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#dca82b] font-sans">
                  Dr. Upendra Dhar
                </p>
                <p className="text-[10px] text-[#c7bcb1] font-sans mt-0.5">
                  Grand Exotica Residence, Indore
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#200808] border border-white/10 space-y-6 flex flex-col justify-between">
              <Quote size={28} className="text-[#dca82b]/40" />
              <p className="font-serif text-lg text-[#f7f6ef] italic leading-relaxed">
                &ldquo;Designed as a premium academy, the space blends elegance and functionality to create an inspiring environment where learning and creativity thrive.&rdquo;
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#dca82b] font-sans">
                  Ms. Kamna Joshi
                </p>
                <p className="text-[10px] text-[#c7bcb1] font-sans mt-0.5">
                  Founder & Promoter, International School of Beauty
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            06. GEOGRAPHICAL PORTFOLIO INDEX (ALL 26+ COMMISSIONS)
            ═══════════════════════════════════════════════════════════ */}
        <section className="space-y-12 border-t border-white/10 pt-16">
          <div className="max-w-2xl space-y-3">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#dca82b] font-sans font-medium block">
              Geographical Reach
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#f7f6ef]">
              Portfolio commissions across <span className="italic text-[#dca82b]">India.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#d3c8bd] font-sans leading-relaxed font-light">
              Antaara Design Studio accepts bespoke commissions across Central, Northern, and Eastern India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {geographicalCommissions.map((geo, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#200808] border border-white/10 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#dca82b]">
                    <MapPin size={16} />
                    <h3 className="font-serif text-lg text-[#f7f6ef]">{geo.region}</h3>
                  </div>
                  <p className="text-[10px] uppercase tracking-wider text-[#d3c8bd] font-sans border-b border-white/10 pb-2">
                    {geo.role}
                  </p>
                  <ul className="space-y-1.5 pt-2 text-[11px] text-[#c7bcb1] font-sans leading-relaxed">
                    {geo.projects.map((p, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-1.5">
                        <span className="text-[#dca82b] mt-1 text-[8px]">▪</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            07. PRIVATE ATELIER CONSULTATION INVITATION
            ═══════════════════════════════════════════════════════════ */}
        <section className="p-10 sm:p-16 rounded-2xl bg-gradient-to-r from-[#2a0909] via-[#210707] to-[#180606] border border-[#dca82b]/30 text-center space-y-6 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dca82b]/15 border border-[#dca82b]/30 text-[10px] uppercase tracking-[0.24em] text-[#dca82b] font-medium">
            Atelier Consultation
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#f7f6ef] max-w-2xl mx-auto leading-tight">
            Schedule a dialogue with <span className="italic text-[#dca82b]">Kirti Jaiswal Rajpal.</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#d3c8bd] font-sans max-w-lg mx-auto font-light leading-relaxed">
            We welcome private clients, developers, and hospitality innovators to visit our Indore studio or arrange a site consultation.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#dca82b] text-[#180606] font-semibold text-xs uppercase tracking-[0.18em] hover:bg-[#edd277] transition-all shadow-xl shadow-[#dca82b]/20"
            >
              Initiate a Studio Dialogue <ArrowUpRight size={14} />
            </Link>
            <a
              href="tel:+919243051598"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/20 text-[#f7f6ef] text-xs uppercase tracking-[0.16em] hover:border-[#dca82b] hover:text-[#dca82b] transition-all"
            >
              Direct Studio Line: +91 92430 51598
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
