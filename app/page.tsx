import CinematicHome from "@/components/CinematicHome";
import { getProjects } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const projects = await getProjects();
  return <CinematicHome initialProjects={projects} />;
}
