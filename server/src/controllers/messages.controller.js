import Message from '../models/Message.js';

export async function createMessage(req, res) {
  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ message: 'name, email, message required' });
  const item = await Message.create({ name, email, message });
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
