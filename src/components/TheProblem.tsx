"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const problems = [
  {
    number: "01",
    text: "Your customer experience is costing you, but you don't have the in-house expertise to fix it.",
  },
  {
    number: "02",
    text: "You're spending on acquisition while losing customers you already have.",
  },
  {
    number: "03",
    text: "Your teams know the problems. Nobody's given them the tools or mandate to solve them.",
  },
];

const stats = [
  { value: "18+", label: "Years of combined experience" },
  { value: "30%", label: "Less than the average consultancy" },
  { value: "4 weeks", label: "To first results" },
  { value: "3", label: "Ways to collaborate" },
];

function ProblemStatement({ problem }: { problem: typeof problems[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.2"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="py-12 md:py-16 border-b border-cream/10 last:border-0"
    >
      <div className="flex items-start gap-6 md:gap-10">
        <span className="text-cream/20 text-sm font-medium tabular-nums shrink-0 mt-2 md:mt-3">
          {problem.number}
        </span>
        <p className="font-serif text-3xl md:text-5xl lg:text-6xl text-cream leading-[1.1] tracking-tight">
          {problem.text}
        </p>
      </div>
    </motion.div>
  );
}

export default function TheProblem() {
  return (
    <>
      {/* Problem statements — dark section */}
      <section className="bg-dark px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[220px_1fr] gap-12 md:gap-24">

            {/* Sticky label */}
            <div>
              <div className="md:sticky md:top-32">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-coral text-xs font-medium tracking-widest uppercase"
                >
                  The problem
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-cream/30 text-sm leading-relaxed mt-4 hidden md:block"
                >
                  Sound familiar? These are the challenges we hear from every organisation we work with.
                </motion.p>
              </div>
            </div>

            {/* Statements */}
            <div>
              {problems.map((problem) => (
                <ProblemStatement key={problem.number} problem={problem} />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Narrative + stats — light section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Narrative copy */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
              <p className="text-coral text-xs font-medium tracking-widest uppercase mb-6">
                Why we exist
              </p>
              <p className="font-serif text-2xl md:text-3xl text-dark leading-snug">
                We saw our clients being asked to do more with less, while design consultancies stayed the same.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col justify-end"
            >
              <p className="text-muted text-base leading-relaxed mb-4">
                So we built something different: a fixed model that delivers high-quality work without unnecessary overheads.
              </p>
              <p className="text-muted text-base leading-relaxed">
                Everything we deliver, you can use. Not standalone research that gets forgotten on a shelf.
              </p>
            </motion.div>
          </div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-dark/[0.06] rounded-2xl overflow-hidden"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
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

        </div>
      </section>

    </>
  );
}
