<script lang="ts">
  import { projects } from '$lib/data/portfolio';
  $: featured = projects.filter(p => p.featured);
  $: others   = projects.filter(p => !p.featured);
</script>

<section class="projects-section" id="projects">
  <p class="section-label reveal">Portfolio</p>
  <h2 class="section-title reveal">Projects & <em>Work</em></h2>

  <!-- Featured -->
  <div class="featured-grid">
    {#each featured as project, i}
      <div class="featured-card reveal" style="transition-delay: {i * 120}ms">
        <div class="card-emoji">{project.emoji}</div>
        <div class="card-meta">
          <span class="card-tag">{project.tag}</span>
          <span class="card-year">{project.year}</span>
        </div>
        <h3 class="card-title">{project.title}</h3>
        <p class="card-desc">{project.desc}</p>
        <div class="card-stack">
          {#each project.stack as tech}
            <span class="stack-pill">{tech}</span>
          {/each}
        </div>
        <a href={project.link} class="card-link">View project →</a>
      </div>
    {/each}
  </div>

  <!-- Others -->
  <div class="others-grid">
    {#each others as project, i}
      <div class="other-card reveal" style="transition-delay: {i * 100}ms">
        <div class="other-top">
          <span class="other-emoji">{project.emoji}</span>
          <span class="other-year">{project.year}</span>
        </div>
        <span class="card-tag">{project.tag}</span>
        <h3 class="other-title">{project.title}</h3>
        <p class="other-desc">{project.desc}</p>
        <div class="card-stack">
          {#each project.stack as tech}
            <span class="stack-pill">{tech}</span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .projects-section {
    padding: 7rem 4rem;
    background: var(--surface);
  }
  .projects-section .section-title { margin-bottom: 3rem; }

  /* Featured */
  .featured-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .featured-card {
    background: var(--ink);
    border-radius: 24px;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s;
  }
  .featured-card::before {
    content: '';
    position: absolute;
    top: 0; right: 0;
    width: 200px; height: 200px;
    background: radial-gradient(circle, rgba(245,197,24,0.12) 0%, transparent 70%);
    pointer-events: none;
  }
  .featured-card:hover { transform: translateY(-4px); }

  .card-emoji { font-size: 2.5rem; }
  .card-meta {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }
  .card-tag {
    font-family: 'DM Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--joy-dark);
    background: rgba(245,197,24,0.12);
    padding: 0.2rem 0.7rem;
    border-radius: 100px;
  }
  .card-year {
    font-family: 'DM Mono', monospace;
    font-size: 0.65rem;
    color: rgba(253,250,240,0.3);
    letter-spacing: 0.08em;
  }
  .card-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--cream);
    line-height: 1.2;
  }
  .card-desc {
    font-size: 0.85rem;
    line-height: 1.7;
    color: rgba(253,250,240,0.55);
    flex: 1;
  }
  .card-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.5rem;
  }
  .stack-pill {
    font-size: 0.68rem;
    font-family: 'DM Mono', monospace;
    color: rgba(253,250,240,0.5);
    background: rgba(253,250,240,0.06);
    padding: 0.2rem 0.65rem;
    border-radius: 100px;
  }
  .featured-card .stack-pill {
    color: rgba(253,250,240,0.5);
    background: rgba(253,250,240,0.06);
  }
  .card-link {
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--joy);
    text-decoration: none;
    letter-spacing: 0.04em;
    margin-top: 0.5rem;
    transition: gap 0.2s;
    display: inline-block;
  }
  .card-link:hover { opacity: 0.8; }

  /* Others */
  .others-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  .other-card {
    background: white;
    border: 1px solid rgba(26,18,7,0.07);
    border-radius: 18px;
    padding: 1.8rem;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .other-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(26,18,7,0.08);
  }
  .other-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
  }
  .other-emoji { font-size: 1.6rem; }
  .other-year {
    font-family: 'DM Mono', monospace;
    font-size: 0.65rem;
    color: var(--warm-gray);
    letter-spacing: 0.08em;
  }
  .other-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--ink);
    margin: 0.5rem 0 0.5rem;
  }
  .other-desc {
    font-size: 0.82rem;
    line-height: 1.65;
    color: var(--warm-gray);
    margin-bottom: 0.8rem;
  }
  .other-card .stack-pill {
    color: var(--joy-deep);
    background: var(--joy-light);
  }

  @media (max-width: 900px) {
    .projects-section { padding: 5rem 1.5rem; }
    .featured-grid, .others-grid { grid-template-columns: 1fr; }
  }
</style>