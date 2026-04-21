export type Slot = {
  time: string;
  booked: boolean;
  bookingRef?: string;
};

export type Equipment = {
  rackets: { available: boolean; hirePrice: number };
  balls: { available: boolean; buyPrice: number };
};

export type CourtScene =
  | "rooftop-dusk"
  | "rooftop-night"
  | "indoor-bright"
  | "sunlit-day"
  | "morning-glass"
  | "golden-hour";

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
  slots: Record<string, Slot[]>;
  clubOwnerId: string;
  scene: CourtScene;
  photoUrl?: string;
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
  date: string; // "today" | "tomorrow" | YYYY-MM-DD
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
