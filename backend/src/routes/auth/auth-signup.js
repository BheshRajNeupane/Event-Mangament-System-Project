import express from "express";
//  import { promises as fs } from 'fs';
  import   fs  from 'fs';
import { body } from "express-validator";
import {validateRequest }  from "../../middleware/validate-request.js";
import {signupValidationRules }  from "../../validator/signup-rules.js";
import { FileError} from "../../error/file-error.js"
import { readFile } from "../../utlis/readFile.js";
import{ BadRequestError} from "../../error/bad-req-error.js"
// import fs from "fs"
import { __dirname} from "../../app.js"
import {  createAndwrite} from "../../utlis/fileWrite.js";
import {  appendData} from "../../utlis/appendFile.js";
import { Password } from "../../utlis/password.js";

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
              return next( new BadRequestError())
            }
            await  appendData(filePath,data)
   
        }

            res.status(201).send(data);

}
catch(err){
     throw new FileError()
}
    }

 
 )
    


export { router as signupRouter}