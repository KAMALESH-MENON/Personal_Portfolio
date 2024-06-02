import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email, subject, message } = await request.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "kamalcbe86@gmail.com",
      subject: subject,
      html: `<p><strong>From:</strong> ${email}</p><p>${message}</p>`,
    });

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
