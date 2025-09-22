import { Router } from 'express';
import { auth } from '../middleware/auth.js';
import { uploadCertificate } from '../middleware/upload.js';
import { listCertificates, createCertificate, deleteCertificate } from '../controllers/certificates.controller.js';

const router = Router();

router.get('/', listCertificates);
router.post('/', auth(true), uploadCertificate.single('file'), createCertificate);
router.delete('/:id', auth(true), deleteCertificate);

export default router;
