<script>
  export let number;

  function playAudio(src) {
    if (!src) return;
    const audio = new Audio(src);
    audio.play();
  }
</script>

<article class="card tw-letter-card h-100 text-center position-relative">
  <div class="card-body">
    <div class="tw-char-big mb-2">{number.char}</div>

    {#if number.translit}
      <div class="fw-semibold mb-1">{number.translit}</div>
    {/if}

    {#if number.order}
      <div class="text-muted small mb-2">{number.order}</div>
    {/if}

    {#if number.audio}
      <button
        type="button"
        class="btn btn-outline-secondary btn-sm"
        on:click={() => playAudio(number.audio)}
      >
        ▶ Listen
      </button>
    {/if}
  </div>

  <div class="card-footer bg-transparent">
    <a class="btn btn-outline-primary btn-sm" href={`/learn/numbers/${number._id}`}>
      View number
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
</style>
