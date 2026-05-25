"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { posts } from "@/lib/blog-data";

export function BlogSection() {
  // Use the first post as featured, and the next 2-3 as secondary
  const featuredPost = posts[0];
  const secondaryPosts = posts.slice(1, 4);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative border-t border-white/5 px-4 py-24 sm:px-6 lg:px-8 overflow-hidden bg-black/20">
      {/* Subtle grid pattern background */}
      <div className="bg-grid-pattern absolute inset-0 opacity-20 pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-kern-light">
              Engineering Blog
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Latest from the <span className="text-gradient">Reliability Layer</span>
            </h2>
            <p className="mt-4 max-w-xl text-zinc-400">
              Deep dives, playbook guides, and benchmark findings on making small models run reliably in production.
            </p>
          </div>
          <Link
            href="/blog"
            className="group mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-medium text-kern-light hover:text-white transition-colors"
          >
            Explore all articles
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Featured Post Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 flex flex-col group relative rounded-2xl border border-white/5 bg-white/[0.01] overflow-hidden hover:border-kern/20 transition-all hover:bg-kern/[0.01]"
          >
            <Link href={`/blog/${featuredPost.slug}`} className="flex flex-col h-full">
              {/* Cover Image Container */}
              <div className="aspect-[16/10] sm:aspect-[16/9] w-full relative overflow-hidden">
                <img
                  src={featuredPost.cover}
                  alt={featuredPost.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-85" />
                <span className="absolute top-4 left-4 bg-kern-light/90 text-white text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-md">
                  {featuredPost.tag}
                </span>
              </div>
              
              {/* Card Content */}
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                <div>
                  {/* Meta tags */}
                  <div className="flex items-center gap-4 text-xs text-zinc-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {featuredPost.readingTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-kern-light transition-colors leading-snug">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed max-w-2xl">
                    {featuredPost.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-white group-hover:text-kern-light transition-colors">
                  Read Article
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Secondary Posts List */}
          <div className="flex flex-col gap-6">
            {secondaryPosts.map((post) => (
              <motion.div
                key={post.slug}
                variants={itemVariants}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/5 bg-white/[0.01] overflow-hidden hover:border-kern/20 transition-all hover:bg-kern/[0.01]"
              >
                <Link href={`/blog/${post.slug}`} className="p-6 flex flex-col h-full justify-between">
                  <div>
                    {/* Meta tags */}
                    <div className="flex items-center gap-3 text-xs text-zinc-500 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-kern-light">
                        {post.tag}
                      </span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    <h4 className="text-base md:text-lg font-bold text-white group-hover:text-kern-light transition-colors leading-snug">
                      {post.title}
                    </h4>

                    <p className="mt-2 text-xs text-zinc-400 leading-relaxed line-clamp-2">
                      {post.description}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-white group-hover:text-kern-light transition-colors">
                    Read Post
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
