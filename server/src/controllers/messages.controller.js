import Message from '../models/Message.js';
import { sendMail } from '../services/mail.js';

export async function createMessage(req, res) {
  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ message: 'name, email, message required' });
  const item = await Message.create({ name, email, message });
  // Fire-and-forget email (do not block success on email failures)
  try {
    const to = process.env.CONTACT_TO || process.env.ADMIN_EMAIL || email;
    const subject = `New portfolio message from ${name}`;
    const text = `From: ${name} <${email}>

${message}`;
    const html = `<p><strong>From:</strong> ${name} (${email})</p><p>${message.replace(/\n/g, '<br/>')}</p>`;
    await sendMail({ to, subject, text, html });
  } catch (err) {
    console.warn('Failed to send contact email:', err?.message || err);
  }
  res.status(201).json({ item });
}

export async function listMessages(_req, res) {
  const items = await Message.find().sort({ createdAt: -1 });
  res.json({ items });
}

export async function markRead(req, res) {
  const { id } = req.params;
  const item = await Message.findByIdAndUpdate(id, { read: true }, { new: true });
  if (!item) return res.status(404).json({ message: 'Not found' });
  res.json({ item });
}
