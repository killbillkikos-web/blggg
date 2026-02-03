"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, ExternalLink, ArrowUp } from 'lucide-react';

/**
 * Credits Component
 * 
 * Modern footer with elegant design while preserving original attribution text.
 */

const Credits: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: 'Αρχική σελίδα', href: '/' },
    { name: 'SENSITIV IMAGO', href: '/p/sensitiv-imago' },
    { name: 'Clinical Nutrition', href: '/search/label/Clinical Nutrition' },
    { name: 'Diet Coaching', href: '/search/label/Diet Coaching' },
  ];

  return (
    <footer className="relative mt-20">
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-600" />
      
      {/* Main Footer Content */}
      <div className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Upper Footer */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <Link href="/" className="inline-block">
                <h3 className="text-2xl font-display font-semibold text-white mb-3">
                  Diet Web
                </h3>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Ολιστική Προσέγγιση στη Διατροφή & Ευεξία. 
                Clinical Nutrition & Holistic Health Applications.
              </p>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                <span>in Greece</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
                Γρήγορη Πλοήγηση
              </h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href}
                      className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
                Επικοινωνία
              </h4>
              <div className="space-y-3 text-sm">
                <p className="text-gray-300 font-medium">Κατερίνα Μηστριώτη</p>
                <p className="text-gray-400">Σύμβουλος Κλινικής Διατροφολογίας</p>
                <a 
                  href="tel:6975301223" 
                  className="block text-teal-400 hover:text-teal-300 transition-colors"
                >
                  6975 30 1223
                </a>
                <a 
                  href="mailto:k.mistrioti@yahoo.gr" 
                  className="block text-teal-400 hover:text-teal-300 transition-colors"
                >
                  k.mistrioti@yahoo.gr
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800" />

          {/* Lower Footer - Credits */}
          <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              Θέμα Φανταστικό Α.Ε.. Από το{' '}
              <a 
                href="https://www.blogger.com" 
                className="text-teal-500 hover:text-teal-400 transition-colors inline-flex items-center gap-1"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Blogger
                <ExternalLink className="w-3 h-3" />
              </a>
              .
            </p>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-teal-600 rounded-full text-sm text-gray-400 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Πίσω στην κορυφή</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Credits;
