// import { AppError } from "./app-error.js "
class AppError extends Error {
    constructor (message ,statusCode) {

               super(message);
               
                this.statusCode = statusCode;
                this.message= message;
          Error.captureStackTrace(this, this.constructor);
    }
}
export class AlreadyExist extends AppError  {
    constructor () {
               super('Email is already used ');    
               this.message=  ' Email is already used';
               this.statusCode = 400; 

    }
}