import dotenv from 'dotenv';
dotenv.config();
import bcrypt from 'bcryptjs';
import { connectDB } from './config/db.js';
import User from './models/User.js';

async function run() {
  await connectDB();
  const {
    ADMIN_EMAIL = 'admin@example.com',
    ADMIN_USERNAME = 'admin',
    ADMIN_PASSWORD = 'change_me_strong_password',
  } = process.env;

  let user = await User.findOne({ $or: [{ email: ADMIN_EMAIL.toLowerCase() }, { username: ADMIN_USERNAME }] });
  if (user) {
    console.log('Admin already exists:', user.username);
    process.exit(0);
  }
  const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 10);
  user = await User.create({ email: ADMIN_EMAIL.toLowerCase(), username: ADMIN_USERNAME, passwordHash });
  console.log('Admin created:', user.username);
  process.exit(0);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
