"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, ChevronLeft, ChevronRight, Compass, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { useEffect, useRef, useState, useMemo } from "react";

/* ──────────────────────────────────────────────────────────────
   DATA (From 30-Page Client Portfolio PDF)
   Pure architectural photographs, zero balloon arches, zero AI cliches
   ────────────────────────────────────────────────────────────── */

const heroSlides = [
  {
    title: "3 BHK Luxury Residence",
    subtitle: "Everyday Luxury & Refined Living",
    category: "Private Residence",
    location: "BCM Planet, Vijay Nagar, Indore",
    client: "Mr. Ruchir",
    image: "/images/projects/bcm-planet-luxury-residence/bcm_living_room.jpg",
    slug: "bcm-planet-luxury-residence",
    specs: "3,200 sq.ft · Fluted Teak & Statuario · Turnkey",
  },
  {
    title: "Hotel Pride Luxury Cottages",
    subtitle: "Sanctuary by the Water",
    category: "Resort Hospitality",
    location: "Bypass Road, Indore",
    client: "Hotel Pride Group",
    image: "/images/projects/hotel-pride-cottages/pride_pool_night.jpg",
    slug: "hotel-pride-cottages",
    specs: "12 Bespoke Cottages · Landscape Lighting · Resort Masterplan",
  },
  {
    title: "Residence at Omaxe",
    subtitle: "A Legacy of Design & Trust",
    category: "Celebrity Commission",
    location: "Mathura, Uttar Pradesh",
    client: "With Hema Malini Ji",
    image: "/images/projects/omaxe-mathura-residence/hema-malini-kirti.png",
    slug: "residence-at-omaxe-mathura",
    specs: "Private Sanctuary · Custom Dharmendra Ji Art Tribute",
  },
  {
    title: "After Hours Nightclub & Lounge",
    subtitle: "Atmosphere After Sunset",
    category: "High-Energy Hospitality",
    location: "Hotel Pride, Indore",
    client: "Nightclub & Lounge",
    image: "/images/projects/after-hours-nightclub/afterhours_main_lounge.jpg",
    slug: "after-hours-nightclub",
    specs: "DMX Lighting · Custom Banquettes · Acoustic Engineering",
  },
  {
    title: "Tiffany Blues Fine Dining",
    subtitle: "Crystal Chandelier Grandeur",
    category: "Hospitality & Dining",
    location: "Indore, Madhya Pradesh",
    client: "Tiffany Blues Restaurant",
    image: "/images/projects/tiffany-blues-dining/tiffany_main_dining.jpg",
    slug: "tiffany-blues-fine-dining",
    specs: "Custom Crystal Ceiling · Velvet Seating · Turnkey",
  },
  {
    title: "Coffee by Di Bella",
    subtitle: "Double-Height Daylight Volume",
    category: "Experience Dining",
    location: "Indore, Madhya Pradesh",
    client: "Coffee by Di Bella",
    image: "/images/projects/coffee-by-di-bella/p3_2_627x627.png",
    slug: "coffee-by-di-bella",
    specs: "Architectural Identity · Warm Oak & Brass · Turnkey Execution",
  },
];

