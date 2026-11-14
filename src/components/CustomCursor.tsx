import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion or is on touch device
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (prefersReducedMotion || isTouchDevice) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('select') ||
          target.closest('textarea') ||
          target.closest('.interactive-target'))
      ) {
        setIsHoveringInteractive(true);
      } else {
        setIsHoveringInteractive(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth trailing animation loop
    let animationFrameId: number;
    const animateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(animateTrailing);
    };
    animationFrameId = requestAnimationFrame(animateTrailing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden lg:block">
      {/* Outer ring */}
      <div
        className="fixed top-0 left-0 rounded-full border border-brand-blue/40 pointer-events-none transition-transform duration-75 ease-out"
        style={{
          width: isHoveringInteractive ? '48px' : '32px',
          height: isHoveringInteractive ? '48px' : '32px',
          transform: `translate3d(${trailingPos.x - (isHoveringInteractive ? 24 : 16)}px, ${
            trailingPos.y - (isHoveringInteractive ? 24 : 16)
          }px, 0)`,
          backgroundColor: isHoveringInteractive ? 'rgba(36, 85, 232, 0.08)' : 'transparent',
          transition: 'width 0.2s ease, height 0.2s ease, background-color 0.2s ease',
        }}
      />
      {/* Center dot */}
      <div
        className="fixed top-0 left-0 rounded-full pointer-events-none"
        style={{
          width: '6px',
          height: '6px',
          backgroundColor: isHoveringInteractive ? '#FF7138' : '#2455E8',
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
          transition: 'background-color 0.15s ease',
        }}
      />
    </div>
  );
};

