import { Router } from 'express';
import { auth } from '../middleware/auth.js';
import { listSkills, createSkill, updateSkill, deleteSkill } from '../controllers/skills.controller.js';

const router = Router();

router.get('/', listSkills);
router.post('/', auth(true), createSkill);
router.put('/:id', auth(true), updateSkill);
router.delete('/:id', auth(true), deleteSkill);

export default router;
