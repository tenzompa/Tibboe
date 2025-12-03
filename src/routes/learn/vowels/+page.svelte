<script>
  import VowelCard from "$lib/components/VowelCard.svelte";

  export let data;
  const vowels = data.vowels ?? [];
</script>

<section class="mt-3">
  <h1 class="tw-page-title">Vowels</h1>

  {#if vowels.length === 0}
    <p>No vowels found in the database.</p>
  {:else}
    <div class="row mt-3">
      {#each vowels as vowel}
        <div class="col-6 col-sm-3 mb-3">
          <VowelCard {vowel} />
        </div>
      {/each}
    </div>
  {/if}
</section>
