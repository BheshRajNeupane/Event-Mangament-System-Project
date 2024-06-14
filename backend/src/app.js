import express from "express";
import bodyparser from "body-parser";
import fs from "fs"
import { createRouter } from "./routes/creatEvent.js";
import { showRouter } from "./routes/showAllEvent.js";
import { updateRouter } from "./routes/updateEvent.js";
import { deleteRouter } from "./routes/deleteEvent.js";;
import { AppError } from "./error/app-error.js"
import { errorHandler} from "./middleware/error-handler.js";
import { NotFound } from "./error/route-not-found-error.js"
import { signinRouter} from "./routes/auth/auth-signin.js"
import { signupRouter} from "./routes/auth/auth-signup.js"
import { signoutRouter} from "./routes/auth/auth-signout.js"
import session from "express-session";
import path , { dirname } from 'path';
import cors from  "cors";
import { fileURLToPath } from 'url';
const router = express.Router();



const app = express();

app.use(cors({
  origin: 'http://127.0.0.1:5500', // frontend URL
  credentials: true // Allow cookies to be sent with requests
}));

   const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join( __dirname, './../frontend' , 'home.html')))

app.use(express.json({limit:'10kb'}));
app.use(express.urlencoded({ extended: true })); 
app.use(session({
    signed: false,
    maxAge: 24 * 60 * 60 * 1000 ,
    secret:  process.env.SECRET||'my-secret-key',
    httpOnly: true,
    secure: false 

  })
);


app.get('/', (req, res) => {
  res.sendFile((path.join( __dirname, './../../front-end' , './home.html')));

});

//Auth Route
 app.use(signupRouter);
 app.use(signinRouter);
 app.use(signoutRouter);

//Event Route
app.use(createRouter);
app.use(showRouter);
app.use(updateRouter );
app.use(deleteRouter);


app.all("*",  (req, res , next) => {
  next( new NotFound())
  });

//GLOBAL ERRORHANDLER
app.use((err, req,res ,next)=>{
    errorHandler(err,req,res,next);
});


export  {app , __dirname}














