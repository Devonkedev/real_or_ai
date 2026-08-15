import Image from "next/image";
import type { Artifact } from "@/types/artifact";
import { ArtifactFrame } from "./ArtifactFrame";
import { ImageOverlayText } from "./ImageOverlayText";
import { QuoteVisual } from "./QuoteVisual";

/**
 * Renders whatever an artifact's `visual` requires. `revealed` controls only
 * the extrinsic metadata (speaker attribution, museum-label context) that
 * isn't literally printed/photographed on the artifact itself — the image
 * content is always shown in full. `compact` produces a smaller thumbnail
 * treatment for grid cards.
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
      <ArtifactFrame>
        <Image
          src={visual.src}
          alt={visual.alt}
          fill
          sizes={compact ? "(min-width: 768px) 320px, 50vw" : "(min-width: 768px) 640px, 100vw"}
          className="object-cover"
          priority={priority}
        />
        {visual.overlay && <ImageOverlayText overlay={visual.overlay} compact={compact} />}
      </ArtifactFrame>
    );
  }

  return <QuoteVisual visual={visual} revealed={revealed} compact={compact} />;
}
