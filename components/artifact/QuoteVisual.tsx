import { Quote } from "lucide-react";
import type { ArtifactVisualQuote } from "@/types/artifact";
import { cn } from "@/lib/utils";

export function QuoteVisual({
  visual,
  revealed,
  compact = false,
  className,
}: {
  visual: ArtifactVisualQuote;
  revealed: boolean;
  compact?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "paper-grain flex flex-col justify-center gap-6 border border-ink/15 bg-card shadow-[0_1px_2px_rgba(0,0,0,0.06),0_12px_28px_-16px_rgba(20,15,10,0.35)]",
        compact
          ? "min-h-[180px] gap-3 px-5 py-6"
          : "min-h-[280px] px-6 py-10 sm:min-h-[340px] sm:px-14 sm:py-14",
        className,
      )}
    >
      <Quote
        className={cn("shrink-0 text-saffron-deep/70", compact ? "h-4 w-4" : "h-7 w-7")}
        aria-hidden="true"
      />
      <p
        className={cn(
          "font-display text-balance font-medium text-ink italic",
          compact
            ? "line-clamp-4 text-sm leading-snug"
            : "text-xl leading-snug sm:text-2xl md:text-[1.75rem] md:leading-tight",
        )}
      >
        {visual.excerpt}
      </p>
      {revealed && !compact && (visual.speaker || visual.context) && (
        <div className="flex flex-col gap-1 border-t border-ink/15 pt-4">
          {visual.speaker && (
            <p className="font-sans text-sm font-semibold tracking-wide text-ink">
              {visual.speaker}
            </p>
          )}
          {visual.context && (
            <p className="font-sans text-xs tracking-wide text-ink-faint uppercase">
              {visual.context}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
