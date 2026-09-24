import { getProjects } from "@/lib/db";
import WorkClient from "./WorkClient";

export const metadata = {
  title: "Interior Design Archive | Selected Works | Antaara Design Studio",
  description:
    "Explore the interior design and turnkey execution portfolio of Antaara Design Studio. Over 50+ completed interior projects across India, with 19 selected commissions featured in this archive.",
};

export const dynamic = "force-dynamic";

export default async function WorkPage() {
  const projects = await getProjects();

  return <WorkClient initialProjects={projects} />;
}
