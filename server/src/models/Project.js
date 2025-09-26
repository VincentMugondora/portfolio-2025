import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, unique: true, index: true },
    description: { type: String, default: '' },
    techStack: [{ type: String }],
    githubUrl: { type: String, default: '' },
    demoUrl: { type: String, default: '' },
    screenshots: [{ type: String }], // URLs
  },
  { timestamps: true }
);

function slugify(str) {
  return String(str || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
    .slice(0, 100);
}

projectSchema.pre('save', async function (next) {
  if (!this.isModified('title') && this.slug) return next();
  const base = slugify(this.title);
  if (!base) return next(new Error('Invalid title for slug'));

  let candidate = base;
  let i = 1;
  while (await mongoose.models.Project.findOne({ slug: candidate }).lean()) {
    candidate = `${base}-${i++}`;
  }
  this.slug = candidate;
  next();
});

export default mongoose.model('Project', projectSchema);
