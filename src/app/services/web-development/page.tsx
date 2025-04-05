import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Professional Web Development Services | GigabyteMe',
  description: 'Custom website development, e-commerce solutions, and web applications. Modern, responsive, and scalable websites built with cutting-edge technologies.',
  keywords: 'web development, website design, e-commerce, web applications, CMS, responsive design',
};

export default function WebDevelopmentPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Web Development Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Transform your online presence with modern, responsive, and high-performance websites built using cutting-edge technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact?service=web-development"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Get a Quote
              </Link>
              <Link 
                href="#packages"
                className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-center"
              >
                View Packages
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1547658719-da2b51169166"
              alt="Web Development"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">Our Development Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-blue-600 dark:text-blue-400 text-2xl font-bold mb-4">01</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Discovery</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Understanding your goals, requirements, and target audience.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-blue-600 dark:text-blue-400 text-2xl font-bold mb-4">02</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Design</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Creating wireframes and visual designs for your approval.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-blue-600 dark:text-blue-400 text-2xl font-bold mb-4">03</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Development</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Building your website with modern technologies and best practices.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-blue-600 dark:text-blue-400 text-2xl font-bold mb-4">04</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Launch & Support</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Deploying your site and providing ongoing maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section id="packages" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">Web Development Packages</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Business Website */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Business Website</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Professional website for small to medium businesses.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                <li>• 5-10 custom pages</li>
                <li>• Responsive design</li>
                <li>• Contact forms</li>
                <li>• SEO optimization</li>
                <li>• Analytics integration</li>
              </ul>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Starting at $2,499
              </p>
              <Link 
                href="/contact?package=business-website"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* E-commerce */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">E-commerce</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Full-featured online store with payment processing.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                <li>• Product management</li>
                <li>• Shopping cart</li>
                <li>• Payment gateway</li>
                <li>• Order management</li>
                <li>• Inventory tracking</li>
              </ul>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Starting at $4,999
              </p>
              <Link 
                href="/contact?package=ecommerce"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Custom Web App */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Custom Web App</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Tailored web application for your specific needs.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                <li>• Custom functionality</li>
                <li>• User authentication</li>
                <li>• Database integration</li>
                <li>• API development</li>
                <li>• Scalable architecture</li>
              </ul>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Custom Quote
              </p>
              <Link 
                href="/contact?package=custom-web-app"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Discuss Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">Technologies We Use</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Frontend</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>• React / Next.js</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• Vue.js</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Backend</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>• Node.js</li>
              <li>• Python</li>
              <li>• PostgreSQL</li>
              <li>• MongoDB</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">E-commerce</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>• Shopify</li>
              <li>• WooCommerce</li>
              <li>• Stripe</li>
              <li>• PayPal</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">CMS</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>• WordPress</li>
              <li>• Strapi</li>
              <li>• Sanity</li>
              <li>• Contentful</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              How long does it take to build a website?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Typically 4-8 weeks depending on complexity, but we can work with your timeline.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Do you provide hosting?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, we offer managed hosting solutions with 99.9% uptime guarantee.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Can I update the website myself?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, we provide a user-friendly CMS and training for content updates.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Do you provide ongoing support?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, we offer various maintenance packages to keep your site secure and up-to-date.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Your Website?</h2>
        <p className="text-xl mb-8">
          Contact us today for a free consultation and project quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact?service=web-development"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="/portfolio"
            className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            View Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
} 