import { error } from "@sveltejs/kit";
import db from "$lib/db.js";
import { withAudio } from "$lib/audio.js";

export async function load({ params }) {
  const alphabet = await db.getAlphabetById(params.alphabet_id);
  if (!alphabet) throw error(404, "Alphabet not found");

  const [normalized] = await withAudio("alphabet", [alphabet]);
  return { alphabet: normalized };
}
