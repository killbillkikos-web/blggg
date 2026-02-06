"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Mail, 
  Phone, 
  ChevronDown, 
  ChevronRight,
  User,
  Calendar,
  TrendingUp,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import content from '@/lib/content.json';

const Sidebar = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedYears, setExpandedYears] = useState<string[]>([]);
  const [expandedMonths, setExpandedMonths] = useState<string[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // Get popular posts (taking top 5 for simplicity)
  const popularPosts = content.posts.slice(0, 5);

  // Group posts by year/month for archive
  const archive = React.useMemo(() => {
    const data: { [year: string]: { [month: string]: any[] } } = {};
    const monthNames = [
      'Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου',
      'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου'
    ];

    content.posts.forEach(post => {
      const date = new Date(post.published);
      const year = date.getFullYear().toString();
      const monthIdx = date.getMonth();
      const monthName = monthNames[monthIdx];
      
      if (!data[year]) data[year] = {};
      if (!data[year][monthName]) data[year][monthName] = [];
      data[year][monthName].push(post);
    });
    return data;
  }, []);

  const toggleYear = (year: string) => {
    setExpandedYears(prev => 
      prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year]
    );
  };

  const toggleMonth = (monthKey: string) => {
    setExpandedMonths(prev => 
      prev.includes(monthKey) ? prev.filter(m => m !== monthKey) : [...prev, monthKey]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.aside 
      className="w-full lg:w-[360px] flex flex-col gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Search widget removed per request */}

      {/* Contact Info Widget */}
      <motion.section 
        variants={itemVariants}
        className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-6 shadow-lg text-white overflow-hidden relative"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-400/20 rounded-full blur-xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          
          <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm mb-4">
            <p className="font-semibold text-2xl mb-2">Κατερίνα Μηστριώτη</p>
            <p className="text-teal-100 text-base md:text-lg mb-3">
              BSc (Hons), MSc<br />
              Well Being Consultant
            </p>
            <p className="text-teal-200 text-sm md:text-base leading-relaxed mb-3">
              Δημιουργία και Εφαρμογή Ολιστικών Προγραμμάτων Ευεξίας
            </p>
            <div className="border-t border-white/20 pt-3">
              <p className="text-teal-200 text-sm md:text-base leading-relaxed">
                Εθνικό & Καποδιστριακό Πανεπιστήμιο Αθηνών<br />
                Natural Health Science College Manchester<br />
                Metropolitan University
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-2">
            <a 
              href="tel:6975301223"
              className="flex items-center justify-center gap-2 text-white hover:text-teal-100 transition-colors text-base"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">6975 30 1223</span>
            </a>

            {/* Moved title lines, email removed */}
            <div className="mt-3 text-center">
              <h3 className="text-base md:text-lg font-semibold text-white leading-tight">
                ΟΛΙΣΤΙΚΟΣ ΕΛΕΓΧΟΣ<br />
                <span className="text-teal-100 font-bold">SENSITIV IMAGO</span>
              </h3>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Information Widget - REMOVED */}

      {/* Blog Archive List - REMOVED */}

      {/* Popular Posts */}
      <motion.section 
        variants={itemVariants}
        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
      >
        <div className="flex items-center gap-2 mb-5">
          <TrendingUp className="w-5 h-5 text-teal-600" />
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Δημοφιλείς αναρτήσεις
          </h2>
        </div>
        <div className="space-y-4">
          {popularPosts.map((post, index) => {
            const imgMatch = post.content.match(/<img.*?src="(.*?)"/);
            const imgSrc = imgMatch ? imgMatch[1] : null;
            
            // Decode HTML entities
            const decodeHtmlEntities = (text: string) => {
              let decoded = text;
              
              // First pass: decode double-encoded entities (e.g., &amp;nbsp; -> &nbsp;)
              decoded = decoded.replace(/&amp;/gi, '&');
              
              const entities: { [key: string]: string } = {
                '&nbsp;': ' ',
                '&amp;': '&',
                '&lt;': '<',
                '&gt;': '>',
                '&quot;': '"',
                '&#39;': "'",
                '&apos;': "'",
                '&ndash;': '–',
                '&mdash;': '—',
              };
              Object.keys(entities).forEach(entity => {
                decoded = decoded.replace(new RegExp(entity, 'gi'), entities[entity]);
              });
              
              // Handle numeric HTML entities
              decoded = decoded.replace(/&#(\d+);/g, (match, num) => {
                return String.fromCharCode(parseInt(num, 10));
              });
              
              return decoded.replace(/\s+/g, ' ').trim();
            };
            
            const textContent = decodeHtmlEntities(post.content.replace(/<[^>]*>/g, ''));
            
            return (
              <motion.article 
                key={post.id} 
                className="group"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  href={`/post/${post.id.split('-').pop()}`}
                  className="flex gap-4 p-3 -mx-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  {imgSrc && (
                    <div className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden bg-gray-100">
                      <img 
                        src={imgSrc}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-800 group-hover:text-teal-700 transition-colors line-clamp-2 leading-snug mb-1">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {textContent.substring(0, 80)}...
                    </p>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </motion.section>
    </motion.aside>
  );
};

export default Sidebar;
