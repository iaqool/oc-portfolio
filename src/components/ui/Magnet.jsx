import { useEffect, useRef, useState } from 'react';

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
  style,
}) {
  const ref = useRef(null);
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0px)');
  const [active, setActive] = useState(false);

  useEffect(() => {
    function handleMove(e) {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const halfW = rect.width / 2 + padding;
      const halfH = rect.height / 2 + padding;
      const within = Math.abs(dx) < halfW && Math.abs(dy) < halfH;
      if (within) {
        setActive(true);
        setTransform(`translate3d(${dx / strength}px, ${dy / strength}px, 0px)`);
      } else if (active) {
        setActive(false);
        setTransform('translate3d(0px, 0px, 0px)');
      }
    }

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, [active, padding, strength]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform,
        transition: active ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}
