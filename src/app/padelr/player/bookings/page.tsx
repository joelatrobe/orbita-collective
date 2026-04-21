"use client";

import Link from "next/link";
import { spotsLeft, usePadelr } from "../../store/PadelrStore";
import { PadelCourtArt } from "../../components/PadelCourtArt";
import { formatFriendly } from "../../data/dates";

export default function BookingsPage() {
  const { bookings, courts, cancelBooking, leaveBooking, currentPlayer } = usePadelr();

  const hosted = bookings.filter(
    (b) => b.status === "confirmed" && b.playerName === currentPlayer,
  );
  const joined = bookings.filter(
    (b) =>
      b.status === "confirmed" &&
      b.playerName !== currentPlayer &&
      b.joiners.some((j) => j.name === currentPlayer),
  );
  const cancelled = bookings.filter((b) => b.status === "cancelled");

  const isEmpty = hosted.length === 0 && joined.length === 0;

  return (
    <div>
      <h1 className="padelr-heading text-3xl md:text-4xl">My bookings</h1>
      <p className="mt-1 text-sm" style={{ color: "var(--padelr-ink-soft)" }}>
        Your games — the ones you&rsquo;re hosting and the ones you&rsquo;ve joined.
      </p>

      {isEmpty ? (
        <div className="padelr-card mt-6 p-6 text-center">
          <p className="text-sm" style={{ color: "var(--padelr-ink-soft)" }}>
            No bookings yet. Go find a court or join an open game.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-center">
            <Link href="/padelr/player" className="padelr-btn-primary">
              Discover courts
            </Link>
            <Link href="/padelr/player/games" className="padelr-btn-ghost">
              Browse open games
            </Link>
          </div>
        </div>
      ) : null}

      {hosted.length > 0 ? (
        <section className="mt-7">
          <h2 className="text-xs uppercase tracking-widest" style={{ color: "var(--padelr-ink-muted)" }}>
            Hosted by you
          </h2>
          <ul className="mt-3 space-y-3">
            {hosted.map((b) => {
              const court = courts.find((c) => c.id === b.courtId);
              if (!court) return null;
              const spots = spotsLeft(b);
              return (
                <li key={b.id} className="padelr-card flex flex-col gap-3 p-5 sm:flex-row sm:items-center">
                  <div className="hidden h-16 w-16 shrink-0 overflow-hidden rounded-xl sm:block" aria-hidden>
                    <PadelCourtArt scene={court.scene} photoUrl={court.photoUrl} className="h-full w-full" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs" style={{ color: "var(--padelr-line)" }}>
                        {b.reference}
                      </span>
                      {b.openToJoin && spots > 0 ? (
                        <span
                          className="padelr-pill"
                          style={{ background: "var(--padelr-line)", color: "var(--padelr-court-dark)", fontWeight: 600 }}
                        >
                          {spots} spot{spots === 1 ? "" : "s"} open
                        </span>
                      ) : b.joiners.length > 0 ? (
                        <span className="padelr-pill" style={{ background: "rgba(255,255,255,0.14)" }}>
                          {b.joiners.length} joined
                        </span>
                      ) : null}
                    </div>
                    <div className="padelr-heading text-lg">{court.name}</div>
                    <div className="text-sm" style={{ color: "var(--padelr-ink-soft)" }}>
                      {formatFriendly(b.date)} · {b.time} · {b.partySize}/{b.players} in your party · £{b.totalPrice}
                    </div>
                    {b.joiners.length > 0 ? (
                      <div className="mt-1 text-xs" style={{ color: "var(--padelr-ink-muted)" }}>
                        Joined: {b.joiners.map((j) => j.name).join(", ")}
                      </div>
                    ) : null}
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/padelr/player/courts/${court.id}`}
                      className="padelr-btn-ghost"
                      style={{ padding: "10px 16px", fontSize: 13 }}
                    >
                      Court
                    </Link>
                    <button
                      onClick={() => {
                        if (window.confirm("Cancel this booking?")) {
                          cancelBooking(b.id);
                        }
                      }}
                      className="padelr-btn-ghost"
                      style={{ padding: "10px 16px", fontSize: 13, color: "#ffc2c2" }}
                    >
                      Cancel
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      {joined.length > 0 ? (
        <section className="mt-8">
          <h2 className="text-xs uppercase tracking-widest" style={{ color: "var(--padelr-ink-muted)" }}>
            Groups you joined
          </h2>
          <ul className="mt-3 space-y-3">
            {joined.map((b) => {
              const court = courts.find((c) => c.id === b.courtId);
              if (!court) return null;
              return (
                <li key={b.id} className="padelr-card flex flex-col gap-3 p-5 sm:flex-row sm:items-center">
                  <div className="hidden h-16 w-16 shrink-0 overflow-hidden rounded-xl sm:block" aria-hidden>
                    <PadelCourtArt scene={court.scene} photoUrl={court.photoUrl} className="h-full w-full" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs" style={{ color: "var(--padelr-ink-soft)" }}>
                        {b.reference}
                      </span>
                      <span className="padelr-pill" style={{ background: "rgba(255,255,255,0.14)" }}>
                        Joined
                      </span>
                    </div>
                    <div className="padelr-heading text-lg">{court.name}</div>
                    <div className="text-sm" style={{ color: "var(--padelr-ink-soft)" }}>
                      {formatFriendly(b.date)} · {b.time} · hosted by {b.playerName}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/padelr/player/courts/${court.id}`}
                      className="padelr-btn-ghost"
                      style={{ padding: "10px 16px", fontSize: 13 }}
                    >
                      Court
                    </Link>
                    <button
                      onClick={() => leaveBooking(b.id)}
                      className="padelr-btn-ghost"
                      style={{ padding: "10px 16px", fontSize: 13 }}
                    >
                      Leave
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      {cancelled.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-xs uppercase tracking-widest" style={{ color: "var(--padelr-ink-muted)" }}>
            Cancelled
          </h2>
          <ul className="mt-3 space-y-2">
            {cancelled.map((b) => {
              const court = courts.find((c) => c.id === b.courtId);
              if (!court) return null;
              return (
                <li
                  key={b.id}
                  className="padelr-card flex items-center justify-between p-4 text-sm"
                  style={{ opacity: 0.55 }}
                >
                  <div>
                    <div className="font-medium">{court.name}</div>
                    <div style={{ color: "var(--padelr-ink-muted)" }}>
                      {b.reference} · {b.date} · {b.time}
                    </div>
                  </div>
                  <span className="padelr-pill" style={{ background: "rgba(255,200,200,0.12)", color: "#ffc2c2" }}>
                    Cancelled
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
