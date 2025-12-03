<script>
  export let data;
  const user = data?.user;
</script>

<div class="home-center">
  {#if user}
    <p class="lead fw-semibold mb-1">Hi {user.username ?? user.email}!</p>
  {/if}
  <h1>Explore with Tibboe</h1>
  <p>Learn Tibetan with fun and curiosity</p>

  <div class="tibboe-wrapper">
    <img src="/tibboehappy.png" alt="Tibboe the Yak" class="tibboe-hero" />
  </div>

  <a href="/learn" class="tw-game-btn">
    Start Learning!
  </a>

  {#if !user}
    <p class="mt-3 fw-semibold text-white text-shadow">
      Register now to challenge what you have learned.
    </p>
  {/if}
</div>
