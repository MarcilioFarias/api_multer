import { RequestHandler } from "express";
import sharp from "sharp";

export const uploadImg: RequestHandler = async (req, res) => {    
    if(!req.file || (req.file && !req.file.mimetype.includes('image'))) {
        res.status(400).send('Bad request');
        return;
    } else {
        await sharp(req.file.path).resize(200, 200,
            { fit: sharp.fit.cover,
                position: 'center'
            }
        ).toFile(`./public/img/${req.file.filename}.png`);
    }
    res.status(201).json({ message: 'file uploaded', image: 'http://localhost:3000/img/'+req.file.filename+'.png' });
    //console.log(req.file);
};