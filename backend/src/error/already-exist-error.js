import { AppError } from "./app-error.js "

export class AlreadyExist extends AppError  {
    constructor () {
               super('Email is already used ');    
               this.message=  ' Email is already used';
               this.statusCode = 400; 

    }
}