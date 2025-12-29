<script>
  export let word;

  function playAudio(src) {
    if (!src) return;
    const audio = new Audio(src);
    audio.play();
  }
</script>

<article class="card tw-letter-card h-100 text-center position-relative">
  <div class="card-body">

    {#if word.image}
      <img
        src={word.image}
        alt={word.translit}
        class="tw-word-img mb-2"
        loading="lazy"
      />
    {/if}

    <div class="tw-char-big mb-2">{word.char}</div>
    <div class="fw-semibold mb-2">{word.translit}</div>

    {#if word.meaning}
      <div class="text-muted small mb-2">{word.meaning}</div>
    {/if}

    {#if word.audio}
      <button
        type="button"
        class="btn btn-outline-secondary btn-sm"
        on:click={() => playAudio(word.audio)}
      >
        ▶ Listen
      </button>
    {/if}
  </div>

  <div class="card-footer bg-transparent">
    <a
      class="btn btn-outline-primary btn-sm"
      href={`/learn/words/${word.id}`}
    >
      View word
    </a>
  </div>
</article>

<style>
  .tw-letter-card {
    transition: transform 150ms ease, box-shadow 150ms ease;
  }

  .tw-letter-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  }

  .tw-word-img {
    width: 100%;
    max-width: 140px;
    height: auto;
    border-radius: 12px;
    object-fit: cover;
  }
</style>
