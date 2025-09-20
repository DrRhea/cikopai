'use client';

import { useEffect, useRef } from 'react';

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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Menu items akan ditambahkan nanti */}
          <div 
            className="p-8 text-center" 
            style={{ 
              backgroundColor: '#2e4d3d',
              opacity: 0,
              transform: 'translateY(32px) scale(0.95)',
              transition: 'all 0.6s ease-out'
            }}
          >
            <h3 className="text-2xl font-semibold mb-4" style={{ color: '#ebf4e5' }}>Menu Item 1</h3>
            <p style={{ color: '#ebf4e5' }}>Deskripsi menu akan ditambahkan</p>
          </div>
          <div 
            className="p-8 text-center" 
            style={{ 
              backgroundColor: '#2e4d3d',
              opacity: 0,
              transform: 'translateY(32px) scale(0.95)',
              transition: 'all 0.6s ease-out'
            }}
          >
            <h3 className="text-2xl font-semibold mb-4" style={{ color: '#ebf4e5' }}>Menu Item 2</h3>
            <p style={{ color: '#ebf4e5' }}>Deskripsi menu akan ditambahkan</p>
          </div>
          <div 
            className="p-8 text-center" 
            style={{ 
              backgroundColor: '#2e4d3d',
              opacity: 0,
              transform: 'translateY(32px) scale(0.95)',
              transition: 'all 0.6s ease-out'
            }}
          >
            <h3 className="text-2xl font-semibold mb-4" style={{ color: '#ebf4e5' }}>Menu Item 3</h3>
            <p style={{ color: '#ebf4e5' }}>Deskripsi menu akan ditambahkan</p>
          </div>
        </div>
      </div>
    </section>
  );
}
