import { getProjects } from "@/lib/db";
import ProjectsManager from "./ProjectsManager";

export const dynamic = "force-dynamic";

export default async function AdminProjectsPage() {
  const projects = await getProjects();

  return <ProjectsManager initialProjects={projects} />;
}
