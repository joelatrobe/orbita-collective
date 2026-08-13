"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
          {/*
            Always rendered, never conditionally mounted: the answers must be in
            the served HTML to match the FAQPage schema on each service page and
            to be readable by crawlers that don't run JavaScript.
          */}
          <div
            className={`grid transition-[grid-template-rows,opacity] duration-[250ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
              openIndex === index
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
            inert={openIndex !== index}
          >
            <div className="overflow-hidden">
              <p className="pb-5 text-dark/70 text-sm leading-relaxed max-w-2xl">
                {faq.a}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
