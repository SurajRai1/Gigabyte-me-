import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About GigabyteMe | Your Ultimate Tech Hub',
  description: 'Learn about GigabyteMe - your trusted source for in-depth tech content, covering hardware, software, AI, and programming. Meet our team and discover our mission.',
  keywords: 'GigabyteMe, tech blog, about us, tech writers, technology blog, tech hub',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          About GigabyteMe
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Your trusted destination for in-depth tech content, expert insights, and comprehensive guides.
        </p>
      </header>

      <div className="prose dark:prose-invert max-w-none">
        <section className="mb-12">
          <h2>Our Mission</h2>
          <p>
            At GigabyteMe, we're passionate about making technology accessible and understandable for everyone. 
            Whether you're a seasoned developer, a hardware enthusiast, or someone taking their first steps into 
            the tech world, we're here to guide you through the ever-evolving landscape of technology.
          </p>
        </section>

        <section className="mb-12">
          <h2>What We Cover</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Hardware</h3>
              <p>From building gaming PCs to reviewing the latest gadgets, we provide detailed insights into the physical tech that powers our digital world.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Software</h3>
              <p>Stay updated with the latest software trends, tools, and applications that are shaping the future of computing.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Programming</h3>
              <p>Dive deep into coding tutorials, best practices, and programming languages that power modern applications.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">AI & Future Tech</h3>
              <p>Explore the cutting edge of technology with our coverage of AI, machine learning, and emerging tech trends.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Our Team</h2>
          <p>
            GigabyteMe is powered by a team of passionate tech enthusiasts, professional developers, 
            and industry experts. Each team member brings unique expertise and perspective to provide 
            you with comprehensive, accurate, and engaging content.
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Add team member cards here when ready */}
          </div>
        </section>

        <section className="mb-12">
          <h2>Join Our Community</h2>
          <p>
            GigabyteMe is more than just a blog - it's a community. Follow us on social media, 
            subscribe to our newsletter, and join the conversation in our comments section to 
            connect with fellow tech enthusiasts.
          </p>
          
          <div className="mt-6 flex gap-4">
            {/* Add social media links here */}
          </div>
        </section>
      </div>
    </div>
  );
} 