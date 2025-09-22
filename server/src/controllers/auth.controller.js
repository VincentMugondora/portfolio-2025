import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import { signToken } from '../middleware/auth.js';

export async function login(req, res) {
  const { usernameOrEmail, password } = req.body;
  if (!usernameOrEmail || !password) return res.status(400).json({ message: 'usernameOrEmail and password are required' });
  const user = await User.findOne({ $or: [ { email: usernameOrEmail.toLowerCase() }, { username: usernameOrEmail } ] });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(401).json({ message: 'Invalid credentials' });
  const token = signToken({ id: user._id, username: user.username, email: user.email });
  res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
}

export async function me(req, res) {
  if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
  const user = await User.findById(req.user.id).select('-passwordHash');
  res.json({ user });
}
