<script>
  import AlphabetCard from "$lib/components/AlphabetCard.svelte";

  export let data;
  const alphabets = data.alphabets ?? [];
</script>

<section class="mt-3">
  <h1 class="tw-page-title">Alphabets</h1>
  <p class="tw-page-subtitle">
    Tibetan consonants.
  </p>

  {#if alphabets.length === 0}
    <p>No alphabets found in the database.</p>
  {:else}
    <div class="row mt-3">
      {#each alphabets as alphabet}
        <div class="col-6 col-sm-3 mb-3">
          <AlphabetCard {alphabet} />
        </div>
      {/each}
    </div>
  {/if}
</section>

