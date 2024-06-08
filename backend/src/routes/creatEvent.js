import express from "express";
import { body } from "express-validator";
import {validateRequest }  from "../middleware/validate-request.js";
import fs from "fs"
const router = express.Router();
import { __dirname} from "../app.js"



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
  // File does not exist, create new file with the single event object
  fs.writeFile(filePath, JSON.stringify([event]), 'utf8', (err) => {
    if (err) {
      console.error('Error writing JSON data to file:', err);
      return;
    }
    console.log('File created and event added');
  })
 } 
else {
  // File exists, read existing data, append new event, and rewrite the file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      return;
    }

    const existingData = JSON.parse(data);
    existingData.push(event);
    console.log("all", existingData);

    // Rewrite the file with the updated array
    fs.writeFile(filePath, JSON.stringify(existingData), 'utf8', (err) => {
      if (err) {
        console.error('Error writing JSON data to file:', err);
        return;
      }
      console.log('New event has been appended to event.json');
    });
  });
}

res.status(201).send(event)
 
})


export { router as createRouter}