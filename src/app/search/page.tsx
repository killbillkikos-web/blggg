"use client";

import { useEffect, useState } from "react";
import Header from "@/components/sections/header";
import PostList from "@/components/sections/post-list";
import Sidebar from "@/components/sections/sidebar";
import Credits from "@/components/sections/credits";
import content from "@/lib/content.json";
import { motion } from "framer-motion";
import { Search, FileSearch, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SearchPage({ searchParams }: { searchParams: Promise<{ q: string }> }) {
  const [query, setQuery] = useState<string>('');
  const [filteredPosts, setFilteredPosts] = useState<typeof content.posts>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    searchParams.then(params => {
      const q = params.q?.toLowerCase() || '';
      setQuery(q);
      
      const posts = content.posts.filter(post => 
        post.title.toLowerCase().includes(q) || 
        post.content.toLowerCase().includes(q)
      );
      setFilteredPosts(posts);
      setIsLoading(false);
    });
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      
      {/* Search Results Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-teal-600 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Πίσω στην αρχική
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
          >
            <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center">
              <Search className="w-7 h-7 text-teal-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-display font-semibold text-gray-900">
                Αποτελέσματα αναζήτησης
              </h1>
              <p className="text-gray-500 mt-1">
                {isLoading ? (
                  'Αναζήτηση...'
                ) : (
                  <>
                    Βρέθηκαν <span className="font-semibold text-teal-600">{filteredPosts.length}</span> αποτελέσματα για "<span className="font-medium">{query}</span>"
                  </>
                )}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {isLoading ? (
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-2xl p-8 animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-4" />
                    <div className="h-8 bg-gray-200 rounded w-3/4 mb-4" />
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-100 rounded w-full" />
                      <div className="h-4 bg-gray-100 rounded w-5/6" />
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredPosts.length > 0 ? (
              <PostList posts={filteredPosts} />
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileSearch className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-display font-semibold text-gray-700 mb-3">
                  Δεν βρέθηκαν αποτελέσματα
                </h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Δεν βρέθηκαν αποτελέσματα για την αναζήτησή σας. Δοκιμάστε διαφορετικούς όρους αναζήτησης.
                </p>
                <Link 
                  href="/"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition-colors"
                >
                  Επιστροφή στην αρχική
                </Link>
              </motion.div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Sidebar />
          </div>
        </div>
      </main>

      <Credits />
    </div>
  );
}
