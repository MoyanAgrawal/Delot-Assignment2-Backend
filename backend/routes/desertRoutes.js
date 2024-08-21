const express=require("express");
const router=express.Router();
const desert =require("../models/deserModel");

router.get("/deserts",async(req,res)=>{
    const allDeserts=await desert.find({});
    res.status(200).json(allDeserts);
})

router.post("/desert/new",async (req,res)=>{
    console.log("rqqqqqqqqqq___", req.body);
    try {
        const newDesert=await desert.create(req.body);
        res.status(200).json(newDesert);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal Server Error"});
    }
})


module.exports = router;