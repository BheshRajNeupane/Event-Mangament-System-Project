import { promises as fs } from 'fs';
import{ FileError} from "../error/file-error.js"
// import fs from "fs"


export const appendData = async (filePath, event) => {
    try {
        // Read existing data
        const data = await fs.readFile(filePath, 'utf8');
        const existingData = JSON.parse(data);
      
        existingData.push(event);
        
        // Rewrite the file with the updated array
        await fs.writeFile(filePath, JSON.stringify(existingData, null, 2), 'utf8');
    } catch (error) {
        throw new FileError();
    }
};


//-------------------*****-------------------------------//
//   export const appendData = ( filePath,event) => {
//     fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       throw  new FileError() 
      
//     }

//     const existingData = JSON.parse(data);
//     existingData.push(event);
 
//     // Rewrite the file with the updated array
//     fs.writeFile(filePath, JSON.stringify(existingData), 'utf8', (err) => {
//       if (err) {
//         throw  new FileError() 
//       }
//      //console.log('New event has been appended to event.json');
//     });
//   });
// }