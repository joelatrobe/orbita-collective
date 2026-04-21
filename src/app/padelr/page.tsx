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
      <div className="mb-6">
        <div
          className="padelr-pill mb-6"
          style={{ background: "rgba(255,255,255,0.14)", color: "var(--padelr-line)" }}
        >
          MVP · Mock data
        </div>
        <h1 className="padelr-heading text-5xl leading-tight md:text-7xl">Padelr.</h1>
        <div className="mt-4 flex items-center gap-4">
          <div className="padelr-baseline-short" aria-hidden />
          <p className="text-sm uppercase tracking-[0.3em]" style={{ color: "var(--padelr-ink-soft)" }}>
            On the glass
          </p>
        </div>
        <p className="mt-4 max-w-xl text-lg" style={{ color: "var(--padelr-ink-soft)" }}>
          Find courts. Book fast. Run your club. The fastest way to live on the glass.
        </p>
      </div>

      <div className="padelr-hero-divider" aria-hidden>
        <div className="line" />
        <div className="dot" />
        <div className="line" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <button
          className="padelr-card padelr-lined-top group relative overflow-hidden p-8 text-left transition-transform hover:-translate-y-1"
          onClick={() => choose("player")}
        >
          <div
            aria-hidden
            className="absolute -right-12 -top-12 h-48 w-48 rounded-full opacity-30 blur-2xl transition-opacity group-hover:opacity-50"
            style={{ background: "var(--padelr-line)" }}
          />
          <div className="relative">
            <div className="text-xs uppercase tracking-[0.2em]" style={{ color: "var(--padelr-line)" }}>
              Play
            </div>
            <h2 className="padelr-heading mt-2 text-3xl">I&rsquo;m a player</h2>
            <p className="mt-2 text-sm" style={{ color: "var(--padelr-ink-soft)" }}>
              Discover courts near you, check gear, book in 3 taps. Jump into open games.
            </p>
            <div
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: "var(--padelr-line)" }}
            >
              Enter player app <span aria-hidden>→</span>
            </div>
          </div>
        </button>

        <button
          className="padelr-card padelr-lined-top group relative overflow-hidden p-8 text-left transition-transform hover:-translate-y-1"
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
            <p className="mt-2 text-sm" style={{ color: "var(--padelr-ink-soft)" }}>
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

      <div className="mt-10 text-xs" style={{ color: "var(--padelr-ink-muted)" }}>
        <Link href="/" className="underline-offset-4 hover:underline">
          ← Back to Orbita
        </Link>
      </div>
    </main>
  );
}
