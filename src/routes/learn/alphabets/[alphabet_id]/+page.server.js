import { error } from "@sveltejs/kit";
import db from "$lib/db.js";

const normalizeAudioPath = (alphabet, index = 0) => {
  const slug =
    (alphabet.translit ?? alphabet.order ?? `${index + 1}`)
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-") || `${index + 1}`;

  const defaultPath = `/audio/alphabet/${slug}.mp3`;

  if (alphabet.audio) {
    return alphabet.audio;
  }

  if (alphabet.order) return `/audio/alphabet/${alphabet.order}.mp3`;

  return defaultPath;
};

export async function load({ params }) {
  const { alphabet_id } = params;

  const alphabet = await db.getAlphabetById(alphabet_id);

  if (!alphabet) {
    throw error(404, "Alphabet not found");
  }

  return {
    alphabet: {
      ...alphabet,
      audio: normalizeAudioPath(alphabet)
    }
  };
}
