"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(30px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-14"
        >
          <p className="text-coral text-sm font-medium tracking-widest uppercase mb-4">
            Common questions
          </p>
          <h2 className="font-sans font-semibold text-3xl md:text-4xl text-dark leading-tight">
            The things people ask us{" "}
            <span className="font-serif italic font-normal">first.</span>
          </h2>
        </motion.div>

        <div className="space-y-2">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={item.q}
                layout
                initial={{ opacity: 0, transform: "translateY(15px)" }}
                whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                  ease: [0.23, 1, 0.32, 1],
                  layout: { duration: 0.3, ease: [0.23, 1, 0.32, 1] },
                }}
                className={`rounded-2xl transition-colors duration-200 ${
                  isOpen ? "bg-dark/[0.04] ring-1 ring-dark/[0.06]" : "hover:bg-dark/[0.03]"
                }`}
              >
                <h3>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center gap-4 text-left py-5 px-6 cursor-pointer"
                  >
                    <span
                      className={`text-sm md:text-base font-medium transition-colors duration-200 ${
                        isOpen ? "text-dark" : "text-dark/80"
                      }`}
                    >
                      {item.q}
                    </span>
                    <ChevronDown
                      size={15}
                      className={`ml-auto shrink-0 text-dark/30 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-coral" : ""
                      }`}
                    />
                  </button>
                </h3>

                {/*
                  Always rendered, never conditionally mounted: the answers must
                  be in the served HTML to match the FAQPage schema and to be
                  readable by crawlers that don't run JavaScript.
                */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-[250ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                  inert={!isOpen}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 pt-0 text-muted text-sm leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
