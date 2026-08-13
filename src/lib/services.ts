/**
 * Single source of truth for the four service pages.
 *
 * These pages carry the site's keyword targeting, FAQ schema and breadcrumbs,
 * so every surface that can link to them (nav, footer, homepage, sibling
 * service pages) pulls from here rather than hard-coding hrefs.
 */

export interface ServicePage {
  slug: string;
  /** Short label for nav and footer */
  label: string;
  /** Keyword-rich anchor text for in-content links */
  anchor: string;
  /** One-line summary for card links */
  summary: string;
}

export const servicePages: ServicePage[] = [
  {
    slug: "/services/user-research",
    label: "User Research",
    anchor: "User research & customer insights",
    summary:
      "Qualitative and quantitative research that uncovers what customers actually do, think and need.",
  },
  {
    slug: "/services/service-design",
    label: "Service Design",
    anchor: "Service & experience design",
    summary:
      "End-to-end design that closes the gap between the experience you intend and the one customers get.",
  },
  {
    slug: "/services/cx-strategy",
    label: "CX Strategy",
    anchor: "Customer experience strategy",
    summary:
      "CX strategy built with your teams, grounded in real insight and designed to be implemented.",
  },
  {
    slug: "/services/innovation",
    label: "Innovation",
    anchor: "Innovation consultancy",
    summary:
      "A structured process that starts with real customer problems and ends with ideas you have tested.",
  },
];

/** The other three pages, for cross-linking from a service page. */
export function relatedServices(currentSlug: string): ServicePage[] {
  return servicePages.filter((s) => s.slug !== currentSlug);
}

/**
 * Maps homepage service cards to their detailed page where one exists.
 * Keyed by the card label in `Services.tsx`.
 */
export const serviceCardLinks: Record<string, string> = {
  "Research & Customer Insights": "/services/user-research",
  "Service & Experience Design": "/services/service-design",
  "Product Exploration": "/services/innovation",
  "Concept Testing & Validation": "/services/innovation",
  "Customer Engagement Strategy": "/services/cx-strategy",
  "User-informed Service Strategy": "/services/cx-strategy",
};

/** How quickly we promise to come back to an enquiry. Used across CTAs. */
export const RESPONSE_PROMISE = "We reply within one working day.";
