import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tech & Gaming Guides | GigabyteMe",
  description: "Comprehensive guides on PC building, gaming, hardware, and tech maintenance. Expert advice and step-by-step tutorials for enthusiasts.",
  keywords: "tech guides, gaming guides, PC building, hardware guides, gaming tutorials, tech tutorials",
};

export default function GuidesIndex() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <header className="mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Tech & Gaming Guides
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Expert guides and tutorials to help you master PC building, gaming, and tech maintenance.
        </p>
      </header>

      {/* Featured Guide */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Featured Guide</h2>
        <Link 
          href="/guides/gaming-pc-build-2024"
          className="group block bg-gray-50 dark:bg-gray-800/50 rounded-2xl overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
            <div className="relative h-64 lg:h-full rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c"
                alt="High-end gaming PC build with RGB lighting"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:text-blue-300">
                  Hardware
                </span>
                <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:text-purple-300">
                  Gaming
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-4">
                Building Your Dream Gaming PC: Ultimate Guide 2024
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A comprehensive guide to building a high-performance gaming PC in 2024. Learn about component selection, assembly tips, and optimization techniques.
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <time dateTime="2024-01-15">January 15, 2024</time>
                <span className="mx-2">•</span>
                <span>15 min read</span>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* All Guides Grid */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">All Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Gaming Monitors Guide */}
          <Link 
            href="/guides/best-gaming-monitors-2024"
            className="group block bg-gray-50 dark:bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1527219525722-f9767a7f2884"
                alt="Modern gaming setup with ultrawide monitor"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:text-blue-300">
                  Hardware
                </span>
                <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:text-purple-300">
                  Gaming
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                Best Gaming Monitors 2024
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Find the perfect gaming monitor with our comprehensive 2024 guide.
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <time dateTime="2024-01-20">January 20, 2024</time>
                <span className="mx-2">•</span>
                <span>12 min read</span>
              </div>
            </div>
          </Link>

          {/* PC Maintenance Guide */}
          <Link 
            href="/guides/pc-maintenance-guide"
            className="group block bg-gray-50 dark:bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
                alt="PC maintenance and cleaning tools"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:text-blue-300">
                  Hardware
                </span>
                <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-300">
                  Maintenance
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                Essential PC Maintenance Guide
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Keep your gaming PC running smoothly with our maintenance tips and tricks.
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <time dateTime="2024-01-25">January 25, 2024</time>
                <span className="mx-2">•</span>
                <span>10 min read</span>
              </div>
            </div>
          </Link>

          {/* Desk Setup Guide */}
          <Link 
            href="/guides/desk-setup-guide"
            className="group block bg-gray-50 dark:bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1598550476439-6847785fcea6"
                alt="Modern gaming desk setup with clean cable management"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:text-blue-300">
                  Setup
                </span>
                <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:text-purple-300">
                  Gaming
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                Ultimate Gaming Desk Setup Guide
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Create the perfect gaming environment with our comprehensive setup guide.
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <time dateTime="2024-01-28">January 28, 2024</time>
                <span className="mx-2">•</span>
                <span>12 min read</span>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
} 