import { NextResponse } from "next/server";
import { getProjects, createProject } from "@/lib/db";
import { Project } from "@/data/seed-projects";

export async function GET() {
  try {
    const projects = await getProjects();
    return NextResponse.json({ success: true, projects });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, slug, category, location, summary, description, coverImage, galleryImages } = body;

    if (!title || !slug || !category || !location || !coverImage) {
      return NextResponse.json(
        { success: false, error: "Title, slug, category, location, and cover image are required." },
        { status: 400 }
      );
    }

    const newProject: Project = {
      title,
      slug,
      category,
      subtitle: body.subtitle || "",
      location,
      client: body.client || "",
      scope: body.scope || "",
      year: body.year || new Date().getFullYear().toString(),
      featured: Boolean(body.featured),
      order: Number(body.order) || 99,
      summary: summary || "",
      description: description || "",
      coverImage,
      galleryImages: Array.isArray(galleryImages) ? galleryImages : [],
    };

    const created = await createProject(newProject);
    return NextResponse.json({ success: true, project: created }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
