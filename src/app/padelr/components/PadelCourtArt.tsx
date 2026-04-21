"use client";

export type CourtScene =
  | "rooftop-dusk"
  | "rooftop-night"
  | "indoor-bright"
  | "sunlit-day"
  | "morning-glass"
  | "golden-hour";

type Palette = {
  sky: [string, string];
  surface: string;
  surfaceShade: string;
  glassTint: string;
  glow: string;
  glowPos: { cx: string; cy: string };
  lightOpacity: number;
  name: string;
};

const PALETTES: Record<CourtScene, Palette> = {
  "rooftop-dusk": {
    sky: ["#f6b26b", "#1f4a78"],
    surface: "#1f6fb8",
    surfaceShade: "#164b82",
    glassTint: "rgba(255, 210, 160, 0.25)",
    glow: "#ffb47a",
    glowPos: { cx: "75%", cy: "15%" },
    lightOpacity: 0.35,
    name: "Rooftop dusk",
  },
  "rooftop-night": {
    sky: ["#1a3455", "#0a1a30"],
    surface: "#1e6fb8",
    surfaceShade: "#133c6b",
    glassTint: "rgba(120, 190, 255, 0.12)",
    glow: "#e6f4ff",
    glowPos: { cx: "50%", cy: "0%" },
    lightOpacity: 0.2,
    name: "Floodlit night",
  },
  "indoor-bright": {
    sky: ["#dfe7f0", "#b9cadd"],
    surface: "#217ac8",
    surfaceShade: "#175c9a",
    glassTint: "rgba(255, 255, 255, 0.18)",
    glow: "#ffffff",
    glowPos: { cx: "50%", cy: "5%" },
    lightOpacity: 0.55,
    name: "Indoor bright",
  },
  "sunlit-day": {
    sky: ["#9fd1ff", "#3387c9"],
    surface: "#1f6fb8",
    surfaceShade: "#164f86",
    glassTint: "rgba(255, 255, 255, 0.2)",
    glow: "#fff7d6",
    glowPos: { cx: "85%", cy: "10%" },
    lightOpacity: 0.4,
    name: "Sunlit day",
  },
  "morning-glass": {
    sky: ["#cfe9ff", "#5aa3d9"],
    surface: "#2281c9",
    surfaceShade: "#18619b",
    glassTint: "rgba(255, 255, 255, 0.25)",
    glow: "#ffffff",
    glowPos: { cx: "20%", cy: "5%" },
    lightOpacity: 0.45,
    name: "Morning glass",
  },
  "golden-hour": {
    sky: ["#ffb375", "#b85a2a"],
    surface: "#1c70b5",
    surfaceShade: "#133f6a"
,
    glassTint: "rgba(255, 185, 120, 0.22)",
    glow: "#ffd89a",
    glowPos: { cx: "80%", cy: "18%" },
    lightOpacity: 0.45,
    name: "Golden hour",
  },
};

export function PadelCourtArt({
  scene = "sunlit-day",
  className = "",
  photoUrl,
  ariaLabel,
}: {
  scene?: CourtScene;
  className?: string;
  photoUrl?: string;
  ariaLabel?: string;
}) {
  const id = `padel-${scene}`;
  const p = PALETTES[scene] ?? PALETTES["sunlit-day"];

  if (photoUrl) {
    return (
      <div
        className={`relative overflow-hidden ${className}`}
        role="img"
        aria-label={ariaLabel ?? `Padel court — ${p.name}`}
      >
        <img
          src={photoUrl}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      role="img"
      aria-label={ariaLabel ?? `Padel court — ${p.name}`}
    >
      <svg
        viewBox="0 0 800 500"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={p.sky[0]} />
            <stop offset="1" stopColor={p.sky[1]} />
          </linearGradient>
          <radialGradient
            id={`${id}-glow`}
            cx={p.glowPos.cx}
            cy={p.glowPos.cy}
            r="55%"
          >
            <stop offset="0" stopColor={p.glow} stopOpacity={p.lightOpacity} />
            <stop offset="1" stopColor={p.glow} stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`${id}-surface`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={p.surface} />
            <stop offset="1" stopColor={p.surfaceShade} />
          </linearGradient>
          <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.08" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Sky / background */}
        <rect width="800" height="500" fill={`url(#${id}-sky)`} />
        <rect width="800" height="500" fill={`url(#${id}-glow)`} />

        {/* Distant back glass (atmosphere) */}
        <rect x="110" y="70" width="580" height="42" fill={p.glassTint} />
        <rect x="110" y="70" width="580" height="42" fill={`url(#${id}-glass)`} />
        <line x1="110" y1="112" x2="690" y2="112" stroke="#ffffff" strokeWidth="2" opacity="0.55" />

        {/* Court surface in perspective (trapezoid) */}
        <polygon
          points="150,120 650,120 780,470 20,470"
          fill={`url(#${id}-surface)`}
        />

        {/* Back wall shadow on court */}
        <rect x="150" y="120" width="500" height="10" fill="#000000" opacity="0.2" />

        {/* Outer court line */}
        <polygon
          points="150,120 650,120 780,470 20,470"
          fill="none"
          stroke="#ffffff"
          strokeWidth="6"
          strokeLinejoin="round"
        />

        {/* Service box lines (3m from back wall) */}
        <line x1="195" y1="200" x2="605" y2="200" stroke="#ffffff" strokeWidth="5" />
        <line x1="100" y1="380" x2="700" y2="380" stroke="#ffffff" strokeWidth="5" />

        {/* Center service line (splits the service boxes) */}
        <line x1="400" y1="200" x2="400" y2="380" stroke="#ffffff" strokeWidth="5" />

        {/* Net */}
        <rect x="90" y="288" width="620" height="6" fill="#ffffff" />
        <rect x="90" y="294" width="620" height="22" fill="#ffffff" opacity="0.35" />
        <line
          x1="90"
          y1="294"
          x2="710"
          y2="294"
          stroke="#ffffff"
          strokeWidth="1"
          strokeDasharray="4 3"
          opacity="0.85"
        />
        {/* Net posts */}
        <rect x="85" y="280" width="8" height="36" rx="2" fill="#0f2c4a" />
        <rect x="707" y="280" width="8" height="36" rx="2" fill="#0f2c4a" />

        {/* Side glass walls (simplified) */}
        <polygon points="150,120 20,470 50,470 170,120" fill="#ffffff" opacity="0.08" />
        <polygon points="650,120 780,470 750,470 630,120" fill="#ffffff" opacity="0.08" />

        {/* Ball (tiny detail for realism) */}
        <circle cx="520" cy="340" r="6" fill="#e8ff7a" stroke="#ffffff" strokeWidth="1" />
        <path d="M 515 338 Q 520 336 525 340" stroke="#ffffff" strokeWidth="0.8" fill="none" opacity="0.7" />

        {/* Subtle gloss on surface */}
        <polygon
          points="200,125 620,125 700,200 180,200"
          fill="#ffffff"
          opacity="0.04"
        />
      </svg>
    </div>
  );
}

export function CourtSceneLabel({ scene }: { scene: CourtScene }) {
  return <span className="sr-only">{PALETTES[scene]?.name}</span>;
}
