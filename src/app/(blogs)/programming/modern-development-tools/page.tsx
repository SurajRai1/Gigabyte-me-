import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Essential Modern Development Tools: 2024 Guide | GigabyteMe",
  description: "Discover the most important tools for modern software development. From IDEs and version control to CI/CD and cloud services, learn what tools you need in your tech stack.",
  keywords: "development tools, software development, IDE, version control, CI/CD, cloud services, DevOps tools, programming tools",
  openGraph: {
    title: "Essential Modern Development Tools: 2024 Guide",
    description: "Master the tools that power modern software development. A comprehensive guide to building an efficient development workflow.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3",
        width: 1200,
        height: 630,
        alt: "Modern software development workspace",
      },
    ],
  },
};

export default function ModernDevelopmentTools() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Article Header */}
      <header className="mb-8 sm:mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:text-blue-300">
            Programming
          </span>
          <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:text-purple-300">
            Development
          </span>
          <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-300">
            Tools
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Essential Modern Development Tools: 2024 Guide
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <time dateTime="2024-01-28">January 28, 2024</time>
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
            <a href="#development-environments" className="text-blue-600 dark:text-blue-400 hover:underline">Development Environments</a>
            <ul className="ml-4 mt-2 space-y-2">
              <li><a href="#ides" className="text-blue-600 dark:text-blue-400 hover:underline">Modern IDEs</a></li>
              <li><a href="#code-editors" className="text-blue-600 dark:text-blue-400 hover:underline">Code Editors</a></li>
              <li><a href="#extensions" className="text-blue-600 dark:text-blue-400 hover:underline">Essential Extensions</a></li>
            </ul>
          </li>
          <li>
            <a href="#version-control" className="text-blue-600 dark:text-blue-400 hover:underline">Version Control</a>
            <ul className="ml-4 mt-2 space-y-2">
              <li><a href="#git-tools" className="text-blue-600 dark:text-blue-400 hover:underline">Git Tools</a></li>
              <li><a href="#collaboration" className="text-blue-600 dark:text-blue-400 hover:underline">Collaboration Platforms</a></li>
            </ul>
          </li>
          <li>
            <a href="#ci-cd" className="text-blue-600 dark:text-blue-400 hover:underline">CI/CD Tools</a>
          </li>
          <li>
            <a href="#cloud-services" className="text-blue-600 dark:text-blue-400 hover:underline">Cloud Services</a>
          </li>
          <li>
            <a href="#productivity" className="text-blue-600 dark:text-blue-400 hover:underline">Productivity Tools</a>
          </li>
        </ul>
      </nav>

      {/* Article Content */}
      <div className="prose dark:prose-invert max-w-none">
        <section id="introduction">
          <h2>Introduction</h2>
          <p>
            The landscape of software development is constantly evolving, and having the right tools in your 
            arsenal is crucial for maintaining productivity and code quality. This guide explores the essential 
            tools that modern developers rely on in 2024, from sophisticated IDEs to powerful cloud services. 
            Whether you're a seasoned developer or just starting your journey, understanding these tools will 
            help you build better software more efficiently.
          </p>
        </section>

        <section id="development-environments">
          <h2>Development Environments</h2>
          <p>
            Your development environment is where you'll spend most of your time. Let's explore the most 
            powerful and popular options available today.
          </p>

          <section id="ides">
            <h3>Modern IDEs</h3>
            <div className="not-prose mb-6">
              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4">Top IDEs by Category</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-2">Web Development</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Visual Studio Code</li>
                      <li>WebStorm</li>
                      <li>Sublime Text</li>
                      <li>Atom</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Mobile Development</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Android Studio</li>
                      <li>Xcode</li>
                      <li>Visual Studio</li>
                      <li>Flutter IDE</li>
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
              href="/ai/ai-code-generation-guide"
              className="group block bg-gray-50 dark:bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  The Rise of AI in Code Generation
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Learn how AI tools are revolutionizing software development workflows.
                </p>
              </div>
            </Link>
            <Link 
              href="/ai/chatgpt-plugins-guide"
              className="group block bg-gray-50 dark:bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Building ChatGPT Plugins
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Explore how to create plugins that extend ChatGPT's capabilities.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
} 