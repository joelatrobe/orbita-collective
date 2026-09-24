import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicePages } from "@/lib/services";
import { type InsightPage, SITE } from "@/lib/insights";

const AUTHOR = { name: "Joe La Trobe", role: "Co-Founder, Design & Innovation" };

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

interface Crumb {
  label: string;
  href?: string;
}

export function ArticleHeader({
  crumbs,
  label,
  title,
  accent,
  standfirst,
  page,
}: {
  crumbs: Crumb[];
  label: string;
  /** H1 text before the italic accent */
  title: string;
  accent?: string;
  standfirst: string;
  page: InsightPage;
}) {
  return (
    <section className="px-6 pt-40 pb-12">
      <div className="max-w-3xl mx-auto">
        <nav className="flex flex-wrap items-center gap-2 text-xs text-dark/40 mb-10" aria-label="Breadcrumb">
          {crumbs.map((c, i) => (
            <span key={c.label} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {c.href ? (
                <Link href={c.href} className="cursor-pointer hover:text-coral transition-colors">
                  {c.label}
                </Link>
              ) : (
                <span className="text-dark/60">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <p className="text-coral text-sm font-medium tracking-widest uppercase mb-4">{label}</p>
        <h1 className="font-sans font-semibold text-4xl md:text-5xl text-dark leading-[1.1] tracking-tight">
          {title}
          {accent && (
            <>
              {" "}
              <span className="font-serif italic font-normal">{accent}</span>
            </>
          )}
        </h1>
        <p className="mt-6 text-dark/70 text-lg leading-relaxed">{standfirst}</p>
        <p className="mt-8 text-xs text-dark/50">
          By {AUTHOR.name}, {AUTHOR.role} ·{" "}
          <time dateTime={page.updated ?? page.published}>
            {page.updated ? "Updated" : "Published"} {formatDate(page.updated ?? page.published)}
          </time>
        </p>
      </div>
    </section>
  );
}

/** "The short answer" box: the part AI answers and skimmers lift. */
export function ShortAnswer({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl bg-blue-accent/15 border-l-4 border-l-navy/50 p-6 md:p-8">
      <p className="text-navy text-xs font-semibold tracking-widest uppercase mb-3">The short answer</p>
      <div className="text-dark/80 text-base leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_li+li]:mt-1.5">
        {children}
      </div>
    </div>
  );
}

/** Links out to the supporting service and to other guides. */
export function ArticleLinks({ page, others }: { page: InsightPage; others: InsightPage[] }) {
  const service = servicePages.find((s) => s.slug === page.service);
  const cards = [
    ...(service ? [{ href: service.slug, kicker: "Our service", title: service.anchor, text: service.summary }] : []),
    ...others.map((o) => ({ href: o.slug, kicker: "Guide", title: o.title, text: o.summary })),
  ];
  if (cards.length === 0) return null;
  return (
    <section className="px-6 pb-20">
      <div className="max-w-3xl mx-auto border-t border-dark/10 pt-10">
        <h2 className="text-dark/50 text-xs font-medium tracking-widest uppercase mb-6">Read next</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {cards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group block rounded-2xl border border-dark/10 p-5 transition-colors duration-200 hover:border-coral/50"
            >
              <p className="text-coral text-[11px] font-medium tracking-widest uppercase mb-2">{c.kicker}</p>
              <h3 className="font-sans font-medium text-sm text-dark mb-2">{c.title}</h3>
              <p className="text-dark/55 text-xs leading-relaxed mb-3">{c.text}</p>
              <span className="inline-flex items-center gap-1.5 text-coral text-xs font-medium">
                Read more
                <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Article + breadcrumb structured data for a guide or sector page. */
export function articleSchema({
  page,
  description,
  crumbs,
  type = "Article",
}: {
  page: InsightPage;
  description: string;
  crumbs: { name: string; path: string }[];
  type?: "Article" | "WebPage";
}) {
  const url = SITE + page.slug;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        "@id": `${url}#page`,
        headline: page.title,
        name: page.title,
        description,
        url,
        mainEntityOfPage: url,
        datePublished: page.published,
        dateModified: page.updated ?? page.published,
        inLanguage: "en-GB",
        author: {
          "@type": "Person",
          name: AUTHOR.name,
          jobTitle: AUTHOR.role,
          worksFor: { "@id": `${SITE}/#organization` },
        },
        publisher: { "@id": `${SITE}/#organization` },
        about: { "@id": `${SITE}/#service` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.name,
          item: SITE + c.path,
        })),
      },
    ],
  };
}
