// import { AppError } from "./app-error.js "
class AppError extends Error {
    constructor (message ,statusCode) {

               super(message);
               
                this.statusCode = statusCode;
                this.message= message;
          Error.captureStackTrace(this, this.constructor);
    }
}
export class NotFound extends AppError  {
    constructor () {
               super('Route not found ');    
               this.message=  'Route not found ';
               this.statusCode = 400; 

    }
}