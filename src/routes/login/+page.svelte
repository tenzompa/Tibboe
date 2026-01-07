<script>
  export let data;
  export let form;
</script>

<div class="container mt-5" style="max-width: 420px;">
  <h1 class="mb-4 text-center">Login</h1>

  {#if data?.error}
    <div class="alert alert-danger">
      {data.error}
    </div>
  {/if}

  <form method="POST">
    <!-- EMAIL -->
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        class="form-control"
        required
        value={data?.email ?? ""}
      />
    </div>

    <!-- PASSWORD -->
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        class="form-control"
        required
      />
    </div>

    <!-- ERROR MESSAGE -->
    {#if form?.error}
      <div class="alert alert-danger mb-3">
        {form.error}
      </div>
    {/if}

    <button type="submit" class="tw-game-btn w-100"> Log in </button>

    <p style="margin-top: 2rem; text-align: center;">
      Not registered yet?
      <a href="/register">Create an account</a>
    </p>
  </form>
</div>
