/**
 * Original illustrated stand-ins for AI-generated "photographs". These are
 * not photographs — they are hand-built SVG scenes designed to read as
 * genuine period B&W photography at a glance: true grayscale tonality (not
 * sepia), organically warped edges (via turbulence displacement, so nothing
 * reads as a clean vector silhouette), layered depth-of-field blur, and
 * photographic grain/vignetting matched to the real archival photographs
 * they sit alongside. Small drawn details echo the deceptionDetails written
 * for each artifact (an extra finger, mismatched shadows, tiled faces) for
 * players who look back after the reveal — but the overall scene is built to
 * be judged on those specific details, not on "does this look like a photo".
 */
export function PhotoIllustration({
  variant,
  render,
}: {
  variant: 1 | 2 | 3 | 4;
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
        <linearGradient id={`${uid}-tone`} x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#d9d4c8" />
          <stop offset="45%" stopColor="#c7c1b2" />
          <stop offset="100%" stopColor="#a9a294" />
        </linearGradient>
        <radialGradient id={`${uid}-vignette`} cx="46%" cy="40%" r="78%">
          <stop offset="45%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#100c07" stopOpacity="0.6" />
        </radialGradient>
        <radialGradient id={`${uid}-light`} cx="40%" cy="25%" r="60%">
          <stop offset="0%" stopColor="#f4f1e6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#f4f1e6" stopOpacity="0" />
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
      </defs>

      <rect width="400" height="300" fill={`url(#${uid}-tone)`} />

      {render === "crowd-photo" && variant === 1 && <RailwayCrowdScene uid={uid} />}
      {render === "crowd-photo" && variant === 2 && <CourtyardScene uid={uid} />}
      {render === "crowd-photo" && variant === 3 && <JailGateScene uid={uid} />}
      {render === "portrait-photo" && <PortraitScene uid={uid} />}

      <rect width="400" height="300" fill={`url(#${uid}-light)`} />
      <rect width="400" height="300" filter={`url(#${uid}-grain)`} opacity="0.1" style={{ mixBlendMode: "multiply" }} />
      <rect width="400" height="300" fill={`url(#${uid}-vignette)`} />
    </svg>
  );
}

const INK = "#241f17";
const INK_SOFT = "#4a4436";
const MID = "#6b6455";

