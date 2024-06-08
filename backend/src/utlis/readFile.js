import { promises as fs } from 'fs';
import { __dirname} from "../app.js"
import {FileError} from '../error/file-error.js';

   export const readFile = async (filePath)=>{

    try {

        const data = await fs.readFile(filePath, 'utf8');
        const events = JSON.parse(data);
         return events;
    } catch (error) {
              if (error.code === 'ENOENT') {
                    // Handle the case where the file does not exist
                    return res.status(404).json({ error: 'File not found' });
             } else {
                    return next(new FileError());
                    }
        
        }
}
  
//     try {

//         const data = await fs.readFile(filePath, 'utf8');
//         const events = JSON.parse(data);
//         res.status(200).json(events);
//     } catch (error) {
//         if (error.code === 'ENOENT') {
//         // Handle the case where the file does not exist
//         return res.status(404).json({ error: 'File not found' });
//         } else {
//         return next(new FileError());
//         }
//   }
