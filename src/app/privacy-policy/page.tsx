import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Orbita Collective",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-cream">
      <nav className="px-6 py-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-block">
            <img
              src="/logos/logo-dark.png"
              alt="Orbita Collective"
              className="h-6 w-auto object-contain"
            />
          </Link>
        </div>
      </nav>

      <main className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-sans font-semibold text-3xl md:text-4xl text-dark mb-2">
            Privacy Policy
          </h1>
          <p className="text-muted text-sm mb-12">
            Last updated: April 2026
          </p>

          <div className="space-y-8 text-dark/80 text-base leading-relaxed">
            <section>
              <h2 className="font-sans font-semibold text-lg text-dark mb-3">
                1. Who we are
              </h2>
              <p>
                Orbita Collective (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a design and
                customer experience consultancy. This privacy policy explains
                how we collect, use, and protect your personal data when you
                visit our website or engage with our services.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-semibold text-lg text-dark mb-3">
                2. Information we collect
              </h2>
              <p className="mb-3">We may collect the following information:</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Name and contact details (when you email us or fill in a form)</li>
                <li>Company name and role</li>
                <li>Website usage data (via analytics cookies)</li>
                <li>IP address and browser information</li>
              </ul>
            </section>

            <section>
              <h2 className="font-sans font-semibold text-lg text-dark mb-3">
                3. How we use your information
              </h2>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>To respond to enquiries and provide our services</li>
                <li>To improve our website and user experience</li>
                <li>To send relevant communications (only with your consent)</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-sans font-semibold text-lg text-dark mb-3">
                4. Data sharing
              </h2>
              <p>
                We do not sell your personal data. We may share data with
                trusted third-party service providers (e.g. email hosting,
                analytics) who process data on our behalf under strict
                confidentiality agreements.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-semibold text-lg text-dark mb-3">
                5. Data retention
              </h2>
              <p>
                We retain personal data only for as long as necessary to fulfil
                the purposes for which it was collected, or as required by law.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-semibold text-lg text-dark mb-3">
                6. Your rights
              </h2>
              <p className="mb-3">Under GDPR and applicable data protection laws, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Access the personal data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </section>

            <section>
              <h2 className="font-sans font-semibold text-lg text-dark mb-3">
                7. Contact
              </h2>
              <p>
                For any privacy-related queries, contact us at{" "}
                <a
                  href="mailto:hello@orbitacollective.com"
                  className="text-coral hover:text-coral/80 transition-colors"
                >
                  hello@orbitacollective.com
                </a>
              </p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-dark/[0.06]">
            <Link
              href="/"
              className="text-coral text-sm font-medium cursor-pointer hover:text-coral/80 transition-colors"
            >
              &larr; Back to home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
