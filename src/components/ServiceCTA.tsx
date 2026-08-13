"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useBooking } from "./BookingProvider";
import { relatedServices, RESPONSE_PROMISE } from "@/lib/services";

interface ServiceCTAProps {
  heading: string;
  subtext: string;
  /** Slug of the page this CTA sits on, so we can cross-link the other three. */
  currentSlug?: string;
}

export default function ServiceCTA({ heading, subtext, currentSlug }: ServiceCTAProps) {
  const { open: openBooking } = useBooking();
  const related = currentSlug ? relatedServices(currentSlug) : [];

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
          <p className="text-cream/40 text-xs mt-5">{RESPONSE_PROMISE}</p>
        </motion.div>

        {related.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="mt-16 pt-10 border-t border-cream/[0.08]"
          >
            <h2 className="text-cream/70 text-xs font-medium tracking-widest uppercase mb-6">
              Related services
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((page) => (
                <Link
                  key={page.slug}
                  href={page.slug}
                  className="group block rounded-2xl border border-cream/[0.08] p-5 transition-colors duration-200 hover:border-coral/40 hover:bg-cream/[0.03]"
                >
                  <h3 className="font-sans font-medium text-sm text-cream mb-2">
                    {page.anchor}
                  </h3>
                  <p className="text-cream/40 text-xs leading-relaxed mb-3">
                    {page.summary}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-coral text-xs font-medium">
                    Learn more
                    <ArrowRight
                      size={12}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
