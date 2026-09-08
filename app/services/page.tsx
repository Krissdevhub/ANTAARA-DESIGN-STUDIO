"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, Layers, Sliders, ShieldCheck, CheckCircle2 } from "lucide-react";

/* ──────────────────────────────────────────────────────────────
   DISCIPLINES DATA (Rich portfolio integration from 30-Page PDF)
   ────────────────────────────────────────────────────────────── */

const disciplines = [
  {
    id: "residential",
    code: "ARC-RES",
    title: "Private Residences & Luxury Estates",
    tagline: "Sanctuaries tailored to individual rituals and multi-generational living.",
    overview:
      "From bespoke high-rise penthouses at Sky Luxuria to expansive multi-generational family villas at BCM Planet and Grand Exotica, we shape private residences with spatial honesty, timeless materiality, and deeply personal detailing.",
    featuredProjects: [
      {
        name: "3 BHK Luxury Residence",
        location: "BCM Planet, Indore",
        client: "Mr. Ruchir",
        slug: "bcm-planet-luxury-residence",
        image: "/images/projects/bcm-planet-luxury-residence/bcm_living_room.jpg",
      },
      {
        name: "Residence at Omaxe",
        location: "Mathura, UP",
        client: "With Hema Malini Ji",
        slug: "residence-at-omaxe-mathura",
        image: "/images/projects/omaxe-mathura-residence/p4_2_1402x1122.png",
      },
      {
        name: "Grand Exotica Residence",
        location: "Bengali Square, Indore",
        client: "Dr. Upendra Dhar",
        slug: "grand-exotica-upendra-dhar",
        image: "/images/projects/grand-exotica-upendra-dhar/p15_8_1024x1536.jpeg",
      },
    ],
    technicalScopes: [
      "Circadian daylight orientation & spatial circulation zoning",
      "Custom bookmatched Italian marble masonry & floor inlay",
      "Full-height concealed pivot doors & flush wall reveals",
      "Bespoke millwork: walk-in wardrobes, vanity suites & master headboards",
      "Concealed architectural lighting: 2700K warm cove optics",
      "Acoustic isolation for private bedroom wings & home theaters",
    ],
    specifications: {
      scale: "2,500 to 18,000+ sq.ft.",
      leadTime: "6 to 14 Months",
      handover: "Turnkey White-Glove Handover",
    },
  },
  {
    id: "hospitality",
    code: "ARC-HOS",
    title: "Hospitality, Dining & Nightlife",
    tagline: "Experiential destinations engineered for atmosphere and patron wonder.",
    overview:
      "Creating spaces that transition effortlessly from sunlit morning hospitality to dramatic nocturnal energy. Our work spans specialty coffee roasteries, resort garden cottages, fine dining dining rooms, and high-energy nightlife lounges.",
    featuredProjects: [
      {
        name: "Coffee by Di Bella",
        location: "Indore, MP",
        client: "Exterior & Double-Height Volume",
        slug: "coffee-by-di-bella",
        image: "/images/projects/coffee-by-di-bella/p3_3_1310x1201.png",
      },
      {
        name: "Hotel Pride Luxury Cottages",
        location: "Bypass Road, Indore",
        client: "Hotel Pride Group",
        slug: "hotel-pride-cottages",
        image: "/images/projects/hotel-pride-cottages/p7_1_1536x1024.jpeg",
      },
      {
        name: "After Hours Nightclub & Lounge",
        location: "Hotel Pride, Indore",
        client: "Nightclub & Lounge",
        slug: "after-hours-nightclub",
        image: "/images/projects/after-hours-nightclub/p8_8_1535x1024.jpeg",
      },
    ],
    technicalScopes: [
      "Customer journey mapping & high-turnover circulation ergonomics",
      "Acoustic modeling & sound decay engineering for nightlife volume",
      "Bespoke cocktail bar engineering with concealed speed rails & ice wells",
      "DMX-controlled architectural mood lighting programmed for diurnal shifts",
      "Commercial-grade tactile upholstery: fire-rated velvet & treated leather",
      "FOH & BOH operational coordination (kitchen, bar pass & service flow)",
    ],
    specifications: {
      scale: "1,800 to 25,000+ sq.ft.",
      leadTime: "4 to 10 Months",
      handover: "Comprehensive Launch-Ready Handover",
    },
  },
  {
    id: "commercial",
    code: "ARC-COM",
    title: "Corporate Headquarters & Experience Ateliers",
    tagline: "Commanding corporate environments and customer experience touchpoints.",
    overview:
      "Elevating institutional stature through spatial authority and acoustic quietude. We have designed automotive corporate headquarters, dealership delivery pavilions, luxury bridal couture salons, and commercial academies across India.",
    featuredProjects: [
      {
        name: "Global Automotive Corporate Office",
        location: "Kolkata, WB",
        client: "Global Automotive Brand",
        slug: "corporate-office-kolkata",
        image: "/images/projects/corporate-office-kolkata/p5_0_1536x1024.jpeg",
      },
      {
        name: "Luxury Bridal Studio",
        location: "New Palasia, Indore",
        client: "Couture Experience Atelier",
        slug: "luxury-bridal-experience-studio",
        image: "/images/projects/luxury-bridal-experience-studio/p16_0_1536x1024.jpeg",
      },
      {
        name: "Commercial Beauty Academy",
        location: "Indore, MP",
        client: "Ms. Kamna Joshi",
        slug: "kamna-joshi-beauty-academy",
        image: "/images/projects/kamna-joshi-beauty-academy/p11_0_1536x1024.jpeg",
      },
    ],
    technicalScopes: [
      "Executive boardroom acoustic quietude with integrated concealed AV",
      "Sculptural reception desks in honed monolithic stone and brass trims",
      "Branded customer handover bays with diffused shadowless illuminations",
      "Ergonomic workstation layouts balancing collaboration and visual focus",
      "Custom millwork displays for luxury bridal couture and retail merchandise",
      "Commercial HVAC, fire suppression & server room coordination",
    ],
    specifications: {
      scale: "3,000 to 40,000+ sq.ft.",
      leadTime: "3 to 8 Months",
      handover: "Phased or Complete Turnkey Commission",
    },
  },
  {
    id: "turnkey",
    code: "ARC-EXE",
    title: "Full Turnkey General Contracting & Execution",
    tagline: "Uncompromising on-site craftsmanship from raw shell to white-glove handover.",
    overview:
      "We eliminate the disconnect between architectural vision and on-site reality. Antaara Design Studio acts as a single-source general contractor, directing quarry stone selection, in-house joinery fabrication, MEP engineering, and daily on-site supervision.",
    featuredProjects: [
      {
        name: "Residence at Omaxe",
        location: "Mathura, UP",
        client: "Turnkey Execution & Art Curation",
        slug: "residence-at-omaxe-mathura",
        image: "/images/projects/omaxe-mathura-residence/p4_2_1402x1122.png",
      },
      {
        name: "Hotel Pride Cottages",
        location: "Bypass Road, Indore",
        client: "Turnkey Resort Contracting",
        slug: "hotel-pride-cottages",
        image: "/images/projects/hotel-pride-cottages/p7_1_1536x1024.jpeg",
      },
      {
        name: "3 BHK BCM Planet",
        location: "Vijay Nagar, Indore",
        client: "Full Bespoke Contracting",
        slug: "bcm-planet-luxury-residence",
        image: "/images/projects/bcm-planet-luxury-residence/bcm_kitchen.jpg",
      },
    ],
    technicalScopes: [
      "Single-point financial, legal, and operational accountability",
      "Exhaustive Bill of Quantities (BOQ) with fixed material specification locks",
      "Dedicated resident civil engineers and quality assurance officers on site",
      "Direct factory fabrication for all custom fluted panels, metals & joinery",
      "Multi-stage milestone sign-offs with client inspections prior to closing",
      "12-Month post-handover craftsmanship warranty and structural assurance",
    ],
    specifications: {
      scale: "Any Scope",
      leadTime: "Guaranteed Milestone Delivery",
      handover: "Complete Ready-to-Live Turnkey",
    },
  },
];

