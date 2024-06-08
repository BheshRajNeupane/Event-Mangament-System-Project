import { AppError } from "./app-error.js "

export class FileError extends AppError  {
    constructor () {
               super('Something is wromg ');    
               this.message=  ' Something is wromg';
               this.statusCode = 500; 

    }
}