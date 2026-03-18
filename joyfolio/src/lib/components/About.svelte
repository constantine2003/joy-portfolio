<script>
  import { scrollReveal } from '$lib/scrollReveal.js';

  const stats = [
    { value: 'Cum Laude', label: 'BS Mathematics' },
    { value: '4+', label: 'Organizations' },
    { value: '5+', label: 'Experiences' },
    { value: 'DPE', label: 'In Progress' },
  ];

  const interests = ['Mathematics', 'Finance', 'Education', 'Dance', 'Data', 'Theater Arts', 'Community Service'];

  const mathSymbols = [
    { symbol: '∫', x: 5,  y: 10, size: 96, delay: 0,   duration: 3.0,  drift: 18, rotate: 12 },
    { symbol: '∑', x: 88, y: 8,  size: 80, delay: 2,   duration: 6.4, drift: 14, rotate: -8 },
    { symbol: 'π', x: 15, y: 70, size: 72, delay: 4,   duration: 4.3, drift: 22, rotate: 20 },
    { symbol: '∂', x: 78, y: 65, size: 88, delay: 1,   duration: 5.7, drift: 16, rotate: -15 },
    { symbol: '√', x: 50, y: 5,  size: 76, delay: 6,   duration: 7.1, drift: 10, rotate: 6 },
    { symbol: '∞', x: 92, y: 40, size: 68, delay: 3,   duration: 5.4, drift: 20, rotate: -10 },
    { symbol: 'θ', x: 3,  y: 45, size: 64, delay: 5,   duration: 6.4, drift: 15, rotate: 18 },
    { symbol: 'Δ', x: 60, y: 80, size: 84, delay: 1.5, duration: 4.6, drift: 12, rotate: -6 },
    { symbol: '∇', x: 30, y: 88, size: 60, delay: 7,   duration: 6.1, drift: 18, rotate: 14 },
    { symbol: 'λ', x: 70, y: 15, size: 70, delay: 2.5, duration: 7.5, drift: 8,  rotate: -20 },
    { symbol: '≈', x: 42, y: 60, size: 62, delay: 5.5, duration: 5.0, drift: 24, rotate: 10 },
    { symbol: 'φ', x: 20, y: 30, size: 78, delay: 8,   duration: 6.8, drift: 16, rotate: -12 },
    { symbol: 'ε', x: 83, y: 82, size: 56, delay: 0.5, duration: 5.7, drift: 20, rotate: 22 },
    { symbol: '∈', x: 55, y: 40, size: 52, delay: 3.5, duration: 5.4, drift: 14, rotate: -8 },
    { symbol: 'σ', x: 8,  y: 85, size: 74, delay: 6.5, duration: 6.4, drift: 18, rotate: 16 },
    { symbol: 'μ', x: 35, y: 18, size: 66, delay: 1.2, duration: 7.5, drift: 10, rotate: -18 },
    { symbol: 'Ω', x: 65, y: 55, size: 90, delay: 4.2, duration: 4.6, drift: 22, rotate: 8 },
    { symbol: 'α', x: 25, y: 52, size: 58, delay: 7.5, duration: 6.1, drift: 16, rotate: -14 },
    { symbol: 'β', x: 47, y: 78, size: 72, delay: 2.8, duration: 7.1, drift: 12, rotate: 20 },
    { symbol: '∏', x: 72, y: 30, size: 80, delay: 0.8, duration: 5.7, drift: 18, rotate: -6 },
    { symbol: 'ρ', x: 12, y: 22, size: 54, delay: 4.6, duration: 5.0, drift: 20, rotate: 12 },
    { symbol: '≠', x: 90, y: 60, size: 62, delay: 8.5, duration: 6.4, drift: 14, rotate: -16 },
    { symbol: 'γ', x: 38, y: 35, size: 68, delay: 3.3, duration: 7.5, drift: 8,  rotate: 18 },
    { symbol: '⊕', x: 58, y: 92, size: 76, delay: 6.2, duration: 5.4, drift: 22, rotate: -10 },
    { symbol: 'ζ', x: 80, y: 20, size: 60, delay: 0.8, duration: 6.1, drift: 16, rotate: 14 },
    { symbol: '∮', x: 22, y: 75, size: 84, delay: 5.2, duration: 6.8, drift: 18, rotate: -20 },
    { symbol: 'η', x: 48, y: 25, size: 56, delay: 9,   duration: 5.0, drift: 12, rotate: 8 },
    { symbol: '⊂', x: 95, y: 75, size: 64, delay: 2.2, duration: 7.5, drift: 20, rotate: -12 },
    { symbol: 'κ', x: 33, y: 62, size: 70, delay: 7.2, duration: 5.7, drift: 16, rotate: 22 },
    { symbol: '∀', x: 68, y: 45, size: 78, delay: 1.4, duration: 6.4, drift: 14, rotate: -8 },
  ];
</script>

