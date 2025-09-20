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
            entry.target.classList.add('animate-fade-up');
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden opacity-0 scale-95 transition-all duration-1000 ease-out"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/cikopai-interior.jpg"
          alt="Cikopai Coffee Shop Interior"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay untuk brightness */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-lg opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-200">
          Cikopai
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-400">
          Coffee Shop yang menghadirkan pengalaman kopi terbaik dengan suasana yang hangat dan nyaman
        </p>
        <button 
          className="text-white font-semibold py-3 px-8 transition-all duration-300 shadow-lg opacity-0 translate-y-8 delay-600" 
          style={{ backgroundColor: '#2e4d3d' }} 
          onMouseEnter={(e) => e.target.style.backgroundColor = '#1a3a2e'} 
          onMouseLeave={(e) => e.target.style.backgroundColor = '#2e4d3d'}
        >
          Jelajahi Menu Kami
        </button>
      </div>
    </section>
  );
}
