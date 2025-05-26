import type { NextApiRequest, NextApiResponse } from 'next';

// For production, use environment variables for credentials
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-form-id'; // Replace with your Formspree form ID

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing fields' });
  }
  // Forward to Formspree
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });
    if (response.ok) {
      return res.status(200).json({ message: 'Message sent!' });
    } else {
      return res.status(500).json({ message: 'Failed to send' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Failed to send' });
  }
}
