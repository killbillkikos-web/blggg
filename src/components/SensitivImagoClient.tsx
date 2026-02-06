"use client";

import React, { useEffect, useState } from "react";
import { Post } from "@/lib/utils";
import content from "@/lib/content.json";
import Link from "next/link";

interface Article {
  id: string;
  title: string;
  content: string;
  imageUrl?: string | null;
  author?: string;
  published?: string;
  category?: string;
  labels?: string[];
}

function articleToPost(article: Article): Post {
  // Extract plain text from HTML content
  const plainText = article.content.replace(/<[^>]*>/g, "").substring(0, 200);

  return {
    id: article.id,
    title: article.title,
    content: plainText,
    link: `/post/${article.id}`,
    published: article.published || new Date().toISOString(),
    imageUrl: article.imageUrl,
    author: article.author || "Admin",
    labels: article.labels || [],
  };
}

export default function SensitivImagoClient() {
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  // Get hardcoded Sensitiv Imago posts from content.json
  const hardcodedPosts = ((content as any).posts || []).filter(
    (post: any) => post.labels?.includes("Sensitiv Imago")
  );

  useEffect(() => {
    async function fetchArticles() {
      try {
        const res = await fetch("/api/articles");
        const data = await res.json();

        // Filter articles with "Sensitiv Imago" label
        const sensitiveArticles = (data.articles || []).filter((a: Article) =>
          a.labels?.includes("Sensitiv Imago")
        );

        // Combine both
        const combined: Post[] = [
          ...sensitiveArticles.map(articleToPost),
          ...hardcodedPosts,
        ];

        setAllPosts(combined);
      } catch (error) {
        console.error("Error fetching articles:", error);
        // If API fails, just show hardcoded posts
        setAllPosts(hardcodedPosts);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  if (loading || allPosts.length === 0) {
    return null;
  }

  return (
    <div className="bg-white p-[15px] border border-[#DDDDDD] mt-[20px]">
      <h3 className="post-title text-[22px] font-sans text-[#000080] leading-[1.4] mb-[20px]">
        Σχετικά Άρθρα
      </h3>

      <div className="space-y-[15px]">
        {allPosts.map((post) => (
          <article
            key={post.id}
            className="border-b border-[#DDDDDD] pb-[15px] last:border-b-0"
          >
            {post.imageUrl && (
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-[150px] object-cover mb-[10px]"
              />
            )}
            <h4 className="text-[16px] font-sans text-[#000080] font-bold mb-[5px] hover:underline">
              <Link href={post.link}>{post.title}</Link>
            </h4>
            <p className="text-[14px] text-[#333333] mb-[5px]">
              {post.content}
            </p>
            <div className="text-[12px] text-[#666666]">
              <span>{post.author}</span>
            </div>
            <Link
              href={post.link}
              className="text-[#0066CC] hover:underline text-[12px]"
            >
              Διαβάστε περισσότερα »
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
