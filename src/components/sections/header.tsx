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
    { name: 'SENSITIV IMAGO', href: '/p/sensitiv-imago' },
    { name: 'Clinical Nutrition', href: '/search/label/Clinical Nutrition' },
    { name: 'Diet Coaching', href: '/search/label/Diet Coaching' },
    { name: 'Healthy Life Style', href: '/search/label/Healthy Life Style' },
    { name: 'Συνταγές Δύναμης', href: '/search/label/Συνταγές Δύναμης' },
    { name: 'Ολιστική Εφαρμογή', href: '/search/label/Ολιστική Εφαρμογή' },
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
      {/* Hero Section */}
      <header className="relative w-full">
        {/* Stunning Hero Banner */}
        <div className="relative h-[55vh] min-h-[400px] max-h-[600px] overflow-hidden">
          {/* Hero Image from Unsplash - High quality wellness/nutrition imagery */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop')`,
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
              {/* Subtle Pre-title */}
              <motion.p 
                className="text-white/80 font-medium tracking-[0.3em] uppercase text-xs md:text-sm mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Clinical Nutrition & Holistic Health
              </motion.p>
              
              {/* Main Title */}
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold text-white tracking-tight"
                style={{ textShadow: '0 4px 30px rgba(0,0,0,0.3)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Diet Web
              </motion.h1>

              {/* Elegant Divider */}
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

              {/* Tagline */}
              <motion.p 
                className="text-white/90 text-lg md:text-xl font-serif max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Ολιστική Προσέγγιση στη Διατροφή & Ευεξία
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
                className={`font-display text-xl font-semibold text-teal-700 transition-all duration-300 ${
                  isScrolled ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none md:pointer-events-auto md:opacity-100 md:translate-x-0'
                }`}
              >
                Diet Web
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
                              ? 'text-teal-700 bg-teal-50' 
                              : 'text-gray-600 hover:text-teal-700 hover:bg-gray-50'
                          }`}
                        >
                          {item.name}
                          {isActive && (
                            <motion.div
                              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-teal-500"
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
                  className="p-2 text-gray-500 hover:text-teal-600 hover:bg-gray-100 rounded-full transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Search className="w-5 h-5" />
                </motion.button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-2 text-gray-500 hover:text-teal-600 hover:bg-gray-100 rounded-full transition-colors"
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
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden border-t border-gray-100 bg-white overflow-hidden"
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
                              ? 'text-teal-700 bg-teal-50' 
                              : 'text-gray-600 hover:text-teal-700 hover:bg-gray-50'
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
                >
                  <Search className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  <input
                    type="text"
                    name="q"
                    placeholder="Αναζήτηση άρθρων..."
                    className="flex-1 text-lg outline-none placeholder:text-gray-400"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
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
