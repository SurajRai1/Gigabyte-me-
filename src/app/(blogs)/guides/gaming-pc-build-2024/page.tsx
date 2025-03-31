import type { Metadata } from "next";
import React from 'react';
import Link from "next/link";

export const metadata: Metadata = {
  title: "Building Your Dream Gaming PC: Ultimate Guide 2024 | GigabyteMe",
  description: "Learn how to build the perfect gaming PC in 2024. From component selection to assembly, our comprehensive guide covers everything you need to know.",
  keywords: "gaming PC build, PC building guide, gaming computer, custom PC, hardware guide, gaming components",
  openGraph: {
    title: "Building Your Dream Gaming PC: Ultimate Guide 2024 | GigabyteMe",
    description: "Learn how to build the perfect gaming PC in 2024. From component selection to assembly, our comprehensive guide covers everything you need to know.",
    type: "article",
    publishedTime: "2024-01-25",
    authors: ["GigabyteMe Team"],
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
            DIY Guide
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Building Your Dream Gaming PC: Ultimate Guide 2024
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <time dateTime="2024-01-25">January 25, 2024</time>
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
            <a href="#components" className="text-blue-600 dark:text-blue-400 hover:underline">Component Selection</a>
          </li>
          <li>
            <a href="#assembly" className="text-blue-600 dark:text-blue-400 hover:underline">Assembly Guide</a>
          </li>
          <li>
            <a href="#testing" className="text-blue-600 dark:text-blue-400 hover:underline">Testing & Optimization</a>
          </li>
          <li>
            <a href="#budget-options" className="text-blue-600 dark:text-blue-400 hover:underline">Budget Options</a>
          </li>
        </ul>
      </nav>

      {/* Article Content */}
      <div className="prose dark:prose-invert max-w-none">
        <section id="introduction">
          <h2>Introduction</h2>
          <p>
            Building your own gaming PC can be an exciting and rewarding experience. This guide will walk you 
            through the process of selecting components and assembling your dream gaming machine. Whether you&apos;re 
            a first-time builder or looking to upgrade your existing system, we&apos;ve got you covered.
          </p>
        </section>

        <section id="components">
          <h2>Component Selection</h2>
          <p>
            Choosing the right components is crucial for building a balanced gaming PC. Here are the key components 
            you&apos;ll need:
          </p>
          <ul>
            <li>CPU (Processor)</li>
            <li>GPU (Graphics Card)</li>
            <li>Motherboard</li>
            <li>RAM (Memory)</li>
            <li>Storage (SSD/HDD)</li>
            <li>Power Supply</li>
            <li>Case</li>
            <li>Cooling Solution</li>
          </ul>
        </section>

        <section id="assembly">
          <h2>Assembly Guide</h2>
          <p>
            Follow these steps to assemble your gaming PC:
          </p>
          <ol>
            <li>Prepare your workspace</li>
            <li>Install the CPU and cooler</li>
            <li>Mount the motherboard</li>
            <li>Install RAM and storage</li>
            <li>Connect power supply</li>
            <li>Install graphics card</li>
            <li>Connect case fans and cables</li>
            <li>Test the system</li>
          </ol>
        </section>

        <section id="testing">
          <h2>Testing & Optimization</h2>
          <p>
            After assembly, it&apos;s important to:
          </p>
          <ul>
            <li>Check all connections</li>
            <li>Update drivers</li>
            <li>Monitor temperatures</li>
            <li>Run stress tests</li>
            <li>Optimize settings</li>
          </ul>
        </section>

        <section id="budget-options">
          <h2>Budget Options</h2>
          <p>
            Building a gaming PC doesn&apos;t have to break the bank. Here are some budget-friendly component 
            recommendations:
          </p>
          <ul>
            <li>Entry-level CPUs</li>
            <li>Mid-range GPUs</li>
            <li>Basic motherboards</li>
            <li>16GB RAM kits</li>
            <li>SSD storage</li>
          </ul>
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
                  Best Gaming Monitors 2024: Ultimate Buyer&apos;s Guide
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Find the perfect monitor to pair with your new gaming PC.
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
                  Create the perfect gaming environment for your new PC.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
} 