<script>
  export let data;
  const vowels = data.vowels ?? [];

  function playAudio(src) {
    const audio = new Audio(src);
    audio.play();
  }
</script>

<section class="mt-3">
  <h1 class="tw-page-title">Vowels</h1>

  {#if vowels.length === 0}
    <p>No vowels found in the database.</p>
  {:else}
    <div class="row mt-3">
      {#each vowels as vowel}
        <div class="col-6 col-sm-3 mb-3">
          <div class="card text-center h-100">
            <div class="card-body">
              <div class="tw-char-big mb-2">{vowel.char}</div>
              <div class="fw-semibold mb-2">{vowel.translit}</div>
              {#if vowel.audio}
                <button
                  type="button"
                  class="tw-game-btn tw-game-btn-small"
                  on:click={() => playAudio(vowel.audio)}
                >
                  ▶ Listen
                </button>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</section>
