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
import type { Booking, Court, Slot } from "../data/types";

type Mode = "player" | "club" | null;

type StoreShape = {
  mode: Mode;
  setMode: (mode: Mode) => void;
  activeClubId: string;
  setActiveClubId: (id: string) => void;
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
  createBooking: (input: {
    courtId: string;
    date: "today" | "tomorrow";
    time: string;
    players: 2 | 4;
    totalPrice: number;
  }) => Booking;
  cancelBooking: (id: string) => void;
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

export function PadelrProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>(null);
  const [activeClubId, setActiveClubId] = useState<string>(seedClubs[0].id);
  const [courts, setCourts] = useState<Court[]>(seedCourts);
  const [bookings, setBookings] = useState<Booking[]>(seedBookings);

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
      totalPrice: input.totalPrice,
      status: "confirmed",
      playerName: "You",
      createdAt: new Date().toISOString(),
    };
    setBookings((prev) => [booking, ...prev]);
    setCourts((prev) =>
      prev.map((c) =>
        c.id === input.courtId
          ? {
              ...c,
              slots: {
                ...c.slots,
                [input.date]: markSlot(
                  c.slots[input.date],
                  input.time,
                  true,
                  reference,
                ),
              },
            }
          : c,
      ),
    );
    return booking;
  }, []);

  const cancelBooking = useCallback(
    (id: string) => {
      setBookings((prev) => {
        const target = prev.find((b) => b.id === id);
        if (target) {
          setCourts((cPrev) =>
            cPrev.map((c) =>
              c.id === target.courtId
                ? {
                    ...c,
                    slots: {
                      ...c.slots,
                      [target.date]: markSlot(c.slots[target.date], target.time, false),
                    },
                  }
                : c,
            ),
          );
        }
        return prev.map((b) =>
          b.id === id ? { ...b, status: "cancelled" as const } : b,
        );
      });
    },
    [],
  );

  const value = useMemo<StoreShape>(
    () => ({
      mode,
      setMode,
      activeClubId,
      setActiveClubId,
      courts,
      bookings,
      clubs: seedClubs,
      updateCourt,
      updateCourtEquipment,
      updateClubEquipment,
      createBooking,
      cancelBooking,
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
