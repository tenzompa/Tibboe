<script>
  import NumberCard from "$lib/components/NumberCard.svelte";

  export let data;
  const numbers = data.numbers ?? [];
</script>

<section class="mt-3">
  <h1 class="tw-page-title">Numbers</h1>

  {#if numbers.length === 0}
    <p>No numbers found in the database.</p>
  {:else}
    <div class="row mt-3">
      {#each numbers as number}
        <div class="col-6 col-sm-3 mb-3">
          <NumberCard {number} />
        </div>
      {/each}
    </div>
  {/if}
</section>
