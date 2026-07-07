// Pen trail — fixed nib on the right edge whose Y mirrors reading progress;
// bends inward with scroll velocity and leaves a fading comet-like ink
// trail on a fixed canvas. Runs on the shared gsap.ticker.

export function initPenTrail(gsap: any, lenis: any): void {
  const canvas = document.getElementById('pen-canvas') as HTMLCanvasElement | null;
  const nib = document.getElementById('pen-nib');
  if (!canvas || !nib) return;
  const conn = (navigator as any).connection;
  if (window.innerWidth < 768 || conn?.saveData) {
    canvas.remove();
    nib.remove();
    return;
  }
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

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

  let penX = 0;
  let penY = 0;
  let prevX = 0;
  let prevY = 0;
  let midX = 0;
  let midY = 0;
  let smoothV = 0; // low-pass filtered velocity → graceful arcs, no jitter
  let angleDeg = 0;
  let idle = 0;
  let stillFrames = 0;
  let init = false;

  function frame(): void {
    const baseX = W - 64;
    const doc = document.documentElement;
    const maxScroll = Math.max(1, doc.scrollHeight - H);
    const progress = clamp(window.scrollY / maxScroll, 0, 1);

    // low-pass the scroll velocity: the pen leans into sustained motion
    // and recovers slowly, drawing long calm arcs instead of zigzags
    smoothV += (velocity - smoothV) * 0.06;
    const bend = clamp(smoothV * 1.8, -85, 85);

    // gentle breathing while at rest, so the pen feels alive but calm
    idle += 0.018;
    const idleX = Math.sin(idle) * 2.5;
    const idleY = Math.cos(idle * 0.7) * 2;

    const targetX = baseX - bend + idleX;
    const targetY = H * (0.1 + progress * 0.8) + idleY;

    if (!init) {
      penX = targetX;
      penY = targetY;
      prevX = penX;
      prevY = penY;
      midX = penX;
      midY = penY;
      init = true;
    }
    penX += (targetX - penX) * 0.09;
    penY += (targetY - penY) * 0.11;

    // fade the whole trail a little each frame (comet decay)
    ctx!.globalCompositeOperation = 'destination-out';
    ctx!.fillStyle = 'rgba(0,0,0,0.035)';
    ctx!.fillRect(0, 0, W, H);
    ctx!.globalCompositeOperation = 'source-over';

    // smooth stroke: quadratic curve between consecutive midpoints,
    // using the previous pen position as control point (no kinks)
    const dx = penX - prevX;
    const dy = penY - prevY;
    const step = Math.hypot(dx, dy);
    const newMidX = (prevX + penX) / 2;
    const newMidY = (prevY + penY) / 2;
    if (step > 0.6) {
      ctx!.strokeStyle = 'rgba(122,31,43,0.6)';
      ctx!.lineWidth = clamp(2 + Math.abs(smoothV) * 0.05, 2, 4.5);
      ctx!.lineCap = 'round';
      ctx!.beginPath();
      ctx!.moveTo(midX, midY);
      ctx!.quadraticCurveTo(prevX, prevY, newMidX, newMidY);
      ctx!.stroke();
      stillFrames = 0;
    } else if (++stillFrames === 150) {
      // 8-bit alpha never fully fades destination-out — hard-clear the
      // lingering ghost once the pen has been at rest for ~2.5s
      ctx!.clearRect(0, 0, W, H);
    }
    midX = newMidX;
    midY = newMidY;
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
    rt = window.setTimeout(resize, 200);
  });

  resize();
  canvas.classList.add('pen-on');
  nib.classList.add('pen-on');
}
