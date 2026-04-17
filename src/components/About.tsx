"use client";

import { motion } from "motion/react";

const founders = [
  {
    name: "Elisa Facondo",
    role: "Customer Experience",
    trait: "Strategic thinker and passionate communicator",
    email: "elisa@orbitacollective.com",
    photo: "/team/elisa.jpg?v=4",
  },
  {
    name: "Joe La Trobe",
    role: "Design & Innovation",
    trait: "Creative thinker and problem solver",
    email: "joe@orbitacollective.com",
    photo: "/team/joe.jpg?v=4",
  },
];

export default function About() {
  return (
    <section id="about" className="pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, transform: "translateY(30px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="text-coral text-sm font-medium tracking-widest uppercase mb-4">
              About us
            </p>
            <h2 className="font-sans font-semibold text-3xl md:text-4xl text-dark leading-tight mb-6">
              While the world changes for you,{" "}
              <span className="font-serif italic font-normal">
                it should change the way consultancies work too.
              </span>
            </h2>
            <div className="space-y-4 text-muted text-base leading-relaxed">
              <p>
                Founders Elisa & Joe have 18+ years of experience in Customer
                Experience, Service Design, Strategy, and Design Thinking.
              </p>
              <p>
                They built Orbita to be{" "}
                <span className="text-dark font-medium">inspiring</span>,{" "}
                <span className="text-dark font-medium">impactful</span>, and{" "}
                <span className="text-dark font-medium">affordable</span>.
                Bringing fresh thinking to complex organisations without the
                traditional consultancy premium.
              </p>
              <p>
                We reinvented the operational model so that quality doesn&apos;t
                have to come at a cost. Everything we deliver, you can use from
                day one.
              </p>
              <p className="flex items-center gap-2 text-dark/40 text-sm pt-1">
                <span>📍</span>
                <span>London & Italy</span>
              </p>
            </div>
          </motion.div>

          <div className="space-y-6">
            {founders.map((founder, i) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, transform: "translateY(30px)" }}
                whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.23, 1, 0.32, 1] }}
                className="border border-dark/[0.04] border-l-4 border-l-blue-accent/40 rounded-3xl p-8"
              >
                <div className="flex items-start gap-5">
                  <img
                    src={founder.photo}
                    alt={founder.name}
                    className="w-14 h-14 rounded-2xl object-cover object-top shrink-0"
                  />
                  <div>
                    <h3 className="font-sans font-semibold text-lg text-dark">{founder.name}</h3>
                    <p className="text-coral text-sm font-medium">{founder.role}</p>
                    <p className="text-muted text-sm mt-2 font-serif italic">{founder.trait}</p>
                    <a href={`mailto:${founder.email}`} className="text-dark/50 text-xs mt-3 inline-block cursor-pointer hover:text-coral transition-colors">
                      {founder.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
