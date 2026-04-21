"use client";

import Link from "next/link";
import type { Court } from "../data/types";
import { EquipmentBadges } from "./EquipmentBadges";
import { PadelCourtArt } from "./PadelCourtArt";

export function CourtCard({ court }: { court: Court }) {
  return (
    <Link
      href={`/padelr/player/courts/${court.id}`}
      className="padelr-card padelr-lined-top group block overflow-hidden transition-transform hover:-translate-y-1"
    >
      <div className="relative h-44">
        <PadelCourtArt
          scene={court.scene}
          photoUrl={court.photoUrl}
          className="absolute inset-0 h-full w-full"
          ariaLabel={`${court.name} court`}
        />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-white/90" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3">
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
      </div>
      <div className="p-4">
        <h3 className="padelr-heading text-lg leading-tight">{court.name}</h3>
        <p className="mt-1 text-xs" style={{ color: "var(--padelr-ink-soft)" }}>
          {court.address} · {court.city}
        </p>
        <div className="mt-3">
          <EquipmentBadges equipment={court.equipment} />
        </div>
      </div>
    </Link>
  );
}
