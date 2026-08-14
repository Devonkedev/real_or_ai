import { cn } from "@/lib/utils";

/**
 * Original poster/notice layouts standing in for AI-generated posters and
 * propaganda. Built from HTML + CSS rather than a raster image so the
 * "printed" headline text is genuinely part of the artifact, exactly as it
 * would be on a real poster photograph.
 */
export function PosterIllustration({
  variant,
  tone = "campaign",
  headline,
  tagline,
}: {
  variant: 1 | 2 | 3 | 4;
  tone?: "campaign" | "notice";
  headline?: string;
  tagline?: string;
}) {
  const notice = tone === "notice";
  return (
    <div
      className={cn(
        "paper-grain flex h-full w-full flex-col items-center justify-center gap-4 px-6 py-8 text-center sm:gap-5 sm:px-10",
        notice ? "bg-[#e9e1cd]" : "bg-[#efe3c8]",
      )}
    >
      <div
        className={cn(
          "flex h-full w-full max-w-md flex-1 flex-col items-center justify-center gap-4 border-2 px-5 py-6 sm:gap-6 sm:px-8",
          notice ? "border-navy/70" : "border-ink/60",
        )}
      >
        <ChakraEmblem variant={variant} muted={notice} />
        <p
          className={cn(
            "font-display text-xl leading-tight font-semibold tracking-tight text-balance sm:text-3xl",
            notice ? "text-navy" : "text-ink",
          )}
        >
          {headline}
        </p>
        {tagline && (
          <p
            className={cn(
              "max-w-xs text-xs tracking-wide text-balance sm:text-sm",
              notice ? "text-navy-soft" : "text-ink-soft",
            )}
          >
            {tagline}
          </p>
        )}
        <div
          className={cn(
            "tricolour-rule w-16",
            notice && "opacity-40 grayscale",
          )}
        />
      </div>
    </div>
  );
}

function ChakraEmblem({ variant, muted }: { variant: number; muted: boolean }) {
  const spokes = variant === 1 ? 24 : variant === 2 ? 16 : 12;
  const radius = 26;
  return (
    <svg width="56" height="56" viewBox="0 0 60 60" aria-hidden="true">
      <circle
        cx="30"
        cy="30"
        r={radius}
        fill="none"
        stroke={muted ? "var(--navy)" : "var(--ink)"}
        strokeWidth="2.5"
        opacity="0.75"
      />
      {Array.from({ length: spokes }).map((_, i) => {
        const angle = (i / spokes) * Math.PI * 2;
        // Rounded to avoid last-digit floating point drift between the
        // server and client JS engines, which would otherwise trigger a
        // hydration mismatch on these computed SVG coordinates.
        const x2 = Math.round((30 + Math.cos(angle) * radius) * 100) / 100;
        const y2 = Math.round((30 + Math.sin(angle) * radius) * 100) / 100;
        return (
          <line
            key={i}
            x1="30"
            y1="30"
            x2={x2}
            y2={y2}
            stroke={muted ? "var(--navy)" : "var(--ink)"}
            strokeWidth="1.2"
            opacity="0.7"
          />
        );
      })}
      <circle cx="30" cy="30" r="3" fill={muted ? "var(--navy)" : "var(--ink)"} />
    </svg>
  );
}
