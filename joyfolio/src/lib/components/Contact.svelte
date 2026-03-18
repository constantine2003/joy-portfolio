<script>
  import { scrollReveal } from '$lib/scrollReveal.js';

  const MAILTO = 'mailto:arenasreallyjoy@gmail.com';

  const links = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/reallyjoyarenas/',
      logo: '/images/linkedin.png',
      fallback: 'in',
      desc: "Let's connect professionally",
    },
    {
      label: 'Email',
      href: MAILTO,
      logo: '/images/gmaillogo.png',
      fallback: '@',
      desc: 'arenasreallyjoy@gmail.com',
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/rjoy.arenas',
      logo: '/images/facebook.png',
      fallback: 'fb',
      desc: 'Say hi on Facebook',
    },
  ];

  // Triple-duplicated so translateX(-33.333%) loops invisibly
  const funFacts = [
    'Responds within 24 hours ⏱',
    'Math major, human first 🫶',
    'Based in Cebu, PH 🌴',
    'Loves dancing & theater arts 💃',
    'Can explain fuzzy sets over coffee ☕',
    'Firm believer that math is everywhere 🔢',
  ];
  const tickerItems = [...funFacts, ...funFacts, ...funFacts];

  const bgEquations = [
    { text: 'f(x) = μ(x)',     x: 4,  y: 12, size: 15, delay: 0,   dur: 7 },
    { text: '∑ aᵢbᵢ',          x: 88, y: 8,  size: 18, delay: 1.5, dur: 9 },
    { text: 'lim x→∞',         x: 72, y: 70, size: 14, delay: 3,   dur: 8 },
    { text: '∫₀¹ f(x)dx = 1',  x: 6,  y: 65, size: 13, delay: 2,   dur: 6 },
    { text: 'P(A∩B)',           x: 50, y: 5,  size: 16, delay: 4,   dur: 7 },
    { text: 'x * (y * x) = x', x: 90, y: 45, size: 12, delay: 0.5, dur: 10 },
    { text: 'μ + ν ≤ 1',        x: 20, y: 85, size: 17, delay: 5,   dur: 8 },
    { text: '∀x ∈ H',           x: 60, y: 88, size: 14, delay: 2.5, dur: 6 },
    { text: 'π ≈ 3.14159…',     x: 35, y: 20, size: 13, delay: 1,   dur: 9 },
    { text: 'ker(f) ⊆ A',      x: 78, y: 30, size: 15, delay: 6,   dur: 7 },
    { text: 'e^(iπ) + 1 = 0',  x: 14, y: 40, size: 16, delay: 3.5, dur: 8 },
    { text: '√2 ∉ ℚ',           x: 46, y: 55, size: 14, delay: 4.5, dur: 6 },
  ];

  // ── Modal state ──
  let showModal = false;
  let name = '';
  let email = '';
  let message = '';

  const openModal  = () => { showModal = true; };
  const closeModal = () => { showModal = false; name = ''; email = ''; message = ''; };
  const handleKeydown = (e) => { if (e.key === 'Escape') closeModal(); };

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !message.trim()) return;
    const subject = encodeURIComponent(`Message from ${name} via portfolio`);
    const body    = encodeURIComponent(`Hi Joy!\n\nName: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `${MAILTO}?subject=${subject}&body=${body}`;
    closeModal();
  };
</script>

<svelte:window onkeydown={handleKeydown} />

<!-- ── Contact form modal ── -->
{#if showModal}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="fixed inset-0 z-[200] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-6"
    onclick={closeModal}
  >
    <div
      class="relative w-full max-w-lg bg-white border-2 border-ink rounded-2xl overflow-hidden shadow-[8px_8px_0_#f5e96a]"
      onclick={(e) => e.stopPropagation()}
    >
      <div class="flex items-center justify-between px-6 py-4 border-b-2 border-ink bg-joy-400">
        <div>
          <p class="font-display font-bold text-ink text-lg leading-none">Say hello 👋</p>
          <p class="font-mono text-xs text-ink/60 mt-0.5">I'll get back to you within 24 hours</p>
        </div>
        <button
          onclick={closeModal}
          class="w-8 h-8 rounded-full border-2 border-ink bg-white flex items-center justify-center font-bold text-ink hover:bg-ink hover:text-joy-400 transition-colors shrink-0"
        >✕</button>
      </div>

      <div class="p-6 space-y-4">
        <div>
          <label class="font-mono text-xs text-ink/50 uppercase tracking-widest block mb-1" for="contact-name">Your name</label>
          <input id="contact-name" type="text" bind:value={name} placeholder="e.g. Maria Santos" class="contact-input" />
        </div>
        <div>
          <label class="font-mono text-xs text-ink/50 uppercase tracking-widest block mb-1" for="contact-email">Your email</label>
          <input id="contact-email" type="email" bind:value={email} placeholder="e.g. maria@gmail.com" class="contact-input" />
        </div>
        <div>
          <label class="font-mono text-xs text-ink/50 uppercase tracking-widest block mb-1" for="contact-message">Message</label>
          <textarea id="contact-message" bind:value={message} placeholder="Hi Joy! I'd love to connect about…" rows="4" class="contact-input resize-none"></textarea>
        </div>
        <div class="flex items-center justify-between gap-3 pt-1">
          <p class="font-mono text-xs text-ink/30">Opens your mail client</p>
          <button
            onclick={handleSubmit}
            disabled={!name.trim() || !email.trim() || !message.trim()}
            class="inline-flex items-center gap-2 bg-ink text-joy-400 font-display font-bold text-sm px-6 py-3 rounded-xl border-2 border-ink shadow-[3px_3px_0_#f5e96a] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed disabled:translate-x-0 disabled:translate-y-0"
          >
            Send message →
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}

<section id="contact" class="contact-section bg-ink py-24 px-6 relative overflow-hidden">

  <!-- Animated equation background -->
  <div class="eq-layer" aria-hidden="true">
    {#each bgEquations as eq}
      <span
        class="eq-float font-mono absolute text-white/[0.06]"
        style="left:{eq.x}%; top:{eq.y}%; font-size:{eq.size}px; animation-duration:{eq.dur}s; animation-delay:-{eq.delay}s;"
      >{eq.text}</span>
    {/each}
  </div>

  <!-- Ghost "Let's Connect" -->
  <div class="absolute top-0 left-0 right-0 font-display font-black text-[11vw] text-white/[0.04] leading-none select-none pointer-events-none whitespace-nowrap overflow-hidden">
    Let's Connect
  </div>

  <div class="max-w-3xl mx-auto relative z-10">

    <!-- Header -->
    <div use:scrollReveal={{ delay: 0 }} class="text-center mb-12">
      <span class="tag mb-6 inline-block">06 · Contact</span>
      <h2 class="font-display font-black text-5xl md:text-7xl text-joy-400 leading-none mb-4">
        Let's work<br/><span class="italic text-white">together.</span>
      </h2>
      <p class="font-body text-white/50 text-base md:text-lg max-w-xl mx-auto">
        Whether it's about mathematics, education, finance, or just a friendly hello — I'd love to hear from you.
      </p>
    </div>

    <!-- Seamless ticker -->
    <div use:scrollReveal={{ delay: 80 }} class="mb-10">
      <div class="ticker-wrap">
        <div class="ticker-track">
          {#each tickerItems as fact}
            <span class="ticker-item font-mono text-xs text-white/40">{fact}</span>
          {/each}
        </div>
      </div>
    </div>

    <!-- Main CTA -->
    <div use:scrollReveal={{ delay: 150, y: 24 }} class="flex justify-center mb-10">
      <button
        onclick={openModal}
        class="group relative inline-flex items-center gap-4 bg-joy-400 border-2 border-joy-400 text-ink font-display font-bold text-xl md:text-2xl px-8 py-5 rounded-2xl shadow-[6px_6px_0_#b8a800] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all duration-200"
      >
        <span>Say hello →</span>
        <div class="w-8 h-8 rounded-full bg-ink flex items-center justify-center text-joy-400 text-sm group-hover:rotate-12 transition-transform duration-300">✉</div>
      </button>
    </div>

    <!-- Contact cards -->
    <div use:scrollReveal={{ delay: 240, y: 20 }} class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
      {#each links as link}
        <a
          href={link.href}
          title={link.label}
          target={link.href.startsWith('mailto') ? '_self' : '_blank'}
          rel={link.href.startsWith('mailto') ? '' : 'noopener noreferrer'}
          class="contact-card group flex flex-col items-center gap-3 p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-joy-400 hover:border-joy-400 transition-all duration-300"
        >
          <div class="w-12 h-12 rounded-xl bg-white/10 group-hover:bg-ink flex items-center justify-center overflow-hidden transition-all duration-300">
            <img
              src={link.logo}
              alt={link.label}
              class="w-7 h-7 object-contain"
              onerror={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'flex'; }}
            />
            <span class="w-full h-full items-center justify-center font-mono font-bold text-sm text-white group-hover:text-joy-400" style="display:none;">{link.fallback}</span>
          </div>
          <div class="text-center">
            <p class="font-display font-bold text-white group-hover:text-ink text-sm transition-colors duration-300">{link.label}</p>
            <p class="font-mono text-xs text-white/40 group-hover:text-ink/60 transition-colors duration-300 mt-0.5">{link.desc}</p>
          </div>
        </a>
      {/each}
    </div>

  </div>

  <!-- Footer -->
  <div use:scrollReveal={{ delay: 400, y: 16 }} class="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
    <p class="font-display font-black text-joy-400 text-xl">Really Joy Arenas</p>
    <p class="font-mono text-xs text-white/30">BS Mathematics · Cum Laude · UP Cebu · 2025</p>
    <p class="font-mono text-xs text-white/20">Made with 💛 and math.</p>
  </div>

</section>

<style>
  /* ── Equation float layer ── */
  .eq-layer {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
  }
  .eq-float {
    animation: eq-drift ease-in-out infinite alternate;
    will-change: transform, opacity;
  }
  @keyframes eq-drift {
    0%   { transform: translateY(0px)   rotate(0deg);   opacity: 0.04; }
    50%  { transform: translateY(-10px) rotate(1.5deg); opacity: 0.08; }
    100% { transform: translateY(-18px) rotate(-2deg);  opacity: 0.05; }
  }

  /* ── Seamless ticker ──────────────────────────────────────────
     The track holds 3 identical copies of the items.
     We animate from 0 → -33.333% (exactly one copy's width).
     When it snaps back to 0, the content is identical so the
     loop is completely invisible.
  ─────────────────────────────────────────────────────────────── */
  .ticker-wrap {
    overflow: hidden;
    border-top: 1px solid rgba(255,255,255,0.08);
    border-bottom: 1px solid rgba(255,255,255,0.08);
    padding: 8px 0;
  }
  .ticker-track {
    display: flex;
    width: max-content;       /* shrink-wraps all items naturally */
    animation: ticker-scroll 28s linear infinite;
    will-change: transform;
  }
  .ticker-item {
    padding: 0 32px;
    border-right: 1px solid rgba(255,255,255,0.1);
    white-space: nowrap;
    flex-shrink: 0;
  }
  .ticker-item::before {
    content: '✦ ';
    color: #f5e96a;
    margin-right: 4px;
  }
  @keyframes ticker-scroll {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-33.333%); }
  }

  /* ── Contact cards ── */
  .contact-card { cursor: pointer; }

  /* ── Form inputs ── */
  :global(.contact-input) {
    width: 100%;
    background: #f9f7ed;
    border: 2px solid #1a1200;
    border-radius: 10px;
    padding: 10px 14px;
    font-family: var(--font-body, sans-serif);
    font-size: 14px;
    color: #1a1200;
    outline: none;
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  :global(.contact-input:focus) {
    box-shadow: 3px 3px 0 #f5e96a;
  }
  :global(.contact-input::placeholder) {
    color: #a09060;
  }
</style>