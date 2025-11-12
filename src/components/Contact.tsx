"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import emailjs from "@emailjs/browser";

// Initialize EmailJS với Public Key từ environment
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Gửi email
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          name: formData.name,
          email: formData.email, 
          message: formData.message,
          time: new Date().toLocaleString("vi-VN"),
        }
      );

      // Thành công
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Ẩn thông báo sau 5 giây
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error("Lỗi gửi email:", error);
      alert("Có lỗi khi gửi email. Vui lòng thử lại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-20"
        >
          <h1 className="text-[9vw] md:text-[7vw] lg:text-[6vw] leading-none font-holtwood text-white tracking-[0.1em] mb-8">
            GET IN TOUCH
          </h1>
          <p className="text-lg text-white/70 max-w-2xl font-light">
            Ready to start a project with me? Let&apos;s create something
            amazing together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Left side - Contact Info + Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-32 space-y-12">
              {/* Contact details */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-orange-400 mb-6 tracking-wider">
                  Pham Hong
                </h3>
                <div className="space-y-3 text-white/80 font-light text-sm leading-relaxed">
                  <p className="text-white/70">Hanoi, Vietnam</p>
                  <p>
                    <a
                      href="mailto:phamthuhong210103@gmail.com"
                      className="text-white/80 hover:text-orange-400 transition-colors duration-300"
                    >
                      phamthuhong210103@gmail.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:+84834954068"
                      className="text-white/80 hover:text-orange-400 transition-colors duration-300"
                    >
                      +84 (0) 834 954 068
                    </a>
                  </p>
                </div>
              </div>

              {/* Profile Image + Signature */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative w-32 h-40 md:w-40 md:h-48"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-transparent rounded-lg" />
                <Image
                  src="/ziyu.jpg"
                  alt="Pham Hong"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute -bottom-4 -left-6 text-orange-400 text-3xl md:text-4xl font-holtwood opacity-60">
                  HWAMIN
                </div>
              </motion.div>

              {/* Skills tags */}
              <div>
                <h4 className="text-xs text-white/50 uppercase tracking-widest mb-4 font-semibold">
                  Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Developer", "Designer", "Freelance", "Creative"].map(
                    (skill, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.08, borderColor: "#fb923c" }}
                        className="px-3 py-1.5 border border-white/20 text-white/70 text-xs rounded-full hover:text-orange-400 transition-all duration-300 cursor-pointer font-light"
                      >
                        {skill}
                      </motion.span>
                    )
                  )}
                </div>
              </div>

              {/* Social links */}
              <div>
                <h4 className="text-xs text-white/50 uppercase tracking-widest mb-4 font-semibold">
                  Follow
                </h4>
                <div className="flex gap-6">
                  {[
                    {
                      name: "LinkedIn",
                      url: "https://www.linkedin.com/in/phmhong",
                    },
                    { name: "GitHub", url: "https://github.com/hwamin2101" },
                    {
                      name: "Instagram",
                      url: "https://www.instagram.com/hwmin____/",
                    },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.url}
                      whileHover={{ x: 5, color: "#fb923c" }}
                      className="text-white/60 transition-colors text-sm font-light"
                    >
                      {social.name}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="lg:col-span-2"
          >
            {/* Success Message */}
            {success && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-8 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center"
              >
                ✓ Email sent successfully! Thanks for reaching out.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-10 md:space-y-12">
              {/* Name field */}
              <div>
                <label className="block text-white text-sm md:text-base mb-3 font-light tracking-wide">
                  Who are you?
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="{ your name }"
                  className="w-full bg-transparent border-b-2 border-white/20 text-white placeholder-white/25 py-3 px-0 focus:outline-none focus:border-orange-400 transition-colors duration-300 font-light text-base md:text-lg"
                  required
                  disabled={loading}
                />
              </div>

              {/* Email field */}
              <div>
                <label className="block text-white text-sm md:text-base mb-3 font-light tracking-wide">
                  How do we communicate?
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="{ your e-mail }"
                  className="w-full bg-transparent border-b-2 border-white/20 text-white placeholder-white/25 py-3 px-0 focus:outline-none focus:border-orange-400 transition-colors duration-300 font-light text-base md:text-lg"
                  required
                  disabled={loading}
                />
              </div>

              {/* Message field */}
              <div>
                <label className="block text-white text-sm md:text-base mb-3 font-light tracking-wide">
                  What is your question?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="{ your message }"
                  rows={6}
                  className="w-full bg-transparent border-b-2 border-white/20 text-white placeholder-white/25 py-3 px-0 focus:outline-none focus:border-orange-400 transition-colors duration-300 font-light text-base md:text-lg resize-none"
                  required
                  disabled={loading}
                />
              </div>

              {/* Submit button */}
              <motion.button
                whileHover={{
                  scale: loading ? 1 : 1.08,
                  boxShadow: "0 10px 30px rgba(251, 146, 60, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-12 py-3 bg-orange-400 text-black font-bold rounded-full hover:bg-orange-300 transition-all duration-300 tracking-wider mt-8 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "SENDING..." : "SEND"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
