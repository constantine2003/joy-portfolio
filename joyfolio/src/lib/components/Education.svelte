<script>
  let openCerts = {};
  let lightboxImage = null;
  let lightboxName = '';

  const toggleCerts = (school) => {
    openCerts[school] = !openCerts[school];
  };

  const openLightbox = (image, name) => {
    lightboxImage = image;
    lightboxName = name;
  };

  const closeLightbox = () => {
    lightboxImage = null;
    lightboxName = '';
  };

  const handleKeydown = (e) => {
    if (e.key === 'Escape') closeLightbox();
  };

  const education = [
    {
      school: 'Cebu Technological University',
      degree: 'Diploma in Professional Education',
      period: 'Sep 2025 – Apr 2026',
      detail: 'Gaining competencies in teaching methodologies, curriculum development, assessment strategies, and classroom management.',
      badge: 'In Progress',
      badgeColor: 'bg-joy-400',
      icon: '/images/CTU_logo-removebg.png',
      participationCerts: [
        { name: 'Integrating Technology in Education: Practical Strategies for 21st-Century Teaching and Learning', image: '/images/certs/ctucert1.jpg' },
        { name: 'Mastering the Art of Demo Teaching for Teacher', image: '/images/certs/ctucert2.jpg' }
      ],
    },
    {
      school: 'University of the Philippines Cebu',
      degree: 'BS Mathematics, Cum Laude',
      period: 'Sep 2021 – Jul 2025',
      detail: 'Former member of UPSTAGE, volunteer at Angat Kabataan-Cebu, and marketing secretary for UPC Sciences Federation, Math Majors\' Circle, and UP Cebu Iskultura Dance Ensemble.',
      badge: 'Cum Laude',
      badgeColor: 'bg-joy-500',
      icon: '/images/UP_Cebu_logo.png',
      participationCerts: [
        { name: 'Mathematical Aspects of Signal Processing', image: '/images/certs/upcert1.jpg' },
        { name: 'Student Workshop on Statistical Sciences', image: '/images/certs/upcert2.jpg' },
        { name: 'Find Your Voice: Online Orientation on the UP Anti-Sexual Harassment Code and Laws Related to Gender-based Violence', image: '/images/certs/upcert3.jpg' },
        { name: 'OLYMPIAN PERSPECTIVES: Unveiling Math and Stat Careers', image: '/images/certs/upcert4.jpg' },
        { name: 'GRIT and HOPE: Tools to Thrive', image: '/images/certs/upcert5.jpg' },
        { name: 'Dissecting the 2022 Philippine Elections: A Voter\'s Electoral Webinar', image: '/images/certs/upcert6.jpg' },
        { name: 'Orientation and Kamustahan Session for Scholars', image: '/images/certs/upcert7.jpg' },
        { name: 'The PowerMath Week: Unraveling the World\'s Mysteries through Mathematics', image: '/images/certs/upcert8.jpg' },
      ],
    },
    {
      school: 'Minglanilla Science High School',
      degree: 'Senior High — STEM Track',
      period: 'Jun 2019 – Mar 2021',
      detail: 'Ranked 11th in the Graduating Batch of 2021. Graduated with high honors.',
      badge: 'High Honors',
      badgeColor: 'bg-joy-300',
      icon: '/images/mingla_logo.png',
      participationCerts: [],
    },
    {
      school: 'Minglanilla Science High School',
      degree: 'Junior High School',
      period: 'Jun 2015 – Mar 2019',
      detail: 'Graduated with honors and served as the Division Level ASEAN Quiz 2018 Representative.',
      badge: 'With Honors',
      badgeColor: 'bg-joy-200',
      icon: '/images/mingla_logo.png',
      participationCerts: [
        { name: 'Division Level ASEAN Quiz 2018 Representative', image: null },
      ],
    },
  ];

  const certs = [
    {
      name: 'Introduction to Data Science',
      issuer: 'Cisco Networking Academy',
      issued: 'Feb 2026',
      logo: '/images/cisco.jpg',
      fallback: 'Cisco',
    },
    {
      name: 'Intermediate Python',
      issuer: 'DataCamp',
      issued: 'Feb 2026',
      id: '#46,309,651',
      logo: '/images/datacamp.jpg',
      fallback: 'DC',
    },
    {
      name: 'Introduction to Python',
      issuer: 'DataCamp',
      issued: 'Feb 2026',
      id: '#46,276,248',
      logo: '/images/datacamp.jpg',
      fallback: 'DC',
    },
    {
      name: 'Data Analytics Fluency Pathway',
      issuer: 'IBM',
      issued: 'Feb 2026',
      id: 'PLAN-E76CA96A8C45',
      logo: '/images/ibm.png',
      fallback: 'IBM',
    },
  ];
</script>

<svelte:window onkeydown={handleKeydown} />

