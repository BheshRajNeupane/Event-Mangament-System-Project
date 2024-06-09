import express from "express";
//  import { promises as fs } from 'fs';
  import   fs  from 'fs';
import { body } from "express-validator";
import {validateRequest }  from "../../middleware/validate-request.js";
import {signinValidationRules }  from "../../validator/signin-rules.js";
import { FileError} from "../../error/file-error.js"
import { readFile } from "../../utlis/readFile.js";
import{ BadRequestError} from "../../error/bad-req-error.js"
// import fs from "fs"
import { __dirname} from "../../app.js"
import {  createAndwrite} from "../../utlis/fileWrite.js";
import {  appendData} from "../../utlis/appendFile.js";
import { Password } from "../../utlis/password.js";
import  jwt from "jsonwebtoken"
const router = express.Router();

router.post(
    '/api/events/users/signin/' ,
    signinValidationRules, 
    validateRequest,
    async(req, res , next)=>{
        const filePath = `${__dirname}/model/user.json`;
  
        const { email, password } = req.body;
       
        const Users =  await readFile(filePath)
        const existingUser =  await Users.find((user) => user.email== email);
        if(!existingUser){
            return next( new BadRequestError())
        }
        

         // Generate JWT
    const userJwt = jwt.sign(
      {
        id: existingUser.id,
        email: existingUser.email,
      },
     process.env.JWT_KEY|| "my-key",{ expiresIn:process.env.expiresIn || '1h' }
    );

    // Store it on session object
    req.session = {
      jwt: userJwt,
    };

  

            res.status(201).send(existingUser);

  }
    

 
 )
    


export { router as signinRouter}