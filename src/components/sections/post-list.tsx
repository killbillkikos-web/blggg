"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowRight, Share2, Twitter, Facebook } from 'lucide-react';

interface Post {
  id: string;
  published: string;
  title: string;
  content: string;
  author: string;
  labels: string[];
}

interface PostListProps {
  posts: Post[];
}

const PostItem = ({ post, index }: { post: Post; index: number }) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const date = new Date(post.published);
  const formattedDate = mounted ? date.toLocaleDateString('el-GR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }) : '';

  const formattedTime = mounted ? date.toLocaleTimeString('el-GR', {
    hour: 'numeric',
    minute: '2-digit'
  }) : '';

  // Extract first image from content for card thumbnail
  const imgMatch = post.content.match(/<img.*?src="(.*?)"/);
  const thumbnailSrc = imgMatch ? imgMatch[1] : null;

  // Extract clean text excerpt
  const textContent = post.content.replace(/<[^>]*>/g, '');
  const excerpt = textContent.substring(0, 200).trim() + '...';

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className="group"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
        {/* Card Image */}
        {thumbnailSrc && (
          <Link 
            href={`/post/${post.id.split('-').pop()}`}
            className="block relative overflow-hidden aspect-[16/9]"
          >
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${thumbnailSrc})` }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        )}
        
        {/* Card Content */}
        <div className="p-6 md:p-8">
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.published}>{formattedDate}</time>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="mb-4">
            <Link 
              href={`/post/${post.id.split('-').pop()}`}
              className="text-2xl md:text-3xl font-display font-semibold text-gray-900 hover:text-teal-700 transition-colors duration-300 leading-tight"
            >
              {post.title}
            </Link>
          </h2>

          {/* Excerpt */}
          <p className="text-gray-600 leading-relaxed mb-6 font-serif text-lg">
            {excerpt}
          </p>

          {/* Labels/Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
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

          {/* Footer Actions */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-100">
            {/* Social Share */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400 mr-2">Share:</span>
              <motion.button 
                onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.origin + '/post/' + post.id.split('-').pop())}&text=${encodeURIComponent(post.title)}`, '_blank')}
                className="p-2 text-gray-400 hover:text-[#1DA1F2] hover:bg-blue-50 rounded-full transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Share to Twitter"
              >
                <Twitter className="w-4 h-4" />
              </motion.button>
              <motion.button 
                onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin + '/post/' + post.id.split('-').pop())}`, '_blank')}
                className="p-2 text-gray-400 hover:text-[#4267B2] hover:bg-blue-50 rounded-full transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Share to Facebook"
              >
                <Facebook className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Read More */}
            <Link 
              href={`/post/${post.id.split('-').pop()}`}
              className="group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 text-white text-sm font-medium rounded-full hover:bg-teal-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Διαβάστε περισσότερα
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Posted Time */}
          <p className="mt-4 text-xs text-gray-400 italic">
            Αναρτήθηκε από <span className="text-gray-500">{post.author}</span> στις {formattedTime}
          </p>
        </div>
      </div>
    </motion.article>
  );
};

const PostList = ({ posts }: PostListProps) => {
  return (
    <div className="space-y-8">
      {posts.map((post, index) => (
        <PostItem key={post.id} post={post} index={index} />
      ))}
      
      {posts.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100"
        >
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Tag className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-display font-semibold text-gray-700 mb-2">
            Δεν βρέθηκαν αναρτήσεις
          </h3>
          <p className="text-gray-500">
            Δεν υπάρχουν διαθέσιμες αναρτήσεις αυτή τη στιγμή.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default PostList;
