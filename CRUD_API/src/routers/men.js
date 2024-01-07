const express=require('express');
const router= new express.Router();
const MensRankings= require('../models/mens')


router.get('/',async(req,res)=>{
    res.send("Hello from API home page");
 });
 
 
 // we will handle post http method here
 router.post("/mens",async (req,res)=>{
    try{
     console.log(`calling create mens entry post method with payload/body ${req.body}`);
     const user= new MensRankings(req.body);
     const insertMens=await user.save();
     console.log(`Stored collection on db ${insertMens}`)
     res.status(201).send(insertMens);
    }
    catch(err){
     console.log(`Getting below error ${err}}`)
     res.status(400).send(err);
    }
 });
 
 // get all the records
 router.get("/mens",async (req,res)=>{
     try{
         const result=await MensRankings.find({});
         res.status(201).send(result);
     }
     catch(err){
         res.status(400).send(err);
     }
 })
 
 
 // get individual collection
 
 router.get("/mens/:id",async (req,res)=>{
     try{
         const _id=req.params.id;
         const result=await MensRankings.findById({_id});
         res.status(201).send(result);
     }
     catch(err){
         res.status(400).send(err);
     }
 })
 
 
 // Patch method
 router.patch("/mens/:id",async (req,res)=>{
     try{
         const _id=req.params.id;
         const result=await MensRankings.findByIdAndUpdate(_id,req.body);
         res.status(201).send(result);
     }
     catch(err){
         res.status(400).send(err);
     }
 });
 
 
 // delete mthod
 router.delete("/mens/:id",async (req,res)=>{
     try{
         const _id=req.params.id;
         const result=await MensRankings.findByIdAndDelete(_id);
         res.status(201).send(result);
     }
     catch(err){
         res.status(400).send(err);
     }
 })
 

 module.exports=router;