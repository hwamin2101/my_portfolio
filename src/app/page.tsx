
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
// import AboutMe from "../components/AboutMe";
import ProjectsGrid from "../components/ProjectsGrid";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";
import SkillsSection from "../components/SkillsSection";

export default function Home() {
  return (
    <>
    <SmoothScroll />
      <main className="pt-5">
        <Navbar />
        <HeroSection />
        <ProjectsGrid />
        <SkillsSection />
      </main>
      <Footer />
    </>
  );
}
