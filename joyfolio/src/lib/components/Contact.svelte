<script>
  import { scrollReveal } from '$lib/scrollReveal.js';

  const links = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/reallyjoyarenas/',
      logo: '/images/linkedin.png',
      fallback: 'in',
    },
    {
      label: 'Email',
      href: 'mailto:arenasreallyjoy@gmail.com',
      logo: '/images/gmaillogo.png',
      fallback: '@',
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/rjoy.arenas',
      logo: '/images/facebook.png',
      fallback: 'fb',
    },
  ];
</script>

<section id="contact" class="bg-ink py-24 px-6 relative overflow-hidden">

  <div class="absolute top-0 left-0 right-0 overflow-hidden pointer-events-none select-none">
    <p class="font-display font-black text-[12vw] text-white/5 whitespace-nowrap leading-none">
      Let's Connect
    </p>
  </div>

  <div class="max-w-7xl mx-auto relative z-10">

    <div use:scrollReveal={{ delay: 0 }} class="max-w-2xl mx-auto text-center mb-16">
      <span class="tag mb-6 inline-block">06 · Contact</span>
      <h2 class="font-display font-black text-5xl md:text-7xl text-joy-400 leading-none mb-6">
        Let's work<br/><span class="italic text-white">together.</span>
      </h2>
      <p class="font-body text-white/60 text-lg">
        Whether it's about mathematics, education, finance, or just a friendly hello — I'd love to hear from you.
      </p>
    </div>

    <div class="flex flex-col items-center gap-8">

      <div use:scrollReveal={{ delay: 150, y: 24 }}>
        <a
          href="mailto:arenasreallyjoy@gmail.com"
          class="group relative inline-flex items-center gap-4 bg-joy-400 border-2 border-joy-400 text-ink font-display font-bold text-2xl md:text-3xl px-10 py-6 rounded-2xl shadow-[6px_6px_0_#ffee58] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all duration-200"
        >
          <span>Say hello →</span>
          <div class="w-8 h-8 rounded-full bg-ink flex items-center justify-center text-joy-400 text-sm group-hover:rotate-12 transition-transform">✉</div>
        </a>
      </div>

      <div use:scrollReveal={{ delay: 280, y: 20 }} class="flex gap-4">
        {#each links as link}
          <a
            href={link.href}
            title={link.label}
            class="group w-14 h-14 border-2 border-white/20 rounded-2xl flex items-center justify-center transition-all duration-200 hover:border-joy-400 hover:scale-110 hover:shadow-[3px_3px_0_#ffeb3b] overflow-hidden bg-white/5"
          >
            <img
              src={link.logo}
              alt={link.label}
              class="w-7 h-7 object-contain"
              onerror={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'flex'; }}
            />
            <span
              class="w-full h-full items-center justify-center font-mono font-bold text-sm text-white group-hover:text-ink"
              style="display:none;"
            >{link.fallback}</span>
          </a>
        {/each}
      </div>
    </div>

  </div>

  <div use:scrollReveal={{ delay: 400, y: 16 }} class="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
    <p class="font-display font-black text-joy-400 text-xl">Really Joy Arenas</p>
    <p class="font-mono text-xs text-white/30">BS Mathematics · Cum Laude · UP Cebu · 2025</p>
    <p class="font-mono text-xs text-white/20">Made with 💛 and math.</p>
  </div>
</section>