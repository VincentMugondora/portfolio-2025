import { Router } from 'express'
import { predictIntents } from '../controllers/ai.controller.js'

const router = Router()

// Public endpoint: POST /api/ai/predict-intents
router.post('/predict-intents', predictIntents)

export default router
