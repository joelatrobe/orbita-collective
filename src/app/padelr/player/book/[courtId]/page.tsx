"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { use, useMemo, useState } from "react";
import { usePadelr } from "../../../store/PadelrStore";
import type { Booking } from "../../../data/types";

export default function BookingPage({ params }: { params: Promise<{ courtId: string }> }) {
  const { courtId } = use(params);
  const sp = useSearchParams();
  const { courts, createBooking } = usePadelr();
  const court = courts.find((c) => c.id === courtId);

  const initialDay = (sp.get("day") === "tomorrow" ? "tomorrow" : "today") as
    | "today"
    | "tomorrow";
  const initialTime = sp.get("time") ?? "";

  const [day, setDay] = useState<"today" | "tomorrow">(initialDay);
  const [time, setTime] = useState<string>(initialTime);
  const [players, setPlayers] = useState<2 | 4>(4);
  const [confirmed, setConfirmed] = useState<Booking | null>(null);

  const availableTimes = useMemo(() => {
    if (!court) return [];
    return court.slots[day].filter((s) => !s.booked);
  }, [court, day]);

  if (!court) {
    return (
      <div className="padelr-card p-6 text-center">
        <p className="text-sm">Court not found.</p>
        <Link href="/padelr/player" className="padelr-btn-primary mt-4 inline-block">
          Back to discover
        </Link>
      </div>
    );
  }

  const totalPrice = court.pricePerHour;
  const canConfirm = Boolean(time) && !confirmed;

  const handleConfirm = () => {
    if (!canConfirm) return;
    const booking = createBooking({
      courtId: court.id,
      date: day,
      time,
      players,
      totalPrice,
    });
    setConfirmed(booking);
  };

  if (confirmed) {
    return (
      <div className="mx-auto max-w-lg pt-6">
        <div className="padelr-card overflow-hidden p-8 text-center">
          <div
            className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full"
            style={{ background: "var(--padelr-lime)", color: "var(--padelr-navy)" }}
            aria-hidden
          >
            <span className="text-2xl font-bold">✓</span>
          </div>
          <h1 className="padelr-heading text-2xl">You&rsquo;re booked</h1>
          <p className="mt-1 text-sm" style={{ color: "var(--padelr-muted)" }}>
            We&rsquo;ve saved your slot. A reminder will go out closer to time.
          </p>

          <div
            className="mt-6 rounded-xl p-4 text-left"
            style={{ background: "rgba(212,255,61,0.08)", border: "1px solid var(--padelr-line)" }}
          >
            <div className="text-xs uppercase tracking-widest" style={{ color: "var(--padelr-lime)" }}>
              Reference
            </div>
            <div className="padelr-heading text-2xl tracking-wider">{confirmed.reference}</div>
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-3 text-left text-sm">
            <div>
              <dt style={{ color: "var(--padelr-muted)" }}>Court</dt>
              <dd className="font-medium">{court.name}</dd>
            </div>
            <div>
              <dt style={{ color: "var(--padelr-muted)" }}>When</dt>
              <dd className="font-medium capitalize">
                {confirmed.date} · {confirmed.time}
              </dd>
            </div>
            <div>
              <dt style={{ color: "var(--padelr-muted)" }}>Players</dt>
              <dd className="font-medium">{confirmed.players}</dd>
            </div>
            <div>
              <dt style={{ color: "var(--padelr-muted)" }}>Total</dt>
              <dd className="font-medium">£{confirmed.totalPrice}</dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-col gap-2">
            <Link href="/padelr/player/bookings" className="padelr-btn-primary">
              See my bookings
            </Link>
            <Link href="/padelr/player" className="padelr-btn-ghost">
              Back to discover
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <Link
        href={`/padelr/player/courts/${court.id}`}
        className="mb-4 inline-flex items-center gap-1 text-sm"
        style={{ color: "var(--padelr-muted)" }}
      >
        ← Back to court
      </Link>

      <h1 className="padelr-heading text-3xl">Book {court.name}</h1>
      <p className="mt-1 text-sm" style={{ color: "var(--padelr-muted)" }}>
        Three steps — you&rsquo;ll be playing by then.
      </p>

      <div className="mt-6 space-y-5">
        <section className="padelr-card p-5">
          <div className="text-xs uppercase tracking-widest" style={{ color: "var(--padelr-muted)" }}>
            1 · Day
          </div>
          <div className="mt-3 flex gap-2">
            {(["today", "tomorrow"] as const).map((d) => (
              <button
                key={d}
                onClick={() => {
                  setDay(d);
                  setTime("");
                }}
                className="padelr-slot"
                data-state={day === d ? "selected" : undefined}
                style={{ flex: 1, padding: "12px 16px", textTransform: "capitalize" }}
              >
                {d}
              </button>
            ))}
          </div>
        </section>

        <section className="padelr-card p-5">
          <div className="text-xs uppercase tracking-widest" style={{ color: "var(--padelr-muted)" }}>
            2 · Time
          </div>
          {availableTimes.length === 0 ? (
            <p className="mt-3 text-sm" style={{ color: "var(--padelr-muted)" }}>
              No free slots on this day. Try the other day.
            </p>
          ) : (
            <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-6">
              {availableTimes.map((s) => (
                <button
                  key={s.time}
                  className="padelr-slot"
                  data-state={time === s.time ? "selected" : undefined}
                  onClick={() => setTime(s.time)}
                >
                  {s.time}
                </button>
              ))}
            </div>
          )}
        </section>

        <section className="padelr-card p-5">
          <div className="text-xs uppercase tracking-widest" style={{ color: "var(--padelr-muted)" }}>
            3 · Players
          </div>
          <div className="mt-3 flex gap-2">
            {[2, 4].map((p) => (
              <button
                key={p}
                onClick={() => setPlayers(p as 2 | 4)}
                className="padelr-slot"
                data-state={players === p ? "selected" : undefined}
                style={{ flex: 1, padding: "12px 16px" }}
              >
                {p} players
              </button>
            ))}
          </div>
        </section>

        <div
          className="padelr-card flex items-center justify-between p-5"
          style={{ background: "rgba(212,255,61,0.06)" }}
        >
          <div>
            <div className="text-xs uppercase tracking-widest" style={{ color: "var(--padelr-muted)" }}>
              Total
            </div>
            <div className="padelr-heading text-3xl">£{totalPrice}</div>
            <div className="text-xs" style={{ color: "var(--padelr-muted)" }}>
              {time ? `${day} · ${time}` : "Pick a time to continue"}
            </div>
          </div>
          <button
            className="padelr-btn-primary"
            disabled={!canConfirm}
            onClick={handleConfirm}
            style={{ opacity: canConfirm ? 1 : 0.45, cursor: canConfirm ? "pointer" : "not-allowed" }}
          >
            Confirm booking
          </button>
        </div>
      </div>
    </div>
  );
}
