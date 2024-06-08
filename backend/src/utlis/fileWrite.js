import fs from "fs"
import{FileError} from "../error/file-error.js"

export const creatAndwrite = ( filePath,event) =>
{

     fs.writeFile(filePath, JSON.stringify([event]), 'utf8', (err) => {
      if (err) {
        throw  new FileError() 
      }
     
    })
}  