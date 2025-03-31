import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Rise of AI in Code Generation: A Developer's Guide | GigabyteMe",
  description: "Master AI-powered code generation with our comprehensive guide. Learn how to effectively use tools like GitHub Copilot, ChatGPT, and other AI assistants for software development.",
  keywords: "AI code generation, GitHub Copilot, ChatGPT coding, AI programming, code automation, AI development tools, machine learning coding",
  openGraph: {
    title: "The Rise of AI in Code Generation: A Developer's Guide",
    description: "Discover how to leverage AI-powered tools to enhance your coding workflow and boost productivity in software development.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
        width: 1200,
        height: 630,
        alt: "AI code generation visualization",
      },
    ],
  },
};

export default function AICodeGenerationGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Article Header */}
      <header className="mb-8 sm:mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:text-blue-300">
            AI
          </span>
          <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:text-purple-300">
            Programming
          </span>
          <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-300">
            Productivity
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          The Rise of AI in Code Generation: A Developer's Guide
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <time dateTime="2024-01-22">January 22, 2024</time>
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
            <a href="#ai-tools" className="text-blue-600 dark:text-blue-400 hover:underline">Popular AI Coding Tools</a>
            <ul className="ml-4 mt-2 space-y-2">
              <li><a href="#github-copilot" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub Copilot</a></li>
              <li><a href="#chatgpt" className="text-blue-600 dark:text-blue-400 hover:underline">ChatGPT for Coding</a></li>
              <li><a href="#other-tools" className="text-blue-600 dark:text-blue-400 hover:underline">Other AI Tools</a></li>
            </ul>
          </li>
          <li>
            <a href="#best-practices" className="text-blue-600 dark:text-blue-400 hover:underline">Best Practices</a>
            <ul className="ml-4 mt-2 space-y-2">
              <li><a href="#prompting" className="text-blue-600 dark:text-blue-400 hover:underline">Effective Prompting</a></li>
              <li><a href="#code-review" className="text-blue-600 dark:text-blue-400 hover:underline">AI-Assisted Code Review</a></li>
              <li><a href="#testing" className="text-blue-600 dark:text-blue-400 hover:underline">Testing Generated Code</a></li>
            </ul>
          </li>
          <li>
            <a href="#use-cases" className="text-blue-600 dark:text-blue-400 hover:underline">Common Use Cases</a>
          </li>
          <li>
            <a href="#limitations" className="text-blue-600 dark:text-blue-400 hover:underline">Limitations and Considerations</a>
          </li>
        </ul>
      </nav>

      {/* Article Content */}
      <div className="prose dark:prose-invert max-w-none">
        <section id="introduction">
          <h2>Introduction</h2>
          <p>
            Artificial Intelligence has revolutionized the way we write code. From auto-completing simple functions 
            to generating entire applications, AI-powered tools are becoming an integral part of modern software 
            development. This guide explores the current landscape of AI code generation, best practices for 
            leveraging these tools effectively, and important considerations for maintaining code quality.
          </p>
        </section>

        <section id="ai-tools">
          <h2>Popular AI Coding Tools</h2>
          <p>
            Let's explore the most powerful AI coding assistants available today and how they can enhance your 
            development workflow.
          </p>

          <section id="github-copilot">
            <h3>GitHub Copilot</h3>
            <div className="not-prose mb-6">
              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4">Key Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-2">Strengths</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Real-time code suggestions</li>
                      <li>Context-aware completions</li>
                      <li>Multi-language support</li>
                      <li>IDE integration</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Best For</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Repetitive coding tasks</li>
                      <li>Boilerplate generation</li>
                      <li>Learning new languages</li>
                      <li>Quick prototyping</li>
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
              href="/ai/chatgpt-plugins-guide"
              className="group block bg-gray-50 dark:bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Building ChatGPT Plugins: Complete Guide
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Learn how to create and deploy your own ChatGPT plugins using the OpenAI API.
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