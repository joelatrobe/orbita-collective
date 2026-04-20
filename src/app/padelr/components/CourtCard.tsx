"use client";

import Link from "next/link";
import type { Court } from "../data/types";
import { EquipmentBadges } from "./EquipmentBadges";

export function CourtCard({ court }: { court: Court }) {
  return (
    <Link
      href={`/padelr/player/courts/${court.id}`}
      className="padelr-card group block overflow-hidden transition-transform hover:-translate-y-1"
    >
      <div
        className={`bg-gradient-to-br ${court.photoGradient} relative flex h-40 items-end p-4`}
      >
        <div
          className="padelr-pill"
          style={{ background: "rgba(11,31,42,0.7)", color: "white" }}
        >
          <span aria-hidden>★</span>
          <span>{court.rating.toFixed(1)}</span>
        </div>
        <div
          className="padelr-pill ml-auto"
          style={{ background: "rgba(11,31,42,0.7)", color: "white" }}
        >
          £{court.pricePerHour}/hr
        </div>
      </div>
      <div className="p-4">
        <h3 className="padelr-heading text-lg leading-tight">{court.name}</h3>
        <p className="mt-1 text-xs" style={{ color: "var(--padelr-muted)" }}>
          {court.address} · {court.city}
        </p>
        <div className="mt-3">
          <EquipmentBadges equipment={court.equipment} />
        </div>
      </div>
    </Link>
  );
}
