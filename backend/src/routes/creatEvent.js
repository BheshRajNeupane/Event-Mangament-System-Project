import express from "express";
import { body } from "express-validator";
import {validateRequest }  from "../middleware/validate-request.js";

const router = express.Router();

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
       console.log(" Testing req-validation");
      
      



})
export { router as createRouter}
