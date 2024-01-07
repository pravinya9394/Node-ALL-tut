const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/crudDB")
.then(()=>{
    console.log("Connected to DB sucessfully...");
})
.catch((err)=>{
    console.log(`Connection failed with error ${err}`);
})