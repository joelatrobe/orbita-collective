import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceFAQ from "@/components/ServiceFAQ";
import ServiceHero from "@/components/ServiceHero";
import ServiceCTA from "@/components/ServiceCTA";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Innovation Consultancy London & Milan | Orbita Collective",
  description:
    "Innovation consultancy that helps organisations lead change from the inside-out. Design thinking, product exploration and vision setting in London and Milan.",
  keywords: [
    "innovation consultancy London",
    "design thinking consultancy UK",
    "product innovation agency",
    "innovation consultancy Milan",
    "design thinking agency London",
  ],
  openGraph: {
    title: "Innovation Consultancy London & Milan | Orbita Collective",
    description:
      "Innovation consultancy that helps organisations lead change from the inside-out. Design thinking, product exploration and vision setting in London and Milan.",
    url: "https://orbitacollective.com/services/innovation",
    siteName: "Orbita Collective",
    type: "website",
  },
  alternates: {
    canonical: "https://orbitacollective.com/services/innovation",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Innovation Consultancy",
  provider: {
    "@type": "Organization",
    name: "Orbita Collective",
    url: "https://orbitacollective.com",
  },
  areaServed: ["London", "Milan"],
  description:
    "Innovation consultancy using design thinking to help organisations lead change from the inside-out — grounded in real customer needs, not ideation for its own sake.",
  url: "https://orbitacollective.com/services/innovation",
};

const stages = [
  {
    number: "01",
    title: "Empathise",
    description:
      "We start with deep customer research. Real conversations, observation, and context — not assumptions or desk research. You cannot innovate meaningfully without first understanding the problem from the inside.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We synthesise what we have learned into a sharp problem statement. This is the step most organisations skip in their rush to ideate. A well-defined problem makes everything that follows faster and sharper.",
  },
  {
    number: "03",
    title: "Ideate",
    description:
      "Structured ideation with your team — facilitated to move past the obvious and into the genuinely interesting. We use a range of methods to generate ideas, then narrow quickly to the ones worth developing.",
  },
  {
    number: "04",
    title: "Prototype",
    description:
      "We build quick, low-fidelity prototypes of the most promising ideas. The goal is to make concepts testable, not to produce finished artefacts. Speed matters more than polish at this stage.",
  },
  {
    number: "05",
    title: "Test",
    description:
      "Prototypes go in front of real users. We learn what works, what does not, and why. Then we iterate. By the end of a sprint, you have validated ideas with evidence — not just concepts that felt good in the room.",
  },
];

const deliverables = [
  "Innovation sprint report with findings, concepts, and evidence",
  "Concept prototypes, ready to test or develop further",
  "Validated ideas with user testing evidence",
  "Implementation roadmap for taking ideas into product development",
  "Team upskilling in design thinking methods",
];

const faqs = [
  {
    q: "What is a design thinking consultancy?",
    a: "Design thinking is a structured approach to solving complex problems — one that starts with deep understanding of the people affected, moves through collaborative ideation, and arrives at solutions that have been tested before they are built. A design thinking consultancy helps organisations apply this process, either to a specific challenge or as a capability they want to develop internally.",
  },
  {
    q: "How do innovation sprints work?",
    a: "A sprint is a focused, time-boxed engagement — typically two to four weeks — where we work intensively with your team on a defined challenge. The process moves from research through ideation to prototyping and testing. You finish with validated concepts and a clear view of which are worth pursuing, which need more work, and which should be dropped.",
  },
  {
    q: "Do you work with startups?",
    a: "Our work is primarily with scale-ups and large organisations. That said, we are open to a conversation if you are a startup with a specific, well-defined challenge that suits this way of working. Contact us and we can assess whether the fit is right.",
  },
  {
    q: "What is the difference between innovation consultancy and regular strategy consultancy?",
    a: "Traditional strategy consultancy analyses, advises, and recommends. Innovation consultancy does all of that — and then tests the ideas before committing to them. We build prototypes. We put concepts in front of real users. We learn what actually works rather than presenting a set of recommendations and leaving. The output is validated ideas, not a slide deck of options.",
  },
  {
    q: "How much does an innovation sprint cost?",
    a: "Sprint costs vary based on complexity, team size, and duration. We scope each engagement individually — contact us with your challenge and we will give you a clear, honest quote.",
  },
];

export default function InnovationPage() {
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
              <span className="text-cream/60">Innovation</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <ServiceHero
          label="Innovation"
          h1Line1="Innovation"
          h1Accent="Consultancy"
          subtitle="Innovation that works looks less like a brainstorming session and more like a structured process — one that starts with real customer problems and ends with ideas you have actually tested. We help organisations in London and Milan lead change from the inside-out."
          backHref="/#services"
        />

        {/* What innovation actually looks like */}
        <section className="bg-cream py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <span className="text-coral text-xs font-medium uppercase tracking-widest">
                Our thinking
              </span>
              <h2 className="font-sans font-semibold text-2xl md:text-3xl text-dark mt-3 mb-6">
                What innovation actually looks like
              </h2>
              <div className="space-y-5 text-dark/75 text-base leading-relaxed">
                <p>
                  Innovation theatre is expensive and easy to spot in hindsight. A
                  two-day off-site, a wall covered in sticky notes, a shortlist of
                  exciting-sounding concepts — and three months later, none of them
                  have moved because no one agreed on which problem they were actually
                  solving. The ideas were generated without enough understanding of
                  the customer. They were never tested with anyone outside the room.
                  And when they hit the organisation's operational reality, they could
                  not survive. The off-site becomes a story people tell with a slightly
                  tired smile.
                </p>
                <p>
                  Real innovation is slower at the start and faster at the end. It
                  spends time on the problem before it touches solutions. It builds
                  small, cheap prototypes that answer specific questions. It puts
                  concepts in front of real users before a line of code is written or
                  a business case is submitted. This is design thinking in practice —
                  not as a methodology to be evangelised, but as a discipline that
                  makes the difference between an idea that becomes a product and an
                  idea that becomes a slide in a deck about last year's work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How we work — 5 stages */}
        <section className="bg-blue-accent/10 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <span className="text-coral text-xs font-medium uppercase tracking-widest">
              Process
            </span>
            <h2 className="font-sans font-semibold text-2xl md:text-3xl text-dark mt-3 mb-10">
              How we work
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {stages.map((stage) => (
                <div
                  key={stage.number}
                  className="border border-dark/[0.06] rounded-2xl p-6 bg-cream"
                >
                  <span className="font-serif italic font-normal text-coral text-2xl">
                    {stage.number}
                  </span>
                  <h3 className="font-sans font-semibold text-dark text-lg mt-3 mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-dark/65 text-sm leading-relaxed">
                    {stage.description}
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
          heading="Ready to move past the ideas wall?"
          subtext="Tell us the challenge you are trying to solve. We will design a sprint that produces validated concepts, not just conversation."
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
