"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/seed-projects";
import {
  Plus,
  Edit2,
  Trash2,
  ExternalLink,
  Check,
  X,
  Sparkles,
  Loader2,
  Search,
} from "lucide-react";

export default function ProjectsManager({
  initialProjects,
}: {
  initialProjects: Project[];
}) {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [search, setSearch] = useState("");
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(
    null
  );

  const emptyProject: Project = {
    title: "",
    slug: "",
    category: "Residential",
    subtitle: "",
    location: "Indore, Madhya Pradesh",
    client: "",
    scope: "Interior Architecture & Detailing",
    year: new Date().getFullYear().toString(),
    featured: false,
    order: projects.length + 1,
    summary: "",
    description: "",
    coverImage: "/images/studio/hero-cover.jpg",
    galleryImages: ["/images/studio/hero-cover.jpg"],
  };

  const [formData, setFormData] = useState<Project>(emptyProject);

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase())
  );

  const handleStartCreate = () => {
    setFormData(emptyProject);
    setIsCreating(true);
    setEditingProject(null);
  };

  const handleStartEdit = (project: Project) => {
    setFormData(project);
    setEditingProject(project);
    setIsCreating(false);
  };

  const handleCancel = () => {
    setIsCreating(false);
    setEditingProject(null);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setFeedback(null);

    try {
      if (isCreating) {
        // Create
        const res = await fetch("/api/projects", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (res.ok && data.success) {
          setProjects([...projects, data.project]);
          setIsCreating(false);
          setFeedback({ type: "success", text: "Project created successfully!" });
        } else {
          setFeedback({ type: "error", text: data.error || "Failed to create project" });
        }
      } else if (editingProject) {
        // Update
        const res = await fetch(`/api/projects/${editingProject.slug}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (res.ok && data.success) {
          setProjects(
            projects.map((p) => (p.slug === editingProject.slug ? data.project : p))
          );
          setEditingProject(null);
          setFeedback({ type: "success", text: "Project updated successfully!" });
        } else {
          setFeedback({ type: "error", text: data.error || "Failed to update project" });
        }
      }
    } catch (err: any) {
      setFeedback({ type: "error", text: "Network error occurred." });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (slug: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      const res = await fetch(`/api/projects/${slug}`, { method: "DELETE" });
      if (res.ok) {
        setProjects(projects.filter((p) => p.slug !== slug));
        setFeedback({ type: "success", text: "Project deleted." });
      }
    } catch (err) {
      setFeedback({ type: "error", text: "Failed to delete project." });
    }
  };

  const handleToggleFeatured = async (project: Project) => {
    const updatedFeatured = !project.featured;
    try {
      const res = await fetch(`/api/projects/${project.slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ featured: updatedFeatured }),
      });
      if (res.ok) {
        setProjects(
          projects.map((p) =>
            p.slug === project.slug ? { ...p, featured: updatedFeatured } : p
          )
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-8">
      {/* Top action header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#22201E] pb-6">
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#EDE7DF] font-light">
            Project Commissions
          </h1>
          <p className="text-xs uppercase tracking-widest text-[#8A7D73] mt-1">
            MANAGE ALL {projects.length} ARCHITECTURAL COMMISSIONS
          </p>
        </div>

        <button
          onClick={handleStartCreate}
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider px-5 py-3 bg-[#B69A6A] hover:bg-[#D5C2A0] text-[#11110F] font-medium rounded transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Project</span>
        </button>
      </div>

      {/* Feedback banner */}
      {feedback && (
        <div
          className={`p-4 text-xs rounded border ${
            feedback.type === "success"
              ? "bg-emerald-950/40 border-emerald-800 text-emerald-300"
              : "bg-red-950/40 border-red-800 text-red-300"
          }`}
        >
          {feedback.text}
        </div>
      )}

      {/* Modal/Form for Create or Edit */}
      {(isCreating || editingProject) && (
        <div className="bg-[#22201E]/70 border border-[#B69A6A]/60 p-6 sm:p-8 rounded-sm backdrop-blur space-y-6 animate-fadeIn shadow-2xl">
          <div className="flex items-center justify-between border-b border-[#33302C] pb-4">
            <h2 className="font-serif text-2xl text-[#EDE7DF]">
              {isCreating ? "Add New Project Commission" : `Edit: ${editingProject?.title}`}
            </h2>
            <button
              onClick={handleCancel}
              className="p-1.5 rounded text-[#8A7D73] hover:text-[#EDE7DF]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Title */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-wider text-[#8A7D73]">
                  PROJECT TITLE *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-[#11110F] border border-[#33302C] focus:border-[#B69A6A] px-3.5 py-2.5 text-xs text-[#EDE7DF] rounded outline-none"
                />
              </div>

              {/* Slug */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-wider text-[#8A7D73]">
                  URL SLUG *
                </label>
                <input
                  type="text"
                  required
                  disabled={!isCreating}
                  value={formData.slug}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      slug: e.target.value.toLowerCase().replace(/\s+/g, "-"),
                    })
                  }
                  className="w-full bg-[#11110F] border border-[#33302C] focus:border-[#B69A6A] px-3.5 py-2.5 text-xs text-[#EDE7DF] rounded outline-none disabled:opacity-50"
                />
              </div>

              {/* Category */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-wider text-[#8A7D73]">
                  TYPOLOGY CATEGORY *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value as any })
                  }
                  className="w-full bg-[#11110F] border border-[#33302C] focus:border-[#B69A6A] px-3.5 py-2.5 text-xs text-[#EDE7DF] rounded outline-none"
                >
                  <option value="Residential">Residential</option>
                  <option value="Hospitality">Hospitality</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Retail">Retail</option>
                  <option value="Institutional">Institutional</option>
                </select>
              </div>

              {/* Subtitle */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-wider text-[#8A7D73]">
                  SUBTITLE / KEY ATTRIBUTE
                </label>
                <input
                  type="text"
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  className="w-full bg-[#11110F] border border-[#33302C] focus:border-[#B69A6A] px-3.5 py-2.5 text-xs text-[#EDE7DF] rounded outline-none"
                />
              </div>

              {/* Location */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-wider text-[#8A7D73]">
                  LOCATION *
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-[#11110F] border border-[#33302C] focus:border-[#B69A6A] px-3.5 py-2.5 text-xs text-[#EDE7DF] rounded outline-none"
                />
              </div>

              {/* Client */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-wider text-[#8A7D73]">
                  CLIENT / PATRON
                </label>
                <input
                  type="text"
                  value={formData.client}
                  onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                  className="w-full bg-[#11110F] border border-[#33302C] focus:border-[#B69A6A] px-3.5 py-2.5 text-xs text-[#EDE7DF] rounded outline-none"
                />
              </div>

              {/* Cover Image Path */}
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-[10px] uppercase tracking-wider text-[#8A7D73]">
                  COVER IMAGE URL / PATH *
                </label>
                <input
                  type="text"
                  required
                  value={formData.coverImage}
                  onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                  className="w-full bg-[#11110F] border border-[#33302C] focus:border-[#B69A6A] px-3.5 py-2.5 text-xs text-[#EDE7DF] rounded outline-none"
                />
              </div>

              {/* Order & Featured */}
              <div className="flex items-center space-x-6 pt-4">
                <label className="flex items-center space-x-2 text-xs text-[#EDE7DF] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) =>
                      setFormData({ ...formData, featured: e.target.checked })
                    }
                    className="rounded border-[#33302C] text-[#B69A6A] focus:ring-0"
                  />
                  <span>Featured on Homepage</span>
                </label>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-wider text-[#8A7D73]">
                EDITORIAL SUMMARY (1-2 SENTENCES)
              </label>
              <textarea
                rows={2}
                value={formData.summary}
                onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                className="w-full bg-[#11110F] border border-[#33302C] focus:border-[#B69A6A] px-3.5 py-2.5 text-xs text-[#EDE7DF] rounded outline-none resize-none"
              />
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-wider text-[#8A7D73]">
                PROJECT NARRATIVE / FULL STORY
              </label>
              <textarea
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-[#11110F] border border-[#33302C] focus:border-[#B69A6A] px-3.5 py-2.5 text-xs text-[#EDE7DF] rounded outline-none resize-none"
              />
            </div>

            <div className="flex items-center space-x-4 pt-2">
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider px-6 py-3 bg-[#B69A6A] hover:bg-[#D5C2A0] text-[#11110F] font-medium rounded transition-colors"
              >
                {saving ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>SAVING...</span>
                  </>
                ) : (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>SAVE PROJECT</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="text-xs uppercase tracking-wider px-5 py-3 border border-[#33302C] text-[#8A7D73] hover:text-[#EDE7DF] rounded transition-colors"
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Search & Filter Bar */}
      <div className="flex items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-[#8A7D73] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search commissions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#22201E]/40 border border-[#22201E] focus:border-[#B69A6A] pl-9 pr-4 py-2.5 text-xs text-[#EDE7DF] rounded outline-none transition-colors"
          />
        </div>
        <p className="text-xs text-[#8A7D73] font-mono">
          Showing {filteredProjects.length} of {projects.length}
        </p>
      </div>

      {/* Projects Table */}
      <div className="bg-[#22201E]/30 border border-[#22201E] rounded-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-[#22201E] text-[#8A7D73] uppercase tracking-wider bg-[#11110F]">
              <tr>
                <th className="py-3.5 px-4 font-medium">Cover</th>
                <th className="py-3.5 px-4 font-medium">Title & Typology</th>
                <th className="py-3.5 px-4 font-medium">Location</th>
                <th className="py-3.5 px-4 font-medium">Client</th>
                <th className="py-3.5 px-4 font-medium text-center">Featured</th>
                <th className="py-3.5 px-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#22201E]">
              {filteredProjects.map((p) => (
                <tr key={p.slug} className="hover:bg-[#22201E]/40 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="relative w-14 h-10 rounded overflow-hidden bg-[#11110F] border border-[#33302C]">
                      <Image
                        src={p.coverImage}
                        alt={p.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <p className="font-medium text-[#EDE7DF]">{p.title}</p>
                    <p className="text-[10px] text-[#8A7D73] uppercase tracking-wider">
                      {p.category} • /{p.slug}
                    </p>
                  </td>
                  <td className="py-3.5 px-4 text-[#EDE7DF]/80">{p.location}</td>
                  <td className="py-3.5 px-4 text-[#8A7D73]">{p.client || "—"}</td>
                  <td className="py-3.5 px-4 text-center">
                    <button
                      onClick={() => handleToggleFeatured(p)}
                      title="Toggle featured status"
                      className={`p-1.5 rounded transition-colors ${
                        p.featured
                          ? "text-[#B69A6A] bg-[#B69A6A]/15"
                          : "text-[#8A7D73] hover:text-[#EDE7DF]"
                      }`}
                    >
                      <Sparkles className="w-4 h-4" />
                    </button>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="inline-flex items-center space-x-3">
                      <Link
                        href={`/work/${p.slug}`}
                        target="_blank"
                        className="p-1 text-[#8A7D73] hover:text-[#B69A6A]"
                        title="View Public Page"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleStartEdit(p)}
                        className="p-1 text-[#8A7D73] hover:text-[#EDE7DF]"
                        title="Edit Project"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(p.slug)}
                        className="p-1 text-[#8A7D73] hover:text-red-400"
                        title="Delete Project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
