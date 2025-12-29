<script>
  export let data;
  const vowel = data.vowel;

  function playAudio(src) {
    if (!src) return;
    const audio = new Audio(src);
    audio.play();
  }
</script>

<section class="mt-3">
  <a class="btn btn-link p-0 mb-3" href="/learn/vowels">← Back to all vowels</a>

  <div class="card shadow-sm">
    <div class="card-body">
      <div class="d-flex align-items-center justify-content-between">
        <div class="me-3">
          <h1 class="tw-page-title mb-1">{vowel.translit}</h1>

          <p class="mb-0">
            Practice the vowel <strong>{vowel.translit}</strong> and listen to its sound.
          </p>
          {#if vowel.audio}
            <button
              class="btn btn-outline-secondary btn-sm mt-2"
              type="button"
              on:click={() => playAudio(vowel.audio)}
            >
              ▶ Play audio
            </button>
          {/if}
        </div>
        <div class="tw-char-big">{vowel.char}</div>
      </div>
    </div>
  </div>
</section>
