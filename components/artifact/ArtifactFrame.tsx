import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function ArtifactFrame({
  children,
  className,
  aspect = "landscape",
}: {
  children: ReactNode;
  className?: string;
  aspect?: "landscape" | "portrait" | "auto";
}) {
  return (
    <div
      className={cn(
        "paper-grain relative overflow-hidden rounded-sm border border-ink/15 bg-card shadow-[0_1px_2px_rgba(0,0,0,0.06),0_12px_28px_-16px_rgba(20,15,10,0.35)]",
        aspect === "landscape" && "aspect-[4/3] sm:aspect-[16/10]",
        aspect === "portrait" && "aspect-[3/4]",
        className,
      )}
    >
      {children}
    </div>
  );
}
