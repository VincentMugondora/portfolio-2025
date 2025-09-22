import Certificate from '../models/Certificate.js';

export async function listCertificates(_req, res) {
  const items = await Certificate.find().sort({ createdAt: -1 });
  res.json({ items });
}

export async function createCertificate(req, res) {
  const { title, description = '' } = req.body;
  if (!title) return res.status(400).json({ message: 'title required' });
  if (!req.file) return res.status(400).json({ message: 'file required' });
  const fileUrl = `/uploads/certificates/${req.file.filename}`;
  const fileType = req.file.mimetype === 'application/pdf' ? 'pdf' : 'image';
  const cert = await Certificate.create({ title, description, fileUrl, fileType });
  res.status(201).json({ item: cert });
}

export async function deleteCertificate(req, res) {
  const { id } = req.params;
  const cert = await Certificate.findByIdAndDelete(id);
  if (!cert) return res.status(404).json({ message: 'Not found' });
  res.json({ success: true });
}
