<script>
  const stats = [
    { value: 'Cum Laude', label: 'BS Mathematics' },
    { value: '4+', label: 'Organizations' },
    { value: '5+', label: 'Experiences' },
    { value: 'DPE', label: 'In Progress' },
  ];

  const mathSymbols = [
    { symbol: '∫', x: 5, y: 10, size: 96, delay: 0, duration: 7 },
    { symbol: '∑', x: 88, y: 8, size: 80, delay: 1, duration: 9 },
    { symbol: 'π', x: 15, y: 70, size: 72, delay: 2, duration: 6 },
    { symbol: '∂', x: 78, y: 65, size: 88, delay: 0.5, duration: 8 },
    { symbol: '√', x: 50, y: 5, size: 76, delay: 3, duration: 10 },
    { symbol: '∞', x: 92, y: 40, size: 68, delay: 1.5, duration: 7 },
    { symbol: 'θ', x: 3, y: 45, size: 64, delay: 2.5, duration: 9 },
    { symbol: 'Δ', x: 60, y: 80, size: 84, delay: 0.8, duration: 8 },
    { symbol: '∇', x: 30, y: 88, size: 60, delay: 3.5, duration: 6 },
    { symbol: 'λ', x: 70, y: 15, size: 70, delay: 1.2, duration: 11 },
    { symbol: '≈', x: 42, y: 60, size: 62, delay: 2.8, duration: 7 },
    { symbol: 'φ', x: 20, y: 30, size: 78, delay: 4, duration: 9 },
    { symbol: 'ε', x: 83, y: 82, size: 56, delay: 0.3, duration: 8 },
    { symbol: '∈', x: 55, y: 40, size: 52, delay: 1.8, duration: 10 },
    { symbol: 'σ', x: 8, y: 85, size: 74, delay: 3.2, duration: 7 },
    { symbol: 'μ', x: 35, y: 18, size: 66, delay: 0.6, duration: 8 },
    { symbol: 'Ω', x: 65, y: 55, size: 90, delay: 2.1, duration: 9 },
    { symbol: 'α', x: 25, y: 52, size: 58, delay: 1.4, duration: 7 },
    { symbol: 'β', x: 47, y: 78, size: 72, delay: 3.8, duration: 10 },
    { symbol: '∏', x: 72, y: 30, size: 80, delay: 0.9, duration: 8 },
    { symbol: 'ρ', x: 12, y: 22, size: 54, delay: 2.3, duration: 6 },
    { symbol: '≠', x: 90, y: 60, size: 62, delay: 4.2, duration: 9 },
    { symbol: 'γ', x: 38, y: 35, size: 68, delay: 1.7, duration: 7 },
    { symbol: '⊕', x: 58, y: 92, size: 76, delay: 3.1, duration: 11 },
    { symbol: 'ζ', x: 80, y: 20, size: 60, delay: 0.4, duration: 8 },
    { symbol: '∮', x: 22, y: 75, size: 84, delay: 2.6, duration: 9 },
    { symbol: 'η', x: 48, y: 25, size: 56, delay: 4.5, duration: 7 },
    { symbol: '⊂', x: 95, y: 75, size: 64, delay: 1.1, duration: 8 },
    { symbol: 'κ', x: 33, y: 62, size: 70, delay: 3.6, duration: 10 },
    { symbol: '∀', x: 68, y: 45, size: 78, delay: 0.7, duration: 6 },
  ];
</script>

<section id="about" class="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">

  <!-- Floating math symbols background -->
  <div class="absolute inset-0 pointer-events-none select-none overflow-hidden">
    {#each mathSymbols as m}
      <span
        class="absolute font-display font-black leading-none text-ink/[0.06]"
        style="
          left: {m.x}%;
          top: {m.y}%;
          font-size: {m.size}px;
          animation: float {m.duration}s ease-in-out {m.delay}s infinite;
        "
      >{m.symbol}</span>
    {/each}
  </div>

  <div class="relative z-10 grid md:grid-cols-2 gap-16 items-start">

    <!-- Left: title + stats -->
    <div>
      <span class="tag mb-4 inline-block">01 · About Me</span>
      <h2 class="section-title mb-8">
        The person<br/>
        <span class="italic">behind the<br/>numbers.</span>
      </h2>

      <!-- Stats grid -->
      <div class="grid grid-cols-2 gap-4">
        {#each stats as stat}
          <div class="bg-joy-400 border-2 border-ink rounded-2xl p-5 shadow-[3px_3px_0_#1a1200]">
            <p class="font-display font-black text-2xl text-ink">{stat.value}</p>
            <p class="font-mono text-xs text-ink/60 mt-1">{stat.label}</p>
          </div>
        {/each}
      </div>

      <!-- Interests -->
      <div class="mt-8">
        <p class="font-mono text-xs text-ink/50 mb-3 uppercase tracking-widest">Interests</p>
        <div class="flex flex-wrap gap-2">
          {#each ['Mathematics', 'Finance', 'Education', 'Dance', 'Data', 'Theater Arts', 'Community Service'] as interest}
            <span class="font-body text-sm border-2 border-ink rounded-full px-4 py-1 hover:bg-joy-400 transition-colors cursor-default">{interest}</span>
          {/each}
        </div>
      </div>
    </div>

    <!-- Right: about text -->
    <div class="space-y-5 font-body text-ink/80 leading-relaxed text-base">

      <div class="bg-joy-50 border-2 border-ink rounded-2xl p-6 shadow-[3px_3px_0_#1a1200] relative overflow-hidden">
        <div class="absolute top-4 right-4 text-5xl opacity-10 font-display">"</div>
        <p>
          I am a <strong class="text-ink">BS Mathematics graduate (cum laude)</strong> from the University of the Philippines Cebu, with a strong foundation in analytical problem-solving, quantitative reasoning, and data-driven decision-making. My academic training has equipped me to approach complex problems with structure, logic, and precision.
        </p>
      </div>

      <p>
        I am currently pursuing a <strong class="text-ink">Diploma in Professional Education</strong>, developing competencies in pedagogy, curriculum design, and learner-centered instruction — bridging strong technical expertise with effective communication and teaching practices.
      </p>

      <p>
        My professional experience includes roles in <strong class="text-ink">finance and operations</strong>, handling payroll processing, HRIS data management, and financial documentation, as well as a finance internship that strengthened my exposure to investments and financial planning.
      </p>

      <p>
        With interests spanning <strong class="text-ink">mathematics, finance, and education</strong>, I am eager to contribute to roles that value analytical thinking, continuous learning, and meaningful impact.
      </p>

      <div class="flex gap-4 pt-2">
        <a href="#contact" class="btn-primary">Get in touch →</a>
      </div>
    </div>
  </div>

</section>