export interface JournalArticle {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  image: string;
}

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    slug: "the-art-of-light",
    title: "THE ART OF LIGHT",
    subtitle: "Sculpting Emotion, Shadow & Depth in Contemporary Architecture",
    category: "Illumination",
    date: "November 2024",
    readTime: "4 min read",
    summary:
      "Why light is not merely illumination—it is the subtle maestro of mood, texture, and temporal rhythm inside a home.",
    content: `Light is the silent architect of every interior. Without carefully orchestrated illumination, the most opulent Calacatta marble appears inert, and the finest open-grain walnut remains flat.

At Antaara Design Studio, lighting design begins long before fixtures are selected. We trace the sun's trajectory from dawn to twilight, calculating how natural light spills across floors and reveals the tactile brush of lime-plastered walls.

When dusk settles, our philosophy turns to layered indirect warmth. We prioritize concealed linear coves, low-glare downlights with warm dimming curves (2700K down to 1800K), and bespoke decorative luminaires that act as luminous sculptures rather than utilitarian floodlights.

The result is a home that transitions effortlessly—inviting clarity during productive daytime hours and enveloping residents in tranquil sanctuary as the evening unfolds.`,
    image: "/images/studio/hero-cover.jpg",
  },
  {
    slug: "designing-for-everyday-luxury",
    title: "DESIGNING FOR EVERYDAY LUXURY",
    subtitle: "Why True Luxury Lives in Quiet Practicality Rather Than Excess",
    category: "Philosophy",
    date: "October 2024",
    readTime: "5 min read",
    summary:
      "A home should never feel like a museum where one is hesitant to touch. Genuine luxury is seamless living.",
    content: `There exists a prevalent misconception that luxury interior design requires gilded surfaces, fragile ornaments, and ostentatious scale. In truth, genuine luxury is an invisible sensation: it is how naturally a kitchen drawer slides open; it is the absence of acoustic echo in a double-height living room; it is having a soft reading light positioned precisely where your arm rests.

When designing private residences such as our commissions at BCM Planet and Grand Exotica, our guiding principle is always human-centric function. We craft hidden storage that banishes visual clutter without requiring effort. We select soft performance velvets and durable natural linens that welcome children and pets.

Luxury is not about impressing a guest on day one; it is about providing solace and comfort on day one thousand.`,
    image: "/images/pages/page_06.jpg",
  },
  {
    slug: "materials-that-age-beautifully",
    title: "MATERIALS THAT AGE BEAUTIFULLY",
    subtitle: "The Poetics of Honest Stone, Timber & Patinated Metals",
    category: "Materiality",
    date: "September 2024",
    readTime: "4 min read",
    summary:
      "The enduring appeal of unlacquered brass, travertine, and oiled oak that grow richer with time.",
    content: `In an era dominated by synthetic laminates and rapid trends, Antaara Design Studio deliberately anchors its palettes in honest, organic matter. 

We celebrate the slight veining variation in honed limestone, the tactile grain of wire-brushed oak, and the gentle darkening of unlacquered brass hardware where fingers naturally press. These materials do not deteriorate with age—they collect memory.

A home constructed with authentic materiality feels grounded and permanent. It whispers timelessness and connects its residents with the tactile poetry of the earth.`,
    image: "/images/pages/page_12.jpg",
  },
  {
    slug: "behind-the-design-how-a-space-comes-to-life",
    title: "BEHIND THE DESIGN: HOW A SPACE COMES TO LIFE",
    subtitle: "From First Conceptual Sketch to the White-Glove Handover",
    category: "Craft & Execution",
    date: "August 2024",
    readTime: "6 min read",
    summary:
      "A behind-the-scenes view of our studio's rigorous coordination with master artisans and site engineers.",
    content: `Transforming empty concrete slabs into an evocative sanctuary is an orchestral endeavor. It demands not only aesthetic vision, but rigorous engineering discipline.

Every millimeter of our joinery details is drafted in three dimensions before timber is touched. Our design directors visit stone quarries to personally inspect slabs for color continuity. On site, electrical conduits and air conditioning plenums are coordinated with millwork reveals down to the millimeter.

When the final commission is handed over—curtains steamed, lighting calibrated, art lit—the immense labor recedes, leaving only effortless beauty and serenity.`,
    image: "/images/studio/hotel-pride-hero.jpg",
  },
];
