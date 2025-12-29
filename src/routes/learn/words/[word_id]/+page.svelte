<script>
  export let data;
  const word = data.word;

  function playAudio(src) {
    if (!src) return;
    const audio = new Audio(src);
    audio.play();
  }
</script>

<section class="mt-3">
  <a class="btn btn-link p-0 mb-3" href="/learn/words">← Back to all words</a>

  <div class="card shadow-sm">
    <div class="card-body">
      <div class="d-flex flex-column align-items-center text-center gap-3">
        <h1 class="tw-page-title mb-0">{word.translit}</h1>

        {#if word.image}
          <img
            src={word.image}
            alt={word.translit}
            class="tw-word-detail-img"
            loading="lazy"
          />
        {/if}

        <div class="tw-word-char">{word.char}</div>

        {#if word.audio}
          <button
            class="btn btn-outline-secondary btn-sm"
            type="button"
            on:click={() => playAudio(word.audio)}
          >
            ▶ Play audio
          </button>
        {/if}
      </div>
    </div>
  </div>
</section>

<style>
  .tw-word-char {
    font-size: clamp(80px, 10vw, 140px);
    font-weight: 900;
    line-height: 1;
  }

  .tw-word-detail-img {
    width: 100%;
    max-width: 260px;
    height: auto;
    border-radius: 16px;
    object-fit: cover;
  }
</style>