<!-- Outer wrapper: full viewport width so symbols can roam edge to edge -->
<div id="about" class="about-wrapper">

  <!-- Floating math symbols pinned to the full-width wrapper -->
  <div class="symbols-layer" aria-hidden="true">
    {#each mathSymbols as m}
      <span
        class="math-sym absolute font-display font-black leading-none"
        style="
          left: {m.x}%;
          top: {m.y}%;
          font-size: {m.size}px;
          opacity: 0.08;
          animation-duration: {m.duration}s;
          animation-delay: -{m.delay}s;
        "
      >{m.symbol}</span>
    {/each}
  </div>

  <!-- Centered content -->
  <section class="py-24 px-6 max-w-7xl mx-auto relative z-10">

    <div class="grid md:grid-cols-2 gap-16 items-start">

      <!-- Left -->
      <div>
        <div use:scrollReveal={{ delay: 0 }}>
          <span class="tag mb-4 inline-block">01 · About Me</span>
          <h2 class="section-title mb-8">
            The person<br/>
            <span class="italic">behind the<br/>numbers.</span>
          </h2>
        </div>

        <!-- Stats grid -->
        <div class="grid grid-cols-2 gap-4">
          {#each stats as stat, i}
            <div
              use:scrollReveal={{ delay: 100 + i * 100, y: 24 }}
              class="bg-joy-400 border-2 border-ink rounded-2xl p-5 shadow-[3px_3px_0_#1a1200] hover:shadow-[5px_5px_0_#1a1200] hover:-translate-y-0.5 transition-all duration-500 cursor-default"
            >
              <p class="font-display font-black text-2xl text-ink">{stat.value}</p>
              <p class="font-mono text-xs text-ink/60 mt-1">{stat.label}</p>
            </div>
          {/each}
        </div>

        <!-- Interests -->
        <div class="mt-8">
          <div use:scrollReveal={{ delay: 500, y: 12 }}>
            <p class="font-mono text-xs text-ink/50 mb-3 uppercase tracking-widest">Interests</p>
          </div>
          <div class="flex flex-wrap gap-2">
            {#each interests as interest, i}
              <span
                use:scrollReveal={{ delay: 560 + i * 70, y: 16 }}
                class="font-body text-sm border-2 border-ink rounded-full px-4 py-1 hover:bg-joy-400 transition-all duration-500 cursor-default hover:scale-105 hover:shadow-[2px_2px_0_#1a1200]"
              >{interest}</span>
            {/each}
          </div>
        </div>
      </div>

      <!-- Right -->
      <div class="space-y-5 font-body text-ink/80 leading-relaxed text-base">

        <div
          use:scrollReveal={{ delay: 100, y: 32 }}
          class="bg-joy-50 border-2 border-ink rounded-2xl p-6 shadow-[3px_3px_0_#1a1200] relative overflow-hidden"
        >
          <div class="absolute top-4 right-4 text-5xl opacity-10 font-display">"</div>
          <p>
            I am a <strong class="text-ink">BS Mathematics graduate (cum laude)</strong> from the University of the Philippines Cebu, with a strong foundation in analytical problem-solving, quantitative reasoning, and data-driven decision-making.
          </p>
        </div>

        <div use:scrollReveal={{ delay: 220, y: 32 }}>
          <p>
            I am currently pursuing a <strong class="text-ink">Diploma in Professional Education</strong>, developing competencies in pedagogy, curriculum design, and learner-centered instruction — bridging strong technical expertise with effective communication and teaching practices.
          </p>
        </div>

        <div use:scrollReveal={{ delay: 340, y: 32 }}>
          <p>
            My professional experience includes roles in <strong class="text-ink">finance and operations</strong>, handling payroll processing, HRIS data management, and financial documentation, as well as a finance internship that strengthened my exposure to investments and financial planning.
          </p>
        </div>

        <div use:scrollReveal={{ delay: 460, y: 32 }}>
          <p>
            With interests spanning <strong class="text-ink">mathematics, finance, and education</strong>, I am eager to contribute to roles that value analytical thinking, continuous learning, and meaningful impact.
          </p>
        </div>

        <div use:scrollReveal={{ delay: 560, y: 20 }} class="flex gap-4 pt-2">
          <a href="#contact" class="btn-primary">Get in touch →</a>
        </div>
      </div>
    </div>

  </section>
</div>

<style>
  /* Full-width wrapper — symbols position relative to this */
  .about-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  /* Symbols layer fills the entire wrapper, not the centered section */
  .symbols-layer {
    position: absolute;
    inset: 0;
    pointer-events: none;
    select: none;
  }

  .math-sym {
    animation-name: sym-float;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    will-change: transform, opacity;
  }

  @keyframes sym-float {
    0%   { transform: translateY(0px)   translateX(0px)  rotate(0deg);  opacity: 0.05; }
    50%  { transform: translateY(-12px) translateX(5px)  rotate(3deg);  opacity: 0.10; }
    100% { transform: translateY(-20px) translateX(-4px) rotate(-4deg); opacity: 0.07; }
  }
</style>