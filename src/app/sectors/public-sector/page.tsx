import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCTA from "@/components/ServiceCTA";
import DraftGap from "@/components/DraftGap";
import { ArticleHeader, ArticleLinks, ShortAnswer, articleSchema } from "@/components/Article";
import { guides, sectorPages, SITE } from "@/lib/insights";

const page = sectorPages.find((p) => p.slug === "/sectors/public-sector")!;

const description =
  "Public sector service design consultancy. User research and service design for government and public bodies, from discovery to live, including preparing for Service Standard assessments. London based, working across the UK.";

export const metadata: Metadata = {
  title: "Public Sector Service Design Consultancy | UK",
  description,
  openGraph: {
    title: "Public sector service design consultancy | Orbita Collective",
    description,
    url: SITE + page.slug,
    siteName: "Orbita Collective",
    type: "website",
  },
  alternates: { canonical: SITE + page.slug },
};

const schema = articleSchema({
  page,
  description,
  type: "WebPage",
  crumbs: [
    { name: "Home", path: "" },
    { name: "Public sector", path: page.slug },
  ],
});

const help = [
  {
    title: "Discovery research",
    text: "Finding out who your users are, what they need and where the current service lets them down, including people who struggle with digital services or have access needs.",
  },
  {
    title: "Service design across channels",
    text: "Designing the whole service, not just the website: online, phone, paper and face to face, and the teams and processes behind them.",
  },
  {
    title: "Alpha prototyping and testing",
    text: "Testing different ways of meeting user needs with prototypes before committing to build, so you learn cheaply what works.",
  },
  {
    title: "Preparing for service assessments",
    text: "Making sure your research, design decisions and evidence are clear and complete before an alpha, beta or live assessment.",
  },
  {
    title: "Building in-house capability",
    text: "Coaching and training your teams in user research and service design, so the skills stay when we leave.",
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navigation />
      <main>
        <ArticleHeader
          crumbs={[{ label: "Home", href: "/" }, { label: "Public sector" }]}
          label="Public sector"
          title="Service design for the"
          accent="public sector."
          standfirst="Public services have to work for everyone, first time, often for people under pressure. We help government and public sector teams understand their users, design services that work end to end, and build the evidence they need at each stage of delivery."
          page={page}
        />

        <article className="px-6 pb-16">
          <div className="max-w-3xl mx-auto article-body">
            <ShortAnswer>
              <p>
                Orbita Collective is a service design and user research consultancy for
                public sector teams across the UK. We join your team as senior practitioners for
                discovery, alpha and beta, help you meet the Service Standard, and leave your people
                with the skills to carry on.
              </p>
            </ShortAnswer>

            <h2>What we help public sector teams with</h2>
            <ul>
              {help.map((h) => (
                <li key={h.title}>
                  <strong>{h.title}.</strong> {h.text}
                </li>
              ))}
            </ul>

            <h2>Working to the Service Standard</h2>
            <p>
              Central government services are expected to meet the{" "}
              <a href="https://www.gov.uk/service-manual/service-standard" rel="noopener" target="_blank">
                GOV.UK Service Standard
              </a>
              , 14 points that cover everything from understanding users to operating a reliable
              service. Other parts of the public sector, including the NHS and many councils, use
              their own standards built on similar principles.
            </p>
            <p>
              Our work maps most directly to the points about users and design:
            </p>
            <ul>
              <li>Understand users and their needs (point 1)</li>
              <li>Solve a whole problem for users (point 2)</li>
              <li>Provide a joined up experience across all channels (point 3)</li>
              <li>Make the service simple to use (point 4)</li>
              <li>Make sure everyone can use the service (point 5)</li>
            </ul>
            <p>
              We work as part of your multidisciplinary team (point 6), alongside your product,
              delivery, content and technical people, or those of your delivery partner.
            </p>

            <h2>Getting ready for a service assessment</h2>
            <p>
              Services that need one are{" "}
              <a href="https://www.gov.uk/service-manual/service-assessments" rel="noopener" target="_blank">
                assessed against the standard
              </a>{" "}
              as they move between phases: at the end of alpha, before public beta and before going
              live. Panels want to see that your decisions come from evidence about real users, that
              you&apos;ve considered the whole service and not just the digital part, and that the
              service works for people who find it hardest to use.
            </p>
            <p>We help teams get there by:</p>
            <ul>
              <li>Planning and running research that covers the full range of your users, including those with access needs.</li>
              <li>Making user needs, journeys and design decisions clear and traceable, so the panel can follow the story.</li>
              <li>Designing and testing the offline parts of the service as well as the online ones.</li>
              <li>Running a practice review before the real assessment, so there are no surprises.</li>
            </ul>
            <p>
              We can&apos;t promise an outcome, and anyone who does is overselling. What we can do is
              make sure the work behind your assessment is solid and well explained.
            </p>

            <DraftGap>
              <p className="mb-2">Two things only you can add, and both matter a lot to public sector buyers:</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>
                  <strong>Proof:</strong>{" "}any public sector projects Orbita or you and Elisa have done
                  (including before Orbita, if you can say so), even as one line each:
                  organisation type, phase, and what changed. Don&apos;t name a department without
                  their OK.
                </li>
                <li>
                  <strong>How to buy you:</strong>{" "}are you on G-Cloud or Digital Outcomes, or working
                  through a delivery partner? If you&apos;re on a framework, say so here with a link to
                  the listing. If not, getting listed is worth considering, because many buyers can
                  only shortlist suppliers on a framework.
                </li>
              </ol>
            </DraftGap>

            <h2>Why a smaller, senior team</h2>
            <p>
              Public budgets are under constant pressure, and the work still has to be good. We
              built Orbita to deliver senior-level service design without the overheads of a large
              consultancy:
            </p>
            <ul>
              <li><strong>You work with the founders.</strong> No pyramid of junior staff learning on your project.</li>
              <li><strong>Around 30% more affordable</strong> than a traditional consultancy, because we reinvented the operating model rather than the rate card.</li>
              <li><strong>Knowledge stays with you.</strong> We work alongside your team and hand over the methods, not just the outputs.</li>
              <li><strong>Usable early.</strong> Most clients have something they can use within four weeks.</li>
            </ul>
            <p>
              Our founders have worked across retail, financial services, healthcare, technology and
              the public sector, and our clients include UNICEF.
            </p>

            <h2>Common questions</h2>
            <h3>Do you work with local government and the NHS, or only central government?</h3>
            <p>
              We can work with any public body. The principles of good service design are the same
              across the public sector, and we adapt to the standard and governance your organisation
              works to.
            </p>
            <h3>Can you work alongside our existing delivery partner?</h3>
            <p>
              Yes. We can join as the specialist research and service design capability in a wider
              team, working to your delivery partner&apos;s ways of working and tools.
            </p>
            <h3>Which phases do you get involved in?</h3>
            <p>
              We&apos;re most useful in discovery and alpha, where understanding users and shaping the
              service has the biggest effect. We also support beta teams with ongoing research, and help live
              services find and fix the parts of the journey that aren&apos;t working.
            </p>
            <h3>Where are you based?</h3>
            <p>
              London, with a second base in Milan. We work across the UK, remotely and on site for
              research and workshops.
            </p>

            <h2>Related reading</h2>
            <p>
              Public services face many of the same problems as large companies, especially
              journeys that cross several teams. Our guide on{" "}
              <Link href="/insights/how-to-improve-customer-experience-in-a-large-organisation">
                improving the experience in a large organisation
              </Link>{" "}
              sets out the approach we use, and our{" "}
              <Link href="/services/service-design">service design</Link> and{" "}
              <Link href="/services/user-research">user research</Link> pages explain how we work.
            </p>
          </div>
        </article>

        <ArticleLinks page={page} others={guides} />

        <ServiceCTA
          heading="Working on a public service?"
          subtext="Tell us what phase you're in and what you need. We'll tell you honestly whether we're the right fit."
        />
      </main>
      <Footer />
    </>
  );
}
