"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

type Project = {
  id: number;
  title: string;
  client: string;
  year: string;
  thumb: string;
  link: string;
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const scale = useTransform(springX, [-0.5, 0.5], [1, 1.05]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group"
    >
      <Link href={project.link} target="_blank" className="block">
        <motion.div
          style={{
            rotateX,
            rotateY,
            scale,
            transformStyle: "preserve-3d",
            perspective: "1200px",
          }}
          className="
                bg-white dark:bg-neutral-900 
                rounded-3xl 
                overflow-hidden 
                shadow-[0_15px_40px_rgba(0,0,0,0.45)] 
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.55)]
                transition-all 
                duration-300
              "
        >
        
          <div className="relative w-full aspect-[4/3]">
            <Image
              src={project.thumb}
              alt={project.title}
              fill
              className="object-cover"
              priority={index < 3}
            />
          </div>

         
          <div className="p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
              {project.title}
            </h3>

            <p className="mt-1 text-gray-600 dark:text-gray-300">
              {project.client}
            </p>

            <p className="mt-0.5 text-sm text-gray-400 dark:text-gray-500">
              {project.year}
            </p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
