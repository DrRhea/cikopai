export type AnimationType = 
  | 'fadeUp' 
  | 'fadeDown' 
  | 'slideInLeft' 
  | 'slideInRight' 
  | 'scaleIn' 
  | 'rotateIn' 
  | 'bounceIn' 
  | 'flipIn' 
  | 'stagger';

export interface AnimationConfig {
  type: AnimationType;
  delay?: number;
  duration?: number;
  stagger?: number;
  threshold?: number;
}

export const animationConfigs: Record<AnimationType, string> = {
  fadeUp: 'opacity-0 translate-y-8',
  fadeDown: 'opacity-0 -translate-y-8',
  slideInLeft: 'opacity-0 -translate-x-8',
  slideInRight: 'opacity-0 translate-x-8',
  scaleIn: 'opacity-0 scale-95',
  rotateIn: 'opacity-0 rotate-12 scale-95',
  bounceIn: 'opacity-0 scale-75',
  flipIn: 'opacity-0 rotate-y-90',
  stagger: 'opacity-0 translate-y-4'
};

export const animationClasses: Record<AnimationType, string> = {
  fadeUp: 'opacity-100 translate-y-0',
  fadeDown: 'opacity-100 -translate-y-0',
  slideInLeft: 'opacity-100 -translate-x-0',
  slideInRight: 'opacity-100 translate-x-0',
  scaleIn: 'opacity-100 scale-100',
  rotateIn: 'opacity-100 rotate-0 scale-100',
  bounceIn: 'opacity-100 scale-100',
  flipIn: 'opacity-100 rotate-y-0',
  stagger: 'opacity-100 translate-y-0'
};

export const createIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  threshold: number = 0.1
) => {
  return new IntersectionObserver(callback, { threshold });
};

export const addAnimationClass = (element: Element, animationType: AnimationType) => {
  const baseClasses = animationClasses[animationType];
  element.classList.add(...baseClasses.split(' '));
};

export const removeAnimationClass = (element: Element, animationType: AnimationType) => {
  const baseClasses = animationClasses[animationType];
  element.classList.remove(...baseClasses.split(' '));
};
