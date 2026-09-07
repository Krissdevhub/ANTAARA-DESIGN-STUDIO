import { getProjects } from "@/lib/db";
import WorkClient from "./WorkClient";

export const metadata = {
  title: "Selected Works | Antaara Design Studio",
  description:
    "Explore the architectural and interior design portfolio of Antaara Design Studio. Residential, hospitality, commercial, and retail projects across India.",
};

export const dynamic = "force-dynamic";

export default async function WorkPage() {
  const projects = await getProjects();

  return <WorkClient initialProjects={projects} />;
}
