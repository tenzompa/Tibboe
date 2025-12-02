// src/routes/progress/+page.server.js
import db from "$lib/db.js";

export async function load() {
  const [alphabets, vowels] = await Promise.all([
    db.getAlphabets(),
    db.getVowels()
  ]);

  return {
    totalAlphabets: alphabets.length,
    totalVowels: vowels.length
  };
}
