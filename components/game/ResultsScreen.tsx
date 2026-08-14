"use client";

import Link from "next/link";
import { ArrowRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScoreCountUp } from "./ScoreCountUp";
import {
  BLIND_SPOT_COPY,
  RANK_DESCRIPTIONS,
  blindSpotFor,
  rankForScore,
  summarizeAnswers,
  type RoundAnswer,
} from "@/lib/game";
import { cn } from "@/lib/utils";

export function ResultsScreen({
  answers,
  onPlayAgain,
}: {
  answers: RoundAnswer[];
  onPlayAgain: () => void;
}) {
  const summary = summarizeAnswers(answers);
  const rank = rankForScore(summary.score, summary.total);
  const blindSpot = blindSpotFor(summary);

  return (
    <div className="animate-in fade-in zoom-in-95 mx-auto flex max-w-2xl flex-col items-center gap-8 py-6 text-center duration-500 motion-reduce:animate-none sm:gap-10">
      <div className="tricolour-rule w-20" />

      <div className="flex flex-col items-center gap-3">
        <h1 className="text-xs font-semibold tracking-[0.24em] text-ink-faint uppercase">
          Your Score
        </h1>
        <p className="font-display text-6xl font-bold tracking-tight text-ink sm:text-7xl">
          <ScoreCountUp target={summary.score} />
          <span className="text-ink-faint"> / {summary.total}</span>
        </p>
        <p className="font-display text-xl font-semibold tracking-tight text-saffron-deep sm:text-2xl">
          {rank}
        </p>
        <p className="max-w-md text-balance text-ink-soft">{RANK_DESCRIPTIONS[rank]}</p>
      </div>

      <ScoreStrip answers={answers} />

      <div className="grid w-full grid-cols-3 gap-3 sm:gap-4">
        <StatTile label="Accuracy" value={`${summary.accuracy}%`} />
        <StatTile label="Real Spotted" value={`${summary.realCorrect}/${summary.realTotal}`} />
        <StatTile label="AI Spotted" value={`${summary.aiCorrect}/${summary.aiTotal}`} />
      </div>

      <div className="w-full rounded-sm border border-hairline bg-card px-6 py-6 text-left">
        <h3 className="mb-2 text-xs font-semibold tracking-[0.2em] text-saffron-deep uppercase">
          Your Blind Spots
        </h3>
        <p className="leading-relaxed text-ink-soft">{BLIND_SPOT_COPY[blindSpot]}</p>
      </div>

      <div className="flex w-full flex-col gap-3 sm:flex-row">
        <Button
          onClick={onPlayAgain}
          size="lg"
          className="h-auto flex-1 justify-center rounded-sm bg-navy px-6 py-3.5 text-sm font-semibold tracking-[0.08em] text-parchment uppercase hover:bg-navy-soft"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Play Again
        </Button>
        <Button
          render={<Link href="/archive" />}
          nativeButton={false}
          variant="outline"
          size="lg"
          className="h-auto flex-1 justify-center rounded-sm border-ink/25 px-6 py-3.5 text-sm font-semibold tracking-[0.08em] text-ink uppercase hover:bg-secondary"
        >
          Explore the Archive
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}

function ScoreStrip({ answers }: { answers: RoundAnswer[] }) {
  return (
    <div
      className="flex w-full flex-wrap justify-center gap-1.5"
      role="img"
      aria-label={`Round-by-round results: ${answers.filter((a) => a.correct).length} correct out of ${answers.length}`}
    >
      {answers.map((a, i) => (
        <span
          key={a.artifactId + i}
          className={cn(
            "h-3 w-3 rounded-[2px] sm:h-3.5 sm:w-3.5",
            a.correct ? "bg-flag-green-deep" : "bg-ai",
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-sm border border-hairline bg-card px-2 py-4 sm:px-3">
      <span className="font-display text-2xl font-bold text-ink sm:text-3xl">{value}</span>
      <span className="text-center text-[0.65rem] leading-tight tracking-[0.1em] text-ink-faint uppercase">
        {label}
      </span>
    </div>
  );
}
