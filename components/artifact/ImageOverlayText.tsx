import { cn } from "@/lib/utils";

/**
 * Crisp, accessible printed text laid over a photographed/generated poster
 * or newspaper background. Kept as real DOM text (not baked into the image)
 * so it stays legible and screen-reader friendly regardless of how well any
 * generated background renders text.
 */
export function ImageOverlayText({
  overlay,
  compact = false,
}: {
  overlay: {
    kind: "poster" | "newspaper";
    headline?: string;
    tagline?: string;
    masthead?: string;
    dateline?: string;
  };
  compact?: boolean;
}) {
  const textShadow =
    "0 1px 1px rgba(255,255,255,0.55), 0 -1px 1px rgba(0,0,0,0.25)";

  if (overlay.kind === "newspaper") {
    return (
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center px-4 pt-[10%] text-center sm:px-8">
        {overlay.dateline && (
          <span
            className="text-[9px] font-semibold tracking-[0.3em] text-ink uppercase sm:text-[11px]"
            style={{ textShadow }}
          >
            {overlay.dateline}
          </span>
        )}
        <h3
          className="mt-1 font-display text-2xl leading-none font-bold tracking-tight text-ink sm:mt-2 sm:text-4xl"
          style={{ textShadow }}
        >
          {overlay.masthead}
        </h3>
        {!compact && overlay.headline && (
          <p
            className="mt-3 max-w-[85%] font-display text-base leading-snug font-semibold text-ink sm:mt-4 sm:text-xl"
            style={{ textShadow }}
          >
            {overlay.headline}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center sm:gap-4 sm:px-10">
      <p
        className={cn(
          "font-display text-xl leading-tight font-bold tracking-tight text-ink text-balance sm:text-3xl",
        )}
        style={{ textShadow }}
      >
        {overlay.headline}
      </p>
      {!compact && overlay.tagline && (
        <p
          className="max-w-xs text-xs tracking-wide text-ink-soft text-balance sm:text-sm"
          style={{ textShadow }}
        >
          {overlay.tagline}
        </p>
      )}
    </div>
  );
}
