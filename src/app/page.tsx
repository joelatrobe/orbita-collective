import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TheProblem from "@/components/TheProblem";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import HowWeWork from "@/components/HowWeWork";
import About from "@/components/About";
import FAQ, { type FAQItem } from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const faqs: FAQItem[] = [
  {
    q: "What does Orbita Collective actually do?",
    a: "We are a service design, customer experience and innovation consultancy working with organisations in London and Milan. In practice that means user research, service and experience design, CX strategy, and structured innovation work. Everything we deliver is built to be used from day one, not filed away.",
  },
  {
    q: "How much does a project cost?",
    a: "We are roughly 30 per cent more affordable than a traditional consultancy, because we reinvented the operating model rather than the rate card. There is no fixed price list. We scope each project to the problem and give you a clear figure and timeline before any work starts.",
  },
  {
    q: "How quickly will we see results?",
    a: "Most clients have something usable within four weeks. That might be a research synthesis, a service blueprint, or a tested concept, depending on where you are starting. Larger programmes run longer, but we structure them so value lands early rather than all at the end.",
  },
  {
    q: "Which industries do you work in?",
    a: "We have worked across retail, financial services, healthcare, technology and the public sector, with clients including UNICEF, Fortnum and Mason, and Curzon. Good design practice holds across industries. What changes is the context, the regulation, and the customer, and we adapt to those.",
  },
  {
    q: "Do you work remotely or on site?",
    a: "Both. We are based in London and Milan and travel to clients across the UK and Europe for workshops, research sessions and anything that genuinely benefits from being in a room together. The rest runs remotely, which keeps your costs down.",
  },
  {
    q: "How is this different from a big consultancy?",
    a: "You work directly with the founders, not a pyramid of junior staff. There is no research report that gets forgotten on a shelf, no framework for the sake of a framework, and no premium for overheads you never asked for. You get the craft without the baggage.",
  },
  {
    q: "How do we get started?",
    a: "Book a 30 minute conversation. Tell us the problem you are trying to solve and we will tell you honestly whether we are the right people for it. We reply within one working day.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.orbitacollective.com/#faq",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />
      <main>
        <Hero />
        <Clients />
        <TheProblem />
        <Services />
        <HowWeWork />
        <About />
        <FAQ items={faqs} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
