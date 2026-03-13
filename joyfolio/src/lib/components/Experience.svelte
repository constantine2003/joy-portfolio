<script>
  const experiences = [
    {
      role: 'Student Teacher',
      company: 'Cebu Technological University',
      type: 'Internship',
      period: 'Feb 2026 – Present',
      location: 'Cebu, Philippines · On-site',
      bullets: [
        'Assisted mentor in preparing and organizing learning materials including lesson plans, presentations, and classroom resources.',
        'Supported the implementation of classroom activities and helped facilitate student participation during discussions.',
        'Monitored student progress and assisted with instructional and administrative tasks.',
      ],
      skills: ['Pedagogy', 'Curriculum Design', 'Classroom Management'],
      color: 'bg-joy-50',
      logo: '/images/CTU_logo-removebg.png',
    },
    {
      role: 'Student Intern (Finance Department)',
      company: 'AJ Financial Planning',
      type: 'Internship',
      period: 'Jan 2026 – Feb 2026',
      location: 'Melbourne, Australia · Remote',
      bullets: [
        'Gained exposure to data analysis and investments in a remote financial planning environment.',
        'Supported finance department operations and contributed to financial planning processes.',
      ],
      skills: ['Data Analysis', 'Investments', 'Financial Planning'],
      color: 'bg-white',
      logo: '/images/ajfinancial.png',
    },
    {
      role: 'Internship Trainee',
      company: 'ANSECA Development Corporation',
      type: 'Internship',
      period: 'Jul 2024 – Aug 2024',
      location: 'Minglanilla, Cebu · On-site',
      bullets: [
        'Managed the encoding of personal data to update the HRIS system.',
        'Processed payroll to maintain financial transparency and ensure accurate financial reporting.',
      ],
      skills: ['HRIS', 'Payroll Processing', 'Attention to Detail', 'Data Management'],
      color: 'bg-joy-100',
      logo: '/images/Ansecalogo.png',
    },
    {
      role: 'Peer Facilitator',
      company: 'UP Cebu Office of Student Affairs (OSA)',
      type: 'Student Leadership',
      period: 'Jan 2023 – Feb 2023',
      location: 'UP Cebu',
      bullets: [
        'Participated in regular planning meetings with OSA staff and student leaders to discuss student programs.',
        'Assisted in coordinating schedules and communication between OSA members and student groups.',
        'Supported organizational planning through collaborative discussion and idea-sharing.',
      ],
      skills: ['Facilitation', 'Communication', 'Leadership'],
      color: 'bg-joy-50',
      logo: '/images/UP_Cebu_logo.png',
    },
  ];

  // Floating particles config
  const particles = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 6,
    opacity: Math.random() * 0.25 + 0.05,
  }));

  const glowOrbs = [
    { x: 10, y: 20, size: 300, delay: 0 },
    { x: 80, y: 60, size: 400, delay: 3 },
    { x: 50, y: 85, size: 250, delay: 6 },
  ];
</script>

<section id="experience" class="py-24 bg-ink relative overflow-hidden">

  <!-- Ambient glow orbs -->
  {#each glowOrbs as orb}
    <div
      class="absolute rounded-full pointer-events-none"
      style="
        left: {orb.x}%;
        top: {orb.y}%;
        width: {orb.size}px;
        height: {orb.size}px;
        background: radial-gradient(circle, rgba(255,235,59,0.06) 0%, transparent 70%);
        transform: translate(-50%, -50%);
        animation: pulse-orb {6 + orb.delay}s ease-in-out infinite alternate;
        animation-delay: {orb.delay}s;
      "
    ></div>
  {/each}

  <!-- Floating yellow particles -->
  {#each particles as p}
    <div
      class="absolute rounded-full bg-joy-400 pointer-events-none"
      style="
        left: {p.x}%;
        top: {p.y}%;
        width: {p.size}px;
        height: {p.size}px;
        opacity: {p.opacity};
        animation: float-particle {p.duration}s ease-in-out infinite alternate;
        animation-delay: -{p.delay}s;
      "
    ></div>
  {/each}

  <!-- Subtle grid lines -->
  <div class="absolute inset-0 pointer-events-none" style="
    background-image:
      linear-gradient(rgba(255,235,59,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,235,59,0.03) 1px, transparent 1px);
    background-size: 80px 80px;
  "></div>

  <div class="max-w-7xl mx-auto px-6 relative z-10">

    <div class="flex items-end justify-between mb-16">
      <div>
        <span class="tag bg-joy-400 mb-4 inline-block">02 · Experience</span>
        <h2 class="font-display font-black text-4xl md:text-6xl text-joy-400 leading-none">
          Where I've<br/><span class="italic text-white">made impact.</span>
        </h2>
      </div>
    </div>

    <div class="space-y-6">
      {#each experiences as exp, i}
        <div
          class="exp-card group relative border-2 border-joy-600/30 hover:border-joy-400 {exp.color} rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-[6px_6px_0_#ffeb3b] overflow-hidden"
          style="animation-delay: {i * 120}ms"
        >
          <!-- Company logo watermark background -->
          {#if exp.logo}
            <div class="absolute right-0 top-0 bottom-0 w-64 pointer-events-none overflow-hidden rounded-r-2xl">
              <img
                src={exp.logo}
                alt=""
                class="absolute right-[-20px] top-1/2 -translate-y-1/2 w-56 h-56 object-contain opacity-[0.07] group-hover:opacity-[0.14] group-hover:scale-110 transition-all duration-500 select-none"
              />
            </div>
          {/if}

          <!-- Animated left accent bar -->
          <div class="absolute left-0 top-0 bottom-0 w-1 bg-ink/20 scale-y-0 group-hover:scale-y-100 group-hover:bg-ink/40 transition-all duration-500 origin-bottom rounded-l-2xl z-20"></div>

          <!-- Content -->
          <div class="relative z-10">
            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <div class="flex items-center gap-3 flex-wrap mb-1">
                  <span class="font-display font-bold text-xl text-ink group-hover:translate-x-1 transition-transform duration-300 inline-block">{exp.role}</span>
                  <span class="tag text-xs">{exp.type}</span>
                </div>
                <div class="flex items-center gap-2">
                  {#if exp.logo}
                    <img src={exp.logo} alt={exp.company} class="w-4 h-4 object-contain opacity-50" />
                  {/if}
                  <p class="font-body font-semibold text-ink/70">{exp.company}</p>
                </div>
              </div>
              <div class="text-right shrink-0">
                <p class="font-mono text-sm text-ink/60">{exp.period}</p>
                <p class="font-mono text-xs text-ink/40">{exp.location}</p>
              </div>
            </div>

            <ul class="space-y-2 mb-5">
              {#each exp.bullets as bullet}
                <li class="font-body text-sm text-ink/75 flex gap-2">
                  <span class="text-joy-600 shrink-0 mt-0.5">▸</span>
                  {bullet}
                </li>
              {/each}
            </ul>

            <div class="flex flex-wrap gap-2">
              {#each exp.skills as skill}
                <span class="font-mono text-xs border border-ink/20 text-ink/60 rounded-full px-3 py-1 group-hover:border-ink/40 group-hover:text-ink/80 transition-all duration-200">{skill}</span>
              {/each}
            </div>
          </div>

        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .exp-card {
    animation: slideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes float-particle {
    from { transform: translateY(0px) translateX(0px); }
    to   { transform: translateY(-20px) translateX(8px); }
  }

  @keyframes pulse-orb {
    from { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
    to   { opacity: 1;   transform: translate(-50%, -50%) scale(1.2); }
  }
</style>