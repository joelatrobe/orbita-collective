"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

/**
 * Rendered inside the footer, on the homepage only — the service pages have
 * their own FAQs and their own FAQPage schema, so repeating these sitewide
 * would duplicate both the content and the markup.
 */
export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-b border-cream/[0.08] pb-10 mb-10"
    >
      <h2
        id="faq-heading"
        className="text-cream/70 text-xs font-medium tracking-widest uppercase mb-6"
      >
        Common questions
      </h2>

      <div className="grid md:grid-cols-2 gap-x-12">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.q} className="border-b border-cream/[0.06] last:border-b-0">
              <h3>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-4 text-left py-3.5 cursor-pointer group"
                >
                  <span
                    className={`text-xs transition-colors duration-200 ${
                      isOpen ? "text-cream" : "text-cream/50 group-hover:text-cream/80"
                    }`}
                  >
                    {item.q}
                  </span>
                  <ChevronDown
                    size={13}
                    className={`ml-auto shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-coral" : "text-cream/25"
                    }`}
                  />
                </button>
              </h3>

              {/*
                Always rendered, never conditionally mounted: the answers must be
                in the served HTML to match the FAQPage schema and to be readable
                by crawlers that don't run JavaScript.
              */}
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-[250ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
                inert={!isOpen}
              >
                <div className="overflow-hidden">
                  {/* cream/60 keeps this above 4.5:1 on the dark footer; /40 does not. */}
                  <p className="pb-4 pr-6 text-cream/60 text-xs leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
