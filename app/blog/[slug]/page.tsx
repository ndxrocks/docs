"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { posts } from "@/lib/blog-data";
import { BgBlobs } from "@/components/ui/bg-blobs";

function HighlightCode({ code, language }: { code: string; language?: string }) {
  if (language !== "python" && language !== "py") {
    return <code>{code}</code>;
  }

  // Tokyo Night Lexer split regex
  const regex = /(#.*)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|\b(from|import|class|def|return|if|else|elif|for|in|while|try|except|with|as|pass|lambda|and|or|not|is)\b|\b(print|str|float|int|list|dict|set|tuple|len|range|open)\b|\b(Agent|OpenAIChat|MovieReview|BaseModel|Field|LocalEngine|Evaluator|LocalEngine|Report)\b|\b(\d+(?:\.\d+)?)\b/g;
  const parts = code.split(regex);
  const elements = [];

  for (let i = 0; i < parts.length; i += 7) {
    if (parts[i]) {
      elements.push(parts[i]);
    }
    
    if (i + 1 < parts.length) {
      const comment = parts[i + 1];
      const string = parts[i + 2];
      const keyword = parts[i + 3];
      const builtin = parts[i + 4];
      const customClass = parts[i + 5];
      const number = parts[i + 6];

      if (comment) {
        elements.push(<span key={i} className="text-[#565f89]">{comment}</span>);
      } else if (string) {
        elements.push(<span key={i} className="text-[#9ece6a]">{string}</span>);
      } else if (keyword) {
        elements.push(<span key={i} className="text-[#bb9af7]">{keyword}</span>);
      } else if (builtin) {
        elements.push(<span key={i} className="text-[#2ac3de]">{builtin}</span>);
      } else if (customClass) {
        elements.push(<span key={i} className="text-[#7aa2f7]">{customClass}</span>);
      } else if (number) {
        elements.push(<span key={i} className="text-[#ff9e64]">{number}</span>);
      }
    }
  }

  return <code>{elements}</code>;
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await params using React.use for compatibility with Next.js App Router
  const resolvedParams = React.use(params);
  const slug = resolvedParams.slug;

  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const post = posts[currentIndex];
  
  if (!post) {
    return (
      <div className="relative min-h-screen pt-32 pb-24 overflow-hidden bg-black text-center">
        <BgBlobs />
        <div className="relative z-10 max-w-md mx-auto px-4">
          <h1 className="text-3xl font-extrabold text-white">Post Not Found</h1>
          <p className="mt-4 text-zinc-400">The blog article you are looking for does not exist or has been moved.</p>
          <Link href="/blog" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-kern-light hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to engineering blog
          </Link>
        </div>
      </div>
    );
  }

  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <div className="relative min-h-screen pt-28 pb-24 overflow-hidden bg-black">
      {/* Background Blobs */}
      <BgBlobs />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-500 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          All articles
        </Link>

        {/* Header */}
        <header className="mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-kern-light block mb-3">
            {post.tag}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
            {post.description}
          </p>

          <div className="flex items-center gap-4 text-xs text-zinc-500 mt-6 border-b border-white/5 pb-6">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readingTime}
            </span>
          </div>
        </header>

        {/* Big Cover Image */}
        <div className="aspect-[16/9] w-full relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] mb-12">
          <img
            src={post.cover}
            alt={post.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Body Content */}
        <article className="prose prose-invert max-w-none mb-16">
          {post.content.map((block, index) => {
            switch (block.type) {
              case "p":
                return (
                  <p key={index} className="mt-6 text-zinc-300 text-base sm:text-lg leading-relaxed">
                    {block.text}
                  </p>
                );
              case "h2":
                return (
                  <h2 key={index} className="mt-12 text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {block.text}
                  </h2>
                );
              case "ul":
                return (
                  <ul key={index} className="mt-6 space-y-3 text-zinc-300 text-base sm:text-lg list-disc pl-6 marker:text-kern-light">
                    {block.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                );
              case "code":
                return (
                  <div key={index} className="my-8 rounded-xl border border-[#181a1f] bg-[#1a1b26] overflow-hidden relative group shadow-lg">
                    <div className="flex items-center justify-between px-4 py-2 border-b border-black/30 bg-[#1f2335] text-[10px] text-[#565f89] font-sans font-medium uppercase tracking-wider select-none">
                      <span>{block.language || "code"}</span>
                    </div>
                    <pre className="p-5 font-mono text-[11px] sm:text-xs md:text-sm text-[#a9b1d6] overflow-x-auto whitespace-pre leading-relaxed select-text">
                      <HighlightCode code={block.code} language={block.language} />
                    </pre>
                  </div>
                );
              case "figure":
                return (
                  <figure key={index} className="my-10">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-xl border border-white/5 bg-white/[0.01]">
                      <img
                        src={block.url}
                        alt={block.alt}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                    <figcaption className="mt-3 text-xs text-zinc-500 text-center">
                      {block.alt}
                    </figcaption>
                  </figure>
                );
              default:
                return null;
            }
          })}
        </article>

        {/* Prev / Next Navigation */}
        <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/5 pt-10">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="group p-5 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-kern/20 transition-all hover:bg-kern/[0.01]"
            >
              <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500 group-hover:text-kern-light transition-colors">
                <ArrowLeft className="h-3 w-3 group-hover:-translate-x-0.5 transition-transform" />
                Previous Post
              </span>
              <span className="mt-2 block font-bold text-sm text-white group-hover:text-white transition-colors leading-snug">
                {prevPost.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group p-5 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-kern/20 transition-all hover:bg-kern/[0.01] text-right"
            >
              <span className="flex items-center gap-1 justify-end text-[10px] font-bold uppercase tracking-wider text-zinc-500 group-hover:text-kern-light transition-colors">
                Next Post
                <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
              <span className="mt-2 block font-bold text-sm text-white group-hover:text-white transition-colors leading-snug">
                {nextPost.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </div>
    </div>
  );
}
