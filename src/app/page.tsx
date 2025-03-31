import Link from "next/link";
import ResponsiveImage from "@/components/ResponsiveImage";
import { images } from "@/config/images";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      {/* Hero Article */}
      <article className="mb-8 sm:mb-16">
        <div className="flex flex-col md:flex-row gap-4 sm:gap-8">
          <div className="flex-1 order-2 md:order-1">
            <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-2.5 py-0.5 text-xs sm:text-sm font-medium text-blue-800 dark:text-blue-300 mb-3 sm:mb-4">
              Featured
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Building Your Dream Gaming PC: Ultimate Guide 2024
            </h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
              From choosing the right components to assembly tips - everything you need to know about building a powerful gaming rig in 2024.
            </p>
            <Link
              href="/guides/gaming-pc-build-2024"
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Read Full Guide
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <ResponsiveImage
              src={images.hero.url}
              alt={images.hero.alt}
              aspectRatio="4:3"
          priority
              credit={{
                name: images.hero.credit,
                url: images.hero.creditUrl,
              }}
            />
          </div>
        </div>
      </article>

      {/* Latest Articles */}
      <section className="mb-8 sm:mb-16">
        <div className="flex items-center justify-between mb-4 sm:mb-8">
          <h2 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">Latest Articles</h2>
          <Link href="/latest" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {[
            {
              title: "The Rise of AI in Code Generation",
              excerpt: "How AI-powered tools like GitHub Copilot are transforming software development.",
              category: "AI & Programming",
              readTime: "7",
              image: images.articles.aiCoding,
              href: "/ai/ai-code-generation-guide",
            },
            {
              title: "Best Linux Distros for Developers",
              excerpt: "A comprehensive comparison of Linux distributions tailored for development work.",
              category: "Software",
              readTime: "8",
              image: images.articles.linuxDistros,
              href: "/guides/linux-distros-guide",
            },
            {
              title: "Next-Gen CPUs: What to Expect",
              excerpt: "Analyzing the upcoming processor releases and their potential impact on computing.",
              category: "Hardware",
              readTime: "6",
              image: images.articles.nextGenCPUs,
              href: "/guides/next-gen-cpus",
            }
          ].map((article, i) => (
            <Link key={i} href={article.href} className="block group">
              <article className="h-full">
                <ResponsiveImage
                  src={article.image.url}
                  alt={article.image.alt}
                  aspectRatio="16:9"
                  className="mb-3 sm:mb-4 transform transition-transform group-hover:scale-[1.02]"
                  credit={{
                    name: article.image.credit,
                    url: article.image.creditUrl,
                  }}
                  insideLink={true}
                />
                <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  <span>{article.readTime} min read</span>
                  <span className="mx-2">•</span>
                  <span>{article.category}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Must Read */}
      <section className="mb-8 sm:mb-16">
        <h2 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-4 sm:mb-8">Must Read Guides</h2>
        <div className="space-y-4 sm:space-y-8">
          {[
            {
              title: "Mechanical Keyboards: A Complete Guide",
              excerpt: "Everything you need to know about switches, layouts, and customization options.",
              category: "Hardware",
              readTime: "10",
              image: images.guides.mechanicalKeyboards,
              href: "/guides/mechanical-keyboards-guide",
            },
            {
              title: "Getting Started with Docker",
              excerpt: "Learn how to containerize your applications for better development and deployment.",
              category: "Development",
              readTime: "12",
              image: images.guides.docker,
              href: "/guides/docker-guide",
            },
            {
              title: "Understanding Neural Networks",
              excerpt: "A beginner-friendly guide to the fundamentals of neural networks and deep learning.",
              category: "AI",
              readTime: "15",
              image: images.guides.neuralNetworks,
              href: "/ai/neural-networks-guide",
            }
          ].map((guide, i) => (
            <Link key={i} href={guide.href} className="block group">
              <article className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="w-full sm:w-48 flex-shrink-0">
                  <ResponsiveImage
                    src={guide.image.url}
                    alt={guide.image.alt}
                    aspectRatio="4:3"
                    className="transform transition-transform group-hover:scale-[1.02]"
                    credit={{
                      name: guide.image.credit,
                      url: guide.image.creditUrl,
                    }}
                    insideLink={true}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                    {guide.excerpt}
                  </p>
                  <div className="flex items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    <span>{guide.readTime} min read</span>
                    <span className="mx-2">•</span>
                    <span>{guide.category}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Weekly Highlights */}
      <section>
        <div className="flex items-center justify-between mb-4 sm:mb-8">
          <h2 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">Weekly Highlights</h2>
          <Link href="/highlights" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {[
            {
              title: "Python vs Rust: Performance Showdown",
              excerpt: "Comparing the performance characteristics of Python and Rust in real-world scenarios.",
              category: "Programming",
              readTime: "8",
              image: images.highlights.pythonVsRust,
              href: "/programming/python-vs-rust",
            },
            {
              title: "Best Budget GPUs for 2024",
              excerpt: "Top graphics cards that offer the best value for money this year.",
              category: "Hardware",
              readTime: "6",
              image: images.highlights.budgetGPUs,
              href: "/guides/budget-gpus-2024",
            },
            {
              title: "ChatGPT Plugins Development",
              excerpt: "How to create and deploy your own ChatGPT plugins using the OpenAI API.",
              category: "AI",
              readTime: "9",
              image: images.highlights.chatGPTPlugins,
              href: "/ai/chatgpt-plugins-guide",
            }
          ].map((article, i) => (
            <Link key={i} href={article.href} className="block group">
              <article className="h-full">
                <ResponsiveImage
                  src={article.image.url}
                  alt={article.image.alt}
                  aspectRatio="16:9"
                  className="mb-3 sm:mb-4 transform transition-transform group-hover:scale-[1.02]"
                  credit={{
                    name: article.image.credit,
                    url: article.image.creditUrl,
                  }}
                  insideLink={true}
                />
                <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  <span>{article.readTime} min read</span>
                  <span className="mx-2">•</span>
                  <span>{article.category}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
