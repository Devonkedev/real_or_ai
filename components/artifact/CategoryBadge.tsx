import { CATEGORY_LABELS, type ArtifactCategory } from "@/types/artifact";
import { cn } from "@/lib/utils";

export function CategoryBadge({
  type,
  className,
}: {
  type: ArtifactCategory;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-ink-faint uppercase",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-deep" aria-hidden="true" />
      {CATEGORY_LABELS[type]}
    </span>
  );
}
