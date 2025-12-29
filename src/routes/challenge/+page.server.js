import { redirect } from "@sveltejs/kit";
import db from "$lib/db.js";
import { withAudio } from "$lib/audio.js";

export async function load({ locals }) {
  if (!locals.user) throw redirect(302, "/login");

  const [alphabets, vowels, words] = await Promise.all([
    db.getAlphabets(),
    db.getVowels(),
    db.getWords()
  ]);

  return {
    alphabets: await withAudio("alphabet", alphabets),
    vowels: await withAudio("vowel", vowels),
    words: await withAudio("word", words)
  };
}
