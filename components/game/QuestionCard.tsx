"use client";

import { CheckCircle2, Sparkles } from "lucide-react";
import type { Artifact, Verdict } from "@/types/artifact";
import { CategoryBadge } from "@/components/artifact/CategoryBadge";
import { ArtifactVisual } from "@/components/artifact/ArtifactVisual";

export function QuestionCard({
  artifact,
  onAnswer,
}: {
  artifact: Artifact;
  onAnswer: (guess: Verdict) => void;
}) {
  return (
    <div
      key={artifact.id}
      className="animate-in fade-in zoom-in-95 flex flex-col gap-6 duration-500 motion-reduce:animate-none"
    >
      <CategoryBadge type={artifact.type} />

      <ArtifactVisual artifact={artifact} revealed={false} priority />

      <div className="flex flex-col items-center gap-5 pt-2 text-center">
        <h2 className="font-display text-2xl font-semibold text-balance text-ink sm:text-3xl">
          Was this artifact real or AI-generated?
        </h2>
        <div className="grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          <button
            type="button"
            onClick={() => onAnswer("real")}
            className="group flex min-h-16 items-center justify-center gap-2.5 rounded-sm border-2 border-flag-green-deep/70 bg-card px-6 py-4 text-base font-semibold tracking-[0.08em] text-flag-green-deep uppercase transition-colors hover:bg-flag-green-deep hover:text-parchment focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flag-green-deep active:translate-y-px sm:min-h-20 sm:text-lg"
          >
            <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
            Real
          </button>
          <button
            type="button"
            onClick={() => onAnswer("ai")}
            className="group flex min-h-16 items-center justify-center gap-2.5 rounded-sm border-2 border-saffron-deep/70 bg-card px-6 py-4 text-base font-semibold tracking-[0.08em] text-saffron-deep uppercase transition-colors hover:bg-saffron-deep hover:text-parchment focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron-deep active:translate-y-px sm:min-h-20 sm:text-lg"
          >
            <Sparkles className="h-5 w-5" aria-hidden="true" />
            AI-Generated
          </button>
        </div>
      </div>
    </div>
  );
}
