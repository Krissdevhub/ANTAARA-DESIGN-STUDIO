import { getSettings } from "@/lib/db";
import SettingsManager from "./SettingsManager";

export const dynamic = "force-dynamic";

export default async function AdminSettingsPage() {
  const settings = await getSettings();

  return <SettingsManager initialSettings={settings} />;
}
