  import { body } from 'express-validator';



export  const updateEventValidationRules =

     [
      body("title").optional().notEmpty().withMessage("Title cannot be empty"),
      body("description")
        .optional()
        .notEmpty()
        .withMessage("Description cannot be empty"),
      body("total_no_of_participants")
        .optional()
        .isNumeric()
        .withMessage(" must be a number"),
      body("startDate")
        .optional()
        .notEmpty()
        .withMessage("Event must have discription"),
      body("endDate")
        .optional()
        .notEmpty()
        .withMessage("Event must have discription"),
    ]
      
  