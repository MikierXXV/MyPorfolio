// Ink line — a burgundy stroke drawn by scroll, connecting the chapter
// heads down the left gutter, ending in an "MG" signature at Contact.
// Path geometry recomputed on demand (resize / height changes).

interface InkController {
  rebuild: () => void;
}

export function initInkLine(gsap: any, ScrollTrigger: any): InkController | null {
  const svg = document.getElementById('ink-line');
  const path = document.getElementById('ink-path') as unknown as SVGPathElement | null;
  const sig = document.getElementById('ink-signature') as unknown as SVGPathElement | null;
  const main = document.getElementById('story-main');
  if (!svg || !path || !sig || !main) return null;
  if (window.innerWidth < 768) return null; // stays display:none on mobile

  svg.classList.add('ink-on');

  let drawTween: any = null;
  let sigTween: any = null;

  function docY(rect: DOMRect, mainTop: number): number {
    return rect.top + window.scrollY - mainTop;
  }

  function build(): void {
    const mainTop = main!.getBoundingClientRect().top + window.scrollY;
    const W = main!.clientWidth;
    const H = main!.scrollHeight;
    svg!.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg!.setAttribute('width', String(W));
    svg!.setAttribute('height', String(H));

    // Anchor points: each chapter's first section head, in document order
    const sections = Array.from(main!.querySelectorAll('section'));
    const anchors: { x: number; y: number }[] = [];
    sections.forEach((s) => {
      const head = s.querySelector('.section-tag, .section-head');
      if (!head) return;
      const r = head.getBoundingClientRect();
      anchors.push({
        x: Math.max(14, r.left - 26),
        y: docY(r, mainTop) + r.height / 2,
      });
    });
    if (anchors.length < 2) return;

    // Start just below the hero CTAs, near the left margin
    const hero = main!.querySelector('.hero');
    const heroRect = hero?.getBoundingClientRect();
    const start = {
      x: anchors[0].x + 34,
      y: heroRect ? docY(heroRect, mainTop) + heroRect.height - 40 : anchors[0].y - 300,
    };

    let d = `M ${start.x.toFixed(1)} ${start.y.toFixed(1)}`;
    let prev = start;
    anchors.forEach((p, i) => {
      if (p.y <= prev.y) return; // safety: monotonic downward
      const midY = (prev.y + p.y) / 2;
      const bulge = (i % 2 === 0 ? 1 : -1) * Math.min(70, W * 0.04);
      d += ` C ${(prev.x + bulge).toFixed(1)} ${midY.toFixed(1)}, ${(p.x - bulge).toFixed(1)} ${midY.toFixed(1)}, ${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
      prev = p;
    });
    path!.setAttribute('d', d);

    const L = path!.getTotalLength();
    path!.style.strokeDasharray = `${L}`;
    path!.style.strokeDashoffset = `${L}`;

    drawTween?.scrollTrigger?.kill();
    drawTween?.kill();
    drawTween = gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: main,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.6,
      },
    });

    // ── Signature "MG" flourish beside the Contact headline ──
    const headline = main!.querySelector('.contact-headline');
    if (headline) {
      const hr = headline.getBoundingClientRect();
      const sx = Math.min(W - 190, hr.left + hr.width + 60);
      const sy = docY(hr, mainTop) + hr.height * 0.45;
      // M: two arches · G: open loop with a crossbar tail
      sig!.setAttribute(
        'd',
        `M ${sx.toFixed(1)} ${sy.toFixed(1)} ` +
          'c 2 -14 8 -30 12 -32 c 4 -2 6 12 8 26 c 2 -14 6 -28 10 -30 c 4 -2 7 14 8 34 ' +
          'm 28 -22 c -12 -6 -26 2 -26 14 c 0 12 14 18 24 12 c 6 -4 8 -12 4 -14 l -10 2'
      );
      const SL = sig!.getTotalLength();
      sig!.style.strokeDasharray = `${SL}`;
      sig!.style.strokeDashoffset = `${SL}`;

      sigTween?.scrollTrigger?.kill();
      sigTween?.kill();
      sigTween = gsap.to(sig, {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 70%',
          once: true,
        },
      });
    }
  }

  build();

  return {
    rebuild: () => {
      if (window.innerWidth < 768) {
        svg.classList.remove('ink-on');
        return;
      }
      svg.classList.add('ink-on');
      build();
    },
  };
}
