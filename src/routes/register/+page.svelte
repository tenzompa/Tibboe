<script>
  export let form;
</script>

<section class="container mt-4" style="max-width: 480px;">
  <h1 class="tw-page-title text-center mb-3">Create an Account</h1>
  <p class="tw-page-subtitle text-center mb-4">
    Save your progress in Tibby’s World.
  </p>

  {#if form?.error}
    <div class="alert alert-danger">{form.error}</div>
  {/if}

  <form method="POST">
    <div class="mb-3">
      <label class="form-label" for="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        class="form-control"
        required
        value={form?.email ?? ""}
      />
    </div>

    <div class="mb-3">
      <label class="form-label" for="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        class="form-control"
        required
      />
    </div>

    <div class="mb-3">
      <label class="form-label" for="confirm">Confirm password</label>
      <input
        id="confirm"
        name="confirm"
        type="password"
        class="form-control"
        required
      />
    </div>

    <button type="submit" class="tw-game-btn w-100">
      Create account
    </button>

    <p class="mt-3 small text-center">
      Already have an account?
      <a href="/login">Log in</a>
    </p>
  </form>
</section>
