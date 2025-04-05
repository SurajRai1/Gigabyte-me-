import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business & Enterprise Solutions | GigabyteMe',
  description: 'Comprehensive technology solutions for businesses. From IT infrastructure to digital transformation, we help organizations leverage technology for growth.',
  keywords: 'business solutions, enterprise IT, digital transformation, IT infrastructure, cloud solutions, cybersecurity, business technology',
};

export default function SolutionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Business Solutions</h1>
      
      {/* Business Solutions */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Enterprise IT Solutions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Comprehensive IT solutions designed to enhance your business operations and drive growth. Our enterprise services include:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Network infrastructure design and implementation</li>
              <li>Cloud migration and management</li>
              <li>Cybersecurity solutions</li>
              <li>Data backup and disaster recovery</li>
              <li>24/7 IT support and monitoring</li>
            </ul>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Enhanced Security</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Protect your business with enterprise-grade security solutions</p>
              </div>
              <div>
                <h4 className="font-medium">Improved Efficiency</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Streamline operations with optimized IT infrastructure</p>
              </div>
              <div>
                <h4 className="font-medium">Scalable Solutions</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Grow your business with flexible technology solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Transformation */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Digital Transformation</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Transform your business for the digital age. Our digital transformation services help you:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Modernize legacy systems</li>
              <li>Implement automation solutions</li>
              <li>Develop custom software solutions</li>
              <li>Integrate cloud services</li>
              <li>Enable remote work capabilities</li>
            </ul>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Transformation Areas</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Process Automation</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Streamline workflows with intelligent automation</p>
              </div>
              <div>
                <h4 className="font-medium">Cloud Migration</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Move to the cloud securely and efficiently</p>
              </div>
              <div>
                <h4 className="font-medium">Digital Workplace</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Create modern, collaborative work environments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Custom Solutions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Tailored solutions designed specifically for your business needs:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Custom software development</li>
              <li>API integration services</li>
              <li>Business process automation</li>
              <li>Data analytics solutions</li>
              <li>Mobile app development</li>
            </ul>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Development Process</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Discovery</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Understanding your unique requirements</p>
              </div>
              <div>
                <h4 className="font-medium">Design</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Creating optimal solution architecture</p>
              </div>
              <div>
                <h4 className="font-medium">Development</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Building and testing your solution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Transform Your Business Today</h2>
        <p className="text-lg mb-6">Schedule a consultation to discuss your technology needs.</p>
        <a 
          href="/contact" 
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Schedule Consultation
        </a>
      </section>
    </div>
  );
} 