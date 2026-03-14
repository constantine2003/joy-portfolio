<script>
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>Page Not Found — JoyFolio</title>
</svelte:head>

<section class="min-h-screen bg-joy-400 flex flex-col items-center justify-center px-6 text-ink overflow-hidden relative">

  <!-- Background decoration -->
  <div class="absolute top-10 right-10 w-48 h-48 rounded-full bg-joy-300 border-2 border-ink opacity-50 animate-float"></div>
  <div class="absolute bottom-16 left-10 w-24 h-24 rounded-full bg-white border-2 border-ink opacity-60 animate-float" style="animation-delay:2s;"></div>
  <div class="absolute top-1/3 left-1/4 text-ink/10 text-8xl font-display animate-spin-slow select-none">✦</div>
  <div class="absolute bottom-1/3 right-1/4 text-ink/10 text-6xl font-display animate-spin-slow select-none" style="animation-direction:reverse;">✦</div>

  <div class="relative z-10 text-center max-w-lg">

    <!-- Big 404 -->
    <p class="font-display font-black text-[10rem] leading-none text-ink/10 select-none -mb-8">404</p>

    <!-- Math joke -->
    <div class="bg-white border-2 border-ink rounded-3xl px-8 py-6 shadow-[6px_6px_0_#1a1200] mb-8">
      <p class="font-mono text-xs text-ink/50 mb-2">error · 404</p>
      <h1 class="font-display font-black text-3xl text-ink mb-3">
        This page is <span class="italic">undefined.</span>
      </h1>
      <p class="font-body text-ink/70 text-sm leading-relaxed">
        Looks like you wandered into an empty set — ∅.<br/>
        The page you're looking for doesn't exist here.
      </p>
    </div>

    <!-- Math symbols row -->
    <p class="font-mono text-2xl text-ink/20 mb-8 tracking-widest select-none">
      ∑ ∫ π ∂ ∞ φ Δ
    </p>

    <a
      href="/"
      class="inline-flex items-center gap-2 font-mono font-bold text-sm bg-ink text-joy-400 border-2 border-ink rounded-full px-8 py-4 shadow-[4px_4px_0_rgba(26,18,0,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
    >
      ← Back to portfolio
    </a>
  </div>

</section>