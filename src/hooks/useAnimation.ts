'use client';

import { useEffect, useRef } from 'react';

interface UseAnimationProps {
  animationType: string;
  delay?: number;
  stagger?: number;
  threshold?: number;
}

export const useAnimation = ({
  animationType,
  delay = 0,
  stagger = 0,
  threshold = 0.1
}: UseAnimationProps) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add(`animate-${animationType}`);
            }, delay);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [animationType, delay, threshold]);

  return elementRef;
};
