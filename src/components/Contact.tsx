"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useBooking } from "./BookingProvider";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { open: openBooking } = useBooking();

  return (
    <section id="contact" className="py-32 px-6 bg-blue-accent/15" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(25px) scale(0.97)" }}
          animate={
            inView
              ? { opacity: 1, transform: "translateY(0px) scale(1)" }
              : {}
          }
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <img
            src="/logos/o-mark-dark.png"
            alt="Orbita Collective"
            className="h-14 w-auto mx-auto mb-8 object-contain"
          />

          <h2 className="font-sans font-semibold text-3xl md:text-5xl text-dark leading-tight mb-6">
            Ready to reinvent
            <br />
            <span className="font-serif italic font-normal">
              the way you work?
            </span>
          </h2>

          <p className="text-muted text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Building progress you can own, and carry forward. Let&apos;s start a
            conversation about what&apos;s possible.
          </p>

          <button
            onClick={openBooking}
            className="group bg-dark text-cream px-8 py-4 rounded-full text-sm font-medium cursor-pointer hover:bg-dark/90 transition-colors duration-200 inline-flex items-center gap-2"
          >
            Start a conversation
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>

          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-dark/40">
            <a
              href="mailto:joe@orbitacollective.com"
              className="cursor-pointer hover:text-coral transition-colors"
            >
              joe@orbitacollective.com
            </a>
            <span className="text-dark/15">|</span>
            <a
              href="mailto:elisa@orbitacollective.com"
              className="cursor-pointer hover:text-coral transition-colors"
            >
              elisa@orbitacollective.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
