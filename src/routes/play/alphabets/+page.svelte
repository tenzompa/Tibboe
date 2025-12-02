<script>
  export let data;
  const letters = data.alphabets ?? [];
</script>

<section class="mt-3">
  <h1 class="tw-page-title">Alphabets</h1>
  <p class="tw-page-subtitle">
    Tibetan consonants.
  </p>

  {#if letters.length === 0}
    <p>No letters found in the database.</p>
  {:else}
    <div class="row mt-3">
      {#each letters as letter}
        <div class="col-6 col-sm-3 mb-3">
          <div class="card text-center h-100">
            <div class="card-body">
              <div class="tw-char-big mb-2">{letter.char}</div>
              <div class="fw-semibold">{letter.translit}</div>
              <!--<div class="text-muted small">#{letter.order}</div>-->
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</section>



