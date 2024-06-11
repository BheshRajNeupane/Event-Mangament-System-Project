import { AppError } from "./app-error.js "

export class FileError extends AppError  {
    constructor () {
               super('Something is wrong ');    
               this.message=  ' Something is wrong';
               this.statusCode = 500; 

    }
}