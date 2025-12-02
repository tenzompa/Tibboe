<script>
  import { onMount } from "svelte";

  // prototype state – not persisted yet
  let theme = "light"; // "light" or "dark"
  let soundOn = true;

  // apply theme to <body> so it affects whole app
  function applyTheme() {
    if (typeof document === "undefined") return;

    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(theme === "light" ? "light-theme" : "dark-theme");
  }

  onMount(() => {
    // default to light theme on first load
    applyTheme();
  });

  $: applyTheme(); // run whenever `theme` changes
</script>

<section class="container mt-4 settings-page">
  <header class="mb-4">
    <h1 class="tw-page-title">Settings</h1>
    <p class="tw-page-subtitle">
      Adjust Tibby’s World to your style.
    </p>
  </header>

  <!-- Theme mode -->
  <div class="card mb-3 shadow-sm">
    <div class="card-body">
      <h2 class="h5 mb-3">Theme</h2>
      <p class="small text-muted mb-3">
        Switch between light and dark mode.
      </p>

      <div class="btn-group" role="group" aria-label="Theme mode">
        <button
          type="button"
          class="btn {theme === 'light' ? 'btn-primary' : 'btn-outline-primary'}"
          on:click={() => (theme = "light")}
        >
          Light mode
        </button>
        <button
          type="button"
          class="btn {theme === 'dark' ? 'btn-primary' : 'btn-outline-primary'}"
          on:click={() => (theme = "dark")}
        >
          Dark mode
        </button>
      </div>
    </div>
  </div>

  <!-- Sound -->
  <div class="card mb-3 shadow-sm">
    <div class="card-body d-flex justify-content-between align-items-center">
      <div>
        <h2 class="h5 mb-1">Sound effects & audio</h2>
        <p class="small text-muted mb-0">
          Control whether letter sounds and small effects are played.
        </p>
      </div>

      <div class="form-check form-switch ms-3">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="soundToggle"
          bind:checked={soundOn}
        />
        <label class="form-check-label" for="soundToggle">
          {soundOn ? "On" : "Off"}
        </label>
      </div>
    </div>
  </div>

</section>
