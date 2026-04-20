"use client";

import Link from "next/link";
import { usePadelr } from "../../store/PadelrStore";

export default function BookingsPage() {
  const { bookings, courts, cancelBooking } = usePadelr();

  const upcoming = bookings.filter((b) => b.status === "confirmed");
  const cancelled = bookings.filter((b) => b.status === "cancelled");

  return (
    <div>
      <h1 className="padelr-heading text-3xl md:text-4xl">My bookings</h1>
      <p className="mt-1 text-sm" style={{ color: "var(--padelr-muted)" }}>
        All your upcoming games in one place.
      </p>

      {upcoming.length === 0 ? (
        <div className="padelr-card mt-6 p-6 text-center">
          <p className="text-sm" style={{ color: "var(--padelr-muted)" }}>
            No bookings yet. Go find a court.
          </p>
          <Link href="/padelr/player" className="padelr-btn-primary mt-4 inline-block">
            Discover courts
          </Link>
        </div>
      ) : (
        <ul className="mt-6 space-y-3">
          {upcoming.map((b) => {
            const court = courts.find((c) => c.id === b.courtId);
            if (!court) return null;
            return (
              <li key={b.id} className="padelr-card flex flex-col gap-3 p-5 sm:flex-row sm:items-center">
                <div
                  className={`bg-gradient-to-br ${court.photoGradient} hidden h-16 w-16 shrink-0 rounded-xl sm:block`}
                  aria-hidden
                />
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-widest" style={{ color: "var(--padelr-lime)" }}>
                    {b.reference}
                  </div>
                  <div className="padelr-heading text-lg">{court.name}</div>
                  <div className="text-sm" style={{ color: "var(--padelr-muted)" }}>
                    <span className="capitalize">{b.date}</span> · {b.time} · {b.players} players · £{b.totalPrice}
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
                    onClick={() => {
                      if (window.confirm("Cancel this booking?")) {
                        cancelBooking(b.id);
                      }
                    }}
                    className="padelr-btn-ghost"
                    style={{ padding: "10px 16px", fontSize: 13, color: "#ff9b9b" }}
                  >
                    Cancel
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {cancelled.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-xs uppercase tracking-widest" style={{ color: "var(--padelr-muted)" }}>
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
                    <div style={{ color: "var(--padelr-muted)" }}>
                      {b.reference} · {b.date} · {b.time}
                    </div>
                  </div>
                  <span className="padelr-pill" style={{ background: "rgba(255,155,155,0.1)", color: "#ff9b9b" }}>
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
