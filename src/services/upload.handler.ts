import { RequestHandler } from "express";
import sharp from "sharp";
import { v4 } from "uuid";
import fs from 'node:fs/promises';

export const uploadImg: RequestHandler = async (req, res) => {    
    if(!req.file || (req.file && !req.file.mimetype.includes('image'))) {
        res.status(400).send('Bad request');
        return;
    } else {
        const newName = v4() + '.png';
        const image = await sharp(req.file.path)
            .resize({
                fit: sharp.fit.cover,
                width: 300, height: 300,
                position: 'center'
            })
            .composite([
                {
                    input: './src/assets/hired.png',
                    gravity: 'southeast'                    
                }
            ])
            .toFormat('png')
            .toFile('./public/uploads/img/' + newName);
        await fs.unlink(req.file.path);
        
    }
    res.status(201).json({ message: 'file uploaded' });
    //console.log(req.file);
};