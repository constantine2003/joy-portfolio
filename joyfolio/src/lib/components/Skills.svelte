<script>
  import { scrollReveal } from '$lib/scrollReveal.js';

  const skillGroups = [
    {
      category: 'Technical',
      label: 'T',
      accent: 'bg-ink',
      textAccent: 'text-joy-400',
      skills: [
        'Microsoft Excel',
        'Python',
        'LaTeX',
        'C++',
        'Data Analytics',
        'HRIS Systems',
      ],
    },
    {
      category: 'Professional',
      label: 'P',
      accent: 'bg-joy-400',
      textAccent: 'text-ink',
      skills: [
        'Analytical Thinking',
        'Research',
        'Payroll Processing',
        'Financial Documentation',
        'Curriculum Design',
        'Project Management',
      ],
    },
    {
      category: 'Soft Skills',
      label: 'S',
      accent: 'bg-white',
      textAccent: 'text-ink',
      skills: [
        'Leadership',
        'Communication',
        'Facilitation',
        'Creative Writing',
        'Team Collaboration',
        'Attention to Detail',
      ],
    },
  ];

  const organizations = [
    { name: 'UP Cebu Iskultura Dance Ensemble', role: 'Treasurer & Member', period: 'Jan 2022 – Jun 2025' },
    { name: "UP Cebu Math Majors' Circle", role: 'Marketing Secretary & Member', period: 'Jan 2021 – Jun 2025' },
    { name: 'UP Cebu Sciences Federation', role: 'Secretary for Logistics & Member', period: '2021 – 2025' },
    { name: 'DOST sa UP Cebu', role: 'Member', period: 'Nov 2023 – Jul 2025' },
    { name: "UP Students' Theater Arts Guild (UPSTAGE)", role: 'Member', period: '2023 – 2024' },
    { name: 'Angat Kabataan Cebu', role: 'Volunteer', period: 'Jan 2022 – Jun 2023' },
    { name: 'MSHS Youth for Environment (YES-O)', role: 'Peace Officer', period: '2020 – 2021' },
  ];
</script>

<section id="skills" class="py-24 bg-joy-50 border-y-2 border-ink/10 overflow-hidden">
  <div class="max-w-7xl mx-auto px-6">

    <div use:scrollReveal={{ delay: 0 }}>
      <span class="tag mb-4 inline-block">05 · Skills & Organizations</span>
      <h2 class="section-title mb-16">
        What I bring<br/><span class="italic">to the table.</span>
      </h2>
    </div>

    <!-- Skill cards — tag cloud style -->
    <div class="grid md:grid-cols-3 gap-6 mb-20">
      {#each skillGroups as group, gi}
        <div
          use:scrollReveal={{ delay: gi * 130, y: 40 }}
          class="group relative card bg-white overflow-hidden"
        >
          <!-- Faded watermark letter -->
          <span class="absolute -bottom-6 -right-3 font-display font-black text-[130px] leading-none text-ink/[0.04] select-none pointer-events-none group-hover:text-ink/[0.07] transition-all duration-500">
            {group.label}
          </span>

          <!-- Header -->
          <div class="relative z-10 flex items-center gap-3 mb-6 pb-4 border-b-2 border-ink/10">
            <div class="w-8 h-8 rounded-lg {group.accent} border-2 border-ink flex items-center justify-center shrink-0 shadow-[2px_2px_0_#1a1200]">
              <span class="font-display font-black {group.textAccent} text-sm">{gi + 1}</span>
            </div>
            <h3 class="font-display font-bold text-ink text-lg">{group.category}</h3>
          </div>

          <!-- Tag cloud -->
          <div class="relative z-10 flex flex-wrap gap-2">
            {#each group.skills as skill, si}
              <span
                use:scrollReveal={{ delay: gi * 130 + 150 + si * 55, y: 12 }}
                class="skill-tag font-body text-sm text-ink border-2 border-ink/20 rounded-full px-4 py-1.5
                  hover:bg-ink hover:text-joy-400 hover:border-ink hover:shadow-[2px_2px_0_#1a1200]
                  transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            {/each}
          </div>
        </div>
      {/each}
    </div>

    <!-- Organizations -->
    <div>
      <div use:scrollReveal={{ delay: 0 }} class="flex items-center gap-4 mb-8">
        <div class="h-px flex-1 bg-ink/10"></div>
        <h3 class="font-mono text-xs uppercase tracking-widest text-ink/40 shrink-0">Organizations & Involvement</h3>
        <div class="h-px flex-1 bg-ink/10"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-3">
        {#each organizations as org, i}
          <div
            use:scrollReveal={{ delay: i * 80, y: 24 }}
            class="group/org relative flex items-start gap-4 bg-white border-2 border-ink rounded-2xl p-4 shadow-[3px_3px_0_#1a1200] hover:bg-joy-400 hover:shadow-[4px_4px_0_#1a1200] transition-all overflow-hidden"
          >
            <span class="absolute top-3 right-4 font-display font-black text-4xl text-ink/[0.05] select-none leading-none">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div class="w-1 h-full min-h-[40px] rounded-full bg-joy-400 group-hover/org:bg-ink shrink-0 transition-colors duration-300"></div>
            <div class="relative z-10">
              <p class="font-display font-semibold text-sm text-ink leading-snug">{org.name}</p>
              <p class="font-mono text-xs text-ink/50 mt-1">{org.role}</p>
              <p class="font-mono text-xs text-ink/35">{org.period}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>

  </div>
</section>