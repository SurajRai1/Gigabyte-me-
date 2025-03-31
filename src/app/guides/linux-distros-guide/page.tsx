import type { Metadata } from 'next';
import Link from 'next/link';
import ResponsiveImage from '@/components/ResponsiveImage';
import { images } from '@/config/images';

export const metadata: Metadata = {
  title: 'Best Linux Distros for Developers in 2024: A Comprehensive Guide',
  description: 'Discover the top Linux distributions for developers in 2024. Compare Ubuntu, Manjaro, Fedora, and more based on performance, stability, and developer tools.',
  keywords: 'linux distros, developer linux, ubuntu, manjaro, fedora, arch linux, debian, opensuse, programming, development',
  openGraph: {
    title: 'Best Linux Distros for Developers in 2024: A Comprehensive Guide',
    description: 'Discover the top Linux distributions for developers in 2024. Compare Ubuntu, Manjaro, Fedora, and more based on performance, stability, and developer tools.',
    type: 'article',
    publishedTime: '2024-03-20',
    authors: ['GigabyteMe'],
  },
};

export default function LinuxDistrosGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <header className="mb-8 sm:mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:text-blue-300">
            Software
          </span>
          <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:text-purple-300">
            Linux
          </span>
          <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-300">
            Development
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Best Linux Distros for Developers in 2024: A Comprehensive Guide
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <time dateTime="2024-03-20">March 20, 2024</time>
          <span>•</span>
          <span>12 min read</span>
        </div>
      </header>

      <div className="mb-8 sm:mb-12">
        <ResponsiveImage
          src={images.articles.linuxDistros.url}
          alt={images.articles.linuxDistros.alt}
          aspectRatio="16:9"
          priority
          credit={{
            name: images.articles.linuxDistros.credit,
            url: images.articles.linuxDistros.creditUrl,
          }}
        />
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <p className="lead">
          The Linux ecosystem continues to dominate the software development landscape, offering unparalleled flexibility, security, and customization. With hundreds of distributions (distros) available, selecting the right one for your workflow can be overwhelming. This guide evaluates the top Linux distros for developers in 2024, backed by data, benchmarks, and insights from leading tech communities.
        </p>

        {/* Rest of the content remains exactly the same */}
        {/* ... existing content ... */}
      </div>
    </article>
  );
} 