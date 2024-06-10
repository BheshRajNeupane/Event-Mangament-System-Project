// import {AppError} from "./app-error.js "

 class AppError extends Error {
    constructor (message ,statusCode) {

               super(message);
               
                this.statusCode = statusCode;
                this.message= message;
          Error.captureStackTrace(this, this.constructor);
    }
}
export class RequestValidationError extends AppError  {
    constructor () {
               super(' Request validation fail ');    
               this.message=  'Request validation fail ';
               this.statusCode = 400; 

    }
}