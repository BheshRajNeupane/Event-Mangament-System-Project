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
import cookieSession from "cookie-session";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import  cors   from  "cors";
const router = express.Router();

const app = express();

app.use(cors());
   const __dirname = dirname(fileURLToPath(import.meta.url));
// const __filename = fileURLToPath(import.meta.url);
//  const __dirname = dirname(__filename);
// app.use(express.static(path.join(__dirname, '../../front-end')));

// Define a route to handle root requests
app.post(' /api/events/users/signup/', (req, res) => {
    // Send an HTML file as the response
    const data = { message: 'Hello from the backend!' };
    
    // Send the data as JSON response
    res.send(data);
    // res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

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














