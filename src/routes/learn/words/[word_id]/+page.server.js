import { error } from "@sveltejs/kit";
import db from "$lib/db.js";
import { withAudio } from "$lib/audio.js";

export async function load({ params }) {
  const word = await db.getWordById(params.word_id);
  if (!word) throw error(404, "Word not found");

  const [normalized] = await withAudio("word", [word]);
  return { word: normalized };
}
