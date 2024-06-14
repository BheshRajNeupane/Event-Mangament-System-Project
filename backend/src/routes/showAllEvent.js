import express from "express";
// import fs from "fs"
import { promises as fs } from "fs";
import { __dirname } from "../app.js";
import { readFile } from "../utlis/readFile.js";
import { FileError , FileNotExist } from "../error/file-error.js";
import { NotFoundError} from "../error/not-found-error.js"
import { FilterEventsClass } from "../utlis/filter-event.js";
import { currentUser } from "../middleware/current-user.js";
import { authGuard } from "../middleware/auth-guard.js";

const router = express.Router();

router.get("/api/events/", 
currentUser, 
authGuard,
 async (req, res, next) => {
  const filePath = `${__dirname}/model/event.json`;
  //TEST FILE
  //  const filePath = `${__dirname}/model/__test__/fake_event.json`;

  try
   {
      let events = await readFile(filePath);

     //if try to read before create event , file doesn't(event.json) exist
      if(events === 0 )
        return next(new FileNotExist())

      //file exist but there is no event  
      if(events.length==0)
      return next(new NotFoundError()) 
     
          
      //filter events based on ?query
      events = new FilterEventsClass(events, req.query)
        .filter()
        .getFilteredEvents();

      res.status(200).json(events);
  } catch (error) {
    return next(new FileError());
  }
});

export { router as showRouter };
