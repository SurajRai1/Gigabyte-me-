import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tech Resources & Knowledge Base | GigabyteMe',
  description: 'Access our comprehensive collection of tech articles, tutorials, and case studies. Stay updated with the latest in technology and business solutions.',
  keywords: 'tech blog, tutorials, case studies, tech guides, IT resources, learning materials, knowledge base',
};

export default function ResourcesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Resources</h1>
      
      {/* Tech Blog Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Tech Blog</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">Hardware</span>
              <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                <Link href="/guides/pc-building-guide" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Complete PC Building Guide 2024
                </Link>
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Step-by-step guide to building your own custom PC, from component selection to final assembly.
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">Software</span>
              <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                <Link href="/guides/web-development" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Modern Web Development Stack
                </Link>
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Explore the latest tools and technologies for building modern web applications.
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">Business</span>
              <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                <Link href="/guides/digital-transformation" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Digital Transformation Guide
                </Link>
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Essential strategies for businesses transitioning to digital operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Tutorials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Getting Started</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/tutorials/pc-building-basics" className="text-blue-600 dark:text-blue-400 hover:underline">
                  PC Building Basics
                </Link>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Learn the fundamentals of PC components and assembly.
                </p>
              </li>
              <li>
                <Link href="/tutorials/web-dev-fundamentals" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Web Development Fundamentals
                </Link>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Master the basics of HTML, CSS, and JavaScript.
                </p>
              </li>
              <li>
                <Link href="/tutorials/cloud-basics" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Cloud Computing Basics
                </Link>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Introduction to cloud services and deployment.
                </p>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Advanced Topics</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/tutorials/advanced-pc-optimization" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Advanced PC Optimization
                </Link>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Tips and tricks for maximizing PC performance.
                </p>
              </li>
              <li>
                <Link href="/tutorials/enterprise-architecture" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Enterprise Architecture
                </Link>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Design scalable and maintainable business systems.
                </p>
              </li>
              <li>
                <Link href="/tutorials/cybersecurity" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Cybersecurity Best Practices
                </Link>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Protect your business from cyber threats.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Case Studies</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <span className="inline-block px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-xs font-medium rounded-full mb-2">
                Success Story
              </span>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                E-commerce Migration
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                How we helped a retail business transition to online sales and increase revenue by 200%.
              </p>
              <Link href="/case-studies/ecommerce-migration" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                Read More →
              </Link>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <span className="inline-block px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-xs font-medium rounded-full mb-2">
                Success Story
              </span>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Cloud Migration
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Modernizing legacy systems for a financial services company, reducing costs by 40%.
              </p>
              <Link href="/case-studies/cloud-migration" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                Read More →
              </Link>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <span className="inline-block px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-xs font-medium rounded-full mb-2">
                Success Story
              </span>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                IT Infrastructure
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Building scalable IT infrastructure for a growing startup, supporting 300% growth.
              </p>
              <Link href="/case-studies/it-infrastructure" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-600 text-white rounded-lg p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-6">Subscribe to our newsletter for the latest tech insights and tutorials.</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg text-gray-900 w-full sm:w-96"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
} 