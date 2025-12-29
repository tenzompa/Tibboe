import db from "$lib/db.js";
import { withAudio } from "$lib/audio.js";

export async function load() {
  const words = await db.getWords();
  return { words: await withAudio("word", words) };
}
