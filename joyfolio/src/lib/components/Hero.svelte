<script>
  // Floating orbs animation handled via CSS
</script>

<section id="hero" class="relative min-h-screen flex items-center overflow-hidden bg-joy-400 border-b-2 border-ink">

  <!-- Dot grid background -->
  <div class="absolute inset-0 dot-grid opacity-20"></div>

  <!-- Decorative floating circles -->
  <div class="absolute top-20 right-20 w-64 h-64 rounded-full bg-joy-300 border-2 border-ink animate-float opacity-60"></div>
  <div class="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-white border-2 border-ink animate-float opacity-80" style="animation-delay: 2s;"></div>
  <div class="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-joy-600 border-2 border-ink animate-float" style="animation-delay: 4s;"></div>

  <!-- Big rotating star -->
  <div class="absolute bottom-24 right-12 text-ink opacity-20 animate-spin-slow text-8xl select-none font-display">✦</div>
  <div class="absolute top-32 left-1/3 text-ink opacity-10 text-6xl select-none animate-spin-slow font-display" style="animation-direction: reverse;">✦</div>

  <div class="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 grid md:grid-cols-2 gap-12 items-center">

    <!-- Text side -->
    <div>
      <span class="tag mb-6 inline-block">Mathematician / Student Teacher</span>

      <h1 class="font-display font-black text-5xl md:text-7xl lg:text-8xl text-ink leading-[0.95] mb-6">
        Really<br/>
        <span class="italic text-white" style="text-shadow: 3px 3px 0 #1a1200;">Joy</span><br/>
        Arenas
      </h1>

      <p class="font-body text-lg text-ink/80 max-w-md mb-8 leading-relaxed">
        BS Mathematics · <span class="font-semibold text-ink">Cum Laude</span> 
        <!-- · UP Cebu<br/> -->
        <!-- DPE Student · Finance · Education · Data -->
      </p>

      <div class="flex flex-wrap gap-4">
        <a href="#about" class="btn-primary">Get to know me →</a>
        <a href="#contact" class="btn-outline">Let's connect</a>
      </div>
    </div>

    <!-- Photo side -->
    <div class="flex justify-center md:justify-end">
      <div class="relative">
        <!-- Frame decoration -->
        <div class="absolute -top-3 -left-3 w-full h-full rounded-3xl bg-ink"></div>

        <img src="/images/reallyjoy.png" alt="Really Joy Arenas"
             class="relative z-10 w-72 h-96 md:w-80 md:h-[480px] object-cover rounded-3xl border-2 border-ink" />

        <!-- Badge floating over photo -->
        <div class="absolute -bottom-6 -left-8 z-20 bg-white border-2 border-ink rounded-2xl px-4 py-3 shadow-[3px_3px_0_#1a1200]">
          <p class="font-mono text-xs text-ink/60">GWA</p>
          <p class="font-display font-black text-2xl text-ink">Cum Laude</p>
        </div>

        <div class="absolute -top-6 -right-8 z-20 bg-joy-500 border-2 border-ink rounded-2xl px-4 py-3 shadow-[3px_3px_0_#1a1200] rotate-3">
          <p class="font-mono text-xs text-ink/70">Degree</p>
          <p class="font-display font-bold text-sm text-ink">BS Mathematics</p>
        </div>
      </div>
    </div>

  </div>

  <!-- Scroll cue -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
    <span class="font-mono text-xs text-ink/50">scroll</span>
    <div class="w-0.5 h-8 bg-ink/30"></div>
  </div>
</section>