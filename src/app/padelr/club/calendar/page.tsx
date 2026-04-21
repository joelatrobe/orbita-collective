"use client";

import { useMemo, useState } from "react";
import { usePadelr } from "../../store/PadelrStore";
import { DatePicker } from "../../components/DatePicker";
import { getSlotsFor } from "../../data/dates";

export default function CalendarPage() {
  const { courts, activeClubId } = usePadelr();
  const [day, setDay] = useState<string>("today");
  const clubCourts = useMemo(
    () => courts.filter((c) => c.clubOwnerId === activeClubId),
    [courts, activeClubId],
  );

  const hours = useMemo(() => {
    const set = new Set<string>();
    clubCourts.forEach((c) => getSlotsFor(c, day).forEach((s) => set.add(s.time)));
    return Array.from(set).sort();
  }, [clubCourts, day]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="padelr-heading text-3xl md:text-4xl">Booking calendar</h1>
          <p className="mt-1 text-sm" style={{ color: "var(--padelr-muted)" }}>
            Day view across all your courts.
          </p>
        </div>
        <DatePicker value={day} onChange={setDay} />
      </div>

      <div className="padelr-card mt-6 overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse text-sm">
          <thead>
            <tr>
              <th
                className="sticky left-0 p-3 text-left text-xs uppercase tracking-widest"
                style={{ color: "var(--padelr-muted)", background: "var(--padelr-navy-2)" }}
              >
                Time
              </th>
              {clubCourts.map((c) => (
                <th
                  key={c.id}
                  className="p-3 text-left text-xs uppercase tracking-widest"
                  style={{ color: "var(--padelr-muted)" }}
                >
                  {c.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {hours.map((h) => (
              <tr key={h} style={{ borderTop: "1px solid var(--padelr-line)" }}>
                <td
                  className="sticky left-0 p-3 font-medium"
                  style={{ background: "var(--padelr-navy-2)" }}
                >
                  {h}
                </td>
                {clubCourts.map((c) => {
                  const slot = getSlotsFor(c, day).find((s) => s.time === h);
                  if (!slot) {
                    return (
                      <td
                        key={c.id}
                        className="p-3 text-xs"
                        style={{ color: "var(--padelr-muted)" }}
                      >
                        Closed
                      </td>
                    );
                  }
                  return (
                    <td key={c.id} className="p-2">
                      <div
                        className="rounded-lg p-3 text-xs"
                        style={{
                          background: slot.booked
                            ? "rgba(255,255,255,0.14)"
                            : "rgba(255,255,255,0.03)",
                          color: slot.booked ? "var(--padelr-lime)" : "var(--padelr-muted)",
                          border: slot.booked
                            ? "1px solid rgba(255,255,255,0.45)"
                            : "1px dashed var(--padelr-line)",
                        }}
                      >
                        {slot.booked ? (
                          <span className="font-semibold">
                            Booked · {slot.bookingRef ?? ""}
                          </span>
                        ) : (
                          "Open"
                        )}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
