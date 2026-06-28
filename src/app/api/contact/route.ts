import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const TO = process.env.CONTACT_EMAIL!;

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { firstName, lastName, email, company, service, message } = await req.json();

  if (!firstName || !email || !message || !service) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'Agnelo Software Contact <no-reply@agnelosoftware.com>',
    to: TO,
    reply_to: email,
    subject: `New inquiry: ${service}`,
    text: [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : '',
      `Service: ${service}`,
      '',
      message,
    ].filter(Boolean).join('\n'),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
