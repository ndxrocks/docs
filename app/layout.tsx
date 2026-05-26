import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kern.ndx.rocks"),
  title: "Kern — Small Models. Big Impact.",
  description:
    "An agent framework built for 1-7B parameter LLMs. Fork of Agno, optimized for small models with template-based structured output, JSON repair, and workflow visualization.",
  keywords: ["LLM", "agents", "AI", "small models", "framework", "agno", "kern"],
  openGraph: {
    title: "Kern — Small Models. Big Impact.",
    description: "An agent framework built for 1-7B parameter LLMs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-screen bg-[#09090B] font-sans text-white antialiased`}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
