"use client";

import { motion } from "motion/react";

const problems = [
  {
    number: "01",
    text: "Your customer experience is costing you — but you don't have the in-house expertise to fix it.",
  },
  {
    number: "02",
    text: "Traditional agencies are too slow, too expensive, and too removed from your day-to-day reality.",
  },
  {
    number: "03",
    text: "Hiring full-time design talent is a big commitment when you're still figuring out what you need.",
  },
];

const stats = [
  { value: "18+", label: "Years of experience" },
  { value: "48h", label: "To kick off" },
  { value: "50+", label: "Projects delivered" },
  { value: "£0", label: "Unnecessary retainers" },
];

export default function TheProblem() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-dark/[0.06] rounded-2xl overflow-hidden mb-24"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
              className="bg-cream px-8 py-8"
            >
              <p className="font-sans font-semibold text-4xl md:text-5xl text-dark tracking-tight">
                {stat.value}
              </p>
              <p className="text-muted text-xs font-medium tracking-widest uppercase mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Problem statements */}
        <div className="grid md:grid-cols-[200px_1fr] gap-12 md:gap-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="text-coral text-xs font-medium tracking-widest uppercase sticky top-32">
              The problem
            </p>
          </motion.div>

          <div>
            {problems.map((problem, i) => (
              <motion.div
                key={problem.number}
                initial={{ opacity: 0, transform: "translateY(20px)" }}
                whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              >
                <div className="flex items-start gap-8 py-10">
                  <span className="text-dark/20 text-sm font-medium tabular-nums shrink-0 mt-1">
                    {problem.number}
                  </span>
                  <p className="font-serif text-2xl md:text-3xl text-dark leading-snug">
                    {problem.text}
                  </p>
                </div>
                {i < problems.length - 1 && (
                  <div className="h-px bg-dark/[0.07]" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
