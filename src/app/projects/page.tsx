import Navbar from "@/components/Navbar";
import ProjectsGrid from "@/components/ProjectsGrid";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function ProjectsPage() {
  return (
    <>
      <SmoothScroll />
      <main className="pt-0">
        <Navbar />
        <ProjectsGrid />
      </main>
      <Footer />
    </>
  );
}