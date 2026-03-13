<script>
  import { scrollReveal } from '$lib/scrollReveal.js';
  import { onMount } from 'svelte';

  const experiences = [
    {
      role: 'Student Teacher',
      company: 'Cebu Technological University',
      type: 'Internship',
      period: 'Feb 2026 – Present',
      location: 'Cebu, Philippines · On-site',
      bullets: [
        'Assisted mentor in preparing and organizing learning materials including lesson plans, presentations, and classroom resources.',
        'Supported the implementation of classroom activities and helped facilitate student participation during discussions.',
        'Monitored student progress and assisted with instructional and administrative tasks.',
      ],
      skills: ['Pedagogy', 'Curriculum Design', 'Classroom Management'],
      color: 'bg-joy-50',
      logo: '/images/CTU_logo-removebg.png',
    },
    {
      role: 'Student Intern (Finance Department)',
      company: 'AJ Financial Planning',
      type: 'Internship',
      period: 'Jan 2026 – Feb 2026',
      location: 'Melbourne, Australia · Remote',
      bullets: [
        'Gained exposure to data analysis and investments in a remote financial planning environment.',
        'Supported finance department operations and contributed to financial planning processes.',
      ],
      skills: ['Data Analysis', 'Investments', 'Financial Planning'],
      color: 'bg-white',
      logo: '/images/ajfinancial.png',
    },
    {
      role: 'Internship Trainee',
      company: 'ANSECA Development Corporation',
      type: 'Internship',
      period: 'Jul 2024 – Aug 2024',
      location: 'Minglanilla, Cebu · On-site',
      bullets: [
        'Managed the encoding of personal data to update the HRIS system.',
        'Processed payroll to maintain financial transparency and ensure accurate financial reporting.',
      ],
      skills: ['HRIS', 'Payroll Processing', 'Attention to Detail', 'Data Management'],
      color: 'bg-joy-100',
      logo: '/images/Ansecalogo.png',
    },
    {
      role: 'Peer Facilitator',
      company: 'UP Cebu Office of Student Affairs (OSA)',
      type: 'Student Leadership',
      period: 'Jan 2023 – Feb 2023',
      location: 'UP Cebu',
      bullets: [
        'Participated in regular planning meetings with OSA staff and student leaders to discuss student programs.',
        'Assisted in coordinating schedules and communication between OSA members and student groups.',
        'Supported organizational planning through collaborative discussion and idea-sharing.',
      ],
      skills: ['Facilitation', 'Communication', 'Leadership'],
      color: 'bg-joy-50',
      logo: '/images/UP_Cebu_logo.png',
    },
  ];

  const SYMBOLS = ['∑','∫','π','∂','√','∞','θ','Δ','∇','λ','≈','φ','σ','μ','Ω','α','β','∏','≠','γ','$','%','¥','€','∀','∈','⊕'];

  // ── Moved outside onMount to fix Svelte 5 perf_avoid_nested_class warning ──

  let _ctx, _W, _H, _bhX, _bhY, _psX, _psY;

  // ════════════════════════════════
  // BLACK HOLE PARTICLE CLASS
  // ════════════════════════════════
  class BHParticle {
    constructor() { this.reset(true); }
    reset(cold = false) {
      this.spewing = Math.random() < 0.45;
      const angle = Math.random() * Math.PI * 2;
      const dist  = this.spewing ? 10 + Math.random() * 25 : 160 + Math.random() * 220;
      this.angle        = angle;
      this.dist         = cold ? 20 + Math.random() * 280 : dist;
      this.x            = _bhX + Math.cos(this.angle) * this.dist;
      this.y            = _bhY + Math.sin(this.angle) * this.dist;
      this.symbol       = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
      this.size         = 9 + Math.random() * 18;
      this.opacity      = this.spewing ? 0.65 : 0.04 + Math.random() * 0.2;
      this.speed        = this.spewing ? 0.9 + Math.random() * 1.1 : 0.012 + Math.random() * 0.022;
      this.angularSpeed = this.spewing
        ? (Math.random() - 0.5) * 0.05
        : (Math.random() < 0.5 ? 1 : -1) * (0.01 + Math.random() * 0.02);
    }
    update() {
      if (this.spewing) {
        this.dist  += this.speed * 2.0;
        this.angle += this.angularSpeed;
        this.x = _bhX + Math.cos(this.angle) * this.dist;
        this.y = _bhY + Math.sin(this.angle) * this.dist;
        this.opacity -= 0.007;
        if (this.opacity <= 0 || this.dist > 450) this.reset();
      } else {
        this.dist  -= this.speed * this.dist * 0.003;
        this.angle += this.angularSpeed * (70 / Math.max(this.dist, 5));
        this.x = _bhX + Math.cos(this.angle) * this.dist;
        this.y = _bhY + Math.sin(this.angle) * this.dist;
        const prox = Math.max(0, this.dist - 16) / 180;
        this.opacity = Math.min(0.28, prox * 0.32);
        if (this.dist < 16) this.reset();
      }
    }
    draw() {
      _ctx.save();
      _ctx.globalAlpha    = Math.max(0, this.opacity);
      _ctx.font           = `bold ${this.size}px serif`;
      _ctx.fillStyle      = '#ffeb3b';
      _ctx.textAlign      = 'center';
      _ctx.textBaseline   = 'middle';
      _ctx.translate(this.x, this.y);
      _ctx.rotate(this.angle * 0.4);
      _ctx.fillText(this.symbol, 0, 0);
      _ctx.restore();
    }
  }

  // ════════════════════════════════
  // PULSAR JET PARTICLE CLASS
  // (commented out — uncomment to re-enable pulsar on left side)
  // ════════════════════════════════
  /*
  class JetParticle {
    constructor() { this.reset(); }
    reset() {
      this.dir      = Math.random() < 0.5 ? -1 : 1;
      this.x        = _psX + (Math.random() - 0.5) * 8;
      this.y        = _psY;
      this.vy       = this.dir * (2.2 + Math.random() * 2.8);
      this.vx       = (Math.random() - 0.5) * 0.6;
      this.symbol   = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
      this.size     = 8 + Math.random() * 16;
      this.opacity  = 0.7 + Math.random() * 0.3;
      this.life     = 0;
      this.maxLife  = 60 + Math.random() * 80;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.08;
    }
    update() {
      this.x  += this.vx;
      this.y  += this.vy;
      this.vy += this.dir * 0.04;
      this.vx *= 0.98;
      this.life++;
      this.rotation += this.rotSpeed;
      const t = this.life / this.maxLife;
      this.opacity = t < 0.15 ? t / 0.15 : 1 - ((t - 0.15) / 0.85);
      if (this.life >= this.maxLife || this.y < -60 || this.y > _H + 60) this.reset();
    }
    draw() {
      _ctx.save();
      _ctx.globalAlpha  = Math.max(0, this.opacity * 0.75);
      _ctx.font         = `bold ${this.size}px serif`;
      _ctx.fillStyle    = '#ffeb3b';
      _ctx.textAlign    = 'center';
      _ctx.textBaseline = 'middle';
      _ctx.translate(this.x, this.y);
      _ctx.rotate(this.rotation);
      _ctx.fillText(this.symbol, 0, 0);
      _ctx.restore();
    }
  }
  */

  let canvas;

  onMount(() => {
    _ctx = canvas.getContext('2d');

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      _W = canvas.width  = rect.width  || canvas.parentElement.offsetWidth  || window.innerWidth;
      _H = canvas.height = rect.height || canvas.parentElement.offsetHeight || 700;
      _bhX = _W * 0.92;
      _bhY = _H * 0.50;
      _psX = _W * 0.08; // pulsar x (unused while commented)
      _psY = _H * 0.50; // pulsar y (unused while commented)
    };
    window.addEventListener('resize', resize);

    let bhParticles = [];
    let bhPulse = 0;

    // Uncomment below to re-enable pulsar particles:
    // let jetParticles = [];
    // let psRotation = 0;

    const drawBlackHole = () => {
      bhPulse += 0.022;
      const diskR = 52 + Math.sin(bhPulse) * 3.5;

      // accretion disk
      for (let r = diskR + 70; r > diskR; r -= 2) {
        const a = (r - diskR) / 70;
        _ctx.beginPath();
        _ctx.ellipse(_bhX, _bhY, r, r * 0.26, -0.3, 0, Math.PI * 2);
        _ctx.strokeStyle = `rgba(255,200,30,${(1 - a) * 0.07})`;
        _ctx.lineWidth = 2;
        _ctx.stroke();
      }
      // outer halo
      const bhHalo = _ctx.createRadialGradient(_bhX, _bhY, diskR * 0.5, _bhX, _bhY, diskR * 2.5);
      bhHalo.addColorStop(0,   'rgba(255,200,30,0.09)');
      bhHalo.addColorStop(0.5, 'rgba(255,180,0,0.03)');
      bhHalo.addColorStop(1,   'transparent');
      _ctx.beginPath();
      _ctx.arc(_bhX, _bhY, diskR * 2.5, 0, Math.PI * 2);
      _ctx.fillStyle = bhHalo;
      _ctx.fill();
      // event horizon
      const eh = _ctx.createRadialGradient(_bhX, _bhY, 0, _bhX, _bhY, diskR * 0.88);
      eh.addColorStop(0, '#000'); eh.addColorStop(0.75, '#000'); eh.addColorStop(1, 'rgba(0,0,0,0)');
      _ctx.beginPath();
      _ctx.arc(_bhX, _bhY, diskR * 0.88, 0, Math.PI * 2);
      _ctx.fillStyle = eh; _ctx.fill();
      // bright ring
      _ctx.beginPath();
      _ctx.arc(_bhX, _bhY, diskR * 0.86, 0, Math.PI * 2);
      _ctx.strokeStyle = `rgba(255,220,60,${0.16 + Math.sin(bhPulse * 1.4) * 0.06})`;
      _ctx.lineWidth = 1.5; _ctx.stroke();

      bhParticles.forEach(p => { p.update(); p.draw(); });
    };

    /*
    // ── PULSAR DRAW FUNCTION — uncomment to re-enable ──
    const drawPulsar = () => {
      psRotation += 0.018;
      const psR = 14;
      const pulseBright = 0.5 + Math.abs(Math.sin(psRotation * 2.5)) * 0.5;

      for (let i = 0; i < 4; i++) {
        const a = psRotation + (i * Math.PI / 2);
        _ctx.beginPath();
        _ctx.ellipse(_psX, _psY, psR * 2.5, psR * 0.6, a, 0, Math.PI * 2);
        _ctx.strokeStyle = `rgba(255,235,59,${0.06 + pulseBright * 0.06})`;
        _ctx.lineWidth = 1;
        _ctx.stroke();
      }
      const northGrad = _ctx.createLinearGradient(_psX, _psY, _psX, 0);
      northGrad.addColorStop(0,   `rgba(255,235,59,${0.18 * pulseBright})`);
      northGrad.addColorStop(0.4, `rgba(255,235,59,${0.06 * pulseBright})`);
      northGrad.addColorStop(1,   'transparent');
      _ctx.beginPath();
      _ctx.moveTo(_psX - 6, _psY); _ctx.lineTo(_psX + 6, _psY);
      _ctx.lineTo(_psX + 2, 0);    _ctx.lineTo(_psX - 2, 0);
      _ctx.closePath(); _ctx.fillStyle = northGrad; _ctx.fill();

      const southGrad = _ctx.createLinearGradient(_psX, _psY, _psX, _H);
      southGrad.addColorStop(0,   `rgba(255,235,59,${0.18 * pulseBright})`);
      southGrad.addColorStop(0.4, `rgba(255,235,59,${0.06 * pulseBright})`);
      southGrad.addColorStop(1,   'transparent');
      _ctx.beginPath();
      _ctx.moveTo(_psX - 6, _psY); _ctx.lineTo(_psX + 6, _psY);
      _ctx.lineTo(_psX + 2, _H);   _ctx.lineTo(_psX - 2, _H);
      _ctx.closePath(); _ctx.fillStyle = southGrad; _ctx.fill();

      const psGlow = _ctx.createRadialGradient(_psX, _psY, 0, _psX, _psY, psR * 3);
      psGlow.addColorStop(0,   `rgba(255,255,200,${0.9 * pulseBright})`);
      psGlow.addColorStop(0.3, `rgba(255,235,59,${0.4 * pulseBright})`);
      psGlow.addColorStop(0.7, `rgba(255,200,0,${0.1 * pulseBright})`);
      psGlow.addColorStop(1,   'transparent');
      _ctx.beginPath();
      _ctx.arc(_psX, _psY, psR * 3, 0, Math.PI * 2);
      _ctx.fillStyle = psGlow; _ctx.fill();

      _ctx.beginPath();
      _ctx.arc(_psX, _psY, psR * 0.5, 0, Math.PI * 2);
      _ctx.fillStyle = `rgba(255,255,230,${0.85 * pulseBright})`;
      _ctx.fill();

      jetParticles.forEach(p => { p.update(); p.draw(); });
    };
    */

    let raf;
    const loop = () => {
      _ctx.clearRect(0, 0, _W, _H);
      if (_W && _H) {
        drawBlackHole();
        // drawPulsar(); // ← uncomment to re-enable pulsar
      }
      raf = requestAnimationFrame(loop);
    };

    setTimeout(() => {
      resize();
      bhParticles = Array.from({ length: 50 }, () => new BHParticle());
      // Uncomment below to re-enable pulsar particles:
      // jetParticles = Array.from({ length: 35 }, () => {
      //   const p = new JetParticle();
      //   p.y = _psY + p.dir * Math.random() * _H * 0.5;
      //   p.life = Math.floor(Math.random() * p.maxLife);
      //   return p;
      // });
      raf = requestAnimationFrame(loop);
    }, 80);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  });
