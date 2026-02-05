"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ChevronDown } from 'lucide-react';

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { name: 'Αρχική σελίδα', href: '/' },
    { name: 'Articles', href: '/category/articles' },
    { name: 'Healthy Life Style', href: '/category/healthy-life-style' },
    { name: 'Συνταγές Δύναμης', href: '/category/syntagés-dýnamis' },
    { name: 'Ολιστική Εφαρμογή', href: '/category/olistikí-efarmoghí' },
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
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-emerald-600 focus:text-white focus:rounded-lg focus:outline-none"
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/30 to-emerald-900/20" />
          
          {/* Animated Decorative Elements */}
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Hero Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold text-white tracking-tight"
                style={{ textShadow: '0 4px 30px rgba(0,0,0,0.3)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Well Being
              </motion.h1>

              <motion.div 
                className="flex items-center justify-center gap-4 my-6"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-white/60" />
                <div className="w-2 h-2 rounded-full bg-teal-400" />
                <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-white/60" />
              </motion.div>

              <motion.p 
                className="text-white/90 text-lg md:text-xl font-serif max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Energy & Vigor
              </motion.p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div 
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 8, 0] }}
              transition={{ 
                opacity: { delay: 1.2, duration: 0.5 },
                y: { delay: 1.5, duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <ChevronDown className="w-6 h-6 text-white/70" />
            </motion.div>
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
                className={`font-display text-xl font-semibold text-emerald-700 transition-all duration-300 ${
                  isScrolled ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none md:pointer-events-auto md:opacity-100 md:translate-x-0'
                }`}
              >
                Well Being
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center justify-center flex-1">
                <div className="flex items-center gap-1">
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
                          className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                            isActive 
                              ? 'text-emerald-700 bg-emerald-50' 
                              : 'text-gray-600 hover:text-emerald-700 hover:bg-stone-50'
                          }`}
                        >
                          {item.name}
                          {isActive && (
                            <motion.div
                              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-500"
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
                  className="p-2 text-gray-500 hover:text-emerald-600 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Άνοιγμα αναζήτησης"
                >
                  <Search className="w-5 h-5" />
                </motion.button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-2 text-gray-500 hover:text-emerald-600 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
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
                          className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                            isActive 
                              ? 'text-emerald-700 bg-emerald-50' 
                              : 'text-gray-600 hover:text-emerald-700 hover:bg-stone-50'
                          }`}
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
                    className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
