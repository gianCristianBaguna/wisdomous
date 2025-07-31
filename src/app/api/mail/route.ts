// create a nodemailer transporter
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// create a nodemailer api
export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, subject, message } = body

  // create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: process.env.USER_EMAIL, // sender address
    to: 'wisdomoustech@gmail.com',
    subject: subject, // Subject line
    text: 
      `name: ${name}
      email: ${email}
      subject: ${subject}
      message: ${message}
    `,
  });

  return NextResponse.json({ success: true });
}