import { AppError } from "./app-error.js "

export class RequestValidationError extends AppError  {
    constructor () {
               super(' Request validation fail ');    
               this.message=  'Request validation fail ';
               this.statusCode = 400; 

    }
}