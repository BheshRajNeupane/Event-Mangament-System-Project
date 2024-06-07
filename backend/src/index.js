import { app }  from "./app.js";
import  dotenv from 'dotenv';

process.on('uncaughtException' , (err )=>{
    console.log(` ReferenceError : ${err.name , err.message}\n`);
   process.exit(1);
})

dotenv.config({path:'../config.env'});

if (!process.env.PORT) {
    throw new Error('Missing PORT in environment variables');
}

const port =  process.env.PORT || 3005
app.listen(port , ()=>{
    console.log(`Application running on port : ${port}`);
})

process.on('unhandledRejection' , (err)=>{
    console.error(`Uncaught Exception: ${err.name} - ${err.message}\n`);
    server.close(()=>{
        process.exit(1);
    })
})