/* ──────────────────────────────────────────────────────────────
   MATERIALITY LIBRARY DATA
   ────────────────────────────────────────────────────────────── */

const materials = [
  {
    name: "Honed Statuario & Armani Bronze Stone",
    category: "Natural Masonry",
    notes: "Individually selected slab lots with continuous bookmatched veining, honed to a soft tactile satin finish rather than artificial gloss.",
    origin: "Italy & Rajasthan Quarries",
  },
  {
    name: "Fumed White Oak & Smoked Walnut",
    category: "Architectural Veneer",
    notes: "Deep thermal-treated natural hardwoods featuring tactile linear fluting, integrated shadow reveals, and concealed acoustic damping backing.",
    origin: "Sustainable Hardwood Forests",
  },
  {
    name: "Hand-Rubbed Aged Brass & Gunmetal",
    category: "Bespoke Metallurgy",
    notes: "Artisanal hand-patinated solid brass trims, custom door handles, floating shelf brackets, and shadow perimeter transitions.",
    origin: "Studio In-House Metal Atelier",
  },
  {
    name: "Bouclé, Slub Linen & Saddle Leather",
    category: "Tactile Textiles",
    notes: "Textured weaves selected for acoustic absorption, natural softness, and enduring resistance to high-frequency domestic or hospitality use.",
    origin: "European Textile Mills",
  },
  {
    name: "2700K Circadian Architectural Lighting",
    category: "Atmospheric Illumination",
    notes: "Museum-grade 97+ CRI luminaires with 10-degree beam precision, anti-glare baffles, and continuous warm dimming drivers.",
    origin: "Architectural Optics",
  },
];

