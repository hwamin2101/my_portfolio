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
  const scale = useTransform(springX, [-0.5, 0.5], [0.98, 1.04]);

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
      className="group relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={project.link} target="_blank" className="block">
        <motion.div
          className="relative overflow-hidden rounded-3xl shadow-2xl"
          style={{
            rotateX,
            rotateY,
            scale,
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={project.thumb}
            alt={project.title}
            width={800}
            height={1000}
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            priority={index < 3}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
            <div className="p-8 md:p-10 text-white translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-2 text-white/80 text-lg">{project.client}</p>
              <p className="text-sm text-white/60">{project.year}</p>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}