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
  let init = false;

  function frame(): void {
    const baseX = W - 56;
    const doc = document.documentElement;
    const maxScroll = Math.max(1, doc.scrollHeight - H);
    const progress = clamp(window.scrollY / maxScroll, 0, 1);
    const targetY = H * (0.12 + progress * 0.76);
    const targetX = baseX - clamp(velocity * 0.6, -46, 46);

    if (!init) {
      penX = targetX;
      penY = targetY;
      prevX = penX;
      prevY = penY;
      init = true;
    }
    penX += (targetX - penX) * 0.16;
    penY += (targetY - penY) * 0.12;

    // fade the whole trail a little each frame (comet decay)
    ctx!.globalCompositeOperation = 'destination-out';
    ctx!.fillStyle = 'rgba(0,0,0,0.06)';
    ctx!.fillRect(0, 0, W, H);
    ctx!.globalCompositeOperation = 'source-over';

    // lay down ink only while actually moving
    const dx = penX - prevX;
    const dy = penY - prevY;
    if (Math.hypot(dx, dy) > 0.25) {
      ctx!.strokeStyle = 'rgba(122,31,43,0.5)';
      ctx!.lineWidth = clamp(1.5 + Math.abs(velocity) * 0.04, 1.5, 3.2);
      ctx!.lineCap = 'round';
      ctx!.beginPath();
      ctx!.moveTo(prevX, prevY);
      ctx!.lineTo(penX, penY);
      ctx!.stroke();
    }
    prevX = penX;
    prevY = penY;

    // orient the nib along its motion (pointing down at rest)
    const angle = Math.atan2(dy, dx) * (180 / Math.PI) - 90;
    const settled = Math.hypot(dx, dy) < 0.4;
    nib!.style.transform = `translate(${(penX - 5.5).toFixed(1)}px, ${(penY - 7.5).toFixed(1)}px) rotate(${settled ? 0 : angle.toFixed(1)}deg)`;

    velocity *= 0.9;
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
