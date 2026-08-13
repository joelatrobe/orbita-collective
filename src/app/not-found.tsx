import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { servicePages } from "@/lib/services";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen flex items-center px-6 pt-40 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="w-3 h-3 rounded-full bg-coral" aria-hidden="true" />
            <p className="text-coral text-sm font-medium tracking-widest uppercase">
              404
            </p>
          </div>

          <h1 className="font-sans font-semibold text-4xl md:text-6xl text-dark leading-[1.1] tracking-tight">
            This page has drifted
            <br />
            <span className="font-serif italic font-normal">out of orbit.</span>
          </h1>

          <p className="mt-8 text-lg text-muted max-w-xl mx-auto font-light leading-relaxed">
            The page you were after has moved or never existed. Here is
            everything worth reading instead.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 gap-3 text-left">
            {servicePages.map((page) => (
              <Link
                key={page.slug}
                href={page.slug}
                className="group hover-lift rounded-2xl border border-dark/[0.07] p-5 transition-colors duration-200 hover:border-coral/40 hover:bg-dark/[0.02]"
              >
                <h2 className="font-sans font-medium text-sm text-dark mb-1.5">
                  {page.anchor}
                </h2>
                <p className="text-muted text-xs leading-relaxed">
                  {page.summary}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="bg-dark text-cream px-8 py-3.5 rounded-full text-sm font-medium cursor-pointer hover:bg-dark/90 transition-colors duration-200"
            >
              Back to the homepage
            </Link>
            <Link
              href="/#contact"
              className="border border-dark/20 text-dark px-8 py-3.5 rounded-full text-sm font-medium cursor-pointer hover:border-dark/40 transition-colors duration-200"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
