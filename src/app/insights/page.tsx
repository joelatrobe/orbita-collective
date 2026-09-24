import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCTA from "@/components/ServiceCTA";
import { guides, sectorPages, SITE } from "@/lib/insights";
import { servicePages } from "@/lib/services";

const description =
  "Practical guides on customer experience, service design and innovation for people leading change in large organisations. From Orbita Collective, London and Milan.";

export const metadata: Metadata = {
  title: "Insights: CX & Service Design Guides",
  description,
  openGraph: {
    title: "Insights | Orbita Collective",
    description,
    url: `${SITE}/insights`,
    siteName: "Orbita Collective",
    type: "website",
  },
  alternates: { canonical: `${SITE}/insights` },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE}/insights#page`,
      name: "Insights",
      description,
      url: `${SITE}/insights`,
      publisher: { "@id": `${SITE}/#organization` },
      hasPart: [...guides, ...sectorPages].map((g) => ({ "@id": `${SITE}${g.slug}#page` })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE}/insights` },
      ],
    },
  ],
};

function Card({ href, kicker, title, text }: { href: string; kicker: string; title: string; text: string }) {
  return (
    <Link
      href={href}
      className="group block rounded-3xl border border-dark/10 p-7 transition-colors duration-200 hover:border-coral/50 hover:bg-cream/60"
    >
      <p className="text-coral text-[11px] font-medium tracking-widest uppercase mb-3">{kicker}</p>
      <h3 className="font-sans font-semibold text-xl text-dark leading-snug mb-3">{title}</h3>
      <p className="text-dark/60 text-sm leading-relaxed mb-5">{text}</p>
      <span className="inline-flex items-center gap-1.5 text-coral text-sm font-medium">
        Read
        <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

export default function InsightsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navigation />
      <main>
        <section className="px-6 pt-40 pb-12">
          <div className="max-w-5xl mx-auto">
            <nav className="flex items-center gap-2 text-xs text-dark/40 mb-10" aria-label="Breadcrumb">
              <Link href="/" className="cursor-pointer hover:text-coral transition-colors">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-dark/60">Insights</span>
            </nav>
            <p className="text-coral text-sm font-medium tracking-widest uppercase mb-4">Insights</p>
            <h1 className="font-sans font-semibold text-4xl md:text-5xl text-dark leading-[1.1] tracking-tight max-w-3xl">
              Practical guides for people leading{" "}
              <span className="font-serif italic font-normal">change from the inside.</span>
            </h1>
            <p className="mt-6 text-muted text-base leading-relaxed max-w-2xl">
              What we&apos;ve learned about customer experience, service design and innovation in
              large organisations. Not theory for the sake of it. Things you can use.
            </p>
          </div>
        </section>

        <section className="px-6 pb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-dark/50 text-xs font-medium tracking-widest uppercase mb-6">Guides</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {guides.map((g) => (
                <Card key={g.slug} href={g.slug} kicker="Guide" title={g.title} text={g.summary} />
              ))}
            </div>

            <h2 className="text-dark/50 text-xs font-medium tracking-widest uppercase mt-14 mb-6">Sectors</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {sectorPages.map((s) => (
                <Card key={s.slug} href={s.slug} kicker="Sector" title={s.title} text={s.summary} />
              ))}
            </div>

            <h2 className="text-dark/50 text-xs font-medium tracking-widest uppercase mt-14 mb-5">What we do</h2>
            <div className="flex flex-wrap gap-3">
              {servicePages.map((p) => (
                <Link
                  key={p.slug}
                  href={p.slug}
                  className="border border-dark/15 text-dark/70 px-5 py-2.5 rounded-full text-xs font-medium cursor-pointer hover:border-coral/50 hover:text-dark transition-colors duration-200"
                >
                  {p.anchor}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ServiceCTA
          heading="Got a problem that isn't covered here?"
          subtext="Tell us what you're working on. We reply within one working day with an honest view of whether we can help."
        />
      </main>
      <Footer />
    </>
  );
}
