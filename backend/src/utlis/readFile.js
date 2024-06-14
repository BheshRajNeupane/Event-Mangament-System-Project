import { promises as fs } from 'fs';
import { __dirname} from "../app.js"
import {FileError} from '../error/file-error.js';

   export const readFile = async (filePath )=>{

    try {

        const data = await fs.readFile(filePath, 'utf8');
        const events = JSON.parse(data);
         return events;
    } catch (error) {
           // Handle the case where the file does not exist
              if (error.code === 'ENOENT') {
                    return 0
                    
             } 
        
        }
}



