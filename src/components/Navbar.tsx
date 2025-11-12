"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "PROJECTS", href: "/projects" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Ẩn menu khi resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll cho Home page
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setOpen(false);
  };

  const getLinkHref = (itemHref: string) => {
    return pathname === "/" && itemHref === "/" ? "/#home" : itemHref;
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/60 backdrop-blur-xl" : "bg-transparent"
      } border-b border-white/10`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-10 py-4 sm:py-5">
        {/* Logo - Responsive */}
        <Link
          href="/"
          className="text-xl sm:text-2xl md:text-3xl font-holtwood tracking-wider text-white hover:text-orange-400 transition-all duration-300 flex-shrink-0"
        >
          HWAMIN
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10 text-xs sm:text-sm font-medium tracking-widest">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={getLinkHref(item.href)}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`relative transition-all duration-500 whitespace-nowrap ${
                isActive(item.href)
                  ? "text-orange-400"
                  : "text-white/80 hover:text-orange-400"
              }`}
            >
              {item.name}
              {isActive(item.href) && (
                <motion.div
                  layoutId="navbar-active"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-orange-400"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button - Responsive */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 active:scale-95 transition-all flex-shrink-0"
        >
          {open ? (
            <X size={24} className="sm:size-[28px] text-white" />
          ) : (
            <Menu size={24} className="sm:size-[28px] text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay - Responsive */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center space-y-10 sm:space-y-14 md:hidden pt-20 px-6"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <Link
                  href={getLinkHref(item.href)}
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    setOpen(false);
                  }}
                  className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-widest transition-all duration-500 block ${
                    isActive(item.href)
                      ? "text-orange-400"
                      : "text-white/90 hover:text-orange-400"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
