<script>
  import "./styles.css";
  import { page } from "$app/stores";

  export let data;
  let user;
  $: user = data?.user;

  let navLinks = [];
  $: navLinks = [
    { href: "/learn", label: "Learn" },
    ...(user ? [{ href: "/challenge", label: "Challenge" }] : []),
    { href: "/about", label: "About" },
    { href: "/settings", label: "Settings" }
  ];
</script>

<nav class="navbar navbar-expand-lg navbar-color" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Tibboe</a>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <!-- LEFT: main navigation -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {#each navLinks as link}
          <li class="nav-item">
            <a
              class="nav-link { $page.url.pathname === link.href ? 'active' : '' }"
              aria-current={$page.url.pathname === link.href ? "page" : undefined}
              href={link.href}
            >
              {link.label}
            </a>
          </li>
        {/each}
      </ul>
      <div class="d-flex align-items-center gap-2">
        {#if user}
          <span class="navbar-text text-white-50 small">
            Signed in as {user.username ?? user.email}
          </span>
          <form method="POST" action="/logout">
            <button class="btn btn-outline-light btn-sm" type="submit">Log out</button>
          </form>
        {:else}
          <a class="btn btn-outline-light btn-sm" href="/login">Log in</a>
          <a class="btn btn-light btn-sm" href="/register">Register</a>
        {/if}
      </div>
    </div>
  </div>
</nav>

<div class="container mt-3">
  <slot />
</div>
