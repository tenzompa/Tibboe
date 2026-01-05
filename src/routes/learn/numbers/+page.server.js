import db from "$lib/db.js";
import { withAudio } from "$lib/audio.js";

export async function load() {
  const numbers = await db.getNumbers();
  return { numbers: await withAudio("number", numbers) };
}
