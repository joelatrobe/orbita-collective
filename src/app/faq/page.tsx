import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import ServiceCTA from "@/components/ServiceCTA";
import { faqs } from "@/lib/faqs";
import { servicePages } from "@/lib/services";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "How Orbita Collective works: what a project costs, how quickly you see results, which industries we work in, and how to get started. CX and service design consultancy in London and Milan.",
  keywords: [
    "service design consultancy cost",
    "CX consultancy pricing",
    "how long does user research take",
    "Orbita Collective FAQ",
  ],
  openGraph: {
    title: "Frequently Asked Questions | Orbita Collective",
    description:
      "What a project costs, how quickly you see results, and how to get started with Orbita Collective.",
    url: "https://www.orbitacollective.com/faq",
    siteName: "Orbita Collective",
    type: "website",
  },
  alternates: {
    canonical: "https://www.orbitacollective.com/faq",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://www.orbitacollective.com/faq#faq",
      url: "https://www.orbitacollective.com/faq",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.orbitacollective.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Frequently Asked Questions",
          item: "https://www.orbitacollective.com/faq",
        },
      ],
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Navigation />
      <main>
        <section className="px-6 pt-40 pb-16">
          <div className="max-w-3xl mx-auto">
            <nav className="flex items-center gap-2 text-xs text-dark/40 mb-10" aria-label="Breadcrumb">
              <Link href="/" className="cursor-pointer hover:text-coral transition-colors">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-dark/60">FAQs</span>
            </nav>

            <p className="text-coral text-sm font-medium tracking-widest uppercase mb-4">
              Common questions
            </p>
            <h1 className="font-sans font-semibold text-4xl md:text-5xl text-dark leading-[1.1] tracking-tight">
              The things people ask us{" "}
              <span className="font-serif italic font-normal">first.</span>
            </h1>
            <p className="mt-6 text-muted text-base leading-relaxed max-w-xl">
              How we work, what it costs, and what to expect. If your question
              isn&apos;t here, ask us directly.
            </p>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <FAQ items={faqs} />

            <div className="mt-14">
              <h2 className="text-dark/50 text-xs font-medium tracking-widest uppercase mb-5">
                What we do
              </h2>
              <div className="flex flex-wrap gap-3">
                {servicePages.map((page) => (
                  <Link
                    key={page.slug}
                    href={page.slug}
                    className="border border-dark/15 text-dark/70 px-5 py-2.5 rounded-full text-xs font-medium cursor-pointer hover:border-coral/50 hover:text-dark transition-colors duration-200"
                  >
                    {page.anchor}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ServiceCTA
          heading="Still have a question?"
          subtext="Tell us what you are trying to solve and we will tell you honestly whether we are the right people for it."
        />
      </main>
      <Footer />
    </>
  );
}