function figureGradientDefs(uid: string) {
  return (
    <linearGradient id={`${uid}-fig`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor={MID} />
      <stop offset="55%" stopColor={INK_SOFT} />
      <stop offset="100%" stopColor={INK} />
    </linearGradient>
  );
}

function RailwayCrowdScene({ uid }: { uid: string }) {
  return (
    <g>
      <defs>{figureGradientDefs(uid)}</defs>

      {/* distant platform + hazy background crowd, heavier blur for depth of field */}
      <g filter={`url(#${uid}-warp-soft)`} opacity="0.55">
        <rect x="0" y="150" width="400" height="30" fill={MID} />
        {[30, 60, 92, 128, 168, 205, 245, 280, 320, 355].map((x, i) => (
          <g key={i} transform={`translate(${x} ${160 + (i % 4) * 3})`}>
            <rect x="-7" y="6" width="14" height="30" rx="5" fill={INK_SOFT} />
            <circle cx="0" cy="0" r="7" fill={INK_SOFT} />
          </g>
        ))}
      </g>

      {/* train carriage, sharper focus */}
      <g filter={`url(#${uid}-warp)`}>
        <rect x="272" y="30" width="128" height="220" fill={`url(#${uid}-fig)`} opacity="0.9" />
        <rect x="290" y="58" width="60" height="76" rx="4" fill="#ece6d6" opacity="0.92" />
        <rect x="290" y="58" width="60" height="76" rx="4" fill="none" stroke={INK} strokeWidth="2" opacity="0.4" />
        <rect x="272" y="255" width="128" height="10" fill={INK} opacity="0.5" />
        {[300, 330, 360, 386].map((x, i) => (
          <line key={i} x1={x} y1="150" x2={x} y2="250" stroke={INK} strokeWidth="1.5" opacity="0.25" />
        ))}
      </g>

      {/* leaning figure at the window, raised hand fanned with six fingers */}
      <g filter={`url(#${uid}-warp)`}>
        <path d="M300 145 q9 -38 27 -44 q17 4 22 44 l-4 20 l-41 0 z" fill={`url(#${uid}-fig)`} />
        <circle cx="325" cy="90" r="13" fill={`url(#${uid}-fig)`} />
        <path d="M314 84 q11 -8 22 0 q-2 10 -11 11 q-9 -1 -11 -11 z" fill="#c9c2b0" opacity="0.5" />
        <g stroke={INK} strokeWidth="2.6" strokeLinecap="round" opacity="0.92">
          <line x1="298" y1="120" x2="266" y2="93" />
          <line x1="266" y1="93" x2="257" y2="78" />
          <line x1="266" y1="93" x2="263" y2="80" />
          <line x1="266" y1="93" x2="269" y2="77" />
          <line x1="266" y1="93" x2="275" y2="79" />
          <line x1="266" y1="93" x2="260" y2="88" />
        </g>
      </g>

      {/* mid-ground crowd, sharper, with irregular tricolour bunting */}
      <g filter={`url(#${uid}-warp)`}>
        {[16, 45, 74, 104, 133, 162, 192, 222, 20, 50].map((x, i) => (
          <g key={i} transform={`translate(${x} ${198 + (i % 3) * 5}) rotate(${(i % 5) - 2})`}>
            <rect x="-10" y="12" width="20" height="46" rx="7" fill={`url(#${uid}-fig)`} opacity={0.82 + (i % 3) * 0.05} />
            <circle cx="0" cy="5" r="10" fill={`url(#${uid}-fig)`} opacity={0.82 + (i % 3) * 0.05} />
          </g>
        ))}
        <path
          d="M0 165 q20 10 40 0 q20 10 40 0 q20 10 40 0 q20 10 40 0 q20 10 40 0"
          fill="none"
          stroke={INK}
          strokeWidth="2"
          opacity="0.5"
        />
        <rect x="0" y="255" width="400" height="45" fill={INK_SOFT} opacity="0.6" />
      </g>
    </g>
  );
}

function CourtyardScene({ uid }: { uid: string }) {
  return (
    <g>
      <defs>{figureGradientDefs(uid)}</defs>
      <g filter={`url(#${uid}-warp-soft)`} opacity="0.7">
        <rect x="0" y="0" width="400" height="235" fill="#b7ae9a" opacity="0.5" />
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={i}
            x1={i * 50 - 10}
            y1="235"
            x2={i * 50 - 55}
            y2="300"
            stroke={MID}
            strokeWidth="1.5"
            opacity="0.35"
          />
        ))}
      </g>
      <g filter={`url(#${uid}-warp)`}>
        {[
          { x: 58, s: 1, r: -3 },
          { x: 150, s: 1.08, r: 2 },
          { x: 244, s: 0.95, r: -1 },
          { x: 335, s: 1.03, r: 3 },
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
      <g filter={`url(#${uid}-warp-soft)`} opacity="0.6">
        <rect x="0" y="0" width="400" height="300" fill={MID} opacity="0.25" />
      </g>
      <g filter={`url(#${uid}-warp)`}>
        <path
          d="M118 262 L118 92 A82 72 0 0 1 282 92 L282 262 Z"
          fill="none"
          stroke={`url(#${uid}-fig)`}
          strokeWidth="11"
        />
        <rect x="98" y="250" width="204" height="18" fill={INK_SOFT} opacity="0.85" />
        {[152, 191, 230, 269].map((x, i) => (
          <line key={i} x1={x} y1="102" x2={x} y2="256" stroke={INK} strokeWidth="3.5" opacity="0.55" />
        ))}
        {[
          { x: 66, s: 1 },
          { x: 336, s: 0.94 },
        ].map((f, i) => (
          <g key={i} transform={`translate(${f.x} 150) scale(${f.s})`}>
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

function PortraitScene({ uid }: { uid: string }) {
  return (
    <g filter={`url(#${uid}-warp)`}>
      <defs>{figureGradientDefs(uid)}</defs>
      <ellipse cx="200" cy="155" rx="72" ry="92" fill={`url(#${uid}-fig)`} opacity="0.9" />
      <circle cx="200" cy="98" r="39" fill={`url(#${uid}-fig)`} opacity="0.9" />
    </g>
  );
}
