import express from 'express';
import multer from 'multer';
import { uploadImg } from '../services/upload.handler.ts';

const router = express.Router();
const upload = multer({ dest: './public/uploads/tmp' }).single('avatar');

router.post('/upload', upload, uploadImg);

export default router;