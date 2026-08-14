/**
 * Original illustrated stand-ins for AI-generated "photographs". These are not
 * photographs at all — they are hand-built SVG scenes styled to sit inside the
 * same archival frame as a real photograph, deliberately abstract rather than
 * photorealistic. Small drawn details echo the deceptionDetails written for
 * each artifact (an extra finger, mismatched shadows) for players who look
 * back after the reveal.
 */
export function PhotoIllustration({
  variant,
  render,
}: {
  variant: 1 | 2 | 3 | 4;
  render: "portrait-photo" | "crowd-photo";
}) {
  return (
    <svg
      viewBox="0 0 400 300"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`sepia-${variant}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e9dcc0" />
          <stop offset="55%" stopColor="#d8c7a3" />
          <stop offset="100%" stopColor="#c2ad84" />
        </linearGradient>
        <radialGradient id={`vignette-${variant}`} cx="50%" cy="45%" r="75%">
          <stop offset="55%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#2a1c0f" stopOpacity="0.55" />
        </radialGradient>
        <filter id={`grain-${variant}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed={variant} />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </defs>

      <rect width="400" height="300" fill={`url(#sepia-${variant})`} />

      {render === "crowd-photo" && variant === 1 && <RailwayCrowdScene />}
      {render === "crowd-photo" && variant === 2 && <CourtyardScene />}
      {render === "crowd-photo" && variant === 3 && <JailGateScene />}
      {render === "portrait-photo" && <PortraitScene />}

      <rect width="400" height="300" filter={`url(#grain-${variant})`} opacity="0.06" />
      <rect width="400" height="300" fill={`url(#vignette-${variant})`} />
    </svg>
  );
}

const INK = "#3a2c1c";
const INK_SOFT = "#5a4630";

function RailwayCrowdScene() {
  return (
    <g>
      {/* train carriage edge */}
      <rect x="280" y="40" width="120" height="180" fill={INK_SOFT} opacity="0.5" />
      <rect x="300" y="70" width="55" height="70" rx="3" fill="#efe3c8" opacity="0.85" />
      {/* leaning figure at window with a raised, six-fingered hand */}
      <path d="M305 140 q10 -35 25 -40 q15 5 20 40 z" fill={INK} />
      <circle cx="327" cy="92" r="12" fill={INK} />
      <g stroke={INK} strokeWidth="3" strokeLinecap="round">
        <line x1="300" y1="118" x2="270" y2="95" />
        <line x1="270" y1="95" x2="262" y2="82" />
        <line x1="270" y1="95" x2="268" y2="83" />
        <line x1="270" y1="95" x2="274" y2="80" />
        <line x1="270" y1="95" x2="279" y2="82" />
        <line x1="270" y1="95" x2="264" y2="90" />
      </g>
      {/* crowd silhouettes, several intentionally repeated */}
      {[18, 48, 78, 108, 138, 168, 198, 18 + 6, 48 + 4].map((x, i) => (
        <g key={i} transform={`translate(${x} ${205 + (i % 3) * 4})`}>
          <rect x="-9" y="10" width="18" height="42" rx="6" fill={INK} opacity="0.85" />
          <circle cx="0" cy="4" r="9" fill={INK} opacity="0.85" />
        </g>
      ))}
      <rect x="0" y="255" width="400" height="45" fill={INK_SOFT} opacity="0.55" />
    </g>
  );
}

function CourtyardScene() {
  return (
    <g>
      <rect x="0" y="0" width="400" height="230" fill="#e3d3ac" opacity="0.4" />
      {/* repeating stone tile pattern */}
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={i} x1={i * 55} y1="230" x2={i * 55 - 40} y2="300" stroke="#a68f66" strokeWidth="2" opacity="0.4" />
      ))}
      {[60, 150, 240, 330].map((x, i) => (
        <g key={i} transform={`translate(${x} 175)`}>
          <path d="M-14 70 q14 -55 14 -55 q0 0 14 55 z" fill={INK} opacity="0.88" />
          <circle cx="0" cy="8" r="11" fill={INK} opacity="0.88" />
          {/* identical charkha wheel for every figure */}
          <circle cx="0" cy="46" r="16" fill="none" stroke={INK_SOFT} strokeWidth="2.5" />
          <line x1="0" y1="30" x2="0" y2="62" stroke={INK_SOFT} strokeWidth="2" />
          <line x1="-16" y1="46" x2="16" y2="46" stroke={INK_SOFT} strokeWidth="2" />
        </g>
      ))}
    </g>
  );
}

function JailGateScene() {
  return (
    <g>
      <path d="M120 260 L120 90 A80 70 0 0 1 280 90 L280 260 Z" fill="none" stroke={INK} strokeWidth="10" />
      <rect x="100" y="250" width="200" height="18" fill={INK_SOFT} />
      {[150, 190, 230, 270].map((x, i) => (
        <line key={i} x1={x} y1="100" x2={x} y2="255" stroke={INK} strokeWidth="4" opacity="0.7" />
      ))}
      {[70, 340].map((x, i) => (
        <g key={i} transform={`translate(${x} 150)`}>
          <rect x="-10" y="16" width="20" height="46" rx="7" fill={INK} opacity="0.85" />
          <circle cx="0" cy="8" r="10" fill={INK} opacity="0.85" />
        </g>
      ))}
      <g transform="translate(200 165)">
        <rect x="-11" y="14" width="22" height="50" rx="7" fill={INK} opacity="0.9" />
        <circle cx="0" cy="6" r="11" fill={INK} opacity="0.9" />
      </g>
    </g>
  );
}

function PortraitScene() {
  return (
    <g>
      <ellipse cx="200" cy="150" rx="70" ry="90" fill={INK} opacity="0.85" />
      <circle cx="200" cy="95" r="38" fill={INK} opacity="0.85" />
    </g>
  );
}
