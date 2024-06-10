// import { AppError } from "./app-error.js "

class AppError extends Error {
    constructor (message ,statusCode) {

               super(message);
               
                this.statusCode = statusCode;
                this.message= message;
          Error.captureStackTrace(this, this.constructor);
    }
}
export class FileError extends AppError  {
    constructor () {
               super('Something is wrong ');    
               this.message=  ' Something is wrong';
               this.statusCode = 500; 

    }
}