// Sticky scenes (Wittig-style): hero narrative with rotating highlighted
// word, giant career story conveyor, work card deck, and the status chip.
// All stages are pinned via native position: sticky (story.css); this file
// only drives the scrubbed transforms. Desktop + story gate only.

export function initScenes(gsap: any, ScrollTrigger: any): void {
  if (window.innerWidth < 768) return;

  /* ── 1. Hero narrative beats ── */
  const hero = document.querySelector('section.hero');
  const build = hero?.querySelector('.hero-build');
  if (hero && build) {
    const words = Array.from(hero.querySelectorAll<HTMLElement>('.hb-word'));
    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        onUpdate(self: any) {
          // rotate the highlighted word across beat 2 (progress 0.34→0.84)
          const p = self.progress;
          const idx = p >= 0.34 && p < 0.84 ? Math.min(2, Math.floor(((p - 0.34) / 0.5) * 3)) : p >= 0.84 ? 2 : 0;
          words.forEach((w, i) => w.classList.toggle('is-active', i === idx));
        },
      },
    });
    tl.to('.hero-tagline, .hero-roles, .hero-card, .hero-ctas', { opacity: 0, y: -36, stagger: 0.02, duration: 0.18 }, 0.04)
      .to('.hero-meta', { opacity: 0, duration: 0.1 }, 0.04)
      .to('.hero-headline', { yPercent: -16, scale: 0.9, opacity: 0.16, duration: 0.26 }, 0.07)
      .fromTo('.hero-build', { opacity: 0, y: 34 }, { opacity: 1, y: 0, duration: 0.12 }, 0.3)
      .to('.hero-build', { opacity: 0, scale: 0.97, duration: 0.12 }, 0.86);
  }

  /* ── 2. Career story conveyor + center emphasis ── */
  const scene = document.querySelector('.career-scene');
  const track = document.getElementById('career-track');
  if (scene && track) {
    const entries = Array.from(track.querySelectorAll<HTMLElement>('.career-entry'));
    const cpDots = Array.from(document.querySelectorAll<HTMLElement>('.cp-dot-wrap'));
    const cpFill = document.getElementById('cp-fill');
    let lastActive = -1;
    const emphasize = () => {
      const cy = window.innerHeight / 2;
      let best = 0;
      let bestD = Infinity;
      entries.forEach((en, i) => {
        const r = en.getBoundingClientRect();
        const c = r.top + r.height / 2;
        const abs = Math.abs(c - cy);
        if (abs < bestD) {
          bestD = abs;
          best = i;
        }
        const d = Math.min(1, abs / (window.innerHeight * 0.5));
        en.style.opacity = String(1 - d * 0.8);
        en.style.transform = `scale(${1 - d * 0.045})`;
      });
      // fused mini-path: advance dot by dot with the centered entry
      if (best !== lastActive) {
        lastActive = best;
        cpDots.forEach((dEl, i) => {
          dEl.classList.toggle('active', i === best);
          dEl.classList.toggle('done', i < best);
        });
        if (cpFill && entries.length > 1) {
          cpFill.style.width = `${(best / (entries.length - 1)) * 100}%`;
        }
      }
    };
    gsap.fromTo(
      track,
      { y: () => window.innerHeight * 0.6 },
      {
        y: () => -(track.scrollHeight - window.innerHeight * 0.35),
        ease: 'none',
        // tween-level onUpdate: fires on every rendered frame, including
        // the scrub-smoothing tail (ScrollTrigger.onUpdate would leave
        // stale emphasis computed from mid-smoothing positions)
        onUpdate: emphasize,
        scrollTrigger: {
          trigger: scene,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      }
    );
    emphasize();
  }

  /* ── 3. Work deck: the covered card recedes slightly ── */
  if (window.innerWidth >= 800) {
    const deckCards = Array.from(
      document.querySelectorAll<HTMLElement>('.work-grid:not(.work-grid-early) .work-card')
    );
    deckCards.forEach((card, i) => {
      const next = deckCards[i + 1];
      if (!next) return;
      gsap.to(card, {
        scale: 0.965,
        transformOrigin: 'center top',
        ease: 'none',
        scrollTrigger: { trigger: next, start: 'top 90%', end: 'top 25%', scrub: true },
      });
    });
  }

  /* ── 4. Status chip appears once the hero is behind ── */
  const chip = document.getElementById('story-status');
  if (chip && hero) {
    ScrollTrigger.create({
      trigger: hero,
      start: 'bottom 70%',
      onEnter: () => chip.classList.add('on'),
      onLeaveBack: () => chip.classList.remove('on'),
    });
  }
}

