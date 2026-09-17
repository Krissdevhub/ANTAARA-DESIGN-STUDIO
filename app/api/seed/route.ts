import { NextResponse } from "next/server";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { INITIAL_PROJECTS } from "@/data/seed-projects";

export async function GET() {
  if (!isSupabaseConfigured || !supabase) {
    return NextResponse.json({ success: false, error: "Supabase is not configured" }, { status: 500 });
  }

  try {
    const { count } = await supabase.from("projects").select("*", { count: "exact", head: true });
    return NextResponse.json({
      success: true,
      message: "Supabase connection active",
      projectsCount: count,
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
