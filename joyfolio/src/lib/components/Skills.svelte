<script>
  const skillGroups = [
    {
      category: 'Technical Skills',
      label: 'T',
      skills: [
        { name: 'Microsoft Excel', level: 90 },
        { name: 'Python', level: 75 },
        { name: 'LaTeX', level: 80 },
        { name: 'C++', level: 65 },
        { name: 'Data Analytics', level: 80 },
        { name: 'HRIS Systems', level: 70 },
      ],
    },
    {
      category: 'Professional Skills',
      label: 'P',
      skills: [
        { name: 'Analytical Thinking', level: 95 },
        { name: 'Research', level: 90 },
        { name: 'Payroll Processing', level: 80 },
        { name: 'Financial Documentation', level: 75 },
        { name: 'Curriculum Design', level: 70 },
        { name: 'Project Management', level: 75 },
      ],
    },
    {
      category: 'Soft Skills',
      label: 'S',
      skills: [
        { name: 'Leadership', level: 90 },
        { name: 'Communication', level: 88 },
        { name: 'Facilitation', level: 85 },
        { name: 'Creative Writing', level: 78 },
        { name: 'Team Collaboration', level: 92 },
        { name: 'Attention to Detail', level: 95 },
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

<section id="skills" class="py-24 bg-joy-50 border-y-2 border-ink/10">
  <div class="max-w-7xl mx-auto px-6">

    <span class="tag mb-4 inline-block">05 · Skills & Organizations</span>
    <h2 class="section-title mb-16">
      What I bring<br/><span class="italic">to the table.</span>
    </h2>

    <!-- Skills -->
    <div class="grid md:grid-cols-3 gap-8 mb-20">
      {#each skillGroups as group, gi}
        <div class="card bg-white group overflow-hidden relative">

          <!-- Big faded letter watermark -->
          <span class="absolute -bottom-4 -right-2 font-display font-black text-[120px] leading-none text-ink/[0.04] select-none pointer-events-none group-hover:text-ink/[0.07] transition-all duration-300">
            {group.label}
          </span>

          <!-- Header -->
          <div class="relative z-10 flex items-center gap-3 mb-6 pb-4 border-b-2 border-ink/10">
            <div class="w-8 h-8 rounded-lg bg-ink flex items-center justify-center shrink-0">
              <span class="font-display font-black text-joy-400 text-sm">{gi + 1}</span>
            </div>
            <h3 class="font-display font-bold text-ink text-lg">{group.category}</h3>
          </div>

          <!-- Skills list -->
          <div class="relative z-10 space-y-4">
            {#each group.skills as skill}
              <div>
                <div class="flex justify-between mb-1.5">
                  <span class="font-body text-sm text-ink">{skill.name}</span>
                  <span class="font-mono text-xs text-ink/35">{skill.level}%</span>
                </div>
                <!-- Segmented bar -->
                <div class="flex gap-0.5">
                  {#each Array(10) as _, i}
                    <div
                      class="h-1.5 flex-1 rounded-sm transition-all duration-300"
                      class:bg-ink={i < Math.round(skill.level / 10)}
                      class:bg-joy-100={i >= Math.round(skill.level / 10)}
                    ></div>
                  {/each}
                </div>
              </div>
            {/each}
          </div>

        </div>
      {/each}
    </div>

    <!-- Organizations -->
    <div>
      <div class="flex items-center gap-4 mb-8">
        <div class="h-px flex-1 bg-ink/10"></div>
        <h3 class="font-mono text-xs uppercase tracking-widest text-ink/40 shrink-0">Organizations & Involvement</h3>
        <div class="h-px flex-1 bg-ink/10"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-3">
        {#each organizations as org, i}
          <div class="group/org relative flex items-start gap-4 bg-white border-2 border-ink rounded-2xl p-4 shadow-[3px_3px_0_#1a1200] hover:bg-joy-400 hover:shadow-[4px_4px_0_#1a1200] transition-all overflow-hidden">

            <!-- Number -->
            <span class="absolute top-3 right-4 font-display font-black text-4xl text-ink/[0.05] select-none leading-none">
              {String(i + 1).padStart(2, '0')}
            </span>

            <!-- Left accent line -->
            <div class="w-1 h-full min-h-[40px] rounded-full bg-joy-400 group-hover/org:bg-ink shrink-0 transition-colors"></div>

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