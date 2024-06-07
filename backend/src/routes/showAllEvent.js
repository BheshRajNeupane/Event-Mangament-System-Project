import express from "express";
const router = express.Router();

router.get(
    '/api/events/' , 
    async (req, res)=>{
        console.log("event show route check");



})


export { router as showRouter}