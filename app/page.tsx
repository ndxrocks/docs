import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { CodeShowcase } from "@/components/landing/code-showcase";
import { Comparison } from "@/components/landing/comparison";
import { Waitlist } from "@/components/landing/waitlist";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <CodeShowcase />
      <Comparison />
      <Waitlist />
    </>
  );
}
