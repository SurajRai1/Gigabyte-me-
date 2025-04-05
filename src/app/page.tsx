import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ResponsiveImage from "@/components/ResponsiveImage";
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: 'GigabyteMe | Custom PC Building & Tech Solutions',
  description: 'Professional PC building services, web development, and tech consulting. From gaming rigs to business solutions, we deliver exceptional tech experiences.',
  keywords: 'custom PC building, web development, tech consulting, gaming PC, business website, IT solutions',
};

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Your Partner in Tech Excellence
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              From custom PC builds to professional web solutions, we deliver exceptional tech experiences backed by expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Get Started
              </Link>
              <Link 
                href="/services"
                className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-center"
              >
                Our Services
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
      <section className="py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Our Core Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* PC Building */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
                alt="Custom PC Building"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Custom PC Building</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Professional PC assembly service for gaming, content creation, and workstation builds.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                <li>• Gaming PCs</li>
                <li>• Workstations</li>
                <li>• Custom Builds</li>
              </ul>
              <Link 
                href="/services/pc-building"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Web Development */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
          <Image
                src="https://images.unsplash.com/photo-1547658719-da2b51169166"
                alt="Web Development"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Modern, responsive websites and web applications built with cutting-edge technologies.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                <li>• Business Websites</li>
                <li>• E-commerce Solutions</li>
                <li>• Custom Web Apps</li>
              </ul>
              <Link 
                href="/services/web-development"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Tech Consulting */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
          <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
                alt="Tech Consulting"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Tech Consulting</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Expert guidance on technology strategy, infrastructure, and digital transformation.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                <li>• IT Strategy</li>
                <li>• Project Assessment</li>
                <li>• Ongoing Support</li>
              </ul>
              <Link 
                href="/pricing#tech-consulting"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Check Out Some of Our Recent Work
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group relative rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80"
              alt="Gaming PC Build"
              className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Ultimate Gaming PC Build</h3>
              <p className="text-gray-200">High-end gaming rig with custom water cooling and RGB setup.</p>
            </div>
          </div>
          <div className="group relative rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80"
              alt="Modern E-commerce Platform"
              className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Modern E-commerce Platform</h3>
              <p className="text-gray-200">Full-featured online store with custom inventory management.</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            href="/portfolio"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Why Choose GigabyteMe
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Expert Team</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Certified professionals with years of experience
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Fast Delivery</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Quick turnaround on all projects
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">24/7 Support</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Always here when you need us
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Secure & Reliable</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Quality and security guaranteed
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
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
              href="/pricing"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
