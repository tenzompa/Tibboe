<script>
  import "./styles.css";
  import { page } from "$app/stores";

  export let data;
  const user = data?.user;

  const navLinks = [
    { href: "/play", label: "Play" },
    { href: "/about", label: "About" },
    { href: "/progress", label: "Progress" },
    //{ href: "/settings", label: "Settings" }
  ];
</script>

<nav class="navbar navbar-expand-lg navbar-color" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Explore with Tibboe</a>

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
      <!-- RIGHT: (empty for now, can add stuff later if you want) -->
    </div>
  </div>
</nav>

<div class="container mt-3">
  <slot />
</div>
