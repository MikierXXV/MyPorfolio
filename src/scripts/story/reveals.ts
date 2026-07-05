// Declarative scroll reveals driven by data-story attributes.
// Initial hidden states live in story.css gated behind html.story.
// Only opacity / transform / clip-path are animated (CLS = 0).

import { splitWords } from './split';

export function initReveals(gsap: any, ScrollTrigger: any): void {
  const trigger = (el: Element) => ({
    trigger: el,
    start: 'top 82%',
    once: true,
  });

  /* ── Word-split titles (data-story="words") ──
     applyLang() replaces innerHTML on [data-i18n], destroying the split
     spans — so we re-split on 'langchange'. Already-revealed titles jump
     straight to their final state; pending ones re-arm their trigger. */
  const wordTweens = new WeakMap<HTMLElement, any>();

  function setupWords(el: HTMLElement): void {
    const prev = wordTweens.get(el);
    prev?.scrollTrigger?.kill();
    prev?.kill();

    const words = splitWords(el);
    if (!words.length) return;

    if (el.dataset.revealed === '1') {
      gsap.set(words, { y: 0, rotate: 0 });
      return;
    }
    const tw = gsap.to(words, {
      y: 0,
      rotate: 0,
      duration: 0.9,
      ease: 'power4.out',
      stagger: 0.09,
      scrollTrigger: {
        trigger: el,
        start: 'top 82%',
        once: true,
        onEnter: () => {
          el.dataset.revealed = '1';
        },
      },
    });
    wordTweens.set(el, tw);
  }

  const wordEls = Array.from(document.querySelectorAll<HTMLElement>('[data-story="words"]'));
  wordEls.forEach(setupWords);
  // langchange fires after applyLang() has replaced innerHTML — re-split
  // synchronously (rAF can be throttled to ~1s in occluded windows)
  window.addEventListener('langchange', () => {
    wordEls.forEach(setupWords);
  });

  /* ── Simple reveals ── */
  document.querySelectorAll<HTMLElement>('[data-story]').forEach((el) => {
    const kind = el.dataset.story;

    if (kind === 'fade-up') {
      gsap.fromTo(el,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: trigger(el) }
      );
    } else if (kind === 'fade') {
      // transform-safe reveal (e.g. .graph-stage — drag math must not see transforms)
      gsap.fromTo(el,
        { opacity: 0 },
        { opacity: 1, duration: 0.9, ease: 'power2.out', scrollTrigger: trigger(el) }
      );
    } else if (kind === 'mask-up') {
      gsap.fromTo(el,
        { clipPath: 'inset(0 0 100% 0)', y: 14 },
        { clipPath: 'inset(0 0 -5% 0)', y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: trigger(el) }
      );
    } else if (kind === 'stagger') {
      const sel = el.dataset.storyItems;
      const items = sel ? el.querySelectorAll(sel) : el.children;
      if (!items.length) return;
      gsap.fromTo(items,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08, scrollTrigger: trigger(el) }
      );
    }
  });

  // Section-head rule draw: toggle a class; the transition lives in story.css
  document.querySelectorAll<HTMLElement>('[data-story-rule]').forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => el.classList.add('rule-in'),
    });
  });
}
