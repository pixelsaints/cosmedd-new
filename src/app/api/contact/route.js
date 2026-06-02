import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const emailTo = process.env.CONTACT_EMAIL_TO || "pixelsaints@gmail.com";
const emailFrom =
  process.env.CONTACT_EMAIL_FROM || "Cosmedd Healthcare <onboarding@resend.dev>";

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function field(label, value) {
  if (!value) return "";

  return `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#475569;font-weight:600;width:180px;">${escapeHtml(label)}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#0f172a;">${escapeHtml(value)}</td>
    </tr>
  `;
}

export async function POST(request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const data = await request.json();

  const source = data.source || "Website Form";
  const name = data.name?.trim();
  const email = data.email?.trim();
  const company = data.company?.trim();
  const country = data.country?.trim();
  const phone = data.phone?.trim();
  const productInterest = data.productInterest?.trim();
  const message = data.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email, and message." },
      { status: 400 }
    );
  }

  const subject = `New ${source} enquiry from ${name}`;
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;background:#ffffff;color:#0f172a;">
      <div style="padding:24px;background:#f8fafc;border-bottom:1px solid #e5e7eb;">
        <h2 style="margin:0 0 8px;font-size:22px;color:#0f172a;">New Cosmedd Enquiry</h2>
        <p style="margin:0;color:#64748b;">Submitted from ${escapeHtml(source)}</p>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        ${field("Name", name)}
        ${field("Email", email)}
        ${field("Company", company)}
        ${field("Country", country)}
        ${field("Phone", phone)}
        ${field("Product Interest", productInterest)}
        ${field("Message", message)}
      </table>
    </div>
  `;

  try {
    await resend.emails.send({
      from: emailFrom,
      to: emailTo,
      replyTo: email,
      subject,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Unable to send email right now." },
      { status: 500 }
    );
  }
}
