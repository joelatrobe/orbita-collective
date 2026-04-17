"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useBooking } from "./BookingProvider";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "About", href: "#about" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { open: openBooking } = useBooking();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setVisible(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, transform: "translateY(-15px)" }}
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-4xl z-50 transition-all duration-300 rounded-full px-6 py-2.5 ${
          scrolled
            ? "bg-dark/95 backdrop-blur-md shadow-lg"
            : "bg-cream/80 backdrop-blur-sm shadow-sm md:bg-transparent md:backdrop-blur-none md:shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center cursor-pointer">
            <img
              src={scrolled ? "/logos/logo-light.png" : "/logos/logo-dark.png"}
              alt="Orbita Collective"
              className="h-7 w-auto object-contain transition-opacity duration-300"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 cursor-pointer hover:text-coral ${
                  scrolled ? "text-cream/80" : "text-dark/70"
                }`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={openBooking}
              className="bg-coral text-white text-sm font-medium px-5 py-2 rounded-full cursor-pointer hover:bg-coral/90 transition-colors duration-200"
            >
              Get in touch
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className={`md:hidden cursor-pointer ${scrolled ? "text-cream" : "text-dark"}`}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-[100] bg-dark flex flex-col items-center justify-center"
          >
            <div className="absolute top-5 left-6">
              <img
                src="/logos/logo-light.png"
                alt="Orbita Collective"
                className="h-8 w-auto object-contain"
              />
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-cream cursor-pointer"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, transform: "translateY(15px)" }}
                  animate={{ opacity: 1, transform: "translateY(0px)" }}
                  transition={{ delay: i * 0.07, ease: [0.23, 1, 0.32, 1] }}
                  className="text-cream text-2xl font-light cursor-pointer hover:text-coral transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                onClick={() => { setMobileOpen(false); openBooking(); }}
                initial={{ opacity: 0, transform: "translateY(15px)" }}
                animate={{ opacity: 1, transform: "translateY(0px)" }}
                transition={{ delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="bg-coral text-white text-lg font-medium px-8 py-3 rounded-full cursor-pointer mt-4"
              >
                Get in touch
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
