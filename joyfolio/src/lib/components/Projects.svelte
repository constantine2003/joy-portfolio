<script>
  import { scrollReveal } from '$lib/scrollReveal.js';

  const projects = [
    {
      title: 'Undergraduate Thesis',
      subtitle: 'On Properties of Intuitionistic Fuzzy Sets in Hilbert Algebras',
      period: 'Aug 2024 – May 2025',
      org: 'University of the Philippines Cebu',
      description: 'Explored mathematical foundations of intuitionistic fuzzy sets and their algebraic structures. Analyzed implications of these properties in Hilbert algebras. Communicated findings through a formal thesis, academic defense, and a Mathematical Sciences Conference presentation.',
      skills: ['Pure Mathematics', 'Python', 'Research', 'Academic Writing'],
      featured: true,
      number: '01',
      accent: 'accent-math',
    },
    {
      title: 'Numerical Methods Software',
      subtitle: 'Final Project for Math 173',
      period: 'Jan 2024 – Jun 2024',
      org: 'University of the Philippines Cebu',
      description: 'Collaborated in a 4-person team to build a numerical computation software. Designed the user interface for intuitive user interaction and programmed back-end logic using C++ for efficient performance.',
      skills: ['C++', 'Numerical Analysis', 'UI Design', 'Microsoft Project'],
      featured: false,
      number: '02',
      accent: 'accent-code',
    },
    {
      title: '1081 Performance',
      subtitle: "UP Students' Theater Arts Guild for Education (UPSTAGE)",
      period: 'Sep 2023',
      org: 'University of the Philippines Cebu',
      description: 'Reenacted the harrowing experiences of Martial Law victims. Co-wrote the script for the performance and collaborated with stage managers to ensure a smooth and coherent flow.',
      skills: ['Creative Writing', 'Leadership', 'Stage Production'],
      featured: false,
      number: '03',
      accent: 'accent-arts',
    },
    {
      title: 'Interactive Game',
      subtitle: 'Capstone for CMSC 21 Fundamentals of Programming',
      period: 'Jan 2023 – Jun 2023',
      org: 'University of the Philippines Cebu',
      description: 'Worked in a 12-person team to develop an interactive game from scratch. Designed game mechanics, implemented game logic and visuals using C++, and participated in iterative testing and debugging.',
      skills: ['C++', 'Game Design', 'UX Design', 'Team Collaboration'],
      featured: false,
      number: '04',
      accent: 'accent-game',
    },
    {
      title: 'WGNRR Webinar',
      subtitle: 'Philippine Adolescent Pregnancy & SRHR',
      period: 'Dec 2021 – Aug 2022',
      org: 'University of the Philippines Cebu',
      description: "Represented the class and facilitated group discussions. Coordinated and led the final project — a webinar in collaboration with the Women's Global Network for Reproductive Rights (WGNRR) on adolescent pregnancy and sexual and reproductive health rights.",
      skills: ['Leadership', 'Project Management', 'Event Coordination', 'Facilitation'],
      featured: false,
      number: '05',
      accent: 'accent-event',
    },
  ];
</script>

