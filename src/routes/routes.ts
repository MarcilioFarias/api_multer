import express from 'express';
import multer from 'multer';
import { writeTxt, updateList } from '../services/createFile';


const router = express.Router();
const upload = multer({ dest: 'uploads/' });


router.post('/upload', upload.single('photo'), (req, res) => {
    res.send('File uploaded');
    console.log(req.file);
});

export default router;

router.get('/record', async (req, res) => {
    const user = req.query.user as string;
    await updateList(user);
    console.log(user);
    res.status(201).json({ message: user });
});