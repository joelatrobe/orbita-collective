/**
 * Guides and sector pages that sit alongside the four service pages.
 *
 * Each one exists to win a search from targets.json in the SEO hub and route
 * that reader to a discovery call. The sitemap, the /insights index, the
 * footer and the "further reading" links on service pages all read from here,
 * so a new page only needs registering once.
 */

export interface InsightPage {
  slug: string;
  title: string;
  /** One or two sentences for cards and the index page */
  summary: string;
  /** The service page this guide supports and links to */
  service: string;
  /** ISO date. Set to the real publish date when the page goes live. */
  published: string;
  updated?: string;
}

export const guides: InsightPage[] = [
  {
    slug: "/insights/why-customer-experience-programmes-fail",
    title: "Why customer experience programmes fail",
    summary:
      "Seven reasons CX programmes stall in large organisations, what the ones that work do differently, and a health check you can run on your own.",
    service: "/services/cx-strategy",
    published: "2026-09-24",
  },
  {
    slug: "/insights/how-to-improve-customer-experience-in-a-large-organisation",
    title: "How to improve customer experience in a large organisation",
    summary:
      "A practical, eight-step approach for improving customer experience when the journey crosses many teams, systems and budgets.",
    service: "/services/service-design",
    published: "2026-09-24",
  },
];

export const sectorPages: InsightPage[] = [
  {
    slug: "/sectors/public-sector",
    title: "Service design for the public sector",
    summary:
      "User research and service design for government and public sector teams, from discovery to live, in line with the Service Standard.",
    service: "/services/service-design",
    published: "2026-09-24",
  },
];

/** Guides that support a given service page, for its "further reading" links. */
export function guidesForService(serviceSlug: string): InsightPage[] {
  return guides.filter((g) => g.service === serviceSlug);
}

/** Every other guide, for the end of an article. */
export function otherGuides(currentSlug: string): InsightPage[] {
  return guides.filter((g) => g.slug !== currentSlug);
}

export const SITE = "https://www.orbitacollective.com";
