'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'shadow-lg' 
        : 'bg-transparent'
    }`} style={isScrolled ? { backgroundColor: '#2e4d3d' } : {}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className={`text-2xl font-bold transition-colors ${
                isScrolled 
                  ? 'hover:text-amber-300' 
                  : 'text-white hover:text-amber-300'
              }`}
              style={isScrolled ? { color: '#ebf4e5' } : {}}
            >
              Cikopai
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isScrolled 
                    ? 'hover:text-amber-300' 
                    : 'text-white hover:text-amber-300'
                }`}
                style={isScrolled ? { color: '#ebf4e5' } : {}}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('signature-menu')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isScrolled 
                    ? 'hover:text-amber-300' 
                    : 'text-white hover:text-amber-300'
                }`}
                style={isScrolled ? { color: '#ebf4e5' } : {}}
              >
                Signature Menu
              </button>
              <button
                onClick={() => scrollToSection('the-story')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isScrolled 
                    ? 'hover:text-amber-300' 
                    : 'text-white hover:text-amber-300'
                }`}
                style={isScrolled ? { color: '#ebf4e5' } : {}}
              >
                The Story
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isScrolled 
                    ? 'hover:text-amber-300' 
                    : 'text-white hover:text-amber-300'
                }`}
                style={isScrolled ? { color: '#ebf4e5' } : {}}
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isScrolled 
                    ? 'hover:text-amber-300' 
                    : 'text-white hover:text-amber-300'
                }`}
                style={isScrolled ? { color: '#ebf4e5' } : {}}
              >
                Location
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`focus:outline-none transition-colors ${
                isScrolled 
                  ? 'hover:text-amber-300 focus:text-amber-300' 
                  : 'text-white hover:text-amber-300 focus:text-amber-300'
              }`}
              style={isScrolled ? { color: '#ebf4e5' } : {}}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-amber-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('signature-menu')}
                className="text-gray-700 hover:text-amber-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Signature Menu
              </button>
              <button
                onClick={() => scrollToSection('the-story')}
                className="text-gray-700 hover:text-amber-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                The Story
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 hover:text-amber-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="text-gray-700 hover:text-amber-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Location
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