<div id="projects" class="projects-wrapper">

  <!-- Fuzzy set math background — sits on full viewport width -->
  <div class="math-bg" aria-hidden="true">
    <svg class="math-svg" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <!-- Fuzzy set A: triangular membership function -->
      <g opacity="0.07">
        <path d="M 50 600 L 200 200 L 350 600" fill="none" stroke="currentColor" stroke-width="1.5"/>
        <text x="185" y="185" font-family="Georgia, serif" font-size="14" fill="currentColor">&mu;_A(x)</text>
        <line x1="50" y1="600" x2="380" y2="600" stroke="currentColor" stroke-width="0.8"/>
        <line x1="50" y1="200" x2="50" y2="620" stroke="currentColor" stroke-width="0.8"/>
        <line x1="200" y1="600" x2="200" y2="610" stroke="currentColor" stroke-width="0.8"/>
        <text x="195" y="625" font-size="10" fill="currentColor" font-family="Georgia, serif">a</text>
      </g>
      <!-- Fuzzy set B: trapezoidal membership function -->
      <g opacity="0.065" transform="translate(300, 50)">
        <path d="M 50 500 L 150 150 L 320 150 L 420 500" fill="none" stroke="currentColor" stroke-width="1.5"/>
        <text x="175" y="135" font-family="Georgia, serif" font-size="14" fill="currentColor">&mu;_B(x)</text>
        <line x1="50" y1="500" x2="450" y2="500" stroke="currentColor" stroke-width="0.8"/>
        <line x1="50" y1="150" x2="50" y2="515" stroke="currentColor" stroke-width="0.8"/>
        <line x1="50" y1="150" x2="60" y2="150" stroke="currentColor" stroke-width="0.8"/>
        <text x="30" y="154" font-size="10" fill="currentColor" font-family="Georgia, serif">1</text>
      </g>
      <!-- Intuitionistic notation -->
      <g opacity="0.08" transform="translate(750, 80)">
        <text font-family="Georgia, serif" font-size="15" fill="currentColor">
          <tspan x="0" dy="0">A = {'{'}&lang;x, &mu;_A(x), &nu;_A(x)&rang;{'}'} | x &isin; X</tspan>
          <tspan x="0" dy="30">&mu;_A(x) + &nu;_A(x) &le; 1</tspan>
          <tspan x="0" dy="30">&pi;_A(x) = 1 &minus; &mu;_A(x) &minus; &nu;_A(x)</tspan>
        </text>
      </g>
      <!-- Hilbert algebra axioms -->
      <g opacity="0.065" transform="translate(60, 680)">
        <text font-family="Georgia, serif" font-size="13" fill="currentColor">
          <tspan x="0" dy="0">(H1): x * (y * x) = x</tspan>
          <tspan x="0" dy="22">(H2): (x * y) * ((y * z) * (x * z)) = x</tspan>
        </text>
      </g>
      <!-- Membership degree annotation -->
      <g opacity="0.07" transform="translate(820, 320)">
        <text font-family="Georgia, serif" font-size="13" fill="currentColor">
          <tspan x="0" dy="0">0 &le; &mu;(x) &le; 1</tspan>
          <tspan x="0" dy="22">0 &le; &nu;(x) &le; 1</tspan>
        </text>
      </g>
      <!-- Gaussian-ish fuzzy curve -->
      <g opacity="0.05" transform="translate(550, 350)">
        <path d="M 0 200 C 40 200, 80 20, 120 10 C 160 0, 200 0, 240 10 C 280 20, 320 200, 360 200"
              fill="none" stroke="currentColor" stroke-width="2"/>
        <text x="155" y="5" font-family="Georgia, serif" font-size="12" fill="currentColor" text-anchor="middle">&mu;(x)</text>
      </g>
      <!-- Set operation symbols -->
      <g opacity="0.06" transform="translate(400, 550)">
        <text font-family="Georgia, serif" font-size="40" fill="currentColor">&cap;</text>
        <text font-family="Georgia, serif" font-size="40" fill="currentColor" x="80">&cup;</text>
        <text font-family="Georgia, serif" font-size="40" fill="currentColor" x="165">&sube;</text>
      </g>
      <!-- Scattered math symbols -->
      <g opacity="0.05" font-family="Georgia, serif" font-size="13" fill="currentColor">
        <text x="950" y="500">&forall;x &isin; X</text>
        <text x="100" y="400">&pi;(x) &ge; 0</text>
        <text x="1050" y="680">&mu; &or; &nu;</text>
        <text x="680" y="720">ker(f) &sube; A</text>
        <text x="200" y="760">IF-subalgebra</text>
        <text x="900" y="200">&lang;&mu;, &nu;&rang;</text>
      </g>
    </svg>
  </div>

  <section class="projects-content py-24 px-6 max-w-7xl mx-auto">

  <div use:scrollReveal={{ delay: 0 }}>
    <span class="tag mb-4 inline-block">03 · Projects</span>
    <h2 class="section-title mb-16">
      Things I've<br /><span class="italic">built & led.</span>
    </h2>
  </div>

  <div class="grid md:grid-cols-2 gap-6">
    {#each projects as project, i}
      <div
        use:scrollReveal={{ delay: i * 100, y: 40 }}
        class="group relative card overflow-hidden flex flex-col
          {project.featured ? 'md:col-span-2 bg-joy-400' : 'bg-white'}"
      >
        <!-- Color-coded accent bar -->
        <div
          class="accent-bar {project.accent}"
          use:scrollReveal={{ delay: i * 100 + 200, scaleY: true }}
        ></div>

        <!-- Ghost number — vertically centered, pinned to right -->
        <span class="ghost-number font-display font-black text-[100px] leading-none text-ink/[0.05] select-none pointer-events-none group-hover:text-ink/[0.08] transition-all duration-300">
          {project.number}
        </span>

        <!-- Meta row -->
        <div class="relative z-10 flex items-start justify-between mb-5 pl-5">
          <span class="font-mono font-bold text-xs text-ink/40">{project.number}</span>
          <span class="font-mono text-xs text-ink/40">{project.period}</span>
        </div>

        <!-- Title block -->
        <div class="relative z-10 mb-1 pl-5 {project.featured ? 'md:grid md:grid-cols-2 md:gap-6 md:items-start' : ''}">
          <div>
            <h3 class="font-display font-bold {project.featured ? 'text-2xl' : 'text-xl'} text-ink leading-tight mb-1">
              {project.title}
            </h3>
            <p class="font-mono text-xs text-ink/50 leading-relaxed">{project.subtitle}</p>
            <p class="font-mono text-xs text-ink/35 mt-0.5 mb-3">{project.org}</p>

            <div class="w-full h-px bg-ink/10 mb-4"></div>
            <p class="font-body text-sm text-ink/70 leading-relaxed {project.featured ? 'mb-0' : 'mb-5 flex-1'}">{project.description}</p>
          </div>

          <!-- Skills: inline for featured (right col), below for others -->
          {#if project.featured}
            <div class="relative z-10 flex flex-wrap gap-2 md:pt-1 pt-5">
              {#each project.skills as skill}
                <span class="skill-chip font-mono text-xs rounded-full px-3 py-1 border border-ink/20 text-ink/55 bg-white/30 transition-all duration-200 group-hover:border-ink/40 group-hover:text-ink/75">
                  {skill}
                </span>
              {/each}
            </div>
          {/if}
        </div>

        <!-- Skills: below description for non-featured -->
        {#if !project.featured}
          <div class="relative z-10 flex flex-wrap gap-2 pl-5 mt-auto">
            {#each project.skills as skill}
              <span class="skill-chip font-mono text-xs rounded-full px-3 py-1 border border-ink/15 text-ink/50 transition-all duration-200 group-hover:border-ink/35 group-hover:text-ink/70">
                {skill}
              </span>
            {/each}
          </div>
        {/if}
      </div>
    {/each}
  </div>

  </section>

</div>

<style>
  /* ── Outer wrapper: full viewport width, relative for bg positioning ── */
  .projects-wrapper {
    position: relative;
    width: 100%;
  }

  /* ── Inner content: centered, same as before ── */
  .projects-content {
    position: relative;
    z-index: 1;
  }

  /* ── Fuzzy math background ── */
  .math-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
    color: var(--color-ink, #1a1a1a);
  }

  .math-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  /* ── Ghost number: vertically centered, pinned right ── */
  .ghost-number {
    position: absolute;
    top: 50%;
    right: -0.125rem;
    transform: translateY(-50%);
    font-size: 100px;
    line-height: 1;
    pointer-events: none;
    user-select: none;
  }

  /* ── Accent bar ── */
  .accent-bar {
    position: absolute;
    left: 0;
    top: 1.25rem;
    bottom: 1.25rem;
    width: 3px;
    border-radius: 0 3px 3px 0;
    transform-origin: top center;
  }

  .accent-math  { background-color: #7F77DD; }
  .accent-code  { background-color: #1D9E75; }
  .accent-arts  { background-color: #D85A30; }
  .accent-game  { background-color: #378ADD; }
  .accent-event { background-color: #D4537E; }

  :global(.accent-bar.reveal-enter) {
    transform: scaleY(0);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  :global(.accent-bar.reveal-visible) {
    transform: scaleY(1);
  }
</style>