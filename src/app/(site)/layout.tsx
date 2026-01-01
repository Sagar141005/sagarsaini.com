import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ChatWidget from "@/components/common/ChatWidget";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-16">{children}</main>
      <ChatWidget />
      <Footer />
    </>
  );
}
