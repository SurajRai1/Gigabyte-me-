import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Custom PC Building Services | GigabyteMe',
  description: 'Professional custom PC building services for gaming, content creation, and workstations. Expert assembly, premium components, and lifetime support.',
  keywords: 'custom PC building, gaming PC, workstation PC, PC assembly, custom computer, PC building service',
};

export default function PCBuildingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Custom PC Building Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              From high-end gaming rigs to professional workstations, we build custom PCs tailored to your specific needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact?service=pc-building"
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
              src="https://images.unsplash.com/photo-1587202372616-b43abea06c2a"
              alt="Custom PC Build"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">Our PC Building Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-blue-600 dark:text-blue-400 text-2xl font-bold mb-4">01</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Consultation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We discuss your needs, budget, and performance requirements to design the perfect system.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-blue-600 dark:text-blue-400 text-2xl font-bold mb-4">02</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Component Selection</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We source premium components that match your requirements and ensure compatibility.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-blue-600 dark:text-blue-400 text-2xl font-bold mb-4">03</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Assembly & Testing</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Expert assembly with meticulous cable management and comprehensive testing.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-blue-600 dark:text-blue-400 text-2xl font-bold mb-4">04</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Delivery & Support</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Safe delivery and setup, plus ongoing technical support for your system.
            </p>
          </div>
        </div>
      </section>

      {/* PC Build Packages */}
      <section id="packages" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">PC Build Packages</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Gaming PC */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Gaming PC</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                High-performance gaming rigs built for immersive gameplay and streaming.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                <li>• Latest gaming processors</li>
                <li>• High-end graphics cards</li>
                <li>• Fast RAM and storage</li>
                <li>• RGB lighting options</li>
                <li>• Gaming peripherals setup</li>
              </ul>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Starting at $1,499
              </p>
              <Link 
                href="/contact?package=gaming"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Configure Your Build
              </Link>
            </div>
          </div>

          {/* Workstation PC */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Workstation PC</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Professional workstations for content creation and heavy workloads.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                <li>• Multi-core processors</li>
                <li>• Professional graphics</li>
                <li>• ECC memory options</li>
                <li>• Large storage arrays</li>
                <li>• Quiet cooling solution</li>
              </ul>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Starting at $1,999
              </p>
              <Link 
                href="/contact?package=workstation"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Configure Your Build
              </Link>
            </div>
          </div>

          {/* Custom Build */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Custom Build</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Fully customized PC built exactly to your specifications.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                <li>• Any configuration</li>
                <li>• Specialty components</li>
                <li>• Custom water cooling</li>
                <li>• Unique case mods</li>
                <li>• Performance tuning</li>
              </ul>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Custom Quote
              </p>
              <Link 
                href="/contact?package=custom"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Discuss Your Build
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">Why Choose Our PC Building Service</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Expert Assembly</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>✓ Professional cable management</li>
              <li>✓ Thermal paste application</li>
              <li>✓ Proper component installation</li>
              <li>✓ System stress testing</li>
              <li>✓ Quality control checks</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Premium Support</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>✓ 1-year build warranty</li>
              <li>✓ Lifetime technical support</li>
              <li>✓ Free BIOS updates</li>
              <li>✓ Performance optimization</li>
              <li>✓ Upgrade consultation</li>
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
              How long does it take to build a PC?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Typically 3-5 business days from component arrival to completion, including thorough testing.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Do you provide warranties?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, we offer a 1-year warranty on our build service, plus manufacturer warranties on components.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Can I upgrade my PC later?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, we design builds with future upgrades in mind and offer upgrade consultation services.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Do you ship nationwide?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, we offer secure shipping across the country with insurance and tracking.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Your Dream PC?</h2>
        <p className="text-xl mb-8">
          Contact us today for a free consultation and custom quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact?service=pc-building"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="/resources/pc-building-guide"
            className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Read Our Guide
          </Link>
        </div>
      </section>
    </div>
  );
} 