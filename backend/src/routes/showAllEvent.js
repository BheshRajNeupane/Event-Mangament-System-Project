import express from "express";
// import fs from "fs"
import { promises as fs } from 'fs';
import { __dirname} from "../app.js"
import { readFile } from "../utlis/readFile.js";
import {FileError} from '../error/file-error.js';
const router = express.Router();

router.get(
    '/api/events/' , 
    async (req, res,next)=>{

        const filePath = `${__dirname}/model/event.json`;
    
    try {
            const events = await readFile(filePath)
            res.status(200).json(events);
    } catch (error) {
            return next(new FileError());
  }

})


export { router as showRouter}
