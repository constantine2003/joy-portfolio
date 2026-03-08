<script>
  import { onMount } from 'svelte';

  let menuOpen = false;
  let scrolled = false;
  let darkSection = false;

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  onMount(() => {
    const darkIds = ['experience', 'contact'];
    const lightIds = ['hero', 'about', 'projects', 'education', 'skills'];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          darkSection = darkIds.includes(entry.target.id);
        }
      });
    }, { threshold: 0.3 });

    [...darkIds, ...lightIds].forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => { scrolled = window.scrollY > 20; };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  });
</script>

<nav
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
  class:scrolled-light={scrolled && !darkSection}
  class:scrolled-dark={scrolled && darkSection}
>
  <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    <!-- Logo -->
    <a
      href="#hero"
      class="font-display font-black text-xl transition-colors"
      class:text-ink={!darkSection}
      class:text-joy-400={darkSection}
    >
      RJ<span class:text-joy-600={!darkSection} class:text-joy-500={darkSection}>.</span>
    </a>

    <!-- Desktop links -->
    <div class="hidden md:flex items-center gap-8">
      {#each links as link}
        <a
          href={link.href}
          class="font-body text-sm font-medium transition-colors relative group"
          class:text-ink={!darkSection}
          class:text-joy-200={darkSection}
        >
          {link.label}
          <span class="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-joy-500 group-hover:w-full transition-all duration-200"></span>
        </a>
      {/each}
    </div>

    <!-- Mobile hamburger -->
    <button
      class="md:hidden flex flex-col gap-1.5 p-2"
      onclick={() => menuOpen = !menuOpen}
      aria-label="Toggle menu"
    >
      <span class="block w-6 h-0.5 transition-all duration-300"
        class:bg-ink={!darkSection} class:bg-joy-400={darkSection}
        class:rotate-45={menuOpen} class:translate-y-2={menuOpen}></span>
      <span class="block w-6 h-0.5 transition-all duration-300"
        class:bg-ink={!darkSection} class:bg-joy-400={darkSection}
        class:opacity-0={menuOpen}></span>
      <span class="block w-6 h-0.5 transition-all duration-300"
        class:bg-ink={!darkSection} class:bg-joy-400={darkSection}
        class:-rotate-45={menuOpen} class:-translate-y-2={menuOpen}></span>
    </button>
  </div>

  <!-- Mobile menu -->
  {#if menuOpen}
    <div class="md:hidden border-b-2 border-ink px-6 py-6 flex flex-col gap-4"
      class:bg-joy-400={!darkSection}
      class:bg-ink={darkSection}
    >
      {#each links as link}
        <a
          href={link.href}
          class="font-display text-2xl font-bold"
          class:text-ink={!darkSection}
          class:text-joy-400={darkSection}
          onclick={() => menuOpen = false}
        >
          {link.label}
        </a>
      {/each}
    </div>
  {/if}
</nav>

<style>
  .scrolled-light {
    background: rgba(255, 253, 240, 0.92);
    backdrop-filter: blur(8px);
    border-bottom: 2px solid rgba(26, 18, 0, 0.08);
    box-shadow: 0 2px 12px rgba(26, 18, 0, 0.06);
  }

  .scrolled-dark {
    background: rgba(26, 18, 0, 0.95);
    backdrop-filter: blur(8px);
    border-bottom: 2px solid rgba(255, 235, 59, 0.15);
  }
</style>