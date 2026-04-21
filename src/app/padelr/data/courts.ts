import type { Court, Slot } from "./types";

const buildSlots = (open: number, close: number, bookedHours: number[]): Slot[] => {
  const list: Slot[] = [];
  for (let h = open; h < close; h += 1) {
    const time = `${String(h).padStart(2, "0")}:00`;
    const booked = bookedHours.includes(h);
    list.push({ time, booked, bookingRef: booked ? `PDL-EXT-${h}` : undefined });
  }
  return list;
};

export const courts: Court[] = [
  {
    id: "court-shoreditch-1",
    name: "Shoreditch Rooftop Court 1",
    address: "12 Curtain Road, Shoreditch",
    city: "London",
    lat: 51.5241,
    lng: -0.0808,
    pricePerHour: 32,
    rating: 4.8,
    equipment: {
      rackets: { available: true, hirePrice: 6 },
      balls: { available: true, buyPrice: 5 },
    },
    openingHours: { open: "07:00", close: "22:00" },
    slots: {
      today: buildSlots(7, 22, [9, 12, 18, 19]),
      tomorrow: buildSlots(7, 22, [8, 17, 20]),
    },
    clubOwnerId: "club-shoreditch",
    scene: "rooftop-dusk",
  },
  {
    id: "court-shoreditch-2",
    name: "Shoreditch Rooftop Court 2",
    address: "12 Curtain Road, Shoreditch",
    city: "London",
    lat: 51.5241,
    lng: -0.0808,
    pricePerHour: 28,
    rating: 4.6,
    equipment: {
      rackets: { available: true, hirePrice: 6 },
      balls: { available: false, buyPrice: 0 },
    },
    openingHours: { open: "07:00", close: "22:00" },
    slots: {
      today: buildSlots(7, 22, [10, 11, 19]),
      tomorrow: buildSlots(7, 22, [9, 12, 18]),
    },
    clubOwnerId: "club-shoreditch",
    scene: "rooftop-night",
  },
  {
    id: "court-battersea-1",
    name: "Battersea Indoor Court A",
    address: "Battersea Power Station, SW11",
    city: "London",
    lat: 51.4816,
    lng: -0.145,
    pricePerHour: 38,
    rating: 4.9,
    equipment: {
      rackets: { available: true, hirePrice: 8 },
      balls: { available: true, buyPrice: 6 },
    },
    openingHours: { open: "06:00", close: "23:00" },
    slots: {
      today: buildSlots(6, 23, [7, 8, 18, 19, 20]),
      tomorrow: buildSlots(6, 23, [9, 13, 19]),
    },
    clubOwnerId: "club-battersea",
    scene: "indoor-bright",
  },
  {
    id: "court-retiro-1",
    name: "Pista Retiro Norte",
    address: "Calle Alcalá 85, Retiro",
    city: "Madrid",
    lat: 40.4168,
    lng: -3.6839,
    pricePerHour: 22,
    rating: 4.7,
    equipment: {
      rackets: { available: false, hirePrice: 0 },
      balls: { available: true, buyPrice: 4 },
    },
    openingHours: { open: "08:00", close: "22:00" },
    slots: {
      today: buildSlots(8, 22, [10, 17, 18]),
      tomorrow: buildSlots(8, 22, [9, 11, 20]),
    },
    clubOwnerId: "club-retiro",
    scene: "golden-hour",
  },
  {
    id: "court-chamartin-1",
    name: "Chamartín Centre Court",
    address: "Plaza de Castilla 3",
    city: "Madrid",
    lat: 40.4668,
    lng: -3.6875,
    pricePerHour: 26,
    rating: 4.5,
    equipment: {
      rackets: { available: true, hirePrice: 5 },
      balls: { available: true, buyPrice: 4 },
    },
    openingHours: { open: "07:00", close: "23:00" },
    slots: {
      today: buildSlots(7, 23, [8, 14, 19, 21]),
      tomorrow: buildSlots(7, 23, [10, 16, 19]),
    },
    clubOwnerId: "club-chamartin",
    scene: "sunlit-day",
  },
  {
    id: "court-eixample-1",
    name: "Eixample Glass Court",
    address: "Carrer de Mallorca 220",
    city: "Barcelona",
    lat: 41.3925,
    lng: 2.1611,
    pricePerHour: 30,
    rating: 4.8,
    equipment: {
      rackets: { available: true, hirePrice: 7 },
      balls: { available: true, buyPrice: 5 },
    },
    openingHours: { open: "07:00", close: "22:00" },
    slots: {
      today: buildSlots(7, 22, [9, 11, 18, 20]),
      tomorrow: buildSlots(7, 22, [8, 15, 19]),
    },
    clubOwnerId: "club-eixample",
    scene: "morning-glass",
  },
];
