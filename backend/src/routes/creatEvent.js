import express from "express";
//  import { promises as fs } from 'fs';
  import   fs  from 'fs';
import { body } from "express-validator";
import {validateRequest }  from "../middleware/validate-request.js";
import {createEventValidationRules }  from "../validator/create-event-rules.js";
import { FileError} from "../error/file-error.js"
// import { NotAuthorizedError} from "../error/not-authorized-error.js"
const router = express.Router();
// import fs from "fs"


import { __dirname} from "../app.js"

import {  createAndwrite} from "../utlis/fileWrite.js";
import {  appendData} from "../utlis/appendFile.js";
import { currentUser} from "../middleware/current-user.js";
import {authGuard } from "../middleware/auth-guard.js";

router.post(
    '/api/events/create/' , 
    // currentUser,
    // authGuard,
    createEventValidationRules ,
    validateRequest,
  
     async (req, res , next)=>{
     const filePath = `${__dirname}/model/fake_event.json`;
    //  const filePath = `${__dirname}/model/event.json`;
  
        let event= {
          id: Math.floor(Math.random() * 100),
          title:req.body.title,
          description:req.body.description,
          startDate:req.body.startDate,
          endDate:req.body.endDate,
          total_no_of_participants:req.body.total_no_of_participants
        }


      try{
          if (!fs.existsSync(filePath)) {
            await createAndwrite(filePath,[event])
          } 
          else {  
          await  appendData(filePath,event)
          }
      }
      catch(err){
           throw new FileError()
      }
      
res.status(201).send(event)
 
})


export { router as createRouter}
