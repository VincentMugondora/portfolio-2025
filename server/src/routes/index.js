import { Router } from 'express';
import authRoutes from './auth.routes.js';
import projectRoutes from './projects.routes.js';
import certificateRoutes from './certificates.routes.js';
import skillRoutes from './skills.routes.js';
import messageRoutes from './messages.routes.js';
import uploadRoutes from './uploads.routes.js';
import aiRoutes from './ai.routes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/projects', projectRoutes);
router.use('/certificates', certificateRoutes);
router.use('/skills', skillRoutes);
router.use('/messages', messageRoutes);
router.use('/uploads', uploadRoutes);
router.use('/ai', aiRoutes);

export default router;
