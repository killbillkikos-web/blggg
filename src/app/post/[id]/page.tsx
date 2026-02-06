"use client";

import { useEffect, useState, useCallback } from "react";
import Header from "@/components/sections/header";
import Sidebar from "@/components/sections/sidebar";
import Credits from "@/components/sections/credits";
import content from "@/lib/content.json";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, Tag, ArrowLeft, Twitter, Facebook, Linkedin, ChevronUp, Clock } from "lucide-react";

interface Post {
  id: string;
  published: string;
  title: string;
  content: string;
  author: string;
  labels: string[];
}

interface Article {
  id: string;
  title: string;
  content: string;
  imageUrl: string | null;
  published: string;
  author: string;
  labels: string[];
  createdAt: string;
}

// Convert database article to Post format
function articleToPost(article: Article): Post {
  let contentWithImage = article.content;
  if (article.imageUrl && !article.content.includes("<img")) {
    contentWithImage = `<img src="${article.imageUrl}" alt="${article.title}" />${article.content}`;
  }
  
  return {
    id: article.id,
    published: article.published,
    title: article.title,
    content: contentWithImage,
    author: article.author,
    labels: article.labels,
  };
}

export default function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const [id, setId] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [dbArticles, setDbArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    params.then(p => setId(p.id));
  }, [params]);

  // Fetch database articles
  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch("/api/articles");
        const data = await response.json();
        if (data.articles) {
          setDbArticles(data.articles);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchArticles();
  }, []);

  const handleScroll = useCallback(() => {
    setShowScrollTop(window.scrollY > 500);
    
    // Calculate reading progress
    const article = document.querySelector('article');
    if (article) {
      const articleTop = article.offsetTop;
      const articleHeight = article.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      
      const progress = Math.min(
        100,
        Math.max(0, ((scrollY - articleTop + windowHeight * 0.3) / articleHeight) * 100)
      );
      setReadingProgress(progress);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (!id || isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-teal-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // First, try to find in database articles
  const dbArticle = dbArticles.find(a => a.id === id || a.id.endsWith(id));
  
  // Then try legacy content.json
  const legacyPost = content.posts.find(p => p.id.endsWith(id));
  
  // Use database article if found, otherwise use legacy post
  const post: Post | undefined = dbArticle ? articleToPost(dbArticle) : legacyPost;

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

  // Calculate reading time (average 200 words per minute for Greek text)
  const calculateReadingTime = (htmlContent: string) => {
    const textContent = htmlContent.replace(/<[^>]*>/g, '');
    const wordCount = textContent.split(/\s+/).filter(word => word.length > 0).length;
    const readingTime = Math.ceil(wordCount / 200);
    return readingTime;
  };

  const readingTime = calculateReadingTime(post.content);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100/50">
      {/* Reading Progress Bar */}
      <div 
        className="reading-progress"
        style={{ width: `${readingProgress}%` }}
      />
      
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
      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-emerald-600 transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Πίσω στην αρχική
            </Link>

            {/* Article Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden article-card">
              {/* Article Header */}
              <div className="p-6 md:p-10 pb-0">
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-emerald-600" />
                    <span>{post.author}</span>
                  </div>
                  {/* Reading Time */}
                  <div className="reading-time">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{readingTime} λεπτά ανάγνωσης</span>
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
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full hover:bg-emerald-100 transition-colors"
                    >
                      <Tag className="w-3 h-3" />
                      {label}
                    </Link>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-lg p-6 md:p-10 pt-8"
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={{
                  fontFamily: "'Source Serif 4', Georgia, serif",
                }}
              />

              {/* Article Footer */}
              <div className="p-6 md:p-10 pt-0">
                <div className="border-t border-stone-100 pt-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    {/* Share Buttons */}
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500">Μοιραστείτε:</span>
                      <div className="flex items-center gap-2">
                        <motion.button 
                          onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`, '_blank')}
                          className="w-11 h-11 flex items-center justify-center bg-stone-50 text-gray-500 hover:bg-[#1DA1F2] hover:text-white rounded-full transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="Μοιραστείτε στο Twitter"
                        >
                          <Twitter className="w-4 h-4" />
                        </motion.button>
                        <motion.button 
                          onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                          className="w-11 h-11 flex items-center justify-center bg-stone-50 text-gray-500 hover:bg-[#4267B2] hover:text-white rounded-full transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="Μοιραστείτε στο Facebook"
                        >
                          <Facebook className="w-4 h-4" />
                        </motion.button>
                        <motion.button 
                          onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                          className="w-11 h-11 flex items-center justify-center bg-stone-50 text-gray-500 hover:bg-[#0077B5] hover:text-white rounded-full transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="Μοιραστείτε στο LinkedIn"
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
        className={`fixed bottom-8 right-8 p-4 bg-emerald-600 text-white rounded-full shadow-lg transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Πίσω στην κορυφή"
      >
        <ChevronUp className="w-5 h-5" />
      </motion.button>

      <Credits />
    </div>
  );
}
