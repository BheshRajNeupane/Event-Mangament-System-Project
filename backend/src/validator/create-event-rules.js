import { body } from "express-validator";

export const createEventValidationRules = 
  [
      
    body("title").exists().withMessage("Event must have title"),
    body("description").exists().withMessage("Event must have description"),
    body("total_no_of_participants").exists()
       .isNumeric()
       .withMessage(' must be a number'),
   body('startDate').exists()
    .withMessage("Event must have  startdate"),
   body('endDate').exists()
     .withMessage("Event must have end date")
    
]
    



// Export the validation rules as an array
// export const createEventValidationRules = [
//   body("title").exists().withMessage("Event must have title"),
//   body("description").exists().withMessage("Event must have description"),
//   body("total_no_of_participants")
//     .exists()
//     .isNumeric()
//     .withMessage("Total number of participants must be a number"),
//   body("startDate").exists().withMessage("Event must have start date"),
//   body("endDate").exists().withMessage("Event must have end date"),
// ]
