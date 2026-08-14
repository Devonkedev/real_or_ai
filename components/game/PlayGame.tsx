"use client";

import { useCallback, useEffect, useState } from "react";
import type { Artifact, Verdict } from "@/types/artifact";
import { ROUND_LENGTH, selectRound, type RoundAnswer } from "@/lib/game";
import { Container } from "@/components/site/Container";
import { PlayHeader } from "./PlayHeader";
import { QuestionCard } from "./QuestionCard";
import { RevealPanel } from "./RevealPanel";
import { ResultsScreen } from "./ResultsScreen";

export function PlayGame() {
  const [round, setRound] = useState<Artifact[] | null>(null);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<RoundAnswer[]>([]);
  const [currentGuess, setCurrentGuess] = useState<Verdict | null>(null);
  const [finished, setFinished] = useState(false);

  const startNewRound = useCallback(() => {
    setRound(selectRound(ROUND_LENGTH));
    setIndex(0);
    setAnswers([]);
    setCurrentGuess(null);
    setFinished(false);
    if (typeof window !== "undefined") window.scrollTo({ top: 0 });
  }, []);

  // Random selection must happen client-side only, after hydration, so the
  // server-rendered markup and the first client render match exactly.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional client-only randomization, not a render-time derivation
    startNewRound();
  }, [startNewRound]);

  if (!round) {
    return (
      <Container className="flex flex-1 items-center justify-center py-24">
        <p className="text-sm tracking-[0.2em] text-ink-faint uppercase">
          Preparing the exhibit&hellip;
        </p>
      </Container>
    );
  }

  if (finished) {
    return (
      <Container className="py-14 sm:py-20">
        <ResultsScreen answers={answers} onPlayAgain={startNewRound} />
      </Container>
    );
  }

  const artifact = round[index];
  const isLast = index === round.length - 1;
  const scoreSoFar = answers.filter((a) => a.correct).length;

  function handleAnswer(guess: Verdict) {
    if (currentGuess) return;
    const correct = guess === artifact.answer;
    setAnswers((prev) => [...prev, { artifactId: artifact.id, answer: artifact.answer, guess, correct }]);
    setCurrentGuess(guess);
    window.scrollTo({ top: 0 });
  }

  function handleNext() {
    window.scrollTo({ top: 0 });
    if (isLast) {
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setCurrentGuess(null);
  }

  return (
    <Container className="max-w-3xl py-10 sm:py-14">
      <PlayHeader index={index + 1} total={round.length} score={scoreSoFar} />
      {currentGuess ? (
        <RevealPanel
          key={artifact.id}
          artifact={artifact}
          correct={currentGuess === artifact.answer}
          isLast={isLast}
          onNext={handleNext}
        />
      ) : (
        <QuestionCard key={artifact.id} artifact={artifact} onAnswer={handleAnswer} />
      )}
    </Container>
  );
}
