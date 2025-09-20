'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { FadeUp } from './FadeUp';

interface ImageRevealProps {
  children: ReactNode;
  overlayColor?: string;
  slideDirection?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const ImageReveal = ({ 
  children,
  overlayColor = 'black',
  slideDirection = 'up',
  duration = 800,
  className = '',
  style = {}
}: ImageRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;
    
    if (!container || !overlay) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger overlay slide animation
            setTimeout(() => {
              const directionMap = {
                up: 'translateY(100%)',
                down: 'translateY(-100%)',
                left: 'translateX(100%)',
                right: 'translateX(-100%)'
              };
              
              overlay.style.transform = directionMap[slideDirection];
            }, 200);

            // Trigger image reveal
            setTimeout(() => {
              container.classList.add('animate-image-reveal');
            }, duration / 2);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [slideDirection, duration]);

  const overlayClasses = `absolute inset-0 z-10 transition-transform duration-${duration} ease-out`;
  const overlayStyle = {
    backgroundColor: overlayColor,
    transform: slideDirection === 'up' ? 'translateY(0)' : 
               slideDirection === 'down' ? 'translateY(0)' :
               slideDirection === 'left' ? 'translateX(0)' : 'translateX(0)'
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden opacity-0 scale-95 transition-all duration-${duration} ease-out ${className}`}
      style={style}
    >
      <div
        ref={overlayRef}
        className={overlayClasses}
        style={overlayStyle}
      />
      {children}
    </div>
  );
};
