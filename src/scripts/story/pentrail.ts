// Pen trail — a nib that "visits the chapters": its X target follows
// content-derived waypoints (glide out to each section title as it nears
// mid-viewport, return to the right margin in between), drawing wide
// diagonal strokes across the page. Y mirrors reading progress. Leaves a
// fading comet-like ink trail on a fixed canvas via the shared gsap.ticker.

interface PenController {
  rebuild: () => void;
}

export function initPenTrail(gsap: any, lenis: any): PenController | null {
  const canvas = document.getElementById('pen-canvas') as HTMLCanvasElement | null;
  const nib = document.getElementById('pen-nib');
  if (!canvas || !nib) return null;
  const conn = (navigator as any).connection;
  if (window.innerWidth < 768 || conn?.saveData) {
    canvas.remove();
    nib.remove();
    return null;
  }
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  const DPR = Math.min(window.devicePixelRatio || 1, 1.5);
  let W = 0;
  let H = 0;

  function resize(): void {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas!.width = W * DPR;
    canvas!.height = H * DPR;
    ctx!.setTransform(DPR, 0, 0, DPR, 0, 0);
  }

  let velocity = 0;
  lenis.on('scroll', (e: any) => {
    velocity = e.velocity ?? 0;
  });

  const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

  /* ── Content waypoints: visit each chapter title, return to the margin
        in between. targetXFor() interpolates linearly between them; the
        pen's low-pass smoothing turns the corners into wide diagonals. ── */
  let waypoints: { at: number; x: number }[] = [];

  function buildWaypoints(): void {
    const marginX = W - 64;
    const main = document.getElementById('story-main');
    const pts: { at: number; x: number }[] = [{ at: 0, x: marginX }];
    if (main) {
      main.querySelectorAll('section').forEach((s) => {
        const title = s.querySelector('.section-title');
        if (!title) return;
        const r = title.getBoundingClientRect();
        const at = r.top + window.scrollY - H * 0.4; // title around 40% of vh
        if (at <= 0) return;
        pts.push({ at, x: clamp(r.right + 48, 140, W - 140) });
      });
    }
    pts.sort((a, b) => a.at - b.at);
    // return-to-margin waypoint halfway between consecutive visits
    const withReturns: { at: number; x: number }[] = [];
    for (let i = 0; i < pts.length; i++) {
      withReturns.push(pts[i]);
      if (i < pts.length - 1) {
        withReturns.push({ at: (pts[i].at + pts[i + 1].at) / 2, x: marginX });
      }
    }
    const docH = document.documentElement.scrollHeight;
    withReturns.push({ at: docH, x: marginX });
    waypoints = withReturns;
  }

  function targetXFor(scrollY: number): number {
    if (!waypoints.length) return W - 64;
    if (scrollY <= waypoints[0].at) return waypoints[0].x;
    for (let i = 1; i < waypoints.length; i++) {
      if (scrollY <= waypoints[i].at) {
        const a = waypoints[i - 1];
        const b = waypoints[i];
        const t = (scrollY - a.at) / Math.max(1, b.at - a.at);
        return a.x + (b.x - a.x) * t;
      }
    }
    return waypoints[waypoints.length - 1].x;
  }

  let penX = 0;
  let penY = 0;
  let prevX = 0;
  let prevY = 0;
  let smoothV = 0; // low-pass filtered velocity → graceful arcs, no jitter
  let angleDeg = 0;
  let idle = 0;
  let lastMove = 0;
  let resting = false;
  let init = false;

  const TRAIL_MS = 900; // trail lifetime — the comet tail
  const points: { x: number; y: number; t: number }[] = [];

  function frame(): void {
    const doc = document.documentElement;
    const maxScroll = Math.max(1, doc.scrollHeight - H);
    const progress = clamp(window.scrollY / maxScroll, 0, 1);

    // low-pass the scroll velocity: a gentle secondary lean on top of the
    // chapter-visiting waypoints, which now lead the choreography
    smoothV += (velocity - smoothV) * 0.06;
    const bend = clamp(smoothV * 1.4, -40, 40);

    // gentle breathing while at rest, so the pen feels alive but calm
    idle += 0.018;
    const idleX = Math.sin(idle) * 2.5;
    const idleY = Math.cos(idle * 0.7) * 2;

    const targetX = targetXFor(window.scrollY) - bend + idleX;
    const targetY = H * (0.1 + progress * 0.8) + idleY;

    if (!init) {
      penX = targetX;
      penY = targetY;
      prevX = penX;
      prevY = penY;
      init = true;
    }
    penX += (targetX - penX) * 0.09;
    penY += (targetY - penY) * 0.11;

    const now = performance.now();
    const dx = penX - prevX;
    const dy = penY - prevY;
    const step = Math.hypot(dx, dy);

    // ink only deliberate motion; the tail expires on its own
    if (step > 0.6) {
      lastMove = now;
      if (Math.abs(smoothV) > 2) points.push({ x: penX, y: penY, t: now });
    }
    while (points.length && now - points[0].t > TRAIL_MS) points.shift();

    // redraw the living tail from scratch each frame: alpha and width
    // taper with age — a sharp comet, zero residue by construction
    ctx!.clearRect(0, 0, W, H);
    ctx!.lineCap = 'round';
    ctx!.lineJoin = 'round';
    for (let i = 1; i < points.length; i++) {
      const p = points[i];
      const q = points[i - 1];
      const life = 1 - (now - p.t) / TRAIL_MS; // 1 fresh → 0 dying
      ctx!.strokeStyle = `rgba(122,31,43,${(0.45 * life).toFixed(3)})`;
      ctx!.lineWidth = 1.5 + 1.7 * life;
      ctx!.beginPath();
      ctx!.moveTo(q.x, q.y);
      ctx!.lineTo(p.x, p.y);
      ctx!.stroke();
    }

    // reading mode: fade the nib away after ~1.5s without scroll
    const shouldRest = now - lastMove > 1500;
    if (shouldRest !== resting) {
      resting = shouldRest;
      nib!.classList.toggle('pen-resting', resting);
    }

    prevX = penX;
    prevY = penY;

    // nib orientation: damped, wrap-safe, easing back upright at rest
    const targetAngle = step > 0.8 ? Math.atan2(dy, dx) * (180 / Math.PI) - 90 : 0;
    let delta = targetAngle - angleDeg;
    while (delta > 180) delta -= 360;
    while (delta < -180) delta += 360;
    angleDeg += delta * 0.12;
    nib!.style.transform = `translate(${(penX - 7).toFixed(1)}px, ${(penY - 9.5).toFixed(1)}px) rotate(${angleDeg.toFixed(1)}deg)`;

    velocity *= 0.92;
  }

  gsap.ticker.add(frame);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) gsap.ticker.remove(frame);
    else gsap.ticker.add(frame);
  });

  let rt: number;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = window.setTimeout(() => {
      resize();
      buildWaypoints();
    }, 200);
  });
  // titles change width per language → visit points shift horizontally
  window.addEventListener('langchange', () => {
    window.setTimeout(buildWaypoints, 300);
  });

  resize();
  buildWaypoints();
  canvas.classList.add('pen-on');
  nib.classList.add('pen-on');

  return { rebuild: buildWaypoints };
}
