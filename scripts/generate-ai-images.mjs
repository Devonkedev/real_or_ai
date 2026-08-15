// One-time build script: generates real AI images for the AI artifacts via
// Pollinations.ai (free, keyless text-to-image API) and saves them as
// static files. Run with:
//
//   node scripts/generate-ai-images.mjs [--force]
//
// This is dev-time only — not imported by the Next.js app. Re-running skips
// any id whose output file already exists unless --force is passed.

import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "public", "artifacts", "ai");
const FORCE = process.argv.includes("--force");

const STYLE_PHOTO =
  "grainy black-and-white archival documentary photograph, 1930s-1940s colonial India, candid photojournalism, heavy film grain, soft focus, vintage photo archive aesthetic, period-accurate Indian clothing (dhoti, sari, turban, khadi), no text, no watermark, no signature";

const STYLE_POSTER =
  "aged vintage Indian independence-era poster or handbill, 1930s-1940s lithograph print texture, worn paper, faded ink, photographed under natural light, slightly crooked, foxing stains and creases, no legible text, no readable words, no watermark";

const STYLE_NEWSPAPER =
  "extreme close-up of aged yellowed newsprint paper texture, 1930s-1940s Indian newspaper, dense small blurred illegible printed text columns, ink bleed, worn creased paper, photographed under natural light, no legible words, no watermark";

const TARGETS = [
  // Photographs — full generated scene, no overlay.
  {
    id: "ai-photo-railway-crowd",
    kind: "photo",
    prompt: `${STYLE_PHOTO}, a crowd gathered on a railway platform, one man leaning out of a train carriage window waving to the crowd below`,
    seed: 101,
  },
  {
    id: "ai-photo-charkha-courtyard",
    kind: "photo",
    prompt: `A single Indian woman sitting cross-legged on the ground in a courtyard, operating a traditional wooden charkha: a large spoked wheel connected by a drive band to a small spindle, she turns the big wheel with one hand while drawing cotton thread from the spindle with the other, the wheel and its spokes clearly visible side-on. ${STYLE_PHOTO}`,
    seed: 121,
  },
  {
    id: "ai-photo-jail-release",
    kind: "photo",
    prompt: `Wide shot, full scene, not a close-up portrait: a tall stone jail gate with iron bars and an arched stone wall, a small group of released prisoners in worn clothing walking out through the open gate, family members waiting to greet them. ${STYLE_PHOTO}`,
    seed: 113,
  },
  {
    id: "ai-photo-bonfire-cloth",
    kind: "photo",
    prompt: `Wide shot, full scene, not a close-up portrait: a large outdoor bonfire with visible flames and rising smoke, a pile of cloth garments burning, a crowd of people standing in a circle around the fire watching, town square at dusk. ${STYLE_PHOTO}`,
    seed: 114,
  },
  {
    id: "ai-photo-protest-march",
    kind: "photo",
    prompt: `Wide shot, full scene, not a close-up portrait: a long column of many marchers walking down a narrow street, two people at the front carrying a large fabric banner stretched between two wooden poles held above their heads, buildings lining both sides of the street. ${STYLE_PHOTO}`,
    seed: 115,
  },

  // Posters / propaganda — background texture, headline overlaid as real HTML text.
  {
    id: "ai-poster-noncooperation-charkha",
    kind: "poster",
    prompt: `${STYLE_POSTER}, large charkha spinning wheel illustration at the centre, saffron and green tinted border`,
    seed: 201,
  },
  {
    id: "ai-poster-women-quit-india",
    kind: "poster",
    prompt: `${STYLE_POSTER}, illustration of a raised hand holding a flagpole with a flowing tricolour flag, teal-tinted border`,
    seed: 202,
  },
  {
    id: "ai-poster-vande-mataram",
    kind: "poster",
    prompt: `${STYLE_POSTER}, illustration of a mother-goddess figure representing the nation, ornate decorative border, warm red tint`,
    seed: 203,
  },
  {
    id: "ai-poster-salt-satyagraha",
    kind: "poster",
    prompt: `${STYLE_POSTER}, illustration of salt crystals and a coastal shoreline, earthy brown and tan tones`,
    seed: 204,
  },
  {
    id: "ai-propaganda-colonial-warning",
    kind: "poster",
    prompt: `official colonial government notice, plain cream paper, aged and worn, photographed under natural light, formal black print border ornament, no legible text, no watermark`,
    seed: 205,
  },
  {
    id: "ai-propaganda-curfew-1930",
    kind: "poster",
    prompt: `official colonial government curfew order notice, plain cream paper, aged and worn, photographed under natural light, formal black print border ornament, no legible text, no watermark`,
    seed: 206,
  },
  {
    id: "ai-propaganda-loyalty-poster",
    kind: "poster",
    prompt: `${STYLE_POSTER}, colonial war-effort propaganda illustration, Union Jack bunting motif, muted navy and cream tones`,
    seed: 207,
  },

  // Newspapers — aged newsprint texture background, masthead/headline overlaid as real HTML text.
  {
    id: "ai-newspaper-sentinel",
    kind: "newspaper",
    prompt: STYLE_NEWSPAPER,
    seed: 301,
  },
  {
    id: "ai-newspaper-swaraj-herald",
    kind: "newspaper",
    prompt: STYLE_NEWSPAPER,
    seed: 302,
  },
  {
    id: "ai-newspaper-punjab-tribune",
    kind: "newspaper",
    prompt: STYLE_NEWSPAPER,
    seed: 303,
  },
];

const SIZES = {
  photo: { width: 1200, height: 900 },
  poster: { width: 900, height: 1200 },
  newspaper: { width: 1200, height: 900 },
};

function buildUrl({ prompt, kind, seed }) {
  const { width, height } = SIZES[kind];
  const encoded = encodeURIComponent(prompt);
  return `https://image.pollinations.ai/prompt/${encoded}?width=${width}&height=${height}&nologo=true&seed=${seed}`;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function generateOne(target, attempt = 1) {
  const outPath = path.join(OUT_DIR, `${target.id}.jpg`);
  if (existsSync(outPath) && !FORCE) {
    console.log("skip (exists):", target.id);
    return;
  }

  const url = buildUrl(target);
  console.log(`generating ${target.id} (attempt ${attempt})...`);
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(90_000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 5000) throw new Error(`suspiciously small response (${buf.length} bytes)`);
    await writeFile(outPath, buf);
    console.log("  wrote", path.relative(process.cwd(), outPath), `(${buf.length} bytes)`);
  } catch (err) {
    console.error(`  failed: ${err.message}`);
    if (attempt < 3) {
      await sleep(4000);
      return generateOne(target, attempt + 1);
    }
    console.error(`  giving up on ${target.id} after 3 attempts`);
  }
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const onlyArg = process.argv.find((a) => a.startsWith("--only="));
  const only = onlyArg ? new Set(onlyArg.slice("--only=".length).split(",")) : null;
  const targets = only ? TARGETS.filter((t) => only.has(t.id)) : TARGETS;
  for (const target of targets) {
    await generateOne(target);
    await sleep(2500); // be polite to the free service
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
