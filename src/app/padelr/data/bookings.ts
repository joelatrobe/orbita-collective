import type { Booking } from "./types";

export const seedBookings: Booking[] = [
  {
    id: "bk-1",
    reference: "PDL-4821",
    courtId: "court-shoreditch-1",
    date: "today",
    time: "09:00",
    players: 4,
    totalPrice: 32,
    status: "confirmed",
    playerName: "You",
    createdAt: "2026-04-19T20:12:00Z",
  },
  {
    id: "bk-2",
    reference: "PDL-4822",
    courtId: "court-battersea-1",
    date: "tomorrow",
    time: "19:00",
    players: 4,
    totalPrice: 38,
    status: "confirmed",
    playerName: "You",
    createdAt: "2026-04-18T10:02:00Z",
  },
];
