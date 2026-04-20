"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/padelr/club", label: "Dashboard" },
  { href: "/padelr/club/courts", label: "Courts" },
  { href: "/padelr/club/equipment", label: "Equipment" },
  { href: "/padelr/club/calendar", label: "Calendar" },
];

export function ClubNav() {
  const pathname = usePathname();
  return (
    <aside className="md:w-56 md:shrink-0">
      <nav className="padelr-card flex gap-2 overflow-x-auto p-2 md:flex-col md:gap-1 md:p-3">
        {items.map((i) => {
          const active = pathname === i.href || (i.href !== "/padelr/club" && pathname?.startsWith(i.href));
          return (
            <Link
              key={i.href}
              href={i.href}
              className="rounded-lg px-3 py-2 text-sm transition-colors"
              style={{
                background: active ? "var(--padelr-lime)" : "transparent",
                color: active ? "var(--padelr-navy)" : "var(--padelr-ink)",
                fontWeight: active ? 600 : 500,
                whiteSpace: "nowrap",
              }}
            >
              {i.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
