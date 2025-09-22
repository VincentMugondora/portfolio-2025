import dotenv from 'dotenv'
dotenv.config()
import bcrypt from 'bcryptjs'
import { connectDB } from './config/db.js'
import User from './models/User.js'

async function run() {
  const {
    ADMIN_EMAIL,
    ADMIN_USERNAME,
    ADMIN_PASSWORD,
  } = process.env

  if (!ADMIN_EMAIL || !ADMIN_USERNAME || !ADMIN_PASSWORD) {
    console.error('Please set ADMIN_EMAIL, ADMIN_USERNAME, and ADMIN_PASSWORD in .env')
    process.exit(1)
  }

  await connectDB()

  const email = ADMIN_EMAIL.toLowerCase()
  const username = ADMIN_USERNAME
  const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 10)

  // Try to find by email first, then username
  let user = await User.findOne({ email })
  if (!user) {
    user = await User.findOne({ username })
  }

  if (user) {
    user.email = email
    user.username = username
    user.passwordHash = passwordHash
    await user.save()
    console.log('Admin user updated:', user.username)
  } else {
    user = await User.create({ email, username, passwordHash })
    console.log('Admin user created:', user.username)
  }

  process.exit(0)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
