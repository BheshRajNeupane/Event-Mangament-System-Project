import { AppError } from "./app-error.js "

export class NotFoundError extends AppError  {
    constructor () {
               super('Event not found ');    
               this.message=  'Event not found ';
               this.statusCode = 404 ; 

    }
}