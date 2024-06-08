import express from "express";
import fs from "fs"
import { __dirname} from "../app.js"
import {FileError} from '../error/file-error.js';
const router = express.Router();

router.get(
    '/api/events/' , 
    async (req, res,next)=>{
        
        fs.readFile(`${__dirname}/model/event.json` , (err , data)=>{
         let  events;
        if(err) 
        {  
           next(new FileError()) 
        }
      
    if (data === undefined) {
        return next(new FileError());
    }

    try {
        let event = JSON.parse(data);
        res.status(200).send(event);
    } catch (error) {
        
        return next(new FileError());
    }
            
    
        })

})


export { router as showRouter}