import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import LazyChatWidget from "@/components/common/LazyChatWidget";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16">
        {children}
      </main>
      <LazyChatWidget />
      <Footer />
    </>
  );
}
