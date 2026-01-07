// src/lib/audio.js
import path from "path";
import { promises as fs } from "fs";

const cache = new Map(); 
const TTL_MS = 5 * 60 * 1000;

const toSlug = (value, fallback) =>
  (value ?? fallback)
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-") || fallback;

async function loadAvailableFiles(kind) {
  const now = Date.now();
  const cached = cache.get(kind);
  if (cached && now - cached.ts < TTL_MS) return cached.files;

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

function pickExistingAudio(paths, files) {
  for (const p of paths) {
    const base = path.basename(p).toLowerCase();
    if (files.has(base)) return p;
  }
  return null;
}

/**
 * kind: "alphabet" | "vowel" | "word" | "number"
 * items: array of db items
 */
export async function withAudio(kind, items) {
  const files = await loadAvailableFiles(kind);

  return items.map((item, index) => {
    const slug = toSlug(item.translit ?? item.id ?? item.order, `${index + 1}`);

    const candidates = [];
    if (item.audio) candidates.push(item.audio);
    if (item.order) candidates.push(`/audio/${kind}/${item.order}.mp3`);

    const fallback = `/audio/${kind}/${slug}.mp3`;
    candidates.push(fallback);

    return {
      ...item,
      audio: pickExistingAudio(candidates, files) ?? fallback
    };
  });
}
