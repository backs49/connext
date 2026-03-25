'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'info@connext.co.kr';
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@connext.co.kr';

type ActionResult = { success: true } | { success: false; error: string };

// ── IR Contact Form ──

const irContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().min(1),
  message: z.string().min(1),
});

export async function submitIRContact(formData: FormData): Promise<ActionResult> {
  const parsed = irContactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    company: formData.get('company'),
    message: formData.get('message'),
  });

  if (!parsed.success) {
    return { success: false, error: 'Validation failed' };
  }

  const { name, email, company, message } = parsed.data;

  if (!resend) {
    console.log('[DEV] IR Contact submission:', parsed.data);
    return { success: true };
  }

  try {
    await resend.emails.send({
      from: `CONNEXT IR <${FROM_EMAIL}>`,
      to: NOTIFICATION_EMAIL,
      replyTo: email,
      subject: `[IR 문의] ${company} - ${name}`,
      html: `
        <h2>IR 문의가 접수되었습니다</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">이름</td><td style="padding:8px;border-bottom:1px solid #eee">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">이메일</td><td style="padding:8px;border-bottom:1px solid #eee">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">소속기관</td><td style="padding:8px;border-bottom:1px solid #eee">${company}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;vertical-align:top">문의 내용</td><td style="padding:8px;white-space:pre-wrap">${message}</td></tr>
        </table>
      `,
    });
    return { success: true };
  } catch (err) {
    console.error('Failed to send IR contact email:', err);
    return { success: false, error: 'Failed to send email' };
  }
}

// ── Partnership Form ──

const partnershipSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().min(1),
  type: z.string().min(1),
  message: z.string().min(1),
});

export async function submitPartnership(formData: FormData): Promise<ActionResult> {
  const parsed = partnershipSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    company: formData.get('company'),
    type: formData.get('type'),
    message: formData.get('message'),
  });

  if (!parsed.success) {
    return { success: false, error: 'Validation failed' };
  }

  const { name, email, company, type, message } = parsed.data;

  const typeLabels: Record<string, string> = {
    licensing: '라이선싱',
    codevelopment: '공동개발',
    cdmo: 'CDMO',
    other: '기타',
  };

  if (!resend) {
    console.log('[DEV] Partnership submission:', parsed.data);
    return { success: true };
  }

  try {
    await resend.emails.send({
      from: `CONNEXT BD <${FROM_EMAIL}>`,
      to: NOTIFICATION_EMAIL,
      replyTo: email,
      subject: `[파트너십 문의] ${typeLabels[type] || type} - ${company}`,
      html: `
        <h2>파트너십 문의가 접수되었습니다</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">이름</td><td style="padding:8px;border-bottom:1px solid #eee">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">이메일</td><td style="padding:8px;border-bottom:1px solid #eee">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">회사명</td><td style="padding:8px;border-bottom:1px solid #eee">${company}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">문의 유형</td><td style="padding:8px;border-bottom:1px solid #eee">${typeLabels[type] || type}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;vertical-align:top">문의 내용</td><td style="padding:8px;white-space:pre-wrap">${message}</td></tr>
        </table>
      `,
    });
    return { success: true };
  } catch (err) {
    console.error('Failed to send partnership email:', err);
    return { success: false, error: 'Failed to send email' };
  }
}

// ── Newsletter Subscribe ──

const newsletterSchema = z.object({
  email: z.string().email(),
});

export async function submitNewsletter(formData: FormData): Promise<ActionResult> {
  const parsed = newsletterSchema.safeParse({
    email: formData.get('email'),
  });

  if (!parsed.success) {
    return { success: false, error: 'Invalid email' };
  }

  const { email } = parsed.data;

  if (!resend) {
    console.log('[DEV] Newsletter subscription:', email);
    return { success: true };
  }

  try {
    // Add to Resend audience (if configured)
    const audienceId = process.env.RESEND_AUDIENCE_ID;
    if (audienceId) {
      await resend.contacts.create({
        audienceId,
        email,
      });
    }

    // Send confirmation notification
    await resend.emails.send({
      from: `CONNEXT <${FROM_EMAIL}>`,
      to: NOTIFICATION_EMAIL,
      subject: `[뉴스레터 구독] ${email}`,
      html: `<p>새로운 뉴스레터 구독자: <strong>${email}</strong></p>`,
    });

    return { success: true };
  } catch (err) {
    console.error('Failed to process newsletter subscription:', err);
    return { success: false, error: 'Subscription failed' };
  }
}
