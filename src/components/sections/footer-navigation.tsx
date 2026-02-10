"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowRight, Rss } from 'lucide-react';

const FooterNavigation = () => {
  return (
    <motion.div 
      className="max-w-4xl mx-auto px-4 py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Pagination */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <div className="flex justify-between items-center">
          {/* Home Link */}
          <Link 
            href="/"
            className="flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: '#0c06f7' }}
          >
            <Home className="w-4 h-4" />
            Αρχική σελίδα
          </Link>

          {/* Older Posts */}
          <Link 
            href="/"
            className="flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: '#0c06f7' }}
          >
            Παλαιότερες αναρτήσεις
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
      
      {/* Subscription Link */}
      <div className="text-center">
        <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
          <Rss className="w-4 h-4 text-orange-500" />
          Εγγραφή σε: 
          <a 
            href="https://well-being.blogspot.com/feeds/posts/default" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-medium transition-colors hover:opacity-70"
            style={{ color: '#0c06f7' }}
          >
            Σχόλια (Atom)
          </a>
        </p>
      </div>
    </motion.div>
  );
};

export default FooterNavigation;
