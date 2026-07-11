// Story layer orchestrator — smooth scroll (Lenis), scroll-driven reveals
// (GSAP ScrollTrigger), ink line, background motes, progress bar.
// Fully gated: runs only when html.story was added by the inline head gate
// (JS available + prefers-reduced-motion: no-preference). Fails open.

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { initReveals } from './reveals';
import { initScenes, initCertsDeal } from './scenes';
import { initMotes } from './motes';

function init(): void {
  const root = document.documentElement;
  if (!root.classList.contains('story')) return; // reduced motion or gate absent
  const main = document.getElementById('story-main');
  if (!main) {
    root.classList.remove('story');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* ── Lenis: native-scroll smoothing (desktop wheel; touch stays native) ── */
  const lenis = new Lenis({ syncTouch: false });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time: number) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  /* ── Anchor navigation via Lenis (keeps hash + keyboard behavior) ── */
  const navEl = document.getElementById('nav');
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const hash = a.getAttribute('href') ?? '';
      if (hash.length < 2) return;
      const target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      history.pushState(null, '', hash);
      lenis.scrollTo(target as HTMLElement, {
        offset: -(navEl?.offsetHeight ?? 70),
      });
    });
  });

  /* ── Modals pause the smooth scroll (zero diffs in modal scripts):
        WorkSection uses body.modal-open; OffKeyboard sets body overflow ── */
  const syncModalState = () => {
    const locked =
      document.body.classList.contains('modal-open') ||
      document.body.style.overflow === 'hidden';
    if (locked) lenis.stop();
    else lenis.start();
  };
  new MutationObserver(syncModalState).observe(document.body, {
    attributes: true,
    attributeFilter: ['class', 'style'],
  });

  /* ── Reading progress bar ── */
  const progress = document.getElementById('story-progress');
  if (progress) {
    gsap.to(progress, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: { start: 0, end: 'max', scrub: 0.3 },
    });
  }

  /* ── Reveals, sticky scenes, cert deal, motes ── */
  initReveals(gsap, ScrollTrigger);
  initScenes(gsap, ScrollTrigger);
  initCertsDeal(ScrollTrigger); // all widths — mobile deals with taps
  initMotes(gsap, lenis);

  /* ── One refresh hook: resize, More-toggle height change, langchange
        reflow and font load all land here via the main's ResizeObserver ── */
  let rebuildTimer: number;
  new ResizeObserver(() => {
    clearTimeout(rebuildTimer);
    rebuildTimer = window.setTimeout(() => ScrollTrigger.refresh(), 250);
  }).observe(main);

  window.addEventListener('load', () => ScrollTrigger.refresh());
  (document as any).fonts?.ready?.then(() => ScrollTrigger.refresh());
}

try {
  init();
} catch (err) {
  // Fail open: never leave content hidden
  document.documentElement.classList.remove('story');
  console.error('[story] init failed, revealing content', err);
}
