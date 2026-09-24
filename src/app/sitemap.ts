import { MetadataRoute } from "next";
import { guides, sectorPages, SITE } from "@/lib/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.orbitacollective.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.orbitacollective.com/services/user-research",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.orbitacollective.com/services/service-design",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.orbitacollective.com/services/cx-strategy",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.orbitacollective.com/services/innovation",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE}/insights`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...[...sectorPages, ...guides].map((p) => ({
      url: SITE + p.slug,
      lastModified: new Date(p.updated ?? p.published),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: "https://www.orbitacollective.com/faq",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.orbitacollective.com/privacy-policy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://www.orbitacollective.com/cookies-policy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
