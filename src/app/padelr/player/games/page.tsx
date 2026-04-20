"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { OpenGameCard } from "../../components/OpenGameCard";
import { spotsLeft, usePadelr } from "../../store/PadelrStore";

export default function GamesPage() {
  const { bookings, courts, currentPlayer } = usePadelr();
  const [tab, setTab] = useState<"open" | "joined">("open");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return bookings
      .filter((b) => b.status === "confirmed" && b.openToJoin && spotsLeft(b) > 0)
      .filter((b) => b.playerName !== currentPlayer)
      .filter((b) => {
        if (!q) return true;
        const court = courts.find((c) => c.id === b.courtId);
        if (!court) return false;
        return (
          court.name.toLowerCase().includes(q) ||
          court.city.toLowerCase().includes(q) ||
          b.time.includes(q)
        );
      })
      .sort((a, b) => a.time.localeCompare(b.time));
  }, [bookings, courts, query, currentPlayer]);

  const joined = useMemo(
    () =>
      bookings.filter(
        (b) =>
          b.status === "confirmed" &&
          b.joiners.some((j) => j.name === currentPlayer),
      ),
    [bookings, currentPlayer],
  );

  return (
    <div>
      <div className="flex items-baseline justify-between">
        <div>
          <h1 className="padelr-heading text-3xl md:text-4xl">Open games</h1>
          <p className="mt-1 text-sm" style={{ color: "var(--padelr-ink-soft)" }}>
            Find a group that needs a 3rd or 4th. Tap to jump in.
          </p>
        </div>
      </div>

      <div className="mt-5 flex gap-2">
        {(["open", "joined"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="padelr-pill"
            style={{
              background: tab === t ? "var(--padelr-line)" : "rgba(255,255,255,0.08)",
              color: tab === t ? "var(--padelr-court-dark)" : "var(--padelr-ink)",
              fontWeight: tab === t ? 600 : 500,
              cursor: "pointer",
              textTransform: "capitalize",
              padding: "8px 16px",
              fontSize: 13,
            }}
          >
            {t === "open" ? `Open (${visible.length})` : `Joined (${joined.length})`}
          </button>
        ))}
      </div>

      {tab === "open" ? (
        <>
          <div className="mt-4">
            <input
              className="padelr-input"
              placeholder="Search by court, city or time"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          {visible.length === 0 ? (
            <div className="padelr-card mt-5 p-6 text-sm" style={{ color: "var(--padelr-ink-soft)" }}>
              No open games right now. Try opening one up yourself —{" "}
              <Link href="/padelr/player" className="underline underline-offset-4">
                find a court
              </Link>
              .
            </div>
          ) : (
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {visible.map((b) => {
                const court = courts.find((c) => c.id === b.courtId);
                if (!court) return null;
                return <OpenGameCard key={b.id} booking={b} court={court} />;
              })}
            </div>
          )}
        </>
      ) : (
        <>
          {joined.length === 0 ? (
            <div className="padelr-card mt-5 p-6 text-sm" style={{ color: "var(--padelr-ink-soft)" }}>
              You haven&rsquo;t joined any groups yet.
            </div>
          ) : (
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {joined.map((b) => {
                const court = courts.find((c) => c.id === b.courtId);
                if (!court) return null;
                return <OpenGameCard key={b.id} booking={b} court={court} />;
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}
