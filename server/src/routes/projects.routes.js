import { Router } from 'express';
import { auth } from '../middleware/auth.js';
import { listProjects, createProject, updateProject, deleteProject, getProjectBySlug } from '../controllers/projects.controller.js';

const router = Router();

router.get('/', listProjects);
router.get('/:slug', getProjectBySlug);
router.post('/', auth(true), createProject);
router.put('/:id', auth(true), updateProject);
router.delete('/:id', auth(true), deleteProject);

export default router;
