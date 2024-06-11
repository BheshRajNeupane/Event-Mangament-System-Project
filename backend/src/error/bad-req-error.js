import {AppError} from "./app-error.js "

export class BadRequestError extends AppError  {
    constructor () {
               super('Invalid credentials ');    
               this.message=  ' Invalid credentials';
               this.statusCode = 400; 

    }
}