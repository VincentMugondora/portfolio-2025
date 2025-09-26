import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function createStorage(subfolder) {
  // Save under server/uploads/<subfolder> (two levels up from src/middleware)
  const dest = path.join(__dirname, '..', '..', 'uploads', subfolder);
  ensureDir(dest);
  return multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, dest),
    filename: (_req, file, cb) => {
      const safeName = file.originalname.replace(/[^a-zA-Z0-9_.-]/g, '_');
      cb(null, `${Date.now()}_${safeName}`);
    },
  });
}

export const uploadCertificate = multer({
  storage: createStorage('certificates'),
  fileFilter: (_req, file, cb) => {
    if (file.mimetype.startsWith('image/') || file.mimetype === 'application/pdf') cb(null, true);
    else cb(new Error('Only images or PDF are allowed'));
  },
  limits: { fileSize: 20 * 1024 * 1024 },
});

// Generic file upload (used by /api/uploads). Stores under uploads/files
export const uploadFile = multer({
  storage: createStorage('files'),
  fileFilter: (_req, file, cb) => {
    if (file.mimetype.startsWith('image/') || file.mimetype === 'application/pdf') cb(null, true);
    else cb(new Error('Only PNG/JPEG/WEBP images or PDF are allowed'));
  },
  // Allow up to 20MB to accommodate PDFs; image-specific 10MB check is done in controller level
  limits: { fileSize: 20 * 1024 * 1024 },
});

