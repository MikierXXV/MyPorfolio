// Background ink motes / paper fibers on a fixed canvas behind the content.
// Drift slowly, parallax with scroll velocity (Lenis), gentle pointer
// repulsion on desktop. Skipped entirely on small screens / save-data.

interface Mote {
  x: number; y: number;
  r: number;
  depth: number;
  vx: number; vy: number;
  ox: number; oy: number;
  fiber: boolean;
  ang: number;
  len: number;
  color: string;
}

export function initMotes(gsap: any, lenis: any): void {
  const canvas = document.getElementById('story-canvas') as HTMLCanvasElement | null;
  if (!canvas) return;
  const conn = (navigator as any).connection;
  if (window.innerWidth < 768 || conn?.saveData) {
    canvas.remove();
    return;
  }
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const DPR = Math.min(window.devicePixelRatio || 1, 1.5);
  let W = 0;
  let H = 0;
  let motes: Mote[] = [];

  function spawn(): void {
    const count = Math.max(40, Math.min(80, Math.floor((W * H) / 26000)));
    motes = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: 0.6 + Math.random() * 1.2,
      depth: 0.2 + Math.random() * 0.4,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      ox: 0,
      oy: 0,
      fiber: Math.random() < 0.15,
      ang: Math.random() * Math.PI,
      len: 4 + Math.random() * 5,
      color:
        Math.random() < 1 / 6
          ? `rgba(122,31,43,${(0.06 + Math.random() * 0.06).toFixed(3)})`
          : `rgba(26,22,18,${(0.05 + Math.random() * 0.04).toFixed(3)})`,
    }));
  }

  function resize(): void {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas!.width = W * DPR;
    canvas!.height = H * DPR;
    ctx!.setTransform(DPR, 0, 0, DPR, 0, 0);
    spawn();
  }

  let scrollImpulse = 0;
  lenis.on('scroll', (e: any) => {
    scrollImpulse = e.velocity ?? 0;
  });

  let px = -9999;
  let py = -9999;
  window.addEventListener(
    'pointermove',
    (e) => {
      if (e.pointerType !== 'mouse') return;
      px = e.clientX;
      py = e.clientY;
    },
    { passive: true }
  );

  function frame(): void {
    ctx!.clearRect(0, 0, W, H);
    for (const m of motes) {
      // scroll parallax by depth
      m.y -= scrollImpulse * m.depth * 0.35;
      // pointer repulsion within 120px
      const dx = m.x - px;
      const dy = m.y - py;
      const d = Math.hypot(dx, dy);
      if (d < 120 && d > 0.01) {
        const f = (1 - d / 120) ** 2 * 0.5;
        m.ox += (dx / d) * f;
        m.oy += (dy / d) * f;
      }
      m.x += m.vx + m.ox;
      m.y += m.vy + m.oy;
      m.ox *= 0.92;
      m.oy *= 0.92;
      // edge wrap
      if (m.x < -12) m.x = W + 12;
      else if (m.x > W + 12) m.x = -12;
      if (m.y < -12) m.y = H + 12;
      else if (m.y > H + 12) m.y = -12;

      if (m.fiber) {
        ctx!.strokeStyle = m.color;
        ctx!.lineWidth = 1;
        ctx!.beginPath();
        ctx!.moveTo(m.x - Math.cos(m.ang) * m.len * 0.5, m.y - Math.sin(m.ang) * m.len * 0.5);
        ctx!.lineTo(m.x + Math.cos(m.ang) * m.len * 0.5, m.y + Math.sin(m.ang) * m.len * 0.5);
        ctx!.stroke();
      } else {
        ctx!.fillStyle = m.color;
        ctx!.beginPath();
        ctx!.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx!.fill();
      }
    }
    scrollImpulse *= 0.9;
  }

  gsap.ticker.add(frame);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) gsap.ticker.remove(frame);
    else gsap.ticker.add(frame);
  });

  let rt: number;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = window.setTimeout(resize, 200);
  });

  resize();
}
