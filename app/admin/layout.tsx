import AdminHeader from "./AdminHeader";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#120303] text-[#EDE7DF] min-h-screen pb-20 selection:bg-[#dca82b] selection:text-[#120303]">
      <AdminHeader />
      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-8">{children}</main>
    </div>
  );
}
