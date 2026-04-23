"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import {
  Search,
  Lightbulb,
  Users,
  Compass,
  Layers,
  Target,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

interface ServiceItem {
  icon: React.ElementType;
  label: string;
  description: string;
}

const serviceCategories = [
  {
    title: "Product & Service Innovation",
    subtitle: "Reinventing by doing",
    description:
      "We work with the ones who don't just want to improve. They want to lead change from the inside-out.",
    kicker: "Understand behaviours, explore opportunities, design with confidence.",
    accent: false,
    services: [
      { icon: Search, label: "Research & Customer Insights", description: "Deep qualitative and quantitative research combined with competitive landscape analysis. We uncover what your users truly need and identify opportunities your competitors have missed — delivering actionable insights, not shelf-bound reports." },
      { icon: Layers, label: "Service & Experience Design", description: "End-to-end service design that maps every touchpoint of the customer journey. We design experiences that are coherent, delightful, and operationally feasible." },
      { icon: Compass, label: "Product Exploration", description: "Explore new product territories and adjacencies. We facilitate structured ideation grounded in user needs and business viability." },
      { icon: Target, label: "Vision Setting & Repositioning", description: "Define or redefine your product vision with clarity. We align teams around a shared north star that connects user value to business outcomes." },
      { icon: Sparkles, label: "AI Powered User Profiles", description: "Leverage AI to build rich, behaviour-informed user profiles that go beyond demographics. Understand your users at a depth that drives meaningful personalisation." },
      { icon: Lightbulb, label: "Concept Testing & Validation", description: "Prototype and test ideas with real users before committing to full development. We help you fail fast and cheap, so you can invest in what actually works." },
    ],
  },
  {
    title: "CX Strategy & Facilitation",
    subtitle: "Reinventing how you work",
    description:
      "Everything we deliver, you can use. Not standalone research that gets forgotten on a shelf.",
    kicker: "Strategy is just a framework if it doesn't stick. Turn ambition into results.",
    accent: true,
    services: [
      { icon: Users, label: "Customer Engagement Strategy", description: "Build a strategy that turns passive customers into active advocates. We design engagement models that create value at every stage of the relationship." },
      { icon: Compass, label: "Cross-functional Alignment", description: "Break down silos between product, design, engineering, and business teams. We facilitate workshops and create frameworks that keep everyone pulling in the same direction." },
      { icon: Search, label: "User-informed Service Strategy", description: "Service strategy grounded in real user needs, not assumptions. We help you build strategies that are evidence-based and designed to evolve with your customers." },
      { icon: Layers, label: "Design Ops & Tooling", description: "Set up the systems, processes, and tools that make great design repeatable. From design systems to research repositories: infrastructure for design at scale." },
      { icon: Users, label: "Employee Experience", description: "Great customer experiences start from the inside. We help organisations design employee journeys that build engagement, align culture, and create the conditions for teams to deliver at their best." },
      { icon: GraduationCap, label: "Upskilling & Training at Scale", description: "Empower your teams with design thinking, research methods, and CX skills. Practical, hands-on training tailored to your organisation's maturity." },
    ],
  },
];

function ServiceCard({
  service,
  index,
  isExpanded,
  onToggle,
}: {
  service: ServiceItem;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, transform: "translateY(15px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.23, 1, 0.32, 1], layout: { duration: 0.3, ease: [0.23, 1, 0.32, 1] } }}
      className={`rounded-2xl cursor-pointer transition-colors duration-200 ${isExpanded ? "bg-dark/[0.04] ring-1 ring-dark/[0.06]" : "hover:bg-dark/[0.03]"}`}
      onClick={onToggle}
    >
      <div className="flex items-center gap-4 py-4 px-5">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 ${isExpanded ? "bg-coral/15" : "bg-dark/[0.04]"}`}>
          <Icon size={18} className={`transition-colors duration-200 ${isExpanded ? "text-coral" : "text-dark/40"}`} />
        </div>
        <span className={`text-sm md:text-base font-medium transition-colors duration-200 ${isExpanded ? "text-dark" : "text-dark/80"}`}>
          {service.label}
        </span>
        <ChevronDown size={14} className={`ml-auto text-dark/30 transition-transform duration-200 ${isExpanded ? "rotate-180 text-coral" : ""}`} />
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1">
              <p className="text-muted text-sm leading-relaxed mb-4">{service.description}</p>
              <a href="#contact" onClick={(e) => e.stopPropagation()} className="group inline-flex items-center gap-1.5 text-coral text-xs font-medium cursor-pointer hover:text-coral/80 transition-colors">
                Discuss this with us
                <ArrowUpRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  const handleToggle = (key: string) => {
    setExpandedKey((prev) => (prev === key ? null : key));
  };

  return (
    <section id="services" className="py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(30px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-20"
        >
          <p className="text-coral text-sm font-medium tracking-widest uppercase mb-4">
            What we do
          </p>
          <h2 className="font-sans font-semibold text-3xl md:text-5xl text-dark leading-tight">
            A simple offering that keeps
            <br />
            <span className="font-serif italic font-normal">the value</span>{" "}
            and lets go of the baggage.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {serviceCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, transform: "translateY(30px)" }}
              whileInView={{ opacity: 1, transform: "translateY(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: catIndex * 0.12, ease: [0.23, 1, 0.32, 1] }}
              className={`rounded-3xl ${cat.accent ? "bg-blue-accent/[0.08] p-6 lg:p-8" : "p-6 lg:p-8"}`}
            >
              <div className="mb-8">
                <p className="text-coral text-xs font-medium tracking-widest uppercase mb-2">
                  {cat.subtitle}
                </p>
                <h3 className="font-sans font-semibold text-xl md:text-2xl text-dark mb-3">
                  {cat.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed max-w-md">
                  {cat.description}
                </p>
                {cat.kicker && (
                  <p className="font-serif italic text-dark/60 text-sm mt-3">
                    {cat.kicker}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                {cat.services.map((service, i) => {
                  const key = `${catIndex}-${i}`;
                  return (
                    <ServiceCard
                      key={key}
                      service={service}
                      index={i}
                      isExpanded={expandedKey === key}
                      onToggle={() => handleToggle(key)}
                    />
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
