import { artifacts } from "@/data/artifacts";
import type { Artifact, Verdict } from "@/types/artifact";

export const ROUND_LENGTH = 15;

/** Fisher–Yates shuffle, non-mutating. */
function shuffle<T>(input: T[]): T[] {
  const arr = [...input];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Selects a random set of rounds with no duplicate artifacts. */
export function selectRound(size: number = ROUND_LENGTH): Artifact[] {
  const pool = shuffle(artifacts);
  return pool.slice(0, Math.min(size, pool.length));
}

export interface RoundAnswer {
  artifactId: string;
  answer: Verdict;
  guess: Verdict;
  correct: boolean;
}

export interface ScoreSummary {
  score: number;
  total: number;
  accuracy: number;
  realTotal: number;
  realCorrect: number;
  aiTotal: number;
  aiCorrect: number;
}

export function summarizeAnswers(answers: RoundAnswer[]): ScoreSummary {
  const total = answers.length;
  const score = answers.filter((a) => a.correct).length;
  const realAnswers = answers.filter((a) => a.answer === "real");
  const aiAnswers = answers.filter((a) => a.answer === "ai");
  return {
    score,
    total,
    accuracy: total === 0 ? 0 : Math.round((score / total) * 100),
    realTotal: realAnswers.length,
    realCorrect: realAnswers.filter((a) => a.correct).length,
    aiTotal: aiAnswers.length,
    aiCorrect: aiAnswers.filter((a) => a.correct).length,
  };
}

export type ScoreRank =
  | "HISTORY DETECTIVE"
  | "ARCHIVE EXPLORER"
  | "CURIOUS CITIZEN"
  | "THE AI ALMOST GOT YOU";

export function rankForScore(score: number, total: number = ROUND_LENGTH): ScoreRank {
  const ratio = score / total;
  if (ratio >= 13 / 15) return "HISTORY DETECTIVE";
  if (ratio >= 10 / 15) return "ARCHIVE EXPLORER";
  if (ratio >= 7 / 15) return "CURIOUS CITIZEN";
  return "THE AI ALMOST GOT YOU";
}

export const RANK_DESCRIPTIONS: Record<ScoreRank, string> = {
  "HISTORY DETECTIVE":
    "You can distinguish history from hallucination better than most. Archival instincts, sharp eye for detail.",
  "ARCHIVE EXPLORER":
    "A well-trained eye. You caught most of what mattered and only slipped on the genuinely deceptive ones.",
  "CURIOUS CITIZEN":
    "You've got the instincts, but the line between record and reconstruction still gets you sometimes.",
  "THE AI ALMOST GOT YOU":
    "The reconstructions had the upper hand this round. Worth another pass through the exhibit.",
};

export type BlindSpot = "ai-leaning" | "real-leaning" | "balanced";

export function blindSpotFor(summary: ScoreSummary): BlindSpot {
  const realMisses = summary.realTotal - summary.realCorrect;
  const aiMisses = summary.aiTotal - summary.aiCorrect;
  if (aiMisses > realMisses) return "ai-leaning";
  if (realMisses > aiMisses) return "real-leaning";
  return "balanced";
}

export const BLIND_SPOT_COPY: Record<BlindSpot, string> = {
  "ai-leaning":
    "You were more likely to mistake AI reconstructions for authentic history — the deceptive details fooled you more often than the real archive did.",
  "real-leaning":
    "You were more skeptical of authentic historical material than of the AI reconstructions — real history sometimes looks stranger than fiction.",
  balanced:
    "You misjudged real and AI artifacts in roughly equal measure — no clear blind spot in either direction.",
};
