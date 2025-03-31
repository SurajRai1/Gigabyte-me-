import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProgrammingNav from "@/components/ProgrammingNav";

export const metadata: Metadata = {
  title: "Programming & Development Articles | GigabyteMe",
  description: "Explore modern software development practices, tools, and technologies. In-depth articles and tutorials for developers of all skill levels.",
  keywords: "programming articles, software development, coding tutorials, development tools, programming guides, tech articles",
};

export default function ProgrammingIndex() {
  return (
    <>
      <ProgrammingNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Programming & Development
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Stay up to date with modern development practices and master the tools that power today&apos;s software.
          </p>
        </header>

        {/* Featured Article */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Featured Article</h2>
          <Link 
            href="/programming/modern-development-tools"
            className="group block bg-gray-50 dark:bg-gray-800/50 rounded-2xl overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
              <div className="relative h-64 lg:h-full rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1618477247222-acbdb0e159b3"
                  alt="Modern software development workspace"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:text-blue-300">
                    Programming
                  </span>
                  <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:text-purple-300">
                    Development
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-4">
                  Essential Modern Development Tools: 2024 Guide
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Discover the most important tools for modern software development. From IDEs and version control to CI/CD and cloud services, learn what tools you need in your tech stack.
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <time dateTime="2024-01-28">January 28, 2024</time>
                  <span className="mx-2">•</span>
                  <span>15 min read</span>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* All Programming Articles Grid */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Modern Development Tools */}
            <Link 
              href="/programming/modern-development-tools"
              className="group block bg-gray-50 dark:bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1618477247222-acbdb0e159b3"
                  alt="Modern software development workspace"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:text-blue-300">
                    Programming
                  </span>
                  <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:text-purple-300">
                    Tools
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                  Essential Modern Development Tools
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Master the tools that power modern software development.
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <time dateTime="2024-01-28">January 28, 2024</time>
                  <span className="mx-2">•</span>
                  <span>15 min read</span>
                </div>
              </div>
            </Link>

            {/* Placeholder for future articles */}
            <div className="block bg-gray-50 dark:bg-gray-800/50 rounded-xl overflow-hidden border-2 border-dashed border-gray-200 dark:border-gray-700 p-12 text-center">
              <div className="flex flex-col items-center justify-center h-full">
                <span className="text-4xl mb-4">✨</span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">More Coming Soon</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Stay tuned for more programming and development articles!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 