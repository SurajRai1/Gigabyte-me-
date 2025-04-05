'use server';

import { redirect } from 'next/navigation';

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const budget = formData.get('budget');
    const message = formData.get('message');

    // Validate required fields
    if (!firstName || !lastName || !email || !service || !message) {
      throw new Error('Please fill in all required fields');
    }

    // Here you would typically:
    // 1. Send email notification with all form data
    const formattedMessage = `
      New Contact Form Submission:
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      Service: ${service}
      Budget: ${budget || 'Not specified'}
      Message: ${message}
    `;

    // Log the formatted message (replace with your email sending logic)
    console.log(formattedMessage);

    // 2. Store in database
    // 3. Create ticket in your CRM
    // For now, we'll just simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Redirect to success page
    redirect('/contact/success');
  } catch (error) {
    // In a real application, you'd want to handle this error appropriately
    console.error('Form submission error:', error);
    throw error;
  }
} 