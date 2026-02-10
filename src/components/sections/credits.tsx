"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

/**
 * Credits Component
 * 
 * Modern footer with elegant design while preserving original attribution text.
 */

const Credits: React.FC = () => {

  const navItems = [
    { name: 'Articles', href: '/category/articles' },
    { name: 'Healthy Life Style', href: '/category/healthy-life-style' },
    { name: 'Συνταγές Δύναμης', href: '/category/syntagés-dýnamis' },
    { name: 'Sensitiv Imago', href: '/category/sensitiv-imago' },
  ];

  return (
    <footer className="relative mt-20">
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r" style={{ backgroundImage: 'linear-gradient(to right, #0c06f7, #0c06f7)' }} />
      
      {/* Main Footer Content */}
      <div style={{ backgroundColor: '#adc8f0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Upper Footer */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <Link href="/" className="inline-block">
                <h3 className="text-2xl font-semibold mb-3" style={{ color: '#0c06f7', fontFamily: 'Constantia, serif' }}>
                  Well Being
                </h3>
              </Link>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#0c06f7', fontFamily: 'Constantia, serif' }}>
                Well Being Δημιουργία και Εφαρμογή ολιστικών προγραμμάτων ευεξίας.
              </p>

            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h4 className="text-base font-semibold uppercase tracking-wide mb-4" style={{ color: '#0c06f7', fontFamily: 'Constantia, serif' }}>
                Γρήγορη Πλοήγηση
              </h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href}
                      className="text-base transition-colors hover:opacity-70"
                      style={{ color: '#0c06f7', fontFamily: 'Constantia, serif' }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1">
              <h4 className="text-base font-semibold uppercase tracking-wide mb-4" style={{ color: '#0c06f7', fontFamily: 'Constantia, serif' }}>
                Επικοινωνία
              </h4>
              <div className="space-y-3 text-base" style={{ color: '#0c06f7', fontFamily: 'Constantia, serif' }}>
                <p className="font-medium">Κατερίνα Μηστριώτη</p>
                <p>Well Being Consultant</p>
                <a 
                  href="tel:6975301223" 
                  className="block transition-opacity hover:opacity-70"
                >
                  6975 30 1223
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t" style={{ borderColor: '#0c06f7' }} />

          {/* Lower Footer */}
          <div className="py-6 flex items-center justify-center">
            {/* Powered By Attribution */}
            <p className="text-sm" style={{ color: '#0c06f7', fontFamily: 'Constantia, serif' }}>
              Powered by{' '}
              <a 
                href="https://devtaskhub.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70 font-medium"
              >
                DevTaskHub.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Credits;
