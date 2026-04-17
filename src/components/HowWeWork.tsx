"use client";

import { motion } from "motion/react";
import { Zap, FolderOpen, Users2 } from "lucide-react";

const models = [
  {
    icon: Users2,
    title: "Design Capacity",
    duration: "Ongoing",
    description:
      "For when you need an external POV, or an expert to boost your team's work. We integrate seamlessly with your team, supporting through leadership and specific tasks.",
    tag: "Embedded",
    tagColor: "bg-coral/15 text-coral",
    outcome: "Seamless integration with your existing team",
  },
  {
    icon: Zap,
    title: "Design Sprint",
    duration: "2 - 6 weeks",
    description:
      "A short engagement to boost your product, service or initiative. Great for a one-off workshop, training or an ad-hoc workstream that needs a boost.",
    tag: "Focused",
    tagColor: "bg-blue-accent/30 text-cream",
    outcome: "Rapid results in weeks, not months",
  },
  {
    icon: FolderOpen,
    title: "Traditional Project",
    duration: "Scoped",
    description:
      "A discovery-to-delivery process scoped on your brief. We work with you to define metrics that matter, and then prove our impact.",
    tag: "End-to-end",
    tagColor: "bg-cream/15 text-cream/90",
    outcome: "Metrics-driven impact from day one",
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-32 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(30px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-20"
        >
          <p className="text-coral text-sm font-medium tracking-widest uppercase mb-4">
            How we work
          </p>
          <h2 className="font-sans font-semibold text-3xl md:text-5xl text-cream leading-tight">
            Three ways to work
            <br />
            <span className="font-serif italic font-normal text-cream/60">
              with us
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {models.map((model, i) => {
            const Icon = model.icon;
            return (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, transform: "translateY(35px)" }}
                whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="group relative bg-cream/[0.04] border border-cream/[0.08] rounded-3xl p-8 hover:bg-cream/[0.07] transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-cream/[0.06] flex items-center justify-center">
                    <Icon size={22} className="text-coral" />
                  </div>
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${model.tagColor}`}
                  >
                    {model.tag}
                  </span>
                </div>

                <h3 className="font-sans font-semibold text-xl text-cream mb-2">
                  {model.title}
                </h3>
                <p className="text-cream/40 text-xs font-medium tracking-wide uppercase mb-4">
                  {model.duration}
                </p>
                <p className="text-cream/60 text-sm leading-relaxed">
                  {model.description}
                </p>

                <div className="mt-6 pt-6 border-t border-cream/[0.06]">
                  <p className="text-cream/40 text-xs font-serif italic">
                    {model.outcome}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
