<script lang="ts">
  import Hero         from '$lib/components/Hero.svelte';
  import Skills       from '$lib/components/Skills.svelte';
  import Experience   from '$lib/components/Experience.svelte';
  import Projects     from '$lib/components/Projects.svelte';
  import Certificates from '$lib/components/Certificates.svelte';
  import Testimonials from '$lib/components/Testimonials.svelte';
  import Contact      from '$lib/components/Contact.svelte';
</script>

<svelte:head>
  <title>Really Joy — Mathematics Educator</title>
  <meta name="description" content="Portfolio of Really Joy, Mathematics Educator and Statistician based in the Philippines." />
</svelte:head>

<Hero />
<Skills />
<Experience />
<Projects />
<Certificates />
<Testimonials />
<Contact />