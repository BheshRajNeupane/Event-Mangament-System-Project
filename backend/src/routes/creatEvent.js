import express from "express";
import { body } from "express-validator";
import {validateRequest }  from "../middleware/validate-request.js";
const router = express.Router();
import fs from "fs"
import { __dirname} from "../app.js"

import {  creatAndwrite} from "../utlis/fileWrite.js";
import {  appendData} from "../utlis/appendFile.js";

router.post(
    '/api/events/create/' , 
    [
      
         body("title").exists().withMessage("Event must have title"),
         body("discription").exists().withMessage("Event must have discription"),
         body("total_no_of_paticipant").exists()
            .isNumeric()
            .withMessage(' must be a number'),
        body('startDate').exists()
         .withMessage("Event must have discription"),
        body('endDate').exists()
          .withMessage("Event must have discription")
         
    ],
    validateRequest,
  
     async (req, res)=>{
     const filePath = `${__dirname}/model/event.json`;

        let event= {
          id: Math.floor(Math.random() * 32),
          title:req.body.title,
          discription:req.body.discription,
          startDate:req.body.startDate,
          endDate:req.body.endDate,
          total_no_of_paticipant:req.body.total_no_of_paticipant
        }


// Check if the file exists
if (!fs.existsSync(filePath)) {
  creatAndwrite(filePath,JSON.stringify([event]))
 } 
else {
  // File exists, read existing data, append new event, and rewrite the file
  //   // Rewrite the file with the updated array
  appendData(filePath,event)
}

res.status(201).send(event)
 
})


export { router as createRouter}