<script lang="ts">
  import { profile } from '$lib/data/portfolio';
  const mathSymbols = ['∑', 'π', '∫', '√', '∞', 'Δ', 'σ', 'μ'];
</script>

<section class="hero">
  <div class="hero-left">
    <p class="hero-eyebrow">{profile.title}</p>
    <h1 class="hero-name">
      Making Math
      <span class="highlight">{profile.tagline.replace('Making Math', '').trim()}</span>
    </h1>
    <p class="hero-desc">{profile.bio[0]}</p>
    <div class="hero-cta">
      <a href="#contact" class="btn-primary">Work with me</a>
      <a href="#projects" class="btn-ghost">See my work</a>
    </div>
    <div class="hero-stats">
      {#each profile.stats as stat}
        <div class="stat-item">
          <div class="stat-num">{stat.num}</div>
          <div class="stat-label">{stat.label}</div>
        </div>
      {/each}
    </div>
    <div class="hero-line">
      <div class="hero-line-bar"></div>
      <span class="hero-line-text">Open to collaborations & tutoring</span>
    </div>
  </div>

  <div class="hero-right">
    {#each mathSymbols as sym, i}
      <span class="math-float" style="animation-delay: {i * 0.7}s">{sym}</span>
    {/each}
    <div class="hero-blob"></div>
    <div class="hero-photo-wrapper">
      <img src="/reallyjoy.png" alt="Really Joy" style="width:100%;height:100%;object-fit:cover;" />
    </div>
  </div>
</section>

<style>
  .hero {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
  }
  .hero-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 8rem 4rem 4rem 4rem;
    position: relative;
    z-index: 2;
  }
  .hero-eyebrow {
    font-family: 'DM Mono', monospace;
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    color: var(--joy-dark);
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    opacity: 0;
    animation: fadeUp 0.8s 0.2s forwards;
  }
  .hero-name {
    font-family: 'Playfair Display', serif;
    font-size: clamp(3.2rem, 5.5vw, 5.8rem);
    font-weight: 900;
    line-height: 1.0;
    color: var(--ink);
    opacity: 0;
    animation: fadeUp 0.9s 0.4s forwards;
  }
  .highlight {
    color: var(--joy);
    font-style: italic;
    display: block;
    text-shadow: 0 4px 30px rgba(245,197,24,0.4);
  }
  .hero-desc {
    font-size: 1.05rem;
    line-height: 1.75;
    color: var(--warm-gray);
    max-width: 420px;
    margin-top: 2rem;
    font-weight: 300;
    opacity: 0;
    animation: fadeUp 0.9s 0.6s forwards;
  }
  .hero-cta {
    display: flex;
    gap: 1rem;
    margin-top: 3rem;
    opacity: 0;
    animation: fadeUp 0.9s 0.8s forwards;
  }
  .hero-stats {
    display: flex;
    gap: 2.5rem;
    margin-top: 4rem;
    opacity: 0;
    animation: fadeUp 0.9s 1s forwards;
  }
  .stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    font-weight: 700;
    color: var(--ink);
    line-height: 1;
  }
  .stat-label {
    font-size: 0.72rem;
    color: var(--warm-gray);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-top: 0.25rem;
  }
  .hero-right {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .hero-blob {
    position: absolute;
    width: 520px; height: 520px;
    background: radial-gradient(ellipse at 40% 40%, #FFF3A3 0%, #F5C518 45%, #C99A00 100%);
    border-radius: 62% 38% 46% 54% / 60% 44% 56% 40%;
    animation: blobMorph 8s ease-in-out infinite, fadeIn 1.2s 0.3s forwards;
    opacity: 0;
  }
  .hero-photo-wrapper {
    position: relative;
    z-index: 2;
    width: 340px; height: 420px;
    border-radius: 180px 180px 120px 120px;
    overflow: hidden;
    box-shadow: 0 30px 80px rgba(180,130,0,0.3);
    opacity: 0;
    animation: fadeIn 1s 0.6s forwards;
    background: linear-gradient(160deg, #FFF3A3 0%, #F5C518 60%, #C99A00 100%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .photo-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 100%; height: 100%;
    padding-bottom: 2rem;
    position: relative;
  }
  .photo-initials {
    font-family: 'Playfair Display', serif;
    font-size: 5rem;
    font-weight: 900;
    color: rgba(26,18,7,0.15);
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
  }
  .photo-note {
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(26,18,7,0.4);
    font-family: 'DM Mono', monospace;
  }
  .math-float {
    position: absolute;
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    color: rgba(26,18,7,0.1);
    animation: floatSymbol 6s ease-in-out infinite;
    user-select: none;
  }
  .math-float:nth-child(odd)  { left: 8%;  top: 20%; }
  .math-float:nth-child(even) { right: 10%; bottom: 25%; }
  .math-float:nth-child(3n)   { top: 55%; left: 5%; font-size: 2rem; }
  .math-float:nth-child(4n)   { bottom: 15%; right: 6%; font-size: 1rem; }

  .hero-line {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 3rem;
    opacity: 0;
    animation: fadeUp 0.9s 1.2s forwards;
  }
  .hero-line-bar { width: 40px; height: 1px; background: var(--joy); }
  .hero-line-text {
    font-family: 'DM Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.15em;
    color: var(--warm-gray);
    text-transform: uppercase;
  }

  @media (max-width: 900px) {
    .hero { grid-template-columns: 1fr; }
    .hero-right { display: none; }
    .hero-left { padding: 7rem 1.5rem 4rem; }
  }
</style>