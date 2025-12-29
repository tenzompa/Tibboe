import { error } from "@sveltejs/kit";
import db from "$lib/db.js";
import { withAudio } from "$lib/audio.js";

export async function load({ params }) {
  const vowel = await db.getVowelById(params.vowel_id);
  if (!vowel) throw error(404, "Vowel not found");

  const [normalized] = await withAudio("vowel", [vowel]);
  return { vowel: normalized };
}
