<script>
  export let data;
  const number = data.number;

  function playAudio(src) {
    if (!src) return;
    const audio = new Audio(src);
    audio.play();
  }
</script>

<section class="mt-3">
  <a class="btn btn-link p-0 mb-3" href="/learn/numbers">
    ← Back to all numbers
  </a>

  <div class="card shadow-sm">
    <div class="card-body">
      <div class="d-flex align-items-center justify-content-between">
        <div class="me-3">
          <!-- phonetic reading -->
          <h1 class="tw-page-title mb-1">
            {number.translit}
          </h1>

          <!-- numeric value -->
          <div class="text-muted small mb-2">
            {number.order}
          </div>

          <p class="mb-0">
            Practice the number <strong>{number.translit}</strong> and listen to its pronunciation.
          </p>

          {#if number.audio}
            <button
              class="btn btn-outline-secondary btn-sm mt-2"
              type="button"
              on:click={() => playAudio(number.audio)}
            >
              ▶ Play audio
            </button>
          {/if}
        </div>

        <!-- Tibetan numeral -->
        <div class="tw-char-big">
          {number.char}
        </div>
      </div>
    </div>
  </div>
</section>
