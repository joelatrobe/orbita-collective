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
  const [gameSize, setGameSize] = useState<2 | 4>(4);
  const [partySize, setPartySize] = useState<number>(4);
  const [openToJoin, setOpenToJoin] = useState<boolean>(false);
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
  const remainingSpots = Math.max(0, gameSize - partySize);

  const handleGameSize = (g: 2 | 4) => {
    setGameSize(g);
    if (partySize > g) setPartySize(g);
  };

  const handleConfirm = () => {
    if (!canConfirm) return;
    const booking = createBooking({
      courtId: court.id,
      date: day,
      time,
      players: gameSize,
      partySize,
      openToJoin: openToJoin && partySize < gameSize,
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
            style={{ background: "var(--padelr-line)", color: "var(--padelr-court-dark)" }}
            aria-hidden
          >
            <span className="text-2xl font-bold">✓</span>
          </div>
          <h1 className="padelr-heading text-2xl">You&rsquo;re booked</h1>
          <p className="mt-1 text-sm" style={{ color: "var(--padelr-ink-soft)" }}>
            {confirmed.openToJoin
              ? "We&rsquo;ve opened the spare spots to other players — they can request to join."
              : "We&rsquo;ve saved your slot. A reminder will go out closer to time."}
          </p>

          <div
            className="mt-6 rounded-xl p-4 text-left"
            style={{ background: "rgba(255,255,255,0.10)", border: "1px solid var(--padelr-line-soft)" }}
          >
            <div className="text-xs uppercase tracking-widest" style={{ color: "var(--padelr-ink-soft)" }}>
              Reference
            </div>
            <div className="padelr-heading text-2xl tracking-wider">{confirmed.reference}</div>
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-3 text-left text-sm">
            <div>
              <dt style={{ color: "var(--padelr-ink-muted)" }}>Court</dt>
              <dd className="font-medium">{court.name}</dd>
            </div>
            <div>
              <dt style={{ color: "var(--padelr-ink-muted)" }}>When</dt>
              <dd className="font-medium capitalize">
                {confirmed.date} · {confirmed.time}
              </dd>
            </div>
            <div>
              <dt style={{ color: "var(--padelr-ink-muted)" }}>Your party</dt>
              <dd className="font-medium">
                {confirmed.partySize} of {confirmed.players}
              </dd>
            </div>
            <div>
              <dt style={{ color: "var(--padelr-ink-muted)" }}>Total</dt>
              <dd className="font-medium">£{confirmed.totalPrice}</dd>
            </div>
          </dl>

          {confirmed.openToJoin ? (
            <div
              className="mt-4 rounded-xl p-3 text-left text-xs"
              style={{ background: "rgba(255,255,255,0.08)", color: "var(--padelr-ink-soft)" }}
            >
              <strong style={{ color: "var(--padelr-line)" }}>Open to joiners.</strong>{" "}
              {confirmed.players - confirmed.partySize} spot
              {confirmed.players - confirmed.partySize === 1 ? "" : "s"} visible to nearby players.
            </div>
          ) : null}

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
        style={{ color: "var(--padelr-ink-soft)" }}
      >
        ← Back to court
      </Link>

      <h1 className="padelr-heading text-3xl">Book {court.name}</h1>
      <p className="mt-1 text-sm" style={{ color: "var(--padelr-ink-soft)" }}>
        Three steps — you&rsquo;ll be playing by then.
      </p>

      <div className="mt-6 space-y-5">
        <section className="padelr-card p-5">
          <div className="text-xs uppercase tracking-widest" style={{ color: "var(--padelr-ink-soft)" }}>
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
          <div className="text-xs uppercase tracking-widest" style={{ color: "var(--padelr-ink-soft)" }}>
            2 · Time
          </div>
          {availableTimes.length === 0 ? (
            <p className="mt-3 text-sm" style={{ color: "var(--padelr-ink-muted)" }}>
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
          <div className="text-xs uppercase tracking-widest" style={{ color: "var(--padelr-ink-soft)" }}>
            3 · Your game
          </div>
          <div className="mt-3">
            <div className="text-xs" style={{ color: "var(--padelr-ink-muted)" }}>
              Game size
            </div>
            <div className="mt-2 flex gap-2">
              {[2, 4].map((p) => (
                <button
                  key={p}
                  onClick={() => handleGameSize(p as 2 | 4)}
                  className="padelr-slot"
                  data-state={gameSize === p ? "selected" : undefined}
                  style={{ flex: 1, padding: "12px 16px" }}
                >
                  {p} players
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <div className="text-xs" style={{ color: "var(--padelr-ink-muted)" }}>
              You&rsquo;re bringing
            </div>
            <div className="mt-2 flex gap-2">
              {Array.from({ length: gameSize }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setPartySize(n)}
                  className="padelr-slot"
                  data-state={partySize === n ? "selected" : undefined}
                  style={{ flex: 1, padding: "10px 8px" }}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          {remainingSpots > 0 ? (
            <div
              className="mt-4 flex items-center justify-between rounded-xl p-3"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              <div>
                <div className="text-sm font-medium">Open the spare {remainingSpots} spot{remainingSpots === 1 ? "" : "s"}?</div>
                <div className="text-xs" style={{ color: "var(--padelr-ink-muted)" }}>
                  Other players will see your game and can join.
                </div>
              </div>
              <button
                className="padelr-toggle"
                data-on={openToJoin ? "true" : "false"}
                onClick={() => setOpenToJoin((v) => !v)}
                aria-label="Open to other players"
              />
            </div>
          ) : null}
        </section>

        <div
          className="padelr-card flex items-center justify-between p-5"
          style={{ background: "rgba(255,255,255,0.08)" }}
        >
          <div>
            <div className="text-xs uppercase tracking-widest" style={{ color: "var(--padelr-ink-soft)" }}>
              Total
            </div>
            <div className="padelr-heading text-3xl">£{totalPrice}</div>
            <div className="text-xs" style={{ color: "var(--padelr-ink-muted)" }}>
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
