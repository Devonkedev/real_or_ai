import type { Difficulty } from "@/types/artifact";
import { cn } from "@/lib/utils";

const LABEL: Record<Difficulty, string> = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

export function DifficultyBadge({ difficulty, className }: { difficulty: Difficulty; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-[0.65rem] font-medium tracking-[0.1em] text-ink-faint uppercase",
        className,
      )}
    >
      <span className="flex gap-0.5" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              i < (difficulty === "easy" ? 1 : difficulty === "medium" ? 2 : 3)
                ? "bg-saffron-deep"
                : "bg-ink/15",
            )}
          />
        ))}
      </span>
      {LABEL[difficulty]}
    </span>
  );
}
