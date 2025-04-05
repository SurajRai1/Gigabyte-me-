import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Message Sent Successfully | GigabyteMe',
  description: 'Thank you for contacting GigabyteMe. We will get back to you shortly.',
  keywords: 'contact success, message sent, thank you',
};

export default function SuccessPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-green-600 dark:text-green-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Message Sent Successfully!
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Thank you for reaching out. We&apos;ll get back to you as soon as possible.
        </p>

        {/* What to Expect */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            What to Expect
          </h2>
          <ul className="text-left text-gray-600 dark:text-gray-300 space-y-4">
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-green-600 dark:text-green-400 mr-2 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>We&apos;ll review your message within 24 hours</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-green-600 dark:text-green-400 mr-2 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>You&apos;ll receive a detailed response with next steps</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-green-600 dark:text-green-400 mr-2 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>We&apos;ll schedule a consultation if needed</span>
            </li>
          </ul>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Return Home
          </Link>
          <Link
            href="/portfolio"
            className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </div>
  );
} 