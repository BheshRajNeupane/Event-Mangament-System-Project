import { body } from "express-validator";

export const signinValidationRules = [
    
    body("email").isEmail().exists().withMessage("Email must be valid"),
    body("password").exists()
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ]