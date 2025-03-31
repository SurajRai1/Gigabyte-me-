import type { Metadata } from "next";
import React from 'react';
import Link from "next/link";

export const metadata: Metadata = {
  title: "Essential PC Maintenance Guide | GigabyteMe",
  description: "Learn how to keep your gaming PC running smoothly with our comprehensive maintenance guide. From cleaning to optimization, we&apos;ve got you covered.",
  keywords: "PC maintenance, computer cleaning, system optimization, hardware maintenance, software updates, gaming PC care",
  openGraph: {
    title: "Essential PC Maintenance Guide | GigabyteMe",
    description: "Learn how to keep your gaming PC running smoothly with our comprehensive maintenance guide. From cleaning to optimization, we&apos;ve got you covered.",
    type: "article",
    publishedTime: "2024-01-25",
    authors: ["GigabyteMe Team"],
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
            Maintenance
          </span>
          <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-300">
            Guide
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Essential PC Maintenance Guide
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <time dateTime="2024-01-25">January 25, 2024</time>
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
            <a href="#cleaning" className="text-blue-600 dark:text-blue-400 hover:underline">Cleaning & Dust Management</a>
          </li>
          <li>
            <a href="#software" className="text-blue-600 dark:text-blue-400 hover:underline">Software Maintenance</a>
          </li>
          <li>
            <a href="#hardware" className="text-blue-600 dark:text-blue-400 hover:underline">Hardware Checks</a>
          </li>
          <li>
            <a href="#optimization" className="text-blue-600 dark:text-blue-400 hover:underline">Performance Optimization</a>
          </li>
        </ul>
      </nav>

      {/* Article Content */}
      <div className="prose dark:prose-invert max-w-none">
        <section id="introduction">
          <h2>Introduction</h2>
          <p>
            Regular maintenance is crucial for keeping your gaming PC running at peak performance. This guide will 
            help you understand what maintenance tasks are necessary and how to perform them safely. Whether you&apos;re 
            a seasoned PC builder or new to computer maintenance, we&apos;ve got you covered.
          </p>
        </section>

        <section id="cleaning">
          <h2>Cleaning & Dust Management</h2>
          <p>
            Keeping your PC clean is essential for optimal performance and longevity. Here&apos;s what you need to do:
          </p>
          <ul>
            <li>Regular dust removal</li>
            <li>Component cleaning</li>
            <li>Thermal paste replacement</li>
            <li>Fan maintenance</li>
            <li>Case cleaning</li>
          </ul>
        </section>

        <section id="software">
          <h2>Software Maintenance</h2>
          <p>
            Keep your system running smoothly with these software maintenance tasks:
          </p>
          <ul>
            <li>Windows updates</li>
            <li>Driver updates</li>
            <li>Malware scanning</li>
            <li>Disk cleanup</li>
            <li>System optimization</li>
          </ul>
        </section>

        <section id="hardware">
          <h2>Hardware Checks</h2>
          <p>
            Regular hardware checks can prevent potential issues:
          </p>
          <ul>
            <li>Temperature monitoring</li>
            <li>Fan operation</li>
            <li>Connection checks</li>
            <li>Power supply testing</li>
            <li>Component wear inspection</li>
          </ul>
        </section>

        <section id="optimization">
          <h2>Performance Optimization</h2>
          <p>
            Get the most out of your gaming PC with these optimization tips:
          </p>
          <ul>
            <li>Startup management</li>
            <li>Background processes</li>
            <li>Game settings optimization</li>
            <li>Overclocking (if applicable)</li>
            <li>Storage optimization</li>
          </ul>
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
                  Learn how to build a gaming PC that&apos;s easy to maintain.
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
                  Create a workspace that makes PC maintenance easier.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
} 