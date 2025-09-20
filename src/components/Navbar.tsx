'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-gray-900 hover:text-amber-600 transition-colors"
            >
              Cikopai
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('signature-menu')}
                className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Signature Menu
              </button>
              <button
                onClick={() => scrollToSection('the-story')}
                className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                The Story
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Location
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amber-600 focus:outline-none focus:text-amber-600"
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
