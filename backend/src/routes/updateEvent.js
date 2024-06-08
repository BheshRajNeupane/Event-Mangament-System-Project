import express from "express";
import { __dirname } from "../app.js";
import { body } from "express-validator";
import { validateRequest } from "../middleware/validate-request.js";
const router = express.Router();
import { FileError } from "../error/file-error.js";
import { NotFoundError } from "../error/not-found-error.js";
import { readFile } from "../utlis/readFile.js";
import { createAndwrite } from "../utlis/fileWrite.js";
router.patch(
  "/api/events/update/:id",
  [
    body("title").optional().notEmpty().withMessage("Title cannot be empty"),
    body("description")
      .optional()
      .notEmpty()
      .withMessage("Description cannot be empty"),
    body("total_no_of_paticipant")
      .optional()
      .isNumeric()
      .withMessage(" must be a number"),
    body("startDate")
      .optional()
      .notEmpty()
      .withMessage("Event must have discription"),
    body("endDate")
      .optional()
      .notEmpty()
      .withMessage("Event must have discription"),
  ],
  validateRequest,

  async (req, res, next) => {
    const filePath = `${__dirname}/model/event.json`;
    try {
        const { id } = req.params;
        const events = await readFile(filePath);
        if (events.length == 0) {
          return next(new NotFoundError()); //empty
        }
        const index = events.findIndex((item) => item.id == id);
        if (index == -1) {
          return next(new NotFoundError()); //empty
        }
        // Update the item at the found index
        const updatedData = {
          id: parseInt(id),
          title: req.body.title || events[index].title,
          discription: req.body.discription || events[index].discription,
          startDate: req.body.startDate || events[index].startDate,
          endDate: req.body.endDate || events[index].endDate,
          total_no_of_paticipant:
            req.body.total_no_of_paticipant || events[index].total_no_of_paticipant,
        };
  
        events[index] = { ...events[index], ...updatedData };
        await createAndwrite(filePath, events);
        
        res.status(200).send(updatedData);
    } catch (err) {
      return next(new FileError());
    }
  }
);

export { router as updateRouter };
