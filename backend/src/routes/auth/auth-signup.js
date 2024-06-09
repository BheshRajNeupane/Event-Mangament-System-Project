import express from "express";
import   fs  from 'fs';
import { body } from "express-validator";
import {validateRequest }  from "../../middleware/validate-request.js";
import {signupValidationRules }  from "../../validator/signup-rules.js";
import { FileError} from "../../error/file-error.js"
import { readFile } from "../../utlis/readFile.js";
import{ AlreadyExist} from "../../error/already-exist-error.js"
import { __dirname} from "../../app.js"
import {  createAndwrite} from "../../utlis/fileWrite.js";
import {  appendData} from "../../utlis/appendFile.js";
import { Password } from "../../utlis/password.js";
import  jwt from "jsonwebtoken"
const router = express.Router();

router.post(
    '/api/events/users/signup/' ,
    signupValidationRules, 
    validateRequest,
    async(req, res , next)=>{
        const filePath = `${__dirname}/model/user.json`;
  
        const data ={
          id: Math.floor( (Math.random()*50)),
          email: req.body.email,
          password:  await new Password().toHash(req.body.password)
        }

        
    try{
        if (!fs.existsSync(filePath)) {
        await createAndwrite(filePath,[data])
        } 
        else { 
   
            const Users =  await readFile(filePath)
            const existingUser =  await Users.find((user) => user.email== data.email);
            if(existingUser){
              return next( new AlreadyExist())
            }
            await  appendData(filePath,data)
   
        }
      }
      catch(err){
           throw new FileError()
          }

         // Generate JWT
    const userJwt = jwt.sign(
      {
        id: data.id,
        email: data.email,
      },
     process.env.JWT_KEY|| "my-key",{ expiresIn:process.env.expiresIn || '1h' }
    );

    // Store it on session object
    req.session = {
      jwt: userJwt,
    };
 

       res.status(201).send(data);

  })
    


export { router as signupRouter}