import { cn } from "@/lib/utils";

/**
 * Original poster/notice layouts standing in for AI-generated posters and
 * propaganda. The headline/tagline are real text (not baked into a raster
 * image) so they stay accessible and are genuinely "printed" content, exactly
 * as a real poster photograph would show its own headline — but the frame
 * around them is built to read as a photograph of a worn, unevenly lit
 * printed object rather than a clean design-tool layout: a slight camera
 * skew, foxing stains, an inked (not vector-perfect) border, and deckled
 * edges.
 */
const ROTATIONS: Record<number, number> = { 1: -1.6, 2: 1.1, 3: -0.9, 4: 1.4, 5: -1.1, 6: 0.8 };

// Real bazaar-art and painted posters of the period were often hand-tinted
// in fairly saturated colour, not monochrome — a muted, uniformly sepia
// palette across every AI poster would itself become a tell. Each campaign
// variant gets its own period-plausible accent (madder red, deep teal) akin
// to hand-coloured lithographs; notices stay plain, as an official black-ink
// notice genuinely would.
const ACCENTS: Record<number, { deep: string; mid: string; wash: string }> = {
  1: { deep: "#7c2a1f", mid: "#9c4a34", wash: "rgba(140,52,34,0.16)" },
  2: { deep: "#20524a", mid: "#3c6f5e", wash: "rgba(32,82,74,0.14)" },
  3: { deep: "#2a3a52", mid: "#48607e", wash: "rgba(42,58,82,0.12)" },
  4: { deep: "#5c3a1e", mid: "#8a5a30", wash: "rgba(140,90,48,0.15)" },
  5: { deep: "#2f4a24", mid: "#4f6f3e", wash: "rgba(47,74,36,0.14)" },
  6: { deep: "#463a5c", mid: "#6a5a86", wash: "rgba(70,58,92,0.13)" },
};

export function PosterIllustration({
  variant,
  tone = "campaign",
  headline,
  tagline,
}: {
  variant: 1 | 2 | 3 | 4 | 5 | 6;
  tone?: "campaign" | "notice";
  headline?: string;
  tagline?: string;
}) {
  const notice = tone === "notice";
  const rotation = ROTATIONS[variant] ?? 0;
  const accent = ACCENTS[variant];

  return (
    <div className={cn("relative h-full w-full overflow-hidden", notice ? "bg-[#5f5d56]" : "bg-[#57554e]")}>
      {/* uneven ambient lighting, as if photographed rather than exported */}
      <div
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background:
            "linear-gradient(115deg, rgba(255,250,240,0.14) 0%, rgba(255,250,240,0.02) 35%, rgba(10,10,8,0.05) 65%, rgba(10,10,8,0.2) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background: "radial-gradient(ellipse at 50% 105%, rgba(8,8,6,0.32), transparent 60%)",
        }}
      />

      <div
        className="paper-grain absolute inset-[1.5%] flex flex-col items-center justify-center gap-4 px-6 py-8 text-center shadow-[0_10px_24px_-8px_rgba(10,8,4,0.5)] sm:gap-5 sm:px-10"
        style={{
          transform: `rotate(${rotation}deg) scale(1.03)`,
          backgroundColor: notice ? "#e2dbcd" : "#dfd6c0",
          backgroundImage: notice
            ? "radial-gradient(circle at 14% 18%, rgba(90,80,60,0.12), transparent 38%), radial-gradient(circle at 88% 78%, rgba(80,70,50,0.14), transparent 34%), radial-gradient(circle at 65% 8%, rgba(60,52,36,0.08), transparent 30%), radial-gradient(circle at 8% 85%, rgba(60,52,36,0.1), transparent 32%)"
            : `radial-gradient(circle at 50% 32%, ${accent.wash}, transparent 55%), radial-gradient(circle at 14% 18%, rgba(90,78,54,0.12), transparent 38%), radial-gradient(circle at 88% 78%, rgba(80,68,46,0.13), transparent 34%), radial-gradient(circle at 8% 85%, rgba(60,52,36,0.09), transparent 32%)`,
          clipPath:
            "polygon(0.5% 1.8%, 3% 0.3%, 97.2% 0.8%, 99.5% 2.6%, 99.2% 97.4%, 96.5% 99.6%, 2.4% 99.1%, 0.3% 96.8%)",
        }}
      >
        <InkBorder variant={variant} color={notice ? "var(--navy)" : accent.deep} />
        <ChakraEmblem variant={variant} color={notice ? "var(--navy)" : accent.deep} />
        <p
          className={cn("font-display text-xl leading-tight font-semibold tracking-tight text-balance sm:text-3xl")}
          style={{
            color: notice ? "var(--navy)" : accent.deep,
            textShadow: "0.4px 0.4px 0 rgba(60,45,20,0.15)",
          }}
        >
          {headline}
        </p>
        {tagline && (
          <p
            className={cn("max-w-xs text-xs tracking-wide text-balance sm:text-sm")}
            style={{ color: notice ? "var(--navy-soft)" : accent.mid }}
          >
            {tagline}
          </p>
        )}
        <div className={cn("tricolour-rule w-16", notice && "opacity-40 grayscale")} />
      </div>
    </div>
  );
}

/** A hand-inked border with organic wobble, rather than a vector-crisp CSS border. */
function InkBorder({ variant, color }: { variant: number; color: string }) {
  const id = `ink-wobble-${variant}`;
  return (
    <svg
      className="pointer-events-none absolute inset-[6%] h-[88%] w-[88%]"
      viewBox="0 0 200 200"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <filter id={id} x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed={variant} result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="3.5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <rect
        x="4"
        y="4"
        width="192"
        height="192"
        fill="none"
        stroke={color}
        strokeWidth="2"
        opacity="0.7"
        filter={`url(#${id})`}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function ChakraEmblem({ variant, color }: { variant: number; color: string }) {
  const spokes = variant === 1 ? 24 : variant === 2 ? 16 : 12;
  const radius = 26;
  return (
    <svg width="56" height="56" viewBox="0 0 60 60" aria-hidden="true">
      <defs>
        <filter id={`chakra-wobble-${variant}`} x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.09" numOctaves="1" seed={variant} result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="1.6" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <g filter={`url(#chakra-wobble-${variant})`}>
        <circle cx="30" cy="30" r={radius} fill="none" stroke={color} strokeWidth="2.5" opacity="0.8" />
        {Array.from({ length: spokes }).map((_, i) => {
          const angle = (i / spokes) * Math.PI * 2;
          // Rounded to avoid last-digit floating point drift between the
          // server and client JS engines, which would otherwise trigger a
          // hydration mismatch on these computed SVG coordinates.
          const x2 = Math.round((30 + Math.cos(angle) * radius) * 100) / 100;
          const y2 = Math.round((30 + Math.sin(angle) * radius) * 100) / 100;
          return (
            <line key={i} x1="30" y1="30" x2={x2} y2={y2} stroke={color} strokeWidth="1.2" opacity="0.75" />
          );
        })}
        <circle cx="30" cy="30" r="3" fill={color} />
      </g>
    </svg>
  );
}
