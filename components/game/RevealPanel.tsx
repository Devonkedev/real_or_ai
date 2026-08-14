"use client";

import { ArrowRight, CheckCircle2, ExternalLink, MapPin, XCircle } from "lucide-react";
import type { Artifact } from "@/types/artifact";
import { CategoryBadge } from "@/components/artifact/CategoryBadge";
import { ArtifactVisual } from "@/components/artifact/ArtifactVisual";
import { cn } from "@/lib/utils";

export function RevealPanel({
  artifact,
  correct,
  isLast,
  onNext,
}: {
  artifact: Artifact;
  correct: boolean;
  isLast: boolean;
  onNext: () => void;
}) {
  const isReal = artifact.answer === "real";

  return (
    <div className="animate-in fade-in slide-in-from-bottom-3 flex flex-col gap-7 duration-500 motion-reduce:animate-none">
      <CategoryBadge type={artifact.type} />

      <ArtifactVisual artifact={artifact} revealed />

      <div className="flex flex-col gap-2 text-center sm:text-left">
        <div
          className={cn(
            "flex items-center justify-center gap-2 font-display text-2xl font-bold tracking-tight sm:justify-start sm:text-3xl",
            correct ? "text-flag-green-deep" : "text-ai",
          )}
        >
          {correct ? (
            <CheckCircle2 className="h-7 w-7 shrink-0" aria-hidden="true" />
          ) : (
            <XCircle className="h-7 w-7 shrink-0" aria-hidden="true" />
          )}
          {correct ? "Correct" : "Not Quite"}
        </div>
        <p className="text-lg text-ink-soft">
          This artifact {isReal ? "is " : "was "}
          <strong className="font-semibold text-ink">
            {isReal ? "REAL" : "AI-GENERATED"}
          </strong>
          .
        </p>
      </div>

      <div className="flex flex-col gap-1 border-y border-hairline py-4">
        <h3 className="font-display text-xl font-semibold text-ink">{artifact.title}</h3>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-faint">
          <span>{artifact.date}</span>
          {artifact.location && (
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {artifact.location}
            </span>
          )}
        </div>
      </div>

      <section className="flex flex-col gap-2">
        <h4 className="text-xs font-semibold tracking-[0.18em] text-saffron-deep uppercase">
          The Story
        </h4>
        <p className="leading-relaxed text-ink-soft">{artifact.explanation}</p>
      </section>

      {isReal ? (
        <section className="flex flex-col gap-2">
          <h4 className="text-xs font-semibold tracking-[0.18em] text-saffron-deep uppercase">
            Why It&rsquo;s Real
          </h4>
          <p className="leading-relaxed text-ink-soft">{artifact.whyReal}</p>
        </section>
      ) : (
        <section className="flex flex-col gap-3">
          <h4 className="text-xs font-semibold tracking-[0.18em] text-saffron-deep uppercase">
            Why It Looks Real
          </h4>
          <p className="leading-relaxed text-ink-soft">{artifact.historicalContext}</p>
          <p className="text-sm font-semibold text-ink">What gives it away:</p>
          <ul className="flex flex-col gap-2">
            {artifact.deceptionDetails.map((detail) => (
              <li key={detail} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ai" aria-hidden="true" />
                {detail}
              </li>
            ))}
          </ul>
          <div className="mt-1 rounded-sm border border-ai/30 bg-ai/[0.06] px-4 py-3 text-sm font-medium text-ink">
            AI-generated reconstruction — not an authentic historical document.
          </div>
        </section>
      )}

      <section className="flex flex-col gap-2">
        <h4 className="text-xs font-semibold tracking-[0.18em] text-saffron-deep uppercase">
          {isReal ? "Source" : "Status"}
        </h4>
        {isReal ? (
          <a
            href={artifact.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-navy underline decoration-navy/40 underline-offset-4 hover:decoration-navy"
          >
            {artifact.sourceName}
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        ) : (
          <p className="text-sm leading-relaxed text-ink-faint">
            No historical source exists for this artifact — it was built as a
            reconstruction for this game and does not appear in any archive.
          </p>
        )}
      </section>

      <button
        type="button"
        onClick={onNext}
        className="mt-2 inline-flex items-center justify-center gap-2 self-stretch rounded-sm bg-navy px-6 py-4 text-sm font-semibold tracking-[0.1em] text-parchment uppercase transition-colors hover:bg-navy-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron-deep active:translate-y-px sm:self-end sm:px-8"
      >
        {isLast ? "See Your Results" : "Next Artifact"}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}
