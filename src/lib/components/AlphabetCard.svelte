<script>
  export let letter;

  function playAudio(src) {
    if (!src) return;
    const audio = new Audio(src);
    audio.play();
  }
</script>

<article class="card tw-letter-card h-100 text-center position-relative">
  <div class="card-body">
    <div class="tw-char-big mb-2">{letter.char}</div>
    <div class="fw-semibold">{letter.translit}</div>
    {#if letter.order}
      <div class="text-muted small mt-1">#{letter.order}</div>
    {/if}
    {#if letter.audio}
      <button
        type="button"
        class="btn btn-outline-secondary btn-sm mt-2"
        on:click={() => playAudio(letter.audio)}
      >
        ▶ Listen
      </button>
    {/if}
  </div>
  <div class="card-footer bg-transparent">
    <a class="btn btn-outline-primary btn-sm" href={`/learn/alphabets/${letter._id}`}>
      View alphabet
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
