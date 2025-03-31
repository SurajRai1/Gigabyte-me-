'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const programmingCategories = [
  {
    name: 'All Articles',
    href: '/programming',
  },
  {
    name: 'Development Tools',
    href: '/programming/modern-development-tools',
  },
  {
    name: 'Web Development',
    href: '/programming/web-development',
    comingSoon: true,
  },
  {
    name: 'Backend Development',
    href: '/programming/backend-development',
    comingSoon: true,
  },
  {
    name: 'DevOps & Cloud',
    href: '/programming/devops-cloud',
    comingSoon: true,
  },
  {
    name: 'Best Practices',
    href: '/programming/best-practices',
    comingSoon: true,
  },
];

export default function ProgrammingNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-20 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center overflow-x-auto no-scrollbar py-3">
          <div className="flex space-x-4">
            {programmingCategories.map((category) => {
              const isActive = pathname === category.href;
              return (
                <Link
                  key={category.href}
                  href={category.comingSoon ? '#' : category.href}
                  className={`
                    whitespace-nowrap px-3 py-2 rounded-lg text-sm font-medium transition-colors
                    ${isActive 
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' 
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