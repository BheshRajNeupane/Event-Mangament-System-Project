import { validationResult } from "express-validator";
import { RequestValidationError } from "../error/request-validatioin-error.js";

export  const validateRequest = (
    req,
    res,
    next
)=>{
    const errors =  validationResult(req);
   
    if(!errors.isEmpty()){
       return  next( new RequestValidationError() );
    }
    next();
}