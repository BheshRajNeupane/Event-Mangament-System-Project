import { AppError } from "./app-error.js "

export class BadRequestError extends AppError  {
    constructor () {
               super('Email is already use ');    
               this.message=  ' Email is already use';
               this.statusCode = 400; 

    }
}