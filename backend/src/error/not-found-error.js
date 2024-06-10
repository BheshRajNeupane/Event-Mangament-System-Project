// import { AppError } from "./app-error.js "
class AppError extends Error {
    constructor (message ,statusCode) {

               super(message);
               
                this.statusCode = statusCode;
                this.message= message;
          Error.captureStackTrace(this, this.constructor);
    }
}
export class NotFoundError extends AppError  {
    constructor () {
               super('Event not found ');    
               this.message=  'Event not found ';
               this.statusCode = 404 ; 

    }
}