'use client';

import { useFormStatus } from 'react-dom';
import { useState } from 'react';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <span className="flex items-center gap-2">
        <span>{pending ? 'Sending...' : 'Send Message'}</span>
        {pending && (
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
      </span>
    </button>
  );
}

export default function ContactForm({ action }: { action: (formData: FormData) => Promise<void> }) {
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateForm = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    const formData = new FormData(form);
    const errors: Record<string, string> = {};

    // Required fields
    ['firstName', 'lastName', 'email', 'service', 'message'].forEach(field => {
      if (!formData.get(field)) {
        errors[field] = 'This field is required';
      }
    });

    // Email validation
    const email = formData.get('email') as string;
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Phone validation (optional)
    const phone = formData.get('phone') as string;
    if (phone && !/^\+?[\d\s-()]+$/.test(phone)) {
      errors.phone = 'Please enter a valid phone number';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!validateForm(event)) {
      event.preventDefault();
    }
  };

  return (
    <form onSubmit={handleSubmit} action={action} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
      {/* Personal Information */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Personal Information
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white ${
                formErrors.firstName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              }`}
              required
            />
            {formErrors.firstName && (
              <p className="mt-1 text-sm text-red-600">{formErrors.firstName}</p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white ${
                formErrors.lastName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              }`}
              required
            />
            {formErrors.lastName && (
              <p className="mt-1 text-sm text-red-600">{formErrors.lastName}</p>
            )}
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white ${
              formErrors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            }`}
            required
          />
          {formErrors.email && (
            <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
          )}
        </div>
        <div className="mt-6">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white ${
              formErrors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            }`}
          />
          {formErrors.phone && (
            <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>
          )}
        </div>
      </div>

      {/* Service Selection */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Service Details
        </h2>
        <div className="mb-6">
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Service Type
          </label>
          <select
            id="service"
            name="service"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white ${
              formErrors.service ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            }`}
            required
          >
            <option value="">Select a service</option>
            <optgroup label="PC Building">
              <option value="gaming-pc">Gaming PC</option>
              <option value="workstation-pc">Workstation PC</option>
              <option value="custom-pc">Custom PC Build</option>
            </optgroup>
            <optgroup label="Web Development">
              <option value="business-website">Business Website</option>
              <option value="ecommerce">E-commerce Website</option>
              <option value="custom-web-app">Custom Web Application</option>
            </optgroup>
            <optgroup label="Tech Consulting">
              <option value="basic-consulting">Basic Consultation</option>
              <option value="project-assessment">Project Assessment</option>
              <option value="ongoing-support">Ongoing Support</option>
            </optgroup>
          </select>
          {formErrors.service && (
            <p className="mt-1 text-sm text-red-600">{formErrors.service}</p>
          )}
        </div>
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Budget Range (Optional)
          </label>
          <select
            id="budget"
            name="budget"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          >
            <option value="">Select a budget range</option>
            <option value="1000-2000">$1,000 - $2,000</option>
            <option value="2000-3000">$2,000 - $3,000</option>
            <option value="3000-5000">$3,000 - $5,000</option>
            <option value="5000+">$5,000+</option>
          </select>
        </div>
      </div>

      {/* Project Details */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Project Details
        </h2>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Tell us about your project
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white ${
              formErrors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            }`}
            placeholder="Please describe your requirements, timeline, and any specific features you're looking for..."
            required
          ></textarea>
          {formErrors.message && (
            <p className="mt-1 text-sm text-red-600">{formErrors.message}</p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <SubmitButton />
      </div>
    </form>
  );
} 