import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { getProjects, getProjectBySlug } from "@/lib/db";

export const dynamic = "force-dynamic";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Antaara Design Studio`,
    description: project.summary || project.subtitle,
    openGraph: {
      title: `${project.title} — Antaara Design Studio`,
      description: project.summary,
      images: [{ url: project.coverImage }],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  const allProjects = await getProjects();

  if (!project) {
    notFound();
  }

  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const prevProject =
    currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  return (
    <div className="bg-[#F5F1EB] text-[#11110F] min-h-screen">
      {/* 1. Fullscreen Cinematic Cover Hero */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-end justify-center bg-[#11110F] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority
          className="object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11110F] via-[#11110F]/40 to-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pb-16 space-y-4">
          <Link
            href="/work"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#B69A6A] hover:text-[#EDE7DF] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO ARCHIVE</span>
          </Link>

          <div className="flex items-center space-x-3 text-[11px] uppercase tracking-[0.35em] text-[#EDE7DF]/80 font-sans">
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.location}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#F5F1EB] leading-tight">
            {project.title}
          </h1>

          {project.subtitle && (
            <p className="font-serif italic text-lg sm:text-xl text-[#B9ADA3] max-w-2xl">
              {project.subtitle}
            </p>
          )}
        </div>
      </section>

      {/* 2. Metadata & Fact Sheet Banner */}
      <section className="border-y border-[#DCD0C5] bg-[#EDE7DF] py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8A7D73]">LOCATION</p>
            <p className="font-medium text-[#11110F]">{project.location}</p>
          </div>

          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8A7D73]">CLIENT</p>
            <p className="font-medium text-[#11110F]">{project.client || "Private Commission"}</p>
          </div>

          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8A7D73]">TYPOLOGY</p>
            <p className="font-medium text-[#11110F]">{project.category}</p>
          </div>

          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8A7D73]">SCOPE & COMPLETION</p>
            <p className="font-medium text-[#11110F]">{project.scope || "Architecture & Interiors"}</p>
          </div>
        </div>
      </section>

      {/* 3. Project Editorial Story */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="space-y-10">
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#B69A6A] font-sans">
            PROJECT NARRATIVE
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#11110F] leading-tight">
            “{project.summary}”
          </h2>

          <div className="h-[1px] w-20 bg-[#B69A6A]" />

          <div className="text-base sm:text-lg text-[#22201E] font-light leading-relaxed whitespace-pre-line space-y-4">
            {project.description}
          </div>
        </div>
      </section>

      {/* 4. Curated Image Sequence */}
      <section className="pb-28 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
        <div className="flex items-center justify-between pb-6 border-b border-[#DCD0C5]">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#8A7D73] font-sans">
            PHOTOGRAPHY & ARCHITECTURAL PLATES
          </span>
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#8A7D73] font-sans">
            AUTHENTIC COMMISSIONS
          </span>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {project.galleryImages.map((imgSrc, idx) => {
            const isFullWidth = idx === 0 || idx === 3;
            return (
              <div
                key={imgSrc + idx}
                className={`relative overflow-hidden rounded-sm bg-[#EDE7DF] shadow-xl border border-[#DCD0C5] group ${
                  isFullWidth ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={imgSrc}
                  alt={`${project.title} view ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-4 left-4 text-[10px] font-mono tracking-widest text-white/90 bg-black/40 px-2.5 py-1 rounded backdrop-blur-sm">
                  PLATE 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Next & Previous Cinematic Navigation */}
      <section className="border-t border-[#DCD0C5] bg-[#11110F] text-[#F5F1EB] py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Previous */}
          <Link
            href={`/work/${prevProject.slug}`}
            className="group p-8 rounded-sm border border-[#22201E] hover:border-[#B69A6A]/60 transition-all space-y-3"
            data-cursor-text="PREV"
          >
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] text-[#8A7D73] group-hover:text-[#B69A6A] transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>PREVIOUS PROJECT</span>
            </div>
            <p className="font-serif text-2xl sm:text-3xl font-light text-[#EDE7DF] group-hover:text-[#F5F1EB]">
              {prevProject.title}
            </p>
            <p className="text-xs text-[#8A7D73] uppercase tracking-wider">
              {prevProject.category} • {prevProject.location}
            </p>
          </Link>

          {/* Next */}
          <Link
            href={`/work/${nextProject.slug}`}
            className="group p-8 rounded-sm border border-[#22201E] hover:border-[#B69A6A]/60 transition-all space-y-3 text-right"
            data-cursor-text="NEXT"
          >
            <div className="flex items-center justify-end space-x-2 text-[10px] uppercase tracking-[0.3em] text-[#8A7D73] group-hover:text-[#B69A6A] transition-colors">
              <span>NEXT PROJECT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
            <p className="font-serif text-2xl sm:text-3xl font-light text-[#EDE7DF] group-hover:text-[#F5F1EB]">
              {nextProject.title}
            </p>
            <p className="text-xs text-[#8A7D73] uppercase tracking-wider">
              {nextProject.category} • {nextProject.location}
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