const portfolioProjects = [
  {
    title: "3 BHK Luxury Residence",
    category: "Residential",
    tagline: "Designed Around Everyday Luxury",
    location: "BCM Planet, Vijay Nagar, Indore",
    image: "/images/projects/bcm-planet-luxury-residence/bcm_living_room.jpg",
    slug: "bcm-planet-luxury-residence",
    client: "Mr. Ruchir",
    featured: true,
    area: "3,200 sq.ft",
    year: "2023",
  },
  {
    title: "Residence at Omaxe",
    category: "Residential",
    tagline: "A Legacy of Design & Trust",
    location: "Mathura, Uttar Pradesh",
    image: "/images/projects/omaxe-mathura-residence/p4_2_1402x1122.png",
    slug: "residence-at-omaxe-mathura",
    client: "With Hema Malini Ji",
    featured: false,
    area: "Bespoke Residence",
    year: "2022",
  },
  {
    title: "Hotel Pride Cottages",
    category: "Hospitality",
    tagline: "Serene Luxury Resort Sanctuaries",
    location: "Bypass Road, Indore",
    image: "/images/projects/hotel-pride-cottages/pride_pool_night.jpg",
    slug: "hotel-pride-cottages",
    client: "Hotel Pride Group",
    featured: false,
    area: "Resort Complex",
    year: "2023",
  },
  {
    title: "After Hours Nightclub",
    category: "Hospitality",
    tagline: "Immersive Nightlife Experience & Lounge",
    location: "Hotel Pride, Indore",
    image: "/images/projects/after-hours-nightclub/afterhours_main_lounge.jpg",
    slug: "after-hours-nightclub",
    client: "Nightclub & Lounge",
    featured: true,
    area: "4,500 sq.ft",
    year: "2023",
  },
  {
    title: "Tiffany Blues Fine Dining",
    category: "Hospitality",
    tagline: "Haute Cuisine & Dramatic Crystal Chandelier",
    location: "Indore, MP",
    image: "/images/projects/tiffany-blues-dining/tiffany_main_dining.jpg",
    slug: "tiffany-blues-fine-dining",
    client: "Tiffany Blues",
    featured: false,
    area: "Dining Atelier",
    year: "2022",
  },
  {
    title: "Global Automotive Corporate Office",
    category: "Commercial",
    tagline: "Modern High-Performance Corporate Headquarters",
    location: "Kolkata, West Bengal",
    image: "/images/projects/corporate-office-kolkata/corporate_main_office.jpg",
    slug: "corporate-office-kolkata",
    client: "Global Automotive Company",
    featured: false,
    area: "Corporate Floors",
    year: "2021",
  },
  {
    title: "Coffee by Di Bella",
    category: "Hospitality",
    tagline: "Double-Height Volume & Coffee Experience",
    location: "Indore, MP",
    image: "/images/projects/coffee-by-di-bella/p3_2_627x627.png",
    slug: "coffee-by-di-bella",
    client: "Coffee by Di Bella",
    featured: false,
    area: "Experience Cafe",
    year: "2023",
  },
  {
    title: "International School of Beauty",
    category: "Commercial",
    tagline: "Couture Styling & Educational Academy",
    location: "Indore, MP",
    image: "/images/projects/kamna-joshi-beauty-academy/beauty_academy_main.jpg",
    slug: "kamna-joshi-beauty-academy",
    client: "Ms. Kamna Joshi",
    featured: false,
    area: "Academy Space",
    year: "2022",
  },
  {
    title: "Vinod Dhar's Residence",
    category: "Residential",
    tagline: "Understated Elegance & Harmonious Spatial Planning",
    location: "Bengali Square, Indore",
    image: "/images/projects/vinod-dhar-residence/vinod_living_clean.jpg",
    slug: "vinod-dhar-residence",
    client: "Mr. Vinod Dhar",
    featured: false,
    area: "Private Villa",
    year: "2021",
  },
];

const testimonials = [
  {
    quote:
      "Kirti Ji understood our vision and transformed our imagination into reality. Every space has been created with care, comfort and purpose.",
    author: "Mr. Vinod Dhar",
    role: "Private Residence",
    location: "Bengali Square, Indore",
  },
  {
    quote:
      "At Antaara Design Studio every project is a story, every space is an emotion, and every detail reflects timeless craftsmanship.",
    author: "Residence at Omaxe",
    role: "With Hema Malini Ji",
    location: "Mathura, Uttar Pradesh",
  },
  {
    quote:
      "Designed as a premium academy, the space blends elegance and functionality to create an inspiring environment where learning and creativity thrive.",
    author: "Ms. Kamna Joshi",
    role: "Founder & Promoter, International School of Beauty",
    location: "Indore, Madhya Pradesh",
  },
  {
    quote:
      "Every corner of this home is a celebration of values, knowledge, and timeless elegance. A space designed to inspire calm and elevate everyday living.",
    author: "Dr. Upendra Dhar",
    role: "Residence at Grand Exotica",
    location: "Bengali Square, Indore",
  },
];

const materialityPalette = [
  {
    code: "01",
    name: "Statuario Italian Marble",
    origin: "Carrara, Italy",
    role: "Flooring, Bookmatched Feature Walls, Vanity Ensembles",
    texture: "Honed silky satin with delicate amber veining",
  },
  {
    code: "02",
    name: "Smoked Rift-Cut Oak",
    origin: "Sustainably Forested White Oak",
    role: "Acoustic Fluting, Hidden Storage Portals, Custom Millwork",
    texture: "Deep brushed grain with warm matte tobacco lacquer",
  },
  {
    code: "03",
    name: "Aged Champagne Brass",
    origin: "Handcrafted Artisanal Foundry",
    role: "Linear Cove Insets, Custom Door Pulls, Floating Frames",
    texture: "Subtle brushed metal with warm ambient glow reflection",
  },
  {
    code: "04",
    name: "Tactile Bouclé & Suede",
    origin: "Textile Weavers Atelier",
    role: "Acoustic Wall Panels, Bespoke Loungers, Bedside Ensembles",
    texture: "Sensory multi-tone warmth designed for calm acoustic comfort",
  },
];

/* ──────────────────────────────────────────────────────────────
   MAIN HOMEPAGE COMPONENT
   ────────────────────────────────────────────────────────────── */

