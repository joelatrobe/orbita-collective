export type Slot = {
  time: string;
  booked: boolean;
  bookingRef?: string;
};

export type Equipment = {
  rackets: { available: boolean; hirePrice: number };
  balls: { available: boolean; buyPrice: number };
};

export type Court = {
  id: string;
  name: string;
  address: string;
  city: string;
  lat: number;
  lng: number;
  pricePerHour: number;
  rating: number;
  equipment: Equipment;
  openingHours: { open: string; close: string };
  slots: { today: Slot[]; tomorrow: Slot[] };
  clubOwnerId: string;
  photoGradient: string;
};

export type Club = {
  id: string;
  name: string;
  ownerName: string;
  city: string;
};

export type Joiner = {
  name: string;
  joinedAt: string;
};

export type Booking = {
  id: string;
  reference: string;
  courtId: string;
  date: "today" | "tomorrow";
  time: string;
  players: 2 | 4;
  partySize: number;
  openToJoin: boolean;
  joiners: Joiner[];
  totalPrice: number;
  status: "confirmed" | "cancelled";
  playerName: string;
  createdAt: string;
};
