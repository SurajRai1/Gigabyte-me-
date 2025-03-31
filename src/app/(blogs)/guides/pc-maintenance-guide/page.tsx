import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Essential PC Maintenance Guide: Keep Your Gaming PC Running Smoothly | GigabyteMe",
  description: "Learn how to maintain and optimize your gaming PC for peak performance. Expert tips on hardware cleaning, software optimization, and troubleshooting common issues.",
  keywords: "PC maintenance, computer optimization, gaming PC care, hardware cleaning, software optimization, PC troubleshooting, system maintenance",
  openGraph: {
    title: "Essential PC Maintenance Guide: Keep Your Gaming PC Running Smoothly",
    description: "Master the art of PC maintenance with our comprehensive guide. From hardware cleaning to software optimization, learn how to keep your gaming PC in top condition.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
        width: 1200,
        height: 630,
        alt: "PC maintenance and cleaning tools",
      },
    ],
  },
};

export default function PCMaintenanceGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Article Header */}
      <header className="mb-8 sm:mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:text-blue-300">
            Hardware
          </span>
          <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:text-purple-300">
            Software
          </span>
          <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-300">
            Maintenance
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Essential PC Maintenance Guide: Keep Your Gaming PC Running Smoothly
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <time dateTime="2024-01-25">January 25, 2024</time>
          <span>•</span>
          <span>10 min read</span>
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
            <a href="#hardware-maintenance" className="text-blue-600 dark:text-blue-400 hover:underline">Hardware Maintenance</a>
            <ul className="ml-4 mt-2 space-y-2">
              <li><a href="#cleaning" className="text-blue-600 dark:text-blue-400 hover:underline">Regular Cleaning</a></li>
              <li><a href="#thermal-paste" className="text-blue-600 dark:text-blue-400 hover:underline">Thermal Paste Replacement</a></li>
              <li><a href="#dust-management" className="text-blue-600 dark:text-blue-400 hover:underline">Dust Management</a></li>
              <li><a href="#cable-management" className="text-blue-600 dark:text-blue-400 hover:underline">Cable Management</a></li>
            </ul>
          </li>
          <li>
            <a href="#software-optimization" className="text-blue-600 dark:text-blue-400 hover:underline">Software Optimization</a>
            <ul className="ml-4 mt-2 space-y-2">
              <li><a href="#windows-optimization" className="text-blue-600 dark:text-blue-400 hover:underline">Windows Optimization</a></li>
              <li><a href="#driver-updates" className="text-blue-600 dark:text-blue-400 hover:underline">Driver Management</a></li>
              <li><a href="#startup-programs" className="text-blue-600 dark:text-blue-400 hover:underline">Startup Programs</a></li>
            </ul>
          </li>
          <li>
            <a href="#monitoring" className="text-blue-600 dark:text-blue-400 hover:underline">Performance Monitoring</a>
          </li>
          <li>
            <a href="#troubleshooting" className="text-blue-600 dark:text-blue-400 hover:underline">Common Issues & Solutions</a>
          </li>
        </ul>
      </nav>

      {/* Article Content */}
      <div className="prose dark:prose-invert max-w-none">
        <section id="introduction">
          <h2>Introduction</h2>
          <p>
            Regular maintenance is crucial for keeping your gaming PC performing at its best. Whether you've just built 
            a new system or you're maintaining an existing one, this guide will help you establish good maintenance 
            habits and optimize your PC for peak performance. We'll cover both hardware and software aspects of PC 
            maintenance, providing step-by-step instructions and professional tips.
          </p>
        </section>

        <section id="hardware-maintenance">
          <h2>Hardware Maintenance</h2>
          <p>
            Physical maintenance of your PC components is essential for longevity and optimal performance. Let's explore 
            the key aspects of hardware maintenance that every PC owner should know.
          </p>

          <section id="cleaning">
            <h3>Regular Cleaning</h3>
            <div className="not-prose mb-6">
              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4">Essential Cleaning Tools</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Compressed air can</li>
                    <li>Microfiber cloths</li>
                    <li>Isopropyl alcohol (90%+)</li>
                    <li>Anti-static brush</li>
                  </ul>
                  <div className="text-sm">
                    <p className="font-medium text-red-600 dark:text-red-400 mb-2">⚠️ Important Safety Tips:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Always power off and unplug</li>
                      <li>Use anti-static protection</li>
                      <li>Avoid vacuum cleaners</li>
                      <li>Keep liquids away from components</li>
                    </ul>
                  </div>
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
                  Learn how to build a gaming PC with future maintenance in mind.
                </p>
              </div>
            </Link>
            <Link 
              href="/guides/best-gaming-monitors-2024"
              className="group block bg-gray-50 dark:bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Best Gaming Monitors 2024
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Find the perfect display to complement your well-maintained gaming PC.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
} 