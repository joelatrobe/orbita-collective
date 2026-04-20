"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CourtCard } from "../components/CourtCard";
import { usePadelr } from "../store/PadelrStore";

export default function DiscoverPage() {
  const { courts, bookings } = usePadelr();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return courts;
    return courts.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.city.toLowerCase().includes(q) ||
        c.address.toLowerCase().includes(q),
    );
  }, [courts, query]);

  const upcomingCount = bookings.filter((b) => b.status === "confirmed").length;

  return (
    <div>
      <section className="pt-2 md:pt-6">
        <h1 className="padelr-heading text-3xl md:text-5xl">Find your court</h1>
        <p className="mt-2 text-sm md:text-base" style={{ color: "var(--padelr-muted)" }}>
          Search by city or venue, check gear, and book in seconds.
        </p>
      </section>

      <section className="mt-5">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <input
            id="search"
            className="padelr-input"
            placeholder="Search London, Madrid, Barcelona or a club name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </section>

      {upcomingCount > 0 ? (
        <section className="mt-5">
          <Link
            href="/padelr/player/bookings"
            className="padelr-card flex items-center justify-between p-4"
          >
            <div>
              <div className="text-xs uppercase tracking-widest" style={{ color: "var(--padelr-lime)" }}>
                You
              </div>
              <div className="mt-1 font-semibold">
                {upcomingCount} upcoming booking{upcomingCount === 1 ? "" : "s"}
              </div>
            </div>
            <span className="padelr-pill" style={{ background: "var(--padelr-lime)", color: "var(--padelr-navy)" }}>
              View →
            </span>
          </Link>
        </section>
      ) : null}

      <section className="mt-7">
        <div className="mb-3 flex items-baseline justify-between">
          <h2 className="padelr-heading text-lg md:text-xl">Nearby courts</h2>
          <span className="text-xs" style={{ color: "var(--padelr-muted)" }}>
            {filtered.length} result{filtered.length === 1 ? "" : "s"}
          </span>
        </div>
        {filtered.length === 0 ? (
          <div className="padelr-card p-6 text-sm" style={{ color: "var(--padelr-muted)" }}>
            No courts matched &ldquo;{query}&rdquo;. Try a different city.
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c) => (
              <CourtCard key={c.id} court={c} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
