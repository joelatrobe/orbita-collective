import type { Metadata } from "next";
import { PadelrProvider } from "./store/PadelrStore";
import "./padelr.css";

export const metadata: Metadata = {
  title: "Padelr — Find courts, book fast",
  description:
    "Padelr is the fastest way to find padel courts, book time slots, and manage your club.",
};

export default function PadelrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="padelr-scope">
      <PadelrProvider>{children}</PadelrProvider>
    </div>
  );
}
