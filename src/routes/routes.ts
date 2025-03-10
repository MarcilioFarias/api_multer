import express from 'express';
import multer from 'multer';
import { uploadImg } from '../services/upload.handler';

const router = express.Router();
const upload = multer({ dest: 'uploads/' }).single('avatar');

router.post('/upload', upload, uploadImg);

export default router;