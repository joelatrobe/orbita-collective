"use client";

import Link from "next/link";
import { spotsLeft, usePadelr } from "../store/PadelrStore";
import type { Booking, Court } from "../data/types";

export function OpenGameCard({
  booking,
  court,
  compact = false,
}: {
  booking: Booking;
  court: Court;
  compact?: boolean;
}) {
  const { joinBooking, leaveBooking, currentPlayer } = usePadelr();
  const spots = spotsLeft(booking);
  const joined = booking.joiners.some((j) => j.name === currentPlayer);

  return (
    <div
      className="padelr-card relative overflow-hidden"
      style={{ padding: compact ? "14px" : "18px" }}
    >
      <div
        aria-hidden
        className={`bg-gradient-to-br ${court.photoGradient} absolute inset-y-0 right-0 w-24 opacity-80`}
        style={{
          clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />
      <div className="relative pr-24">
        <div className="flex items-center gap-2">
          <span
            className="padelr-pill"
            style={{ background: "var(--padelr-line)", color: "var(--padelr-court-dark)", fontWeight: 600 }}
          >
            {spots > 0 ? `${spots} spot${spots === 1 ? "" : "s"} open` : "Full"}
          </span>
          <span className="padelr-pill" style={{ background: "rgba(255,255,255,0.14)" }}>
            {booking.players === 2 ? "Singles" : "Doubles"}
          </span>
        </div>
        <h3 className={`padelr-heading mt-2 ${compact ? "text-base" : "text-lg"}`}>{court.name}</h3>
        <div className="mt-1 text-xs" style={{ color: "var(--padelr-ink-soft)" }}>
          <span className="capitalize">{booking.date}</span> · {booking.time} · {court.city}
        </div>
        <div className="mt-2 text-xs" style={{ color: "var(--padelr-ink-muted)" }}>
          Hosted by <strong style={{ color: "var(--padelr-ink)" }}>{booking.playerName}</strong>
          {booking.joiners.length > 0
            ? ` · ${booking.joiners.map((j) => j.name).join(", ")} joined`
            : ""}
        </div>

        <div className="mt-3 flex items-center gap-2">
          {joined ? (
            <button
              className="padelr-btn-ghost"
              style={{ padding: "8px 14px", fontSize: 13 }}
              onClick={() => leaveBooking(booking.id)}
            >
              Leave group
            </button>
          ) : (
            <button
              className="padelr-btn-primary"
              style={{ padding: "8px 16px", fontSize: 13 }}
              onClick={() => joinBooking(booking.id)}
              disabled={spots <= 0}
            >
              {spots <= 0 ? "Full" : "Join group"}
            </button>
          )}
          <Link
            href={`/padelr/player/courts/${court.id}`}
            className="text-xs underline-offset-4 hover:underline"
            style={{ color: "var(--padelr-ink-soft)" }}
          >
            View court
          </Link>
        </div>
      </div>
    </div>
  );
}
