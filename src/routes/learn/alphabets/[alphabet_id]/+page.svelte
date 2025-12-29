<script>
  export let data;
  const alphabet = data.alphabet;

  function playAudio(src) {
    if (!src) return;
    const audio = new Audio(src);
    audio.play();
  }
</script>

<section class="mt-3">
  <a class="btn btn-link p-0 mb-3" href="/learn/alphabets">← Back to all alphabets</a>

  <div class="card shadow-sm">
    <div class="card-body">
      <div class="d-flex align-items-center justify-content-between">

        <div>
          <h1 class="tw-page-title mb-1">{alphabet.translit}</h1>

          <p class="mb-0">
            Practice the consonant <strong>{alphabet.translit}</strong> and listen to its pronunciation.
          </p>

          {#if alphabet.audio}
            <button
              class="btn btn-outline-secondary btn-sm mt-2"
              type="button"
              on:click={() => playAudio(alphabet.audio)}
            >
              ▶ Play audio
            </button>
          {/if}
        </div>

        <div class="tw-char-big">{alphabet.char}</div>
      </div>
    </div>
  </div>
</section>
