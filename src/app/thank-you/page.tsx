import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { servicePages, RESPONSE_PROMISE } from "@/lib/services";

export const metadata: Metadata = {
  title: "Thank you",
  description:
    "Thanks for getting in touch with Orbita Collective. We reply within one working day.",
  // Confirmation pages should never appear in search results.
  robots: { index: false, follow: true },
};

export default function ThankYou() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen flex items-center px-6 pt-40 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="w-3 h-3 rounded-full bg-coral" aria-hidden="true" />
            <p className="text-coral text-sm font-medium tracking-widest uppercase">
              You&apos;re all set
            </p>
          </div>

          <h1 className="font-sans font-semibold text-4xl md:text-6xl text-dark leading-[1.1] tracking-tight">
            Thanks for getting
            <br />
            <span className="font-serif italic font-normal">in touch.</span>
          </h1>

          <p className="mt-8 text-lg text-muted max-w-xl mx-auto font-light leading-relaxed">
            Your scheduling page has opened in a new tab. Pick a time and
            we&apos;ll take it from there. {RESPONSE_PROMISE}
          </p>

          <div className="mt-10 rounded-3xl border border-dark/[0.07] p-8 text-left max-w-xl mx-auto">
            <h2 className="font-sans font-semibold text-lg text-dark mb-4">
              What happens next
            </h2>
            <ol className="space-y-3 text-muted text-sm leading-relaxed">
              <li className="flex gap-3">
                <span className="text-coral font-medium shrink-0">1.</span>
                We read what you sent and come back to you within one working
                day.
              </li>
              <li className="flex gap-3">
                <span className="text-coral font-medium shrink-0">2.</span>
                A 30 minute conversation about the problem you&apos;re trying to
                solve. No pitch deck.
              </li>
              <li className="flex gap-3">
                <span className="text-coral font-medium shrink-0">3.</span>
                If it&apos;s a fit, we scope the work and give you a clear price
                and timeline. Typically four weeks to first results.
              </li>
            </ol>
          </div>

          <p className="mt-12 text-muted text-sm">
            While you wait, have a read of what we do:
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
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

          <div className="mt-10">
            <Link
              href="/"
              className="bg-dark text-cream px-8 py-3.5 rounded-full text-sm font-medium cursor-pointer hover:bg-dark/90 transition-colors duration-200 inline-block"
            >
              Back to the homepage
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
