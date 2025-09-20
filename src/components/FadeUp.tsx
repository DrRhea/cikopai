'use client';

import { useEffect, useRef, ReactNode } from 'react';

export type AnimationType = 
  | 'fadeUp' 
  | 'fadeDown' 
  | 'slideInLeft' 
  | 'slideInRight' 
  | 'scaleIn' 
  | 'rotateIn' 
  | 'bounceIn' 
  | 'flipIn' 
  | 'stagger'
  | 'imageReveal';

interface FadeUpProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;
}

const animationClasses: Record<AnimationType, string> = {
  fadeUp: 'opacity-0 translate-y-8',
  fadeDown: 'opacity-0 -translate-y-8',
  slideInLeft: 'opacity-0 -translate-x-8',
  slideInRight: 'opacity-0 translate-x-8',
  scaleIn: 'opacity-0 scale-95',
  rotateIn: 'opacity-0 rotate-12 scale-95',
  bounceIn: 'opacity-0 scale-75',
  flipIn: 'opacity-0 rotate-y-90',
  stagger: 'opacity-0 translate-y-4',
  imageReveal: 'opacity-0 scale-95'
};

const animationTriggers: Record<AnimationType, string> = {
  fadeUp: 'opacity-100 translate-y-0',
  fadeDown: 'opacity-100 -translate-y-0',
  slideInLeft: 'opacity-100 -translate-x-0',
  slideInRight: 'opacity-100 translate-x-0',
  scaleIn: 'opacity-100 scale-100',
  rotateIn: 'opacity-100 rotate-0 scale-100',
  bounceIn: 'opacity-100 scale-100',
  flipIn: 'opacity-100 rotate-y-0',
  stagger: 'opacity-100 translate-y-0',
  imageReveal: 'opacity-100 scale-100'
};

export const FadeUp = ({ 
  children, 
  animation = 'fadeUp',
  delay = 0,
  duration = 1000,
  threshold = 0.1,
  className = '',
  style = {}
}: FadeUpProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add(`animate-${animation}`);
            }, delay);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [animation, delay, threshold]);

  const baseClasses = animationClasses[animation];
  const transitionClass = `transition-all duration-${duration} ease-out`;

  return (
    <div
      ref={elementRef}
      className={`${baseClasses} ${transitionClass} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        ...style
      }}
    >
      {children}
    </div>
  );
};
