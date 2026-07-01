import { useEffect, useRef, useState } from 'react';

// Lightweight custom cursor with a trailing ring. Disabled on touch devices
// and when the user prefers reduced motion.
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;

    setEnabled(true);
    document.documentElement.classList.add('custom-cursor-active');

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: mouse.x, y: mouse.y };
    let hovering = false;
    let raf;

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`;
      }
      const target = e.target;
      hovering = !!(
        target.closest('a, button, [data-cursor="hover"], input, textarea')
      );
    };

    const render = () => {
      ring.x += (mouse.x - ring.x) * 0.18;
      ring.y += (mouse.y - ring.y) * 0.18;
      if (ringRef.current) {
        const scale = hovering ? 1.8 : 1;
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px) scale(${scale})`;
        ringRef.current.style.borderColor = hovering
          ? 'rgba(124,58,237,0.9)'
          : 'rgba(37,99,235,0.7)';
      }
      raf = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[90] -ml-1 -mt-1 h-2 w-2 rounded-full bg-blue-600"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[90] -ml-4 -mt-4 h-8 w-8 rounded-full border border-blue-500/70 transition-colors duration-200"
      />
    </>
  );
}
