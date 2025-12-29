<script>
  import { onMount } from "svelte";

  export let data;
  const user = data?.user;

  let theme = "light";

  function confirmDelete(event) {
    if (!window.confirm("This will permanently delete your account. Continue?")) {
      event.preventDefault();
    }
  }

  function applyTheme(value) {
    const target = document.body;
    target.classList.remove("light-theme", "dark-theme");
    target.classList.add(value + "-theme");
    target.dataset.theme = value;
    target.style.setProperty(
      "--bg-image",
      value === "dark" ? 'url("/image/mascot/night.png")' : 'url("/image/mascot/day.png")'
    );
  }

  function setTheme(newTheme) {
    theme = newTheme;
    applyTheme(theme);
    localStorage.setItem("tw_theme", theme);
  }

  onMount(() => {
    const saved = localStorage.getItem("tw_theme");
    theme = saved === "dark" ? "dark" : "light";
    applyTheme(theme);
  });
</script>

<section class="container mt-4 settings-page">
  <header class="mb-4">
    <h1 class="tw-page-title">Settings</h1>
    <p class="tw-page-subtitle">Adjust Tibboe’s World to your style.</p>
  </header>

  <div class="card mb-3 shadow-sm">
    <div class="card-body">
      <h2 class="h5 mb-3">Theme</h2>
      <p class="small text-muted mb-3">Switch between light and dark mode.</p>

      <div class="btn-group" role="group">
        <button
          class="btn {theme === 'light' ? 'btn-primary' : 'btn-outline-primary'}"
          on:click={() => setTheme('light')}
        >
          Light mode
        </button>

        <button
          class="btn {theme === 'dark' ? 'btn-primary' : 'btn-outline-primary'}"
          on:click={() => setTheme('dark')}
        >
          Dark mode
        </button>
      </div>
    </div>
  </div>

  {#if user}
    <div class="card mb-3 shadow-sm border-danger">
      <div class="card-body">
        <h2 class="h5 mb-2 text-danger">Account</h2>
        <p class="small text-muted mb-3">Delete your account permanently.</p>

        <div class="d-flex justify-content-between align-items-center">
          <div class="small text-muted">
            Signed in as <strong>{user?.username ?? user?.email}</strong>
          </div>
          <form method="POST" action="?/delete" on:submit={confirmDelete}>
            <button type="submit" class="btn btn-outline-danger btn-sm">
              Delete account
            </button>
          </form>
        </div>
      </div>
    </div>
  {/if}
</section>
