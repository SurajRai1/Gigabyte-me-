import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Gaming Monitors 2024: Ultimate Buyer's Guide | GigabyteMe",
  description: "Find the perfect gaming monitor with our comprehensive 2024 guide. Compare resolution, refresh rates, panel types, and more to make an informed decision.",
  keywords: "gaming monitors 2024, best gaming displays, high refresh rate monitors, 4K gaming monitors, ultrawide monitors, monitor buying guide",
  openGraph: {
    title: "Best Gaming Monitors 2024: Ultimate Buyer's Guide",
    description: "Expert recommendations for gaming monitors across all budgets and use cases. From competitive esports to immersive single-player experiences.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1527219525722-f9767a7f2884",
        width: 1200,
        height: 630,
        alt: "Modern gaming setup with ultrawide monitor",
      },
    ],
  },
};

export default function GamingMonitorsGuide() {
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
            Buyer's Guide
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Best Gaming Monitors 2024: Ultimate Buyer's Guide
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <time dateTime="2024-01-20">January 20, 2024</time>
          <span>•</span>
          <span>12 min read</span>
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
            <a href="#key-features" className="text-blue-600 dark:text-blue-400 hover:underline">Key Features to Consider</a>
            <ul className="ml-4 mt-2 space-y-2">
              <li><a href="#resolution" className="text-blue-600 dark:text-blue-400 hover:underline">Resolution Options</a></li>
              <li><a href="#refresh-rate" className="text-blue-600 dark:text-blue-400 hover:underline">Refresh Rate</a></li>
              <li><a href="#panel-types" className="text-blue-600 dark:text-blue-400 hover:underline">Panel Types</a></li>
              <li><a href="#response-time" className="text-blue-600 dark:text-blue-400 hover:underline">Response Time</a></li>
              <li><a href="#hdr" className="text-blue-600 dark:text-blue-400 hover:underline">HDR Support</a></li>
            </ul>
          </li>
          <li>
            <a href="#top-picks" className="text-blue-600 dark:text-blue-400 hover:underline">Top Picks for 2024</a>
          </li>
          <li>
            <a href="#budget-options" className="text-blue-600 dark:text-blue-400 hover:underline">Budget-Friendly Options</a>
          </li>
          <li>
            <a href="#setup-tips" className="text-blue-600 dark:text-blue-400 hover:underline">Setup and Calibration</a>
          </li>
        </ul>
      </nav>

      {/* Article Content */}
      <div className="prose dark:prose-invert max-w-none">
        <section id="introduction">
          <h2>Introduction</h2>
          <p>
            Choosing the right gaming monitor is crucial for getting the most out of your gaming PC. With technologies 
            advancing rapidly and new features being introduced regularly, finding the perfect display for your needs 
            can be challenging. This guide will help you navigate the complex world of gaming monitors in 2024, 
            covering everything from essential features to specific recommendations for different use cases and budgets.
          </p>
        </section>

        <section id="key-features">
          <h2>Key Features to Consider</h2>
          <p>
            Before diving into specific recommendations, it's important to understand the key features that make a 
            gaming monitor great. These features will directly impact your gaming experience and should be carefully 
            considered based on your specific needs and preferences.
          </p>

          <section id="resolution">
            <h3>Resolution Options</h3>
            <div className="not-prose mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">1080p (FHD)</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Best for competitive gaming</li>
                    <li>Highest frame rates</li>
                    <li>Most affordable option</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">1440p (QHD)</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Sweet spot for gaming</li>
                    <li>Better image quality</li>
                    <li>Good performance balance</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">4K (UHD)</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Highest image quality</li>
                    <li>Future-proof choice</li>
                    <li>Demands powerful GPU</li>
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
              href="/guides/gaming-pc-build-2024"
              className="group block bg-gray-50 dark:bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Building Your Dream Gaming PC: Ultimate Guide 2024
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Learn how to build the perfect gaming PC to pair with your new monitor.
                </p>
              </div>
            </Link>
            <Link 
              href="/guides/desk-setup-guide"
              className="group block bg-gray-50 dark:bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Ultimate Gaming Desk Setup Guide
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Create the perfect gaming environment with our comprehensive desk setup guide.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
} 