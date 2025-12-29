import path from "path";
import { promises as fs } from "fs";
import { error } from "@sveltejs/kit";
import db from "$lib/db.js";

const WORD_AUDIO_DIR = path.resolve("static", "audio", "word");

const toSlug = (value, fallback) =>
  (value ?? fallback)
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-") || fallback;

async function loadAvailableWordFiles() {
  try {
    const files = await fs.readdir(WORD_AUDIO_DIR);
    return new Set(files.map((f) => f.toLowerCase()));
  } catch (err) {
    console.warn("Unable to read word audio dir:", err?.message);
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

const normalizeAudioPath = (item, availableFiles) => {
  const slug = toSlug(item.translit ?? item.order, "1");
  const defaultCandidate = `/audio/word/${slug}.mp3`;

  const candidates = [];

  if (item.audio) {
    const cleaned = item.audio.includes("/words/")
      ? item.audio.replace("/words/", "/word/")
      : item.audio;
    candidates.push(cleaned);
  }

  if (item.order) {
    candidates.push(`/audio/word/${item.order}.mp3`);
  }

  candidates.push(defaultCandidate);

  return pickExistingAudio(candidates, availableFiles) ?? defaultCandidate;
};

export async function load({ params }) {
  const { word_id } = params;

  const [word, availableFiles] = await Promise.all([
    db.getWordById(word_id),
    loadAvailableWordFiles()
  ]);

  if (!word) {
    throw error(404, "Word not found");
  }

  return {
    word: {
      ...word,
      audio: normalizeAudioPath(word, availableFiles)
    }
  };
}
