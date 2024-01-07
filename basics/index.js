// const express = require('express');
// const fetch = require('cross-fetch');
// const app = express();
// const path= require('path');

// const staticPath= path.join(__dirname,"../public");
// console.log(path.join(__dirname,"../public"));
// app.use(express.static(staticPath));

// // app.get('/', async (req, res) => {
// //     try {
// //         const response = await fetch(`https://jsonplaceholder.typicode.com/todos/12`);
// //         const data = await response.json();
// //         console.log(data);
// //     } catch (error) {
// //         console.error('Error fetching data:', error);
// //         res.status(500).send('Internal Server Error');
// //     }
// // });

// app.use(express.static("/Users/pravinya.k.in/Desktop/Node_tut/public"));
// app.get("/",(req,res)=>{
//     res.send("hello from express server");
// })

// app.listen(8000, () => {
//     console.log('Listening at port 8000');
// });

const { create } = require("domain");
const mongoose = require("mongoose");
const { Db } = require("typeorm");

mongoose
  .connect("mongodb://localhost:27017/dummyDb")
  .then(() => {
    console.log("Connection sucessfull....");
  })
  .catch(err => {
    console.log(err);
  });

// Scema definition
const playListSchema = new mongoose.Schema({
  name: String,
  ctype: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now
  }
});
// // collection creation using model
const Playlist = new mongoose.model("Playlist", playListSchema);
// const createDocument = async()=>{
//   try{
//     const reactPlaylist= new Playlist({
//       name: "Node.js",
//       ctype:"Backend",
//       videos:50,
//       author:"Pravinya K.",
//       active:true,
//     })
//     const result=await reactPlaylist.save();
//     console.log(result);
//   }
//   catch(err){
//     console.log(err);
//   }
// }
// createDocument();

// read from Db with query
const getDocument = async () => {
  try {
    const result = await Playlist.find({ videos: { $lte: 50 } })
      // .select({name:1,ctype:1,videos:1})
      // .limit(2)
      .countDocuments();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
getDocument();

// update collection
const updateDocument = async _id => {
  try{
    const result = await Playlist.updateOne({ _id: "658d8e6773cccc83b517e914" },{
      $set:{
        name:"TypeScript"
      }
    });
    console.log(result,"collection updated succesfully...");
  }
  catch(err){
    console.log(err);
  }
};
updateDocument();

// delete collection
const deleteCollection=async(_id)=>{
  try{
    const result=await Playlist.deleteOne({_id:"658d8e6773cccc83b517e914"});
    console.log(result,"Collection deleted successfully.. with id", _id);
  }
  catch(err){
    console.log(err);
  }
}
deleteCollection();