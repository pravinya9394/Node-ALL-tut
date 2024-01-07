const express=require('express')
const mongoose=require('mongoose');

const user= new mongoose.Schema({
    name:String,
    Mail:String,
    Password:String
});
const userCollection=new mongoose.model("userCollection",user);
module.exports= userCollection;