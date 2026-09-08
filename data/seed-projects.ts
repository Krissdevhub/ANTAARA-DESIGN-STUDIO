export interface Project {
  slug: string;
  title: string;
  category: "Residential" | "Hospitality" | "Commercial" | "Retail" | "Institutional";
  subtitle: string;
  location: string;
  client: string;
  scope: string;
  year: string;
  featured: boolean;
  order: number;
  summary: string;
  description: string;
  coverImage: string;
  galleryImages: string[];
  page?: number;
}

export const INITIAL_PROJECTS: Project[] = [
  {
    "slug": "coffee-by-di-bella",
    "title": "Coffee by Di Bella",
    "category": "Hospitality",
    "subtitle": "Exterior / Double-Height / Experience Dining",
    "location": "Indore, Madhya Pradesh",
    "client": "Coffee by Di Bella",
    "scope": "Exterior Architecture & Interior Dining Experience",
    "year": "2024",
    "featured": true,
    "order": 1,
    "summary": "Designed as more than a place for coffee, Coffee by Di Bella brings together hospitality, movement, and visual identity within a layered contemporary environment.",
    "description": "Designed as more than a place for coffee, Coffee by Di Bella brings together hospitality, movement, and visual identity within a layered contemporary environment.\n\nKey Design Pillars:\n01 — Warm Ambience: Soft lighting, natural textures and comfortable seating.\n02 — Strong Identity: Distinctive architectural details that give the café its own character.\n03 — Thoughtful Functionality: Every element is designed with purpose and ease.",
    "page": 3,
    "coverImage": "/images/projects/coffee-by-di-bella/p3_2_627x627.png",
    "galleryImages": [
      "/images/projects/coffee-by-di-bella/p3_2_627x627.png",
      "/images/projects/coffee-by-di-bella/p3_4_657x599.png"
    ]
  },
  {
    "slug": "residence-at-omaxe-mathura",
    "title": "Residence at Omaxe",
    "category": "Residential",
    "subtitle": "A Legacy of Design & Trust",
    "location": "Mathura, Uttar Pradesh",
    "client": "Private Commission (With Hema Malini Ji)",
    "scope": "Comprehensive Luxury Villa Interior & Custom Art Curation",
    "year": "2024",
    "featured": true,
    "order": 2,
    "summary": "At Antaara Design Studio every project is a story, every space is an emotion, and every detail reflects timeless craftsmanship. A privilege of trust featuring an artwork tribute to Dharmendra Ji.",
    "description": "At Antaara Design Studio every project is a story, every space is an emotion, and every detail reflects timeless craftsmanship.\n\nA bespoke residence designed at Omaxe, Mathura, representing a rare legacy of trust and creative kinship with Hema Malini Ji, featuring dedicated artistic commissions and tributes celebrating legacy, memory and architectural stillness.",
    "page": 4,
    "coverImage": "/images/projects/omaxe-mathura-residence/p4_2_1402x1122.png",
    "galleryImages": [
      "/images/projects/omaxe-mathura-residence/p4_2_1402x1122.png",
      "/images/projects/omaxe-mathura-residence/p4_0_1600x720.jpeg",
      "/images/projects/omaxe-mathura-residence/p4_1_1032x1172.jpeg"
    ]
  },
  {
    "slug": "corporate-office-kolkata",
    "title": "Global Automotive Corporate Office",
    "category": "Commercial",
    "subtitle": "Commanding Headquarters for Leading Automotive Brand",
    "location": "Kolkata, West Bengal",
    "client": "Leading Global Automotive Company",
    "scope": "Executive Suites, Boardrooms, Open Workspaces & Brand Lounge",
    "year": "2023",
    "featured": false,
    "order": 3,
    "summary": "A dynamic corporate workspace balancing aerodynamic sophistication, executive quietude, and collaborative clarity for an international automotive titan.",
    "description": "Envisioned and executed for one of the world's leading automotive brands, this Kolkata headquarters combines corporate grandeur with human-centric acoustic and lighting treatments. Sleek metal trims, warm wood veneers, and fluid zoning echo automotive engineering precision.",
    "page": 5,
    "coverImage": "/images/projects/corporate-office-kolkata/corporate_main_office.jpg",
    "galleryImages": [
      "/images/projects/corporate-office-kolkata/corporate_main_office.jpg"
    ]
  },
  {
    "slug": "bcm-planet-luxury-residence",
    "title": "3 BHK Luxury Residence",
    "category": "Residential",
    "subtitle": "A Home Around Everyday Luxury",
    "location": "BCM Planet, Vijay Nagar, Indore",
    "client": "Mr. Ruchir",
    "scope": "Full Interior Architecture, Bespoke Millwork & Lighting",
    "year": "2024",
    "featured": true,
    "order": 4,
    "summary": "This 3 BHK residence blends modern elegance with warm, personalized details to create a home that feels both refined and inviting.",
    "description": "From thoughtfully planned spaces to timeless finishes, every element reflects a story of comfort, style and individuality. Designed for Mr. Ruchir at BCM Planet, Vijay Nagar, this apartment showcases nuanced beige palettes, brass reveals, custom stone dining surfaces, and tranquil bedroom suites.",
    "page": 6,
    "coverImage": "/images/projects/bcm-planet-luxury-residence/bcm_living_room.jpg",
    "galleryImages": [
      "/images/projects/bcm-planet-luxury-residence/bcm_living_room.jpg",
      "/images/projects/bcm-planet-luxury-residence/bcm_bedroom.jpg",
      "/images/projects/bcm-planet-luxury-residence/bcm_dining.jpg",
      "/images/projects/bcm-planet-luxury-residence/bcm_kitchen.jpg"
    ]
  },
  {
    "slug": "hotel-pride-cottages",
    "title": "Hotel Pride — Luxury Cottages",
    "category": "Hospitality",
    "subtitle": "A Serene Sanctuary in the City",
    "location": "Hotel Pride, Bypass Road, Indore",
    "client": "Hotel Pride Group",
    "scope": "Cottage Architecture, Private Verandahs, Luxury Ensuites",
    "year": "2024",
    "featured": true,
    "order": 5,
    "summary": "Designed as a serene retreat within Hotel Pride, these luxury cottages combine timeless elegance with modern comfort, offering a seamless hospitality experience.",
    "description": "Conceived as secluded garden sanctuaries on Bypass Road, these luxury cottages harmonize earthy textures, vaulted warm wood ceilings, hand-picked upholstery, and deep connection to landscaped outdoors, setting a new benchmark for resort living.",
    "page": 7,
    "coverImage": "/images/projects/hotel-pride-cottages/pride_pool_night.jpg",
    "galleryImages": [
      "/images/projects/hotel-pride-cottages/pride_pool_night.jpg",
      "/images/projects/hotel-pride-cottages/pride_cottage_suite.jpg",
      "/images/projects/hotel-pride-cottages/pride_tent_exterior.jpg"
    ]
  },
  {
    "slug": "after-hours-nightclub",
    "title": "After Hours — Nightclub & Lounge",
    "category": "Hospitality",
    "subtitle": "Where The Night Comes Alive",
    "location": "Hotel Pride, Bypass Road, Indore",
    "client": "Hotel Pride Hospitality",
    "scope": "Immersive Acoustic Architecture, LED Lighting & Custom Bar Design",
    "year": "2024",
    "featured": true,
    "order": 6,
    "summary": "A space that comes alive after sunset. Envisioned as a high-energy nightclub experience—bold, dramatic and immersive.",
    "description": "From the mood lighting to custom sculptural details, every element is crafted to elevate the spirit of the night and create unforgettable moments. Acoustic baffled ceilings, illuminated dark obsidian bars, velvet banquettes, and deep cinematic tones immerse guests in an electrifying atmosphere.",
    "page": 8,
    "coverImage": "/images/projects/after-hours-nightclub/afterhours_main_lounge.jpg",
    "galleryImages": [
      "/images/projects/after-hours-nightclub/afterhours_main_lounge.jpg",
      "/images/projects/after-hours-nightclub/afterhours_vip_lounge.jpg",
      "/images/projects/after-hours-nightclub/afterhours_red_tunnel.jpg"
    ]
  },
  {
    "slug": "tiffany-blues-fine-dining",
    "title": "Tiffany Blues",
    "category": "Hospitality",
    "subtitle": "Fine Dining Restaurant",
    "location": "Hotel Pride, Bypass Road, Indore",
    "client": "Hotel Pride Dining",
    "scope": "Fine Dining Hall, Private Dining Rooms, Wine Displays",
    "year": "2023",
    "featured": true,
    "order": 7,
    "summary": "A fine dining destination where elegant interiors, rich textures, and ambient lighting come together to create a sophisticated and unforgettable culinary experience.",
    "description": "Tiffany Blues pairs European fine dining poise with soft ambient illumination, curved velvet seating, brushed gold accents, and bespoke table appointments designed to honor every gastronomic occasion.",
    "page": 9,
    "coverImage": "/images/projects/tiffany-blues-dining/tiffany_main_dining.jpg",
    "galleryImages": [
      "/images/projects/tiffany-blues-dining/tiffany_main_dining.jpg"
    ]
  },
  {
    "slug": "hotel-pride-convention-centre",
    "title": "Hotel Pride — Convention Centre",
    "category": "Commercial",
    "subtitle": "Grand Celebrations & Prestigious Events",
    "location": "Hotel Pride, Indore",
    "client": "Hotel Pride Group",
    "scope": "Grand Ballroom, Pre-Function Foyer, Acoustic Partitions",
    "year": "2023",
    "featured": false,
    "order": 8,
    "summary": "Designed for grand celebrations and prestigious events, combining timeless elegance with functional design for weddings, conferences, and unforgettable gatherings.",
    "description": "Expansive double-height ballroom with crystal chandeliers, sound-engineered wall paneling, modular conference divisions, and luxurious bridal green rooms suited for elite national gatherings.",
    "page": 10,
    "coverImage": "/images/projects/hotel-pride-convention/convention_ballroom_main.jpg",
    "galleryImages": [
      "/images/projects/hotel-pride-convention/convention_ballroom_main.jpg"
    ]
  },
  {
    "slug": "kamna-joshi-beauty-academy",
    "title": "Kamna Joshi Commercial Beauty Academy",
    "category": "Commercial",
    "subtitle": "International School Of Beauty",
    "location": "Indore, Madhya Pradesh",
    "client": "Ms. Kamna Joshi, Founder & Promoter",
    "scope": "Training Studios, Demonstration Theatres, Consultation Lounges",
    "year": "2023",
    "featured": false,
    "order": 9,
    "summary": "Designed as a premium beauty academy, blending elegance and functionality to create an inspiring environment where learning, creativity, and professional excellence thrive.",
    "description": "High-illumination vanity stations, sleek minimalist cabinetry, rose gold metallic highlights, and ergonomic layout designed for high-calibre cosmetology instruction.",
    "page": 11,
    "coverImage": "/images/projects/kamna-joshi-beauty-academy/beauty_academy_main.jpg",
    "galleryImages": [
      "/images/projects/kamna-joshi-beauty-academy/beauty_academy_main.jpg"
    ]
  },
  {
    "slug": "vinod-dhar-residence",
    "title": "Vinod Dhar’s Residence",
    "category": "Residential",
    "subtitle": "2 BHK Studio Apartment",
    "location": "Bengali Square, Indore",
    "client": "Mr. Vinod Dhar",
    "scope": "Complete Space Planning, Custom Modular Cabinetry, Lighting",
    "year": "2023",
    "featured": true,
    "order": 10,
    "summary": "A reflection of understated elegance and intelligent design. Every corner is thoughtfully planned to enhance functionality while creating a warm, timeless ambience.",
    "description": "“Kirti Ji understood our vision and transformed our imagination into reality. Every space has been created with care, comfort and purpose.” — Mr. Vinod Dhar.\n\nThis residence proves that compact urban luxury thrives when space efficiency is matched with warm textures, hidden storage, muted neutrals, and natural daylight orientation.",
    "page": 12,
    "coverImage": "/images/projects/vinod-dhar-residence/vinod_living_clean.jpg",
    "galleryImages": [
      "/images/projects/vinod-dhar-residence/vinod_living.jpg",
      "/images/projects/vinod-dhar-residence/vinod_bedroom.jpg",
      "/images/projects/vinod-dhar-residence/vinod_dining.jpg",
      "/images/projects/vinod-dhar-residence/vinod_entrance_foyer.jpg"
    ]
  },
  {
    "slug": "bengali-square-3bhk",
    "title": "3 BHK Residence at Bengali Square",
    "category": "Residential",
    "subtitle": "Refined Aesthetics & Functional Elegance",
    "location": "Bengali Square, Indore",
    "client": "Private Client",
    "scope": "Living, Dining, Master Suite & Terraces",
    "year": "2024",
    "featured": false,
    "order": 11,
    "summary": "Every element, from the choice of materials to the play of light, has been carefully curated to create a space that is warm, welcoming and enduringly beautiful.",
    "description": "A sanctuary of peaceful tones, fluted wall accents, warm travertine finishes, and layered drapery creating an organic transition between day and night living.",
    "page": 13,
    "coverImage": "/images/projects/bengali-square-residence/bengali_living_clean.jpg",
    "galleryImages": [
      "/images/projects/bengali-square-residence/bengali_living_main.jpg"
    ]
  },
  {
    "slug": "platinum-paradise-residence",
    "title": "Residence at Platinum Paradise",
    "category": "Residential",
    "subtitle": "Designed with the Family, Not Just for the Family",
    "location": "Platinum Paradise, Indore",
    "client": "Private Family",
    "scope": "Full 3 BHK Interior Design & Custom Furniture",
    "year": "2023",
    "featured": false,
    "order": 12,
    "summary": "A home where every corner tells a story. Platinum Paradise blends modern elegance with warmth, thoughtfully designed to create a timeless space for comfortable family living.",
    "description": "Curated with multi-generational living at its core. Warm oak woodwork, durable premium upholstery, intelligent kitchen ergonomics, and serene prayer and study corners.",
    "page": 14,
    "coverImage": "/images/projects/platinum-paradise-residence/platinum_living_clean.jpg",
    "galleryImages": [
      "/images/projects/platinum-paradise-residence/p14_6_674x842.jpeg"
    ]
  },
  {
    "slug": "grand-exotica-upendra-dhar",
    "title": "Residence at Grand Exotica",
    "category": "Residential",
    "subtitle": "A Celebration of Values, Knowledge, and Timeless Elegance",
    "location": "Grand Exotica, Bengali Square, Indore",
    "client": "Dr. Upendra Dhar",
    "scope": "Library, Formal Living, Art Niches & Private Chambers",
    "year": "2024",
    "featured": true,
    "order": 13,
    "summary": "A space designed to inspire calm, encourage reflection and elevate everyday living with scholarly poise.",
    "description": "Commissioned by esteemed academician Dr. Upendra Dhar, this home integrates extensive private library alcoves, contemplative reading zones, warm timber ceilings, and curated devotional art.",
    "page": 15,
    "coverImage": "/images/projects/grand-exotica-upendra-dhar/grand_exotica_clean.jpg",
    "galleryImages": [
      "/images/projects/grand-exotica-upendra-dhar/grand_exotica_clean.jpg",
      "/images/projects/grand-exotica-upendra-dhar/grand_exotica_dining.jpg"
    ]
  },
  {
    "slug": "luxury-bridal-experience-studio",
    "title": "Luxury Bridal Experience Studio",
    "category": "Retail",
    "subtitle": "Bespoke Bridal Couture Atelier",
    "location": "New Palasia, Indore",
    "client": "Haute Couture Label",
    "scope": "Private Fitting Suites, 360-degree Mirrored Arenas, VIP Lounge",
    "year": "2024",
    "featured": true,
    "order": 14,
    "summary": "A luxurious bridal couture studio designed to create an unforgettable experience for every bride, blending rich textures, bespoke detailing and warm ambient lighting.",
    "description": "Champagne velvet paneling, arching gilded entryways, soft daylight-balanced color rendition indexing luminaires, and intimate family viewing sanctuaries.",
    "page": 16,
    "coverImage": "/images/projects/luxury-bridal-experience-studio/bridal_studio_clean.jpg",
    "galleryImages": [
      "/images/projects/luxury-bridal-experience-studio/bridal_studio_clean.jpg"
    ]
  },
  {
    "slug": "luxury-automotive-experience",
    "title": "Luxury Automotive Dealership & Experience Centre",
    "category": "Commercial",
    "subtitle": "Elevated Customer Journey & Architecture",
    "location": "Satna & Indore, Madhya Pradesh",
    "client": "Premium Automobile Dealership Network",
    "scope": "Vehicle Display Floor, Handover Pavilion, VIP Customer Lounge",
    "year": "2024",
    "featured": false,
    "order": 15,
    "summary": "A fully designed automotive dealership and customer experience touchpoint reflecting brand excellence, sophistication, and seamless architectural flow.",
    "description": "High-spec polished concrete floors, matte black structural trusses, seamless back-lit stretch ceilings, and bespoke leather seating pods for vehicle personalization.",
    "page": 17,
    "coverImage": "/images/projects/luxury-automotive-dealership/dealership_clean.jpg",
    "galleryImages": [
      "/images/projects/luxury-automotive-dealership/dealership_main.jpg"
    ]
  },
  {
    "slug": "sky-luxuria-4bhk",
    "title": "Luxury 4 BHK Sky Residence",
    "category": "Residential",
    "subtitle": "Sky Luxuria, Nipania",
    "location": "Sky Luxuria, Nipania, Indore",
    "client": "Private Family",
    "scope": "Penthouse Level 4 BHK Architecture & Panoramic Balconies",
    "year": "2024",
    "featured": true,
    "order": 16,
    "summary": "Crafted for a family that cherishes comfort, togetherness and timeless design, blending modern luxury with warm natural elements.",
    "description": "Soaring panoramic vistas over Nipania met with Italian Statuario marble floors, bespoke walnut paneling, automated mood settings, and seamless glass balustrade balconies.",
    "page": 21,
    "coverImage": "/images/projects/sky-luxuria-4bhk/sky_luxuria_living.jpg",
    "galleryImages": [
      "/images/projects/sky-luxuria-4bhk/sky_luxuria_living.jpg"
    ]
  },
  {
    "slug": "cravings-beats-and-treats",
    "title": "Cravings — Beats & Treats",
    "category": "Hospitality",
    "subtitle": "A Vibrant & Youthful Café Experience",
    "location": "Indore, Madhya Pradesh",
    "client": "Cravings Café",
    "scope": "Themed Café Interiors, Custom Scooter Installations, Lighting",
    "year": "2023",
    "featured": false,
    "order": 17,
    "summary": "Designed as a vibrant café blending fun, flavour, and imagination into a space that delights people of all ages with cheerful colours and quirky character.",
    "description": "Playful retro pop aesthetics, custom upcycled scooter installations, neon accents, and modular seating designed for youth gatherings and celebration.",
    "page": 23,
    "coverImage": "/images/projects/cravings-beats-and-treats/cravings_cafe_clean.jpg",
    "galleryImages": [
      "/images/projects/cravings-beats-and-treats/cravings_cafe_clean.jpg"
    ]
  },
  {
    "slug": "interiors-selfie-salon",
    "title": "Interiors Selfie Commercial Salon",
    "category": "Commercial",
    "subtitle": "Contemporary Beauty & Wellness Destination",
    "location": "C21 Mall, Indore",
    "client": "Interiors Selfie",
    "scope": "Styling Bays, Spa Cabins, Pedicure Pods, Reception",
    "year": "2023",
    "featured": false,
    "order": 18,
    "summary": "A chic and contemporary salon thoughtfully designed to elevate the beauty experience through a seamless blend of luxury, comfort, and modern elegance.",
    "description": "Curved organic partitions, fluted glass screens, warm brass fixtures, and soft flattering illumination creating a boutique retail and pampering sanctuary inside C21 Mall.",
    "page": 28,
    "coverImage": "/images/projects/interiors-selfie-salon/salon_clean.jpg",
    "galleryImages": [
      "/images/projects/interiors-selfie-salon/salon_clean.jpg"
    ]
  },
  {
    "slug": "delhi-world-public-school",
    "title": "Delhi World Public School",
    "category": "Institutional",
    "subtitle": "Where Learning Meets Design",
    "location": "Kshipra, Madhya Pradesh",
    "client": "Delhi World Public School Foundation",
    "scope": "Campus Spatial Planning, Creative Activity Corridors, Library",
    "year": "2024",
    "featured": false,
    "order": 19,
    "summary": "A school is not simply a building with classrooms. It is a space where young minds spend some of the most important years of their lives.",
    "description": "Every corridor, classroom, activity area and common space contributes to how children learn, interact and grow. Bright daylight-oriented atriums, acoustic corkboards, sensory play niches, and expansive modern reading amphitheatres.",
    "page": 29,
    "coverImage": "/images/projects/delhi-world-public-school/p29_0_1112x742.png",
    "galleryImages": [
      "/images/projects/delhi-world-public-school/p29_0_1112x742.png"
    ]
  }
];
