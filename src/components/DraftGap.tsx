/**
 * A note for Joe inside a drafted page: a place where real experience (a
 * client example, a framework listing, a named project) would make the page
 * stronger, and which only he can supply.
 *
 * Visible locally and on Vercel preview deployments so it can't be missed in
 * review. Renders nothing on production, so a page published with a gap still
 * reads cleanly: the copy around each gap is written to stand without it.
 */
export default function DraftGap({ children }: { children: React.ReactNode }) {
  if (process.env.VERCEL_ENV === "production") return null;
  return (
    <aside className="my-8 rounded-2xl border-2 border-dashed border-coral/60 bg-coral/10 p-5 text-sm leading-relaxed text-dark/80">
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-coral">
        Draft note for Joe (hidden on the live site)
      </p>
      {children}
    </aside>
  );
}