/* ── Certification cards deal (all widths — mobile taps included) ──
   Cards appear face-down in threes as the section scrolls in, can be
   peeked one by one, and flip together once every batch is dealt.
   Batch state lives on the grid so the langchange re-render of the
   cards never loses it. Then the cursor-follow tilt takes over. */
export function initCertsDeal(ScrollTrigger: any): void {
  const section = document.querySelector('.certs-section');
  const grid = document.getElementById('certs-grid');
  if (!section || !grid) return;

  /* Deal queue: fast momentum scrolling can fire several triggers almost
     at once — batches are applied with a guaranteed ≥520ms rhythm so the
     three-by-three deal is always visible. */
  const DEAL_GAP = 520;
  let lastDealAt = 0;
  const applyDeal = (k: number) => {
    grid.classList.add(`dealt-${k}`);
    if (k === 4) {
      window.setTimeout(() => grid.classList.add('all-revealed'), 1000);
    }
  };
  const queueDeal = (k: number) => {
    const now = performance.now();
    const at = Math.max(now, lastDealAt + DEAL_GAP);
    lastDealAt = at;
    window.setTimeout(() => applyDeal(k), at - now);
  };

  const starts = ['top 78%', 'top 62%', 'top 46%', 'top 30%'];
  starts.forEach((start, i) => {
    ScrollTrigger.create({
      trigger: section,
      start,
      once: true,
      onEnter: () => queueDeal(i + 1),
    });
  });

  const hoverCapable = window.matchMedia('(hover: hover)').matches;

  /* Pill group focus: hovering (tapping on touch) a tag pill highlights
     every card sharing it and dims the rest. Delegated — survives the
     langchange re-render. Active once the cards are revealed. */
  let focusedTag: string | null = null;
  const applyTagFocus = (tag: string | null) => {
    focusedTag = tag;
    grid.querySelectorAll<HTMLElement>('.cert-card').forEach((card) => {
      const tags = (card.dataset.tags ?? '').split('|');
      const match = tag !== null && tags.includes(tag);
      card.classList.toggle('tag-match', match);
      card.classList.toggle('tag-dim', tag !== null && !match);
    });
    grid.querySelectorAll<HTMLElement>('.cert-tag').forEach((pill) => {
      pill.classList.toggle('pill-active', tag !== null && pill.dataset.tag === tag);
    });
  };
  if (hoverCapable) {
    grid.addEventListener('pointerover', (e) => {
      if (!grid.classList.contains('all-revealed')) return;
      const pill = (e.target as HTMLElement).closest<HTMLElement>('.cert-tag');
      if (pill?.dataset.tag) applyTagFocus(pill.dataset.tag);
    });
    grid.addEventListener('pointerout', (e) => {
      const pill = (e.target as HTMLElement).closest<HTMLElement>('.cert-tag');
      if (pill && focusedTag) applyTagFocus(null);
    });
  } else {
    grid.addEventListener('click', (e) => {
      if (!grid.classList.contains('all-revealed')) return;
      const pill = (e.target as HTMLElement).closest<HTMLElement>('.cert-tag');
      if (!pill?.dataset.tag) return;
      e.preventDefault(); // pill tap shouldn't follow the card link
      applyTagFocus(focusedTag === pill.dataset.tag ? null : pill.dataset.tag);
    });
  }

  // peek a single card before the collective reveal
  const peek = (e: Event) => {
    if (grid.classList.contains('all-revealed')) return;
    const card = (e.target as HTMLElement).closest<HTMLElement>('.cert-card');
    if (card) card.classList.add('peek');
  };
  if (hoverCapable) {
    grid.addEventListener('pointerover', peek);
  } else {
    grid.addEventListener('click', (e) => {
      if (!grid.classList.contains('all-revealed')) {
        e.preventDefault(); // don't follow cert links while face-down
        peek(e);
      }
    });
  }

  // cursor-follow 3D tilt, active after the collective reveal (delegated)
  if (hoverCapable) {
    grid.addEventListener(
      'pointermove',
      (e) => {
        if (!grid.classList.contains('all-revealed')) return;
        const card = (e.target as HTMLElement).closest<HTMLElement>('.cert-card');
        if (!card) return;
        const r = card.getBoundingClientRect();
        const rx = ((e.clientY - r.top) / r.height - 0.5) * -6;
        const ry = ((e.clientX - r.left) / r.width - 0.5) * 6;
        card.style.transform = `perspective(700px) translateY(-4px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
      },
      { passive: true }
    );
    grid.addEventListener('pointerout', (e) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>('.cert-card');
      if (card && !card.contains((e as PointerEvent).relatedTarget as Node)) card.style.transform = '';
    });
  }
}
