import nodemailer from 'nodemailer'

let transporter = null

function getTransporter() {
  if (transporter) return transporter
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 587)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !user || !pass) {
    console.warn('SMTP credentials not fully set; email sending disabled')
    return null
  }

  transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for other ports
    auth: { user, pass },
  })
  return transporter
}

export async function sendMail({ to, subject, text, html }) {
  const t = getTransporter()
  if (!t) return { accepted: [], rejected: [to], messageId: null, disabled: true }
  const from = process.env.SMTP_FROM || `Portfolio <${process.env.SMTP_USER}>`
  const info = await t.sendMail({ from, to, subject, text, html })
  return info
}
