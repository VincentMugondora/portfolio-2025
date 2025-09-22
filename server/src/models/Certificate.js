import mongoose from 'mongoose';

const certificateSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: '' },
    fileUrl: { type: String, required: true },
    fileType: { type: String, enum: ['image', 'pdf'], required: true },
  },
  { timestamps: true }
);

export default mongoose.model('Certificate', certificateSchema);
