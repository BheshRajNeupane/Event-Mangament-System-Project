import { AppError } from "./app-error.js "

export class NotAuthorizedError extends AppError  {
    constructor () {
               super(' Not Authorized ');    
               this.message=  '  Not Authorized ';
               this.statusCode = 401; 

    }
}