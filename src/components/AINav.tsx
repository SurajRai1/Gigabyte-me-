'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const aiCategories = [
  {
    name: 'All Articles',
    href: '/ai',
  },
  {
    name: 'Code Generation',
    href: '/ai/ai-code-generation-guide',
  },
  {
    name: 'ChatGPT Plugins',
    href: '/ai/chatgpt-plugins-guide',
  },
  {
    name: 'Machine Learning',
    href: '/ai/machine-learning',
    comingSoon: true,
  },
  {
    name: 'AI Tools',
    href: '/ai/ai-tools',
    comingSoon: true,
  },
  {
    name: 'AI Ethics',
    href: '/ai/ai-ethics',
    comingSoon: true,
  },
];

export default function AINav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-20 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center overflow-x-auto no-scrollbar py-3">
          <div className="flex space-x-4">
            {aiCategories.map((category) => {
              const isActive = pathname === category.href;
              return (
                <Link
                  key={category.href}
                  href={category.comingSoon ? '#' : category.href}
                  className={`
                    whitespace-nowrap px-3 py-2 rounded-lg text-sm font-medium transition-colors
                    ${isActive 
                      ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' 
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }
                    ${category.comingSoon ? 'opacity-50 cursor-not-allowed' : ''}
                  `}
                >
                  {category.name}
                  {category.comingSoon && (
                    <span className="ml-2 inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs font-medium text-gray-600 dark:text-gray-400">
                      Soon
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
} 