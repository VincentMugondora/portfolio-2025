import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true, index: true },
    email: { type: String, unique: true, required: true, index: true },
    passwordHash: { type: String, required: true },
    role: { type: String, default: 'admin' },
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
