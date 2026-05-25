import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { CodeShowcase } from "@/components/landing/code-showcase";
import { Comparison } from "@/components/landing/comparison";
import { Waitlist } from "@/components/landing/waitlist";
import { Stats } from "@/components/landing/stats";
import { ProblemStatement } from "@/components/landing/problem-statement";
import { BlogSection } from "@/components/landing/blog-section";
import { BgBlobs } from "@/components/ui/bg-blobs";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <BgBlobs />
      
      <div className="relative z-10">
        <Hero />
        <Stats />
        <ProblemStatement />
        <Features />
        <CodeShowcase />
        <Comparison />
        <BlogSection />
        <Waitlist />
      </div>
    </div>
  );
}

