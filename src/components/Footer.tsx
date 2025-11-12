"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* MARQUEE */}
      <div className="relative w-full overflow-hidden mt-8 md:mt-0.5 z-20">
        <motion.div
          className="flex whitespace-nowrap text-[0.75rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] font-light uppercase tracking-[0.15em] sm:tracking-[0.25em] text-accent/90"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
        >
          <span className="mr-8 sm:mr-12">
            CREATIVE ✦ DEVELOPER ✦ FREELANCER ✦ DESIGNER ✦ CREATIVE ✦ DEVELOPER
            ✦ FREELANCER ✦ DESIGNER ✦ CREATIVE ✦ DEVELOPER ✦ FREELANCER ✦
            DESIGNER ✦ CREATIVE ✦ DEVELOPER ✦ FREELANCER ✦ DESIGNER ✦
          </span>
          <span className="mr-8 sm:mr-12">
            CREATIVE ✦ DEVELOPER ✦ FREELANCER ✦ DESIGNER ✦ CREATIVE ✦ DEVELOPER
            ✦ FREELANCER ✦ DESIGNER ✦ CREATIVE ✦ DEVELOPER ✦ FREELANCER ✦
            DESIGNER ✦ CREATIVE ✦ DEVELOPER ✦ FREELANCER ✦ DESIGNER ✦
          </span>
        </motion.div>
      </div>

      {/* LỚP ẢNH MỜ + LỚP LAYER MỀM */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-text via-text/60 to-transparent backdrop-blur-[2.5px]" />
      </div>

      {/* ẢNH LẬT NGƯỢC Ở MÉP TRÊN */}
      <div className="absolute inset-0">
        <Image
          src="/ziyu.jpg"
          alt="Hwamin portrait"
          fill
          className="object-cover opacity-40 scale-110"
          priority
        />
      </div>

      {/* NỘI DUNG TRUNG TÂM */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center mt-8 sm:mt-12">
        {/* CONTACT */}
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="text-[12vw] sm:text-[10vw] md:text-[9vw] lg:text-[10vw] leading-tight sm:leading-none font-holtwood text-white drop-shadow-2xl"
        >
          CONTACT
        </motion.h2>

        {/* EMAIL + SOCIAL */}
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="mt-8 sm:mt-12 md:mt-14 flex flex-col items-center gap-8 sm:gap-10"
        >
          <div className="flex gap-6 sm:gap-8 md:gap-10">
            <Link
              href="mailto:phamthuhong210103@gmail.com"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 text-white/90 hover:text-orange-400 transition-all duration-300"
            >
              <Mail
                size={32}
                className="sm:size-[36px] md:size-[40px] group-hover:scale-110 transition-transform"
              />
            </Link>

            <Link
              href="https://www.instagram.com/hwmin____/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-orange-400 transition-colors"
            >
              <Instagram
                size={32}
                className="sm:size-[36px] md:size-[40px] group-hover:scale-110 transition-transform"
              />
            </Link>

            <Link
              href="https://www.linkedin.com/in/phmhong"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-orange-400 transition-colors"
            >
              <Linkedin
                size={32}
                className="sm:size-[36px] md:size-[40px] group-hover:scale-110 transition-transform"
              />
            </Link>
          </div>
        </motion.div>

        {/* TÊN + AVAILABLE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1.1 }}
          className="mt-12 sm:mt-16 md:mt-20"
        >
          <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-holtwood text-white drop-shadow-2xl leading-tight">
            HWAMIN
          </h3>
          <p className="mt-3 sm:mt-4 text-white/60 text-sm sm:text-base md:text-lg font-light tracking-wide px-4">
            Available for freelance projects worldwide
          </p>
        </motion.div>

        {/* COPYRIGHT */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-12 sm:mt-16 md:mt-18 text-white/40 text-xs sm:text-sm tracking-widest px-4"
        >
          © {new Date().getFullYear()} HWAMIN. CRAFTED WITH PASSION IN VIETNAM
        </motion.p>
      </div>
    </footer>
  );
}
