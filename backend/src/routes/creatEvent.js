import express from "express";
const router = express.Router();

router.post(
    '/api/events/create/' , 
      async (req, res)=>{
     
        console.log("event post - route check");



})
export { router as createRouter}
