<script lang="ts">
  import { certificates } from '$lib/data/portfolio';
</script>

<section class="certs-section" id="certificates">
  <p class="section-label reveal">Credentials</p>
  <h2 class="section-title reveal">Certificates & <em>Licenses</em></h2>

  <div class="certs-grid">
    {#each certificates as cert, i}
      <div class="cert-card reveal" style="transition-delay: {i * 80}ms">
        <div class="cert-top">
          <div class="cert-emoji">{cert.emoji}</div>
          <div class="cert-year">{cert.year}</div>
        </div>
        <div class="cert-title">{cert.title}</div>
        <div class="cert-issuer">{cert.issuer}</div>
        <div class="cert-credential">{cert.credential}</div>
      </div>
    {/each}
  </div>
</section>

<style>
  .certs-section {
    padding: 7rem 4rem;
    background: var(--joy);
  }
  .certs-section .section-label { color: var(--joy-deep); }
  .certs-section .section-label::before { background: var(--joy-deep); }
  .certs-section .section-title { color: var(--ink); margin-bottom: 3rem; }
  .certs-section .section-title em { color: var(--joy-deep); }

  .certs-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem;
  }

  .cert-card {
    background: rgba(255,255,255,0.55);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.7);
    border-radius: 18px;
    padding: 1.8rem;
    transition: background 0.3s, transform 0.3s;
  }
  .cert-card:hover {
    background: rgba(255,255,255,0.8);
    transform: translateY(-4px);
  }

  .cert-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
  }
  .cert-emoji { font-size: 1.8rem; }
  .cert-year {
    font-family: 'DM Mono', monospace;
    font-size: 0.68rem;
    color: var(--joy-deep);
    background: rgba(122,92,0,0.1);
    padding: 0.2rem 0.6rem;
    border-radius: 100px;
    letter-spacing: 0.08em;
  }

  .cert-title {
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    font-weight: 700;
    color: var(--ink);
    line-height: 1.3;
    margin-bottom: 0.4rem;
  }
  .cert-issuer {
    font-size: 0.78rem;
    color: var(--joy-deep);
    font-weight: 500;
    margin-bottom: 0.6rem;
  }
  .cert-credential {
    font-family: 'DM Mono', monospace;
    font-size: 0.65rem;
    color: rgba(26,18,7,0.4);
    letter-spacing: 0.06em;
  }

  @media (max-width: 900px) {
    .certs-section { padding: 5rem 1.5rem; }
    .certs-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 500px) {
    .certs-grid { grid-template-columns: 1fr; }
  }
</style>