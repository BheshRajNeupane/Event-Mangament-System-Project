import express from "express";
import bodyparser from "body-parser";
import { createRouter } from "./routes/creatEvent.js";
import { showRouter } from "./routes/showAllEvent.js";
import { updateRouter } from "./routes/updateEvent.js";
import { deleteRouter } from "./routes/deleteEvent.js";;
import { errorHandler} from "./middleware/error-handler.js";
import { AppError } from "./error/app-error.js"
import { NotFound } from "./error/route-not-found-error.js"
import fs from "fs"
import { signupRouter} from "./routes/auth/auth-signup.js"
import { signinRouter} from "./routes/auth/auth-signin.js"
import cookieSession from "cookie-session";
const router = express.Router();
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();

 export const __dirname = dirname(fileURLToPath(import.meta.url));







app.use(express.json({limit:'10kb'}));
app.use(express.urlencoded({ extended: true })); 
app.use(
  cookieSession({
    signed: false,
  maxAge: 24 * 60 * 60 * 1000 
  })
);
//Auth Route
 app.use(signupRouter);
 app.use(signinRouter);

//Event Route
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














