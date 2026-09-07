import { getProjects } from "@/lib/db";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import StudioIntro from "@/components/StudioIntro";
import FounderSection from "@/components/FounderSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import ArchitecturalIndex from "@/components/ArchitecturalIndex";
import HorizontalGallery from "@/components/HorizontalGallery";
import LightingExperience from "@/components/LightingExperience";
import SignatureDetails from "@/components/SignatureDetails";
import PhilosophySection from "@/components/PhilosophySection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";
import JournalPreviewSection from "@/components/JournalPreviewSection";
import ContactSection from "@/components/ContactSection";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const projects = await getProjects();

  return (
    <div className="relative w-full overflow-hidden">
      {/* 1. Fullscreen Cinematic Hero Experience */}
      <HeroSection />

      {/* 2. Endless Luxury Architectural Marquee Ribbon */}
      <MarqueeBanner />

      {/* 3. Light Editorial Studio Introduction */}
      <StudioIntro />

      {/* 4. Dark Cinematic Founder Portrait & Narrative */}
      <FounderSection />

      {/* 5. Editorial Selected Work Chapters */}
      <SelectedWorkSection projects={projects} />

      {/* 6. Interactive Architectural Index with Floating Photographic Portal */}
      <ArchitecturalIndex projects={projects} />

      {/* 7. Horizontal Gallery: Collection of Typological Spaces */}
      <HorizontalGallery />

      {/* 8. Interactive Diurnal Day/Night Lighting Experience */}
      <LightingExperience />

      {/* 9. Five Pillars: Signature Detail Interactive Showcase */}
      <SignatureDetails />

      {/* 10. Dark Architectural Philosophy Section */}
      <PhilosophySection />

      {/* 11. Minimalist Typographic Services & Capabilities */}
      <ServicesSection />

      {/* 12. Authentic Client Testimonial (Vinod Dhar Quote) */}
      <TestimonialSection />

      {/* 13. Studio Journal Perspectives Preview */}
      <JournalPreviewSection />

      {/* 14. Closing Statement & Luxury Lead Inquiry Experience */}
      <ContactSection />
    </div>
  );
}
