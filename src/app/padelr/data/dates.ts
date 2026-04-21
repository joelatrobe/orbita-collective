import type { Court, Slot } from "./types";

const TZ_OFFSET_KEY = "Europe/London";

export type DateKey = string; // "today" | "tomorrow" | ISO YYYY-MM-DD

export const toIso = (d: Date): string => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
};

export const today = (): Date => new Date();

export const addDays = (d: Date, n: number): Date => {
  const copy = new Date(d);
  copy.setDate(copy.getDate() + n);
  return copy;
};

export const resolveDateKey = (key: DateKey): string => {
  if (key === "today") return toIso(today());
  if (key === "tomorrow") return toIso(addDays(today(), 1));
  return key;
};

export const formatFriendly = (key: DateKey): string => {
  if (key === "today") return "Today";
  if (key === "tomorrow") return "Tomorrow";
  const [y, m, d] = key.split("-").map(Number);
  if (!y || !m || !d) return key;
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
};

const hourToTime = (h: number) => `${String(h).padStart(2, "0")}:00`;

export const generateEmptySlots = (openingHours: Court["openingHours"]): Slot[] => {
  const open = parseInt(openingHours.open.split(":")[0] ?? "0", 10);
  const close = parseInt(openingHours.close.split(":")[0] ?? "0", 10);
  const list: Slot[] = [];
  for (let h = open; h < close; h += 1) {
    list.push({ time: hourToTime(h), booked: false });
  }
  return list;
};

export const getSlotsFor = (court: Court, date: DateKey): Slot[] => {
  if (court.slots[date]) return court.slots[date];
  const iso = resolveDateKey(date);
  if (court.slots[iso]) return court.slots[iso];
  return generateEmptySlots(court.openingHours);
};

// For the "Pick a date" flow, offer the next 14 days.
export const upcomingDates = (days = 14): string[] => {
  const out: string[] = [];
  for (let i = 0; i < days; i += 1) {
    out.push(toIso(addDays(today(), i)));
  }
  return out;
};

export { TZ_OFFSET_KEY };