export default function CinematicHome() {
  const [frame, setFrame] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeTab, setActiveTab] = useState<"dibella" | "afterhours">("dibella");

  // Continuous cinematic slideshow auto-cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setFrame((f) => (f + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = heroSlides[frame];
  const nextSlide = heroSlides[(frame + 1) % heroSlides.length];

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return portfolioProjects;
    return portfolioProjects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="bg-[#180606] text-[#f7f6ef] selection:bg-[#dca82b] selection:text-[#180606] overflow-x-hidden">
      {/* ═══════════════════════════════════════════════════════════
          HERO — Cinematic Architectural Monograph Showcase
          ═══════════════════════════════════════════════════════════ */}
      <section 
        className="relative min-h-[100svh] flex flex-col justify-end pb-10 sm:pb-14 px-6 sm:px-10 md:px-16 overflow-hidden pt-32 sm:pt-36"
      >
        {/* Subtle Luxury Radial Texture */}
        <div className="absolute inset-0 opacity-[0.18] pointer-events-none z-10 bg-[radial-gradient(#dca82b_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* Cinematic Multi-Layer Vignette */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#180606] via-[#180606]/40 to-[#180606]/85" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#180606]/90 via-[#180606]/40 to-transparent" />
        <div className="absolute top-0 inset-x-0 h-40 z-10 bg-gradient-to-b from-[#180606] to-transparent" />

        {/* Rotating Slideshow Background Images with Architectural Ken Burns Video Zoom */}
        {heroSlides.map((slide, i) => {
          const isActive = frame === i;
          return (
            <div
              key={`${slide.slug}-${isActive ? "active" : "idle"}`}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-0 pointer-events-none" : "opacity-0 -z-10 pointer-events-none"
              }`}
            >
              <div className={`w-full h-full relative overflow-hidden ${isActive ? "hero-video-zoom-active" : "scale-100"}`}>
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover brightness-[0.84] saturate-[1.12]"
                />
              </div>
            </div>
          );
        })}

        {/* Hero Content Area */}
        <div className="relative z-20 max-w-[1440px] mx-auto w-full space-y-8">
          <div className="max-w-3xl space-y-4">
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-3">
              <span className="w-10 h-[1px] bg-gradient-to-r from-[#dca82b] to-transparent" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#edd277] font-sans font-medium">
                Antaara Design Studio · Indore · Est. 2016
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#f7f6ef] leading-[1.04] tracking-tight">
              Designing spaces <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#edd277] via-[#dca82b] to-[#c28c1d]">
                you feel.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-[#d3c8bd] max-w-xl font-sans font-light leading-relaxed">
              Bespoke luxury residences, landmark hospitality destinations, and executive commercial environments shaped with architectural rigor, sensory materiality, and flawless turnkey execution.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#dca82b] text-[#180606] font-semibold text-xs uppercase tracking-[0.18em] hover:bg-[#edd277] hover:shadow-[0_0_30px_rgba(220,168,43,0.4)] transition-all duration-300 shadow-xl"
              >
                Explore Works <ArrowDownRight size={15} />
              </a>
              <Link
                href="/studio"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full border border-white/25 text-[#f7f6ef] text-xs uppercase tracking-[0.16em] hover:border-[#dca82b] hover:text-[#dca82b] backdrop-blur-md bg-black/20 transition-all duration-300"
              >
                The Studio Dossier <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* Cinematic Slide Controller Bar */}
          <div className="pt-6 border-t border-[#dca82b]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 bg-[#180606]/50 backdrop-blur-sm p-4 rounded-xl">
            {/* Slide Navigation & Dots */}
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setFrame((f) => (f - 1 + heroSlides.length) % heroSlides.length)}
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#dca82b] hover:border-[#dca82b] transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => setFrame((f) => (f + 1) % heroSlides.length)}
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#dca82b] hover:border-[#dca82b] transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

              <span className="text-xs font-serif tracking-widest text-[#dca82b]">
                0{frame + 1} <span className="text-white/30">/</span> 0{heroSlides.length}
              </span>

              {/* Progress Bars with Cinematic Animated Fill */}
              <div className="hidden sm:flex items-center gap-1.5">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setFrame(idx)}
                    className={`h-1.5 rounded-full overflow-hidden transition-all duration-300 ${
                      frame === idx ? "w-12 bg-white/20" : "w-2.5 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Jump to slide ${idx + 1}`}
                  >
                    {frame === idx && (
                      <div className="h-full bg-gradient-to-r from-[#edd277] to-[#dca82b] rounded-full animate-progress-fill" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Current Active Slide Label */}
            <Link
              href={`/work/${currentSlide.slug}`}
              className="group flex items-center gap-3 text-left hover:text-[#edd277] transition-colors"
            >
              <div className="w-10 h-10 relative rounded-lg overflow-hidden border border-[#dca82b]/30 shrink-0 hidden md:block">
                <Image
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#dca82b] font-sans">
                  {currentSlide.category} · {currentSlide.location}
                </p>
                <p className="font-serif text-sm text-[#f7f6ef] font-medium group-hover:text-[#edd277] transition-colors">
                  {currentSlide.title} <ArrowUpRight size={13} className="inline ml-1 text-[#dca82b]" />
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          STUDIO LEDGER STRIP (ARCHITECTURAL METRICS)
          ═══════════════════════════════════════════════════════════ */}
      <section className="border-y border-[#dca82b]/20 bg-[#1e0707] py-8 px-6 sm:px-10 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#dca82b]/5 to-transparent pointer-events-none" />
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="border-r border-white/10 pr-6 last:border-0 space-y-1">
            <span className="text-[9px] uppercase tracking-[0.28em] text-[#dca82b] font-sans block">Commissions</span>
            <p className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f7f6ef] font-light">30+</p>
            <p className="text-xs text-[#c7bcb1] font-sans">Curated Architectural Projects</p>
          </div>
          <div className="border-r border-white/10 pr-6 last:border-0 space-y-1">
            <span className="text-[9px] uppercase tracking-[0.28em] text-[#dca82b] font-sans block">Atelier Experience</span>
            <p className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f7f6ef] font-light">8+ Years</p>
            <p className="text-xs text-[#c7bcb1] font-sans">Design & Spatial Craftsmanship</p>
          </div>
          <div className="border-r border-white/10 pr-6 last:border-0 space-y-1">
            <span className="text-[9px] uppercase tracking-[0.28em] text-[#dca82b] font-sans block">Delivery Model</span>
            <p className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f7f6ef] font-light">100%</p>
            <p className="text-xs text-[#c7bcb1] font-sans">Integrated Turnkey Execution</p>
          </div>
          <div className="space-y-1">
            <span className="text-[9px] uppercase tracking-[0.28em] text-[#dca82b] font-sans block">Footprint</span>
            <p className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f7f6ef] font-light">4 Hubs</p>
            <p className="text-xs text-[#c7bcb1] font-sans">Indore · Mathura · Kolkata · Satna</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          LANDMARK CELEBRITY COMMISSION: HEMA MALINI JI (PDF PAGE 4)
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 sm:px-10 md:px-16 max-w-[1440px] mx-auto">
        <div className="relative rounded-3xl border border-[#dca82b]/30 bg-gradient-to-b from-[#250909] to-[#180505] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          {/* Subtle Golden Ambient Radial */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#dca82b]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#dca82b]" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#dca82b] font-sans font-medium">
                  A Legacy of Design & Trust · Page 04
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#f7f6ef] leading-tight">
                Residence at Omaxe, Mathura <br />
                <span className="italic font-serif text-[#dca82b]">With Hema Malini Ji</span>
              </h2>

              <blockquote className="border-l-2 border-[#dca82b] pl-5 font-serif text-lg sm:text-xl text-[#f7f6ef]/95 italic font-light leading-relaxed">
                “At Antaara Design Studio every project is a story, every space is an emotion, and every detail reflects timeless craftsmanship.”
              </blockquote>

              <p className="text-xs sm:text-sm text-[#d3c8bd] leading-relaxed font-sans font-light">
                Entrusted by Member of Parliament and legendary artist Smt. Hema Malini Ji for her private sanctuary at Omaxe, Mathura. The commission required a harmonious synthesis of sacred serenity, timeless materiality, and a centerpiece three-panel gold-leaf artwork tribute to Dharmendra Ji.
              </p>

              <div className="pt-2 flex items-center gap-6">
                <Link
                  href="/work/residence-at-omaxe-mathura"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#dca82b] text-[#180606] font-semibold text-xs uppercase tracking-[0.16em] hover:bg-[#edd277] transition-all duration-300 shadow-lg"
                >
                  View Case Study <ArrowUpRight size={14} />
                </Link>
                <span className="text-[11px] text-[#c7bcb1] font-sans">
                  Turnkey Architectural Interior
                </span>
              </div>
            </div>

            {/* Right Images Column */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Photo 1: Kirti with Hema Malini Ji */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#dca82b]/30 shadow-2xl group">
                <Image
                  src="/images/projects/omaxe-mathura-residence/hema-malini-kirti.png"
                  alt="Kirti Jaiswal Rajpal with Smt. Hema Malini Ji"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-4 left-4 right-4 text-xs font-sans">
                  <p className="text-[#dca82b] uppercase text-[9px] tracking-[0.2em] font-medium">Patron Commendation</p>
                  <p className="text-[#f7f6ef] font-medium mt-0.5">With Smt. Hema Malini Ji</p>
                </div>
              </div>

              {/* Photo 2: Dharmendra Ji Art Tribute */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#dca82b]/30 shadow-2xl group sm:mt-8">
                <Image
                  src="/images/projects/omaxe-mathura-residence/p4_0_1600x720.jpeg"
                  alt="Custom Gold Leaf Artwork Tribute to Dharmendra Ji"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-4 left-4 right-4 text-xs font-sans">
                  <p className="text-[#dca82b] uppercase text-[9px] tracking-[0.2em] font-medium">Artisanal Masterpiece</p>
                  <p className="text-[#f7f6ef] font-medium mt-0.5">Tribute Artwork to Dharmendra Ji</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CURATED SELECTED WORKS — EDITORIAL MAGAZINE LAYOUT
          (Varied aspect ratios, no uniform box grids)
          ═══════════════════════════════════════════════════════════ */}
      <section id="projects" className="py-20 md:py-28 px-6 sm:px-10 md:px-16 max-w-[1440px] mx-auto space-y-12">
        {/* Header and Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#dca82b]/20 pb-8">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#dca82b] font-sans font-medium block">
              Architectural Ledger
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#f7f6ef]">
              Selected <span className="font-serif italic text-[#dca82b]">Commissions.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#d3c8bd] max-w-lg font-sans font-light leading-relaxed">
              Every commission represents a tailored response to site context, natural light vectors, and the ritual of living.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {["All", "Residential", "Hospitality", "Commercial"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[10px] uppercase tracking-[0.2em] font-sans px-5 py-2.5 rounded-full border transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-[#dca82b] text-[#180606] font-semibold border-[#dca82b] shadow-md shadow-[#dca82b]/20"
                    : "border-white/15 text-[#d3c8bd] hover:border-[#dca82b] hover:text-[#f7f6ef]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Item 1: Wide Feature (BCM Planet or first match) */}
          {filteredProjects.slice(0, 1).map((project) => (
            <div key={project.slug} className="md:col-span-12">
              <Link
                href={`/work/${project.slug}`}
                className="group block rounded-2xl overflow-hidden border border-white/10 bg-[#210707] hover:border-[#dca82b]/50 transition-all duration-500 shadow-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-8 relative aspect-[16/9] lg:aspect-[16/10] overflow-hidden bg-black/40">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.92]"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#180606]/85 backdrop-blur-md border border-[#dca82b]/30 text-[9px] uppercase tracking-[0.2em] text-[#dca82b] font-medium">
                      Landmark Feature · {project.category}
                    </div>
                  </div>
                  <div className="lg:col-span-4 p-8 sm:p-10 flex flex-col justify-between space-y-6 bg-gradient-to-b from-[#240808] to-[#1c0606]">
                    <div className="space-y-4">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-[#dca82b] font-sans">
                        {project.client} · {project.location}
                      </p>
                      <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#f7f6ef] group-hover:text-[#edd277] transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#d3c8bd] font-sans font-light leading-relaxed">
                        {project.tagline}. Executed with bookmatched Italian stone, acoustic fluted timber, and custom-engineered cove lighting.
                      </p>
                    </div>

                    <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                      <div className="space-y-1">
                        <span className="text-[9px] uppercase tracking-[0.2em] text-[#c7bcb1]">Scope & Year</span>
                        <p className="text-xs text-[#f7f6ef] font-sans font-medium">{project.area} · {project.year}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-[#dca82b]/40 flex items-center justify-center text-[#dca82b] group-hover:bg-[#dca82b] group-hover:text-[#180606] transition-all">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}

          {/* Items 2 & 3: Twin Balanced Architectural Cards */}
          {filteredProjects.slice(1, 3).map((project) => (
            <div key={project.slug} className="md:col-span-6">
              <Link
                href={`/work/${project.slug}`}
                className="group block rounded-2xl overflow-hidden border border-white/10 bg-[#210707] hover:border-[#dca82b]/50 transition-all duration-500 shadow-xl h-full flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.92]"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#180606]/85 backdrop-blur-md border border-white/10 text-[9px] uppercase tracking-[0.2em] text-[#dca82b]">
                    {project.category}
                  </div>
                </div>
                <div className="p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#c7bcb1] font-sans">
                      {project.client} · {project.location}
                    </p>
                    <h3 className="font-serif text-2xl font-light text-[#f7f6ef] group-hover:text-[#edd277] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#d3c8bd] font-sans leading-relaxed line-clamp-2">
                      {project.tagline}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#dca82b]">
                    <span className="font-sans text-[11px] tracking-wider uppercase">{project.area}</span>
                    <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View Monograph <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}

          {/* Items 4, 5, 6: Triad Grid */}
          {filteredProjects.slice(3, 6).map((project) => (
            <div key={project.slug} className="md:col-span-4">
              <Link
                href={`/work/${project.slug}`}
                className="group block rounded-2xl overflow-hidden border border-white/10 bg-[#210707] hover:border-[#dca82b]/50 transition-all duration-500 shadow-xl h-full flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.92]"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#180606]/85 backdrop-blur-md border border-white/10 text-[9px] uppercase tracking-[0.2em] text-[#dca82b]">
                    {project.category}
                  </div>
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#c7bcb1] font-sans">
                      {project.location}
                    </p>
                    <h3 className="font-serif text-xl font-light text-[#f7f6ef] group-hover:text-[#edd277] transition-colors mt-1">
                      {project.title}
                    </h3>
                  </div>
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#dca82b]">
                    <span>{project.client}</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View Entire Archive CTA */}
        <div className="text-center pt-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full border border-[#dca82b]/40 text-[#dca82b] hover:bg-[#dca82b] hover:text-[#180606] transition-all duration-300 font-semibold text-xs uppercase tracking-[0.2em] shadow-lg"
          >
            Explore Complete Archive ({portfolioProjects.length}+ Landmark Works) <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ATMOSPHERIC DUALITY: DAY & NIGHT HOSPITALITY CASE STUDY
          (Coffee by Di Bella & After Hours Nightclub)
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#1c0606] border-y border-[#dca82b]/20 px-6 sm:px-10 md:px-16">
        <div className="max-w-[1440px] mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#dca82b] font-sans font-medium block">
                Hospitality Spatial Mastery
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#f7f6ef]">
                A Symphony of <span className="italic font-serif text-[#dca82b]">Atmosphere.</span>
              </h2>
            </div>

            {/* Toggle Switch */}
            <div className="inline-flex p-1.5 rounded-full bg-[#160404] border border-[#dca82b]/30">
              <button
                onClick={() => setActiveTab("dibella")}
                className={`px-6 py-2.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-sans transition-all duration-300 ${
                  activeTab === "dibella"
                    ? "bg-[#dca82b] text-[#180606] font-semibold shadow-md"
                    : "text-[#d3c8bd] hover:text-[#f7f6ef]"
                }`}
              >
                Daylight: Di Bella
              </button>
              <button
                onClick={() => setActiveTab("afterhours")}
                className={`px-6 py-2.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-sans transition-all duration-300 ${
                  activeTab === "afterhours"
                    ? "bg-[#dca82b] text-[#180606] font-semibold shadow-md"
                    : "text-[#d3c8bd] hover:text-[#f7f6ef]"
                }`}
              >
                Nightfall: After Hours
              </button>
            </div>
          </div>

          {/* Active Tab Showcase */}
          {activeTab === "dibella" ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 relative aspect-[16/11] rounded-2xl overflow-hidden border border-[#dca82b]/30 shadow-2xl">
                <Image
                  src="/images/projects/coffee-by-di-bella/p3_2_627x627.png"
                  alt="Coffee by Di Bella Interior"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#180606]/85 backdrop-blur-md border border-white/15 text-[9px] uppercase tracking-[0.2em] text-[#dca82b]">
                  Natural Daylight Circulation
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-[#dca82b] font-sans font-medium">
                    Experience Dining · Indore
                  </span>
                  <h3 className="font-serif text-3xl font-light text-[#f7f6ef] mt-1">
                    Coffee by Di Bella
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#d3c8bd] font-sans leading-relaxed font-light">
                  Conceived around double-height volume, natural daylight filters, and comfortable circulation rituals. Crafted with warm European oak tables, velvet tub chairs, and suspended matte-black pendants that create an intimate glow over social tables.
                </p>

                <div className="space-y-4 pt-3 border-t border-white/10">
                  <div className="flex items-start gap-4">
                    <span className="font-serif text-lg text-[#dca82b]">01</span>
                    <div>
                      <h4 className="text-xs font-medium uppercase tracking-wider text-[#f7f6ef]">Double-Height Spatial Volume</h4>
                      <p className="text-xs text-[#c7bcb1] font-light mt-0.5">Expansive sightlines allowing natural breeze and illumination.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-serif text-lg text-[#dca82b]">02</span>
                    <div>
                      <h4 className="text-xs font-medium uppercase tracking-wider text-[#f7f6ef]">Artisanal Millwork & Brass</h4>
                      <p className="text-xs text-[#c7bcb1] font-light mt-0.5">Custom shelving, fluted counters, and mirror arches.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/work/coffee-by-di-bella"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#dca82b] font-semibold hover:text-[#edd277] transition-colors"
                  >
                    Read Di Bella Case Study <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 relative aspect-[16/11] rounded-2xl overflow-hidden border border-[#dca82b]/30 shadow-2xl">
                <Image
                  src="/images/projects/after-hours-nightclub/afterhours_main_lounge.jpg"
                  alt="After Hours Nightclub Lounge"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#180606]/85 backdrop-blur-md border border-white/15 text-[9px] uppercase tracking-[0.2em] text-[#dca82b]">
                  DMX Nocturnal Illumination
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-[#dca82b] font-sans font-medium">
                    Hotel Pride · Indore
                  </span>
                  <h3 className="font-serif text-3xl font-light text-[#f7f6ef] mt-1">
                    After Hours Nightclub & Lounge
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#d3c8bd] font-sans leading-relaxed font-light">
                  A high-octane venue that awakens after sunset. Designed with dramatic multi-tiered dance stages, intimate tufted banquettes, brushed brass guardrails, and acoustic isolation membranes that preserve acoustic clarity while delivering deep bass punch.
                </p>

                <div className="space-y-4 pt-3 border-t border-white/10">
                  <div className="flex items-start gap-4">
                    <span className="font-serif text-lg text-[#dca82b]">01</span>
                    <div>
                      <h4 className="text-xs font-medium uppercase tracking-wider text-[#f7f6ef]">Atmospheric Mood Tuning</h4>
                      <p className="text-xs text-[#c7bcb1] font-light mt-0.5">DMX-programmed architectural glow transitioning from dusk lounge to late night.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-serif text-lg text-[#dca82b]">02</span>
                    <div>
                      <h4 className="text-xs font-medium uppercase tracking-wider text-[#f7f6ef]">VIP Hospitality Banquettes</h4>
                      <p className="text-xs text-[#c7bcb1] font-light mt-0.5">Wine leather Chesterfield banquettes with private cocktail tables.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/work/after-hours-nightclub"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#dca82b] font-semibold hover:text-[#edd277] transition-colors"
                  >
                    Read After Hours Case Study <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TACTILE MATERIALITY & SENSORY PALETTE
          (What elevates the studio above common builders)
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 sm:px-10 md:px-16 max-w-[1440px] mx-auto space-y-14">
        <div className="max-w-2xl space-y-3">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#dca82b] font-sans font-medium block">
            Sensory Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#f7f6ef]">
            The Architecture of <span className="italic font-serif text-[#dca82b]">Materiality.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#d3c8bd] font-sans font-light leading-relaxed">
            Spaces become unforgettable when texture, grain, and reflection dialogue with light. Our studio curates an authentic material palette sourced from world-class stone quarries and artisanal workshops.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {materialityPalette.map((mat) => (
            <div
              key={mat.code}
              className="p-8 rounded-2xl bg-[#210707] border border-[#dca82b]/20 hover:border-[#dca82b]/60 transition-all duration-300 space-y-5 flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-3">
                <span className="font-serif text-2xl text-[#dca82b]">{mat.code}</span>
                <h3 className="font-serif text-xl font-medium text-[#f7f6ef] leading-snug">{mat.name}</h3>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#dca82b]/80 font-sans">{mat.origin}</p>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/10 text-xs font-sans">
                <p className="text-[#f7f6ef] font-medium text-[11px] uppercase tracking-wider">Spatial Application:</p>
                <p className="text-[#c7bcb1] font-light leading-relaxed">{mat.role}</p>
                <p className="text-[#dca82b] text-[11px] pt-1 italic font-serif font-light">{mat.texture}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FOUNDER’S EDITORIAL DOSSIER: KIRTI JAISWAL RAJPAL (PDF PAGE 2)
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 sm:px-10 md:px-16 max-w-[1440px] mx-auto border-t border-[#dca82b]/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-[#dca82b]/40 shadow-2xl">
              <Image
                src="/images/founder/kirti-portrait-editorial-final.jpg"
                alt="Kirti Jaiswal Rajpal — Founder & Principal Designer"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#210707] border border-[#dca82b]/50 rounded-2xl p-5 shadow-2xl backdrop-blur-md">
              <p className="font-serif text-lg text-[#f7f6ef] tracking-wide">KIRTI JAISWAL RAJPAL</p>
              <p className="text-[9px] uppercase tracking-[0.24em] text-[#dca82b] font-sans font-medium mt-0.5">
                Founder & Principal Designer
              </p>
            </div>
          </div>

          {/* Dossier Manifesto */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#dca82b]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#dca82b] font-sans font-medium">
                Founder’s Note · Page 02
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#f7f6ef] leading-tight">
              “Every space <span className="font-serif italic text-[#dca82b]">tells a story.”</span>
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#d3c8bd] font-sans font-light leading-relaxed">
              <p>
                Antaara Design Studio is a creative interior architecture firm based in Indore, dedicated to transforming spaces with innovative ideas, functional planning, and timeless aesthetics. We specialize in designing residential, commercial, hospitality, and retail interiors that perfectly balance style, comfort, and practicality.
              </p>
              <p>
                Driven by a passion for excellence and attention to detail, our team works closely with every client to understand their vision and turn it into reality. From concept development to project execution, we ensure a seamless design journey with a strong focus on quality, creativity, and timely delivery.
              </p>
              <p>
                Our commitment to customer satisfaction, personalized solutions, and modern design principles has earned us the trust of clients across India. Whether it is creating elegant homes, sophisticated commercial spaces, or luxurious hospitality interiors, we strive to deliver designs that inspire and leave a lasting impression.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-6">
              <Link
                href="/studio"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#dca82b] text-[#180606] font-semibold text-xs uppercase tracking-[0.18em] hover:bg-[#edd277] transition-all shadow-lg shadow-[#dca82b]/20"
              >
                Read Studio Monograph <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CLIENT TRUST & VOICES (AUTHENTIC PDF CLIENT TESTIMONIALS)
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#150404] border-t border-[#dca82b]/20 px-6 sm:px-10 md:px-16">
        <div className="max-w-[1440px] mx-auto space-y-14">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#dca82b] font-sans font-medium block">
              Patron Words
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#f7f6ef]">
              Voices of our <span className="italic font-serif text-[#dca82b]">Patrons.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#200808] p-8 sm:p-10 rounded-2xl border border-white/10 relative space-y-6 flex flex-col justify-between hover:border-[#dca82b]/40 transition-colors shadow-xl"
              >
                <span className="font-serif text-6xl text-[#dca82b]/30 leading-none select-none">“</span>
                <p className="font-serif text-lg sm:text-xl text-[#f7f6ef] italic leading-relaxed -mt-6 font-light">
                  {t.quote}
                </p>
                <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="font-sans text-xs uppercase tracking-wider font-semibold text-[#dca82b]">
                      {t.author}
                    </p>
                    <p className="text-[11px] text-[#c7bcb1] font-sans mt-0.5">
                      {t.role} · {t.location}
                    </p>
                  </div>
                  <ShieldCheck size={20} className="text-[#dca82b]/50" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE 4-STAGE TURNKEY ARCHITECTURAL METHODOLOGY
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 sm:px-10 md:px-16 max-w-[1440px] mx-auto space-y-14">
        <div className="space-y-3">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#dca82b] font-sans font-medium block">
            The Turnkey Continuum
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#f7f6ef]">
            From concept to <span className="italic font-serif text-[#dca82b]">turnkey handover.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              num: "01",
              title: "Discovery & Spatial Blueprint",
              desc: "Deep analysis of lifestyle rituals, spatial circulation vectors, natural sunlight angles, and client aspirations.",
            },
            {
              num: "02",
              title: "Materiality & Sensory Mood",
              desc: "Tactile curations of Italian marble, bespoke fluted veneers, warm brass trims, and artisanal textile palettes.",
            },
            {
              num: "03",
              title: "3D Walkthroughs & Blueprints",
              desc: "Photorealistic 3D interior renders paired with millimeter-accurate architectural millwork, MEP, and lighting layouts.",
            },
            {
              num: "04",
              title: "On-Site Turnkey Execution",
              desc: "Dedicated project management, master craftsmen supervision, strict quality audits, and timely turnkey handover.",
            },
          ].map((step) => (
            <div
              key={step.num}
              className="p-8 rounded-2xl bg-[#200808] border border-white/10 hover:border-[#dca82b]/50 transition-all space-y-4 shadow-xl"
            >
              <span className="font-serif text-3xl text-[#dca82b] block">{step.num}</span>
              <h3 className="font-serif text-lg text-[#f7f6ef] font-medium">{step.title}</h3>
              <p className="text-xs text-[#c7bcb1] font-sans leading-relaxed font-light">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          DIRECT INQUIRY CONCIERGE BANNER
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 sm:px-10 md:px-16 max-w-[1440px] mx-auto">
        <div className="rounded-3xl border border-[#dca82b]/40 bg-gradient-to-r from-[#280909] via-[#210707] to-[#180505] p-10 sm:p-16 lg:p-20 text-center space-y-6 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dca82b]/15 border border-[#dca82b]/30 text-[10px] uppercase tracking-[0.24em] text-[#dca82b] font-medium">
            Architectural Concierge
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#f7f6ef] max-w-3xl mx-auto leading-tight">
            Ready to shape your space into an enduring <span className="italic font-serif text-[#dca82b]">masterpiece?</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#d3c8bd] max-w-xl mx-auto font-sans font-light leading-relaxed">
            Whether envisioning a signature private residence, luxury boutique resort, or corporate headquarters, Antaara Design Studio provides bespoke architectural curation and complete turnkey execution.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-[#dca82b] text-[#180606] font-semibold text-xs uppercase tracking-[0.2em] shadow-xl shadow-[#dca82b]/25 hover:bg-[#edd277] transition-all duration-300"
            >
              Start an Architectural Commission <ArrowUpRight size={15} />
            </Link>
            <a
              href="tel:+919243051598"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-white/20 text-[#f7f6ef] text-xs uppercase tracking-[0.18em] hover:border-[#dca82b] hover:text-[#dca82b] backdrop-blur-md transition-all duration-300"
            >
              Direct Line: +91 92430 51598
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
