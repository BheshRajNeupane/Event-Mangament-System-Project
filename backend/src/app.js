import express from "express";
import bodyparser from "body-parser";
import { createRouter } from "./routes/creatEvent.js";
import { showRouter } from "./routes/showAllEvent.js";
import { updateRouter } from "./routes/updateEvent.js";
import { deleteRouter } from "./routes/deleteEvent.js";
const app = express();

app.use(express.json({limit:'10kb'}));

app.use(createRouter);
app.use(showRouter);
app.use(updateRouter );
app.use(deleteRouter);






export  {app}














