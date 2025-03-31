import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Building ChatGPT Plugins: Complete Development Guide | GigabyteMe",
  description: "Learn how to create and deploy your own ChatGPT plugins. Step-by-step guide covering plugin architecture, development best practices, and deployment strategies.",
  keywords: "ChatGPT plugins, OpenAI API, plugin development, AI integration, custom plugins, ChatGPT development, AI plugins",
  openGraph: {
    title: "Building ChatGPT Plugins: Complete Development Guide",
    description: "Master ChatGPT plugin development with our comprehensive guide. From concept to deployment, learn how to extend ChatGPT's capabilities.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
        width: 1200,
        height: 630,
        alt: "AI plugin development visualization",
      },
    ],
  },
};

export default function ChatGPTPluginsGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Article Header */}
      <header className="mb-8 sm:mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:text-blue-300">
            AI
          </span>
          <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:text-purple-300">
            Development
          </span>
          <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-300">
            Tutorial
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Building ChatGPT Plugins: Complete Development Guide
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <time dateTime="2024-01-30">January 30, 2024</time>
          <span>•</span>
          <span>18 min read</span>
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
            <a href="#plugin-basics" className="text-blue-600 dark:text-blue-400 hover:underline">Plugin Basics</a>
            <ul className="ml-4 mt-2 space-y-2">
              <li><a href="#architecture" className="text-blue-600 dark:text-blue-400 hover:underline">Plugin Architecture</a></li>
              <li><a href="#manifest" className="text-blue-600 dark:text-blue-400 hover:underline">Manifest File</a></li>
              <li><a href="#openapi-spec" className="text-blue-600 dark:text-blue-400 hover:underline">OpenAPI Specification</a></li>
            </ul>
          </li>
          <li>
            <a href="#development" className="text-blue-600 dark:text-blue-400 hover:underline">Development Guide</a>
            <ul className="ml-4 mt-2 space-y-2">
              <li><a href="#setup" className="text-blue-600 dark:text-blue-400 hover:underline">Development Setup</a></li>
              <li><a href="#authentication" className="text-blue-600 dark:text-blue-400 hover:underline">Authentication</a></li>
              <li><a href="#api-endpoints" className="text-blue-600 dark:text-blue-400 hover:underline">API Endpoints</a></li>
            </ul>
          </li>
          <li>
            <a href="#deployment" className="text-blue-600 dark:text-blue-400 hover:underline">Deployment</a>
          </li>
          <li>
            <a href="#best-practices" className="text-blue-600 dark:text-blue-400 hover:underline">Best Practices</a>
          </li>
        </ul>
      </nav>

      {/* Article Content */}
      <div className="prose dark:prose-invert max-w-none">
        <section id="introduction">
          <h2>Introduction</h2>
          <p>
            ChatGPT plugins extend the capabilities of OpenAI's language model, allowing it to interact with 
            external services and perform specialized tasks. This guide will walk you through the process of 
            creating your own ChatGPT plugin, from understanding the basic architecture to deploying a 
            production-ready solution. Whether you're building a tool for data analysis, content generation, 
            or system integration, you'll learn the essential concepts and best practices.
          </p>
        </section>

        <section id="plugin-basics">
          <h2>Plugin Basics</h2>
          <p>
            Before diving into development, it's crucial to understand the fundamental components and 
            architecture of ChatGPT plugins.
          </p>

          <section id="architecture">
            <h3>Plugin Architecture</h3>
            <div className="not-prose mb-6">
              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4">Core Components</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-2">Required Files</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>ai-plugin.json</li>
                      <li>openapi.yaml</li>
                      <li>logo.png</li>
                      <li>API implementation</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Key Features</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>REST API endpoints</li>
                      <li>Authentication handling</li>
                      <li>Natural language processing</li>
                      <li>Error handling</li>
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
                  Explore how AI is transforming software development with automated code generation.
                </p>
              </div>
            </Link>
            <Link 
              href="/programming/modern-development-tools"
              className="group block bg-gray-50 dark:bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Essential Modern Development Tools
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Discover the tools and technologies shaping the future of software development.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
} 