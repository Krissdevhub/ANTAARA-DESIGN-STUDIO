import { getLeads } from "@/lib/db";
import LeadsManager from "./LeadsManager";

export const dynamic = "force-dynamic";

export default async function AdminLeadsPage() {
  const leads = await getLeads();

  return <LeadsManager initialLeads={leads} />;
}
