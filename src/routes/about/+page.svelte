<script>
  const pillars = [
    {
    title: "Playful Learning",
    text: "Tibboe turns Tibetan basics into short, playful exercises. Instead of memorising tables, learners tap, listen and repeat with audio."

    },
    {
      title: "For Beginners",
      text: "The interface is simple and visual, designed for beginners of all ages. It works well for children learning with parents, but also for adults starting on their own."
    },
    {
    title: "Learn & Practice",
    text: "Learners explore alphabets, vowels, numbers (1–10) and basic words, and then practise in the Challenge mode by listening and choosing the correct answer, with or without phonetics. Access to the Challenge requires a user account."
    }
  ];
</script>

<div class="about-page container mt-4">
  <!-- Header -->
  <header class="mb-4 text-center">
    <h1 class="tw-page-title">About Tibboe</h1>
    <p class="tw-page-subtitle">
      A playful web app to help beginners explore Tibetan letters, sounds, and numbers.
    </p>
  </header>

  <!-- Main Split Section -->
  <div class="row align-items-center mb-5">
    <div class="col-md-6 mb-3 mb-md-0">
      <h2 class="h4 mb-3">What is Tibboe?</h2>
      <p>
        Tibboe is a prototype learning environment that focuses on the basics of Tibetan.
        The goal is to make the script less intimidating and more like a game:
        tap on an item, hear how it sounds and practise recognition through repetition.
      </p>
      <p>
        The app is built as part of a prototyping project.
        It is not a full language course, but a friendly entry point into Tibetan sounds and symbols.
      </p>
    </div>

    <div class="col-md-6 text-center">
      <img src="/image/mascot/tibboe.png" alt="Tibboe the yak" class="tibboe-hero" />
    </div>
  </div>

  <!-- Who is it for -->
  <section class="mb-5">
    <h2 class="h4 mb-3">Who is it for?</h2>
    <p>
      Tibboe is designed for beginners with little or no prior knowledge.
      Children can explore together with parents, and adults can also use it independently.
      The interface stays simple: clear navigation, large elements, and audio-first learning.
    </p>
  </section>

  <!-- Pillars -->
  <section class="mb-4">
    <h2 class="h4 mb-3">How it works</h2>

    <div class="row">
      {#each pillars as pillar}
        <div class="col-md-4 mb-3">
          <div class="card h-100 shadow-sm about-card">
            <div class="card-body">
              <h3 class="h5 mb-2">{pillar.title}</h3>
              <p class="mb-0">{pillar.text}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
</div>
