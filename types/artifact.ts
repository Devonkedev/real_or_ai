export type ArtifactCategory =
  | "photograph"
  | "poster"
  | "newspaper"
  | "speech"
  | "letter"
  | "document"
  | "propaganda";

export type Difficulty = "easy" | "medium" | "hard";

export type Verdict = "real" | "ai";

export const CATEGORY_LABELS: Record<ArtifactCategory, string> = {
  photograph: "Historical Photograph",
  poster: "Political Poster",
  newspaper: "Newspaper Clipping",
  speech: "Speech Excerpt",
  letter: "Letter",
  document: "Document",
  propaganda: "Propaganda Material",
};

/** A real archival photograph, poster scan, newspaper front page, etc. */
export interface ArtifactVisualImage {
  kind: "image";
  src: string;
  alt: string;
}

/** A typographic treatment for speeches, letters and documents. */
export interface ArtifactVisualQuote {
  kind: "quote";
  excerpt: string;
  speaker?: string;
  context?: string;
}

/** An original illustrated reconstruction used to stand in for an AI-generated artifact. */
export interface ArtifactVisualIllustration {
  kind: "illustration";
  render: "portrait-photo" | "crowd-photo" | "poster" | "newspaper";
  variant: 1 | 2 | 3 | 4 | 5 | 6;
  tone?: "campaign" | "notice";
  headline?: string;
  masthead?: string;
  dateline?: string;
  tagline?: string;
  caption?: string;
}

export type ArtifactVisual =
  | ArtifactVisualImage
  | ArtifactVisualQuote
  | ArtifactVisualIllustration;

interface ArtifactCommon {
  id: string;
  type: ArtifactCategory;
  title: string;
  difficulty: Difficulty;
  visual: ArtifactVisual;
}

export interface RealArtifact extends ArtifactCommon {
  answer: "real";
  date: string;
  location: string;
  people?: string[];
  /** THE STORY — a concise, informative account of the artifact. */
  explanation: string;
  /** WHY IT'S REAL — provenance and visual/historical detail. */
  whyReal: string;
  sourceName: string;
  sourceUrl: string;
}

export interface AiArtifact extends ArtifactCommon {
  answer: "ai";
  generated: true;
  date?: string;
  location?: string;
  /** THE STORY — what the reconstruction purports to show. */
  explanation: string;
  /** Real historical background that makes the fabrication plausible. */
  historicalContext: string;
  /** WHY IT LOOKS REAL — the specific tells, revealed after the guess. */
  deceptionDetails: string[];
}

export type Artifact = RealArtifact | AiArtifact;