/* ──────────────────────────────────────────────────────────────
   MAIN SERVICES COMPONENT
   ────────────────────────────────────────────────────────────── */

export default function ServicesPage() {
  const [activeDiscipline, setActiveDiscipline] = useState(0);
  const current = disciplines[activeDiscipline];

  return (
    <div className="bg-[#180606] text-[#f7f6ef] min-h-screen pt-36 pb-36 px-6 sm:px-10 md:px-16 select-none">
      <div className="max-w-[1440px] mx-auto space-y-24">
        {/* ═══════════════════════════════════════════════════════════
            EDITORIAL ATELIER HERO
            ═══════════════════════════════════════════════════════════ */}
        <section className="border-b border-white/10 pb-16 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#dca82b]" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#dca82b] font-medium font-sans">
                Atelier Disciplines & Capabilities
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#d3c8bd] font-sans">
              Indore · Kolkata · Mathura · Satna
            </span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#f7f6ef] tracking-tight leading-[1.05]">
              Disciplines of <br />
              <span className="italic text-[#dca82b]">Practice & Execution.</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base font-sans text-[#d3c8bd] max-w-2xl leading-relaxed font-light">
              Antaara Design Studio provides a unified design and construction continuum. We eliminate the division between architectural concept, custom joinery, and on-site turnkey contracting.
            </p>
          </div>

          {/* Quick Jump Bar */}
          <div className="pt-6 flex items-center gap-2 overflow-x-auto no-scrollbar">
            {disciplines.map((d, idx) => (
              <button
                key={d.id}
                onClick={() => setActiveDiscipline(idx)}
                className={`px-5 py-2.5 rounded-full text-[10px] uppercase tracking-[0.18em] font-sans transition-all whitespace-nowrap border ${
                  activeDiscipline === idx
                    ? "bg-[#dca82b] text-[#180606] font-semibold border-[#dca82b] shadow-lg shadow-[#dca82b]/20"
                    : "border-white/15 text-[#d3c8bd] hover:border-[#dca82b] hover:text-[#f7f6ef] bg-[#200808]"
                }`}
              >
                {d.title}
              </button>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            ACTIVE DISCIPLINE MONOGRAPH SHOWCASE
            ═══════════════════════════════════════════════════════════ */}
        <section className="space-y-12">
          {/* Discipline Top Meta */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-white/10 pb-12">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-serif text-sm text-[#dca82b] tracking-widest">{current.code}</span>
                <span className="text-white/30">/</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#d3c8bd] font-sans">
                  Core Practice Area
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#f7f6ef]">
                {current.title}
              </h2>
              <p className="font-serif italic text-lg sm:text-xl text-[#dca82b] font-light">
                &ldquo;{current.tagline}&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-[#d3c8bd] font-sans leading-relaxed font-light pt-2 max-w-2xl">
                {current.overview}
              </p>
            </div>

            {/* Scale & Delivery Metrics Box */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-[#200808] border border-white/10 space-y-4">
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#dca82b] font-medium font-sans">
                Engagement Parameters
              </p>
              <div className="space-y-3 text-xs font-sans">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-[#d3c8bd]">Spatial Scale</span>
                  <span className="text-[#f7f6ef] font-medium">{current.specifications.scale}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-[#d3c8bd]">Timeline</span>
                  <span className="text-[#f7f6ef] font-medium">{current.specifications.leadTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#d3c8bd]">Delivery Model</span>
                  <span className="text-[#dca82b] font-medium">{current.specifications.handover}</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="block text-center w-full py-3 rounded-xl bg-[#dca82b] text-[#180606] font-semibold text-[10px] uppercase tracking-[0.18em] hover:bg-[#edd277] transition-all mt-2"
              >
                Inquire For This Discipline →
              </Link>
            </div>
          </div>

          {/* Technical Scope Breakdown (Architectural Tags, not generic checkmarks) */}
          <div className="space-y-4">
            <h3 className="text-[10px] uppercase tracking-[0.26em] text-[#dca82b] font-sans font-medium">
              Technical Scope & Architectural Deliverables
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {current.technicalScopes.map((scope, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#200808] border border-white/10 hover:border-[#dca82b]/40 transition-colors flex items-start gap-3"
                >
                  <span className="font-serif text-sm text-[#dca82b] mt-0.5">
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <p className="text-xs text-[#f7f6ef] font-sans leading-relaxed">
                    {scope}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Curated Case Studies in this Discipline */}
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.24em] text-[#dca82b] font-sans font-medium">
                  Portfolio Evidence
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#f7f6ef]">
                  Benchmark Commissions
                </h3>
              </div>
              <Link
                href="/work"
                className="text-xs text-[#dca82b] hover:text-[#edd277] font-sans uppercase tracking-wider hidden sm:inline-block"
              >
                View Complete Archive →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {current.featuredProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/work/${p.slug}`}
                  className="luxury-card group block bg-[#200808] rounded-xl overflow-hidden border border-white/10 shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover luxury-img-zoom brightness-[0.9]"
                    />
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-[#180606]/80 text-[8px] uppercase tracking-wider text-[#dca82b]">
                      {p.location}
                    </div>
                  </div>
                  <div className="p-4 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-lg text-[#f7f6ef] group-hover:text-[#dca82b] transition-colors">
                        {p.name}
                      </h4>
                      <ArrowUpRight size={14} className="text-[#dca82b] gold-hover-arrow" />
                    </div>
                    <p className="text-[10px] text-[#d3c8bd] font-sans">{p.client}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            THE MATERIALITY & SENSORY LIBRARY (Real Studio Palette)
            ═══════════════════════════════════════════════════════════ */}
        <section className="p-8 sm:p-12 lg:p-16 rounded-2xl bg-[#1c0606] border border-[#dca82b]/20 space-y-10 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl space-y-3">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#dca82b] font-sans font-medium block">
              The Materiality Library
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#f7f6ef]">
              Authentic materials. <br />
              <span className="italic text-[#dca82b]">Zero artificial veneer.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#d3c8bd] font-sans leading-relaxed font-light">
              We reject transient decorative trends. Every Antaara interior is rooted in authentic raw materiality that develops a rich, noble patina with time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((mat, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-[#220707] border border-white/10 hover:border-[#dca82b]/40 transition-colors space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#dca82b] font-sans">
                    {mat.category}
                  </span>
                  <span className="text-[9px] text-white/40 font-sans">{mat.origin}</span>
                </div>
                <h4 className="font-serif text-lg text-[#f7f6ef] leading-snug">{mat.name}</h4>
                <p className="text-xs text-[#c7bcb1] font-sans leading-relaxed font-light">
                  {mat.notes}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            THE 5-PHASE TURNKEY CONTINUUM (Pipeline, not boring checks)
            ═══════════════════════════════════════════════════════════ */}
        <section className="space-y-12 border-t border-white/10 pt-16">
          <div className="max-w-2xl space-y-3">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#dca82b] font-sans font-medium block">
              Architectural Pipeline
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#f7f6ef]">
              The Execution <span className="italic text-[#dca82b]">Continuum.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#d3c8bd] font-sans leading-relaxed font-light">
              How an Antaara commission evolves from lifestyle mapping to white-glove handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                step: "01",
                name: "Discovery & Spatial Mapping",
                desc: "Lifestyle ritual analysis, daylight mapping, and structural perimeter survey.",
              },
              {
                step: "02",
                name: "Volumetric 3D & Material Swatches",
                desc: "Photorealistic spatial perspectives paired with tactile physical material boards.",
              },
              {
                step: "03",
                name: "Construction Blueprints & MEP",
                desc: "Exhaustive millimeter-precision millwork, plumbing, electrical & HVAC drafting.",
              },
              {
                step: "04",
                name: "Factory Joinery & Civil Execution",
                desc: "Direct artisan workshop fabrication and daily on-site architectural supervision.",
              },
              {
                step: "05",
                name: "White-Glove Commissioning",
                desc: "Art curation, styling dressing, final quality audits, and keys handover.",
              },
            ].map((p) => (
              <div
                key={p.step}
                className="p-5 rounded-xl bg-[#200808] border border-white/10 hover:border-[#dca82b]/40 transition-all space-y-3"
              >
                <span className="font-serif text-2xl text-[#dca82b] block">{p.step}</span>
                <h4 className="font-serif text-base text-[#f7f6ef] leading-snug">{p.name}</h4>
                <p className="text-[11px] text-[#c7bcb1] font-sans leading-relaxed font-light">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            DIRECT COMMISSION INQUIRY CONCIERGE
            ═══════════════════════════════════════════════════════════ */}
        <section className="p-10 sm:p-16 rounded-2xl bg-gradient-to-r from-[#2a0909] via-[#210707] to-[#180606] border border-[#dca82b]/30 text-center space-y-6 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dca82b]/15 border border-[#dca82b]/30 text-[10px] uppercase tracking-[0.24em] text-[#dca82b] font-medium">
            Commission Scheduling
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#f7f6ef] max-w-2xl mx-auto leading-tight">
            Commission Antaara for your <span className="italic text-[#dca82b]">space.</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#d3c8bd] font-sans max-w-lg mx-auto font-light leading-relaxed">
            We accept a limited number of residential, hospitality, and commercial commissions each year to ensure uncompromising artisanal supervision.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#dca82b] text-[#180606] font-semibold text-xs uppercase tracking-[0.18em] hover:bg-[#edd277] transition-all shadow-xl shadow-[#dca82b]/20"
            >
              Start an Architectural Consultation <ArrowUpRight size={14} />
            </Link>
            <a
              href="tel:+919243051598"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/20 text-[#f7f6ef] text-xs uppercase tracking-[0.16em] hover:border-[#dca82b] hover:text-[#dca82b] transition-all"
            >
              Call Studio: +91 92430 51598
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
