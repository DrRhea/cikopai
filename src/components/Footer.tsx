'use client';

import { useEffect, useRef } from 'react';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (footerRef.current) {
              footerRef.current.style.opacity = '1';
              footerRef.current.style.transform = 'translateY(0)';
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="py-16"
      style={{ 
        backgroundColor: '#2e4d3d',
        opacity: 0,
        transform: 'translateY(32px)',
        transition: 'all 0.8s ease-out'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#ebf4e5' }}>
              Cikopai
            </h3>
            <p className="text-base leading-relaxed opacity-80" style={{ color: '#ebf4e5' }}>
              Doa Heula Sateuacan Ngopi
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4" style={{ color: '#ebf4e5' }}>
              Hubungi Kami
            </h4>
            <div className="space-y-2">
              <p className="text-sm opacity-80" style={{ color: '#ebf4e5' }}>
                📍 Jl. Kopi No. 123, Jakarta
              </p>
              <p className="text-sm opacity-80" style={{ color: '#ebf4e5' }}>
                📞 +62 812-3456-7890
              </p>
              <p className="text-sm opacity-80" style={{ color: '#ebf4e5' }}>
                ✉️ hello@cikopai.com
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4" style={{ color: '#ebf4e5' }}>
              Jam Operasional
            </h4>
            <div className="space-y-1">
              <p className="text-sm opacity-80" style={{ color: '#ebf4e5' }}>
                Senin - Jumat: 07:00 - 22:00
              </p>
              <p className="text-sm opacity-80" style={{ color: '#ebf4e5' }}>
                Sabtu - Minggu: 08:00 - 23:00
              </p>
            </div>
          </div>
        </div>


        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm opacity-60" style={{ color: '#ebf4e5' }}>
            © 2025 Cikopai. All rights reserved. Made with ❤️ by XTRAHERA.
          </p>
        </div>
      </div>
    </footer>
  );
}