<!-- ── LIGHTBOX MODAL ── -->
{#if lightboxImage}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="fixed inset-0 z-[200] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-6"
    onclick={closeLightbox}
  >
    <div
      class="relative max-w-4xl w-full max-h-[90vh] bg-white border-2 border-ink rounded-2xl overflow-hidden shadow-[8px_8px_0_#ffeb3b]"
      onclick={(e) => e.stopPropagation()}
    >
      <!-- Header -->
      <div class="flex items-center justify-between px-5 py-3 border-b-2 border-ink bg-joy-400">
        <p class="font-display font-bold text-ink text-sm truncate pr-4">{lightboxName}</p>
        <button
          onclick={closeLightbox}
          class="w-8 h-8 rounded-full border-2 border-ink bg-white flex items-center justify-center font-bold text-ink hover:bg-ink hover:text-joy-400 transition-colors shrink-0"
        >✕</button>
      </div>

      <!-- Image -->
      <div class="overflow-auto max-h-[80vh] flex items-center justify-center bg-ink/5 p-4">
        <img
          src={lightboxImage}
          alt={lightboxName}
          class="max-w-full max-h-[75vh] object-contain rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
{/if}

<section id="education" class="py-24 bg-cream border-t-2 border-ink/10">
  <div class="max-w-7xl mx-auto px-6">

    <span class="tag mb-4 inline-block">04 · Education & Certs</span>
    <h2 class="section-title mb-16">
      Rooted in<br/><span class="italic">learning.</span>
    </h2>

    <div class="grid md:grid-cols-2 gap-8 mb-20">

      <!-- Education timeline -->
      <div>
        <h3 class="font-mono text-xs uppercase tracking-widest text-ink/40 mb-6">Academic Background</h3>
        <div class="relative">
          <div class="absolute left-7 top-0 bottom-0 w-0.5 bg-joy-400"></div>

          <div class="space-y-8">
            {#each education as edu}
              <div class="flex gap-6">
                {#if edu.icon.startsWith('/')}
                  <img src={edu.icon} alt={edu.school} class="relative z-10 w-14 h-14 object-contain shrink-0" />
                {:else}
                  <div class="relative z-10 w-14 h-14 rounded-2xl bg-ink border-2 border-ink flex items-center justify-center text-joy-400 text-xl font-display shrink-0">
                    {edu.icon}
                  </div>
                {/if}

                <div class="flex-1 pb-2">
                  <div class="flex items-start flex-wrap gap-2 mb-1">
                    <h4 class="font-display font-bold text-ink text-lg leading-tight">{edu.school}</h4>
                    <span class="{edu.badgeColor} border border-ink text-ink text-xs font-mono px-2 py-0.5 rounded-full">{edu.badge}</span>
                  </div>
                  <p class="font-body font-semibold text-sm text-ink/70 mb-1">{edu.degree}</p>
                  <p class="font-mono text-xs text-ink/40 mb-2">{edu.period}</p>
                  <p class="font-body text-sm text-ink/60 leading-relaxed mb-3">{edu.detail}</p>

                  <!-- Participation Certs toggle -->
                  {#if edu.participationCerts && edu.participationCerts.length > 0}
                    <button
                      onclick={() => toggleCerts(edu.school)}
                      class="flex items-center gap-2 font-mono text-xs text-ink/50 hover:text-ink transition-colors group mb-2"
                    >
                      <span class="w-5 h-5 rounded-full border border-ink/20 flex items-center justify-center group-hover:bg-joy-400 group-hover:border-ink transition-all text-xs">
                        {openCerts[edu.school] ? '−' : '+'}
                      </span>
                      {openCerts[edu.school] ? 'Hide' : 'Show'} {edu.participationCerts.length} certificate{edu.participationCerts.length > 1 ? 's' : ''} of participation
                    </button>

                    {#if openCerts[edu.school]}
                      <div class="pl-2 border-l-2 border-joy-400 space-y-2">
                        {#each edu.participationCerts as cert}
                          <div class="flex items-start justify-between gap-3 group/cert">
                            <div class="flex items-start gap-2 flex-1">
                              <span class="text-joy-600 text-xs mt-0.5 shrink-0">✦</span>
                              <p class="font-body text-xs text-ink/60 leading-relaxed">{cert.name}</p>
                            </div>

                            <!-- View image button — only if image exists -->
                            {#if cert.image}
                              <button
                                onclick={() => openLightbox(cert.image, cert.name)}
                                class="shrink-0 flex items-center gap-1 font-mono text-xs text-ink/30 hover:text-ink border border-ink/10 hover:border-ink hover:bg-joy-400 rounded-full px-2 py-0.5 transition-all"
                                title="View certificate"
                              >
                                🖼 view
                              </button>
                            {:else}
                              <span class="shrink-0 font-mono text-xs text-ink/20 px-2 py-0.5">no image yet</span>
                            {/if}
                          </div>
                        {/each}
                      </div>
                    {/if}
                  {/if}

                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>

      <!-- Certifications -->
      <div>
        <h3 class="font-mono text-xs uppercase tracking-widest text-ink/40 mb-6">Licenses & Certifications</h3>
        <div class="space-y-4">
          {#each certs as cert}
            <div class="card group hover:bg-joy-50">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 overflow-hidden">
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    class="w-10 h-10 object-contain"
                    onerror={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'flex'; }}
                  />
                  <span
                    class="w-full h-full bg-joy-400 items-center justify-center font-mono font-bold text-xs text-ink"
                    style="display:none;"
                  >{cert.fallback}</span>
                </div>
                <div>
                  <p class="font-display font-bold text-ink">{cert.name}</p>
                  <p class="font-body text-sm text-ink/60">{cert.issuer}</p>
                  <div class="flex gap-3 mt-1">
                    <span class="font-mono text-xs text-ink/40">Issued {cert.issued}</span>
                    {#if cert.id}
                      <span class="font-mono text-xs text-ink/30">{cert.id}</span>
                    {/if}
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>

    </div>
  </div>
</section>