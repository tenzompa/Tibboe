<script>
  const pillars = [
    {
      title: "Playful Learning",
      text: "Tibby’s World turns the Tibetan alphabet into short, playful exercises. Instead of memorising tables, learners tap, listen and repeat."
    },
    {
      title: "For Kids and Adults",
      text: "The interface is simple enough for children, but structured so that parents, heritage learners and beginners can also use it on their own."
    },
    {
      title: "Small Steps, Clear Progress",
      text: "Learners start with consonants and vowels and unlock more content step by step. The progress page helps you see what you’ve already mastered."
    }
  ];
</script>

<section class="about-page container mt-4">
  <header class="mb-4 text-center">
    <h1 class="tw-page-title">About Tibby’s World</h1>
    <p class="tw-page-subtitle">
      A small, playful web app to help children and beginners explore the Tibetan alphabet.
    </p>
  </header>

  <div class="row align-items-center mb-5">
    <div class="col-md-6 mb-3 mb-md-0">
      <h2 class="h4 mb-3">What is Tibby’s World?</h2>
      <p>
        Tibby’s World is a prototype learning environment that focuses on the basics of written Tibetan.
        The goal is to make the alphabet less intimidating and more like a game: tap on a letter, hear
        how it sounds and connect it with a friendly character.
      </p>
      <p>
        The app is built as part of a prototyping project using SvelteKit, MongoDB and a small set of
        carefully chosen learning activities. It is not a complete language course, but a playful entry
        point into reading Tibetan letters.
      </p>
    </div>

    <div class="col-md-6 text-center">
      <img
        src="/tibby.png"
        alt="Tibby the dancing yak"
        class="about-tibby-img"
      />
    </div>
  </div>

  <section class="mb-5">
    <h2 class="h4 mb-3">Who is it for?</h2>
    <p>
      Tibby’s World is designed mainly for Tibetan children who grow up outside Tibet and for beginners
      who have little or no prior knowledge of the script. Parents can explore the alphabet together with
      their kids, or let them play independently while they keep an eye on the progress.
    </p>
  </section>

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

  <section class="about-footer-note text-muted small">
    <p class="mb-1">
      This version of Tibby’s World is a study project and prototype. Features, content and design may
      change while the concept is being tested and refined.
    </p>
  </section>
</section>
