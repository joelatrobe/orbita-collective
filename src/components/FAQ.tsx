"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/lib/faqs";

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-dark/[0.08] border-y border-dark/[0.08]">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <h2>
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full flex items-center gap-4 text-left py-5 cursor-pointer group"
              >
                <span
                  className={`font-sans font-medium text-base transition-colors duration-200 ${
                    isOpen ? "text-dark" : "text-dark/80 group-hover:text-coral"
                  }`}
                >
                  {item.q}
                </span>
                <ChevronDown
                  size={17}
                  className={`ml-auto shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-coral" : "text-dark/30"
                  }`}
                />
              </button>
            </h2>

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
                <p className="pb-6 pr-8 text-muted text-sm leading-relaxed max-w-2xl">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
