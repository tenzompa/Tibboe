import path from "path";
import { promises as fs } from "fs";
import db from "$lib/db.js";

const VOWEL_AUDIO_DIR = path.resolve("static", "audio", "vowel");

const toSlug = (value, fallback) =>
  (value ?? fallback)
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-") || fallback;

async function loadAvailableVowelFiles() {
  try {
    const files = await fs.readdir(VOWEL_AUDIO_DIR);
    return new Set(files.map((f) => f.toLowerCase()));
  } catch (err) {
    console.warn("Unable to read vowel audio dir:", err?.message);
    return new Set();
  }
}

const pickExistingAudio = (candidatePaths, availableFiles) => {
  for (const candidate of candidatePaths) {
    const base = path.basename(candidate).toLowerCase();
    if (availableFiles.has(base)) return candidate;
  }
  return null;
};

const normalizeAudioPath = (item, index, availableFiles) => {
  const slug = toSlug(item.translit ?? item.order, index + 1);
  const defaultCandidate = `/audio/vowel/${slug}.mp3`;

  const candidates = [];

  if (item.audio) {
    const cleaned = item.audio.includes("/vowels/")
      ? item.audio.replace("/vowels/", "/vowel/")
      : item.audio;
    candidates.push(cleaned);
  }

  if (item.order) {
    candidates.push(`/audio/vowel/${item.order}.mp3`);
  }

  candidates.push(defaultCandidate);

  return pickExistingAudio(candidates, availableFiles) ?? defaultCandidate;
};

export async function load() {
  const [vowels, availableFiles] = await Promise.all([
    db.getVowels(),
    loadAvailableVowelFiles()
  ]);

  const vowelsWithAudio = vowels.map((item, index) => ({
    ...item,
    audio: normalizeAudioPath(item, index, availableFiles)
  }));

  return {
    vowels: vowelsWithAudio
  };
}
