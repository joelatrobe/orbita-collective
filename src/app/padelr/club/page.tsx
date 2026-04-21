"use client";

import { useMemo } from "react";
import { usePadelr } from "../store/PadelrStore";
import { getSlotsFor, resolveDateKey } from "../data/dates";

export default function ClubDashboard() {
  const { courts, bookings, clubs, activeClubId } = usePadelr();

  const club = clubs.find((c) => c.id === activeClubId);
  const clubCourts = useMemo(
    () => courts.filter((c) => c.clubOwnerId === activeClubId),
    [courts, activeClubId],
  );
  const clubCourtIds = clubCourts.map((c) => c.id);

  const todayIso = resolveDateKey("today");
  const isToday = (d: string) => d === "today" || d === todayIso;

  const todaysBookings = bookings.filter(
    (b) => isToday(b.date) && b.status === "confirmed" && clubCourtIds.includes(b.courtId),
  );
  const revenueToday = todaysBookings.reduce((sum, b) => sum + b.totalPrice, 0);

  const slotsToday = clubCourts.reduce((acc, c) => acc + getSlotsFor(c, "today").length, 0);
  const bookedToday = clubCourts.reduce(
    (acc, c) => acc + getSlotsFor(c, "today").filter((s) => s.booked).length,
    0,
  );
  const utilisation = slotsToday === 0 ? 0 : Math.round((bookedToday / slotsToday) * 100);

  return (
    <div>
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h1 className="padelr-heading text-3xl md:text-4xl">Good morning, {club?.ownerName.split(" ")[0] ?? "Team"}</h1>
          <p className="mt-1 text-sm" style={{ color: "var(--padelr-muted)" }}>
            {club?.name} · {clubCourts.length} courts active today
          </p>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <StatCard label="Bookings today" value={todaysBookings.length.toString()} hint="Confirmed slots" />
        <StatCard label="Revenue today" value={`£${revenueToday}`} hint="From confirmed" />
        <StatCard label="Utilisation" value={`${utilisation}%`} hint={`${bookedToday}/${slotsToday} slots`} />
      </div>

      <section className="mt-8">
        <h2 className="padelr-heading text-sm uppercase tracking-widest" style={{ color: "var(--padelr-muted)" }}>
          Today&rsquo;s bookings
        </h2>
        {todaysBookings.length === 0 ? (
          <div className="padelr-card mt-3 p-6 text-sm" style={{ color: "var(--padelr-muted)" }}>
            No confirmed bookings today. Yet.
          </div>
        ) : (
          <ul className="mt-3 space-y-2">
            {todaysBookings
              .slice()
              .sort((a, b) => a.time.localeCompare(b.time))
              .map((b) => {
                const court = courts.find((c) => c.id === b.courtId);
                return (
                  <li key={b.id} className="padelr-card flex items-center justify-between p-4">
                    <div>
                      <div className="text-xs" style={{ color: "var(--padelr-lime)" }}>
                        {b.reference}
                      </div>
                      <div className="font-semibold">{court?.name}</div>
                      <div className="text-xs" style={{ color: "var(--padelr-muted)" }}>
                        {b.time} · {b.players} players · {b.playerName}
                      </div>
                    </div>
                    <div className="text-lg font-semibold">£{b.totalPrice}</div>
                  </li>
                );
              })}
          </ul>
        )}
      </section>

      <section className="mt-8">
        <h2 className="padelr-heading text-sm uppercase tracking-widest" style={{ color: "var(--padelr-muted)" }}>
          Court utilisation
        </h2>
        <div className="mt-3 space-y-2">
          {clubCourts.map((c) => {
            const total = getSlotsFor(c, "today").length;
            const booked = getSlotsFor(c, "today").filter((s) => s.booked).length;
            const pct = total === 0 ? 0 : Math.round((booked / total) * 100);
            return (
              <div key={c.id} className="padelr-card p-4">
                <div className="flex items-baseline justify-between">
                  <div className="font-semibold">{c.name}</div>
                  <div className="text-sm" style={{ color: "var(--padelr-muted)" }}>
                    {booked}/{total} · {pct}%
                  </div>
                </div>
                <div
                  className="mt-2 h-2 overflow-hidden rounded-full"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${pct}%`, background: "var(--padelr-lime)" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function StatCard({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="padelr-card p-5">
      <div className="text-xs uppercase tracking-widest" style={{ color: "var(--padelr-muted)" }}>
        {label}
      </div>
      <div className="padelr-heading mt-1 text-3xl">{value}</div>
      <div className="mt-1 text-xs" style={{ color: "var(--padelr-muted)" }}>
        {hint}
      </div>
    </div>
  );
}