</script>

<section id="experience" class="py-24 bg-ink relative overflow-hidden">

  <canvas
    bind:this={canvas}
    class="absolute inset-0 pointer-events-none"
    style="display:block; width:100%; height:100%;"
  ></canvas>

  <div class="max-w-7xl mx-auto px-6 relative z-10">

    <div use:scrollReveal={{ delay: 0 }} class="mb-16">
      <span class="tag bg-joy-400 mb-4 inline-block">02 · Experience</span>
      <h2 class="font-display font-black text-4xl md:text-6xl text-joy-400 leading-none">
        Where I've<br/><span class="italic text-white">made impact.</span>
      </h2>
    </div>

    <div class="space-y-6">
      {#each experiences as exp, i}
        <div
          use:scrollReveal={{ delay: i * 120, y: 40 }}
          class="group relative border-2 border-joy-600/30 hover:border-joy-400 {exp.color} rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-[6px_6px_0_#ffeb3b] overflow-hidden"
        >
          {#if exp.logo}
            <div class="absolute right-0 top-0 bottom-0 w-64 pointer-events-none overflow-hidden rounded-r-2xl">
              <img
                src={exp.logo}
                alt=""
                class="absolute right-[-20px] top-1/2 -translate-y-1/2 w-56 h-56 object-contain opacity-[0.07] group-hover:opacity-[0.14] group-hover:scale-110 transition-all duration-500 select-none"
              />
            </div>
          {/if}
          <div class="absolute left-0 top-0 bottom-0 w-1 bg-ink/20 scale-y-0 group-hover:scale-y-100 group-hover:bg-ink/40 transition-all duration-500 origin-bottom rounded-l-2xl z-20"></div>
          <div class="relative z-10">
            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <div class="flex items-center gap-3 flex-wrap mb-1">
                  <span class="font-display font-bold text-xl text-ink group-hover:translate-x-1 transition-transform duration-300 inline-block">{exp.role}</span>
                  <span class="tag text-xs">{exp.type}</span>
                </div>
                <div class="flex items-center gap-2">
                  {#if exp.logo}
                    <img src={exp.logo} alt={exp.company} class="w-4 h-4 object-contain opacity-50" />
                  {/if}
                  <p class="font-body font-semibold text-ink/70">{exp.company}</p>
                </div>
              </div>
              <div class="text-right shrink-0">
                <p class="font-mono text-sm text-ink/60">{exp.period}</p>
                <p class="font-mono text-xs text-ink/40">{exp.location}</p>
              </div>
            </div>
            <ul class="space-y-2 mb-5">
              {#each exp.bullets as bullet}
                <li class="font-body text-sm text-ink/75 flex gap-2">
                  <span class="text-joy-600 shrink-0 mt-0.5">▸</span>
                  {bullet}
                </li>
              {/each}
            </ul>
            <div class="flex flex-wrap gap-2">
              {#each exp.skills as skill}
                <span class="font-mono text-xs border border-ink/20 text-ink/60 rounded-full px-3 py-1 group-hover:border-ink/40 group-hover:text-ink/80 transition-all duration-200">{skill}</span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>