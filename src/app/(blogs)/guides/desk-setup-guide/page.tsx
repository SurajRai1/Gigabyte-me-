import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ultimate Gaming Desk Setup Guide: Create Your Perfect Workspace | GigabyteMe",
  description: "Learn how to create the perfect gaming desk setup. From ergonomics and cable management to lighting and accessories, build a comfortable and stylish gaming workspace.",
  keywords: "gaming desk setup, gaming workspace, desk organization, cable management, gaming accessories, ergonomic setup, RGB lighting, monitor mounting",
  openGraph: {
    title: "Ultimate Gaming Desk Setup Guide: Create Your Perfect Workspace",
    description: "Transform your gaming space with our comprehensive desk setup guide. Expert tips on ergonomics, organization, and aesthetics.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1598550476439-6847785fcea6",
        width: 1200,
        height: 630,
        alt: "Modern gaming desk setup with clean cable management",
      },
    ],
  },
};

export default function DeskSetupGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Article Header */}
      <header className="mb-8 sm:mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:text-blue-300">
            Setup
          </span>
          <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:text-purple-300">
            Gaming
          </span>
          <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-300">
            Guide
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Ultimate Gaming Desk Setup Guide: Create Your Perfect Workspace
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <time dateTime="2024-01-28">January 28, 2024</time>
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
            <a href="#desk-selection" className="text-blue-600 dark:text-blue-400 hover:underline">Desk Selection</a>
            <ul className="ml-4 mt-2 space-y-2">
              <li><a href="#desk-size" className="text-blue-600 dark:text-blue-400 hover:underline">Size and Space</a></li>
              <li><a href="#desk-type" className="text-blue-600 dark:text-blue-400 hover:underline">Types of Desks</a></li>
              <li><a href="#ergonomics" className="text-blue-600 dark:text-blue-400 hover:underline">Ergonomic Considerations</a></li>
            </ul>
          </li>
          <li>
            <a href="#organization" className="text-blue-600 dark:text-blue-400 hover:underline">Organization</a>
            <ul className="ml-4 mt-2 space-y-2">
              <li><a href="#cable-management" className="text-blue-600 dark:text-blue-400 hover:underline">Cable Management</a></li>
              <li><a href="#monitor-setup" className="text-blue-600 dark:text-blue-400 hover:underline">Monitor Setup</a></li>
              <li><a href="#accessories" className="text-blue-600 dark:text-blue-400 hover:underline">Essential Accessories</a></li>
            </ul>
          </li>
          <li>
            <a href="#lighting" className="text-blue-600 dark:text-blue-400 hover:underline">Lighting Solutions</a>
          </li>
          <li>
            <a href="#maintenance" className="text-blue-600 dark:text-blue-400 hover:underline">Maintenance Tips</a>
          </li>
        </ul>
      </nav>

      {/* Article Content */}
      <div className="prose dark:prose-invert max-w-none">
        <section id="introduction">
          <h2>Introduction</h2>
          <p>
            Creating the perfect gaming desk setup is about more than just aesthetics – it's about building a 
            comfortable, functional, and inspiring space that enhances your gaming experience. Whether you're a 
            casual gamer or a professional streamer, this guide will help you design and organize your ideal 
            gaming workspace, considering everything from ergonomics to cable management.
          </p>
        </section>

        <section id="desk-selection">
          <h2>Desk Selection</h2>
          <p>
            The foundation of any great gaming setup is the desk itself. Let's explore the key factors to 
            consider when choosing the perfect desk for your needs.
          </p>

          <section id="desk-size">
            <h3>Size and Space</h3>
            <div className="not-prose mb-6">
              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4">Space Requirements</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-2">Minimum Dimensions</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Width: 47" (120cm)</li>
                      <li>Depth: 24" (60cm)</li>
                      <li>Height: 28-30" (71-76cm)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Recommended Setup</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Single monitor: 55" width</li>
                      <li>Dual monitor: 63" width</li>
                      <li>Ultrawide: 59" width</li>
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
              href="/guides/best-gaming-monitors-2024"
              className="group block bg-gray-50 dark:bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Best Gaming Monitors 2024
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Find the perfect display to complete your gaming setup.
                </p>
              </div>
            </Link>
            <Link 
              href="/guides/gaming-pc-build-2024"
              className="group block bg-gray-50 dark:bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Building Your Dream Gaming PC
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Build the perfect gaming PC to power your new workspace.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
} 