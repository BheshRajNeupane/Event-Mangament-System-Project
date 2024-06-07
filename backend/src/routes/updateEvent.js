import express from "express";
const router = express.Router();

router.patch(
    '/api/events/update/:id' , 
    async (req, res)=>{
        console.log("event update route check");

})

export { router as updateRouter}
