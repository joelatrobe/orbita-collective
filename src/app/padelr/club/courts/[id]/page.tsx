"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { usePadelr } from "../../../store/PadelrStore";

export default function EditCourtPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { courts, updateCourt } = usePadelr();
  const court = courts.find((c) => c.id === id);
  const router = useRouter();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [open, setOpen] = useState("07:00");
  const [close, setClose] = useState("22:00");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (court) {
      setName(court.name);
      setPrice(court.pricePerHour);
      setOpen(court.openingHours.open);
      setClose(court.openingHours.close);
    }
  }, [court]);

  if (!court) {
    return (
      <div className="padelr-card p-6">
        <p className="text-sm">Court not found.</p>
        <Link href="/padelr/club/courts" className="padelr-btn-primary mt-4 inline-block">
          Back to courts
        </Link>
      </div>
    );
  }

  const handleSave = () => {
    updateCourt(court.id, {
      name,
      pricePerHour: Number(price) || 0,
      openingHours: { open, close },
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <Link href="/padelr/club/courts" className="mb-4 inline-flex text-sm" style={{ color: "var(--padelr-muted)" }}>
        ← All courts
      </Link>
      <h1 className="padelr-heading text-3xl">Edit court</h1>

      <div className="mt-6 space-y-4">
        <Field label="Court name">
          <input className="padelr-input" value={name} onChange={(e) => setName(e.target.value)} />
        </Field>
        <Field label="Price per hour (£)">
          <input
            type="number"
            className="padelr-input"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Opens">
            <input
              type="time"
              className="padelr-input"
              value={open}
              onChange={(e) => setOpen(e.target.value)}
            />
          </Field>
          <Field label="Closes">
            <input
              type="time"
              className="padelr-input"
              value={close}
              onChange={(e) => setClose(e.target.value)}
            />
          </Field>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button className="padelr-btn-primary" onClick={handleSave}>
          Save changes
        </button>
        <button
          className="padelr-btn-ghost"
          onClick={() => router.push("/padelr/club/courts")}
        >
          Back
        </button>
        {saved ? (
          <span className="padelr-pill" style={{ background: "rgba(212,255,61,0.15)", color: "var(--padelr-lime)" }}>
            Saved ✓
          </span>
        ) : null}
      </div>

      <p className="mt-6 text-xs" style={{ color: "var(--padelr-muted)" }}>
        Tip: equipment settings live on the Equipment page and apply to every court in this club.
      </p>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs uppercase tracking-widest" style={{ color: "var(--padelr-muted)" }}>
        {label}
      </span>
      {children}
    </label>
  );
}
