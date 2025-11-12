"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web & App Development",
    description:
      "From landing pages to full-fledged web apps — I build fast, scalable products using React, Next.js, Tailwind CSS and modern tooling.",
  },
  {
    title: "UI/UX Design & Motion",
    description:
      "Crafting meaningful user experiences with Figma, Framer Motion and micro-interactions — blending design and development seamlessly.",
  },
  {
    title: "Backend & API Systems",
    description:
      "Building robust APIs, real-time chat, authentication with Node.js, Prisma, and MongoDB — ensuring performance and reliability.",
  },
];

export default function AboutSection() {
  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Background image layer */}
      <div className="absolute inset-0">
        <Image
          src="/zyu.jpg" // thay bằng ảnh của bạn
          alt="About me background"
          fill
          className="object-cover opacity-30 scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 text-white">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-[10vw] md:text-[8vw] lg:text-[6vw] leading-none font-holtwood tracking-[0.1em] mb-12"
        >
          ABOUT&nbsp;ME
        </motion.h1>

        {/* Introduction text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-sm md:text-base leading-relaxed mb-8 font-light text-white/75"
        >
          I’m <strong>Pham Hong</strong>, a passionate software developer and
          translator currently based in Hanoi. With a strong foundation in IT, I
          build intuitive web experiences that bring ideas to life.
        </motion.p>

        {/* Key details grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h3 className="text-2xl font-bold text-orange-400 mb-3 tracking-wider">
              My Journey
            </h3>
            <p className="text-white/75 leading-relaxed font-light">
              Starting my IT studies at Vietnam Women&apos;s Academy, I explored
              coding, data-analysis and hands-on web development. From
              apartment-rental platforms to peer-gaming communities, I’ve turned
              ideas into real systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <h3 className="text-2xl font-bold text-orange-400 mb-3 tracking-wider">
              What I Do
            </h3>
            <p className="text-white/75 leading-relaxed font-light">
              I specialize in front-end web development with frameworks like
              React and Next.js, back-end integrations with Node.js and MongoDB,
              and crafting UX & UI designs that matter. Outside of code, I also
              translate content and write guides for IT learners.
            </p>
          </motion.div>
        </div>

        {/* Highlight quote */}
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="text-xl md:text-2xl italic text-orange-400/90 tracking-wider mb-16"
        >
          “Crafting digital experiences with purpose, precision and
          personality.”
        </motion.blockquote>

        {/* Image + quick facts */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="flex flex-col md:flex-row items-center gap-12 mb-24"
        >
          <div className="w-full md:w-1/2">
            <Image
              src="/ziyu.jpg"
              alt="Portrait"
              width={500}
              height={500}
              className="object-cover rounded-2xl"
              priority
            />
          </div>

          <div className="w-full md:w-1/2 space-y-4">
            <div>
              <h4 className="text-lg font-bold text-orange-400">Based In</h4>
              <p className="text-white/75 font-light">Hanoi, Vietnam</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-orange-400">
                Years of Experience
              </h4>
              <p className="text-white/75 font-light">
                3+ years in web development & translation
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-orange-400">
                Tools & Tech
              </h4>
              <p className="text-white/75 font-light">
                React, Next.js, Node.js, MongoDB, Figma, Python
              </p>
            </div>
          </div>
        </motion.div>

        {/* SERVICES SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mt-32"
        >
          <h2 className="text-[4vw] md:text-[3vw] lg:text-[3vw] leading-none font-holtwood text-white tracking-[0.1em] mb-20">
            Services
          </h2>

          <div className="space-y-1">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.8 }}
                className="group border-b border-white/20 overflow-hidden relative"
              >
                {/* Background layer hover effect */}
                <div className="absolute inset-0 bg-white/8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out -z-10" />

                <div className="flex flex-col md:flex-row md:items-center md:justify-between py-6 px-6 md:px-8 cursor-pointer relative z-10">
                  <div className="flex-1 mb-4 md:mb-0">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-orange-400 font-bold text-lg group-hover:text-orange-300 transition-colors duration-300">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                        {svc.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-white/65 leading-relaxed font-light md:text-right md:max-w-xl md:ml-8 group-hover:text-white/85 transition-colors duration-300">
                    {svc.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
