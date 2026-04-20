import type { Equipment } from "../data/types";

export function EquipmentBadges({ equipment }: { equipment: Equipment }) {
  const rackets = equipment.rackets.available;
  const balls = equipment.balls.available;

  return (
    <div className="flex flex-wrap gap-2">
      <span
        className="padelr-pill"
        style={{
          background: rackets ? "rgba(212,255,61,0.12)" : "rgba(255,255,255,0.05)",
          color: rackets ? "var(--padelr-lime)" : "var(--padelr-muted)",
        }}
      >
        <span aria-hidden>🎾</span>
        {rackets ? `Rackets £${equipment.rackets.hirePrice}` : "No rackets"}
      </span>
      <span
        className="padelr-pill"
        style={{
          background: balls ? "rgba(212,255,61,0.12)" : "rgba(255,255,255,0.05)",
          color: balls ? "var(--padelr-lime)" : "var(--padelr-muted)",
        }}
      >
        <span aria-hidden>●</span>
        {balls ? `Balls £${equipment.balls.buyPrice}` : "No balls"}
      </span>
    </div>
  );
}
