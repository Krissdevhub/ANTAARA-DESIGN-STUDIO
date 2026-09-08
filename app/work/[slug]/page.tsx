import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
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
    <div className="bg-[#180606] text-[#f7f6ef] min-h-screen select-none">
      {/* Opening Hero */}
      <section className="relative w-full pt-32 pb-14 px-6 sm:px-10 md:px-16 max-w-[1440px] mx-auto space-y-6">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.26em] text-[#d3c8bd] hover:text-[#dca82b] transition-colors font-sans"
        >
          <ArrowLeft size={14} />
          <span>Back to Selected Works</span>
        </Link>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#dca82b] font-sans font-medium">
            <span>{project.category}</span>
            <span className="text-white/30">·</span>
            <span>{project.location}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#f7f6ef] tracking-tight">
            {project.title}
          </h1>

          {project.subtitle && (
            <p className="font-serif italic text-lg sm:text-2xl text-[#d3c8bd] max-w-3xl font-light">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Cover Image */}
        {slug === "residence-at-omaxe-mathura" ? (
          <div className="relative w-full h-[520px] sm:h-[680px] rounded-2xl overflow-hidden border border-[#dca82b]/30 shadow-2xl bg-[#140404] flex items-center justify-center">
            {/* Ambient luxury blurred backdrop */}
            <div className="absolute inset-0 overflow-hidden opacity-30 filter blur-3xl scale-110 pointer-events-none">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            {/* Full uncropped portrait showing entire body, faces and golden leaf */}
            <div className="relative h-full aspect-[3/4] z-10 py-4 flex items-center justify-center">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                priority
                className="object-contain drop-shadow-[0_15px_40px_rgba(0,0,0,0.85)] rounded-xl"
              />
            </div>
          </div>
        ) : (
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#200808]">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center brightness-[0.9]"
            />
          </div>
        )}
      </section>

      {/* Fact Sheet */}
      <section className="border-y border-white/10 py-8 px-6 sm:px-10 md:px-16 bg-[#1f0707]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-sans">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#dca82b]">Location</p>
            <p className="font-medium text-[#f7f6ef]">{project.location}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#dca82b]">Client / Commission</p>
            <p className="font-medium text-[#f7f6ef]">{project.client || "Private Client"}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#dca82b]">Typology</p>
            <p className="font-medium text-[#f7f6ef]">{project.category}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#dca82b]">Execution Scope</p>
            <p className="font-medium text-[#f7f6ef]">{project.scope || "Full Turnkey Interior Architecture"}</p>
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-20 md:py-28 px-6 sm:px-10 md:px-16 max-w-4xl mx-auto space-y-6">
        <span className="text-[10px] uppercase tracking-[0.28em] text-[#dca82b] font-sans font-medium block">
          Spatial Narrative
        </span>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-[#f7f6ef] leading-snug border-l-2 border-[#dca82b] pl-6 italic">
          &ldquo;{project.summary}&rdquo;
        </h2>

        <div className="text-xs sm:text-sm text-[#d3c8bd] font-sans font-light leading-relaxed whitespace-pre-line space-y-4 pt-4">
          {project.description}
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-28 px-6 sm:px-10 md:px-16 max-w-[1440px] mx-auto space-y-12">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <span className="text-[10px] uppercase tracking-[0.24em] text-[#dca82b] font-sans">
            Archival Photography
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#d3c8bd] font-sans">
            Antaara Design Studio
          </span>
        </div>

        <div className="space-y-8">
          {project.galleryImages.map((imgSrc, idx) => {
            if (idx === 0) {
              return (
                <div key={imgSrc + idx} className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#200808]">
                  <Image
                    src={imgSrc}
                    alt={`${project.title} — Archival view ${idx + 1}`}
                    fill
                    sizes="100vw"
                    className="object-cover brightness-[0.9]"
                  />
                </div>
              );
            } else if (idx % 2 === 1 && idx + 1 < project.galleryImages.length) {
              const nextImg = project.galleryImages[idx + 1];
              return (
                <div key={imgSrc + idx} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-[#200808]">
                    <Image
                      src={imgSrc}
                      alt={`${project.title} — Detailed view ${idx + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 65vw"
                      className="object-cover brightness-[0.9]"
                    />
                  </div>
                  <div className="lg:col-span-4 relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-[#200808]">
                    <Image
                      src={nextImg}
                      alt={`${project.title} — Detail ${idx + 2}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 35vw"
                      className="object-cover brightness-[0.9]"
                    />
                  </div>
                </div>
              );
            } else if (idx % 2 === 1) {
              return (
                <div key={imgSrc + idx} className="relative aspect-[16/10] w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-[#200808]">
                  <Image
                    src={imgSrc}
                    alt={`${project.title} — Detail ${idx + 1}`}
                    fill
                    sizes="100vw"
                    className="object-cover brightness-[0.9]"
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
      </section>

      {/* Previous / Next Project Navigation */}
      <section className="border-t border-white/10 bg-[#160404] py-16 px-6 sm:px-10 md:px-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            href={`/work/${prevProject.slug}`}
            className="luxury-card group block p-6 rounded-xl border border-white/10 bg-[#200808] space-y-2 shadow-xl"
          >
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-[#dca82b] font-sans">
              <ArrowLeft size={13} className="gold-hover-arrow" />
              <span>Previous Project</span>
            </div>
            <p className="font-serif text-2xl sm:text-3xl font-light text-[#f7f6ef] group-hover:text-[#dca82b] transition-colors">
              {prevProject.title}
            </p>
            <p className="text-[10px] text-[#d3c8bd] uppercase tracking-wider font-sans">
              {prevProject.category} · {prevProject.location}
            </p>
          </Link>

          <Link
            href={`/work/${nextProject.slug}`}
            className="luxury-card group block p-6 rounded-xl border border-white/10 bg-[#200808] space-y-2 md:text-right shadow-xl"
          >
            <div className="flex items-center md:justify-end gap-2 text-[10px] uppercase tracking-[0.24em] text-[#dca82b] font-sans">
              <span>Next Project</span>
              <ArrowRight size={13} />
            </div>
            <p className="font-serif text-2xl sm:text-3xl font-light text-[#f7f6ef] group-hover:text-[#dca82b] transition-colors">
              {nextProject.title}
            </p>
            <p className="text-[10px] text-[#d3c8bd] uppercase tracking-wider font-sans">
              {nextProject.category} · {nextProject.location}
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
