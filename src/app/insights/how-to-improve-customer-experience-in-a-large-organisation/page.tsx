import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCTA from "@/components/ServiceCTA";
import DraftGap from "@/components/DraftGap";
import { ArticleHeader, ArticleLinks, ShortAnswer, articleSchema } from "@/components/Article";
import { guides, otherGuides, SITE } from "@/lib/insights";

const page = guides.find(
  (g) => g.slug === "/insights/how-to-improve-customer-experience-in-a-large-organisation",
)!;

const description =
  "A practical eight-step approach to improving customer experience in a large organisation: choose the journeys that matter, find the root causes, give each journey an owner, test, measure and build it into how you work.";

export const metadata: Metadata = {
  title: "How to Improve Customer Experience in a Large Organisation",
  description,
  openGraph: {
    title: "How to improve customer experience in a large organisation | Orbita Collective",
    description,
    url: SITE + page.slug,
    siteName: "Orbita Collective",
    type: "article",
    publishedTime: page.published,
  },
  alternates: { canonical: SITE + page.slug },
};

const schema = articleSchema({
  page,
  description,
  crumbs: [
    { name: "Home", path: "" },
    { name: "Insights", path: "/insights" },
    { name: page.title, path: page.slug },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navigation />
      <main>
        <ArticleHeader
          crumbs={[{ label: "Home", href: "/" }, { label: "Insights", href: "/insights" }, { label: "Improving CX at scale" }]}
          label="Customer experience"
          title="How to improve customer experience in a"
          accent="large organisation."
          standfirst="In a large organisation, the customer's journey crosses teams, systems and budgets that were never designed to work together. Improving it is less about new ideas and more about ownership, evidence and focus. Here's the approach we use."
          page={page}
        />

        <article className="px-6 pb-16">
          <div className="max-w-3xl mx-auto article-body">
            <ShortAnswer>
              <p>
                Pick a small number of journeys that matter to customers and to the business.
                Understand them end to end with real evidence. Fix the root causes, which usually sit
                in handoffs, policies and systems rather than in the customer-facing screen or script.
                Give each journey a cross-functional owner, test changes small before rolling them
                out, and measure the result in numbers leadership already tracks.
              </p>
              <p>Then build the habit into how the organisation runs, so it doesn&apos;t depend on one programme or one sponsor.</p>
            </ShortAnswer>

            <h2>Step 1: Choose the journeys that matter</h2>
            <p>
              &quot;Improve the customer experience&quot; is too big to act on. Start by listing the
              main things customers come to you to do: join, buy, get help, change something, complain,
              leave. Then choose two or three to work on first, using four questions:
            </p>
            <ul>
              <li><strong>Volume:</strong> how many customers go through it?</li>
              <li><strong>Value:</strong> how much revenue, retention or cost is tied to it?</li>
              <li><strong>Pain:</strong> where do complaints, repeat contacts and drop-offs cluster?</li>
              <li><strong>Strategy:</strong> which journeys matter most to where the organisation is heading?</li>
            </ul>
            <p>
              Journeys that score high on all four are where improvement pays back fastest and where
              leadership will notice.
            </p>

            <h2>Step 2: See the journey the way the customer does</h2>
            <p>
              Internal data tells you what happened. It rarely tells you why. Before redesigning
              anything, build a shared, evidence-based picture of the journey:
            </p>
            <ul>
              <li>Interview and observe customers, including those who gave up or complained.</li>
              <li>Listen to contact centre calls and read complaints and reviews.</li>
              <li>Go through the journey yourself, on every channel a customer might use.</li>
              <li>Spend time with frontline staff. They see the workarounds and failures every day.</li>
            </ul>
            <p>
              Map what the customer sees alongside what happens behind the scenes: the teams, systems,
              policies and handoffs that produce each step. This is often called a service blueprint,
              and it&apos;s where most of the answers are. Our{" "}
              <Link href="/services/user-research">user research</Link> and{" "}
              <Link href="/services/service-design">service design</Link> work usually starts here.
            </p>

            <h2>Step 3: Find the root causes, not just the symptoms</h2>
            <p>
              A confusing letter, a long wait or a form that asks for the same information twice is a
              symptom. The cause is usually one of these:
            </p>
            <ul>
              <li>A handoff between two teams where nobody owns the gap.</li>
              <li>A policy written for an edge case that now applies to everyone.</li>
              <li>Systems that don&apos;t share data, so customers have to repeat themselves.</li>
              <li>Targets that reward a team for something that makes the journey worse, such as call length.</li>
            </ul>
            <p>
              Fixing the symptom makes a journey slightly better. Fixing the cause stops the same
              problem showing up somewhere else.
            </p>

            <h2>Step 4: Give each journey an owner</h2>
            <p>
              In most large organisations, everyone owns a piece of the experience and nobody owns the
              whole thing. Name one person accountable for each priority journey from start to finish,
              with enough seniority to bring the relevant teams together. Support them with a small
              cross-functional group from the teams the journey touches, and give that group time to
              work on it, not just a monthly meeting.
            </p>

            <h2>Step 5: Prioritise a mix of quick wins and structural fixes</h2>
            <p>
              Score the improvements you&apos;ve found by impact on customers and the business against
              effort and risk. Then deliberately pick a mix. Quick wins, like rewriting a letter,
              removing a step or changing a script, show progress within weeks. Structural fixes, like
              changing a policy, joining up data or redesigning a handoff, take longer but deliver most
              of the value. A plan made only of quick wins runs out of road. One made only of
              structural fixes loses support before it lands.
            </p>

            <h2>Step 6: Test changes small before rolling them out</h2>
            <p>
              Large organisations are rightly cautious about change at scale. Use that caution rather
              than fighting it. Prototype the new journey and test it with real customers, then pilot
              it in one region, branch, product or customer segment. Compare the results with
              where it hasn&apos;t changed. A tested change with evidence behind it is much easier to get
              approved than a recommendation in a report.
            </p>

            <h2>Step 7: Measure what changed</h2>
            <p>
              Track each journey with a few measures that reflect the customer&apos;s experience,
              such as completion, time taken, repeat contact and effort, alongside the business
              measure it affects, such as retention, cost to serve or conversion. Keep listening to
              customers too. Numbers show that something changed, and customers explain why.
            </p>

            <h2>Step 8: Make it how you work, not a programme</h2>
            <p>
              Improvements fade when they depend on one programme, one team or outside consultants.
              Build the capability in-house: train teams in research and service design methods, give
              them shared tools and templates, and build the journey reviews into planning and
              performance cycles. The aim is an organisation that keeps improving its customer
              experience without being told to.
            </p>

            <h2>What makes large organisations different</h2>
            <p>
              The steps are the same for any organisation. What changes at scale is the friction:
            </p>
            <ul>
              <li><strong>More handoffs.</strong> Journeys cross more teams, so ownership matters more.</li>
              <li><strong>Legacy systems.</strong> Some fixes need workarounds in process or policy while technology catches up.</li>
              <li><strong>Governance and regulation.</strong> Involve risk, legal and compliance early, as designers of the solution rather than approvers at the end.</li>
              <li><strong>Competing priorities.</strong> Tie every change to a business measure so it can compete for budget.</li>
              <li><strong>Distance from customers.</strong> Senior people rarely hear from customers directly. Bring them the evidence: recordings, quotes, and time spent with frontline teams.</li>
            </ul>

            <h2>How long does it take?</h2>
            <p>
              For a focused journey, you should see the first measurable improvements within a few
              months, and have a clear, evidence-based picture of the problem within weeks. We
              usually get clients to something usable within four weeks. Changing how a whole
              organisation manages its customer experience takes years, which is why it pays to
              start with journeys that show results early.
            </p>

            <DraftGap>
              Add a short worked example: one journey you improved for a large organisation (it can
              be anonymised, e.g. &quot;a UK insurer&quot;), what you found in research, the root
              cause, what changed and what it did to a business number. Only use a client name if
              they&apos;ve agreed to it. This is what will make the page stand out from generic
              advice.
            </DraftGap>

            <h2>Common mistakes to avoid</h2>
            <p>
              Most failed attempts make the same few mistakes: no end-to-end owner, no link to a
              business measure, and trying to fix everything at once. We cover these in{" "}
              <Link href="/insights/why-customer-experience-programmes-fail">
                why customer experience programmes fail
              </Link>
              , along with a quick health check for your own programme.
            </p>
          </div>
        </article>

        <ArticleLinks page={page} others={otherGuides(page.slug)} />

        <ServiceCTA
          heading="Want help with one journey?"
          subtext="Tell us which part of your customer experience hurts most. We'll tell you how we'd approach it and what you could have within four weeks."
        />
      </main>
      <Footer />
    </>
  );
}
