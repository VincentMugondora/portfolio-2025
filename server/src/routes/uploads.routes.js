import { Router } from 'express'
import { auth } from '../middleware/auth.js'
import { uploadFile } from '../middleware/upload.js'
import { createUpload } from '../controllers/uploads.controller.js'

const router = Router()

// Admin-only generic file upload
router.post('/', auth(true), uploadFile.single('file'), createUpload)

export default router
