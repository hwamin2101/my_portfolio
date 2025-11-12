import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function AboutPage() {
  return (
    <>
      <SmoothScroll />
      <main className="pt-0">
        <Navbar />
        <Contact />
      </main>
      <Footer />
    </>
  );
}