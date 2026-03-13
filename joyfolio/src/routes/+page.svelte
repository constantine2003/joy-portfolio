<script>
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Marquee from '$lib/components/Marquee.svelte';
  import About from '$lib/components/About.svelte';
  import Experience from '$lib/components/Experience.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Education from '$lib/components/Education.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import Contact from '$lib/components/Contact.svelte';

  onMount(async () => {
    const Lenis = (await import('@studio-freight/lenis')).default;

    const lenis = new Lenis({
      duration: 1.4,         // how long a scroll gesture takes — higher = slower/cinematic
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // exponential ease out
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  });
</script>

<svelte:head>
  <title>Really Joy Arenas · Portfolio</title>
</svelte:head>

<Navbar />
<Hero />
<Marquee />
<About />
<Experience />
<Projects />
<Education />
<Skills />
<Contact />