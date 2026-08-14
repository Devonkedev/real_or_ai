import type { Metadata } from "next";
import { PlayGame } from "@/components/game/PlayGame";

export const metadata: Metadata = {
  title: "Play",
  description:
    "Fifteen rounds. Photographs, posters, newspapers, speeches, letters and documents from India's independence era — decide real or AI-generated.",
};

export default function PlayPage() {
  return <PlayGame />;
}
