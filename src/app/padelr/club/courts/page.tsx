"use client";

import Link from "next/link";
import { usePadelr } from "../../store/PadelrStore";
import { PadelCourtArt } from "../../components/PadelCourtArt";

export default function ManageCourtsPage() {
  const { courts, activeClubId } = usePadelr();
  const clubCourts = courts.filter((c) => c.clubOwnerId === activeClubId);

  return (
    <div>
      <h1 className="padelr-heading text-3xl md:text-4xl">Manage courts</h1>
      <p className="mt-1 text-sm" style={{ color: "var(--padelr-muted)" }}>
        Edit names, prices and opening hours. Changes show up for players instantly.
      </p>

      <ul className="mt-6 space-y-3">
        {clubCourts.map((c) => (
          <li key={c.id} className="padelr-card padelr-lined-top flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
            <div className="hidden h-20 w-20 shrink-0 overflow-hidden rounded-xl sm:block" aria-hidden>
              <PadelCourtArt scene={c.scene} photoUrl={c.photoUrl} className="h-full w-full" />
            </div>
            <div className="flex-1">
              <div className="padelr-heading text-lg">{c.name}</div>
              <div className="text-sm" style={{ color: "var(--padelr-muted)" }}>
                £{c.pricePerHour}/hr · Open {c.openingHours.open}–{c.openingHours.close}
              </div>
            </div>
            <Link
              href={`/padelr/club/courts/${c.id}`}
              className="padelr-btn-primary"
              style={{ padding: "10px 18px", fontSize: 13 }}
            >
              Edit
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
