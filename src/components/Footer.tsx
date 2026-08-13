"use client";

import Link from "next/link";
import { servicePages, RESPONSE_PROMISE } from "@/lib/services";

const siteLinks = [
  { label: "Services", href: "/#services" },
  { label: "How We Work", href: "/#how-we-work" },
  { label: "About", href: "/#about" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] mb-10">
          <div>
            <img
              src="/logos/logo-light.gif"
              alt="Orbita Collective"
              width={3840}
              height={2160}
              loading="lazy"
              className="h-24 w-auto object-contain -ml-2"
            />
            <p className="text-cream/40 text-xs mt-2 max-w-xs leading-relaxed">
              Service design, CX strategy and innovation consultancy. London
              &amp; Milan. {RESPONSE_PROMISE}
            </p>
          </div>

          <nav aria-label="Services">
            <h2 className="text-cream/70 text-xs font-medium tracking-widest uppercase mb-4">
              Services
            </h2>
            <ul className="space-y-2.5">
              {servicePages.map((page) => (
                <li key={page.slug}>
                  <Link
                    href={page.slug}
                    className="text-cream/40 text-xs cursor-pointer hover:text-cream/70 transition-colors"
                  >
                    {page.anchor}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Site">
            <h2 className="text-cream/70 text-xs font-medium tracking-widest uppercase mb-4">
              Orbita
            </h2>
            <ul className="space-y-2.5">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/40 text-xs cursor-pointer hover:text-cream/70 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-cream/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-xs">
            &copy; {new Date().getFullYear()} Orbita Collective
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-cream/30 text-xs cursor-pointer hover:text-cream/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookies-policy"
              className="text-cream/30 text-xs cursor-pointer hover:text-cream/60 transition-colors"
            >
              Cookies Policy
            </Link>
            {/* Corroborates the sameAs entry in the Organization schema. */}
            <a
              href="https://www.linkedin.com/company/orbita-collective/"
              target="_blank"
              rel="noopener noreferrer me"
              className="text-cream/30 text-xs cursor-pointer hover:text-cream/60 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
