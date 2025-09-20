'use client';

import { ReactNode } from 'react';
import { FadeUp, AnimationType } from './FadeUp';

interface LazySectionProps {
  children: ReactNode;
  animation?: AnimationType;
  stagger?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const LazySection = ({ 
  children, 
  animation = 'fadeUp',
  stagger = false,
  className = '',
  style = {}
}: LazySectionProps) => {
  return (
    <div className={className} style={style}>
      {stagger ? (
        <div className="space-y-4">
          {Array.isArray(children) ? children.map((child, index) => (
            <FadeUp
              key={index}
              animation={animation}
              delay={index * 100}
              className="animate-stagger"
            >
              {child}
            </FadeUp>
          )) : (
            <FadeUp animation={animation}>
              {children}
            </FadeUp>
          )}
        </div>
      ) : (
        <FadeUp animation={animation}>
          {children}
        </FadeUp>
      )}
    </div>
  );
};
