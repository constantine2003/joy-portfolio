<script lang="ts">
  import { skills } from '$lib/data/portfolio';
</script>

<section class="skills-section" id="skills">
  <p class="section-label reveal">What I Know</p>
  <h2 class="section-title reveal">Skills & <em>Proficiency</em></h2>

  <div class="skills-grid">
    {#each skills as group, gi}
      <div class="skill-group reveal" style="transition-delay: {gi * 120}ms">
        <div class="group-header">
          <span class="group-icon">{group.icon}</span>
          <span class="group-name">{group.category}</span>
        </div>
        <div class="skill-list">
          {#each group.items as skill}
            <div class="skill-item">
              <div class="skill-meta">
                <span class="skill-name">{skill.name}</span>
                <span class="skill-pct">{skill.level}%</span>
              </div>
              <div class="skill-bar-track">
                <div class="skill-bar-fill" style="--target: {skill.level}%"></div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .skills-section {
    padding: 7rem 4rem;
    background: var(--ink);
  }
  .skills-section .section-label { color: var(--joy); }
  .skills-section .section-label::before { background: var(--joy); }
  .skills-section .section-title { color: var(--cream); margin-bottom: 3.5rem; }
  .skills-section .section-title em { color: var(--joy); }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .skill-group {
    background: rgba(253,250,240,0.04);
    border: 1px solid rgba(253,250,240,0.07);
    border-radius: 20px;
    padding: 2rem;
    transition: background 0.3s;
  }
  .skill-group:hover { background: rgba(245,197,24,0.06); }

  .group-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.8rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(253,250,240,0.08);
  }
  .group-icon { font-size: 1.4rem; }
  .group-name {
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    font-weight: 700;
    color: var(--cream);
  }

  .skill-list { display: flex; flex-direction: column; gap: 1.1rem; }

  .skill-item {}
  .skill-meta {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.4rem;
  }
  .skill-name {
    font-size: 0.83rem;
    color: rgba(253,250,240,0.7);
  }
  .skill-pct {
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    color: var(--joy);
  }
  .skill-bar-track {
    height: 4px;
    background: rgba(253,250,240,0.08);
    border-radius: 100px;
    overflow: hidden;
  }
  .skill-bar-fill {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, var(--joy-dark), var(--joy));
    border-radius: 100px;
    transition: width 1.2s cubic-bezier(.22,1,.36,1);
  }

  /* Trigger bar animation when parent is visible */
  :global(.skill-group.visible) .skill-bar-fill {
    width: var(--target);
  }

  @media (max-width: 900px) {
    .skills-section { padding: 5rem 1.5rem; }
    .skills-grid { grid-template-columns: 1fr; }
  }
</style>