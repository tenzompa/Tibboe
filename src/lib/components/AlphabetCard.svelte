<script>
  export let alphabet;

  function playAudio(src) {
    if (!src) return;
    const audio = new Audio(src);
    audio.play();
  }
</script>

<article class="card tw-alphabet-card h-100 text-center position-relative">
  <div class="card-body">
    <div class="tw-char-big mb-2">{alphabet.char}</div>
    <div class="fw-semibold">{alphabet.translit}</div>
    {#if alphabet.order}
      <div class="text-muted small mt-1">#{alphabet.order}</div>
    {/if}
    {#if alphabet.audio}
      <button
        type="button"
        class="btn btn-outline-secondary btn-sm mt-2"
        on:click={() => playAudio(alphabet.audio)}
      >
        ▶ Listen
      </button>
    {/if}
  </div>
  <div class="card-footer bg-transparent">
    <a class="btn btn-outline-primary btn-sm" href={`/learn/alphabets/${alphabet._id}`}>
      View alphabet
    </a>
  </div>
</article>

<style>
  .tw-alphabet-card {
    transition: transform 150ms ease, box-shadow 150ms ease;
  }
  .tw-alphabet-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  }
</style>
