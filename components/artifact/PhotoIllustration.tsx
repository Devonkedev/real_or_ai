/**
 * Original illustrated stand-ins for AI-generated "photographs". These are
 * not photographs — they are hand-built SVG scenes designed to read as
 * genuine period B&W photography at a glance: true neutral grayscale
 * tonality (no colour cast), the entire frame filled edge-to-edge with
 * textured content (no bare flat-colour void anywhere, the way an actual
 * photograph never has empty canvas), organically warped edges (via
 * turbulence displacement, so nothing reads as a clean vector silhouette),
 * layered depth-of-field blur, and photographic grain/vignetting matched to
 * the real archival photographs they sit alongside. Small drawn details
 * echo the deceptionDetails written for each artifact (an extra finger,
 * mismatched shadows, tiled faces) for players who look back after the
 * reveal — but the overall scene is built to be judged on those specific
 * details, not on "does this look like a photo".
 */
export function PhotoIllustration({
  variant,
  render,
}: {
  variant: 1 | 2 | 3 | 4 | 5 | 6;
  render: "portrait-photo" | "crowd-photo";
}) {
  const uid = `photo-${render}-${variant}`;
  return (
    <svg
      viewBox="0 0 400 300"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        {/* true neutral grayscale — no colour cast, matching real B&W photography */}
        <linearGradient id={`${uid}-tone`} x1="0" y1="0" x2="0.25" y2="1">
          <stop offset="0%" stopColor="#c9c9c6" />
          <stop offset="45%" stopColor="#b3b2ad" />
          <stop offset="100%" stopColor="#8f8e88" />
        </linearGradient>
        <radialGradient id={`${uid}-vignette`} cx="46%" cy="42%" r="80%">
          <stop offset="42%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#0a0a08" stopOpacity="0.62" />
        </radialGradient>
        <radialGradient id={`${uid}-light`} cx="40%" cy="22%" r="65%">
          <stop offset="0%" stopColor="#f0f0ec" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#f0f0ec" stopOpacity="0" />
        </radialGradient>
        {/* organic edge warp: turns clean vector paths into soft, irregular, photographic-looking contours */}
        <filter id={`${uid}-warp`} x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="2" seed={variant * 7 + 3} result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="7" xChannelSelector="R" yChannelSelector="G" />
          <feGaussianBlur stdDeviation="0.55" />
        </filter>
        <filter id={`${uid}-warp-soft`} x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed={variant * 11 + 5} result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="5" xChannelSelector="R" yChannelSelector="G" />
          <feGaussianBlur stdDeviation="1.6" />
        </filter>
        <filter id={`${uid}-grain`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed={variant} />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        {/* large-scale mottling so the backdrop is never a perfectly flat wash */}
        <filter id={`${uid}-mottle`} x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.02" numOctaves="3" seed={variant * 3 + 1} />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.5" intercept="0" />
          </feComponentTransfer>
        </filter>
      </defs>

      <rect width="400" height="300" fill={`url(#${uid}-tone)`} />
      <rect width="400" height="300" filter={`url(#${uid}-mottle)`} opacity="0.5" style={{ mixBlendMode: "overlay" }} />

      {render === "crowd-photo" && variant === 1 && <RailwayCrowdScene uid={uid} />}
      {render === "crowd-photo" && variant === 2 && <CourtyardScene uid={uid} />}
      {render === "crowd-photo" && variant === 3 && <JailGateScene uid={uid} />}
      {render === "crowd-photo" && variant === 4 && <BonfireScene uid={uid} />}
      {render === "crowd-photo" && variant === 5 && <MarchScene uid={uid} />}
      {render === "portrait-photo" && <PortraitScene uid={uid} />}

      <rect width="400" height="300" fill={`url(#${uid}-light)`} />
      <rect width="400" height="300" filter={`url(#${uid}-grain)`} opacity="0.12" style={{ mixBlendMode: "multiply" }} />
      <rect width="400" height="300" fill={`url(#${uid}-vignette)`} />
    </svg>
  );
}

const INK = "#201d18";
const INK_SOFT = "#454239";
const MID = "#67655c";
const PALE = "#d8d7d0";

function figureGradientDefs(uid: string) {
  return (
    <linearGradient id={`${uid}-fig`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor={MID} />
      <stop offset="55%" stopColor={INK_SOFT} />
      <stop offset="100%" stopColor={INK} />
    </linearGradient>
  );
}

/** A soft, irregular skyline used to fill "empty sky" area at the top of a scene. */
function Skyline({ uid, baseline = 118 }: { uid: string; baseline?: number }) {
  return (
    <g filter={`url(#${uid}-warp-soft)`} opacity="0.5">
      <rect x="0" y="0" width="400" height={baseline + 6} fill={PALE} opacity="0.35" />
      <path
        d={`M0 ${baseline} L20 ${baseline - 22} L55 ${baseline - 20} L70 ${baseline - 48} L95 ${baseline - 46} L110 ${baseline - 18} L150 ${baseline - 16} L168 ${baseline - 40} L200 ${baseline - 38} L215 ${baseline - 14} L255 ${baseline - 15} L272 ${baseline - 44} L300 ${baseline - 42} L318 ${baseline - 12} L355 ${baseline - 10} L375 ${baseline - 30} L400 ${baseline - 26} L400 ${baseline + 10} L0 ${baseline + 10} Z`}
        fill={MID}
        opacity="0.55"
      />
    </g>
  );
}

function RailwayCrowdScene({ uid }: { uid: string }) {
  return (
    <g>
      <defs>{figureGradientDefs(uid)}</defs>

      <Skyline uid={uid} baseline={112} />

      {/* distant platform + hazy background crowd, heavier blur for depth of field */}
      <g filter={`url(#${uid}-warp-soft)`} opacity="0.6">
        <rect x="0" y="140" width="400" height="45" fill={MID} opacity="0.7" />
        {[10, 34, 60, 92, 128, 168, 205, 245, 280, 320, 355, 385].map((x, i) => (
          <g key={i} transform={`translate(${x} ${158 + (i % 4) * 3})`}>
            <rect x="-7" y="6" width="14" height="30" rx="5" fill={INK_SOFT} />
            <circle cx="0" cy="0" r="7" fill={INK_SOFT} />
          </g>
        ))}
      </g>

      {/* train carriage, sharper focus */}
      <g filter={`url(#${uid}-warp)`}>
        <rect x="262" y="18" width="138" height="242" fill={`url(#${uid}-fig)`} opacity="0.9" />
        <rect x="280" y="48" width="60" height="76" rx="4" fill="#e4e0d4" opacity="0.9" />
        <rect x="280" y="48" width="60" height="76" rx="4" fill="none" stroke={INK} strokeWidth="2" opacity="0.4" />
        <rect x="262" y="255" width="138" height="10" fill={INK} opacity="0.5" />
        {[290, 320, 350, 378].map((x, i) => (
          <line key={i} x1={x} y1="140" x2={x} y2="250" stroke={INK} strokeWidth="1.5" opacity="0.25" />
        ))}
      </g>

      {/* leaning figure at the window, raised hand fanned with six fingers */}
      <g filter={`url(#${uid}-warp)`}>
        <path d="M290 145 q9 -38 27 -44 q17 4 22 44 l-4 20 l-41 0 z" fill={`url(#${uid}-fig)`} />
        <circle cx="315" cy="90" r="13" fill={`url(#${uid}-fig)`} />
        <path d="M304 84 q11 -8 22 0 q-2 10 -11 11 q-9 -1 -11 -11 z" fill="#c9c2b0" opacity="0.5" />
        <g stroke={INK} strokeWidth="2.6" strokeLinecap="round" opacity="0.92">
          <line x1="288" y1="120" x2="256" y2="93" />
          <line x1="256" y1="93" x2="247" y2="78" />
          <line x1="256" y1="93" x2="253" y2="80" />
          <line x1="256" y1="93" x2="259" y2="77" />
          <line x1="256" y1="93" x2="265" y2="79" />
          <line x1="256" y1="93" x2="250" y2="88" />
        </g>
      </g>

      {/* foreground crowd, spanning the full width up to the train, with irregular bunting overhead */}
      <g filter={`url(#${uid}-warp)`}>
        {[10, 32, 56, 80, 104, 128, 152, 176, 200, 224, 244, 14, 62].map((x, i) => (
          <g key={i} transform={`translate(${x} ${196 + (i % 3) * 6}) rotate(${(i % 5) - 2})`}>
            <rect x="-11" y="13" width="22" height="50" rx="8" fill={`url(#${uid}-fig)`} opacity={0.82 + (i % 3) * 0.05} />
            <circle cx="0" cy="5" r="11" fill={`url(#${uid}-fig)`} opacity={0.82 + (i % 3) * 0.05} />
          </g>
        ))}
        <path
          d="M0 160 q17 9 34 0 q17 9 34 0 q17 9 34 0 q17 9 34 0 q17 9 34 0 q17 9 34 0 q17 9 34 0"
          fill="none"
          stroke={INK}
          strokeWidth="2"
          opacity="0.5"
        />
        <rect x="0" y="258" width="400" height="42" fill={INK_SOFT} opacity="0.65" />
        <g opacity="0.4" stroke={MID} strokeWidth="1">
          {[20, 70, 120, 170, 220].map((x, i) => (
            <line key={i} x1={x} y1="260" x2={x + 10} y2="300" />
          ))}
        </g>
      </g>
    </g>
  );
}

function CourtyardScene({ uid }: { uid: string }) {
  return (
    <g>
      <defs>{figureGradientDefs(uid)}</defs>

      {/* wall behind, filling the full width with texture, not a flat swatch */}
      <g filter={`url(#${uid}-warp-soft)`} opacity="0.75">
        <rect x="0" y="0" width="400" height="185" fill="#a8a49a" opacity="0.55" />
        {[40, 130, 220, 310].map((x, i) => (
          <rect key={i} x={x} y="30" width="46" height="70" rx="3" fill={INK_SOFT} opacity="0.28" />
        ))}
        <rect x="0" y="160" width="400" height="20" fill={MID} opacity="0.45" />
      </g>

      {/* courtyard floor, filling the remaining space edge to edge */}
      <g filter={`url(#${uid}-warp-soft)`} opacity="0.85">
        <rect x="0" y="175" width="400" height="125" fill="#928d80" opacity="0.6" />
        {Array.from({ length: 11 }).map((_, i) => (
          <line
            key={i}
            x1={i * 45 - 20}
            y1="185"
            x2={i * 45 - 75}
            y2="300"
            stroke={MID}
            strokeWidth="1.5"
            opacity="0.4"
          />
        ))}
        <line x1="0" y1="235" x2="400" y2="235" stroke={MID} strokeWidth="1.2" opacity="0.3" />
      </g>

      <g filter={`url(#${uid}-warp)`}>
        {[
          { x: 40, s: 1, r: -3 },
          { x: 128, s: 1.06, r: 2 },
          { x: 218, s: 0.95, r: -1 },
          { x: 306, s: 1.03, r: 3 },
          { x: 368, s: 0.9, r: -2 },
        ].map((f, i) => (
          <g key={i} transform={`translate(${f.x} 172) rotate(${f.r}) scale(${f.s})`}>
            <path d="M-16 68 q-2 -34 4 -46 q12 -14 24 0 q6 12 4 46 z" fill={`url(#${uid}-fig)`} opacity="0.9" />
            <path d="M-16 68 q-2 -34 4 -46" fill="none" stroke="#ece6d6" strokeWidth="1" opacity="0.25" />
            <circle cx="0" cy="7" r="10.5" fill={`url(#${uid}-fig)`} opacity="0.9" />
            {/* charkha, slightly different size/angle per figure rather than identical */}
            <g transform={`rotate(${i * 6 - 9})`}>
              <circle cx="0" cy="44" r={14 + (i % 2)} fill="none" stroke={INK_SOFT} strokeWidth="2.2" opacity="0.85" />
              <line x1="0" y1={44 - 14 - (i % 2)} x2="0" y2={44 + 14 + (i % 2)} stroke={INK_SOFT} strokeWidth="1.6" opacity="0.7" />
              <line x1={-14 - (i % 2)} y1="44" x2={14 + (i % 2)} y2="44" stroke={INK_SOFT} strokeWidth="1.6" opacity="0.7" />
            </g>
          </g>
        ))}
      </g>
    </g>
  );
}

function JailGateScene({ uid }: { uid: string }) {
  return (
    <g>
      <defs>{figureGradientDefs(uid)}</defs>

      {/* stone wall spanning the full frame, textured rather than flat */}
      <g filter={`url(#${uid}-warp-soft)`} opacity="0.8">
        <rect x="0" y="0" width="400" height="255" fill="#9d998e" opacity="0.55" />
        {Array.from({ length: 6 }).map((_, row) =>
          Array.from({ length: 9 }).map((_, col) => (
            <rect
              key={`${row}-${col}`}
              x={col * 46 - (row % 2 === 0 ? 0 : 23)}
              y={row * 32}
              width="44"
              height="30"
              fill="none"
              stroke={INK_SOFT}
              strokeWidth="1"
              opacity="0.22"
            />
          )),
        )}
      </g>
      {/* ground, filling the base of the frame */}
      <rect x="0" y="250" width="400" height="50" fill={INK_SOFT} opacity="0.5" filter={`url(#${uid}-warp-soft)`} />

      <g filter={`url(#${uid}-warp)`}>
        <path
          d="M112 262 L112 88 A88 76 0 0 1 288 88 L288 262 Z"
          fill="none"
          stroke={`url(#${uid}-fig)`}
          strokeWidth="12"
        />
        <rect x="90" y="250" width="220" height="20" fill={INK_SOFT} opacity="0.9" />
        {[148, 189, 230, 271].map((x, i) => (
          <line key={i} x1={x} y1="98" x2={x} y2="258" stroke={INK} strokeWidth="3.5" opacity="0.55" />
        ))}
        {[
          { x: 48, s: 1 },
          { x: 355, s: 0.94 },
          { x: 78, s: 0.85 },
          { x: 328, s: 0.88 },
        ].map((f, i) => (
          <g key={i} transform={`translate(${f.x} 152) scale(${f.s})`}>
            <path d="M-11 66 q-2 -30 3 -40 q8 -10 16 0 q5 10 3 40 z" fill={`url(#${uid}-fig)`} opacity="0.85" />
            <circle cx="0" cy="6" r="10" fill={`url(#${uid}-fig)`} opacity="0.85" />
          </g>
        ))}
        <g transform="translate(200 165)">
          <path d="M-12 70 q-2 -32 3 -42 q9 -11 18 0 q5 10 3 42 z" fill={`url(#${uid}-fig)`} opacity="0.92" />
          <circle cx="0" cy="4" r="11" fill={`url(#${uid}-fig)`} opacity="0.92" />
        </g>
      </g>
    </g>
  );
}

function BonfireScene({ uid }: { uid: string }) {
  return (
    <g>
      <defs>{figureGradientDefs(uid)}</defs>
      <Skyline uid={uid} baseline={110} />
      <g filter={`url(#${uid}-warp-soft)`} opacity="0.8">
        <rect x="0" y="150" width="400" height="150" fill="#8f8b7f" opacity="0.55" />
      </g>
      {/* the fire itself: a jagged glowing pile with rising smoke */}
      <g filter={`url(#${uid}-warp)`}>
        <path
          d="M160 260 q10 -30 30 -18 q6 -26 30 -10 q10 -30 34 -6 q14 -22 30 4 q8 20 -4 30 q4 20 -20 20 l-90 0 q-16 -4 -10 -20 z"
          fill="#e7e3d6"
          opacity="0.9"
        />
        <path
          d="M175 258 q8 -20 22 -12 q4 -18 22 -8 q8 -20 26 -4 q10 16 -2 24 l-64 0 q-8 -2 -4 -0 z"
          fill={INK_SOFT}
          opacity="0.5"
        />
        <g stroke={MID} strokeWidth="2" opacity="0.35" strokeLinecap="round">
          <path d="M200 200 q-6 -20 4 -34 q10 -14 2 -30" fill="none" />
          <path d="M240 195 q6 -18 -2 -32 q-8 -14 4 -28" fill="none" />
        </g>
      </g>
      {/* circle of onlookers around the fire, spanning the full width */}
      <g filter={`url(#${uid}-warp)`}>
        {[20, 55, 90, 340, 305, 270, 15, 60, 130, 330].map((x, i) => (
          <g key={i} transform={`translate(${x} ${228 + (i % 3) * 8}) rotate(${(i % 5) - 2})`}>
            <rect x="-10" y="12" width="20" height="44" rx="7" fill={`url(#${uid}-fig)`} opacity={0.82 + (i % 3) * 0.05} />
            <circle cx="0" cy="4" r="10" fill={`url(#${uid}-fig)`} opacity={0.82 + (i % 3) * 0.05} />
          </g>
        ))}
        <rect x="0" y="270" width="400" height="30" fill={INK_SOFT} opacity="0.55" />
      </g>
    </g>
  );
}

function MarchScene({ uid }: { uid: string }) {
  return (
    <g>
      <defs>{figureGradientDefs(uid)}</defs>
      <Skyline uid={uid} baseline={98} />
      {/* street receding into the distance, buildings either side */}
      <g filter={`url(#${uid}-warp-soft)`} opacity="0.7">
        <path d="M0 300 L150 130 L250 130 L400 300 Z" fill="#8c887c" opacity="0.4" />
        <rect x="0" y="110" width="90" height="140" fill={INK_SOFT} opacity="0.3" />
        <rect x="320" y="110" width="80" height="140" fill={INK_SOFT} opacity="0.3" />
      </g>
      {/* marching column, filling the width, banner carried at the front */}
      <g filter={`url(#${uid}-warp)`}>
        <rect x="150" y="205" width="100" height="8" fill={INK} opacity="0.8" />
        <line x1="150" y1="205" x2="150" y2="245" stroke={INK} strokeWidth="4" opacity="0.7" />
        <line x1="250" y1="205" x2="250" y2="245" stroke={INK} strokeWidth="4" opacity="0.7" />
        {[
          [130, 246], [270, 246], [100, 252], [300, 252], [70, 260], [330, 260],
          [180, 262], [220, 262], [40, 270], [360, 270], [150, 278], [250, 278],
        ].map(([x, y], i) => (
          <g key={i} transform={`translate(${x} ${y}) scale(${0.9 + (i % 3) * 0.06})`}>
            <rect x="-9" y="10" width="18" height="40" rx="6" fill={`url(#${uid}-fig)`} opacity={0.85} />
            <circle cx="0" cy="4" r="9" fill={`url(#${uid}-fig)`} opacity={0.85} />
          </g>
        ))}
        <rect x="0" y="290" width="400" height="10" fill={INK_SOFT} opacity="0.5" />
      </g>
    </g>
  );
}

function PortraitScene({ uid }: { uid: string }) {
  return (
    <g>
      <defs>{figureGradientDefs(uid)}</defs>
      <g filter={`url(#${uid}-warp-soft)`} opacity="0.5">
        <rect x="0" y="0" width="400" height="300" fill={PALE} opacity="0.3" />
      </g>
      <g filter={`url(#${uid}-warp)`}>
        <ellipse cx="200" cy="185" rx="120" ry="115" fill={`url(#${uid}-fig)`} opacity="0.9" />
        <circle cx="200" cy="98" r="39" fill={`url(#${uid}-fig)`} opacity="0.9" />
      </g>
    </g>
  );
}
