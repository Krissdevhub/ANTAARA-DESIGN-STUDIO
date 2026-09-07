import { NextResponse } from "next/server";
import { getLeads, createLead } from "@/lib/db";

export async function GET() {
  try {
    const leads = await getLeads();
    return NextResponse.json({ success: true, leads });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, project_type, location, budget, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: "Name, email, and phone are required." },
        { status: 400 }
      );
    }

    const newLead = await createLead({
      name,
      email,
      phone,
      project_type: project_type || "Residential",
      location: location || "Indore",
      budget: budget || "Not specified",
      message: message || "",
      status: "New",
    });

    return NextResponse.json({ success: true, lead: newLead }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
