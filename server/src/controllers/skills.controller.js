import Skill from '../models/Skill.js';

export async function listSkills(_req, res) {
  const items = await Skill.find().sort({ createdAt: -1 });
  res.json({ items });
}

export async function createSkill(req, res) {
  const { name, level = 75, category = 'General' } = req.body;
  if (!name) return res.status(400).json({ message: 'name required' });
  const item = await Skill.create({ name, level, category });
  res.status(201).json({ item });
}

export async function updateSkill(req, res) {
  const { id } = req.params;
  const item = await Skill.findByIdAndUpdate(id, req.body, { new: true });
  if (!item) return res.status(404).json({ message: 'Not found' });
  res.json({ item });
}

export async function deleteSkill(req, res) {
  const { id } = req.params;
  const item = await Skill.findByIdAndDelete(id);
  if (!item) return res.status(404).json({ message: 'Not found' });
  res.json({ success: true });
}
