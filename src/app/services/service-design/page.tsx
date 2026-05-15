import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceFAQ from "@/components/ServiceFAQ";
import ServiceHero from "@/components/ServiceHero";
import ServiceCTA from "@/components/ServiceCTA";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Service Design Consultancy London & Milan | Orbita Collective",
  description:
    "End-to-end service design consultancy in London and Milan. We design experiences that are coherent, delightful and operationally feasible. Every touchpoint, every time.",
  keywords: [
    "service design consultancy London",
    "service design agency UK",
    "experience design consultancy",
    "service design Milan",
    "service design agency",
  ],
  openGraph: {
    title: "Service Design Consultancy London & Milan | Orbita Collective",
    description:
      "End-to-end service design consultancy in London and Milan. We design experiences that are coherent, delightful and operationally feasible. Every touchpoint, every time.",
    url: "https://orbitacollective.com/services/service-design",
    siteName: "Orbita Collective",
    type: "website",
  },
  alternates: {
    canonical: "https://orbitacollective.com/services/service-design",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Service & Experience Design",
  provider: {
    "@type": "Organization",
    name: "Orbita Collective",
    url: "https://orbitacollective.com",
  },
  areaServed: ["London", "Milan"],
  description:
    "End-to-end service design consultancy that designs experiences which are coherent, delightful and operationally feasible — every touchpoint, every time.",
  url: "https://orbitacollective.com/services/service-design",
};

const phases = [
  {
    number: "01",
    title: "Research & Discovery",
    description:
      "We map the current experience through customer interviews, staff shadowing, and process analysis. We need to understand what is actually happening before we can design what should happen.",
  },
  {
    number: "02",
    title: "Mapping & Analysis",
    description:
      "Current-state service blueprints and journey maps reveal where the experience breaks down — and why. We identify root causes, not just symptoms.",
  },
  {
    number: "03",
    title: "Design & Prototyping",
    description:
      "We design the future-state experience across all channels and touchpoints, creating concepts that are testable before they are built. Nothing is handed over as a finished answer.",
  },
  {
    number: "04",
    title: "Test & Iterate",
    description:
      "Prototypes get tested with real users. We refine based on what we learn, so that by the time design goes to implementation, the logic has been stress-tested.",
  },
];

const deliverables = [
  "Service blueprints covering front-stage and back-stage operations",
  "Customer journey maps across all relevant channels and touchpoints",
  "Experience principles to guide design decisions across teams",
  "Prototype concepts, tested with real users",
  "Implementation roadmap prioritised by impact and feasibility",
];

const faqs = [
  {
    q: "What is service design?",
    a: "Service design is the practice of designing the full experience of a service — not just the interface, but every touchpoint a customer encounters, and every backstage process that enables it. It considers the customer's perspective and the organisation's operations together, so that what you design is both good for people and possible to deliver.",
  },
  {
    q: "How long does a service design project take?",
    a: "Most engagements run between six and twelve weeks. Smaller, focused projects — a single journey or a scoped prototype — can move faster. Larger transformation programmes take longer, and we scope those individually. We will give you an honest timeline upfront.",
  },
  {
    q: "Do we need to be a large organisation?",
    a: "No. We work with scale-ups as well as large enterprises. The principles are the same; what changes is the scope. A scale-up with a specific service problem is just as well-suited to this work as a multinational rethinking a product line.",
  },
  {
    q: "What makes Orbita different from other service design agencies?",
    a: "We carry no unnecessary overhead, which means our fees are typically 30% more affordable than traditional consultancies. More importantly, we design with your team rather than for them — so everything we deliver is understood, owned, and usable from the moment it lands.",
  },
  {
    q: "Can you work with our internal team?",
    a: "Yes — and we prefer it that way. Cross-functional collaboration is central to how we work. Your product, operations, technology, and customer service teams all shape the experience your customers have. Keeping them in the room throughout the process means the output reflects reality, not a consultant's assumption.",
  },
];

export default function ServiceDesignPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Breadcrumb */}
        <div className="bg-dark px-6 pt-28 pb-0">
          <div className="max-w-6xl mx-auto">
            <nav className="flex items-center gap-2 text-xs text-cream/40" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-cream/70 transition-colors cursor-pointer">
                Home
              </Link>
              <span>/</span>
              <Link href="/#services" className="hover:text-cream/70 transition-colors cursor-pointer">
                Services
              </Link>
              <span>/</span>
              <span className="text-cream/60">Service Design</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <ServiceHero
          label="Service Design"
          h1Line1="Service &"
          h1Accent="Experience Design"
          subtitle="There is almost always a gap between the experience an organisation intends and the one customers actually have. Service design is how you close it — deliberately, and across every part of the service, not just the parts that are easy to see."
          backHref="/#services"
        />

        {/* Why service design matters */}
        <section className="bg-cream py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <span className="text-coral text-xs font-medium uppercase tracking-widest">
                Why it matters
              </span>
              <h2 className="font-sans font-semibold text-2xl md:text-3xl text-dark mt-3 mb-6">
                Why service design matters
              </h2>
              <div className="space-y-5 text-dark/75 text-base leading-relaxed">
                <p>
                  Organisations invest heavily in individual channels — a new app, a
                  redesigned contact centre script, a refreshed website — without
                  stepping back to look at the service as a whole. Customers, of
                  course, do not experience channels in isolation. They move between
                  them, carry frustrations from one into another, and form an overall
                  impression based on the weakest moment in the sequence. Fixing the
                  app whilst the handover to phone support remains broken is not a
                  solution. It is a local optimisation.
                </p>
                <p>
                  Service design gives you a way to see the whole experience at once,
                  diagnose where and why it breaks down, and redesign it in a way that
                  holds together operationally. That means engaging the people who
                  deliver the service, not just the people who commissioned the design.
                  It means prototyping before building, testing before launching, and
                  measuring what actually matters to customers rather than what is easy
                  to count. The result is a service that is coherent from first contact
                  to resolution — and one your team knows how to maintain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our approach */}
        <section className="bg-blue-accent/10 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <span className="text-coral text-xs font-medium uppercase tracking-widest">
              Process
            </span>
            <h2 className="font-sans font-semibold text-2xl md:text-3xl text-dark mt-3 mb-10">
              Our approach
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {phases.map((phase) => (
                <div
                  key={phase.number}
                  className="border border-dark/[0.06] rounded-2xl p-6 bg-cream"
                >
                  <span className="font-serif italic font-normal text-coral text-2xl">
                    {phase.number}
                  </span>
                  <h3 className="font-sans font-semibold text-dark text-lg mt-3 mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-dark/65 text-sm leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="bg-cream py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl">
              <span className="text-coral text-xs font-medium uppercase tracking-widest">
                Deliverables
              </span>
              <h2 className="font-sans font-semibold text-2xl md:text-3xl text-dark mt-3 mb-8">
                What you get
              </h2>
              <ul className="space-y-4">
                {deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-coral shrink-0 mt-0.5" />
                    <span className="text-dark/75 text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-blue-accent/10 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <span className="text-coral text-xs font-medium uppercase tracking-widest">
                Questions
              </span>
              <h2 className="font-sans font-semibold text-2xl md:text-3xl text-dark mt-3 mb-8">
                Common questions
              </h2>
              <ServiceFAQ faqs={faqs} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <ServiceCTA
          heading="Let us look at your service together."
          subtext="Bring us your most frustrating experience problem. We will scope a project that gets to the root of it."
        />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
