import { AppError } from "./app-error.js "

export class NotAuthorizedError extends AppError  {
    constructor () {
               super('Authentication Fail ');    
               this.message=  ' Authentication Fail';
               this.statusCode = 401; 

    }
}