<script lang="ts">
  import { profile } from '$lib/data/portfolio';

  let name = '';
  let email = '';
  let interest = '';
  let message = '';
  let status: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  async function handleSubmit() {
    status = 'loading';
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, interest, message })
      });
      if (res.ok) {
        status = 'success';
        name = email = interest = message = '';
      } else {
        status = 'error';
      }
    } catch {
      status = 'error';
    }
  }
</script>

<section class="contact-section" id="contact">
  <div class="contact-info">
    <p class="section-label reveal">Get in Touch</p>
    <h2 class="section-title reveal">Let's work <em>together</em></h2>
    <p class="contact-text reveal">
      Whether you're a student looking for a tutor, a school seeking a lecturer, or an institution interested in collaboration — I'd love to hear from you.
    </p>
    <div class="contact-links reveal">
      <a class="contact-link" href="mailto:{profile.email}">
        <span class="contact-link-icon">✉️</span>
        <div>
          <div class="contact-link-label">Email</div>
          <div class="contact-link-value">{profile.email}</div>
        </div>
      </a>
      <a class="contact-link" href={profile.linkedin} target="_blank" rel="noreferrer">
        <span class="contact-link-icon">in</span>
        <div>
          <div class="contact-link-label">LinkedIn</div>
          <div class="contact-link-value">{profile.linkedin}</div>
        </div>
      </a>
      <a class="contact-link" href="https://maps.google.com/?q=San+Fernando+Cebu" target="_blank" rel="noreferrer">
        <span class="contact-link-icon">↗</span>
        <div>
          <div class="contact-link-label">Location</div>
          <div class="contact-link-value">{profile.location}</div>
        </div>
      </a>
    </div>
  </div>

  <div class="contact-form-wrap reveal">
    {#if status === 'success'}
      <div class="success-msg">
        <span>🎉</span>
        <h3>Message sent!</h3>
        <p>Thank you for reaching out. I'll get back to you shortly.</p>
      </div>
    {:else}
      <div class="form-group">
        <label class="form-label" for="input-name">Full Name</label>
        <input id="input-name" class="form-input" type="text" bind:value={name} placeholder="Your name" />
      </div>
      <div class="form-group">
        <label class="form-label" for="input-email">Email Address</label>
        <input id="input-email" class="form-input" type="email" bind:value={email} placeholder="your@email.com" />
      </div>
      <div class="form-group">
        <label class="form-label" for="input-interest">I'm interested in</label>
        <input id="input-interest" class="form-input" type="text" bind:value={interest} placeholder="e.g. Statistics tutoring, Board exam review..." />
      </div>
      <div class="form-group">
        <label class="form-label" for="input-message">Message</label>
        <textarea id="input-message" class="form-textarea" bind:value={message} placeholder="Tell me about your goals and how I can help..."></textarea>
      </div>
      {#if status === 'error'}
        <p class="error-msg">Something went wrong. Please try again or email directly.</p>
      {/if}
      <button class="form-btn" on:click={handleSubmit} disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send Message →'}
      </button>
    {/if}
  </div>
</section>

<style>
  .contact-section {
    padding: 7rem 4rem;
    background: var(--surface);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    align-items: start;
  }
  .contact-section .section-title { margin-bottom: 1rem; }

  .contact-text {
    font-size: 1rem;
    line-height: 1.8;
    color: var(--warm-gray);
    font-weight: 300;
    margin-bottom: 2.5rem;
  }
  .contact-links { display: flex; flex-direction: column; gap: 1rem; }
  .contact-link {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
    color: var(--ink);
    padding: 1rem 1.2rem;
    border-radius: 12px;
    border: 1px solid rgba(26,18,7,0.08);
    transition: border-color 0.2s, background 0.2s;
  }
  .contact-link:hover { border-color: var(--joy); background: rgba(245,197,24,0.06); }
  .contact-link-icon { font-size: 1.2rem; }
  .contact-link-label {
    font-family: 'DM Mono', monospace;
    font-size: 0.68rem;
    color: var(--warm-gray);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .contact-link-value { font-size: 0.88rem; color: var(--ink); margin-top: 0.1rem; }

  .contact-form-wrap { display: flex; flex-direction: column; gap: 1.2rem; }
  .form-group { display: flex; flex-direction: column; gap: 0.5rem; }
  .form-label {
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-family: 'DM Mono', monospace;
    color: var(--warm-gray);
  }
  .form-input, .form-textarea {
    background: white;
    border: 1.5px solid rgba(26,18,7,0.1);
    border-radius: 10px;
    padding: 0.85rem 1rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    color: var(--ink);
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    cursor: auto;
  }
  .form-input:focus, .form-textarea:focus {
    border-color: var(--joy);
    box-shadow: 0 0 0 4px rgba(245,197,24,0.12);
  }
  .form-textarea { resize: vertical; min-height: 130px; }
  .form-btn {
    background: var(--ink);
    color: var(--joy);
    border: none;
    padding: 1rem 2rem;
    border-radius: 100px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s, opacity 0.2s;
    align-self: flex-start;
  }
  .form-btn:hover:not(:disabled) { background: var(--joy-deep); transform: translateY(-2px); }
  .form-btn:disabled { opacity: 0.6; }
  .error-msg { font-size: 0.82rem; color: #c0392b; }

  .success-msg {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 4rem 2rem;
    background: white;
    border-radius: 20px;
    border: 1px solid rgba(26,18,7,0.06);
    gap: 0.75rem;
  }
  .success-msg span { font-size: 2.5rem; }
  .success-msg h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--ink);
  }
  .success-msg p { color: var(--warm-gray); font-size: 0.9rem; }

  @media (max-width: 900px) {
    .contact-section { padding: 5rem 1.5rem; grid-template-columns: 1fr; gap: 3rem; }
  }
</style>