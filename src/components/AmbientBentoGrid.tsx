'use client';

import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
import { useEffect, useRef } from 'react';

export default function GalleryBentoGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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
            
            // Animate grid items with stagger effect
            if (gridRef.current) {
              const gridItems = gridRef.current.children;
              Array.from(gridItems).forEach((item, index) => {
                setTimeout(() => {
                  (item as HTMLElement).style.opacity = '1';
                  (item as HTMLElement).style.transform = 'translateY(0) scale(1)';
                }, index * 150); // Stagger delay 150ms per item
              });
            }
          }
        });
      },
      { threshold: 0.2 }
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
      id="gallery" 
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
            The Ambiance
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#2e4d3d' }}>
            Suasana hangat dan nyaman yang membuat setiap kunjungan terasa istimewa
          </p>
        </div>
        
        <div 
          ref={gridRef}
          className="max-w-6xl mx-auto"
        >
          <BentoGrid className="md:auto-rows-[20rem]">
            {ambientItems.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={item.className}
                icon={item.icon}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}

// Custom Image Component for Bento Grid
const AmbientImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
  <div className={cn("relative overflow-hidden rounded-xl", className)}>
    <Image
      src={src}
      alt={alt}
      width={600}
      height={400}
      className="w-full h-full object-cover group-hover/bento:scale-105 transition-transform duration-500"
    />
  </div>
);

const ambientItems = [
  {
    title: "",
    description: "",
    header: (
      <AmbientImage 
        src="/images/ambiance/cikopai-cafe-interior.jpg" 
        alt="Cikopai Cafe Interior" 
        className="h-full"
      />
    ),
    className: "md:col-span-2",
    icon: null,
  },
  {
    title: "",
    description: "",
    header: (
      <AmbientImage 
        src="/images/ambiance/cikopai-cozy-atmosphere.jpg" 
        alt="Cikopai Cozy Atmosphere" 
        className="h-full"
      />
    ),
    className: "md:col-span-1",
    icon: null,
  },
  {
    title: "",
    description: "",
    header: (
      <AmbientImage 
        src="/images/ambiance/cikopai-social-gathering.jpg" 
        alt="Cikopai Social Gathering" 
        className="h-full"
      />
    ),
    className: "md:col-span-1",
    icon: null,
  },
  {
    title: "",
    description: "",
    header: (
      <AmbientImage 
        src="/images/ambiance/cikopai-customer-experience.jpg" 
        alt="Cikopai Customer Experience" 
        className="h-full"
      />
    ),
    className: "md:col-span-2",
    icon: null,
  },
];
