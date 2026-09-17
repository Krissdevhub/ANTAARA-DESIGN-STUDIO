import fs from "fs";
import path from "path";
import { createClient } from "@supabase/supabase-js";
import { INITIAL_PROJECTS } from "../data/seed-projects";

// Load .env.local dynamically
const envFile = path.join(process.cwd(), ".env.local");
let envVars: Record<string, string> = {};
if (fs.existsSync(envFile)) {
  const content = fs.readFileSync(envFile, "utf-8");
  content.split("\n").forEach((line) => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#")) {
      const idx = trimmed.indexOf("=");
      if (idx !== -1) {
        envVars[trimmed.substring(0, idx).trim()] = trimmed.substring(idx + 1).trim();
      }
    }
  });
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || envVars["NEXT_PUBLIC_SUPABASE_URL"] || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || envVars["SUPABASE_SERVICE_ROLE_KEY"] || "";

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Missing Supabase credentials in environment or .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const DEFAULT_SETTINGS = {
  studioName: "ANTAARA DESIGN STUDIO",
  founderName: "KIRTI JAISWAL RAJPAL",
  tagline: "Spaces That Tell A Story",
  founderPositioning:
    "Founder of Antaara Design Studio, a renowned interior designer based in Indore, specializing in elegant residential, commercial, and hospitality spaces.",
  location: "Indore, Madhya Pradesh, India",
  phone: "+91 98260 00000",
  email: "contact@antaaradesignstudio.com",
  instagram: "https://instagram.com/antaaradesignstudio",
  announcement: "Accepting selective residential & hospitality commissions for 2025-2026.",
};

async function seed() {
  console.log("Seeding Supabase database at:", supabaseUrl);

  // 1. Projects
  console.log(`Upserting ${INITIAL_PROJECTS.length} projects...`);
  for (const p of INITIAL_PROJECTS) {
    const payload = {
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
      cover_image: p.coverImage,
      gallery_images: p.galleryImages || [],
    };

    const { error } = await supabase.from("projects").upsert(payload, { onConflict: "slug" });
    if (error) {
      console.error(`Error inserting project ${p.slug}:`, error.message);
    } else {
      console.log(`✓ Project inserted: ${p.title} (${p.slug})`);
    }
  }

  // 2. Settings
  console.log("Upserting studio settings...");
  const settingsRows = Object.entries(DEFAULT_SETTINGS).map(([key, value]) => ({
    key,
    value,
    updated_at: new Date().toISOString(),
  }));

  const { error: settError } = await supabase.from("settings").upsert(settingsRows, { onConflict: "key" });
  if (settError) {
    console.error("Error inserting settings:", settError.message);
  } else {
    console.log("✓ Studio settings inserted successfully");
  }

  console.log("Seeding completed successfully!");
}

seed().catch(console.error);
