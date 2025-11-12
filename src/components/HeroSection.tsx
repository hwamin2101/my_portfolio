"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useLayoutEffect, useState } from "react";

export default function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isClient, setIsClient] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });

  useLayoutEffect(() => {
    setIsClient(true);
    const updateSize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const imageX = useTransform(mouseX, (val) =>
    isClient ? (val - windowSize.width / 2) / 30 : 0
  );
  const imageY = useTransform(mouseY, (val) =>
    isClient ? (val - windowSize.height / 2) / 30 : 0
  );
  const textX = useTransform(mouseX, (val) =>
    isClient ? (val - windowSize.width / 2) / 60 : 0
  );
  const textY = useTransform(mouseY, (val) =>
    isClient ? (val - windowSize.height / 2) / 60 : 0
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isClient) return;
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden text-text pt-10 md:pt-14 pb-30"
      onMouseMove={handleMouseMove}
    >
      {/* ================= MAIN TEXT ================= */}
      <div className="relative z-20 text-center px-6 mt-10 md:mt-16">
        <motion.div style={{ x: textX, y: textY }}>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2 }}
            className="font-holtwood leading-none tracking-tight text-white drop-shadow-2xl text-[clamp(2rem,10vw,10rem)]"
          >
            PHAM HONG
          </motion.h1>
        </motion.div>
      </div>

      {/* ================= MARQUEE ================= */}
      <div className="relative w-full overflow-hidden mt-8 md:mt-10">
        <motion.div
          className="flex whitespace-nowrap font-light uppercase tracking-[0.25em] text-accent/90 text-[clamp(0.8rem,1.2vw,1.4rem)]"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          }}
          style={{
            width: "400%", // dài hơn để đảm bảo lặp mượt
          }}
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="flex-shrink-0 pr-12">
              CREATIVE ✦ DEVELOPER ✦ FREELANCE ✦ DESIGNER ✦CREATIVE ✦ DEVELOPER ✦ FREELANCE ✦ DESIGNER ✦
              CREATIVE ✦ DEVELOPER ✦ FREELANCE ✦ DESIGNER ✦CREATIVE ✦ DEVELOPER ✦ FREELANCE ✦ DESIGNER ✦
              CREATIVE ✦ DEVELOPER ✦ FREELANCE ✦ DESIGNER ✦CREATIVE ✦ DEVELOPER ✦ FREELANCE ✦ DESIGNER ✦
            </span>
          ))}
        </motion.div>
      </div>

      {/* ================= HERO IMAGE ================= */}
      <div className="relative w-full flex justify-center mt-6 md:mt-10 z-10">
        <motion.div
          style={{ x: imageX, y: imageY }}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex justify-center items-center w-full"
        >
          <Image
            src="/ziyu.jpg"
            alt="Hero Visual"
            width={500}
            height={600}
            className="object-contain rounded-2xl shadow-5xl w-[clamp(300px,40vw,700px)] h-auto mx-auto"
            priority
          />
        </motion.div>
      </div>

      {/* ================= SUBTEXT ================= */}
      <div className="absolute inset-0 flex items-end justify-center md:justify-end pointer-events-none z-30 pb-16 md:pb-6">
        <motion.div
          style={{ x: textX, y: textY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.4 }}
          className="relative max-w-7xl w-full px-6 sm:px-8 md:pr-16 flex flex-col md:flex-row gap-8 md:gap-12"
        >
          <div className="text-center md:text-left">
            <h2 className="leading-none font-['Brush_Script'] text-orange-400 drop-shadow-2xl text-[clamp(2rem,6vw,7rem)]">
              Creative <span className="text-orange-500">Developer</span>
            </h2>
          </div>

          <div className="max-w-lg text-white/85 space-y-4 leading-relaxed font-light tracking-wide md:pr-28 text-justify text-[clamp(0.8rem,1vw,1.1rem)]">
            <p>
              With a solid foundation in Information Technology, I focus on
              crafting thoughtful and user-friendly digital solutions.
            </p>
            <p>
              I enjoy designing and developing applications that are both
              functional and engaging, combining careful attention to detail
              with a creative approach.
            </p>
            <p>
              Detail-oriented yet creative, I&apos;m always learning new tech to
              deliver polished, purposeful experiences that just work.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
