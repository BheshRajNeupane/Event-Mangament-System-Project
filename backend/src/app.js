import express from "express";
import bodyparser from "body-parser";
import { createRouter } from "./routes/creatEvent.js";
import { showRouter } from "./routes/showAllEvent.js";
import { updateRouter } from "./routes/updateEvent.js";
import { deleteRouter } from "./routes/deleteEvent.js";;
import { errorHandler} from "./middleware/error-handler.js";
import { AppError } from "./error/app-error.js"
import { NotFound } from "./error/route-not-found-error.js"

const app = express();

app.use(express.json({limit:'10kb'}));

app.use(createRouter);
app.use(showRouter);
app.use(updateRouter );
app.use(deleteRouter);

app.all("*",  (req, res , next) => {
  next( new NotFound())
  });

app.use((err, req,res ,next)=>{
    errorHandler(err,req,res,next);
});



export  {app}














