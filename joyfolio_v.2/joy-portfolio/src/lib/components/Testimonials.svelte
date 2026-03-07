<script lang="ts">
  import { testimonials } from '$lib/data/portfolio';
</script>

<section class="testimonials-section" id="testimonials">
  <p class="section-label reveal">Kind Words</p>
  <h2 class="section-title reveal">What Students <em>Say</em></h2>

  <div class="testimonials-grid">
    {#each testimonials as t, i}
      <div class="testimonial-card reveal" style="transition-delay: {i * 120}ms">
        <div class="stars">{'★'.repeat(t.rating)}</div>
        <blockquote class="testimonial-text">"{t.text}"</blockquote>
        <div class="testimonial-author">
          <div class="author-avatar">{t.name[0]}</div>
          <div>
            <div class="author-name">{t.name}</div>
            <div class="author-role">{t.role}</div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .testimonials-section {
    padding: 7rem 4rem;
    background: var(--cream);
  }
  .testimonials-section .section-title { margin-bottom: 3rem; }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .testimonial-card {
    background: white;
    border-radius: 20px;
    padding: 2.2rem;
    border: 1px solid rgba(26,18,7,0.06);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .testimonial-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(26,18,7,0.08);
  }

  .stars {
    color: var(--joy);
    font-size: 0.9rem;
    letter-spacing: 0.1em;
  }

  .testimonial-text {
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    font-style: italic;
    line-height: 1.7;
    color: var(--ink);
    flex: 1;
  }

  .testimonial-author {
    display: flex;
    align-items: center;
    gap: 0.9rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(26,18,7,0.06);
  }
  .author-avatar {
    width: 36px; height: 36px;
    background: var(--joy-light);
    color: var(--joy-deep);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Playfair Display', serif;
    font-size: 0.9rem;
    font-weight: 700;
    flex-shrink: 0;
  }
  .author-name {
    font-weight: 600;
    font-size: 0.85rem;
    color: var(--ink);
  }
  .author-role {
    font-size: 0.72rem;
    color: var(--warm-gray);
    margin-top: 0.15rem;
    font-family: 'DM Mono', monospace;
    letter-spacing: 0.06em;
  }

  @media (max-width: 900px) {
    .testimonials-section { padding: 5rem 1.5rem; }
    .testimonials-grid { grid-template-columns: 1fr; }
  }
</style>