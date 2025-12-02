import db from "$lib/db.js";

export async function load() {
  const alphabets = await db.getAlphabets();

  return {
    alphabets
  };
}
