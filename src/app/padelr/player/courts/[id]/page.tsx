"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { use, useState } from "react";
import { EquipmentBadges } from "../../../components/EquipmentBadges";
import { usePadelr } from "../../../store/PadelrStore";

export default function CourtDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { courts } = usePadelr();
  const court = courts.find((c) => c.id === id);
  const [activeDay, setActiveDay] = useState<"today" | "tomorrow">("today");
  const router = useRouter();

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

  const slots = court.slots[activeDay];

  return (
    <div>
      <Link
        href="/padelr/player"
        className="mb-4 inline-flex items-center gap-1 text-sm"
        style={{ color: "var(--padelr-muted)" }}
      >
        ← Discover
      </Link>

      <div
        className={`bg-gradient-to-br ${court.photoGradient} relative mb-4 flex h-56 items-end overflow-hidden rounded-2xl p-5 md:h-72`}
      >
        <div
          className="padelr-pill"
          style={{ background: "rgba(11,31,42,0.7)", color: "white" }}
        >
          <span aria-hidden>★</span>
          <span>{court.rating.toFixed(1)}</span>
        </div>
        <div className="ml-auto padelr-pill" style={{ background: "rgba(11,31,42,0.7)", color: "white" }}>
          £{court.pricePerHour}/hr
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_320px]">
        <div>
          <h1 className="padelr-heading text-3xl md:text-4xl">{court.name}</h1>
          <p className="mt-1 text-sm" style={{ color: "var(--padelr-muted)" }}>
            {court.address} · {court.city}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="padelr-pill" style={{ background: "rgba(255,255,255,0.05)", color: "var(--padelr-ink)" }}>
              Open {court.openingHours.open}–{court.openingHours.close}
            </span>
          </div>

          <div className="mt-6">
            <h2 className="padelr-heading text-sm uppercase tracking-widest" style={{ color: "var(--padelr-muted)" }}>
              Gear on site
            </h2>
            <div className="mt-3">
              <EquipmentBadges equipment={court.equipment} />
            </div>
            <ul className="mt-3 text-sm" style={{ color: "var(--padelr-muted)" }}>
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
          </div>

          <div className="mt-7">
            <div className="flex items-center justify-between">
              <h2 className="padelr-heading text-sm uppercase tracking-widest" style={{ color: "var(--padelr-muted)" }}>
                Available slots
              </h2>
              <div className="flex gap-2">
                {(["today", "tomorrow"] as const).map((d) => (
                  <button
                    key={d}
                    onClick={() => setActiveDay(d)}
                    className="padelr-pill"
                    style={{
                      background: activeDay === d ? "var(--padelr-lime)" : "rgba(255,255,255,0.05)",
                      color: activeDay === d ? "var(--padelr-navy)" : "var(--padelr-ink)",
                      fontWeight: activeDay === d ? 600 : 500,
                      textTransform: "capitalize",
                      cursor: "pointer",
                    }}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-6">
              {slots.map((s) => (
                <button
                  key={s.time}
                  className="padelr-slot"
                  data-state={s.booked ? "booked" : undefined}
                  disabled={s.booked}
                  onClick={() =>
                    router.push(
                      `/padelr/player/book/${court.id}?day=${activeDay}&time=${encodeURIComponent(s.time)}`,
                    )
                  }
                >
                  {s.time}
                </button>
              ))}
            </div>
          </div>
        </div>

        <aside className="padelr-card h-fit p-5">
          <div className="text-xs uppercase tracking-widest" style={{ color: "var(--padelr-muted)" }}>
            From
          </div>
          <div className="mt-1 text-3xl font-bold">£{court.pricePerHour}</div>
          <div className="text-xs" style={{ color: "var(--padelr-muted)" }}>
            per hour · up to 4 players
          </div>
          <Link
            href={`/padelr/player/book/${court.id}?day=${activeDay}`}
            className="padelr-btn-primary mt-5 block w-full text-center"
          >
            Book now
          </Link>
          <p className="mt-3 text-center text-xs" style={{ color: "var(--padelr-muted)" }}>
            Free cancellation up to 2 hours before.
          </p>
        </aside>
      </div>
    </div>
  );
}
