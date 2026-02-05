"use client";

import React, { useEffect, useState } from "react";
import PostList from "./sections/post-list";
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

function articleToPost(article: Article) {
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

export default function HomeClient() {
  const [dbPosts, setDbPosts] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function fetchArticles() {
      try {
        const res = await fetch("/api/articles");
        if (!res.ok) throw new Error(`Articles fetch failed: ${res.status}`);
        const data = await res.json();
        if (mounted && data.articles) setDbPosts(data.articles);
      } catch (err) {
        console.error("Error fetching articles:", err);
      } finally {
        if (mounted) setIsLoading(false);
      }
    }

    fetchArticles();
    return () => { mounted = false };
  }, []);

  const legacyPosts = Array.isArray(content.posts)
    ? content.posts.filter(
        (p: any) => p.id === "tag:blogger.com,1999:blog-3066255942376026513.post-4582477378962155648"
      )
    : [];

  // Filter articles by category - only show "Αρχική σελίδα" on homepage
  const homeArticles = dbPosts.filter(
    (article) => article.category === "Αρχική σελίδα"
  );

  const allPosts = [
    ...homeArticles.map(articleToPost),
    ...legacyPosts,
  ];

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
