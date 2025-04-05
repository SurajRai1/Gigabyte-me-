import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://gigabyteme.com'),
  title: {
    default: 'GigabyteMe | Custom PC Building & Tech Solutions',
    template: '%s | GigabyteMe'
  },
  description: 'Professional custom PC building, web development, and tech consulting services. Expert solutions for gaming PCs, workstations, and digital transformation.',
  keywords: ['custom pc building', 'gaming pc', 'workstation pc', 'web development', 'tech consulting', 'it solutions', 'tech services'],
  authors: [{ name: 'GigabyteMe Team' }],
  creator: 'GigabyteMe',
  publisher: 'GigabyteMe',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gigabyteme.com',
    siteName: 'GigabyteMe',
    title: 'GigabyteMe | Custom PC Building & Tech Solutions',
    description: 'Professional custom PC building, web development, and tech consulting services. Expert solutions for gaming PCs, workstations, and digital transformation.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GigabyteMe - Custom PC Building & Tech Solutions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GigabyteMe | Custom PC Building & Tech Solutions',
    description: 'Professional custom PC building, web development, and tech consulting services. Expert solutions for gaming PCs, workstations, and digital transformation.',
    images: ['/images/twitter-image.jpg'],
    creator: '@gigabyteme',
    site: '@gigabyteme'
  },
  other: {
    "google-adsense-account": "ca-pub-6925559648076385"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6925559648076385"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900 transition-colors duration-200 min-h-screen flex flex-col`}>
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-14 sm:h-16">
              <div className="flex items-center gap-2 sm:gap-8">
                <Link href="/" className="flex items-center group">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transform transition-transform group-hover:scale-105">
                    GigabyteMe
                  </span>
                </Link>
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-4 lg:gap-6">
                  <Link href="/services" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-105">
                    Services
                  </Link>
                  <Link href="/solutions" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-105">
                    Solutions
                  </Link>
                  <Link href="/resources" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-105">
                    Resources
                  </Link>
                  <Link href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-105">
                    About
                  </Link>
                  <Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-105">
                    Contact
                  </Link>
                </nav>
              </div>
              <Navigation />
            </div>
          </div>
        </header>

        <main className="flex-grow pt-14 sm:pt-16">
          {children}
        </main>

        <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 mt-auto">
          <div className="max-w-7xl mx-auto py-6 sm:py-8 md:py-12 px-4">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
              <div className="sm:col-span-2">
                <Link href="/" className="inline-block group">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transform transition-transform group-hover:scale-105">
                    GigabyteMe
                  </span>
                </Link>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                  Your trusted partner for custom PC builds, web development solutions, and tech consulting services. We combine expertise with innovation to deliver exceptional results.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/services" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:translate-x-1 inline-block touch-manipulation py-1">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:translate-x-1 inline-block touch-manipulation py-1">
                      Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:translate-x-1 inline-block touch-manipulation py-1">
                      Resources
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:translate-x-1 inline-block touch-manipulation py-1">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:translate-x-1 inline-block touch-manipulation py-1">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:translate-x-1 inline-block touch-manipulation py-1">
                      Portfolio
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-6 sm:mt-8 sm:pt-8 border-t border-gray-100 dark:border-gray-800">
              <p className="text-xs sm:text-sm text-center text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} GigabyteMe. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
