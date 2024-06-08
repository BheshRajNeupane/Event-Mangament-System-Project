import express from "express";
import fs from "fs"
import { __dirname} from "../app.js"

const router = express.Router();

router.get(
    '/api/events/' , 
    async (req, res)=>{


     fs.readFile(`${__dirname}/model/event.json` , (err , data)=>{
        if(err) 
        {  
            res.status(500).json({ error: 'Failed to read data file' });
        }
  
     res.status(200).json(JSON.parse(data))
    })

})


export { router as showRouter}