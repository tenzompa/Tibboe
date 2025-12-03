import db from "$lib/db.js";

const normalizeAudioPath = (item, index) => {
  const slug =
    (item.translit ?? item.order ?? `${index + 1}`)
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-") || `${index + 1}`;

  // Use singular /audio/alphabet/ and .mp3 per current data
  const defaultPath = `/audio/alphabet/${slug}.mp3`;

  if (item.audio) {
    return item.audio;
  }

  if (item.order) {
    return `/audio/alphabet/${item.order}.mp3`;
  }

  return defaultPath;
};

export async function load() {
  const alphabets = await db.getAlphabets();

  const alphabetsWithAudio = alphabets.map((item, index) => ({
    ...item,
    audio: normalizeAudioPath(item, index)
  }));

  return {
    alphabets: alphabetsWithAudio
  };
}
