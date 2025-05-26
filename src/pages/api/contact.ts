import type { NextApiRequest, NextApiResponse } from 'next';

type ContactData = {
  name: string;
  email: string;
  message: string;
};

type ResponseData = {
  message: string;
  success?: boolean;
  errors?: Record<string, string>;
};

// For production, use environment variables for credentials
// const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT || 'https://formspree.io/f/your-form-id';
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-form-id'; // Replace with your Formspree form ID

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<ResponseData>
) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Validate input data
  const { name, email, message } = req.body as ContactData;
  const errors: Record<string, string> = {};

  if (!name || name.trim() === '') {
    errors.name = 'Name is required';
  }
  
  if (!email || email.trim() === '') {
    errors.email = 'Email is required';
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!message || message.trim() === '') {
    errors.message = 'Message is required';
  }

  // Return validation errors if any
  if (Object.keys(errors).length > 0) {
    return res.status(422).json({ 
      message: 'Validation failed',
      success: false,
      errors 
    });
  }

  // Forward to Formspree or your email service of choice
  try {
    // In a real application, you might want to use a service like Nodemailer,
    // SendGrid, or Formspree to send emails
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ 
        name, 
        email, 
        message,
        _subject: `New contact from ${name} via Portfolio`,
        timestamp: new Date().toISOString()
      }),
    });

    const data = await response.json();

    if (response.ok) {
      // Successfully sent
      return res.status(200).json({ 
        message: 'Message sent successfully! I\'ll get back to you soon.',
        success: true
      });
    } else {
      // Service returned an error
      console.error('Formspree error:', data);
      return res.status(500).json({ 
        message: 'Failed to send message. Please try again later.',
        success: false
      });
    }
  } catch (error) {
    // Network or other error
    console.error('Contact API error:', error);
    return res.status(500).json({ 
      message: 'An unexpected error occurred. Please try again later.',
      success: false
    });
  }
}
