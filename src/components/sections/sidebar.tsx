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
      className="w-full lg:max-w-[420px] flex flex-col gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Search widget removed per request */}

      {/* Contact Info Widget */}
      <motion.section 
        variants={itemVariants}
        className="rounded-2xl shadow-lg overflow-visible relative"
        style={{ backgroundColor: '#e4e8f3', padding: '28px' }}
      >
        <div className="relative z-10 text-center">
          <div className="rounded-xl backdrop-blur-sm" style={{ backgroundColor: 'white', padding: '28px' }}>
            {/* Logo Image */}
            <div style={{ marginBottom: '16px' }}>
              <img 
                src="/lotus.png" 
                alt="Logo" 
                style={{ 
                  width: '90px', 
                  height: '90px', 
                  margin: '0 auto',
                  display: 'block'
                }} 
              />
            </div>
            
            <div style={{ color: '#0c06f7', fontFamily: 'Constantia, serif', lineHeight: '1.8', fontSize: '16px' }}>
              <p className="font-semibold" style={{ fontSize: '20px', marginBottom: '4px' }}>Κατερίνα Μηστριώτη</p>
              <p style={{ marginBottom: '2px' }}>BSc (Hons), MSc</p>
              <p style={{ marginBottom: '8px' }}>Well Being Consultant</p>
              
              <p style={{ marginBottom: '2px' }}>Δημιουργία και Εφαρμογή</p>
              <p style={{ marginBottom: '8px' }}>Ολιστικών Προγραμμάτων Ευεξίας</p>
              
              <div className="border-t my-2" style={{ borderColor: '#0c06f7' }}></div>
              
              <p style={{ marginBottom: '2px', whiteSpace: 'nowrap' }}>Εθνικό & Καποδιστριακό Πανεπιστήμιο Αθηνών</p>
              <p style={{ marginBottom: '2px' }}>Natural Health Science College Manchester</p>
              <p style={{ marginBottom: '8px' }}>Metropolitan University</p>
              
              <div className="border-t my-2" style={{ borderColor: '#0c06f7' }}></div>
              
              <p className="font-semibold" style={{ marginBottom: '2px' }}>Τηλ. 6975 30 1223</p>
              <a 
                href="mailto:k.mistrioti@yahoo.gr"
                className="hover:opacity-80 transition-opacity block"
                style={{ color: '#0c06f7', textDecoration: 'underline', marginBottom: '8px' }}
              >
                e-mail: k.mistrioti@yahoo.gr
              </a>
              
              <p className="font-semibold" style={{ marginBottom: '2px' }}>Ολιστικός Έλεγχος</p>
              <p className="font-semibold"><u>SENSITIV IMAGO</u></p>
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
          <TrendingUp className="w-5 h-5" style={{ color: '#0c06f7' }} />
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide" style={{ color: '#0c06f7', fontFamily: 'Constantia, serif' }}>
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
                    <h3 className="text-sm font-semibold text-gray-800 transition-colors line-clamp-2 leading-snug mb-1 hover:opacity-70" style={{ color: '#0c06f7', fontFamily: 'Constantia, serif' }}>
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
