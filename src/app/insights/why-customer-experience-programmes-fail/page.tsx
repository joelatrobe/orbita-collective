import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCTA from "@/components/ServiceCTA";
import DraftGap from "@/components/DraftGap";
import { ArticleHeader, ArticleLinks, ShortAnswer, articleSchema } from "@/components/Article";
import { guides, otherGuides, SITE } from "@/lib/insights";

const page = guides.find((g) => g.slug === "/insights/why-customer-experience-programmes-fail")!;

const description =
  "Why customer experience programmes stall in large organisations: no end-to-end owner, no link to business numbers, trying to fix everything at once. What the programmes that work do differently.";

export const metadata: Metadata = {
  title: "Why Customer Experience Programmes Fail",
  description,
  openGraph: {
    title: "Why customer experience programmes fail | Orbita Collective",
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
          crumbs={[{ label: "Home", href: "/" }, { label: "Insights", href: "/insights" }, { label: "CX programmes" }]}
          label="Customer experience"
          title="Why customer experience programmes"
          accent="fail."
          standfirst="Most CX programmes don't fail because the ideas are wrong. They stall because nobody owns the whole journey, the work isn't tied to a number the business cares about, and the strategy was written for a steering group rather than for the people who run the service."
          page={page}
        />

        <article className="px-6 pb-16">
          <div className="max-w-3xl mx-auto article-body">
            <ShortAnswer>
              <p>Customer experience programmes in large organisations usually fail for a handful of predictable reasons:</p>
              <ul>
                <li>One team owns the programme, but the experience crosses ten.</li>
                <li>It starts from a framework instead of evidence from real customers.</li>
                <li>It isn&apos;t linked to a business measure the leadership already tracks.</li>
                <li>It tries to improve everything at once, so nothing visibly changes.</li>
                <li>The strategy is written for leadership, not for the people who deliver it.</li>
                <li>Feedback is collected but never turned into decisions.</li>
                <li>It loses its sponsor before it shows results.</li>
              </ul>
              <p>The programmes that work pick a few journeys, give each one a cross-functional owner, and show a measurable change within months, not years.</p>
            </ShortAnswer>

            <h2>1. One team owns the programme, but the experience crosses ten</h2>
            <p>
              A customer who switches energy supplier, claims on an insurance policy or applies for a
              benefit doesn&apos;t experience your org chart. They experience one journey that passes
              through marketing, sales, operations, billing, IT, the contact centre and sometimes a
              third party. Each of those teams owns a piece. Nobody owns the whole thing.
            </p>
            <p>
              When a CX programme sits inside one of those teams, usually marketing or a small central
              CX function, it can describe the problems but can&apos;t change most of them. The
              causes sit in other people&apos;s processes, systems and targets.
            </p>
            <p>
              <strong>What works:</strong> give each priority journey a named owner with enough
              seniority to convene the teams it crosses, and a small cross-functional group that meets
              regularly to fix it. The CX team becomes the support for those owners rather than the
              only people responsible.
            </p>

            <h2>2. It starts with a framework, not with customers</h2>
            <p>
              Many programmes open with a maturity model, a set of experience principles and a persona
              template. None of these is wrong, but on their own they describe what good looks like in
              general, not what is going wrong for your customers in particular.
            </p>
            <p>
              <strong>What works:</strong> start with evidence. Talk to customers, listen to calls,
              read complaints, walk the journey yourself, and spend time with the frontline staff who
              handle the failures every day. A few weeks of focused{" "}
              <Link href="/services/user-research">user research</Link> on the journeys that matter
              usually tells you more than a year of dashboards, and it gives you the stories that make
              leadership act.
            </p>

            <h2>3. It isn&apos;t tied to a number the business cares about</h2>
            <p>
              If the only measure of success is a satisfaction score, the programme will struggle the
              first time budgets tighten. Scores such as NPS or CSAT are useful signals, but few boards
              make investment decisions on them alone.
            </p>
            <p>
              <strong>What works:</strong> connect each journey to a measure leadership already
              watches. That might be retention, cost to serve, repeat contact, complaint volumes,
              conversion or time to resolve. Then show how the customer&apos;s problem drives that
              number. &quot;Customers call back three times because the first letter is unclear&quot;
              is a cost-to-serve problem as much as an experience one.
            </p>

            <h2>4. It tries to improve everything at once</h2>
            <p>
              A programme that maps every journey, runs research across every segment and writes a
              strategy covering every channel can take a year before anything changes for a customer.
              By then, attention has moved on.
            </p>
            <p>
              <strong>What works:</strong> choose two or three journeys where the pain for customers
              and the cost to the business are both high. Fix those visibly, share what changed, then
              expand. Early, concrete results buy the credibility to take on the harder structural work.
            </p>

            <h2>5. The strategy is written for the steering group, not the people who deliver it</h2>
            <p>
              A strategy that lives in a board deck rarely changes what a contact centre adviser, a
              product manager or a branch team does next week. If they didn&apos;t help shape it,
              they&apos;re unlikely to own it.
            </p>
            <p>
              <strong>What works:</strong> build the strategy with the teams who&apos;ll implement it,
              test it against their real constraints before it&apos;s signed off, and translate it into
              specific decisions and behaviours for each team. That&apos;s the approach we take in our{" "}
              <Link href="/services/cx-strategy">customer experience strategy</Link> work.
            </p>

            <h2>6. Feedback is collected but never turned into decisions</h2>
            <p>
              Many organisations run surveys, collect reviews and track complaints, then report the
              results in a monthly pack. Unless someone is responsible for acting on what it says, the
              feedback becomes wallpaper and customers notice that nothing changes.
            </p>
            <p>
              <strong>What works:</strong> a simple routine that turns feedback into action. Review it
              by journey, agree what you&apos;ll change, name who owns each change, and tell customers
              and staff what you did. Closing the loop matters as much as collecting the data.
            </p>

            <h2>7. It loses its sponsor before it shows results</h2>
            <p>
              Senior sponsors move on, priorities shift, and a programme that hasn&apos;t shown
              results yet is easy to pause. It then quietly becomes &quot;the CX team&apos;s
              thing&quot; with no authority behind it.
            </p>
            <p>
              <strong>What works:</strong> make results visible early and in the business&apos;s own
              language, and build the work into the normal rhythm of the organisation: planning
              cycles, budgets, performance objectives and governance. A programme that is part of how
              the organisation already runs survives a change of sponsor.
            </p>

            <DraftGap>
              Add one real example here, anonymised if you need to: a programme you were brought
              into after it had stalled, which of these seven reasons applied, and what changed once
              it was fixed. A first-hand example is the single thing that will most help this page
              rank and get cited by AI tools. Two or three short paragraphs is enough.
            </DraftGap>

            <h2>A quick health check for your own programme</h2>
            <p>If you run or sponsor a CX programme, these questions will tell you where it&apos;s at risk:</p>
            <ol>
              <li>Can you name the owner of each of your most important customer journeys, end to end?</li>
              <li>Is your programme&apos;s success measured in a number your leadership already tracks?</li>
              <li>When did the programme last change something a customer would notice?</li>
              <li>Did the teams who deliver the service help write the strategy?</li>
              <li>Who decides what happens with customer feedback each month, and what did they decide last time?</li>
              <li>If your sponsor left tomorrow, would the work carry on?</li>
            </ol>
            <p>
              Two or more uncomfortable answers is common, and fixable. It usually means narrowing the
              focus, reconnecting the work to the business case and giving journeys real owners.
            </p>

            <h2>Where to start</h2>
            <p>
              If your programme has stalled, don&apos;t start again from scratch. Pick the journey
              that hurts most, get clear evidence of what customers go through, and fix it with the
              teams involved. Our guide on{" "}
              <Link href="/insights/how-to-improve-customer-experience-in-a-large-organisation">
                how to improve customer experience in a large organisation
              </Link>{" "}
              sets out the steps.
            </p>
            <p>
              If you&apos;d like an outside view, we work with CX and service leaders to reset
              programmes like this. We usually have something usable within four weeks, and we build
              it with your teams so it keeps going after we leave.
            </p>
          </div>
        </article>

        <ArticleLinks page={page} others={otherGuides(page.slug)} />

        <ServiceCTA
          heading="Is your CX programme stuck?"
          subtext="Tell us where it has stalled. We'll give you an honest view of what's holding it back and whether we can help."
        />
      </main>
      <Footer />
    </>
  );
}
