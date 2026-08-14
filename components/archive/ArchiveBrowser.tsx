"use client";

import { useMemo, useState } from "react";
import type { Artifact, ArtifactCategory } from "@/types/artifact";
import { ArchiveCard } from "./ArchiveCard";
import { cn } from "@/lib/utils";

type FilterKey = "all" | ArtifactCategory | "real" | "ai";

const CATEGORY_FILTER_LABELS: Record<ArtifactCategory, string> = {
  photograph: "Photographs",
  poster: "Posters",
  newspaper: "Newspapers",
  speech: "Speeches",
  letter: "Letters",
  document: "Documents",
  propaganda: "Propaganda",
};

const CATEGORY_ORDER: ArtifactCategory[] = [
  "photograph",
  "poster",
  "newspaper",
  "speech",
  "letter",
  "document",
  "propaganda",
];

export function ArchiveBrowser({ artifacts }: { artifacts: Artifact[] }) {
  const [filter, setFilter] = useState<FilterKey>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return artifacts;
    if (filter === "real" || filter === "ai") return artifacts.filter((a) => a.answer === filter);
    return artifacts.filter((a) => a.type === filter);
  }, [filter, artifacts]);

  return (
    <div className="flex flex-col gap-8">
      <div role="group" aria-label="Filter the archive" className="flex flex-wrap items-center gap-2">
        <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>
          All
        </FilterChip>
        {CATEGORY_ORDER.map((cat) => (
          <FilterChip key={cat} active={filter === cat} onClick={() => setFilter(cat)}>
            {CATEGORY_FILTER_LABELS[cat]}
          </FilterChip>
        ))}
        <span className="mx-1 h-5 w-px bg-hairline" aria-hidden="true" />
        <FilterChip active={filter === "real"} onClick={() => setFilter("real")}>
          Real
        </FilterChip>
        <FilterChip active={filter === "ai"} onClick={() => setFilter("ai")}>
          AI
        </FilterChip>
      </div>

      <p className="text-sm text-ink-faint" aria-live="polite">
        {filtered.length} artifact{filtered.length === 1 ? "" : "s"}
      </p>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((artifact) => (
          <ArchiveCard key={artifact.id} artifact={artifact} />
        ))}
      </div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron-deep",
        active
          ? "border-navy bg-navy text-parchment"
          : "border-hairline bg-card text-ink-soft hover:border-ink/30 hover:text-ink",
      )}
    >
      {children}
    </button>
  );
}
