"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePadelr } from "./store/PadelrStore";

export default function PadelrHome() {
  const { setMode } = usePadelr();
  const router = useRouter();

  const choose = (m: "player" | "club") => {
    setMode(m);
    router.push(m === "player" ? "/padelr/player" : "/padelr/club");
  };

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-12">
      <div className="mb-10">
        <div
          className="padelr-pill mb-6"
          style={{ background: "rgba(212,255,61,0.12)", color: "var(--padelr-lime)" }}
        >
          MVP · Mock data
        </div>
        <h1 className="padelr-heading text-5xl leading-tight md:text-7xl">
          Padelr.
        </h1>
        <p className="mt-3 max-w-xl text-lg" style={{ color: "var(--padelr-muted)" }}>
          Find courts. Book fast. Run your club. The fastest way to live on the glass.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <button
          className="padelr-card group relative overflow-hidden p-8 text-left transition-transform hover:-translate-y-1"
          onClick={() => choose("player")}
        >
          <div
            aria-hidden
            className="absolute -right-12 -top-12 h-48 w-48 rounded-full opacity-30 blur-2xl transition-opacity group-hover:opacity-50"
            style={{ background: "var(--padelr-lime)" }}
          />
          <div className="relative">
            <div className="text-xs uppercase tracking-[0.2em]" style={{ color: "var(--padelr-lime)" }}>
              Play
            </div>
            <h2 className="padelr-heading mt-2 text-3xl">I&rsquo;m a player</h2>
            <p className="mt-2 text-sm" style={{ color: "var(--padelr-muted)" }}>
              Discover courts near you, check gear, book in 3 taps.
            </p>
            <div
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: "var(--padelr-lime)" }}
            >
              Enter player app <span aria-hidden>→</span>
            </div>
          </div>
        </button>

        <button
          className="padelr-card group relative overflow-hidden p-8 text-left transition-transform hover:-translate-y-1"
          onClick={() => choose("club")}
        >
          <div
            aria-hidden
            className="absolute -right-12 -top-12 h-48 w-48 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
            style={{ background: "#7cd5ff" }}
          />
          <div className="relative">
            <div className="text-xs uppercase tracking-[0.2em]" style={{ color: "#7cd5ff" }}>
              Run
            </div>
            <h2 className="padelr-heading mt-2 text-3xl">I&rsquo;m a club</h2>
            <p className="mt-2 text-sm" style={{ color: "var(--padelr-muted)" }}>
              Manage courts, prices, gear, bookings — all from one place.
            </p>
            <div
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: "#7cd5ff" }}
            >
              Enter club dashboard <span aria-hidden>→</span>
            </div>
          </div>
        </button>
      </div>

      <div className="mt-10 text-xs" style={{ color: "var(--padelr-muted)" }}>
        <Link href="/" className="underline-offset-4 hover:underline">
          ← Back to Orbita
        </Link>
      </div>
    </main>
  );
}
