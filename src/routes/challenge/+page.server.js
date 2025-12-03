import path from "path";
import { promises as fs } from "fs";
import { redirect } from "@sveltejs/kit";
import db from "$lib/db.js";

const toSlug = (value, fallback) =>
  (value ?? fallback)
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-") || fallback;

async function loadFiles(dir) {
  try {
    const files = await fs.readdir(dir);
    return new Set(files.map((f) => f.toLowerCase()));
  } catch (err) {
    console.warn(`Unable to read audio dir ${dir}:`, err?.message);
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

const normalizeAlphabet = (item, index, alphaFiles) => {
  const slug = toSlug(item.translit ?? item.order, index + 1);
  const defaultCandidate = `/audio/alphabet/${slug}.mp3`;

  const candidates = [];
  if (item.audio) candidates.push(item.audio);
  if (item.order) candidates.push(`/audio/alphabet/${item.order}.mp3`);
  candidates.push(defaultCandidate);

  return {
    ...item,
    audio: pickExistingAudio(candidates, alphaFiles) ?? defaultCandidate
  };
};

const normalizeVowel = (item, index, vowelFiles) => {
  const slug = toSlug(item.translit ?? item.order, index + 1);
  const defaultCandidate = `/audio/vowel/${slug}.mp3`;

  const candidates = [];
  if (item.audio) {
    const cleaned = item.audio.includes("/vowels/")
      ? item.audio.replace("/vowels/", "/vowel/")
      : item.audio;
    candidates.push(cleaned);
  }
  if (item.order) candidates.push(`/audio/vowel/${item.order}.mp3`);
  candidates.push(defaultCandidate);

  return {
    ...item,
    audio: pickExistingAudio(candidates, vowelFiles) ?? defaultCandidate
  };
};

export async function load({ locals }) {
  if (!locals.user) {
    throw redirect(302, "/login");
  }

  const [alphabets, vowels, alphaFiles, vowelFiles] = await Promise.all([
    db.getAlphabets(),
    db.getVowels(),
    loadFiles(path.resolve("static", "audio", "alphabet")),
    loadFiles(path.resolve("static", "audio", "vowel"))
  ]);

  return {
    alphabets: alphabets.map((item, index) =>
      normalizeAlphabet(item, index, alphaFiles)
    ),
    vowels: vowels.map((item, index) => normalizeVowel(item, index, vowelFiles))
  };
}
