import Image from "next/image";
import type { Artifact } from "@/types/artifact";
import { ArtifactFrame } from "./ArtifactFrame";
import { PhotoIllustration } from "./PhotoIllustration";
import { PosterIllustration } from "./PosterIllustration";
import { NewspaperIllustration } from "./NewspaperIllustration";
import { QuoteVisual } from "./QuoteVisual";

/**
 * Renders whatever an artifact's `visual` requires. `revealed` controls only
 * the extrinsic metadata (speaker attribution, museum-label context) that
 * isn't literally printed/photographed on the artifact itself — the image or
 * illustration content is always shown in full. `compact` produces a smaller
 * thumbnail treatment for grid cards.
 */
export function ArtifactVisual({
  artifact,
  revealed = true,
  priority = false,
  compact = false,
}: {
  artifact: Artifact;
  revealed?: boolean;
  priority?: boolean;
  compact?: boolean;
}) {
  const { visual } = artifact;

  if (visual.kind === "image") {
    return (
      <ArtifactFrame aspect={compact ? "landscape" : "landscape"}>
        <Image
          src={visual.src}
          alt={visual.alt}
          fill
          sizes={compact ? "(min-width: 768px) 320px, 50vw" : "(min-width: 768px) 640px, 100vw"}
          className="object-cover"
          priority={priority}
        />
      </ArtifactFrame>
    );
  }

  if (visual.kind === "illustration") {
    return (
      <ArtifactFrame>
        {visual.render === "poster" && (
          <PosterIllustration
            variant={visual.variant}
            tone={visual.tone}
            headline={visual.headline}
            tagline={compact ? undefined : visual.tagline}
          />
        )}
        {visual.render === "newspaper" && (
          <NewspaperIllustration
            variant={visual.variant as 1 | 2}
            masthead={visual.masthead}
            headline={visual.headline}
            dateline={visual.dateline}
          />
        )}
        {(visual.render === "crowd-photo" || visual.render === "portrait-photo") && (
          <div
            role="img"
            aria-label={visual.caption ?? "An archival-style photograph."}
            className="h-full w-full"
          >
            <PhotoIllustration variant={visual.variant} render={visual.render} />
          </div>
        )}
      </ArtifactFrame>
    );
  }

  return <QuoteVisual visual={visual} revealed={revealed} compact={compact} />;
}
