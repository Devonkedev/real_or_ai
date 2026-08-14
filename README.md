# Real or AI? — India's Independence

An interactive Independence Day guessing game. Players are shown
historical-looking artifacts — photographs, posters, newspapers, speeches,
letters, documents and propaganda from India's independence movement — and
have to decide: **real archival record, or AI-generated reconstruction?**

Every round ends with a full reveal: the true story, why the artifact is
real (with a cited source) or exactly what gives an AI reconstruction away,
and the historical context either way.

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4
- [shadcn/ui](https://ui.shadcn.com) (base-ui primitives) + [Lucide](https://lucide.dev) icons
- Static data, no backend or database — all game state lives client-side
- `next/og` for the dynamically generated favicon and Open Graph image

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint    # eslint
```

## Project structure

- `types/artifact.ts` — the artifact data model (`RealArtifact` / `AiArtifact`
  discriminated union, plus the `image` / `quote` / `illustration` visual
  union).
- `data/artifacts.ts` — the artifact database. 24 artifacts (12 real, 12
  AI-generated) across all seven categories. Every real artifact cites a
  verifiable source (Wikimedia Commons, Wikisource, Imperial War Museums,
  legislation.gov.uk); every AI artifact discloses its fabricated status and
  the specific tells that give it away. See `AGENTS.md` for the full content
  rules.
- `lib/game.ts` — round selection, scoring and result-classification logic.
- `components/artifact/` — shared artifact rendering: the archival frame,
  the original SVG/CSS illustrations used for AI "photographs", posters and
  newspapers, and the typographic quote card used for speeches/letters/
  documents.
- `components/game/` — the `/play` state machine, question and reveal
  panels, and the results screen.
- `components/archive/` — the `/archive` browser and card grid.
- `app/` — routes: `/` (landing), `/play`, `/archive`, `/archive/[id]`,
  `/about`.

## Adding an artifact

Add a new entry to the `artifacts` array in `data/artifacts.ts` following the
`RealArtifact` or `AiArtifact` shape from `types/artifact.ts`. No other code
changes are required — the game engine, archive browser and filters all read
from this single array.

## Deploying to Vercel

This is a standard static-friendly Next.js app with no environment variables
or backend services required.

1. Push this repository to GitHub (or your Git provider of choice).
2. In [Vercel](https://vercel.com/new), import the repository — it will be
   detected as a Next.js project automatically.
3. Deploy. No environment variables are needed.

Or, from the CLI:

```bash
npx vercel
```
