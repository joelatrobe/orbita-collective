"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CourtCard } from "../components/CourtCard";
import { OpenGameCard } from "../components/OpenGameCard";
import { spotsLeft, usePadelr } from "../store/PadelrStore";

export default function DiscoverPage() {
  const { courts, bookings, currentPlayer } = usePadelr();
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

  const openGames = useMemo(
    () =>
      bookings
        .filter(
          (b) =>
            b.status === "confirmed" &&
            b.openToJoin &&
            spotsLeft(b) > 0 &&
            b.playerName !== currentPlayer,
        )
        .sort((a, b) => a.time.localeCompare(b.time))
        .slice(0, 3),
    [bookings, currentPlayer],
  );

  const upcomingCount = bookings.filter(
    (b) =>
      b.status === "confirmed" &&
      (b.playerName === currentPlayer ||
        b.joiners.some((j) => j.name === currentPlayer)),
  ).length;

  return (
    <div>
      <section className="pt-2 md:pt-6">
        <h1 className="padelr-heading text-3xl md:text-5xl">Find your court</h1>
        <div className="mt-3 flex items-center gap-3">
          <div className="padelr-baseline-short" aria-hidden />
          <p className="text-xs uppercase tracking-[0.25em]" style={{ color: "var(--padelr-ink-soft)" }}>
            Discover
          </p>
        </div>
        <p className="mt-3 text-sm md:text-base" style={{ color: "var(--padelr-ink-soft)" }}>
          Search by city or venue, check gear, and book in seconds.
        </p>
      </section>

      <section className="mt-5">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          id="search"
          className="padelr-input"
          placeholder="Search London, Madrid, Barcelona or a club name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </section>

      {upcomingCount > 0 ? (
        <section className="mt-5">
          <Link
            href="/padelr/player/bookings"
            className="padelr-card flex items-center justify-between p-4"
          >
            <div>
              <div className="text-xs uppercase tracking-widest" style={{ color: "var(--padelr-ink-soft)" }}>
                You
              </div>
              <div className="mt-1 font-semibold">
                {upcomingCount} upcoming booking{upcomingCount === 1 ? "" : "s"}
              </div>
            </div>
            <span
              className="padelr-pill"
              style={{ background: "var(--padelr-line)", color: "var(--padelr-court-dark)", fontWeight: 600 }}
            >
              View →
            </span>
          </Link>
        </section>
      ) : null}

      {openGames.length > 0 ? (
        <section className="mt-8">
          <div className="mb-3 flex items-baseline justify-between">
            <div>
              <div className="padelr-section-head inline-block">
            <h2 className="padelr-heading text-lg md:text-xl">Open games nearby</h2>
          </div>
              <p className="text-xs" style={{ color: "var(--padelr-ink-muted)" }}>
                Jump into a group that needs players
              </p>
            </div>
            <Link
              href="/padelr/player/games"
              className="text-sm underline-offset-4 hover:underline"
              style={{ color: "var(--padelr-ink-soft)" }}
            >
              See all →
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {openGames.map((b) => {
              const court = courts.find((c) => c.id === b.courtId);
              if (!court) return null;
              return <OpenGameCard key={b.id} booking={b} court={court} compact />;
            })}
          </div>
        </section>
      ) : null}

      <section className="mt-8">
        <div className="mb-3 flex items-baseline justify-between">
          <div className="padelr-section-head inline-block">
            <h2 className="padelr-heading text-lg md:text-xl">Nearby courts</h2>
          </div>
          <span className="text-xs" style={{ color: "var(--padelr-ink-muted)" }}>
            {filtered.length} result{filtered.length === 1 ? "" : "s"}
          </span>
        </div>
        {filtered.length === 0 ? (
          <div className="padelr-card p-6 text-sm" style={{ color: "var(--padelr-ink-soft)" }}>
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
