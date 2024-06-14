import { AppError } from "./app-error.js "

export class FileError extends AppError  {
    constructor () {
               super('Something is wrong ');    
               this.message=  ' Something is wrong';
               this.statusCode = 500; 

    }
}
// Handle the case where the file does not exist
 // At first : if you try to update event before creat event --> event.json file doesn't exist 
export class FileNotExist extends AppError  {
    constructor () {
               super('File doesnot exist  ');    
               this.message=  ' File doesnot exist ';
               this.statusCode =404 ; 

    }
}