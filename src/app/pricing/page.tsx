import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing & Packages | GigabyteMe',
  description: 'Transparent pricing for our PC building, web development, and tech consulting services. Choose the package that best fits your needs.',
  keywords: 'pricing, packages, PC building, web development, tech consulting, services',
};

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Transparent Pricing for Every Need
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Choose from our range of services and packages. All prices include consultation, implementation, and support.
        </p>
      </section>

      {/* PC Building Packages */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">
          Custom PC Building
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Gaming PC */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Gaming PC</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                High-performance gaming rig optimized for smooth gameplay.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                <li>• Premium gaming components</li>
                <li>• RGB lighting setup</li>
                <li>• Overclocking optimization</li>
                <li>• Gaming peripherals setup</li>
                <li>• 1-year warranty</li>
              </ul>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Starting at $1,499
              </p>
              <Link 
                href="/contact?package=gaming-pc"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Configure Build
              </Link>
            </div>
          </div>

          {/* Workstation PC */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Workstation PC</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Professional workstation for content creation and development.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                <li>• High-end CPU & GPU</li>
                <li>• Large RAM capacity</li>
                <li>• NVMe storage</li>
                <li>• Multi-monitor setup</li>
                <li>• 1-year warranty</li>
              </ul>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Starting at $2,499
              </p>
              <Link 
                href="/contact?package=workstation-pc"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Configure Build
              </Link>
            </div>
          </div>

          {/* Custom Build */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Custom Build</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Fully customized PC built to your exact specifications.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                <li>• Custom component selection</li>
                <li>• Specialized cooling solutions</li>
                <li>• Custom case modifications</li>
                <li>• Performance tuning</li>
                <li>• 1-year warranty</li>
              </ul>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Custom Quote
              </p>
              <Link 
                href="/contact?package=custom-pc"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Discuss Build
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Web Development Packages */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">
          Web Development
        </h2>
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
                Discuss Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Consulting */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">
          Tech Consulting
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Consultation */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Basic Consultation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                One-time consultation for specific tech needs.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                <li>• 2-hour consultation</li>
                <li>• Tech stack review</li>
                <li>• Basic recommendations</li>
                <li>• Written summary</li>
                <li>• Follow-up email</li>
              </ul>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                $299
              </p>
              <Link 
                href="/contact?package=basic-consulting"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Book Session
              </Link>
            </div>
          </div>

          {/* Project Assessment */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Project Assessment</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Comprehensive project evaluation and planning.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                <li>• Full project review</li>
                <li>• Technical architecture</li>
                <li>• Security assessment</li>
                <li>• Detailed roadmap</li>
                <li>• ROI analysis</li>
              </ul>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Starting at $999
              </p>
              <Link 
                href="/contact?package=project-assessment"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Assessment
              </Link>
            </div>
          </div>

          {/* Ongoing Support */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Ongoing Support</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Regular technical guidance and support.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                <li>• Monthly meetings</li>
                <li>• Priority support</li>
                <li>• Performance monitoring</li>
                <li>• Security updates</li>
                <li>• Tech stack optimization</li>
              </ul>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                From $499/month
              </p>
              <Link 
                href="/contact?package=ongoing-support"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Do you offer custom packages?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, we&apos;ll work with you to create a custom package that meets your specific needs and budget.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              What payment methods do you accept?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We accept all major credit cards, bank transfers, and PayPal.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Are there any hidden fees?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              No, our pricing is transparent with no hidden fees. Any additional costs will be discussed upfront.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Do you offer refunds?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We have a satisfaction guarantee and will work with you to ensure you're happy with our services.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              What&apos;s your refund policy?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We have a satisfaction guarantee and will work with you to ensure you're happy with our services.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8">
          Contact us today for a free consultation and let's discuss your project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Us
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