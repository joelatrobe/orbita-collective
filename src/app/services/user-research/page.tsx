import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceFAQ from "@/components/ServiceFAQ";
import ServiceHero from "@/components/ServiceHero";
import ServiceCTA from "@/components/ServiceCTA";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "User Research Agency London & Milan | Orbita Collective",
  description:
    "Expert user research and customer insights in London and Milan. Qualitative and quantitative research that uncovers what your customers truly need. Without the shelf-bound report. 18+ years experience.",
  keywords: [
    "user research agency London",
    "UX research consultancy",
    "customer research London",
    "qualitative research agency UK",
    "user research Milan",
  ],
  openGraph: {
    title: "User Research Agency London & Milan | Orbita Collective",
    description:
      "Expert user research and customer insights in London and Milan. Qualitative and quantitative research that uncovers what your customers truly need. Without the shelf-bound report.",
    url: "https://orbitacollective.com/services/user-research",
    siteName: "Orbita Collective",
    type: "website",
  },
  alternates: {
    canonical: "https://orbitacollective.com/services/user-research",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "User Research & Customer Insights",
      provider: {
        "@type": "Organization",
        name: "Orbita Collective",
        url: "https://orbitacollective.com",
      },
      areaServed: ["London", "Milan"],
      description:
        "Expert user research and customer insights that uncover what your customers truly need. Qualitative and quantitative research without the shelf-bound report.",
      url: "https://orbitacollective.com/services/user-research",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How long does a user research project take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most projects run between four and eight weeks, depending on the number of research participants, methods used, and how much synthesis and reporting is required. We scope each project individually. Contact us and we will give you a realistic timeline for your specific question.",
          },
        },
        {
          "@type": "Question",
          name: "Do you recruit participants or do we?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We handle participant recruitment end to end. That includes screening, scheduling, incentives, and consent. If you already have a panel or customer list you would like us to draw from, we can work with that too.",
          },
        },
        {
          "@type": "Question",
          name: "What industries do you work in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We have worked across retail, financial services, healthcare, technology and the public sector. Good user research practice is consistent across industries. What changes is the context, the regulatory constraints, and the type of participant. We adapt accordingly.",
          },
        },
        {
          "@type": "Question",
          name: "How is this different from a survey?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Surveys tell you what. Research tells you why. A survey can confirm that a behaviour exists; it cannot explain the reasoning behind it, the emotion attached to it, or the workarounds your customers have invented. We use depth interviews, observation, and contextual inquiry to get to the layer that surveys cannot reach.",
          },
        },
        {
          "@type": "Question",
          name: "How much does user research cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our fees are typically 30% more affordable than traditional consultancies, because we carry no unnecessary overhead. Every engagement is scoped individually. Contact us with your brief and we will come back with a clear, itemised quote.",
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
          name: "User Research",
          item: "https://orbitacollective.com/services/user-research",
        },
      ],
    },
  ],
};

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We align on your research questions, define success, and agree on the right methods. No boilerplate briefs. We start from what you actually need to know.",
  },
  {
    number: "02",
    title: "Fieldwork",
    description:
      "Depth interviews, contextual observation, usability sessions, or diary studies. We choose the method that fits the question, not the one that's easiest to schedule.",
  },
  {
    number: "03",
    title: "Synthesis",
    description:
      "We analyse patterns across participants and translate raw data into clear findings. Everything gets structured around what it means for your product or service, not just what we observed.",
  },
  {
    number: "04",
    title: "Handover",
    description:
      "You get a report built for action, not for filing. We run a recommendations workshop with your team so the findings land with the people who can do something about them.",
  },
];

const deliverables = [
  "Research report with clear findings and prioritised recommendations",
  "Customer journey maps showing the actual experience, not the intended one",
  "User personas grounded in real behaviour and motivation",
  "Opportunity map highlighting gaps and unmet needs",
  "Recommendations workshop with your team",
];

const faqs = [
  {
    q: "How long does a user research project take?",
    a: "Most projects run between four and eight weeks, depending on the number of research participants, methods used, and how much synthesis and reporting is required. We scope each project individually. Contact us and we will give you a realistic timeline for your specific question.",
  },
  {
    q: "Do you recruit participants or do we?",
    a: "We handle participant recruitment end to end. That includes screening, scheduling, incentives, and consent. If you already have a panel or customer list you would like us to draw from, we can work with that too.",
  },
  {
    q: "What industries do you work in?",
    a: "We have worked across retail, financial services, healthcare, technology and the public sector. Good user research practice is consistent across industries. What changes is the context, the regulatory constraints, and the type of participant. We adapt accordingly.",
  },
  {
    q: "How is this different from a survey?",
    a: "Surveys tell you what. Research tells you why. A survey can confirm that a behaviour exists; it cannot explain the reasoning behind it, the emotion attached to it, or the workarounds your customers have invented. We use depth interviews, observation, and contextual inquiry to get to the layer that surveys cannot reach.",
  },
  {
    q: "How much does user research cost?",
    a: "Our fees are typically 30% more affordable than traditional consultancies, because we carry no unnecessary overhead. Every engagement is scoped individually. Contact us with your brief and we will come back with a clear, itemised quote.",
  },
];

export default function UserResearchPage() {
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
              <span className="text-cream/60">User Research</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <ServiceHero
          label="User Research"
          h1Line1="User Research &"
          h1Accent="Customer Insights"
          subtitle="Most research ends up in a deck that no one opens. Ours is built to be used from the moment it lands. We work with organisations in London and Milan to understand what customers actually do, think, and need. So you can build things that work."
          backHref="/#services"
        />

        {/* What good research looks like */}
        <section className="bg-cream py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <span className="text-coral text-xs font-medium uppercase tracking-widest">
                Our approach
              </span>
              <h2 className="font-sans font-semibold text-2xl md:text-3xl text-dark mt-3 mb-6">
                What good user research actually looks like
              </h2>
              <div className="space-y-5 text-dark/75 text-base leading-relaxed">
                <p>
                  The problem with most research is not the data. It is what happens
                  after the fieldwork ends. Reports get written for sign-off, not for
                  action. Findings get buried in appendices. The people who need to
                  change something never see the sessions, never hear the customer's
                  voice, and end up treating conclusions as abstract recommendations
                  from a consultant they barely met. Three months later, the product
                  launches with the same problems the research identified.
                </p>
                <p>
                  We design research projects so the outputs are usable from day one.
                  That means involving your team in synthesis, not just handing over a
                  slide deck. It means writing reports that lead with insight, not
                  methodology. And it means running a handover workshop where findings
                  become decisions, not action items that age in a backlog. We have
                  spent 18 years in organisations large and small, and we know the
                  difference between research that changes a product and research that
                  fulfils a procurement requirement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="bg-blue-accent/10 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <span className="text-coral text-xs font-medium uppercase tracking-widest">
              Process
            </span>
            <h2 className="font-sans font-semibold text-2xl md:text-3xl text-dark mt-3 mb-10">
              How we work
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="border border-dark/[0.06] rounded-2xl p-6 bg-cream"
                >
                  <span className="font-serif italic font-normal text-coral text-2xl">
                    {step.number}
                  </span>
                  <h3 className="font-sans font-semibold text-dark text-lg mt-3 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-dark/65 text-sm leading-relaxed">
                    {step.description}
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
                    <CheckCircle2
                      size={18}
                      className="text-coral shrink-0 mt-0.5"
                    />
                    <span className="text-dark/75 text-base leading-relaxed">
                      {item}
                    </span>
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
          heading="Ready to understand your customers?"
          subtext="Tell us about your research question and we will scope a project that gives you real answers."
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
