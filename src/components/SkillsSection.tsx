"use client";

import { motion } from "framer-motion";
import { IconCloud } from "./ui/IconCloud";

const slugs: string[] = [
  "typescript", "javascript", "react", "nextdotjs", "tailwindcss",
  "nodedotjs", "prisma", "postgresql", "git", "github",
  "figma", "vercel", "supabase", "framer", "docker",
  "mongodb", "python", "linux", "visualstudiocode", "threejs", "gsap"
];

export default function SkillsSection() {
  return (
    <section className="relative py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* TIÊU ĐỀ */}
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <h2 className="text-[10vw] md:text-[8vw] lg:text-[6vw] leading-none font-holtwood text-white drop-shadow-2xl tracking-[0.12em]">
            SKILLS &amp;TECH
          </h2>
        </motion.div>

        {/* 3 CỘT: TEXT - ICON - TEXT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* CỘT TRÁI */}
          <div className="space-y-20">
            {/* Phần 1 */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-left max-w-sm"
            >
              <h3 className="text-xl md:text-2xl font-bold text-text mb-3 tracking-wider">
                Frontend Engineering
              </h3>
              <p className="text-white/75 text-sm md:text-base leading-relaxed font-light text-justify md:pr-9">
                Specialized in building modern, responsive interfaces using React, Next.js, 
                and Tailwind CSS. Focused on clean architecture and smooth user experience across devices.
              </p>
            </motion.div>

            {/* Phần 2 */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-left max-w-sm"
            >
              <h3 className="text-xl md:text-2xl font-bold text-text mb-3 tracking-wider">
                UI / UX & Product Thinking
              </h3>
              <p className="text-white/75 text-sm md:text-base leading-relaxed font-light text-justify md:pr-9 ">
                Experienced in designing user-centric products with Figma and Framer. 
                Blending functionality with aesthetics to deliver meaningful digital experiences.
              </p>
            </motion.div>
          </div>

          {/* CỘT GIỮA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.6, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="w-full max-w-3xl aspect-square">
              <IconCloud iconSlugs={slugs} />
            </div>
          </motion.div>

          {/* CỘT PHẢI */}
          <div className="space-y-20">
            {/* Phần 3 */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="text-right max-w-sm ml-auto"
            >
              <h3 className="text-xl md:text-2xl font-bold text-text mb-3 tracking-wider">
                Backend & API Integration
              </h3>
              <p className="text-white/75 text-sm md:text-base leading-relaxed font-light text-justify md:pl-9 ">
                Building scalable APIs with Node.js, Express, Prisma, and MongoDB. 
                Familiar with authentication, real-time Socket.IO, and RESTful architecture.
              </p>
            </motion.div>

            {/* Phần 4 */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="text-right max-w-sm ml-auto"
            >
              <h3 className="text-xl md:text-2xl font-bold text-text mb-3 tracking-wider">
                Deployment & Optimization
              </h3>
              <p className="text-white/75 text-sm md:text-base leading-relaxed font-light text-justify md:pl-9">
                Experienced with Vercel, Docker, and GitHub for CI/CD. 
                Always optimizing performance, SEO, and Core Web Vitals for real-world users.
              </p>
            </motion.div>
          </div>
        </div>

        
      </div>
    </section>
  );
}
