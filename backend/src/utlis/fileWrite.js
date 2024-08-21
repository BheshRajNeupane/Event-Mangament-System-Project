import{FileError} from "../error/file-error.js"


import { promises as fs } from 'fs';

     const createAndWrite = async (filePath, event) => {
         try {
             await fs.writeFile(filePath, JSON.stringify(event), 'utf8');
         } catch (err) {
            throw new FileError() 
         }
     };





// import fs from "fs"
  
// export const createAndwrite =   ( filePath,event) =>
//      {
//             fs.writeFile(filePath, JSON.stringify(event), 'utf8', (err) => {
//                 if (err) {
//                     throw new FileError() 
//                 }
            
//             })
//      }  

