// Ink line — a burgundy stroke drawn by scroll, meandering through the
// empty gaps between chapters, with an ink-bleed halo, a travelling pen
// tip, roman-numeral marginalia per chapter, small manuscript glyphs,
// and an "MG" signature at Contact.

interface InkController {
  rebuild: () => void;
}

/* Roman numeral strokes, local coords, ~22px tall. v() = slightly curved
   vertical for a hand-drawn feel. */
const v = (x: number) => `M${x} 0 C${x + 0.7} 7 ${x - 0.7} 15 ${x} 22`;
const NUMERALS: string[][] = [
  [v(0)],                                              // I
  [v(0), v(8)],                                        // II
  [v(0), v(8), v(16)],                                 // III
  [v(0), 'M8 0 L13.5 22', 'M19 0 L13.5 22'],           // IV
  ['M0 0 L5.5 22', 'M11 0 L5.5 22'],                   // V
  ['M0 0 L5.5 22', 'M11 0 L5.5 22', v(19)],            // VI
];

const GLYPHS: string[][] = [
  // asterism ✳ (three crossing strokes)
  ['M0 -6 L0 6', 'M-5.2 -3 L5.2 3', 'M-5.2 3 L5.2 -3'],
  // wavy flourish
  ['M-13 0 C-7 -7 -2 7 4 0 C8 -5 12 3 15 -2'],
];

const SVG_NS = 'http://www.w3.org/2000/svg';

