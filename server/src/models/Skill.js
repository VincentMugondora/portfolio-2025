import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    level: { type: Number, min: 0, max: 100, default: 75 },
    category: { type: String, default: 'General' },
  },
  { timestamps: true }
);

export default mongoose.model('Skill', skillSchema);
