import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: '' },
    techStack: [{ type: String }],
    githubUrl: { type: String, default: '' },
    demoUrl: { type: String, default: '' },
    screenshots: [{ type: String }], // URLs
  },
  { timestamps: true }
);

export default mongoose.model('Project', projectSchema);
