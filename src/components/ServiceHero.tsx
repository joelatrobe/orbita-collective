"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useBooking } from "./BookingProvider";

interface ServiceHeroProps {
  label: string;
  h1Line1: string;
  h1Accent: string;
  subtitle: string;
  backHref?: string;
}

export default function ServiceHero({
  label,
  h1Line1,
  h1Accent,
  subtitle,
  backHref = "/#services",
}: ServiceHeroProps) {
  const { open: openBooking } = useBooking();

  return (
    <section className="bg-dark py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="inline-block text-coral text-xs font-medium uppercase tracking-widest mb-6">
            {label}
          </span>
          <h1 className="font-sans font-semibold text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6 max-w-3xl">
            {h1Line1}{" "}
            <span className="font-serif italic font-normal text-coral">
              {h1Accent}
            </span>
          </h1>
          <p className="text-cream/60 text-lg leading-relaxed max-w-2xl mb-10">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={openBooking}
              className="bg-coral text-white font-medium text-sm px-7 py-3 rounded-full cursor-pointer hover:bg-coral/90 transition-colors duration-200"
            >
              Get in touch
            </button>
            <Link
              href={backHref}
              className="text-cream/70 font-medium text-sm px-7 py-3 rounded-full border border-cream/20 cursor-pointer hover:border-cream/40 hover:text-cream transition-colors duration-200"
            >
              View all services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
