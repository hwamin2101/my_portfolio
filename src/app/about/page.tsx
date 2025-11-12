import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function AboutPage() {
  return (
    <>
      <SmoothScroll />
      <main className="pt-0">
        <Navbar />
        <AboutMe />
      </main>
      <Footer />
    </>
  );
}