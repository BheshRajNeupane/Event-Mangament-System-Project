// import {AppError} from "./app-error.js "
class AppError extends Error {
    constructor (message ,statusCode) {

               super(message);
               
                this.statusCode = statusCode;
                this.message= message;
          Error.captureStackTrace(this, this.constructor);
    }
}
export class BadRequestError extends AppError  {
    constructor () {
               super('Invalid credentials ');    
               this.message=  ' Invalid credentials';
               this.statusCode = 400; 

    }
}