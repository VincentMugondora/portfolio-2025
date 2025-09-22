import { Router } from 'express';
import { auth } from '../middleware/auth.js';
import { listProjects, createProject, updateProject, deleteProject } from '../controllers/projects.controller.js';

const router = Router();

router.get('/', listProjects);
router.post('/', auth(true), createProject);
router.put('/:id', auth(true), updateProject);
router.delete('/:id', auth(true), deleteProject);

export default router;
