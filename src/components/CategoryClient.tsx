"use client";

import React, { useEffect, useState } from "react";
import PostList from "@/components/sections/post-list";
import content from "@/lib/content.json";

interface Article {
  id: string;
  title: string;
  content: string;
  imageUrl: string | null;
  published: string;
  author: string;
  labels: string[];
  category: string;
  createdAt: string;
}

interface Post {
  id: string;
  published: string;
  title: string;
  content: string;
  author: string;
  labels: string[];
}

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
    labels: article.labels || [],
  };
}

export default function CategoryClient({ category }: { category: string }) {
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function fetchArticles() {
      try {
        const res = await fetch("/api/articles");
        if (!res.ok) throw new Error(`Articles fetch failed: ${res.status}`);
        const data = await res.json();
        if (mounted && data.articles) {
          // Filter DB articles by category
          const dbFiltered = data.articles.filter(
            (a: Article) => a.category === category
          );
          
          // Get hardcoded posts that match this category's labels
          const hardcodedFiltered = content.posts.filter(post => 
            post.labels.includes(category)
          );
          
          // Combine DB articles (converted to Post format) with hardcoded posts
          const combined: Post[] = [
            ...dbFiltered.map(articleToPost),
            ...hardcodedFiltered
          ];
          
          setAllPosts(combined);
        }
      } catch (err) {
        console.error("Error fetching articles:", err);
      } finally {
        if (mounted) setIsLoading(false);
      }
    }

    fetchArticles();
    return () => { mounted = false };
  }, [category]);

  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
        <div className="w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="mt-4 text-gray-500">Φόρτωση άρθρων...</p>
      </div>
    );
  }

  return <PostList posts={allPosts} />;
}
