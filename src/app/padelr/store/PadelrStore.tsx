"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { courts as seedCourts } from "../data/courts";
import { clubs as seedClubs } from "../data/clubs";
import { seedBookings } from "../data/bookings";
import { generateEmptySlots } from "../data/dates";
import type { Booking, Court, Slot } from "../data/types";

type Mode = "player" | "club" | null;

export type CreateBookingInput = {
  courtId: string;
  date: string; // "today" | "tomorrow" | YYYY-MM-DD
  time: string;
  players: 2 | 4;
  partySize: number;
  openToJoin: boolean;
  totalPrice: number;
};

type StoreShape = {
  mode: Mode;
  setMode: (mode: Mode) => void;
  activeClubId: string;
  setActiveClubId: (id: string) => void;
  currentPlayer: string;
  courts: Court[];
  bookings: Booking[];
  clubs: typeof seedClubs;
  updateCourt: (id: string, patch: Partial<Court>) => void;
  updateCourtEquipment: (
    courtId: string,
    patch: Partial<Court["equipment"]>,
  ) => void;
  updateClubEquipment: (
    clubId: string,
    patch: Partial<Court["equipment"]>,
  ) => void;
  createBooking: (input: CreateBookingInput) => Booking;
  cancelBooking: (id: string) => void;
  joinBooking: (id: string) => void;
  leaveBooking: (id: string) => void;
};

const Ctx = createContext<StoreShape | null>(null);

const generateReference = () => {
  const n = Math.floor(1000 + Math.random() * 9000);
  return `PDL-${n}`;
};

const markSlot = (
  slots: Slot[],
  time: string,
  booked: boolean,
  ref?: string,
): Slot[] =>
  slots.map((s) =>
    s.time === time ? { ...s, booked, bookingRef: booked ? ref : undefined } : s,
  );

export function spotsLeft(b: Booking): number {
  return Math.max(0, b.players - b.partySize - b.joiners.length);
}

const ensureDateBucket = (court: Court, date: string): Court => {
  if (court.slots[date]) return court;
  return {
    ...court,
    slots: {
      ...court.slots,
      [date]: generateEmptySlots(court.openingHours),
    },
  };
};

export function PadelrProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>(null);
  const [activeClubId, setActiveClubId] = useState<string>(seedClubs[0].id);
  const [courts, setCourts] = useState<Court[]>(seedCourts);
  const [bookings, setBookings] = useState<Booking[]>(seedBookings);
  const currentPlayer = "You";

  const updateCourt = useCallback((id: string, patch: Partial<Court>) => {
    setCourts((prev) => prev.map((c) => (c.id === id ? { ...c, ...patch } : c)));
  }, []);

  const updateCourtEquipment = useCallback(
    (courtId: string, patch: Partial<Court["equipment"]>) => {
      setCourts((prev) =>
        prev.map((c) =>
          c.id === courtId
            ? { ...c, equipment: { ...c.equipment, ...patch } }
            : c,
        ),
      );
    },
    [],
  );

  const updateClubEquipment = useCallback(
    (clubId: string, patch: Partial<Court["equipment"]>) => {
      setCourts((prev) =>
        prev.map((c) =>
          c.clubOwnerId === clubId
            ? { ...c, equipment: { ...c.equipment, ...patch } }
            : c,
        ),
      );
    },
    [],
  );

  const createBooking: StoreShape["createBooking"] = useCallback((input) => {
    const reference = generateReference();
    const booking: Booking = {
      id: `bk-${Date.now()}`,
      reference,
      courtId: input.courtId,
      date: input.date,
      time: input.time,
      players: input.players,
      partySize: Math.min(input.partySize, input.players),
      openToJoin: input.openToJoin && input.partySize < input.players,
      joiners: [],
      totalPrice: input.totalPrice,
      status: "confirmed",
      playerName: currentPlayer,
      createdAt: new Date().toISOString(),
    };
    setBookings((prev) => [booking, ...prev]);
    setCourts((prev) =>
      prev.map((c) => {
        if (c.id !== input.courtId) return c;
        const withBucket = ensureDateBucket(c, input.date);
        return {
          ...withBucket,
          slots: {
            ...withBucket.slots,
            [input.date]: markSlot(
              withBucket.slots[input.date],
              input.time,
              true,
              reference,
            ),
          },
        };
      }),
    );
    return booking;
  }, []);

  const cancelBooking = useCallback((id: string) => {
    setBookings((prev) => {
      const target = prev.find((b) => b.id === id);
      if (target) {
        setCourts((cPrev) =>
          cPrev.map((c) => {
            if (c.id !== target.courtId) return c;
            const bucket = c.slots[target.date];
            if (!bucket) return c;
            return {
              ...c,
              slots: {
                ...c.slots,
                [target.date]: markSlot(bucket, target.time, false),
              },
            };
          }),
        );
      }
      return prev.map((b) =>
        b.id === id ? { ...b, status: "cancelled" as const, openToJoin: false } : b,
      );
    });
  }, []);

  const joinBooking = useCallback((id: string) => {
    setBookings((prev) =>
      prev.map((b) => {
        if (b.id !== id) return b;
        if (!b.openToJoin) return b;
        if (b.joiners.some((j) => j.name === currentPlayer)) return b;
        if (spotsLeft(b) <= 0) return b;
        const nextJoiners = [
          ...b.joiners,
          { name: currentPlayer, joinedAt: new Date().toISOString() },
        ];
        const full = b.players - b.partySize - nextJoiners.length <= 0;
        return {
          ...b,
          joiners: nextJoiners,
          openToJoin: !full,
        };
      }),
    );
  }, []);

  const leaveBooking = useCallback((id: string) => {
    setBookings((prev) =>
      prev.map((b) => {
        if (b.id !== id) return b;
        const nextJoiners = b.joiners.filter((j) => j.name !== currentPlayer);
        if (nextJoiners.length === b.joiners.length) return b;
        return {
          ...b,
          joiners: nextJoiners,
          openToJoin: b.status === "confirmed" ? true : b.openToJoin,
        };
      }),
    );
  }, []);

  const value = useMemo<StoreShape>(
    () => ({
      mode,
      setMode,
      activeClubId,
      setActiveClubId,
      currentPlayer,
      courts,
      bookings,
      clubs: seedClubs,
      updateCourt,
      updateCourtEquipment,
      updateClubEquipment,
      createBooking,
      cancelBooking,
      joinBooking,
      leaveBooking,
    }),
    [
      mode,
      activeClubId,
      courts,
      bookings,
      updateCourt,
      updateCourtEquipment,
      updateClubEquipment,
      createBooking,
      cancelBooking,
      joinBooking,
      leaveBooking,
    ],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function usePadelr(): StoreShape {
  const ctx = useContext(Ctx);
  if (!ctx) {
    throw new Error("usePadelr must be used inside <PadelrProvider>");
  }
  return ctx;
}
