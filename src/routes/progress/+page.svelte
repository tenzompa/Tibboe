<script>
  export let data;

  const totalAlphabets = data.totalAlphabets ?? 0;
  const totalVowels = data.totalVowels ?? 0;

  // For now the prototype doesn’t track user-specific progress,
  // so we just simulate some values to show the idea:
  const masteredAlphabets = Math.floor(totalAlphabets * 0.3); // e.g. 30%
  const masteredVowels = Math.floor(totalVowels * 0.5);       // e.g. 50%

  const alphabetProgress =
    totalAlphabets === 0 ? 0 : Math.round((masteredAlphabets / totalAlphabets) * 100);
  const vowelProgress =
    totalVowels === 0 ? 0 : Math.round((masteredVowels / totalVowels) * 100);
</script>

<section class="container mt-4">
  <header class="mb-4 text-center">
    <h1 class="tw-page-title">Your Progress</h1>
    <p class="tw-page-subtitle">
      See how far you’ve come in Tibby’s World.
    </p>
  </header>

  <div class="row g-3">
    <!-- Alphabets card -->
    <div class="col-md-6">
      <div class="card h-100 shadow-sm tw-progress-card">
        <div class="card-body">
          <h2 class="h5">Alphabets</h2>
          <p class="mb-2 text-muted">
            {masteredAlphabets} of {totalAlphabets} consonants “mastered” (demo value).
          </p>

          <div class="progress tw-progress-bar mb-2">
            <div
              class="progress-bar"
              role="progressbar"
              style={`width: ${alphabetProgress}%;`}
              aria-valuenow={alphabetProgress}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {alphabetProgress}%
            </div>
          </div>

          <p class="small mb-0">
            In the full version this bar will grow as you complete alphabet activities.
          </p>
        </div>
      </div>
    </div>

    <!-- Vowels card -->
    <div class="col-md-6">
      <div class="card h-100 shadow-sm tw-progress-card">
        <div class="card-body">
          <h2 class="h5">Vowels</h2>
          <p class="mb-2 text-muted">
            {masteredVowels} of {totalVowels} vowels “mastered” (demo value).
          </p>

          <div class="progress tw-progress-bar mb-2">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              style={`width: ${vowelProgress}%;`}
              aria-valuenow={vowelProgress}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {vowelProgress}%
            </div>
          </div>

          <p class="small mb-0">
            Later this can be connected to quizzes, streaks or levels.
          </p>
        </div>
      </div>
    </div>
  </div>

  <section class="mt-4 text-center">
    <p class="text-muted small">
      This progress view is part of the prototype and shows how a future version
      could visualise learning status based on activities in the Play section.
    </p>
  </section>
</section>
