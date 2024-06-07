import express from "express";
const router = express.Router();

router.delete(
    '/api/events/delete/:id' , 
    async (req, res)=>{
        
    console.log("event delted - route check");



})
export { router as deleteRouter}
