import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { name, email, interest, message } = await request.json();

    // ── Option A: Log to console (dev/placeholder) ──────────────
    console.log('📬 New contact form submission:', { name, email, interest, message });

    // ── Option B: Send via Resend (recommended) ──────────────────
    // import { RESEND_API_KEY } from '$env/static/private';
    // const res = await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${RESEND_API_KEY}`,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     from: 'portfolio@yourdomain.com',
    //     to: 'reallyjoy@email.com',
    //     subject: `Portfolio inquiry from ${name}`,
    //     html: `
    //       <h2>New message from ${name}</h2>
    //       <p><strong>Email:</strong> ${email}</p>
    //       <p><strong>Interest:</strong> ${interest}</p>
    //       <p><strong>Message:</strong><br/>${message}</p>
    //     `
    //   })
    // });
    // if (!res.ok) throw new Error('Resend failed');

    return json({ success: true });
  } catch (err) {
    console.error(err);
    return json({ success: false }, { status: 500 });
  }
};