import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GigabyteMe | Your Ultimate Tech Hub",
  description: "Your go-to destination for everything tech - from gadgets and computers to AI, software, and programming languages.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
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
                  <Link href="/programming" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-105">
                    Programming
                  </Link>
                  <Link href="/ai" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-105">
                    AI
                  </Link>
                  <Link href="/guides" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-105">
                    Guides
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
                  Your ultimate destination for everything tech - from the latest gadgets and computer builds to cutting-edge AI, software development, and programming insights.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/programming" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:translate-x-1 inline-block touch-manipulation py-1">
                      Programming
                    </Link>
                  </li>
                  <li>
                    <Link href="/ai" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:translate-x-1 inline-block touch-manipulation py-1">
                      AI
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:translate-x-1 inline-block touch-manipulation py-1">
                      Guides
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Stay Updated</h3>
                <form className="flex flex-col gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 h-10 text-sm border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-800 dark:text-white transition-all hover:border-blue-500 dark:hover:border-blue-400"
                  />
                  <button
                    type="submit"
                    className="w-full h-10 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-md transition-all hover:scale-[1.02] active:scale-[0.98] touch-manipulation"
                  >
                    Subscribe
                  </button>
                </form>
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
