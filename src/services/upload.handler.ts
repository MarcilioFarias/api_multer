import { RequestHandler } from "express";

export const uploadImg: RequestHandler = (req, res) => {    
    res.send('File uploaded');
    console.log(req.file);
};