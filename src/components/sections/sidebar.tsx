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
      {/* Search Widget */}
      <motion.section 
        variants={itemVariants}
        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
      >
        <div className="flex items-center gap-2 mb-4">
          <Search className="w-5 h-5 text-teal-600" />
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Αναζήτηση σε αυτό το ιστολόγιο
          </h2>
        </div>
        <form onSubmit={handleSearch} className="relative">
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-50 border-2 border-transparent rounded-xl px-4 py-3 pr-12 text-sm placeholder:text-gray-400 focus:border-teal-500 focus:bg-white focus:outline-none transition-all"
            placeholder="Αναζήτηση..."
          />
          <button 
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-teal-600 transition-colors"
          >
            <Search className="w-4 h-4" />
          </button>
        </form>
      </motion.section>

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
          
          <h2 className="text-lg font-semibold mb-1">
            ΟΛΙΣΤΙΚΟΣ ΕΛΕΓΧΟΣ
          </h2>
          <p className="text-teal-100 text-sm mb-4">
            ΜΕ ΤΗΝ ΜΕΘΟΔΟ SENSITIV IMAGO
          </p>
          
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <p className="font-semibold text-lg mb-1">Κατερίνα Μηστριώτη</p>
            <p className="text-teal-100 text-sm mb-3">
              Σύμβουλος Κλινικής Διατροφολογίας<br />& Ολιστικών Εφαρμογών
            </p>
            <p className="text-teal-200 text-xs leading-relaxed">
              Εθνικό & Καποδιστριακό Πανεπιστήμιο Αθηνών<br />
              Natural Health Science College Manchester<br />
              Metropolitan University
            </p>
          </div>
          
          <div className="mt-5 space-y-2">
            <a 
              href="tel:6975301223"
              className="flex items-center justify-center gap-2 text-white hover:text-teal-100 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">6975 30 1223</span>
            </a>
            <a 
              href="mailto:k.mistrioti@yahoo.gr" 
              className="flex items-center justify-center gap-2 text-teal-100 hover:text-white transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>k.mistrioti@yahoo.gr</span>
            </a>
          </div>
        </div>
      </motion.section>

      {/* Information Widget */}
      <motion.section 
        variants={itemVariants}
        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
      >
        <div className="flex items-center gap-2 mb-4">
          <User className="w-5 h-5 text-teal-600" />
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Πληροφορίες
          </h2>
        </div>
        <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5 text-orange-500" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">Katerina Mistrioti</p>
            <a 
              href="mailto:mistrioti@gmail.com" 
              className="text-sm text-teal-600 hover:text-teal-700 transition-colors"
            >
              mistrioti@gmail.com
            </a>
          </div>
        </div>
        <a 
          href="#" 
          className="inline-flex items-center gap-1 mt-4 text-sm text-teal-600 hover:text-teal-700 font-medium transition-colors"
        >
          Προβολή πλήρους προφίλ
          <ExternalLink className="w-3 h-3" />
        </a>
      </motion.section>

      {/* Blog Archive List */}
      <motion.section 
        variants={itemVariants}
        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
      >
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-teal-600" />
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Αρχειοθήκη ιστολογίου
          </h2>
        </div>
        <div className="space-y-2">
          {Object.keys(archive).sort().reverse().map(year => {
            const isYearExpanded = expandedYears.includes(year);
            const yearPostCount = Object.values(archive[year]).reduce((acc, val) => acc + val.length, 0);
            
            return (
              <div key={year} className="rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleYear(year)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-stone-50 hover:bg-stone-100 transition-colors rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-inset"
                  aria-expanded={isYearExpanded}
                  aria-controls={`archive-year-${year}`}
                >
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: isYearExpanded ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                      aria-hidden="true"
                    >
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </motion.div>
                    <span className="font-semibold text-gray-700">{year}</span>
                  </div>
                  <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                    {yearPostCount}
                  </span>
                </button>
                
                <AnimatePresence>
                  {isYearExpanded && (
                    <motion.div
                      id={`archive-year-${year}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-6 py-2 space-y-1">
                        {Object.keys(archive[year]).sort().reverse().map(month => {
                          const monthKey = `${year}-${month}`;
                          const isMonthExpanded = expandedMonths.includes(monthKey);
                          
                          return (
                            <div key={month}>
                              <button
                                onClick={() => toggleMonth(monthKey)}
                                className="w-full flex items-center justify-between px-3 py-2 hover:bg-stone-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-inset"
                                aria-expanded={isMonthExpanded}
                                aria-controls={`archive-month-${monthKey}`}
                              >
                                <div className="flex items-center gap-2">
                                  <motion.div
                                    animate={{ rotate: isMonthExpanded ? 90 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    aria-hidden="true"
                                  >
                                    <ChevronRight className="w-3 h-3 text-gray-400" />
                                  </motion.div>
                                  <span className="text-sm text-gray-600">{month}</span>
                                </div>
                                <span className="text-xs text-gray-400">
                                  ({archive[year][month].length})
                                </span>
                              </button>
                              
                              <AnimatePresence>
                                {isMonthExpanded && (
                                  <motion.div
                                    id={`archive-month-${monthKey}`}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="pl-6 space-y-1 overflow-hidden"
                                  >
                                    {archive[year][month].map((post: any) => (
                                      <Link 
                                        key={post.id}
                                        href={`/post/${post.id.split('-').pop()}`} 
                                        className="block py-2 px-3 text-sm text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors line-clamp-1"
                                      >
                                        {post.title}
                                      </Link>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.section>

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
