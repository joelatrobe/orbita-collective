"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { use, useMemo, useState } from "react";
import { EquipmentBadges } from "../../../components/EquipmentBadges";
import { PadelCourtArt } from "../../../components/PadelCourtArt";
import { DatePicker } from "../../../components/DatePicker";
import { getSlotsFor } from "../../../data/dates";
import { usePadelr } from "../../../store/PadelrStore";

export default function CourtDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { courts } = usePadelr();
  const court = courts.find((c) => c.id === id);
  const [activeDay, setActiveDay] = useState<string>("today");
  const router = useRouter();

  const slots = useMemo(() => (court ? getSlotsFor(court, activeDay) : []), [court, activeDay]);

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

  return (
    <div>
      <Link
        href="/padelr/player"
        className="mb-4 inline-flex items-center gap-1 text-sm"
        style={{ color: "var(--padelr-ink-soft)" }}
      >
        ← Discover
      </Link>

      <div className="relative mb-6 h-60 overflow-hidden rounded-2xl md:h-80">
        <PadelCourtArt
          scene={court.scene}
          photoUrl={court.photoUrl}
          className="absolute inset-0 h-full w-full"
          ariaLabel={`${court.name}`}
        />
        <div className="absolute inset-x-4 top-4 flex items-center justify-between">
          <div
            className="padelr-pill"
            style={{ background: "rgba(20,74,130,0.82)", color: "white" }}
          >
            <span aria-hidden>★</span>
            <span>{court.rating.toFixed(1)}</span>
          </div>
          <div
            className="padelr-pill"
            style={{ background: "rgba(20,74,130,0.82)", color: "white" }}
          >
            £{court.pricePerHour}/hr
          </div>
        </div>
        <div className="absolute inset-x-4 bottom-3">
          <div className="padelr-baseline" aria-hidden />
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-[1fr_320px]">
        <div>
          <h1 className="padelr-heading text-3xl md:text-4xl">{court.name}</h1>
          <p className="mt-1 text-sm" style={{ color: "var(--padelr-ink-soft)" }}>
            {court.address} · {court.city}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            <span className="padelr-pill" style={{ background: "rgba(255,255,255,0.08)" }}>
              Open {court.openingHours.open}–{court.openingHours.close}
            </span>
          </div>

          <section className="mt-8">
            <div className="padelr-section-head">
              <h2 className="padelr-heading text-sm uppercase tracking-widest">
                Gear on site
              </h2>
            </div>
            <EquipmentBadges equipment={court.equipment} />
            <ul className="mt-3 text-sm" style={{ color: "var(--padelr-ink-soft)" }}>
              <li>
                {court.equipment.rackets.available
                  ? `Rackets to hire · £${court.equipment.rackets.hirePrice}/session`
                  : "Bring your own racket"}
              </li>
              <li>
                {court.equipment.balls.available
                  ? `Balls available to buy · £${court.equipment.balls.buyPrice}/tube`
                  : "No balls on sale"}
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <div className="padelr-section-head">
              <h2 className="padelr-heading text-sm uppercase tracking-widest">
                Available slots
              </h2>
            </div>
            <DatePicker value={activeDay} onChange={setActiveDay} />
            <div className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-6">
              {slots.map((s) => (
                <button
                  key={s.time}
                  className="padelr-slot"
                  data-state={s.booked ? "booked" : undefined}
                  disabled={s.booked}
                  onClick={() =>
                    router.push(
                      `/padelr/player/book/${court.id}?day=${encodeURIComponent(activeDay)}&time=${encodeURIComponent(s.time)}`,
                    )
                  }
                >
                  {s.time}
                </button>
              ))}
            </div>
          </section>
        </div>

        <aside className="padelr-card padelr-lined-top h-fit p-5">
          <div className="text-xs uppercase tracking-widest" style={{ color: "var(--padelr-ink-soft)" }}>
            From
          </div>
          <div className="mt-1 text-3xl font-bold">£{court.pricePerHour}</div>
          <div className="text-xs" style={{ color: "var(--padelr-ink-muted)" }}>
            per hour · up to 4 players
          </div>
          <div className="padelr-net mt-4" aria-hidden />
          <Link
            href={`/padelr/player/book/${court.id}?day=${encodeURIComponent(activeDay)}`}
            className="padelr-btn-primary mt-4 block w-full text-center"
          >
            Book now
          </Link>
          <p className="mt-3 text-center text-xs" style={{ color: "var(--padelr-ink-muted)" }}>
            Free cancellation up to 2 hours before.
          </p>
        </aside>
      </div>
    </div>
  );
}
