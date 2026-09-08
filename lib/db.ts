import fs from "fs";
import path from "path";
import { supabase, isSupabaseConfigured } from "./supabase";
import { INITIAL_PROJECTS, Project } from "@/data/seed-projects";
export type { Project };

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  project_type: string;
  location: string;
  budget?: string;
  message?: string;
  status: "New" | "Contacted" | "Qualified" | "Closed";
  created_at: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const PROJECTS_FILE = path.join(DATA_DIR, "projects.json");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");
const SETTINGS_FILE = path.join(DATA_DIR, "settings.json");

// Helper to ensure files exist
function ensureJsonFile<T>(filePath: string, defaultData: T): T {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify(defaultData, null, 2), "utf-8");
      return defaultData;
    }
    const content = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(content) as T;
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err);
    return defaultData;
  }
}

function writeJsonFile<T>(filePath: string, data: T): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    console.error(`Error writing ${filePath}:`, err);
  }
}

// ----------------- PROJECTS -----------------

export async function getProjects(): Promise<Project[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("order", { ascending: true });

      if (!error && data && data.length > 0) {
        return data.map((p) => ({
          slug: p.slug,
          title: p.title,
          category: p.category,
          subtitle: p.subtitle || "",
          location: p.location,
          client: p.client || "",
          scope: p.scope || "",
          year: p.year || "",
          featured: p.featured ?? false,
          order: p.order ?? 0,
          summary: p.summary || "",
          description: p.description || "",
          coverImage: p.cover_image,
          galleryImages: Array.isArray(p.gallery_images) ? p.gallery_images : [],
        }));
      }
    } catch (err) {
      console.warn("Supabase projects query failed, falling back to local storage:", err);
    }
  }

  const projects = ensureJsonFile<Project[]>(PROJECTS_FILE, INITIAL_PROJECTS);
  return projects.sort((a, b) => a.order - b.order);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getProjects();
  return projects.find((p) => p.slug === slug) || null;
}

export async function createProject(project: Project): Promise<Project> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { error } = await supabase.from("projects").insert([
        {
          slug: project.slug,
          title: project.title,
          category: project.category,
          subtitle: project.subtitle,
          location: project.location,
          client: project.client,
          scope: project.scope,
          year: project.year,
          featured: project.featured,
          order: project.order,
          summary: project.summary,
          description: project.description,
          cover_image: project.coverImage,
          gallery_images: project.galleryImages,
        },
      ]);
      if (error) console.error("Supabase insert project error:", error);
    } catch (err) {
      console.error("Supabase create project failed:", err);
    }
  }

  const projects = ensureJsonFile<Project[]>(PROJECTS_FILE, INITIAL_PROJECTS);
  const existsIndex = projects.findIndex((p) => p.slug === project.slug);
  if (existsIndex >= 0) {
    projects[existsIndex] = project;
  } else {
    projects.push(project);
  }
  writeJsonFile(PROJECTS_FILE, projects);
  return project;
}

export async function updateProject(slug: string, updates: Partial<Project>): Promise<Project | null> {
  if (isSupabaseConfigured && supabase) {
    try {
      const payload: Record<string, any> = { ...updates };
      if (updates.coverImage) payload.cover_image = updates.coverImage;
      if (updates.galleryImages) payload.gallery_images = updates.galleryImages;
      delete payload.coverImage;
      delete payload.galleryImages;

      await supabase.from("projects").update(payload).eq("slug", slug);
    } catch (err) {
      console.error("Supabase update project failed:", err);
    }
  }

  const projects = ensureJsonFile<Project[]>(PROJECTS_FILE, INITIAL_PROJECTS);
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return null;

  projects[index] = { ...projects[index], ...updates };
  writeJsonFile(PROJECTS_FILE, projects);
  return projects[index];
}

