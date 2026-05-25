"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { posts } from "@/lib/blog-data";
import { BgBlobs } from "@/components/ui/bg-blobs";

export default function BlogIndexPage() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <div className="relative min-h-screen pt-28 pb-24 overflow-hidden bg-black">
      {/* Dynamic Background Blobs */}
      <BgBlobs />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mt-12 mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-kern-light">
            Engineering Blog
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Notes from the <span className="text-gradient">reliability layer</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Playbooks, post-mortems, and engineering insights on structured data synthesis and workflow execution with small language models.
          </p>
        </div>

        {/* Blog Post Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((post) => (
            <motion.div
              key={post.slug}
              variants={cardVariants}
              whileHover={{ y: -6, borderColor: "rgba(126, 65, 248, 0.25)" }}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/5 bg-white/[0.01] overflow-hidden transition-all duration-300 hover:bg-kern/[0.01]"
            >
              <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                {/* Image Wrapper */}
                <div className="aspect-[16/9] w-full relative overflow-hidden">
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-kern-light/90 text-white text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-md">
                    {post.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Meta */}
                    <div className="flex items-center gap-3 text-xs text-zinc-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readingTime}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-white group-hover:text-kern-light transition-colors leading-snug">
                      {post.title}
                    </h2>

                    <p className="mt-2 text-sm text-zinc-400 leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-white group-hover:text-kern-light transition-colors">
                    Read Article
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
