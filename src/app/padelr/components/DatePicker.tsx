"use client";

import { useState, useEffect } from "react";
import { formatFriendly, resolveDateKey, toIso, today } from "../data/dates";

export function DatePicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [customOpen, setCustomOpen] = useState(false);
  const isToday = value === "today";
  const isTomorrow = value === "tomorrow";
  const isCustom = !isToday && !isTomorrow;
  const min = toIso(today());

  useEffect(() => {
    if (isCustom) setCustomOpen(true);
  }, [isCustom]);

  const handleCustomChange = (v: string) => {
    if (!v) return;
    const t = toIso(today());
    if (v === t) {
      onChange("today");
      setCustomOpen(false);
      return;
    }
    const tom = resolveDateKey("tomorrow");
    if (v === tom) {
      onChange("tomorrow");
      setCustomOpen(false);
      return;
    }
    onChange(v);
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        className="padelr-slot"
        data-state={isToday ? "selected" : undefined}
        style={{ padding: "10px 16px" }}
        onClick={() => {
          onChange("today");
          setCustomOpen(false);
        }}
      >
        Today
      </button>
      <button
        className="padelr-slot"
        data-state={isTomorrow ? "selected" : undefined}
        style={{ padding: "10px 16px" }}
        onClick={() => {
          onChange("tomorrow");
          setCustomOpen(false);
        }}
      >
        Tomorrow
      </button>
      <button
        className="padelr-slot"
        data-state={isCustom || customOpen ? "selected" : undefined}
        style={{ padding: "10px 16px" }}
        onClick={() => setCustomOpen((v) => !v)}
        aria-expanded={customOpen}
      >
        {isCustom ? formatFriendly(value) : "Pick a date"}
      </button>

      {customOpen ? (
        <input
          type="date"
          className="padelr-input"
          style={{ width: "auto", padding: "10px 14px" }}
          min={min}
          value={isCustom ? value : ""}
          onChange={(e) => handleCustomChange(e.target.value)}
        />
      ) : null}
    </div>
  );
}
