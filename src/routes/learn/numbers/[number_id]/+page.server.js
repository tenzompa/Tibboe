import { error } from "@sveltejs/kit";
import db from "$lib/db.js";
import { withAudio } from "$lib/audio.js";

export async function load({ params }) {
  const number = await db.getNumberById(params.number_id);
  if (!number) throw error(404, "Number not found");

  const [normalized] = await withAudio("number", [number]);
  return { number: normalized };
}
