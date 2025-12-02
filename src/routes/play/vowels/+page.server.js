import db from "$lib/db.js";

export async function load() {
  const vowels = await db.getVowels();

  return {
    vowels
  };
}
