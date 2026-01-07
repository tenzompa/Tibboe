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
    <img
      src="/image/mascot/tibboehappy.png"
      alt="Tibboe the Yak"
      class="tibboe-hero"
    />
  </div>

  <a href="/learn" class="tw-game-btn"> Start Learning! </a>

  {#if user}
    <!-- INVITE VIA EMAIL BUTTON -->
    <div class="mt-3">
      <a
        href="mailto:?subject=Join Tibboe&body=Hey! I’m learning Tibetan with Tibboe and thought you might like it.%0A%0AJoin here: https://tibboe.netlify.app/"
        class="btn btn-dark fw-bold"
      >
        📩 Invite a friend via email
      </a>
    </div>
  {/if}

  {#if !user}
    <a href="/register" class="register-cta">
      Ready for a challenge? Register now.
    </a>
  {/if}
</div>
