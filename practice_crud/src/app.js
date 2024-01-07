const express=require('express');
const db= require('../src/db/dbCconnection')
const app= express();
const userCollection= require("../src/model/login")

app.get("/",(req,res)=>{
    res.send("Working properly...");
})

app.post("/user",async (req,res)=>{
    try{
        const user=new userCollection(req.body);
    const dbCollectioon=await user.save();
    res.status(201).send(dbCollectioon);
    }
    catch(err){
        res.status(400).send(err);
    }
})
app.listen(8000,()=>{
    console.log("Listening at port 8000");
})