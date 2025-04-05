import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from './ContactForm';
import { submitContactForm } from './actions';

export const metadata: Metadata = {
  title: 'Contact Us | GigabyteMe',
  description: 'Get in touch for custom PC builds, web development projects, or tech consulting. We offer free consultations and quotes for all services.',
  keywords: 'contact, custom PC quote, web development inquiry, tech consulting, free consultation',
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Contact Us
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Ready to start your project? Get in touch for a free consultation and quote. We'll help you choose the right solution for your needs.
        </p>
      </section>

      {/* Contact Form */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto">
          <ContactForm action={submitContactForm} />
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">
            Other Ways to Reach Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">
                <a href="mailto:surajraiglobal@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400">
                  surajraiglobal@gmail.com
                </a>
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
              <p className="text-gray-600 dark:text-gray-300">
                <a href="tel:+918794509251" className="hover:text-blue-600 dark:hover:text-blue-400">
                  +91 879 450 9251
                </a>
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Address</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Upper Chandmari<br />
                Kohima, Nagaland<br />
                797001
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                How soon can you start?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We typically begin projects within 1-2 weeks of proposal acceptance.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Do you offer rush services?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, we can accommodate rush projects for an additional fee.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                What are your payment terms?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We typically require a 50% deposit to begin work, with the balance due upon completion.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Do you offer support after completion?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, we provide ongoing support and maintenance packages for all our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">
            Need More Information?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/portfolio" className="block">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  View Our Portfolio →
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Explore our past projects and see how we've helped other clients achieve their goals.
                </p>
              </div>
            </Link>
            <Link href="/resources" className="block">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Browse Resources →
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Check out our guides, tutorials, and case studies to learn more about our services.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Privacy Notice */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Privacy Notice
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              By submitting this form, you agree to our privacy policy. We'll only use your information to respond to your inquiry and provide relevant services. We never share your data with third parties without consent.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 