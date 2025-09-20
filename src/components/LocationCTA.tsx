'use client';

import { useEffect, useRef } from 'react';

export default function LocationCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
            
            // Animate content
            if (contentRef.current) {
              contentRef.current.style.opacity = '1';
              contentRef.current.style.transform = 'translateY(0)';
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
      id="location" 
      className="py-20" 
      style={{ backgroundColor: '#ebf4e5' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content Container */}
        <div 
          className="p-16"
          style={{ backgroundColor: '#2e4d3d' }}
        >
        <div 
          ref={headerRef}
          className="text-center mb-16"
          style={{ 
            opacity: 0, 
            transform: 'translateY(32px)',
            transition: 'all 0.8s ease-out'
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#ebf4e5' }}>
            Location & Contact
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#ebf4e5' }}>
            Kunjungi kami dan rasakan pengalaman kopi yang tak terlupakan
          </p>
        </div>
        
        <div 
          ref={contentRef}
          className="grid lg:grid-cols-2 gap-12 items-start"
          style={{ 
            opacity: 0, 
            transform: 'translateY(32px)',
            transition: 'all 0.8s ease-out 0.2s'
          }}
        >
          {/* Location Info */}
          <div>
            <h3 className="text-3xl font-bold mb-8" style={{ color: '#ebf4e5' }}>
              Informasi Lokasi
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <div className="w-full h-full" style={{ backgroundColor: '#ebf4e5' }}></div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2" style={{ color: '#ebf4e5' }}>Alamat</h4>
                  <p className="text-base opacity-80" style={{ color: '#ebf4e5' }}>
                    Jl. Raya Cibubur No. 123, Cibubur, Jakarta Timur
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <div className="w-full h-full" style={{ backgroundColor: '#ebf4e5' }}></div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2" style={{ color: '#ebf4e5' }}>Jam Operasional</h4>
                  <p className="text-base opacity-80" style={{ color: '#ebf4e5' }}>
                    Senin - Minggu: 07:00 - 22:00
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <div className="w-full h-full" style={{ backgroundColor: '#ebf4e5' }}></div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2" style={{ color: '#ebf4e5' }}>Telepon</h4>
                  <p className="text-base opacity-80" style={{ color: '#ebf4e5' }}>
                    +62 812-3456-7890
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Placeholder */}
          <div className="relative">
            <div 
              className="w-full h-96 bg-gray-200 flex items-center justify-center"
              style={{ backgroundColor: '#f5f5f5' }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">🗺️</div>
                <h4 className="text-lg font-semibold mb-2" style={{ color: '#2e4d3d' }}>
                  Google Maps
                </h4>
                <p className="text-sm opacity-70" style={{ color: '#2e4d3d' }}>
                  Cibubur, Jakarta Timur
                </p>
                <p className="text-xs mt-2 opacity-50" style={{ color: '#2e4d3d' }}>
                  Interactive map akan ditambahkan
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
