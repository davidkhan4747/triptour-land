import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'triptoura@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD, // Нужно создать пароль приложения в настройках Gmail
  },
});

const translations = {
  subject: {
    uz: 'Yangi tur uchun ariza',
    ru: 'Новая заявка на тур',
    en: 'New Tour Request'
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, phone, email, message, tourName, tourPrice, language } = req.body;

    // Email to company
    await transporter.sendMail({
      from: 'triptour.uz@gmail.com',
      to: 'triptour.uz@gmail.com',
      subject: translations.subject[language as keyof typeof translations.subject],
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #672C8E;">${translations.subject[language as keyof typeof translations.subject]}</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Tour:</strong> ${tourName || 'Not specified'}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Price:</strong> $${tourPrice || 'Not specified'}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
            <p><strong>Language:</strong> ${language}</p>
          </div>
        </div>
      `
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}
