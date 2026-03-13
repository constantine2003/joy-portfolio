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
      accent: 'bg-joy-400',
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
      accent: 'bg-white',
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
      accent: 'bg-white',
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
      accent: 'bg-white',
    },
    {
      title: 'WGNRR Webinar',
      subtitle: 'Philippine Adolescent Pregnancy & SRHR',
      period: 'Dec 2021 – Aug 2022',
      org: 'University of the Philippines Cebu',
      description: 'Represented the class and facilitated group discussions. Coordinated and led the final project — a webinar in collaboration with the Women\'s Global Network for Reproductive Rights (WGNRR) on adolescent pregnancy and sexual and reproductive health rights.',
      skills: ['Leadership', 'Project Management', 'Event Coordination', 'Facilitation'],
      featured: false,
      number: '05',
      accent: 'bg-white',
    },
  ];
</script>

<section id="projects" class="py-24 px-6 max-w-7xl mx-auto">

  <div use:scrollReveal={{ delay: 0 }}>
    <span class="tag mb-4 inline-block">03 · Projects</span>
    <h2 class="section-title mb-16">
      Things I've<br/><span class="italic">built & led.</span>
    </h2>
  </div>

  <div class="grid md:grid-cols-2 gap-6">
    {#each projects as project, i}
      <div
        use:scrollReveal={{ delay: i * 100, y: 40 }}
        class="group relative card overflow-hidden flex flex-col
          {project.featured ? 'md:col-span-2 bg-joy-400' : 'bg-white'}"
      >
        <span class="absolute -top-4 -right-2 font-display font-black text-[120px] leading-none text-ink/[0.05] select-none pointer-events-none group-hover:text-ink/[0.09] transition-all duration-300">
          {project.number}
        </span>

        <div class="relative z-10 flex items-start justify-between mb-5">
          <div class="flex items-center gap-3">
            <div class="w-1 h-10 rounded-full bg-ink"></div>
            <span class="font-mono font-bold text-xs text-ink/40">{project.number}</span>
          </div>
          <span class="font-mono text-xs text-ink/40">{project.period}</span>
        </div>

        <div class="relative z-10 mb-3">
          <h3 class="font-display font-bold text-xl text-ink leading-tight mb-1">{project.title}</h3>
          <p class="font-mono text-xs text-ink/50 leading-relaxed">{project.subtitle}</p>
        </div>

        <div class="w-full h-px bg-ink/10 mb-4 relative z-10"></div>
        <p class="relative z-10 font-body text-sm text-ink/70 leading-relaxed mb-5 flex-1">{project.description}</p>

        <div class="relative z-10 flex flex-wrap gap-2">
          {#each project.skills as skill}
            <span class="font-mono text-xs bg-ink text-joy-400 rounded-full px-3 py-1">{skill}</span>
          {/each}
        </div>
      </div>
    {/each}
  </div>

</section>