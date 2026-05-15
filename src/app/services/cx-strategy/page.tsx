import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceFAQ from "@/components/ServiceFAQ";
import ServiceHero from "@/components/ServiceHero";
import ServiceCTA from "@/components/ServiceCTA";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Customer Experience Strategy Consultancy | London & Milan | Orbita Collective",
  description:
    "CX strategy consultancy that turns customer insight into business results. We build strategies that stick. Grounded in real user needs, not assumptions. London & Milan.",
  keywords: [
    "customer experience strategy consultancy",
    "CX strategy agency London",
    "customer experience design consultancy",
    "CX consultancy UK",
    "customer experience consultant",
  ],
  openGraph: {
    title: "Customer Experience Strategy Consultancy | London & Milan | Orbita Collective",
    description:
      "CX strategy consultancy that turns customer insight into business results. We build strategies that stick. Grounded in real user needs, not assumptions.",
    url: "https://orbitacollective.com/services/cx-strategy",
    siteName: "Orbita Collective",
    type: "website",
  },
  alternates: {
    canonical: "https://orbitacollective.com/services/cx-strategy",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Customer Experience Strategy",
      provider: {
        "@type": "Organization",
        name: "Orbita Collective",
        url: "https://orbitacollective.com",
      },
      areaServed: ["London", "Milan"],
      description:
        "CX strategy consultancy that turns customer insight into business results. Strategies grounded in real user needs, built with the teams that implement them.",
      url: "https://orbitacollective.com/services/cx-strategy",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is customer experience strategy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Customer experience strategy is a plan for the experience you want to deliver. What it should feel like at every point of contact, how it supports your business goals, and how you will measure whether it is working. A good CX strategy is specific enough to guide real decisions, not just a set of aspirational principles.",
          },
        },
        {
          "@type": "Question",
          name: "How do you measure CX success?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We use a combination of quantitative metrics. NPS, CSAT, customer effort score, retention rate. And qualitative signals from research and feedback. No single number captures the full picture. We build measurement frameworks that give you a realistic view of the experience your customers are actually having.",
          },
        },
        {
          "@type": "Question",
          name: "How long does CX strategy take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most CX strategy engagements run between six and ten weeks. That includes audit, strategy development, and alignment workshops. If you need ongoing support through implementation, we can scope a longer engagement.",
          },
        },
        {
          "@type": "Question",
          name: "Do you implement the strategy or just define it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both. Some clients need help defining the strategy and then take it from there. Others want us alongside during implementation. Embedded in the team, reviewing progress, adjusting the approach as they learn. We are flexible. Tell us what you need.",
          },
        },
        {
          "@type": "Question",
          name: "What does CX consultancy cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our fees are typically 30% more affordable than traditional consultancies. We price based on scope, not on overhead. Contact us with your brief and we will give you a clear, honest quote.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://orbitacollective.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://orbitacollective.com/#services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "CX Strategy",
          item: "https://orbitacollective.com/services/cx-strategy",
        },
      ],
    },
  ],
};

const areas = [
  {
    number: "01",
    title: "CX Audit & Diagnosis",
    description:
      "Before you can set a direction, you need an honest picture of where you are. We audit your current customer experience across all key touchpoints. Qualitative and quantitative. And identify the gaps that matter most.",
  },
  {
    number: "02",
    title: "Strategy Development",
    description:
      "We work with you to define a clear CX direction: what experience you want to deliver, for whom, and how it connects to your commercial goals. Strategy that is specific enough to act on, not so abstract it gathers dust.",
  },
  {
    number: "03",
    title: "Cross-functional Alignment",
    description:
      "CX strategy fails when it sits with one team. We facilitate alignment across product, operations, marketing, and customer service so that everyone understands the direction and their role in it.",
  },
  {
    number: "04",
    title: "Measurement & KPIs",
    description:
      "We help you define the right metrics. Ones that reflect actual customer experience, not just what is easy to track. And we build the measurement framework that keeps the strategy honest over time.",
  },
];

