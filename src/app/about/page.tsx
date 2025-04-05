import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About GigabyteMe | Your Tech Solutions Partner',
  description: 'Learn about GigabyteMe - your trusted partner for custom PC building, web development, and tech consulting services. Professional solutions backed by deep technical expertise.',
  keywords: 'about gigabyteme, tech company, PC building services, web development company, tech consulting, IT solutions',
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Mission Section */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About GigabyteMe</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            GigabyteMe is a comprehensive technology solutions provider, combining expert PC building services with professional web development and tech consulting. We bridge the gap between hardware and software, offering end-to-end solutions for both individuals and businesses.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Our mission is to deliver exceptional tech solutions that empower our clients to achieve their goals, whether that&apos;s building a high-performance gaming PC or transforming their business through digital innovation.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Custom PC Building</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>• Premium component selection</li>
              <li>• Expert assembly and testing</li>
              <li>• Performance optimization</li>
              <li>• Gaming and workstation builds</li>
              <li>• Ongoing technical support</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Web Development</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>• Custom website development</li>
              <li>• E-commerce solutions</li>
              <li>• Web applications</li>
              <li>• CMS implementation</li>
              <li>• Maintenance and support</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Tech Consulting</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>• IT infrastructure planning</li>
              <li>• Digital transformation</li>
              <li>• Technology strategy</li>
              <li>• Security consulting</li>
              <li>• Cloud solutions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Our Expertise</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              With years of experience in both hardware and software, our team brings deep technical knowledge and practical expertise to every project. We stay at the forefront of technology trends to deliver cutting-edge solutions.
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>✓ Certified technicians and developers</li>
              <li>✓ Proven track record of successful projects</li>
              <li>✓ Continuous learning and improvement</li>
              <li>✓ Industry best practices</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Our Commitment</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We&apos;re committed to delivering exceptional quality and service. Every PC we build and every website we develop is crafted with attention to detail and a focus on performance.
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>✓ Quality assurance on all deliverables</li>
              <li>✓ Transparent communication</li>
              <li>✓ Competitive pricing</li>
              <li>✓ Ongoing support and maintenance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Our Team</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Our team consists of passionate tech enthusiasts, skilled developers, and experienced consultants who are dedicated to delivering exceptional results for our clients.
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {/* Add team member cards here when ready */}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
        <p className="text-lg mb-6">Let&apos;s discuss how we can help you achieve your technology goals.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </a>
          <a 
            href="/services" 
            className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            View Services
          </a>
        </div>
      </section>
    </div>
  );
} 