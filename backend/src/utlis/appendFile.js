import fs from "fs"
//import { __dirname} from "../app.js"

  export const appendData = ( filePath,event) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      throw  new FileError() 
      
    }

    const existingData = JSON.parse(data);
    existingData.push(event);

    // Rewrite the file with the updated array
    fs.writeFile(filePath, JSON.stringify(existingData), 'utf8', (err) => {
      if (err) {
        throw  new FileError() 
      }
      //console.log('New event has been appended to event.json');
    });
  });
}