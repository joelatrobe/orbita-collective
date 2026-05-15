"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQ {
  q: string;
  a: string;
}

interface ServiceFAQProps {
  faqs: FAQ[];
}

export default function ServiceFAQ({ faqs }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-dark/[0.08]">
      {faqs.map((faq, index) => (
        <div key={index}>
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
            aria-expanded={openIndex === index}
          >
            <span className="font-sans font-medium text-dark text-base group-hover:text-coral transition-colors duration-200">
              {faq.q}
            </span>
            <ChevronDown
              size={18}
              className={`shrink-0 text-muted transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden"
              >
                <p className="pb-5 text-dark/70 text-sm leading-relaxed max-w-2xl">
                  {faq.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