const deliverables = [
  "CX strategy document with clear objectives, principles, and priorities",
  "Measurement framework covering quantitative and qualitative signals",
  "Quick-win roadmap of changes you can make immediately",
  "Team alignment workshop to build shared ownership",
];

const faqs = [
  {
    q: "What is customer experience strategy?",
    a: "Customer experience strategy is a plan for the experience you want to deliver. What it should feel like at every point of contact, how it supports your business goals, and how you will measure whether it is working. A good CX strategy is specific enough to guide real decisions, not just a set of aspirational principles.",
  },
  {
    q: "How do you measure CX success?",
    a: "We use a combination of quantitative metrics. NPS, CSAT, customer effort score, retention rate. And qualitative signals from research and feedback. No single number captures the full picture. We build measurement frameworks that give you a realistic view of the experience your customers are actually having.",
  },
  {
    q: "How long does CX strategy take?",
    a: "Most CX strategy engagements run between six and ten weeks. That includes audit, strategy development, and alignment workshops. If you need ongoing support through implementation, we can scope a longer engagement.",
  },
  {
    q: "Do you implement the strategy or just define it?",
    a: "Both. Some clients need help defining the strategy and then take it from there. Others want us alongside during implementation. Embedded in the team, reviewing progress, adjusting the approach as they learn. We are flexible. Tell us what you need.",
  },
  {
    q: "What does CX consultancy cost?",
    a: "Our fees are typically 30% more affordable than traditional consultancies. We price based on scope, not on overhead. Contact us with your brief and we will give you a clear, honest quote.",
  },
];

export default function CXStrategyPage() {
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
              <span className="text-cream/60">CX Strategy</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <ServiceHero
          label="CX Strategy"
          h1Line1="Customer Experience"
          h1Accent="Strategy"
          subtitle="Strategy only works if the people responsible for delivery understand it and believe in it. We build CX strategies with your teams. Grounded in real customer insight, designed to be implemented, not filed."
          backHref="/#services"
        />

        {/* The problem with most CX strategies */}
        <section className="bg-cream py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <span className="text-coral text-xs font-medium uppercase tracking-widest">
                The problem
              </span>
              <h2 className="font-sans font-semibold text-2xl md:text-3xl text-dark mt-3 mb-6">
                The problem with most CX strategies
              </h2>
              <div className="space-y-5 text-dark/75 text-base leading-relaxed">
                <p>
                  Most CX strategies are commissioned at senior level, written by
                  consultants who spend three weeks in the organisation, and handed over
                  as a polished deck. They are technically correct. They are often
                  genuinely insightful. And then they get quietly shelved when the
                  next priority arrives, because the teams who need to change something
                  did not write it, do not feel ownership of it, and are not entirely
                  sure what it means in practice on a Tuesday morning.
                </p>
                <p>
                  We take a different approach. We build CX strategies with the teams
                  that implement them. Not because collaboration is a nice-to-have,
                  but because that is the only way the strategy survives contact with
                  the organisation. We start from real customer evidence, not
                  assumptions. We pressure-test the strategy against operational
                  constraints before it is finalised. And we run workshops that create
                  genuine alignment rather than the appearance of it. The result is a
                  strategy your team can actually use.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="bg-blue-accent/10 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <span className="text-coral text-xs font-medium uppercase tracking-widest">
              Our work
            </span>
            <h2 className="font-sans font-semibold text-2xl md:text-3xl text-dark mt-3 mb-10">
              What we do
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {areas.map((area) => (
                <div
                  key={area.number}
                  className="border border-dark/[0.06] rounded-2xl p-6 bg-cream"
                >
                  <span className="font-serif italic font-normal text-coral text-2xl">
                    {area.number}
                  </span>
                  <h3 className="font-sans font-semibold text-dark text-lg mt-3 mb-2">
                    {area.title}
                  </h3>
                  <p className="text-dark/65 text-sm leading-relaxed">
                    {area.description}
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
          heading="Your strategy should be built to be used."
          subtext="Tell us where your CX is underperforming and we will scope a project that produces a strategy your team can act on."
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
