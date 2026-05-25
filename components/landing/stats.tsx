"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "43+", label: "Model Providers", desc: "Native support for local and API-based models" },
  { value: "125+", label: "Built-In Tools", desc: "Calculators, python execution, web search & MCP" },
  { value: "18", label: "Vector Backends", desc: "Robust vector DB integrations for memory & RAG" },
  { value: "10/10", label: "Benchmark Score", desc: "Flawless structured output accuracy tests" },
  { value: "0", label: "Malformed JSONs", desc: "Automatic repair and recovery handles corrupt outputs" },
  { value: "Apache 2.0", label: "Open Source", desc: "Permissive license ready for enterprise use" },
];

export function Stats() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative border-t border-b border-white/5 py-16 md:py-20 overflow-hidden bg-black/40 backdrop-blur-[2px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={cardVariants}
              whileHover={{ y: -4, borderColor: "rgba(126, 65, 248, 0.2)" }}
              className="group relative flex flex-col justify-between rounded-xl border border-white/5 bg-white/[0.01] p-6 transition-colors hover:bg-kern/[0.02]"
            >
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gradient block mb-1">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 block group-hover:text-white transition-colors">
                  {stat.label}
                </span>
              </div>
              <p className="mt-3 text-xs text-zinc-500 leading-normal">
                {stat.desc}
              </p>
              
              {/* Subtle accent line on hover */}
              <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-kern-light/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
