import { CheckCircle2, Sparkles } from "lucide-react";
import type { Verdict } from "@/types/artifact";
import { cn } from "@/lib/utils";

export function VerdictBadge({ verdict, className }: { verdict: Verdict; className?: string }) {
  const isReal = verdict === "real";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.14em] uppercase",
        isReal
          ? "border-flag-green-deep/30 bg-flag-green-deep/10 text-flag-green-deep"
          : "border-ai/30 bg-ai/10 text-ai",
        className,
      )}
    >
      {isReal ? (
        <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
      ) : (
        <Sparkles className="h-3 w-3" aria-hidden="true" />
      )}
      {isReal ? "Real" : "AI-Generated"}
    </span>
  );
}
