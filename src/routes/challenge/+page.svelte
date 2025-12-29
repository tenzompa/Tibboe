<script>
  export let data;

  // Pools with audio-only items
  const alphabets = (data.alphabets ?? []).filter((item) => item.audio);
  const vowels = (data.vowels ?? []).filter((item) => item.audio);
  const words = (data.words ?? []).filter((item) => item.audio);

  // Easy access to the active pool by mode
  const pools = {
    alphabet: alphabets,
    vowel: vowels,
    word: words
  };

  const defaultMode =
    ["alphabet", "vowel", "word"].find((key) => pools[key]?.length) ??
    "alphabet";

  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const buildOptions = (pool, correct, max = 4) => {
    const opts = [correct];
    while (opts.length < Math.min(max, pool.length)) {
      const candidate = pick(pool);
      if (!opts.find((o) => o._id === candidate._id)) {
        opts.push(candidate);
      }
    }
    return opts.sort(() => Math.random() - 0.5);
  };

  const makeQuestion = (pool) => {
    if (!pool || pool.length === 0) return null;
    const correct = pick(pool);
    return {
      correct,
      options: buildOptions(pool, correct)
    };
  };

  // UI state for mode, level, question, feedback
  let mode = defaultMode;
  let level = "1"; // 1 = show translit, 2 = hide translit
  let question = makeQuestion(pools[mode]);
  let feedback = "";

  const playAudio = (src) => {
    if (!src) return;
    const audio = new Audio(src);
    audio.play();
  };

  const checkAnswer = (choice) => {
    if (!question) return;
    const isCorrect = choice._id === question.correct._id;
    feedback = isCorrect
      ? `✅ Correct: ${choice.translit}`
      : `Try again. That sound was ${question.correct.translit}`;
  };

  const nextQuestion = () => {
    feedback = "";
    question = makeQuestion(pools[mode]);
  };

  const setMode = (value) => {
    mode = value;
    feedback = "";
    question = makeQuestion(pools[mode]);
  };

  const setLevel = (value) => {
    level = value;
    feedback = "";
  };
</script>

<section class="mt-3">
  <h1 class="tw-page-title text-center">Challenge Mode</h1>
  <p class="tw-page-subtitle text-center">
    Listen and match what you hear. Choose a type and level to start.
  </p>

  <div class="card shadow-sm challenge-card mt-3">
    <div class="card-body">
      <!-- Controls: choose type and level, and play current sound -->
      <div class="d-flex flex-wrap gap-3 justify-content-between align-items-center">
        <div class="d-flex gap-2">
          <span class="fw-semibold me-2">Challenge</span>
          <div class="btn-group" role="group">
            <button
              class={`btn btn-sm ${mode === "alphabet" ? "btn-primary" : "btn-outline-primary"}`}
              type="button"
              on:click={() => setMode("alphabet")}
              disabled={!alphabets.length}
            >
              Alphabets
            </button>
            <button
              class={`btn btn-sm ${mode === "vowel" ? "btn-primary" : "btn-outline-primary"}`}
              type="button"
              on:click={() => setMode("vowel")}
              disabled={!vowels.length}
            >
              Vowels
            </button>
            <button
              class={`btn btn-sm ${mode === "word" ? "btn-primary" : "btn-outline-primary"}`}
              type="button"
              on:click={() => setMode("word")}
              disabled={!words.length}
            >
              Words
            </button>
          </div>
        </div>

        <div class="d-flex gap-2">
          <span class="fw-semibold me-2">Level</span>
          <div class="btn-group" role="group">
            <button
              class={`btn btn-sm ${level === "1" ? "btn-secondary" : "btn-outline-secondary"}`}
              type="button"
              on:click={() => setLevel("1")}
            >
              1 (with phonetics)
            </button>
            <button
              class={`btn btn-sm ${level === "2" ? "btn-secondary" : "btn-outline-secondary"}`}
              type="button"
              on:click={() => setLevel("2")}
            >
              2 (no phonetics)
            </button>
          </div>
        </div>

        {#if question}
          <button
            type="button"
            class="btn btn-primary btn-sm"
            on:click={() => playAudio(question.correct.audio)}
          >
            ▶ Play sound
          </button>
        {/if}
      </div>

      <hr class="my-3" />

      {#if question}
        <!-- Prompt and options -->
        <p class="text-muted small mb-2">
          {mode === "alphabet"
            ? "Hear a consonant and pick the right one."
            : mode === "vowel"
              ? "Hear a vowel and pick the right one."
              : "Hear a word and pick the right one."}
        </p>

        <div class="d-grid gap-2 mt-2">
          {#each question.options as option}
            <button
              type="button"
              class="btn btn-outline-secondary text-start challenge-option"
              on:click={() => checkAnswer(option)}
            >
              <span class="challenge-char">{option.char}</span>
              {#if level === "1"}
                <span class="ms-2 fw-semibold">{option.translit}</span>
              {/if}
            </button>
          {/each}
        </div>

        <div class="d-flex align-items-center justify-content-between mt-3">
          <p class="mb-0 text-muted small">{feedback}</p>
          <button class="btn btn-link btn-sm" type="button" on:click={nextQuestion}>
            Next sound →
          </button>
        </div>
      {:else}
        <p class="text-muted mb-0">
          No {mode} audio found yet. Add audio files in the learn section and try again.
        </p>
      {/if}
    </div>
  </div>
</section>

<style>
  .challenge-card {
    border-radius: 14px;
  }
  .challenge-option {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 14px;
  }
  .challenge-char {
    font-size: 40px;
    font-weight: 900;
    line-height: 1;
  }
</style>