export function initInkLine(gsap: any, ScrollTrigger: any): InkController | null {
  const svg = document.getElementById('ink-line');
  const path = document.getElementById('ink-path') as unknown as SVGPathElement | null;
  const bleed = document.getElementById('ink-bleed') as unknown as SVGPathElement | null;
  const marks = document.getElementById('ink-marks');
  const tip = document.getElementById('ink-tip');
  const sig = document.getElementById('ink-signature') as unknown as SVGPathElement | null;
  const main = document.getElementById('story-main');
  if (!svg || !path || !bleed || !marks || !tip || !sig || !main) return null;
  if (window.innerWidth < 768) return null;

  svg.classList.add('ink-on');

  let drawTween: any = null;
  let sigTween: any = null;
  let markAnims: any[] = [];

  const killAll = () => {
    drawTween?.scrollTrigger?.kill();
    drawTween?.kill();
    sigTween?.scrollTrigger?.kill();
    sigTween?.kill();
    markAnims.forEach((a) => {
      a?.scrollTrigger?.kill();
      a?.kill?.();
    });
    markAnims = [];
    marks.innerHTML = '';
  };

  function strokesGroup(defs: string[], x: number, y: number): { g: SVGGElement; strokes: SVGPathElement[] } {
    const g = document.createElementNS(SVG_NS, 'g');
    g.setAttribute('transform', `translate(${x.toFixed(1)} ${y.toFixed(1)})`);
    const strokes = defs.map((d) => {
      const p = document.createElementNS(SVG_NS, 'path');
      p.setAttribute('d', d);
      g.appendChild(p);
      return p;
    });
    marks!.appendChild(g);
    return { g, strokes };
  }

  function drawOn(strokes: SVGPathElement[], triggerEl: Element | string, start: string): void {
    strokes.forEach((s) => {
      const l = s.getTotalLength();
      s.style.strokeDasharray = `${l}`;
      s.style.strokeDashoffset = `${l}`;
    });
    markAnims.push(
      gsap.to(strokes, {
        strokeDashoffset: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.12,
        scrollTrigger: { trigger: triggerEl, start, once: true },
      })
    );
  }

  function build(): void {
    killAll();

    const mainTop = main!.getBoundingClientRect().top + window.scrollY;
    const W = main!.clientWidth;
    const H = main!.scrollHeight;
    svg!.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg!.setAttribute('width', String(W));
    svg!.setAttribute('height', String(H));
    const docY = (rect: DOMRect) => rect.top + window.scrollY - mainTop;

    // Chapter anchors: each section's first head + the section's own band
    const sections = Array.from(main!.querySelectorAll('section'));
    const anchors: { x: number; y: number; bottomY: number; section: Element }[] = [];
    sections.forEach((s) => {
      const head = s.querySelector('.section-tag, .section-head');
      if (!head) return;
      const r = head.getBoundingClientRect();
      const sr = s.getBoundingClientRect();
      anchors.push({
        x: Math.max(16, r.left - 26),
        y: docY(r) + r.height / 2,
        bottomY: docY(sr) + sr.height,
        section: s,
      });
    });
    if (anchors.length < 2) return;

    // Start below the hero
    const hero = main!.querySelector('.hero');
    const heroRect = hero?.getBoundingClientRect();
    const heroBottom = heroRect ? docY(heroRect) + heroRect.height : anchors[0].y - 300;
    const start = { x: anchors[0].x + 46, y: heroBottom - 140 };

    /* Meandering path: hug the margin beside each chapter's content, and
       swing wide into the page only through the truly empty horizontal
       band between the end of one section and the next chapter head. */
    const wide = Math.min(280, Math.max(140, W * 0.16));
    let d = `M ${start.x.toFixed(1)} ${start.y.toFixed(1)}`;
    let prev: { x: number; y: number } = start;
    let prevBottom = heroBottom - 60;
    const gapPoints: { x: number; y: number; idx: number }[] = [];

    anchors.forEach((p, i) => {
      if (p.y <= prev.y + 40) return; // safety: keep flowing downward
      // empty band: between the previous section's end and this head
      const bandTop = Math.min(prevBottom, p.y - 60);
      const gapY = (bandTop + p.y) / 2;
      const gapX = anchors[0].x + wide * (i % 2 === 0 ? 1 : 0.6);
      gapPoints.push({ x: gapX, y: gapY, idx: i });
      // margin-hugging run down the previous section, then swing out and back
      d += ` C ${(prev.x + 24).toFixed(1)} ${((prev.y + bandTop) / 2).toFixed(1)}, ${(prev.x - 6).toFixed(1)} ${(bandTop - 40).toFixed(1)}, ${(prev.x + 14).toFixed(1)} ${bandTop.toFixed(1)}`;
      d += ` C ${(prev.x + wide * 0.5).toFixed(1)} ${(bandTop + 30).toFixed(1)}, ${gapX.toFixed(1)} ${(gapY - 46).toFixed(1)}, ${gapX.toFixed(1)} ${gapY.toFixed(1)}`;
      d += ` C ${gapX.toFixed(1)} ${(gapY + 46).toFixed(1)}, ${(p.x + wide * 0.35).toFixed(1)} ${(p.y - 30).toFixed(1)}, ${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
      prev = p;
      prevBottom = p.bottomY;
    });
    path!.setAttribute('d', d);
    bleed!.setAttribute('d', d);

    const L = path!.getTotalLength();
    [path!, bleed!].forEach((p) => {
      p.style.strokeDasharray = `${L}`;
      p.style.strokeDashoffset = `${L}`;
    });

    drawTween = gsap.to([path, bleed], {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: main,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.6,
      },
      onUpdate() {
        const offset = parseFloat(path!.style.strokeDashoffset || '0');
        const drawn = L - offset;
        if (drawn > 4 && drawn < L - 4) {
          const pt = path!.getPointAtLength(drawn);
          tip!.setAttribute('cx', pt.x.toFixed(1));
          tip!.setAttribute('cy', pt.y.toFixed(1));
          tip!.classList.add('tip-on');
        } else {
          tip!.classList.remove('tip-on');
        }
      },
    });

    /* Roman numeral marginalia beside each chapter head */
    anchors.forEach((a, i) => {
      const defs = NUMERALS[Math.min(i, NUMERALS.length - 1)];
      const { strokes } = strokesGroup(defs, a.x + 12, a.y - 46);
      drawOn(strokes, a.section, 'top 78%');
    });

    /* Manuscript glyphs at the wide points of the meanders (skip the first) */
    gapPoints.slice(1).forEach((gp, i) => {
      const defs = GLYPHS[i % GLYPHS.length];
      const { strokes } = strokesGroup(defs, gp.x + 26, gp.y);
      drawOn(strokes, anchors[gp.idx].section, 'top 96%');
    });

    /* Signature "MG" flourish beside the Contact headline */
    const headline = main!.querySelector('.contact-headline');
    if (headline) {
      const hr = headline.getBoundingClientRect();
      const sx = Math.min(W - 190, hr.left + hr.width + 60);
      const sy = docY(hr) + hr.height * 0.45;
      sig!.setAttribute(
        'd',
        `M ${sx.toFixed(1)} ${sy.toFixed(1)} ` +
          'c 2 -14 8 -30 12 -32 c 4 -2 6 12 8 26 c 2 -14 6 -28 10 -30 c 4 -2 7 14 8 34 ' +
          'm 28 -22 c -12 -6 -26 2 -26 14 c 0 12 14 18 24 12 c 6 -4 8 -12 4 -14 l -10 2'
      );
      const SL = sig!.getTotalLength();
      sig!.style.strokeDasharray = `${SL}`;
      sig!.style.strokeDashoffset = `${SL}`;
      sigTween = gsap.to(sig, {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: 'power2.inOut',
        scrollTrigger: { trigger: '#contact', start: 'top 70%', once: true },
      });
    }
  }

  build();

  return {
    rebuild: () => {
      if (window.innerWidth < 768) {
        svg.classList.remove('ink-on');
        killAll();
        return;
      }
      svg.classList.add('ink-on');
      build();
    },
  };
}
