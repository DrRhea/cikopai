'use client';

import Image from "next/image";
import { useEffect, useRef } from 'react';

export default function TheStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate content from left
            if (contentRef.current) {
              contentRef.current.style.opacity = '1';
              contentRef.current.style.transform = 'translateX(0)';
            }
            
            // Animate image from right
            if (imageRef.current) {
              imageRef.current.style.opacity = '1';
              imageRef.current.style.transform = 'translateX(0)';
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <section 
      ref={sectionRef}
      id="the-story" 
      style={{ 
        background: 'linear-gradient(to bottom, #2e4d3d 0%, #1a3a2e 100%)'
      }}
    >
      {/* 2 Grid Layout - No margins */}
      <div className="grid lg:grid-cols-2">
        {/* Left Grid - Content */}
        <div 
          ref={contentRef}
          className="flex items-center justify-center p-8 lg:p-12"
          style={{ 
            opacity: 0,
            transform: 'translateX(-50px)',
            transition: 'all 0.8s ease-out'
          }}
        >
          <div className="max-w-lg">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#ebf4e5' }}>
              The Story
            </h2>
            <p className="text-lg mb-10 opacity-90" style={{ color: '#ebf4e5' }}>
              Cerita di balik setiap cangkir kopi yang kami sajikan
            </p>
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#ebf4e5' }}>
              Perjalanan Kami
            </h3>
            <p className="text-base mb-6 leading-relaxed opacity-80" style={{ color: '#ebf4e5' }}>
              Cikopai dimulai dari kecintaan terhadap kopi berkualitas tinggi dan keinginan untuk berbagi pengalaman kopi terbaik dengan masyarakat.
            </p>
            <p className="text-base leading-relaxed opacity-80" style={{ color: '#ebf4e5' }}>
              Setiap biji kopi dipilih dengan teliti dan disangrai dengan sempurna untuk memberikan cita rasa yang konsisten dan memuaskan.
            </p>
          </div>
        </div>
        
        {/* Right Grid - Image */}
        <div 
          ref={imageRef}
          className="relative overflow-hidden"
          style={{ 
            opacity: 0,
            transform: 'translateX(50px)',
            transition: 'all 0.8s ease-out'
          }}
        >
          <Image
            src="/images/story/cikopai-coffee-story.jpg"
            alt="Cikopai Coffee Story - Coffee beans and preparation"
            width={800}
            height={600}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
