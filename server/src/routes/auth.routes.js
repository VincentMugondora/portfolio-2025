import { Router } from 'express';
import { login, me } from '../controllers/auth.controller.js';
import { auth } from '../middleware/auth.js';

const router = Router();
router.post('/login', login);
router.get('/me', auth(true), me);

export default router;
