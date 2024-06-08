import express from "express";
// import fs from "fs"
import { promises as fs } from 'fs';
import { __dirname} from "../app.js"
import {FileError} from '../error/file-error.js';
const router = express.Router();

router.get(
    '/api/events/' , 
    async (req, res,next)=>{

        const filePath = `${__dirname}/model/event.json`;
    
    try {

        const data = await fs.readFile(filePath, 'utf8');
        const events = JSON.parse(data);
        res.status(200).json(events);
    } catch (error) {
        if (error.code === 'ENOENT') {
        // Handle the case where the file does not exist
        return res.status(404).json({ error: 'File not found' });
        } else {
        return next(new FileError());
        }
  }

})


export { router as showRouter}
