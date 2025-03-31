import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Building Your Dream Gaming PC: Ultimate Guide 2024 | GigabyteMe",
  description: "A comprehensive guide to building a high-performance gaming PC in 2024. Learn about component selection, assembly tips, and optimization techniques.",
  keywords: "gaming PC build, PC building guide 2024, custom PC build, gaming computer assembly, PC components guide",
  openGraph: {
    title: "Building Your Dream Gaming PC: Ultimate Guide 2024",
    description: "Master the art of building your own gaming PC with our comprehensive 2024 guide. From component selection to final assembly.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c",
        width: 1200,
        height: 630,
        alt: "High-end gaming PC build with RGB lighting",
      },
    ],
  },
};

export default function GamingPCBuildGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Article Header */}
      <header className="mb-8 sm:mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:text-blue-300">
            Hardware
          </span>
          <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:text-purple-300">
            Gaming
          </span>
          <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-300">
            Guide
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Building Your Dream Gaming PC: Ultimate Guide 2024
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <time dateTime="2024-01-15">January 15, 2024</time>
          <span>•</span>
          <span>15 min read</span>
        </div>
      </header>

      {/* Table of Contents */}
      <nav className="mb-8 sm:mb-12 p-4 sm:p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Table of Contents</h2>
        <ul className="space-y-2">
          <li>
            <a href="#introduction" className="text-blue-600 dark:text-blue-400 hover:underline">Introduction</a>
          </li>
          <li>
            <a href="#component-selection" className="text-blue-600 dark:text-blue-400 hover:underline">Component Selection</a>
            <ul className="ml-4 mt-2 space-y-2">
              <li><a href="#cpu" className="text-blue-600 dark:text-blue-400 hover:underline">CPU Selection</a></li>
              <li><a href="#gpu" className="text-blue-600 dark:text-blue-400 hover:underline">GPU Selection</a></li>
              <li><a href="#motherboard" className="text-blue-600 dark:text-blue-400 hover:underline">Motherboard Selection</a></li>
              <li><a href="#memory" className="text-blue-600 dark:text-blue-400 hover:underline">Memory Selection</a></li>
              <li><a href="#storage" className="text-blue-600 dark:text-blue-400 hover:underline">Storage Selection</a></li>
              <li><a href="#psu" className="text-blue-600 dark:text-blue-400 hover:underline">Power Supply Selection</a></li>
              <li><a href="#case" className="text-blue-600 dark:text-blue-400 hover:underline">Case Selection</a></li>
            </ul>
          </li>
          <li>
            <a href="#assembly" className="text-blue-600 dark:text-blue-400 hover:underline">Assembly Guide</a>
          </li>
          <li>
            <a href="#optimization" className="text-blue-600 dark:text-blue-400 hover:underline">Optimization Tips</a>
          </li>
          <li>
            <a href="#troubleshooting" className="text-blue-600 dark:text-blue-400 hover:underline">Troubleshooting</a>
          </li>
        </ul>
      </nav>

      {/* Article Content */}
      <div className="prose dark:prose-invert max-w-none">
        <section id="introduction">
          <h2>Introduction</h2>
          <p>
            Building your own gaming PC in 2024 offers an unparalleled combination of performance, customization, and value. 
            With the latest hardware releases from AMD, Intel, and NVIDIA, along with increasingly competitive pricing, 
            there's never been a better time to embark on your PC building journey. This comprehensive guide will walk you 
            through every step of the process, from selecting components to optimizing your final build.
          </p>
        </section>

        <section id="component-selection">
          <h2>Component Selection</h2>
          <p>
            The foundation of any great gaming PC lies in choosing the right components. We'll break down each component 
            category, discussing the latest options, price-to-performance considerations, and our top recommendations for 
            different budget levels.
          </p>

          <section id="cpu">
            <h3>CPU Selection</h3>
            <p>
              The CPU (Central Processing Unit) is the brain of your gaming PC. In 2024, the competition between AMD and 
              Intel has resulted in excellent options at every price point:
            </p>
            <div className="not-prose mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">High-End Options</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Intel Core i9-14900K</li>
                    <li>AMD Ryzen 9 7950X3D</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Mid-Range Options</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Intel Core i5-14600K</li>
                    <li>AMD Ryzen 7 7800X3D</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Continue with other sections... */}
        </section>

        {/* Related Articles */}
        <section className="not-prose mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link 
              href="/guides/best-gaming-monitors-2024"
              className="group block bg-gray-50 dark:bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Best Gaming Monitors for 2024
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Find the perfect display for your gaming setup with our comprehensive monitor guide.
                </p>
              </div>
            </Link>
            <Link 
              href="/guides/pc-maintenance-guide"
              className="group block bg-gray-50 dark:bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Essential PC Maintenance Guide
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Learn how to keep your gaming PC running smoothly with our maintenance tips and tricks.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
} 