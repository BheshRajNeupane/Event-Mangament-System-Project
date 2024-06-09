import express from "express";
// import fs from "fs"
import { promises as fs } from 'fs';
import { __dirname} from "../app.js"
import { readFile } from "../utlis/readFile.js";
import {FileError} from '../error/file-error.js';
import { FilterEventsClass} from "../utlis/filter-event.js"
const router = express.Router();

router.get(
    '/api/events/' , 
    async (req, res,next)=>{

        const filePath = `${__dirname}/model/event.json`;
    
    try {

        let events = await readFile(filePath)
           events = new FilterEventsClass(events, req. query)
                   .filter()
                   .getFilteredEvents();
  
            res.status(200).json(events);

    } catch (error) {
            return next(new FileError());
  }

})


export { router as showRouter}
