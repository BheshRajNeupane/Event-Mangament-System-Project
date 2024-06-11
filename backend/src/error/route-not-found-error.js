import { AppError } from "./app-error.js "

export class NotFound extends AppError  {
    constructor () {
               super('Route not found ');    
               this.message=  'Route not found ';
               this.statusCode = 400; 

    }
}