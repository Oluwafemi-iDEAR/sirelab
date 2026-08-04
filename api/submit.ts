import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@sanity/client";
import nodemailer from "nodemailer";

const projectId = process.env.SANITY_PROJECT_ID ?? "k35z01k6";
const dataset = process.env.SANITY_DATASET ?? "production";
const apiVersion = process.env.SANITY_API_VERSION ?? "2024-10-01";
const writeToken = process.env.SANITY_API_WRITE_TOKEN;

const gmailUser = process.env.GMAIL_USER;
const gmailPass = process.env.GMAIL_APP_PASSWORD;
const mailTo = process.env.MAIL_TO ?? gmailUser;

type Payload = {
  type?: "contact" | "subscribe";
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  botcheck?: string;
};

function isEmail(value: string) {
  return /.+@.+\..+/.test(value);
}

async function storeInSanity(type: string, data: Record<string, unknown>) {
  if (!writeToken) return;
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    token: writeToken,
    useCdn: false,
  });
  const doc: Record<string, unknown> =
    type === "subscribe"
      ? {
          _type: "subscriber",
          email: data.email,
          submittedAt: data.submittedAt,
          source: data.source,
        }
      : {
          _type: "contactMessage",
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          submittedAt: data.submittedAt,
          source: data.source,
        };
  await client.create(doc as never);
}

async function sendEmail(subject: string, text: string, replyTo?: string) {
  if (!gmailUser || !gmailPass || !mailTo) return;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailPass },
  });
  await transporter.sendMail({
    from: `SIRE Website <${gmailUser}>`,
    to: mailTo,
    replyTo,
    subject,
    text,
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const body: Payload =
    typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body ?? {};

  // Honeypot — silently accept bot submissions without doing anything.
  if (body.botcheck) return res.status(200).json({ success: true });

  const type = body.type === "subscribe" ? "subscribe" : "contact";
  const email = (body.email ?? "").trim();

  if (!email || !isEmail(email)) {
    return res.status(400).json({ success: false, error: "A valid email is required" });
  }
  if (type === "contact" && (!body.name?.trim() || !body.message?.trim())) {
    return res
      .status(400)
      .json({ success: false, error: "Name and message are required" });
  }

  const submittedAt = new Date().toISOString();
  const record = {
    name: body.name?.trim(),
    email,
    subject: body.subject?.trim(),
    message: body.message?.trim(),
    submittedAt,
    source: type === "subscribe" ? "mailing-list" : "contact-page",
  };

  const emailSubject =
    type === "subscribe"
      ? "New SIRE mailing-list signup"
      : `New SIRE contact message${record.subject ? `: ${record.subject}` : ""}`;
  const emailText =
    type === "subscribe"
      ? `New mailing-list signup\n\nEmail: ${email}\nDate: ${submittedAt}`
      : `New contact message\n\nName: ${record.name}\nEmail: ${email}\nSubject: ${
          record.subject || "(none)"
        }\n\n${record.message}\n\nDate: ${submittedAt}`;

  const results = await Promise.allSettled([
    storeInSanity(type, record),
    sendEmail(emailSubject, emailText, email),
  ]);

  const stored = results[0].status === "fulfilled" && Boolean(writeToken);
  const emailed = results[1].status === "fulfilled" && Boolean(gmailUser && gmailPass);

  results.forEach((r) => {
    if (r.status === "rejected") console.error("submit error:", r.reason);
  });

  // Succeed if the submission was captured by at least one channel.
  if (stored || emailed) {
    return res.status(200).json({ success: true, stored, emailed });
  }
  return res
    .status(500)
    .json({ success: false, error: "Submission could not be processed" });
}
