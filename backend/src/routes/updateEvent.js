import express from "express";
import { __dirname } from "../app.js";
import { body } from "express-validator";
import { validateRequest } from "../middleware/validate-request.js";
import { updateEventValidationRules } from "../validator/update-event-rules.js";
const router = express.Router();
import { FileError ,FileNotExist} from "../error/file-error.js";
import { NotFoundError } from "../error/not-found-error.js";
import { readFile } from "../utlis/readFile.js";
import { createAndwrite } from "../utlis/fileWrite.js";
import { currentUser } from "../middleware/current-user.js";
import { authGuard } from "../middleware/auth-guard.js";
router.patch(
  "/api/events/update/:id",
  currentUser,
  authGuard,
  updateEventValidationRules,
  validateRequest,

  async (req, res, next) => {
    const filePath = `${__dirname}/model/event.json`;
    //TEST FILE
    //  const filePath = `${__dirname}/model/__test__/fake_event.json`;

    try {

      const { id } = req.params;
      const events = await readFile(filePath);
   
   // if file doesnot exist
      if(events=== 0 )
        return next(new FileNotExist())

      // If file exist but  there is no event  
      if (events.length==0) {
        return next(new NotFoundError()); 
      }

      // if event exist ,finding index of event user look for
       const index = events.findIndex((item) => item.id == id);

      if (index == -1) {
        return next(new NotFoundError()); 
      }
    
      const updatedData = {
        id: parseInt(id),
        title: req.body.title || events[index].title,
        description: req.body.description || events[index].description,
        startDate: req.body.startDate || events[index].startDate,
        endDate: req.body.endDate || events[index].endDate,
        total_no_of_participants: req.body.total_no_of_participants || events[index].total_no_of_participants,
        
      };
     // Update the event at the found index
      events[index] = { ...events[index], ...updatedData };

      //events are written in file
      await createAndwrite(filePath, events);

      res.status(200).send(updatedData);

    } catch (err) {
     
      return next(new FileError());
 
    }
  }
);

export { router as updateRouter };
