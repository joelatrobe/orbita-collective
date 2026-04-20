"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePadelr } from "../store/PadelrStore";

export function TopBar({ title }: { title?: string }) {
  const pathname = usePathname();
  const { mode, setMode, clubs, activeClubId, setActiveClubId } = usePadelr();

  const isClub = pathname?.startsWith("/padelr/club");

  return (
    <header
      className="sticky top-0 z-40 border-b"
      style={{ borderColor: "var(--padelr-line)", background: "rgba(11,31,42,0.85)", backdropFilter: "blur(12px)" }}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/padelr" className="flex items-center gap-2">
          <span
            className="inline-flex h-7 w-7 items-center justify-center rounded-lg"
            style={{ background: "var(--padelr-lime)" }}
            aria-hidden
          >
            <span className="text-sm font-black" style={{ color: "var(--padelr-navy)" }}>P</span>
          </span>
          <span className="padelr-heading text-lg">Padelr</span>
          {title ? (
            <span className="ml-2 hidden text-sm md:inline" style={{ color: "var(--padelr-muted)" }}>
              / {title}
            </span>
          ) : null}
        </Link>

        <div className="flex items-center gap-2">
          {isClub ? (
            <select
              value={activeClubId}
              onChange={(e) => setActiveClubId(e.target.value)}
              className="padelr-input hidden md:block"
              style={{ padding: "8px 12px", fontSize: 13 }}
              aria-label="Switch club"
            >
              {clubs.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          ) : null}

          <div
            className="padelr-pill"
            style={{ background: "rgba(212,255,61,0.12)", color: "var(--padelr-lime)" }}
          >
            {mode === "club" ? "Club mode" : mode === "player" ? "Player mode" : "Guest"}
          </div>

          <button
            className="padelr-btn-ghost"
            style={{ padding: "8px 14px", fontSize: 13 }}
            onClick={() => {
              setMode(null);
              window.location.href = "/padelr";
            }}
          >
            Switch
          </button>
        </div>
      </div>
    </header>
  );
}
