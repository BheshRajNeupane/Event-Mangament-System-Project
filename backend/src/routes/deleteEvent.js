import express from "express";
// import { promises as fs } from 'fs';
import fs from "fs";
import { __dirname } from "../app.js";
import { FileError,FileNotExist } from "../error/file-error.js";
import { NotFoundError } from "../error/not-found-error.js";
import { readFile } from "../utlis/readFile.js";
import { createAndwrite } from "../utlis/fileWrite.js";
import { currentUser} from "../middleware/current-user.js";
import {authGuard } from "../middleware/auth-guard.js";

const router = express.Router();

router.delete(
  "/api/events/delete/:id", 
  currentUser,
  authGuard,
async (req, res, next) => 
{

    const filePath = `${__dirname}/model/event.json`;
    //TEST FILE
    //  const filePath = `${__dirname}/model/__test__/fake_event.json`;
    try 
    {
    
      const { id } = req.params;
      const events = await readFile(filePath);
     
      // if file doesnot exist
      if(events=== 0 )
          return next(new FileNotExist())

     // If file exist but  there is no event  
      if (events.length==0) 
          return next(new NotFoundError()); //empty

      //finding deleting event
      const event = events.find((event) => event.id == id);

      if (!event) {
        return next(new NotFoundError()); //  data not found
      }

      //saving  other events 
      const data = events.filter((event) => event.id != id);
 
      //copy the events to another file , to  prevent data loss
      createAndwrite(`${__dirname}/model/event-copy.json`, data);
      //then delete
      createAndwrite(filePath, data);

      if (fs.existsSync(filePath)) {
        //delete copy file 
        fs.unlink(`${__dirname}/model/event-copy.json`, (err) => {
          if (err) {
            console.error("Error deleting the file:", err.message);
          }
           
        });
      }

      res.status(200).send({ message: "Event successfully deleted" });
    } catch (err) {
      return next(new FileError());
    }
});
export { router as deleteRouter };