export async function deleteProject(slug: string): Promise<boolean> {
  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from("projects").delete().eq("slug", slug);
    } catch (err) {
      console.error("Supabase delete project failed:", err);
    }
  }

  const projects = ensureJsonFile<Project[]>(PROJECTS_FILE, INITIAL_PROJECTS);
  const filtered = projects.filter((p) => p.slug !== slug);
  writeJsonFile(PROJECTS_FILE, filtered);
  return true;
}

// ----------------- LEADS -----------------

export async function getLeads(): Promise<Lead[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        return data as Lead[];
      }
    } catch (err) {
      console.warn("Supabase leads query failed, falling back to local file:", err);
    }
  }

  const leads = ensureJsonFile<Lead[]>(LEADS_FILE, []);
  return leads.sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
}

export async function createLead(leadData: Omit<Lead, "id" | "created_at">): Promise<Lead> {
  const newLead: Lead = {
    ...leadData,
    id: "lead-" + Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
    created_at: new Date().toISOString(),
  };

  if (isSupabaseConfigured && supabase) {
    try {
      const { error } = await supabase.from("leads").insert([newLead]);
      if (error) console.error("Supabase create lead error:", error);
    } catch (err) {
      console.error("Supabase create lead failed:", err);
    }
  }

  const leads = ensureJsonFile<Lead[]>(LEADS_FILE, []);
  leads.unshift(newLead);
  writeJsonFile(LEADS_FILE, leads);
  return newLead;
}

export async function updateLeadStatus(id: string, status: Lead["status"]): Promise<Lead | null> {
  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from("leads").update({ status }).eq("id", id);
    } catch (err) {
      console.error("Supabase update lead status failed:", err);
    }
  }

  const leads = ensureJsonFile<Lead[]>(LEADS_FILE, []);
  const lead = leads.find((l) => l.id === id);
  if (!lead) return null;

  lead.status = status;
  writeJsonFile(LEADS_FILE, leads);
  return lead;
}

export async function deleteLead(id: string): Promise<boolean> {
  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from("leads").delete().eq("id", id);
    } catch (err) {
      console.error("Supabase delete lead failed:", err);
    }
  }

  const leads = ensureJsonFile<Lead[]>(LEADS_FILE, []);
  const filtered = leads.filter((l) => l.id !== id);
  writeJsonFile(LEADS_FILE, filtered);
  return true;
}

// ----------------- SETTINGS -----------------

export async function getSettings(): Promise<Record<string, any>> {
  const defaultSettings = {
    studioName: "ANTAARA DESIGN STUDIO",
    founderName: "KIRTI JAISWAL RAJPAL",
    tagline: "Spaces That Tell A Story",
    founderPositioning:
      "Founder of Antaara Design Studio, a renowned interior designer based in Indore, specializing in elegant residential, commercial, and hospitality spaces.",
    location: "Indore, Madhya Pradesh, India",
    phone: "+91 98260 00000",
    email: "contact@antaaradesignstudio.com",
    instagram: "https://instagram.com/antaaradesignstudio",
    announcement: "Accepting selective residential & hospitality commissions for 2024-2025.",
  };

  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase.from("settings").select("*");
      if (!error && data && data.length > 0) {
        const mapped: Record<string, any> = {};
        data.forEach((row) => {
          mapped[row.key] = row.value;
        });
        return { ...defaultSettings, ...mapped };
      }
    } catch (err) {
      console.warn("Supabase settings query failed, falling back to local file:", err);
    }
  }

  return ensureJsonFile<Record<string, any>>(SETTINGS_FILE, defaultSettings);
}

export async function updateSettings(settings: Record<string, any>): Promise<Record<string, any>> {
  if (isSupabaseConfigured && supabase) {
    try {
      const upserts = Object.entries(settings).map(([key, value]) => ({
        key,
        value,
        updated_at: new Date().toISOString(),
      }));
      await supabase.from("settings").upsert(upserts);
    } catch (err) {
      console.error("Supabase update settings failed:", err);
    }
  }

  writeJsonFile(SETTINGS_FILE, settings);
  return settings;
}
