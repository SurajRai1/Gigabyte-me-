import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Portfolio | GigabyteMe',
  description: 'Explore our portfolio of custom PC builds, web development projects, and tech solutions. See how we deliver exceptional results for our clients.',
  keywords: 'portfolio, custom PC builds, web development projects, case studies, tech solutions',
};

export default function PortfolioPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Our Portfolio
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Explore our showcase of custom PC builds, web development projects, and tech solutions that demonstrate our expertise and commitment to excellence.
        </p>
      </section>

      {/* PC Builds */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">
          Custom PC Builds
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Gaming Build */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-80">
              <Image
                src="https://images.unsplash.com/photo-1587202372161-587a58755487"
                alt="Gaming PC Build"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Ultimate Gaming Rig
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                High-performance gaming PC featuring custom water cooling, RTX 4090, and RGB lighting.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                  Gaming
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                  Water Cooling
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                  RGB
                </span>
              </div>
            </div>
          </div>

          {/* Workstation Build */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-80">
              <Image
                src="https://images.unsplash.com/photo-1587202372555-33827c6a2c76"
                alt="Workstation PC Build"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Professional Workstation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Content creation powerhouse with dual Xeon processors and NVIDIA Quadro graphics.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                  Workstation
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                  Dual CPU
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                  Professional
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Development Projects */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">
          Web Development Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* E-commerce Project */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="E-commerce Website"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Modern E-commerce Platform
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Full-featured online store with custom inventory management system.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                  Next.js
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                  Stripe
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                  PostgreSQL
                </span>
              </div>
            </div>
          </div>

          {/* Business Website */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d"
                alt="Business Website"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Corporate Website Redesign
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Modern, responsive website with CMS integration and analytics.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                  React
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                  Sanity
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                  Analytics
                </span>
              </div>
            </div>
          </div>

          {/* Web App */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                alt="Custom Web App"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Custom Project Management App
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Scalable web application with real-time updates and team collaboration.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                  Vue.js
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                  Node.js
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                  MongoDB
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">
          Case Studies
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* E-commerce Case Study */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                E-commerce Migration Success
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Helped a retail client migrate from Magento to a modern Next.js + Shopify solution, resulting in:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                <li>• 50% faster page load times</li>
                <li>• 30% increase in conversion rate</li>
                <li>• 40% reduction in operating costs</li>
              </ul>
              <Link 
                href="/case-studies/ecommerce-migration"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Read Case Study →
              </Link>
            </div>
          </div>

          {/* IT Infrastructure Case Study */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                IT Infrastructure Overhaul
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Modernized a company's IT infrastructure with custom workstations and cloud integration:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                <li>• 60% improvement in workflow efficiency</li>
                <li>• 45% reduction in IT support tickets</li>
                <li>• 100% uptime achievement</li>
              </ul>
              <Link 
                href="/case-studies/it-infrastructure"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Read Case Study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-xl mb-8">
          Let&apos;s create something amazing together. Contact us for a free consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="/pricing"
            className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            View Pricing
          </Link>
        </div>
      </section>
    </div>
  );
} 