import db from "$lib/db.js";
import { withAudio } from "$lib/audio.js";

export async function load() {
  const alphabets = await db.getAlphabets();
  return { alphabets: await withAudio("alphabet", alphabets) };
}
