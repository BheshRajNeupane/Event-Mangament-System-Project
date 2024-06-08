import express from "express";
// import { promises as fs } from 'fs';
import fs from "fs";
import { __dirname } from "../app.js";
import { FileError } from "../error/file-error.js";
import { NotFoundError } from "../error/not-found-error.js";
import { readFile } from "../utlis/readFile.js";
import { createAndwrite } from "../utlis/fileWrite.js";
// import { }
const router = express.Router();

router.delete("/api/events/delete/:id", async (req, res, next) => {
  const filePath = `${__dirname}/model/event.json`;

  try {
    const { id } = req.params;
    const events = await readFile(filePath);

    if (events.length == 0) {
      return next(new NotFoundError()); //empty
    }

    const item = events.find((item) => item.id == id);

    if (!item) {
      return next(new NotFoundError()); //  data not found
    }
    const data = events.filter((item) => item.id != id);

    //copy the data to another file , to  prevent data loss
    createAndwrite(`${__dirname}/model/event-copy.json`, data);
    createAndwrite(filePath, data);

    if (fs.existsSync(filePath)) {
         //delete copy file
      fs.unlink(`${__dirname}/model/event-copy.json`, (err) => {
        if (err) {
          console.error("Error deleting the file:", err.message);
        }
        console.log("File deleted successfully");
      });
    } 
      
  
    res.status(200).send({ message: "Event successfully delelte" });
  } catch (err) {

    throw new FileError();
  }
});
export { router as deleteRouter };
