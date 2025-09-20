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
                <div className="flex-shrink-0 w-8 h-8 mt-1 flex items-center justify-center">
                  <svg className="w-6 h-6" style={{ color: '#ebf4e5' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2" style={{ color: '#ebf4e5' }}>Alamat</h4>
                  <p className="text-base opacity-80" style={{ color: '#ebf4e5' }}>
                    Jl. Abdulrahman RT.11/RW.5, Cibubur, Kec. Ciracas, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13720
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 mt-1 flex items-center justify-center">
                  <svg className="w-6 h-6" style={{ color: '#ebf4e5' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
              <div>
                  <h4 className="text-lg font-semibold mb-2" style={{ color: '#ebf4e5' }}>Jam Operasional</h4>
                  <p className="text-base opacity-80" style={{ color: '#ebf4e5' }}>
                    Senin - Minggu: 07:00 - 22:00
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 mt-1 flex items-center justify-center">
                  <svg className="w-6 h-6" style={{ color: '#ebf4e5' }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
              </div>
              <div>
                  <h4 className="text-lg font-semibold mb-2" style={{ color: '#ebf4e5' }}>Telepon</h4>
                  <p className="text-base opacity-80" style={{ color: '#ebf4e5' }}>
                    +62 812-3456-7890
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 mt-1 flex items-center justify-center">
                  <svg className="w-6 h-6" style={{ color: '#ebf4e5' }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
              </div>
              <div>
                  <h4 className="text-lg font-semibold mb-2" style={{ color: '#ebf4e5' }}>Email</h4>
                  <p className="text-base opacity-80" style={{ color: '#ebf4e5' }}>
                    info@cikopai.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Google Maps */}
          <div className="relative">
            <div className="w-full h-96 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1234567890123!2d106.1234567890123!3d-6.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJl.%20Abdulrahman%20RT.11%2FRW.5%2C%20Cibubur%2C%20Kec.%20Ciracas%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013720!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cikopai Location - Jl. Abdulrahman RT.11/RW.5, Cibubur, Kec. Ciracas, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13720"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Jl.+Abdulrahman+RT.11%2FRW.5,+Cibubur,+Kec.+Ciracas,+Kota+Jakarta+Timur,+Daerah+Khusus+Ibukota+Jakarta+13720"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium transition-colors hover:opacity-80"
                style={{ 
                  color: '#ebf4e5',
                  backgroundColor: '#2e4d3d',
                  border: '1px solid #ebf4e5'
                }}
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Buka di Google Maps
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
