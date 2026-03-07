<script lang="ts">
  import { experience } from '$lib/data/portfolio';
</script>

<section class="experience-section" id="experience">
  <p class="section-label reveal">Career</p>
  <h2 class="section-title reveal">Teaching <em>Experience</em></h2>

  <div class="timeline">
    {#each experience as job, i}
      <div class="timeline-item reveal" style="transition-delay: {i * 100}ms">
        <div class="timeline-left">
          <div class="timeline-period">{job.period}</div>
          <div class="timeline-type">{job.type}</div>
        </div>
        <div class="timeline-connector">
          <div class="timeline-dot"></div>
          {#if i < experience.length - 1}
            <div class="timeline-line"></div>
          {/if}
        </div>
        <div class="timeline-right">
          <div class="job-card">
            <div class="job-header">
              <div>
                <div class="job-role">{job.role}</div>
                <div class="job-org">{job.org}</div>
              </div>
            </div>
            <p class="job-desc">{job.desc}</p>
            <ul class="job-highlights">
              {#each job.highlights as highlight}
                <li>{highlight}</li>
              {/each}
            </ul>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .experience-section {
    padding: 7rem 4rem;
    background: var(--cream);
  }
  .experience-section .section-title { margin-bottom: 3.5rem; }

  .timeline { display: flex; flex-direction: column; gap: 0; }

  .timeline-item {
    display: grid;
    grid-template-columns: 160px 40px 1fr;
    gap: 0 1.5rem;
    align-items: start;
  }

  .timeline-left {
    text-align: right;
    padding-top: 1.8rem;
  }
  .timeline-period {
    font-family: 'DM Mono', monospace;
    font-size: 0.72rem;
    color: var(--joy-dark);
    letter-spacing: 0.08em;
    font-weight: 500;
  }
  .timeline-type {
    font-size: 0.68rem;
    color: var(--warm-gray);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-top: 0.25rem;
  }

  .timeline-connector {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1.8rem;
  }
  .timeline-dot {
    width: 14px; height: 14px;
    border-radius: 50%;
    background: var(--joy);
    border: 3px solid var(--cream);
    box-shadow: 0 0 0 2px var(--joy);
    flex-shrink: 0;
    z-index: 1;
  }
  .timeline-line {
    width: 2px;
    flex: 1;
    min-height: 40px;
    background: linear-gradient(to bottom, var(--joy), rgba(245,197,24,0.1));
    margin-top: 0.5rem;
  }

  .timeline-right { padding: 1rem 0 2.5rem; }

  .job-card {
    background: white;
    border-radius: 16px;
    padding: 1.8rem;
    border: 1px solid rgba(26,18,7,0.07);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .job-card:hover {
    transform: translateX(4px);
    box-shadow: 0 12px 40px rgba(26,18,7,0.08);
  }

  .job-role {
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--ink);
  }
  .job-org {
    font-size: 0.82rem;
    color: var(--joy-dark);
    font-weight: 500;
    margin-top: 0.2rem;
    letter-spacing: 0.04em;
  }

  .job-desc {
    font-size: 0.88rem;
    line-height: 1.7;
    color: var(--warm-gray);
    margin-top: 0.9rem;
  }

  .job-highlights {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    margin-top: 1.1rem;
  }
  .job-highlights li {
    font-size: 0.82rem;
    color: var(--ink);
    padding-left: 1.2rem;
    position: relative;
    line-height: 1.5;
  }
  .job-highlights li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--joy-dark);
    font-size: 0.72rem;
  }

  @media (max-width: 900px) {
    .experience-section { padding: 5rem 1.5rem; }
    .timeline-item { grid-template-columns: 1fr; }
    .timeline-left { text-align: left; padding-top: 0; margin-bottom: 0.5rem; }
    .timeline-connector { display: none; }
  }
</style>