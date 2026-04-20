"use client";

import { useEffect, useState } from "react";
import { usePadelr } from "../../store/PadelrStore";

export default function EquipmentPage() {
  const { courts, clubs, activeClubId, updateClubEquipment } = usePadelr();
  const club = clubs.find((c) => c.id === activeClubId);
  const clubCourt = courts.find((c) => c.clubOwnerId === activeClubId);

  const [racketsOn, setRacketsOn] = useState(false);
  const [racketPrice, setRacketPrice] = useState(0);
  const [ballsOn, setBallsOn] = useState(false);
  const [ballPrice, setBallPrice] = useState(0);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (clubCourt) {
      setRacketsOn(clubCourt.equipment.rackets.available);
      setRacketPrice(clubCourt.equipment.rackets.hirePrice);
      setBallsOn(clubCourt.equipment.balls.available);
      setBallPrice(clubCourt.equipment.balls.buyPrice);
    }
  }, [clubCourt]);

  const apply = () => {
    updateClubEquipment(activeClubId, {
      rackets: { available: racketsOn, hirePrice: Number(racketPrice) || 0 },
      balls: { available: ballsOn, buyPrice: Number(ballPrice) || 0 },
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <h1 className="padelr-heading text-3xl md:text-4xl">Equipment</h1>
      <p className="mt-1 text-sm" style={{ color: "var(--padelr-muted)" }}>
        Toggle gear on/off for {club?.name}. Players see this immediately on court pages.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <section className="padelr-card p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest" style={{ color: "var(--padelr-muted)" }}>
                Racket hire
              </div>
              <div className="padelr-heading mt-1 text-xl">
                {racketsOn ? "On offer" : "Not offered"}
              </div>
            </div>
            <button
              className="padelr-toggle"
              data-on={racketsOn ? "true" : "false"}
              onClick={() => setRacketsOn((v) => !v)}
              aria-label="Toggle racket hire"
            />
          </div>
          <label className="mt-5 block">
            <span className="text-xs uppercase tracking-widest" style={{ color: "var(--padelr-muted)" }}>
              Hire price (£)
            </span>
            <input
              type="number"
              className="padelr-input mt-1"
              value={racketPrice}
              onChange={(e) => setRacketPrice(Number(e.target.value))}
              disabled={!racketsOn}
            />
          </label>
        </section>

        <section className="padelr-card p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest" style={{ color: "var(--padelr-muted)" }}>
                Ball sales
              </div>
              <div className="padelr-heading mt-1 text-xl">
                {ballsOn ? "Available" : "Not sold"}
              </div>
            </div>
            <button
              className="padelr-toggle"
              data-on={ballsOn ? "true" : "false"}
              onClick={() => setBallsOn((v) => !v)}
              aria-label="Toggle ball sales"
            />
          </div>
          <label className="mt-5 block">
            <span className="text-xs uppercase tracking-widest" style={{ color: "var(--padelr-muted)" }}>
              Tube price (£)
            </span>
            <input
              type="number"
              className="padelr-input mt-1"
              value={ballPrice}
              onChange={(e) => setBallPrice(Number(e.target.value))}
              disabled={!ballsOn}
            />
          </label>
        </section>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button className="padelr-btn-primary" onClick={apply}>
          Apply to all courts
        </button>
        {saved ? (
          <span className="padelr-pill" style={{ background: "rgba(255,255,255,0.18)", color: "var(--padelr-lime)" }}>
            Live on player view ✓
          </span>
        ) : null}
      </div>
    </div>
  );
}
