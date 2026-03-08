<script>
  const words = [
    'Mathematics ✦',
    'Cum Laude ✦',
    'Finance ✦',
    'Education ✦',
    'Data Analysis ✦',
    'UP Cebu ✦',
    'Leadership ✦',
    'Python ✦',
    'Pedagogy ✦',
    'Research ✦',
  ];

  // Double for seamless loop
  const doubled = [...words, ...words];
</script>

<div class="bg-ink border-y-2 border-ink overflow-hidden py-3 -rotate-1 scale-105">
  <div class="marquee-track">
    {#each doubled as word}
      <span class="font-display font-black text-joy-400 text-lg whitespace-nowrap px-6">{word}</span>
    {/each}
  </div>
</div>