'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  aspectRatio?: '16:9' | '4:3' | '21:9' | '1:1';
  priority?: boolean;
  className?: string;
  credit?: {
    name: string;
    url?: string;
  };
  insideLink?: boolean;
}

export default function ResponsiveImage({
  src,
  alt,
  aspectRatio = '16:9',
  priority = false,
  className = '',
  credit,
  insideLink = false,
}: ResponsiveImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Calculate aspect ratio padding
  const aspectRatioPadding = {
    '16:9': 'pb-[56.25%]', // (9 / 16) * 100
    '4:3': 'pb-[75%]',     // (3 / 4) * 100
    '21:9': 'pb-[42.85%]', // (9 / 21) * 100
    '1:1': 'pb-[100%]',    // Square aspect ratio
  }[aspectRatio];

  const handleCreditClick = (e: React.MouseEvent) => {
    if (insideLink) {
      e.stopPropagation();
      window.open(credit?.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="relative w-full">
      <div className={`relative w-full ${aspectRatioPadding} bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-lg ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className={`
            object-cover
            duration-700 ease-in-out
            ${isLoading ? 'scale-110 blur-lg' : 'scale-100 blur-0'}
          `}
          priority={priority}
          onLoadingComplete={() => setIsLoading(false)}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        
        {/* Loading animation */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-gray-200 dark:border-gray-700 border-t-blue-500 dark:border-t-blue-400 rounded-full animate-spin" />
          </div>
        )}

        {/* Image credit */}
        {credit && (
          <div 
            className="absolute bottom-0 right-0 bg-black/50 text-white text-xs px-2 py-1 rounded-tl-lg"
            onClick={handleCreditClick}
          >
            {credit.url ? (
              <a 
                href={credit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                onClick={e => insideLink && e.preventDefault()}
              >
                © {credit.name}
              </a>
            ) : (
              <span>© {credit.name}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 