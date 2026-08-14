import Link from "next/link";
import type { Artifact } from "@/types/artifact";
import { ArtifactVisual } from "@/components/artifact/ArtifactVisual";
import { CategoryBadge } from "@/components/artifact/CategoryBadge";
import { VerdictBadge } from "@/components/artifact/VerdictBadge";
import { DifficultyBadge } from "@/components/artifact/DifficultyBadge";

export function ArchiveCard({ artifact }: { artifact: Artifact }) {
  return (
    <Link
      href={`/archive/${artifact.id}`}
      className="group flex flex-col gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-saffron-deep"
    >
      <div className="transition-transform duration-300 group-hover:-translate-y-0.5">
        <ArtifactVisual artifact={artifact} compact />
      </div>
      <div className="flex flex-col gap-1.5 px-0.5">
        <div className="flex items-center justify-between gap-2">
          <CategoryBadge type={artifact.type} className="text-[0.65rem]" />
          <VerdictBadge verdict={artifact.answer} />
        </div>
        <h3 className="font-display text-base leading-snug font-semibold text-ink group-hover:underline sm:text-lg">
          {artifact.title}
        </h3>
        <DifficultyBadge difficulty={artifact.difficulty} />
      </div>
    </Link>
  );
}
