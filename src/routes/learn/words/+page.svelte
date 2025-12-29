<script>
  import WordCard from "$lib/components/WordCard.svelte";

  export let data;
  const words = data.words ?? [];
</script>

<section class="mt-3">
  <h1 class="tw-page-title">Words</h1>

  {#if words.length === 0}
    <p>No words found in the database.</p>
  {:else}
    <div class="row mt-3">
      {#each words as word}
        <div class="col-6 col-sm-3 mb-3">
          <WordCard {word} />
        </div>
      {/each}
    </div>
  {/if}
</section>
