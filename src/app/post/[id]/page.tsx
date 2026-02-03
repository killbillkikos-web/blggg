"use client";

import { useEffect, useState } from "react";
import Header from "@/components/sections/header";
import Sidebar from "@/components/sections/sidebar";
import Credits from "@/components/sections/credits";
import content from "@/lib/content.json";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, Tag, ArrowLeft, Share2, Twitter, Facebook, Linkedin, ChevronUp } from "lucide-react";

export default function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const [id, setId] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    params.then(p => setId(p.id));
  }, [params]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!id) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-teal-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const post = content.posts.find(p => p.id.endsWith(id));

  if (!post) {
    notFound();
  }

  const date = new Date(post.published);
  const formattedDate = date.toLocaleDateString('el-GR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const formattedTime = date.toLocaleTimeString('el-GR', {
    hour: 'numeric',
    minute: '2-digit'
  });

  // Extract first image for hero
  const imgMatch = post.content.match(/<img.*?src="(.*?)"/);
  const heroImage = imgMatch ? imgMatch[1] : null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      
      {/* Article Hero */}
      {heroImage && (
        <div className="relative h-[40vh] min-h-[300px] max-h-[500px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
        </div>
      )}
      
      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Article */}
          <motion.article 
            className="flex-1 min-w-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Back Link */}
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-teal-600 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Πίσω στην αρχική
            </Link>

            {/* Article Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Article Header */}
              <div className="p-6 md:p-10 pb-0">
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-teal-600" />
                    <time dateTime={post.published}>{formattedDate}</time>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-teal-600" />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-gray-900 leading-tight mb-6">
                  {post.title}
                </h1>

                {/* Labels/Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.labels.map((label) => (
                    <Link
                      key={label}
                      href={`/search/label/${label}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-teal-50 text-teal-700 text-xs font-medium rounded-full hover:bg-teal-100 transition-colors"
                    >
                      <Tag className="w-3 h-3" />
                      {label}
                    </Link>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none p-6 md:p-10 pt-8"
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={{
                  fontFamily: "'Source Serif 4', Georgia, serif",
                }}
              />

              {/* Article Footer */}
              <div className="p-6 md:p-10 pt-0">
                <div className="border-t border-gray-100 pt-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    {/* Share Buttons */}
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500">Μοιραστείτε:</span>
                      <div className="flex items-center gap-2">
                        <motion.button 
                          onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`, '_blank')}
                          className="p-3 bg-gray-50 text-gray-500 hover:bg-[#1DA1F2] hover:text-white rounded-full transition-all"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Twitter className="w-4 h-4" />
                        </motion.button>
                        <motion.button 
                          onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                          className="p-3 bg-gray-50 text-gray-500 hover:bg-[#4267B2] hover:text-white rounded-full transition-all"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Facebook className="w-4 h-4" />
                        </motion.button>
                        <motion.button 
                          onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                          className="p-3 bg-gray-50 text-gray-500 hover:bg-[#0077B5] hover:text-white rounded-full transition-all"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Linkedin className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Author & Time */}
                    <p className="text-sm text-gray-500 italic">
                      Αναρτήθηκε από <span className="text-gray-700 font-medium">{post.author}</span> στις {formattedTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
          
          {/* Sidebar */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Sidebar />
          </div>
        </div>
      </main>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 bg-teal-600 text-white rounded-full shadow-lg transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronUp className="w-5 h-5" />
      </motion.button>

      <Credits />
    </div>
  );
}
