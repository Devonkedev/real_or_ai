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

/**
 * A photograph, poster scan or newspaper front page — a real archival image,
 * or (for AI artifacts) a generated one. Posters and newspapers can carry an
 * `overlay` of crisp, accessible printed text on top of the image, so the
 * headline stays real DOM text (legible and screen-reader friendly)
 * regardless of how well any generated background renders text.
 */
export interface ArtifactVisualImage {
  kind: "image";
  src: string;
  alt: string;
  overlay?: {
    kind: "poster" | "newspaper";
    headline?: string;
    tagline?: string;
    masthead?: string;
    dateline?: string;
  };
}

/** A typographic treatment for speeches, letters and documents. */
export interface ArtifactVisualQuote {
  kind: "quote";
  excerpt: string;
  speaker?: string;
  context?: string;
}

export type ArtifactVisual = ArtifactVisualImage | ArtifactVisualQuote;

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
