import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Tech Services | GigabyteMe',
  description: 'Expert PC building, website development, and tech consulting services. Custom solutions tailored to your needs with professional support and competitive pricing.',
  keywords: 'PC building, custom PC, website development, tech consulting, IT services, web design, computer assembly, tech solutions',
};

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Our Services</h1>
      
      {/* PC Building Service */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Custom PC Building</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              From gaming rigs to workstations, we build custom PCs tailored to your specific needs and budget. Our expert team ensures:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Premium component selection</li>
              <li>Professional assembly and cable management</li>
              <li>Thorough testing and benchmarking</li>
              <li>Windows installation and optimization</li>
              <li>1-year build warranty</li>
            </ul>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Featured Builds</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Gaming Pro</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">High-performance gaming PC with latest RTX graphics</p>
              </div>
              <div>
                <h4 className="font-medium">Creator Studio</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Optimized for video editing and 3D rendering</p>
              </div>
              <div>
                <h4 className="font-medium">Office Elite</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Reliable business workstation for productivity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Development Service */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Website Development</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Modern, responsive websites built with the latest technologies. Our web development services include:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Custom website design and development</li>
              <li>E-commerce solutions</li>
              <li>Content Management Systems (CMS)</li>
              <li>SEO optimization</li>
              <li>Ongoing maintenance and support</li>
            </ul>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Technologies We Use</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium">Frontend</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium">Backend</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Consulting Service */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Tech Consulting</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Expert guidance for your technology needs. Our consulting services cover:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>IT infrastructure planning</li>
              <li>Software selection and implementation</li>
              <li>Security audits and recommendations</li>
              <li>Cloud migration strategies</li>
              <li>Performance optimization</li>
            </ul>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Industries Served</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Small Business</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Tailored solutions for growing companies</p>
              </div>
              <div>
                <h4 className="font-medium">Enterprise</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Large-scale infrastructure and solutions</p>
              </div>
              <div>
                <h4 className="font-medium">Startups</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Agile tech stack and scalable architecture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-6">Contact us for a free consultation and quote.</p>
        <a 
          href="/contact" 
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
} 