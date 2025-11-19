"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects.json";

export default function ProjectsGrid() {
  return (
    <section id="projects" className="relative py-32 bg-background">
      {/* TITLE */}
     <div className="max-w-7xl mx-auto px-8 mb-24">
  {/* TITLE: Projects */}
  <motion.h2
    initial={{ opacity: 0, x: -200 }}        
    whileInView={{ opacity: 1, x: 0 }}      
    viewport={{ 
      once: false,        
      amount: 0.4         
    }}
    transition={{ 
      duration: 1.2,
      ease: "easeOut"
    }}
    className="text-[9vw] md:text-[7vw] leading-none font-holtwood text-white drop-shadow-2xl "
  >
    Projects
  </motion.h2>

  {/* SUBTITLE */}
  <motion.p
    initial={{ opacity: 0, x: 200 }}         
    whileInView={{ opacity: 1, x: 0 }}       
    viewport={{ 
      once: false, 
      amount: 0.6 
    }}
    transition={{ 
      delay: 0.4,         
      duration: 1.2,
      ease: "easeOut"
    }}
    className="mt-6 max-w-2xl text-white/70 text-lg leading-relaxed font-light tracking-wide"
  >
    A curated selection of work I’m proud of—crafted with intention, built to stand out.
  </motion.p>
</div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">

        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}