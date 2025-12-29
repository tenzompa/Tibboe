<script>
  export let data;
</script>

<div class="container mt-5" style="max-width: 480px;">
  <h1 class="mb-4 text-center">Create account</h1>

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

    <!-- USERNAME -->
    <div class="mb-3">
      <label for="username" class="form-label">Username</label>
      <input
        id="username"
        name="username"
        type="text"
        class="form-control"
        required
        minlength="3"
        value={data?.username ?? ""}
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
        minlength="6"
      />
    </div>

    <!-- CONFIRM PASSWORD -->
    <div class="mb-4">
      <label for="confirm" class="form-label">Confirm password</label>
      <input
        id="confirm"
        name="confirm"
        type="password"
        class="form-control"
        required
        minlength="6"
      />
    </div>

    <button type="submit" class="tw-game-btn w-100">
      Create account
    </button>
  </form>
</div>
