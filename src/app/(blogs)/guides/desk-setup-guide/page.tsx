import type { Metadata } from "next";
import React from 'react';
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ultimate Gaming Desk Setup Guide | GigabyteMe",
  description: "Create the perfect gaming environment with our comprehensive desk setup guide. Learn about ergonomics, cable management, and essential accessories.",
  keywords: "gaming desk setup, ergonomic gaming, cable management, gaming accessories, desk organization",
  openGraph: {
    title: "Ultimate Gaming Desk Setup Guide | GigabyteMe",
    description: "Create the perfect gaming environment with our comprehensive desk setup guide. Learn about ergonomics, cable management, and essential accessories.",
    type: "article",
    publishedTime: "2024-01-25",
    authors: ["GigabyteMe Team"],
  },
};

export default function DeskSetupGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Article Header */}
      <header className="mb-8 sm:mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:text-blue-300">
            Setup Guide
          </span>
          <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:text-purple-300">
            Gaming
          </span>
          <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-300">
            Ergonomic
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Ultimate Gaming Desk Setup Guide
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
            <a href="#desk-selection" className="text-blue-600 dark:text-blue-400 hover:underline">Desk Selection</a>
          </li>
          <li>
            <a href="#cable-management" className="text-blue-600 dark:text-blue-400 hover:underline">Cable Management</a>
          </li>
          <li>
            <a href="#ergonomics" className="text-blue-600 dark:text-blue-400 hover:underline">Ergonomic Setup</a>
          </li>
          <li>
            <a href="#accessories" className="text-blue-600 dark:text-blue-400 hover:underline">Essential Accessories</a>
          </li>
          <li>
            <a href="#lighting" className="text-blue-600 dark:text-blue-400 hover:underline">Lighting & Ambiance</a>
          </li>
        </ul>
      </nav>

      {/* Article Content */}
      <div className="prose dark:prose-invert max-w-none">
        <section id="introduction">
          <h2>Introduction</h2>
          <p>
            A well-organized gaming desk setup isn&apos;t just about aesthetics &mdash; it&apos;s about creating an 
            environment that enhances your gaming experience and supports your health. This guide will help you 
            create the perfect gaming workspace, whether you&apos;re starting from scratch or looking to upgrade 
            your existing setup.
          </p>
        </section>

        <section id="desk-selection">
          <h2>Choosing the Right Desk</h2>
          <p>
            Your desk is the foundation of your gaming setup. Consider these factors when selecting your desk:
          </p>
          <ul>
            <li>Size and available space</li>
            <li>Height adjustability</li>
            <li>Material and durability</li>
            <li>Cable management features</li>
            <li>Additional features (USB ports, headphone hooks, etc.)</li>
          </ul>
        </section>

        <section id="cable-management">
          <h2>Cable Management</h2>
          <p>
            A clean, organized setup starts with proper cable management. Here are some tips to keep your cables 
            organized and out of sight:
          </p>
          <ul>
            <li>Use cable ties and clips</li>
            <li>Route cables through desk grommets</li>
            <li>Consider a cable management tray</li>
            <li>Label your cables for easy identification</li>
            <li>Use wireless peripherals where possible</li>
          </ul>
        </section>

        <section id="ergonomics">
          <h2>Ergonomic Setup</h2>
          <p>
            Proper ergonomics are crucial for long gaming sessions. Follow these guidelines for a comfortable setup:
          </p>
          <ul>
            <li>Monitor at eye level</li>
            <li>Arms at 90-degree angles</li>
            <li>Feet flat on the floor</li>
            <li>Good lumbar support</li>
            <li>Regular breaks and stretching</li>
          </ul>
        </section>

        <section id="accessories">
          <h2>Essential Accessories</h2>
          <p>
            Enhance your gaming experience with these must-have accessories:
          </p>
          <ul>
            <li>Monitor stand or arm</li>
            <li>Desk pad or mouse mat</li>
            <li>Headphone stand</li>
            <li>USB hub</li>
            <li>Desk organizers</li>
          </ul>
        </section>

        <section id="lighting">
          <h2>Lighting & Ambiance</h2>
          <p>
            Create the perfect gaming atmosphere with proper lighting:
          </p>
          <ul>
            <li>RGB desk lighting</li>
            <li>Monitor bias lighting</li>
            <li>Room lighting control</li>
            <li>Ambient lighting effects</li>
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
                  Find the perfect monitor to complete your gaming setup.
                </p>
              </div>
            </Link>
            <Link 
              href="/guides/gaming-pc-build-2024"
              className="group block bg-gray-50 dark:bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Building Your Dream Gaming PC: Ultimate Guide 2024
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Learn how to build the perfect gaming PC to match your setup.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
} 