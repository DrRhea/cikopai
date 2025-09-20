'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animasi untuk content div
            const contentDiv = entry.target.querySelector('.hero-content');
            if (contentDiv) {
              contentDiv.classList.add('animate-fade-up');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image - Tidak ikut scale */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/cikopai-interior.jpg"
          alt="Cikopai Coffee Shop Interior"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay untuk brightness */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content - Hanya content yang di-animate */}
      <div 
        className="hero-content relative z-10 text-center"
        style={{ opacity: 0, transform: 'scale(0.95)', color: '#ebf4e5' }}
      >
        <h1 
          className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-lg"
          style={{ opacity: 0, transform: 'translateY(32px)' }}
        >
          Cikopai
        </h1>
        <p 
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md"
          style={{ opacity: 0, transform: 'translateY(32px)' }}
        >
          Coffee Shop yang menghadirkan pengalaman kopi terbaik dengan suasana yang hangat dan nyaman
        </p>
      </div>
    </section>
  );
}
