import Project from '../models/Project.js';

export async function listProjects(_req, res) {
  const items = await Project.find().sort({ createdAt: -1 });
  res.json({ items });
}

export async function createProject(req, res) {
  const { title, description = '', techStack = [], githubUrl = '', demoUrl = '', screenshots = [] } = req.body;
  if (!title) return res.status(400).json({ message: 'title required' });
  const proj = await Project.create({ title, description, techStack, githubUrl, demoUrl, screenshots });
  res.status(201).json({ item: proj });
}

export async function updateProject(req, res) {
  const { id } = req.params;
  const proj = await Project.findByIdAndUpdate(id, req.body, { new: true });
  if (!proj) return res.status(404).json({ message: 'Not found' });
  res.json({ item: proj });
}

export async function deleteProject(req, res) {
  const { id } = req.params;
  const proj = await Project.findByIdAndDelete(id);
  if (!proj) return res.status(404).json({ message: 'Not found' });
  res.json({ success: true });
}
