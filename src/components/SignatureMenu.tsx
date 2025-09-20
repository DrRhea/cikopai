'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function SignatureMenu() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const menuGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate header
            if (headerRef.current) {
              headerRef.current.style.opacity = '1';
              headerRef.current.style.transform = 'translateY(0)';
            }
            
            // Animate menu grid with stagger effect
            if (menuGridRef.current) {
              const menuItems = menuGridRef.current.children;
              Array.from(menuItems).forEach((item, index) => {
                setTimeout(() => {
                  (item as HTMLElement).style.opacity = '1';
                  (item as HTMLElement).style.transform = 'translateY(0) scale(1)';
                }, index * 200); // Stagger delay 200ms per item
              });
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
      id="signature-menu" 
      className="py-20" 
      style={{ backgroundColor: '#ebf4e5' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className="text-center mb-16"
          style={{ 
            opacity: 0, 
            transform: 'translateY(32px)',
            transition: 'all 0.8s ease-out'
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#2e4d3d' }}>
            Signature Menu
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#2e4d3d' }}>
            Nikmati kopi pilihan terbaik yang disajikan dengan cinta dan keahlian
          </p>
        </div>
        
        <div 
          ref={menuGridRef}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {/* Iced Coffee Rosemary */}
          <div 
            className="overflow-hidden" 
            style={{ 
              backgroundColor: '#2e4d3d',
              opacity: 0,
              transform: 'translateY(32px) scale(0.95)',
              transition: 'all 0.6s ease-out'
            }}
          >
            <div className="relative">
              <Image
                src="/images/menu/cikopai-iced-coffee-rosemary.jpg"
                alt="Cikopai Iced Coffee with Rosemary - Refreshing coffee with herbal garnish"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#ebf4e5' }}>Iced Coffee Rosemary</h3>
              <p className="text-sm" style={{ color: '#ebf4e5' }}>Kopi dingin segar dengan garnish rosemary yang memberikan aroma herbal yang unik</p>
            </div>
          </div>

          {/* Latte & Croissant */}
          <div 
            className="overflow-hidden" 
            style={{ 
              backgroundColor: '#2e4d3d',
              opacity: 0,
              transform: 'translateY(32px) scale(0.95)',
              transition: 'all 0.6s ease-out'
            }}
          >
            <div className="relative">
              <Image
                src="/images/menu/cikopai-latte-croissant.jpg"
                alt="Cikopai Latte with Croissant - Classic breakfast pairing"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#ebf4e5' }}>Latte & Croissant</h3>
              <p className="text-sm" style={{ color: '#ebf4e5' }}>Pasangan klasik latte dengan croissant renyah yang sempurna untuk sarapan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
