"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-3">
            <img
              src="/logos/logo-light.gif"
              alt="Orbita Collective"
              className="h-24 w-auto object-contain"
            />
          </div>

          <div className="flex items-center gap-8">
            <a
              href="#services"
              className="text-cream/40 text-xs cursor-pointer hover:text-cream/70 transition-colors"
            >
              Services
            </a>
            <a
              href="#how-we-work"
              className="text-cream/40 text-xs cursor-pointer hover:text-cream/70 transition-colors"
            >
              How We Work
            </a>
            <a
              href="#about"
              className="text-cream/40 text-xs cursor-pointer hover:text-cream/70 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-cream/40 text-xs cursor-pointer hover:text-cream/70 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="border-t border-cream/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-xs">
            &copy; {new Date().getFullYear()} Orbita Collective
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-cream/30 text-xs cursor-pointer hover:text-cream/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookies-policy"
              className="text-cream/30 text-xs cursor-pointer hover:text-cream/60 transition-colors"
            >
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
