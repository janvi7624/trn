import { useEffect, useRef } from 'react';

export default function HeroBg3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create tech line elements
    const createTechLine = (delay, width, left, top, rotate) => {
      const el = document.createElement('div');
      el.className = 'absolute border-l border-trn-red/20';
      el.style.width = '1px';
      el.style.height = width;
      el.style.left = left;
      el.style.top = top;
      el.style.transform = `rotate(${rotate}deg)`;
      el.style.opacity = Math.random() * 0.5 + 0.2;
      el.style.animationDelay = delay;
      container.appendChild(el);
      return el;
    };

    // Create vertical tech lines
    for (let i = 0; i < 6; i++) {
      createTechLine(
        `${i * 0.3}s`,
        `${Math.random() * 200 + 150}px`,
        `${Math.random() * 80 + 10}%`,
        `${Math.random() * 60 + 10}%`,
        0
      );
    }

    // Parallax effect on mouse move
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const elements = container.querySelectorAll('div');
      elements.forEach((el, index) => {
        const speed = (index + 1) * 0.01;
        const offsetX = (x - rect.width / 2) * speed;
        const offsetY = (y - rect.height / 2) * speed;
        el.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    };

    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ perspective: '1000px' }}
    >
      {/* Subtle red glow at top */}
      <div className="absolute inset-0 bg-gradient-to-b from-trn-red/5 via-transparent to-transparent opacity-40" />

      {/* Tech grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Fade mask to prevent tech lines at edges */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50" />
    </div>
  );
}
