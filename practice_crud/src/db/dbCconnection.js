const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/practiceDb")
.then(()=>{
    console.log("Connection to Dd is done successfully...");
})
.catch((err)=>{
    console.log(err);
});