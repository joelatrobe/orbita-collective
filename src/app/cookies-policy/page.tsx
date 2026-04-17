import Link from "next/link";

export const metadata = {
  title: "Cookies Policy | Orbita Collective",
};

export default function CookiesPolicy() {
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
            Cookies Policy
          </h1>
          <p className="text-muted text-sm mb-12">
            Last updated: April 2026
          </p>

          <div className="space-y-8 text-dark/80 text-base leading-relaxed">
            <section>
              <h2 className="font-sans font-semibold text-lg text-dark mb-3">
                1. What are cookies?
              </h2>
              <p>
                Cookies are small text files stored on your device when you
                visit a website. They help the site remember your preferences
                and understand how you interact with it.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-semibold text-lg text-dark mb-3">
                2. How we use cookies
              </h2>
              <p className="mb-3">We use the following types of cookies:</p>
              <ul className="space-y-3 text-sm">
                <li>
                  <strong className="text-dark">Essential cookies</strong> —
                  Required for the website to function. These cannot be
                  disabled.
                </li>
                <li>
                  <strong className="text-dark">Analytics cookies</strong> —
                  Help us understand how visitors use our site so we can improve
                  it. Data is anonymised.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-sans font-semibold text-lg text-dark mb-3">
                3. Managing cookies
              </h2>
              <p>
                You can control cookies through your browser settings. Most
                browsers allow you to block or delete cookies. Note that
                blocking essential cookies may affect site functionality.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-semibold text-lg text-dark mb-3">
                4. Third-party cookies
              </h2>
              <p>
                We may use third-party analytics services (such as Google
                Analytics) that set their own cookies. These are governed by
                their respective privacy policies.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-semibold text-lg text-dark mb-3">
                5. Contact
              </h2>
              <p>
                Questions about our use of cookies? Contact us at{" "}
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
