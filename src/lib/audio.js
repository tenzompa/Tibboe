// src/lib/audio.js
import path from "path";
import { promises as fs } from "fs";

const cache = new Map(); // kind -> { files:Set<string>, ts:number }
const TTL_MS = 5 * 60 * 1000;

const toSlug = (value, fallback) =>
  (value ?? fallback)
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-") || fallback;

async function loadAvailableFiles(kind) {
  const now = Date.now();
  const existing = cache.get(kind);
  if (existing && now - existing.ts < TTL_MS) return existing.files;

  const dir = path.resolve("static", "audio", kind);
  try {
    const files = await fs.readdir(dir);
    const set = new Set(files.map((f) => f.toLowerCase()));
    cache.set(kind, { files: set, ts: now });
    return set;
  } catch (err) {
    console.warn(`Unable to read audio dir for kind=${kind}:`, err?.message);
    const set = new Set();
    cache.set(kind, { files: set, ts: now });
    return set;
  }
}

function pickExistingAudio(candidatePaths, availableFiles) {
  for (const candidate of candidatePaths) {
    const base = path.basename(candidate).toLowerCase();
    if (availableFiles.has(base)) return candidate;
  }
  return null;
}

/**
 * kind: "alphabet" | "vowel" | "word"
 * items: array of db items
 * opts: { slugFrom?: (item) => string, fallbackFrom?: (item, index) => string }
 */
export async function withAudio(kind, items, opts = {}) {
  const files = await loadAvailableFiles(kind);

  return items.map((item, index) => {
    const slug =
      opts.slugFrom?.(item) ??
      toSlug(item.translit ?? item.id ?? item.order, `${index + 1}`);

    const defaultCandidate = `/audio/${kind}/${slug}.mp3`;

    const candidates = [];

    if (item.audio) {
      // normalize legacy plural folders
      const cleaned =
        kind === "vowel"
          ? item.audio.replace("/vowels/", "/vowel/")
          : kind === "word"
          ? item.audio.replace("/words/", "/word/")
          : item.audio;
      candidates.push(cleaned);
    }

    if (item.id && kind === "word") candidates.push(`/audio/word/${item.id}.mp3`);
    if (item.order) candidates.push(`/audio/${kind}/${item.order}.mp3`);
    candidates.push(defaultCandidate);

    return {
      ...item,
      audio: pickExistingAudio(candidates, files) ?? defaultCandidate
    };
  });
}
