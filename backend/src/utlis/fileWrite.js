import{FileError} from "../error/file-error.js"
import fs from "fs"
  
export const createAndwrite =  async ( filePath,event) =>
     {
            fs.writeFile(filePath, JSON.stringify(event), 'utf8', (err) => {
                if (err) {
                    throw new FileError() 
                }
            
            })
     }  

