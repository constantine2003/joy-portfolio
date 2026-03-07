<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import { profile } from '$lib/data/portfolio';

  let cursor: HTMLElement;
  let cursorRing: HTMLElement;
  let mx = 0, my = 0, rx = 0, ry = 0;

  const navLinks = [
    { href: '#about',       label: 'About' },
    { href: '#skills',      label: 'Skills' },
    { href: '#experience',  label: 'Experience' },
    { href: '#projects',    label: 'Projects' },
    { href: '#certificates',label: 'Certificates' },
    { href: '#contact',     label: 'Contact' },
  ];

  onMount(() => {
    document.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      cursor.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;
    });

    const animateRing = () => {
      rx += (mx - rx - 18) * 0.12;
      ry += (my - ry - 18) * 0.12;
      cursorRing.style.transform = `translate(${rx}px, ${ry}px)`;
      requestAnimationFrame(animateRing);
    };
    animateRing();

    document.querySelectorAll('a, button, input, textarea').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursorRing.style.opacity = '0.2';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.width = '12px';
        cursor.style.height = '12px';
        cursorRing.style.opacity = '0.6';
      });
    });

    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 70);
        }
      });
    }, { threshold: 0.08 });
    reveals.forEach(el => observer.observe(el));
  });
</script>

<div class="cursor" bind:this={cursor}></div>
<div class="cursor-ring" bind:this={cursorRing}></div>

<nav>
  <a class="nav-logo" href="/">Really <span>Joy</span></a>
  <ul class="nav-links">
    {#each navLinks as link}
      <li><a href={link.href}>{link.label}</a></li>
    {/each}
  </ul>
</nav>

<slot />

<footer>
  <div class="footer-logo">Really <span>Joy</span></div>
  <div class="footer-copy">© {new Date().getFullYear()} Really Joy · Mathematics Educator</div>
  <div class="footer-right">
    <a href={`mailto:${profile.email}`}>Email</a>
    <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
  </div>
</footer>

<style>
  nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.4rem 4rem;
    background: rgba(255,254,247,0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(26,18,7,0.06);
  }
  .nav-logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--ink);
    text-decoration: none;
  }
  .nav-logo span { color: var(--joy-dark); font-style: italic; }
  .nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
  }
  .nav-links a {
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--warm-gray);
    text-decoration: none;
    transition: color 0.2s;
  }
  .nav-links a:hover { color: var(--ink); }

  footer {
    background: var(--ink);
    padding: 2rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  .footer-logo {
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    font-weight: 700;
    color: var(--cream);
  }
  .footer-logo span { color: var(--joy); font-style: italic; }
  .footer-copy {
    font-size: 0.72rem;
    color: rgba(253,250,240,0.3);
    font-family: 'DM Mono', monospace;
  }
  .footer-right { display: flex; gap: 1.5rem; }
  .footer-right a {
    font-size: 0.78rem;
    color: rgba(253,250,240,0.4);
    text-decoration: none;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-family: 'DM Mono', monospace;
    transition: color 0.2s;
  }
  .footer-right a:hover { color: var(--joy); }

  @media (max-width: 900px) {
    nav { padding: 1.2rem 1.5rem; }
    .nav-links { gap: 1rem; }
    .nav-links a { font-size: 0.7rem; }
    footer { padding: 1.5rem; flex-direction: column; text-align: center; }
  }
</style>