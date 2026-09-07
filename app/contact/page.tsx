import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Contact Studio | Antaara Design Studio",
  description:
    "Initiate an architectural or interior design consultation with Kirti Jaiswal Rajpal and Antaara Design Studio. Based in Indore, taking commissions across India.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#11110F] text-[#F5F1EB] min-h-screen pt-24">
      <ContactSection />
    </div>
  );
}
