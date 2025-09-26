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

export async function getProjectBySlug(req, res) {
  const { slug } = req.params;
  const item = await Project.findOne({ slug });
  if (!item) return res.status(404).json({ message: 'Not found' });
  res.json({ item });
}

export async function updateProject(req, res) {
  const { id } = req.params;
  const doc = await Project.findById(id);
  if (!doc) return res.status(404).json({ message: 'Not found' });
  // Update allowed fields
  const fields = ['title', 'description', 'techStack', 'githubUrl', 'demoUrl', 'screenshots'];
  for (const k of fields) {
    if (k in req.body) doc[k] = req.body[k];
  }
  await doc.save(); // trigger pre-save (updates slug if title changed)
  res.json({ item: doc });
}

export async function deleteProject(req, res) {
  const { id } = req.params;
  const proj = await Project.findByIdAndDelete(id);
  if (!proj) return res.status(404).json({ message: 'Not found' });
  res.json({ success: true });
}
