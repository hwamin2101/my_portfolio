"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function HeroSection() {
  // Motion values để bind với chuột
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Tạo transform để parallax nhẹ
  const imageX = useTransform(mouseX, (val) => (val - window.innerWidth / 2) / 30);
  const imageY = useTransform(mouseY, (val) => (val - window.innerHeight / 2) / 30);
  const textX = useTransform(mouseX, (val) => (val - window.innerWidth / 2) / 60);
  const textY = useTransform(mouseY, (val) => (val - window.innerHeight / 2) / 60);

  // Bắt sự kiện mousemove
  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };
  

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-start text-text pt-10 md:pt-14 pb-30"
      onMouseMove={handleMouseMove}
    >
      {/* HERO TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-20 text-center px-6 mt-10 md:mt-16"
        style={{ x: textX, y: textY }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.2 }}
          className="font-holtwood leading-none tracking-tight text-white drop-shadow-2xl text-[16vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[7vw]"
        >
          PHAM HONG
        </motion.h1>
      </motion.div>

      {/* MARQUEE */}
      <div className="relative w-full overflow-hidden mt-8 md:mt-10">
        <motion.div
          className="flex whitespace-nowrap text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] font-light uppercase tracking-[0.25em] text-accent/90"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
        >
          <span className="mr-12">
            CREATIVE ✦ DEVELOPER ✦ FREELANCER ✦ DESIGNER ✦ CREATIVE ✦ DEVELOPER
            ✦ FREELANCER ✦ DESIGNER ✦ CREATIVE ✦ DEVELOPER ✦ FREELANCER ✦
            DESIGNER ✦ CREATIVE ✦ DEVELOPER ✦ FREELANCER ✦ DESIGNER ✦
          </span>
          <span className="mr-12">
            CREATIVE ✦ DEVELOPER ✦ FREELANCER ✦ DESIGNER ✦ CREATIVE ✦ DEVELOPER
            ✦ FREELANCER ✦ DESIGNER ✦ CREATIVE ✦ DEVELOPER ✦ FREELANCER ✦
            DESIGNER ✦ CREATIVE ✦ DEVELOPER ✦ FREELANCER ✦ DESIGNER ✦
          </span>
        </motion.div>
      </div>

      {/* HERO IMAGE */}
      <motion.div
        className="w-full flex justify-center mt-6 md:mt-10 z-10"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ x: imageX, y: imageY }}
      >
        <Image
          src="/ziyu.jpg"
          alt="Hero Visual"
          width={500}
          height={600}
          className="object-contain rounded-2xl shadow-5xl"
          priority
        />
      </motion.div>
      {/* === THÊM MỚI: TEXT ĐÈ LÊN HÌNH CHIM (đúng như ảnh mẫu) === */}
<motion.div
  className="absolute inset-0 flex items-end justify-center md:justify-end pointer-events-none z-30 pb-16 md:pb-6"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8, duration: 1.4 }}
  style={{ x: textX, y: textY }} // vẫn giữ parallax nhẹ
>
  <div className="relative max-w-7xl w-full px-8 md:pr-16 flex flex-col md:flex-row gap-8 md:gap-12">
    {/* Creative Developer - nằm dưới Hwamin, đè lên ảnh một chút */}
    <div className="text-center md:text-left">
      <h2 className="text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[6.5vw] leading-none font-['Brush_Script'] text-orange-400 drop-shadow-2xl">
        Creative <span className="text-orange-500">Developer</span>
      </h2>
    </div>

    {/* Đoạn mô tả - căn sát góc phải ảnh */}
    <div className="max-w-lg text-white/85 space-y-4 text-sm md:text-base leading-relaxed font-light tracking-wide md:pr-28 text-justify">
      <p> 
        With a solid foundation in Information Technology, I focus on crafting thoughtful and user-friendly digital solutions. I enjoy designing and developing applications that are both functional and engaging, combining careful attention to detail with a creative approach.
      </p>
      <p>
        I am passionate about building tools that simplify complex tasks and enhance user experience, continuously refining my skills and exploring innovative technologies.
      </p>
      <p>
        Detail-oriented yet creative, I’m always learning new tech to deliver polished, purposeful experiences that just work. Let’s make something great together.
      </p>

    </div>
  </div>
</motion.div>
    </section>
  );
}
