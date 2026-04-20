"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/padelr/player", label: "Discover" },
  { href: "/padelr/player/bookings", label: "Bookings" },
];

export function PlayerNav() {
  const pathname = usePathname();
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t md:hidden"
      style={{ background: "rgba(11,31,42,0.92)", borderColor: "var(--padelr-line)", backdropFilter: "blur(12px)" }}
    >
      <div className="mx-auto flex max-w-md items-center justify-around px-4 py-3">
        {items.map((i) => {
          const active = pathname === i.href || (i.href !== "/padelr/player" && pathname?.startsWith(i.href));
          return (
            <Link
              key={i.href}
              href={i.href}
              className="padelr-pill"
              style={{
                background: active ? "var(--padelr-lime)" : "transparent",
                color: active ? "var(--padelr-navy)" : "var(--padelr-ink)",
                fontWeight: active ? 600 : 500,
              }}
            >
              {i.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
