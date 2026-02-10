"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search } from 'lucide-react';

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { name: 'Articles', href: '/category/articles' },
    { name: 'Healthy Life Style', href: '/category/healthy-life-style' },
    { name: 'Συνταγές Δύναμης', href: '/category/syntagés-dýnamis' },
    { name: 'Sensitiv Imago', href: '/category/sensitiv-imago' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Skip to Content Link - Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:text-white focus:rounded-lg focus:outline-none"
                style={{ '--tw-bg-opacity': 1, backgroundColor: '#0c06f7' } as any}
      >
        Μετάβαση στο περιεχόμενο
      </a>

      {/* Hero Section */}
      <header className="relative w-full" role="banner">
        {/* Stunning Hero Banner */}
        <div className="relative h-[55vh] min-h-[400px] max-h-[600px] overflow-hidden">
          {/* Hero Image - Local public image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/hero_section.png')`,
            }}
          />
          
          {/* Elegant Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-blue-900/5" />
          
          {/* Animated Decorative Elements */}
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl"
            style={{ backgroundColor: 'rgba(12, 6, 247, 0.05)' }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: 'rgba(12, 6, 247, 0.08)' }}
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Hero Content */}
          <div className="relative z-10 h-full px-4">
            {/* Top-left title - in white background area */}
            <motion.h1
              className="absolute font-semibold tracking-tight origin-center"
              style={{ 
                fontFamily: 'Constantia, serif',
                color: '#0c06f7',
                textShadow: 'none',
                fontSize: 'clamp(48px, 8vw, 90px)',
                top: '15%',
                left: '10%',
                transform: 'none'
              }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Well Being
            </motion.h1>

            {/* Bottom-right comment - in white background area */}
            <motion.p
              className="absolute font-semibold origin-center"
              style={{ 
                fontFamily: 'Constantia, serif',
                color: '#0c06f7',
                textShadow: 'none',
                fontSize: 'clamp(28px, 5vw, 56px)',
                bottom: '15%',
                right: '8%',
                transform: 'none',
                whiteSpace: 'nowrap'
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Energy & Vigor
            </motion.p>
          </div>
        </div>

        {/* Navigation Bar */}
        <motion.nav 
          className={`sticky top-0 z-50 transition-all duration-500 ${
            isScrolled 
              ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
              : 'bg-white shadow-sm'
          }`}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-18">
              {/* Logo for Scrolled State */}
              <Link 
                href="/" 
                className={`font-display text-2xl font-semibold transition-all duration-300 ${
                  isScrolled ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none md:pointer-events-auto md:opacity-100 md:translate-x-0'
                }`}
                style={{ color: '#0c06f7', fontFamily: 'Constantia, serif' }}
              >
                Well Being
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center justify-center flex-1 overflow-x-auto">
                <div className="flex items-center gap-0 px-2 whitespace-nowrap">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.href || 
                                   (item.href !== '/' && pathname.startsWith(item.href)) ||
                                   (item.href !== '/' && decodeURIComponent(pathname).startsWith(item.href));
                    
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                      >
                        <Link 
                          href={item.href} 
                          className={`relative px-3 py-2 text-sm lg:text-base xl:text-lg font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
                            isActive 
                              ? 'bg-blue-50' 
                              : 'text-gray-600 hover:text-gray-800 hover:bg-stone-50'
                          }`}
                          style={{
                            color: isActive ? '#0c06f7' : undefined
                          }}
                        >
                          {item.name}
                          {isActive && (
                            <motion.div
                              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500"
                              style={{ backgroundColor: '#0c06f7' }}
                              layoutId="activeIndicator"
                            />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-center gap-3">
                <motion.button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-gray-500 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{ '--tw-ring-color': '#0c06f7' } as any}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Άνοιγμα αναζήτησης"
                >
                  <Search className="w-5 h-5" />
                </motion.button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-2 text-gray-500 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{ '--tw-ring-color': '#0c06f7' } as any}
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-menu"
                  aria-label={isMobileMenuOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
                >
                  {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden border-t border-gray-100 bg-white overflow-hidden"
                role="navigation"
                aria-label="Κινητό μενού πλοήγησης"
              >
                <div className="px-4 py-4 space-y-1">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.href || 
                                   (item.href !== '/' && pathname.startsWith(item.href)) ||
                                   (item.href !== '/' && decodeURIComponent(pathname).startsWith(item.href));
                    
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * index }}
                      >
                        <Link 
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block px-4 py-3 rounded-xl text-base md:text-lg font-medium transition-all ${
                            isActive 
                              ? 'bg-blue-50' 
                              : 'text-gray-600 hover:text-gray-800 hover:bg-stone-50'
                          }`}
                          style={{
                            color: isActive ? '#0c06f7' : undefined
                          }}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* Search Overlay */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-[20vh]"
              onClick={() => setIsSearchOpen(false)}
              role="dialog"
              aria-modal="true"
              aria-label="Αναζήτηση"
            >
              <motion.div
                initial={{ opacity: 0, y: -50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <form 
                  action="/search" 
                  method="GET"
                  className="flex items-center p-4 gap-4"
                  role="search"
                >
                  <Search className="w-6 h-6 text-gray-400 flex-shrink-0" aria-hidden="true" />
                  <input
                    type="text"
                    name="q"
                    placeholder="Αναζήτηση άρθρων..."
                    className="flex-1 text-lg outline-none placeholder:text-gray-400"
                    autoFocus
                    aria-label="Αναζήτηση άρθρων"
                  />
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2"
                    style={{ '--tw-ring-color': '#0c06f7' } as any}
                    aria-label="Κλείσιμο αναζήτησης"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </form>
                <div className="px-4 pb-4">
                  <p className="text-xs text-gray-400">
                    Πατήστε Enter για αναζήτηση ή ESC για κλείσιμο
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
