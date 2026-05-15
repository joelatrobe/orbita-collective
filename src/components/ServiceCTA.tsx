"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useBooking } from "./BookingProvider";

interface ServiceCTAProps {
  heading: string;
  subtext: string;
}

export default function ServiceCTA({ heading, subtext }: ServiceCTAProps) {
  const { open: openBooking } = useBooking();

  return (
    <section className="bg-dark py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-2xl"
        >
          <h2 className="font-sans font-semibold text-2xl md:text-3xl text-cream mb-4">
            {heading}
          </h2>
          <p className="text-cream/55 text-base leading-relaxed mb-8">
            {subtext}
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={openBooking}
              className="bg-coral text-white font-medium text-sm px-7 py-3 rounded-full cursor-pointer hover:bg-coral/90 transition-colors duration-200"
            >
              Get in touch
            </button>
            <Link
              href="/#services"
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
