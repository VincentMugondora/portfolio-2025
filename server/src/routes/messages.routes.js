import { Router } from 'express';
import { auth } from '../middleware/auth.js';
import { createMessage, listMessages, markRead } from '../controllers/messages.controller.js';
import { contactLimiter } from '../middleware/ratelimit.js';

const router = Router();

router.post('/', contactLimiter, createMessage);
router.get('/', auth(true), listMessages);
router.patch('/:id/read', auth(true), markRead);

export default router;
